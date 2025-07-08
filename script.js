document.addEventListener('DOMContentLoaded', () => {
    // Recomendações e Textos de Diagnóstico (sem alterações)
    const recomendacaoCritico = `<h3>Seu Plano de Ação Recomendado</h3><p>Seu diagnóstico aponta <strong>riscos operacionais e financeiros imediatos</strong>. A parceria com a <strong>Techcomp</strong> garante:</p><ul class="beneficios-lista"><li>🛑 Interrupção das suas perdas financeiras por paradas no sistema.</li><li>⚡ Estabilização imediata da sua rede para garantir as vendas.</li><li>🛡️ Proteção para seus equipamentos contra falhas inesperadas.</li><li>👨‍💻 Acesso ao nosso suporte técnico especializado para emergências.</li></ul><a href="https://wa.me/558481878563?text=Olá!%20Recebi%20meu%20diagnóstico%20e%20ele%20foi%20CRÍTICO.%20Preciso%20de%20ajuda." target="_blank" class="cta-whatsapp">Fale agora com um especialista no WhatsApp</a><p class="fechamento">Deixe a Techcomp cuidar da sua tecnologia para que você possa focar no que realmente importa: seu negócio.</p>`;
    const recomendacaoIntermediario = `<h3>Seu Plano de Ação Recomendado</h3><p>Seu diagnóstico aponta que sua operação funciona, mas com <strong>vulnerabilidades que podem se tornar problemas graves</strong>. A parceria com a <strong>Techcomp</strong> garante:</p><ul class="beneficios-lista"><li>⚙️ Otimização da sua rede para acabar com a lentidão nos horários de pico.</li><li>📈 Previsibilidade para que você evite futuras falhas e custos extras.</li><li>🔒 Aumento da segurança do seu negócio contra riscos digitais.</li><li>😌 Mais tranquilidade para você e sua equipe focarem nos clientes.</li></ul><a href="https://wa.me/558481878563?text=Olá!%20Recebi%20meu%20diagnóstico%20e%20ele%20foi%20INTERMEDIÁRIO.%20Quero%20saber%20como%20melhorar." target="_blank" class="cta-whatsapp">Fale agora com um especialista no WhatsApp</a><p class="fechamento">Deixe-nos te ajudar a encontrar a tranquilidade que você merece.</p>`;
    const recomendacaoSaudavel = `<h3>Seu Plano de Ação Estratégico</h3><p>Parabéns! Você já tem uma infraestrutura de TI sólida. Para empresas como a sua, o próximo passo é evoluir. A parceria com a <strong>Techcomp</strong> garante:</p><ul class="beneficios-lista"><li>🚀 Evolução da sua estrutura para um novo patamar de segurança e inteligência.</li><li>📊 Geração de dados e insights para suas decisões comerciais mais assertivas.</li><li>🛡️ Blindagem completa para seu negócio com nossas soluções avançadas (SEGCOMP).</li><li>🥇 Manutenção da sua vantagem competitiva no mercado.</li></ul><a href="https://wa.me/558481878563?text=Olá!%20Recebi%20meu%20diagnóstico%20e%20ele%20foi%20SAUDÁVEL.%20Quero%20conhecer%20os%20próximos%20passos." target="_blank" class="cta-whatsapp">Fale agora com um especialista no WhatsApp</a><p class="fechamento">Vamos juntos garantir que sua operação continue sendo referência.</p>`;
    const diagnosticoTextos = {A:{A:{A:{geral:"🟢 Estrutura Saudável",pilar1:"Parabéns, você possui um excelente controle sobre seus equipamentos, alertando sobre riscos antes que virem problemas. Isso demonstra um alto nível de maturidade em TI e protege sua operação de paradas inesperadas.",pilar2:"Sua rede é um diferencial competitivo. Por ser estável e priorizar o que é crítico, você garante que sua operação flua sem interrupções, mesmo nos horários de pico, e que nenhuma venda seja perdida por falhas de conexão.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoSaudavel},B:{geral:"🟢 Estrutura Saudável",pilar1:"Parabéns, você possui um excelente controle sobre seus equipamentos, alertando sobre riscos antes que virem problemas. Isso demonstra um alto nível de maturidade em TI e protege sua operação de paradas inesperadas.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que a operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoSaudavel},C:{geral:"🟠 Estrutura Intermediária",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que a operation flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoIntermediario}},B:{A:{geral:"🟢 Estrutura Saudável",pilar1:"Parabéns, você possui um excelente controle sobre seus equipamentos, alertando sobre riscos antes que virem problemas. Isso demonstra um alto nível de maturidade em TI e protege sua operação de paradas inesperadas.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoSaudavel},B:{geral:"🟠 Estrutura Intermediária",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoIntermediario},C:{geral:"🟠 Estrutura Intermediária",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoIntermediario}},C:{A:{geral:"🟠 Estrutura Intermediária",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoIntermediario},B:{geral:"🟠 Estrutura Intermediária",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoIntermediario},C:{geral:"🔴 Estrutura Crítica",pilar1:"Você possui um excelente controle sobre seus equipamentos, o que é um ponto muito forte. No entanto, esse esforço pode ser em vão se a sua base não for cuidada.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}}},B:{A:{A:{geral:"🟢 Estrutura Saudável",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede é um diferencial competitivo. Por ser estável e priorizar o que é crítico, você garante que sua operação flua sem interrupções, mesmo nos horários de pico, e que nenhuma venda seja perdida por falhas de conexão.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoSaudavel},B:{geral:"🟠 Estrutura Intermediária",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que sua operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoIntermediario},C:{geral:"🟠 Estrutura Intermediária",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que sua operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoIntermediario}},B:{A:{geral:"🟠 Estrutura Intermediária",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoIntermediario},B:{geral:"🟠 Estrutura Intermediária",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoIntermediario},C:{geral:"🔴 Estrutura Crítica",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}},C:{A:{geral:"🟠 Estrutura Intermediária",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoIntermediario},B:{geral:"🔴 Estrutura Crítica",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoCritico},C:{geral:"🔴 Estrutura Crítica",pilar1:"Confiar apenas na percepção da sua equipe para identificar falhas é uma abordagem reativa. Problemas 'silenciosos', como um disco rígido prestes a falhar, podem não ser notados por você até que seja tarde demais e a operação pare.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}}},C:{A:{A:{geral:"🟠 Estrutura Intermediária",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede é um diferencial competitivo. Por ser estável e priorizar o que é crítico, você garante que sua operação flua sem interrupções, mesmo nos horários de pico, e que nenhuma venda seja perdida por falhas de conexão.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoIntermediario},B:{geral:"🟠 Estrutura Intermediária",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que a operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoIntermediario},C:{geral:"🔴 Estrutura Crítica",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede é estável, o que é ótimo para o negócio. Isso garante que a operação flua sem interrupções na maior parte do tempo e que as vendas não sejam frequentemente perdidas por problemas de conexão.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}},B:{A:{geral:"🟠 Estrutura Intermediária",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoIntermediario},B:{geral:"🔴 Estrutura Crítica",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoCritico},C:{geral:"🔴 Estrutura Crítica",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"As instabilidades ocasionais na sua rede são um ponto de atenção. Embora pareçam pequenas, essas falhas geram lentidão, afetam a experiência do seu cliente e podem representar riscos de segurança para você.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}},C:{A:{geral:"🔴 Estrutura Crítica",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Excelente! Sua rotina de manutenção preventiva garante que seus equipamentos e sistemas operem sempre com a máxima performance e segurança, evitando surpresas e custos desnecessários.",recomendacao:recomendacaoCritico},B:{geral:"🔴 Estrutura Crítica",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"Sua manutenção interna, ainda que reativa, mostra uma preocupação com a saúde dos equipamentos. No entanto, depender de 'sobrar tempo' pode gerar sobrecarga e não cobrir todas as necessidades de forma preventiva.",recomendacao:recomendacaoCritico},C:{geral:"🔴 Estrutura Crítica",pilar1:"Atualmente, você só descobre uma falha quando sua operação já parou. Este é o cenário de maior risco, pois cada minuto com o sistema inativo se traduz diretamente em perda de faturamento e na confiança do seu cliente.",pilar2:"Sua rede instável é o principal gargalo do seu negócio. As quedas e a lentidão frequentes causam perda de vendas para você, estresse na equipe e danos à reputação da sua empresa.",pilar3:"A ausência de manutenção preventiva é o ponto mais crítico da sua estrutura. Seus equipamentos, mesmo os melhores, podem falhar a qualquer momento sem aviso, comprometendo toda a sua operação.",recomendacao:recomendacaoCritico}}}};

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
    let dadosDoLead = null; // Váriavel para guardar os dados do lead para o PDF

    // Função para remover emojis
    function removerEmojis(texto) {
        if (!texto) return "";
        const regex = /(\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{Emoji_Component})/gu;
        return texto.replace(regex, '').trim();
    }

    // Evento do formulário principal
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

    // Evento do formulário do modal
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const urlDoScript = "https://script.google.com/macros/s/AKfycbyg17yd1ppXzv0-scE2Fo7McbpnUSzQlhq2kDs2luSLwb4M6-dGv-p2cqfPzRcBydei/exec";

        const submitButton = e.target.querySelector('button[type="submit"]');
        const formData = new FormData(leadForm);
        
        // Salva os dados do lead para usar no PDF depois
        dadosDoLead = {
            nome: formData.get('nome'),
            empresa: formData.get('empresa'),
            email: formData.get('email'),
            whatsapp: formData.get('whatsapp'),
        };

        const { resp1, resp2, resp3 } = respostasSalvas;
        diagnosticoAtual = diagnosticoTextos[resp1][resp2][resp3];
        
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
            const resultadoHTML = `<h2>Diagnóstico Personalizado</h2><div id="diagnostico-geral" class="${getClasseEstilo(diagnosticoAtual.geral)}">${diagnosticoAtual.geral}</div><div class="pilar-resultado"><h3>Pilar 1: Monitoramento de Equipamentos</h3><p>${diagnosticoAtual.pilar1}</p></div><div class="pilar-resultado"><h3>Pilar 2: Conectividade / Internet</h3><p>${diagnosticoAtual.pilar2}</p></div><div class="pilar-resultado"><h3>Pilar 3: Manutenção Preventiva</h3><p>${diagnosticoAtual.pilar3}</p></div><div id="recomendacao-final">${diagnosticoAtual.recomendacao}</div>`;
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

    // Evento do botão PDF atualizado para passar os dados do lead
    pdfBtn.addEventListener('click', function() {
        if (diagnosticoAtual && dadosDoLead) {
            gerarEBaixarPDF(diagnosticoAtual, dadosDoLead);
        } else {
            alert("Por favor, gere um diagnóstico primeiro para depois salvar em PDF.");
        }
    });


    // ===================================================================
    // FUNÇÃO DE GERAR PDF (VERSÃO FINAL COM BRANDING)
    // ===================================================================
    function gerarEBaixarPDF(diagnostico, leadData) {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

            let y = 20;
            const margin = 15;
            const maxWidth = doc.internal.pageSize.getWidth() - (margin * 2);
            const lineHeight = 6;

            // --- Nova Função para Adicionar Rodapé ---
            const addFooter = () => {
                const pageCount = doc.internal.getNumberOfPages();
                for (let i = 1; i <= pageCount; i++) {
                    doc.setPage(i); // Muda para a página i
                    const pageHeight = doc.internal.pageSize.getHeight();
                    const pageWidth = doc.internal.pageSize.getWidth();
                    
                    doc.setFontSize(9);
                    doc.setFont('helvetica', 'italic');
                    doc.setTextColor(128);

                    // Linha do rodapé
                    doc.line(margin, pageHeight - 18, pageWidth - margin, pageHeight - 18);

                    // Texto da empresa
                    const footerText = "Relatório gerado pela Techcomp, uma empresa do Grupo Ecomp.";
                    doc.text(footerText, margin, pageHeight - 10);

                    // Numeração da página
                    const pageStr = `Página ${i} de ${pageCount}`;
                    doc.text(pageStr, pageWidth - margin, pageHeight - 10, { align: 'right' });
                }
            };

            const checkPageBreak = (alturaNecessaria) => {
                if (y + alturaNecessaria > doc.internal.pageSize.getHeight() - 25) { // Deixa mais espaço para o rodapé
                    doc.addPage();
                    y = margin;
                }
            };
            
            // --- Título Personalizado ---
            doc.setFontSize(22);
            doc.setFont("helvetica", "bold");
            doc.setTextColor("#1e3a8a");
            doc.text("Diagnóstico de Infraestrutura de TI", doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
            y += 8;

            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(100); // cinza
            doc.text(`Relatório para: ${leadData.empresa}`, doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
            y += 15;
            

            // Status Geral
            const statusGeralLimpo = removerEmojis(diagnostico.geral).replace('Estrutura', '').trim();
            doc.setFontSize(14);
            if (diagnostico.geral.includes("Crítica")) doc.setTextColor(192, 0, 0);
            else if (diagnostico.geral.includes("Intermediária")) doc.setTextColor(245, 128, 40);
            else doc.setTextColor(34, 139, 34);
            doc.text(statusGeralLimpo, doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
            y += 15;
            doc.setDrawColor("#e2e8f0");
            doc.line(margin, y - 7, doc.internal.pageSize.getWidth() - margin, y - 7);
            doc.setTextColor(0, 0, 0);

            // Seções dos Pilares
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
                doc.setTextColor("#333333");
                doc.text(linhas, margin, y);
                y += (linhas.length * lineHeight) + lineHeight;
            };
            adicionarSecaoSimples("Pilar 1: Monitoramento de Equipamentos", diagnostico.pilar1);
            adicionarSecaoSimples("Pilar 2: Conectividade / Internet", diagnostico.pilar2);
            adicionarSecaoSimples("Pilar 3: Manutenção Preventiva", diagnostico.pilar3);

            // Seção de Recomendação
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = diagnostico.recomendacao;
            tempDiv.childNodes.forEach(node => {
                const textoOriginal = node.innerText;
                if (!textoOriginal || textoOriginal.trim() === "" || node.tagName === 'A') return;
                const textoLimpo = removerEmojis(textoOriginal).trim();
                if (node.tagName === 'H3') {
                    const linhas = doc.splitTextToSize(textoLimpo, maxWidth);
                    checkPageBreak(10 + (linhas.length * lineHeight));
                    doc.setFontSize(13); doc.setFont("helvetica", "bold"); doc.setTextColor("#1e3a8a");
                    doc.text(linhas, margin, y);
                    y += (linhas.length * lineHeight) + (lineHeight / 2);
                }
                if (node.tagName === 'P') {
                    const linhas = doc.splitTextToSize(textoLimpo, maxWidth);
                    checkPageBreak(5 + (linhas.length * lineHeight));
                    doc.setFontSize(11); doc.setFont("helvetica", node.classList.contains('fechamento') ? "italic" : "normal"); doc.setTextColor("#333333");
                    doc.text(linhas, margin, y);
                    y += (linhas.length * lineHeight) + lineHeight;
                }
                if (node.tagName === 'UL') {
                    y += lineHeight / 2;
                    Array.from(node.children).forEach(liNode => {
                        const textoDoItem = removerEmojis(liNode.innerText).trim();
                        if (!textoDoItem) return;
                        const linhas = doc.splitTextToSize(textoDoItem, maxWidth - 5);
                        checkPageBreak(5 + (linhas.length * lineHeight));
                        doc.setFontSize(11); doc.setFont("helvetica", "normal"); doc.setTextColor("#333333");
                        doc.text("•", margin, y);
                        doc.text(linhas, margin + 5, y);
                        y += (linhas.length * lineHeight) + (lineHeight / 2);
                    });
                    y += lineHeight;
                }
            });

            // Adiciona o rodapé em todas as páginas ANTES de salvar
            addFooter();
            
            // Salva o arquivo
            doc.save(`Diagnostico_TI_${leadData.empresa.replace(/\s/g, '_')}.pdf`);

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
});