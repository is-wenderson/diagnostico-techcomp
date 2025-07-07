document.addEventListener('DOMContentLoaded', () => {

    const recomendacaoCritico = `<h3>Seu Plano de Ação Recomendado</h3><p>Seu diagnóstico aponta <strong>riscos operacionais e financeiros imediatos</strong>. A parceria com a <strong>Techcomp</strong> garante:</p><ul class="beneficios-lista"><li>🛑 Interrupção das suas perdas financeiras por paradas no sistema.</li><li>⚡ Estabilização imediata da sua rede para garantir as vendas.</li><li>🛡️ Proteção para seus equipamentos contra falhas inesperadas.</li><li>👨‍💻 Acesso ao nosso suporte técnico especializado para emergências.</li></ul><a href="https://wa.me/558481878563?text=Olá!%20Recebi%20meu%20diagnóstico%20e%20ele%20foi%20CRÍTICO.%20Preciso%20de%20ajuda." target="_blank" class="cta-whatsapp">Fale agora com um especialista no WhatsApp</a><p class="fechamento">Deixe a Techcomp cuidar da sua tecnologia para que você possa focar no que realmente importa: seu negócio.</p>`;
    const recomendacaoIntermediario = `<h3>Seu Plano de Ação Recomendado</h3><p>Seu diagnóstico aponta que sua operação funciona, mas com <strong>vulnerabilidades que podem se tornar problemas graves</strong>. A parceria com a <strong>Techcomp</strong> garante:</p><ul class="beneficios-lista"><li>⚙️ Otimização da sua rede para acabar com a lentidão nos horários de pico.</li><li>📈 Previsibilidade para que você evite futuras falhas e custos extras.</li><li>🔒 Aumento da segurança do seu negócio contra riscos digitais.</li><li>😌 Mais tranquilidade para você e sua equipe focarem nos clientes.</li></ul><a href="https://wa.me/558481878563?text=Olá!%20Recebi%20meu%20diagnóstico%20e%20ele%20foi%20INTERMEDIÁRIO.%20Quero%20saber%20como%20melhorar." target="_blank" class="cta-whatsapp">Fale agora com um especialista no WhatsApp</a><p class="fechamento">Deixe-nos te ajudar a encontrar a tranquilidade que você merece.</p>`;
    const recomendacaoSaudavel = `<h3>Seu Plano de Ação Estratégico</h3><p>Parabéns! Você já tem uma infraestrutura de TI sólida. Para empresas como a sua, o próximo passo é evoluir. A parceria com a <strong>Techcomp</strong> garante:</p><ul class="beneficios-lista"><li>🚀 Evolução da sua estrutura para um novo patamar de segurança e inteligência.</li><li>📊 Geração de dados e insights para suas decisões comerciais mais assertivas.</li><li>🛡️ Blindagem completa para seu negócio com nossas soluções avançadas (SEGCOMP).</li><li>🥇 Manutenção da sua vantagem competitiva no mercado.</li></ul><a href="https://wa.me/558481878563?text=Olá!%20Recebi%20meu%20diagnóstico%20e%20ele%20foi%20SAUDÁVEL.%20Quero%20conhecer%20os%20próximos%20passos." target="_blank" class="cta-whatsapp">Fale agora com um especialista no WhatsApp</a><p class="fechamento">Vamos juntos garantir que sua operação continue sendo referência.</p>`;

    const diagnosticoTextos = {A:{A:{A:{geral:"🟢 Estrutura Saudável",pilar1:"Parabéns, você possui um excelente controle sobre seus equipamentos, alertando sobre riscos antes que virem problemas. Isso demonstra um alto nível de maturidade em TI e protege sua operação de paradas inesperadas.",pilar2:"Sua rede é um diferencial competitivo. Por ser estável e priorizar o que é crítico, você garante que sua operação flua sem interrupções, mesmo nos horários de pico, e que nenhuma venda seja perdida por falhas de conexão.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoSaudavel},B:{geral:"🟢 Estrutura Saudável",pilar1:"Parabéns, você possui um excelente controle sobre seus equipamentos, alertando sobre riscos antes que virem problemas. Isso demonstra um alto nível de maturidade em TI e protege sua operação de paradas inesperadas.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que a operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoSaudavel},C:{geral:"🟠 Intermediário",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que a operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoIntermediario}},B:{A:{geral:"🟢 Estrutura Saudável",pilar1:"Parabéns, você possui um excelente controle sobre seus equipamentos, alertando sobre riscos antes que virem problemas. Isso demonstra um alto nível de maturidade em TI e protege sua operação de paradas inesperadas.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoSaudavel},B:{geral:"🟠 Intermediário",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoIntermediario},C:{geral:"🟠 Intermediário",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoIntermediario}},C:{A:{geral:"🟠 Intermediário",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoIntermediario},B:{geral:"🟠 Intermediário",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoIntermediario},C:{geral:"🔴 Crítico",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}}},B:{A:{A:{geral:"🟢 Estrutura Saudável",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede é um diferencial competitivo. Por ser estável e priorizar o que é crítico, você garante que sua operação flua sem interrupções, mesmo nos horários de pico, e que nenhuma venda seja perdida por falhas de conexão.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoSaudavel},B:{geral:"🟠 Intermediário",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que a operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoIntermediario},C:{geral:"🟠 Intermediário",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que a operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoIntermediario}},B:{A:{geral:"🟠 Intermediário",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoIntermediario},B:{geral:"🟠 Intermediário",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoIntermediario},C:{geral:"🔴 Crítico",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}},C:{A:{geral:"🟠 Intermediário",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoIntermediario},B:{geral:"🔴 Crítico",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoCritico},C:{geral:"🔴 Crítico",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}}},C:{A:{A:{geral:"🟠 Intermediário",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede é um diferencial competitivo. Por ser estável e priorizar o que é crítico, você garante que sua operação flua sem interrupções, mesmo nos horários de pico, e que nenhuma venda seja perdida por falhas de conexão.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoIntermediario},B:{geral:"🟠 Intermediário",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que a operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoIntermediario},C:{geral:"🔴 Crítico",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que a operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}},B:{A:{geral:"🟠 Intermediário",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoIntermediario},B:{geral:"🔴 Crítico",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoCritico},C:{geral:"🔴 Crítico",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}},C:{A:{geral:"🔴 Crítico",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoCritico},B:{geral:"🔴 Crítico",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoCritico},C:{geral:"🔴 Crítico",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}}}};
            
    const form = document.getElementById('formulario');
    const divDiagnostico = document.getElementById('diagnostico');
    const gerarBtn = document.getElementById('gerar-btn');
    const pdfBtn = document.getElementById('pdf-btn');
    let diagnosticoAtual = null;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        
            const resp1 = form.querySelector('input[name="pergunta1"]:checked')?.value;
            const resp2 = form.querySelector('input[name="pergunta2"]:checked')?.value;
            const resp3 = form.querySelector('input[name="pergunta3"]:checked')?.value;

            if (!resp1 || !resp2 || !resp3) {
                alert("Por favor, responda a todas as perguntas para gerar o diagnóstico.");
                return;
            }
            
            diagnosticoAtual = diagnosticoTextos[resp1][resp2][resp3];
            
            const resultadoHTML = `
                <h2>Diagnóstico Personalizado</h2>
                <div id="diagnostico-geral" class="${getClasseEstilo(diagnosticoAtual.geral)}">
                    ${diagnosticoAtual.geral}
                </div>
                <div class="pilar-resultado">
                    <h3>Pilar 1: Monitoramento de Equipamentos</h3>
                    <p>${diagnosticoAtual.pilar1}</p>
                </div>
                <div class="pilar-resultado">
                    <h3>Pilar 2: Conectividade / Internet</h3>
                    <p>${diagnosticoAtual.pilar2}</p>
                </div>
                <div class="pilar-resultado">
                    <h3>Pilar 3: Manutenção Preventiva</h3>
                    <p>${diagnosticoAtual.pilar3}</p>
                </div>
                <div id="recomendacao-final">
                    ${diagnosticoAtual.recomendacao}
                </div>
            `;
            
            divDiagnostico.innerHTML = resultadoHTML;
            divDiagnostico.style.display = "block";
            gerarBtn.style.display = 'none';
            pdfBtn.style.display = 'inline-block';
            divDiagnostico.scrollIntoView({ behavior: 'smooth', block: 'start' });

        
    });

    pdfBtn.addEventListener('click', function() {
        if (diagnosticoAtual) {
            gerarEBaixarPDF(diagnosticoAtual);
        } else {
            alert("Por favor, gere um diagnóstico primeiro para depois salvar em PDF.");
        }
    });

    // Função que usa jsPDF para criar o PDF de forma programática e confiável
    function gerarEBaixarPDF(diagnostico) {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

            let y = 20;
            const margin = 15;
            const maxWidth = doc.internal.pageSize.getWidth() - (margin * 2);

            doc.setFontSize(20);
            doc.setFont("helvetica", "bold");
            doc.setTextColor("#1e3a8a");
            doc.text("Diagnóstico de Infraestrutura de TI", doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
            y += 15;

            doc.setFontSize(14);
            if (diagnostico.geral.includes("Crítico")) doc.setTextColor(192, 0, 0);
            else if (diagnostico.geral.includes("Intermediário")) doc.setTextColor(245, 128, 40);
            else doc.setTextColor(34, 139, 34);
            doc.text(diagnostico.geral, doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
            y += 15;
            doc.setDrawColor("#e2e8f0");
            doc.line(margin, y - 7, doc.internal.pageSize.getWidth() - margin, y - 7);
            
            doc.setTextColor(0, 0, 0);

            function adicionarSecao(titulo, texto) {
                if (y > doc.internal.pageSize.getHeight() - 40) {
                    doc.addPage();
                    y = 20;
                }
                doc.setFontSize(13);
                doc.setFont("helvetica", "bold");
                doc.setTextColor("#1e3a8a");
                doc.text(titulo, margin, y);
                y += 8;

                doc.setFontSize(11);
                doc.setFont("helvetica", "normal");
                doc.setTextColor("#333333");
                const linhas = doc.splitTextToSize(texto, maxWidth);
                doc.text(linhas, margin, y);
                y += (linhas.length * 5) + 10;
            }

            adicionarSecao("Pilar 1: Monitoramento de Equipamentos", diagnostico.pilar1);
            adicionarSecao("Pilar 2: Conectividade / Internet", diagnostico.pilar2);
            adicionarSecao("Pilar 3: Manutenção Preventiva", diagnostico.pilar3);
            
            // Limpa o HTML da recomendação para extrair apenas o texto para o PDF
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = diagnostico.recomendacao;
            const recomendacaoText = tempDiv.innerText || tempDiv.textContent || "";
            adicionarSecao("Seu Plano de Ação Recomendado", recomendacaoText.replace("Fale agora com um especialista no WhatsApp", "")); // Remove o botão do texto

            doc.save('Diagnostico_TI_Techcomp.pdf');
        } catch (error) {
            console.error("Erro ao gerar o PDF:", error);
            alert("Desculpe, ocorreu um erro ao tentar gerar o PDF. Por favor, verifique o console de erros ou contate o suporte.");
        }
    }

    function getClasseEstilo(textoGeral) {
         if (textoGeral.includes("Crítico")) return 'critico';
         if (textoGeral.includes("Intermediário")) return 'intermediario';
         if (textoGeral.includes("Saudável")) return 'saudavel';
         return '';
    }
});