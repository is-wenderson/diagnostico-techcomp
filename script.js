document.addEventListener('DOMContentLoaded', () => {
    // A inicialização da aplicação agora começa aqui
    iniciarAplicacao();
});

async function iniciarAplicacao() {
    try {
        // Carrega os textos do arquivo JSON
        const response = await fetch('diagnosticos.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const textos = await response.json();

        // Passa os textos carregados para a função principal que configura os eventos
        configurarDiagnostico(textos);

    } catch (error) {
        console.error("Não foi possível carregar os textos do diagnóstico:", error);
        alert("Erro ao carregar dados essenciais da aplicação. Por favor, recarregue a página.");
    }
}

function configurarDiagnostico(textos) {
    // Seletores de elementos
    const form = document.getElementById('formulario');
    const divDiagnostico = document.getElementById('diagnostico');
    const gerarBtn = document.getElementById('gerar-btn');
    const pdfBtn = document.getElementById('pdf-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const leadForm = document.getElementById('lead-form');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const whatsappInput = document.getElementById('whatsapp');

    let diagnosticoAtual = null;
    let respostasSalvas = {};
    let dadosDoLead = null;

    function removerEmojis(texto) {
        if (!texto) return "";
        const regex = /(\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{Emoji_Component})/gu;
        return texto.replace(regex, '').trim();
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const resp1 = form.querySelector('input[name="pergunta1"]:checked')?.value;
        const resp2 = form.querySelector('input[name="pergunta2"]:checked')?.value;
        const resp3 = form.querySelector('input[name="pergunta3"]:checked')?.value;

        if (!resp1 || !resp2 || !resp3) {
            alert("Por favor, responda a todas as perguntas para gerar o diagnóstico.");
            return;
        }

        respostasSalvas = { resp1, resp2, resp3 };
        modalOverlay.classList.add('visivel');
    });

    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const urlDoScript = "https://script.google.com/macros/s/AKfycbyg17yd1ppXzv0-scE2Fo7McbpnUSzQlhq2kDs2luSLwb4M6-dGv-p2cqfPzRcBydei/exec";
        const submitButton = e.target.querySelector('button[type="submit"]');
        const formData = new FormData(leadForm);

        dadosDoLead = {
            nome: formData.get('nome'),
            empresa: formData.get('empresa'),
            email: formData.get('email'),
            whatsapp: formData.get('whatsapp'),
        };

        const { resp1, resp2, resp3 } = respostasSalvas;
        diagnosticoAtual = textos.diagnosticos[resp1][resp2][resp3];
        
        const statusDiagnostico = removerEmojis(diagnosticoAtual.geral).replace('Estrutura', '').trim();
        const stringRespostas = `${resp1}${resp2}${resp3}`;

        formData.append('diagnostico', statusDiagnostico);
        formData.append('respostas', stringRespostas);

        submitButton.disabled = true;
        submitButton.textContent = "Salvando...";

        fetch(urlDoScript, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                console.log("Dados e diagnóstico salvos na planilha com sucesso!");
            } else {
                console.error("Erro ao salvar na planilha:", data.error);
            }
        })
        .catch(error => {
            console.error('Erro no envio do formulário:', error);
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = "Ver meu Diagnóstico Agora";
            fecharModal();
            
            const refRecomendacao = diagnosticoAtual.refRecomendacao;
            const recomendacaoHTML = textos.recomendacoes[refRecomendacao];

            const resultadoHTML = `<h2>Diagnóstico Personalizado</h2><div id="diagnostico-geral" class="${getClasseEstilo(diagnosticoAtual.geral)}">${diagnosticoAtual.geral}</div><div class="pilar-resultado"><h3>Pilar 1: Monitoramento de Equipamentos</h3><p>${diagnosticoAtual.pilar1}</p></div><div class="pilar-resultado"><h3>Pilar 2: Conectividade / Internet</h3><p>${diagnosticoAtual.pilar2}</p></div><div class="pilar-resultado"><h3>Pilar 3: Manutenção Preventiva</h3><p>${diagnosticoAtual.pilar3}</p></div><div id="recomendacao-final">${recomendacaoHTML}</div>`;
            divDiagnostico.innerHTML = resultadoHTML;
            divDiagnostico.style.display = "block";
            gerarBtn.style.display = 'none';
            pdfBtn.style.display = 'inline-block';
            divDiagnostico.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    function fecharModal() {
        modalOverlay.classList.remove('visivel');
    }
    modalCloseBtn.addEventListener('click', fecharModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            fecharModal();
        }
    });

    whatsappInput.addEventListener('input', (e) => {
        let valor = e.target.value.replace(/\D/g, '');
        valor = valor.substring(0, 11);
        let formatado = '';
        if (valor.length > 0) { formatado = '(' + valor.substring(0, 2); }
        if (valor.length > 2) { formatado += ') ' + valor.substring(2, 7); }
        if (valor.length > 7) { formatado += '-' + valor.substring(7, 11); }
        e.target.value = formatado;
    });

    pdfBtn.addEventListener('click', function() {
        if (diagnosticoAtual && dadosDoLead) {
            const refRecomendacao = diagnosticoAtual.refRecomendacao;
            const recomendacaoHTML = textos.recomendacoes[refRecomendacao];
            gerarEBaixarPDF(diagnosticoAtual, recomendacaoHTML, dadosDoLead);
        } else {
            alert("Por favor, gere um diagnóstico primeiro para depois salvar em PDF.");
        }
    });

function gerarEBaixarPDF(diagnostico, recomendacaoHTML, leadData) {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

        const margin = 15;
        const maxWidth = doc.internal.pageSize.getWidth() - margin * 2;
        const lineHeight = 6;
        let y = 55; // após header

        const headerHeight = 40;
        const logoUrl = "https://i.postimg.cc/vBwH7FMm/image-psd.png";

        const addHeader = async () => {
            return new Promise(resolve => {
                const img = new Image();
                img.onload = () => {
                    const pageWidth = doc.internal.pageSize.getWidth();
                    doc.setFillColor(49, 134, 149); // fallback cor do gradiente
                    doc.rect(0, 0, pageWidth, headerHeight, 'F');
                    doc.addImage(img, 'PNG', (pageWidth - 30) / 2, 5, 30, 30);
                    resolve();
                };
                img.crossOrigin = "";
                img.src = logoUrl;
            });
        };

        const addFooter = () => {
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i);
                const pageHeight = doc.internal.pageSize.getHeight();
                const pageWidth = doc.internal.pageSize.getWidth();
                doc.setFontSize(9);
                doc.setFont('helvetica', 'italic');
                doc.setTextColor(120);
                doc.line(margin, pageHeight - 18, pageWidth - margin, pageHeight - 18);
                doc.text("Relatório gerado pela Techcomp, uma empresa do Grupo Ecomp.", margin, pageHeight - 10);
                doc.text(`Página ${i} de ${pageCount}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
            }
        };

        const checkPageBreak = (alturaNecessaria) => {
            if (y + alturaNecessaria > doc.internal.pageSize.getHeight() - 25) {
                doc.addPage();
                y = margin + 10;
            }
        };

        const adicionarSecaoSimples = (titulo, texto) => {
            const textoLimpo = removerEmojis(texto).trim();
            const linhas = doc.splitTextToSize(textoLimpo, maxWidth);
            checkPageBreak(10 + (linhas.length * lineHeight));
            doc.setFontSize(13);
            doc.setFont("helvetica", "bold");
            doc.setTextColor("#1e3a8a");
            doc.text(titulo, margin, y);
            y += lineHeight * 1.5;
            doc.setFontSize(11);
            doc.setFont("helvetica", "normal");
            doc.setTextColor("#333");
            doc.text(linhas, margin, y);
            y += (linhas.length * lineHeight) + lineHeight;
        };

        const buildContent = () => {
            // Título principal
            doc.setFontSize(18);
            doc.setFont("helvetica", "bold");
            doc.setTextColor("#1e3a8a");
            doc.text("Diagnóstico de Infraestrutura de TI", doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
            y += 10;

            // Empresa
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(80);
            doc.text(`Relatório para: ${leadData.empresa}`, doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
            y += 12;

            // Status geral
            const statusGeralLimpo = removerEmojis(diagnostico.geral).replace('Estrutura', '').trim();
            doc.setFontSize(14);
            if (diagnostico.geral.includes("Crítica")) doc.setTextColor(192, 0, 0);
            else if (diagnostico.geral.includes("Intermediária")) doc.setTextColor(245, 128, 40);
            else doc.setTextColor(34, 139, 34);
            doc.text(statusGeralLimpo, doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
            y += 10;

            // Separador
            doc.setDrawColor("#e2e8f0");
            doc.line(margin, y, doc.internal.pageSize.getWidth() - margin, y);
            y += 10;

            // Pilares
            adicionarSecaoSimples("Pilar 1: Monitoramento de Equipamentos", diagnostico.pilar1);
            adicionarSecaoSimples("Pilar 2: Conectividade / Internet", diagnostico.pilar2);
            adicionarSecaoSimples("Pilar 3: Manutenção Preventiva", diagnostico.pilar3);

            // Recomendação final
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = recomendacaoHTML;
            tempDiv.childNodes.forEach(node => {
                const textoOriginal = node.innerText;
                if (!textoOriginal || textoOriginal.trim() === "" || node.tagName === 'A') return;
                const textoLimpo = removerEmojis(textoOriginal).trim();
                const linhas = doc.splitTextToSize(textoLimpo, maxWidth);

                if (node.tagName === 'H3') {
                    checkPageBreak(10 + (linhas.length * lineHeight));
                    doc.setFontSize(13);
                    doc.setFont("helvetica", "bold");
                    doc.setTextColor("#1e3a8a");
                    doc.text(linhas, margin, y);
                    y += (linhas.length * lineHeight) + 2;
                }
                if (node.tagName === 'P') {
                    checkPageBreak(10 + (linhas.length * lineHeight));
                    doc.setFontSize(11);
                    doc.setFont("helvetica", node.classList.contains('fechamento') ? "italic" : "normal");
                    doc.setTextColor("#333333");
                    doc.text(linhas, margin, y);
                    y += (linhas.length * lineHeight) + 2;
                }
                if (node.tagName === 'UL') {
                    y += lineHeight / 2;
                    Array.from(node.children).forEach(liNode => {
                        const textoDoItem = removerEmojis(liNode.innerText).trim();
                        if (!textoDoItem) return;
                        const linhas = doc.splitTextToSize(textoDoItem, maxWidth - 5);
                        checkPageBreak(5 + (linhas.length * lineHeight));
                        doc.setFontSize(11);
                        doc.setFont("helvetica", "normal");
                        doc.setTextColor("#333333");
                        doc.text("•", margin, y);
                        doc.text(linhas, margin + 5, y);
                        y += (linhas.length * lineHeight) + 2;
                    });
                    y += lineHeight;
                }
            });
        };

        addHeader().then(() => {
            buildContent();
            addFooter();
            const nomeArquivo = `Diagnostico_TI_${leadData.empresa.replace(/\s/g, '_')}.pdf`;
            doc.save(nomeArquivo);
        });

    } catch (error) {
        console.error("Erro ao gerar o PDF:", error);
        alert("Desculpe, ocorreu um erro ao tentar gerar o PDF. Por favor, verifique o console de erros ou contate o suporte.");
    }
}


    function getClasseEstilo(textoGeral) {
        if (textoGeral.includes("Crítica")) return 'critico';
        if (textoGeral.includes("Intermediária")) return 'intermediario';
        if (textoGeral.includes("Saudável")) return 'saudavel';
        return '';
    }
}