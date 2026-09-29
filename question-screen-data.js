/**
 * Conteúdo da Trilha NR-01 — Manual de Integração e Segurança do Trabalho
 * Tipos: cover | content | quiz-intro | question | finale
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR-01 — Manual de Integração e Segurança do Trabalho",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    {
      id: 1,
      title: "Fundamentos da Segurança, Cultura Organizacional, Regras de Ouro e Gestão de Riscos (NR-1)",
      objective: "Apresentar a cultura de segurança da empresa, as diretrizes inegociáveis de comportamento, conceitos de risco, responsabilidades legais, atuação da CIPA e consequências do descumprimento de normas.",
      titleUnlock: {
        title: "GUARDIÃO DA CULTURA",
        body: "Você conhece as Regras de Ouro, distingue atos e condições inseguras e sabe reportar desvios.",
        icon: "🛡️"
      },
      screens: [
        {
          id: "m1-capa",
          type: "cover",
          title: "Módulo 1 — Fundamentos da Segurança, Cultura Organizacional, Regras de Ouro e Gestão de Riscos (NR-1)",
          subtitle: "Apresentar a cultura de segurança da empresa, estabelecendo as diretrizes inegociáveis de comportamento, conceitos de risco, responsabilidades legais, atuação da CIPA e consequências do descumprimento de normas.",
          image: "assets/fotos/capa-modulo1.png",
          transcript: "Módulo um. Fundamentos da Segurança, Cultura Organizacional, Regras de Ouro e Gestão de Riscos, N R um. Apresentar a cultura de segurança da empresa, estabelecendo as diretrizes inegociáveis de comportamento, conceitos de risco, responsabilidades legais, atuação da CIPA e consequências do descumprimento de normas."
        },
        {
          id: "m1-lema",
          type: "content",
          fit: true,
          kicker: "📄 Cultura",
          title: "Pessoas Primeiro e Segurança Primeiro",
          body: "O lema institucional guia cada decisão no chão da loja e do depósito: Human First, Safety First.",
          cards: [
            { icon: "❤️", title: "Pessoas Primeiro", body: "Nenhuma meta operacional vale mais do que a vida e a integridade de quem está na operação." },
            { icon: "🛡️", title: "Segurança Primeiro", body: "O trabalho só começa quando o risco está controlado." },
            { icon: "🗣️", title: "Comportamento inegociável", body: "As regras de ouro não são sugestão: são o padrão mínimo de conduta." },
            { icon: "📋", title: "Política de SSO", body: "A Política de Segurança e Saúde Ocupacional organiza o compromisso da empresa com esse lema." }
          ],
          quote: "Pessoas Primeiro e Segurança Primeiro — Human First, Safety First.",
          transcript: "Pessoas Primeiro e Segurança Primeiro. O lema institucional guia cada decisão no chão da loja e do depósito: Human First, Safety First. Pessoas Primeiro: nenhuma meta operacional vale mais do que a vida e a integridade de quem está na operação. Segurança Primeiro: o trabalho só começa quando o risco está controlado. Comportamento inegociável: as regras de ouro não são sugestão, são o padrão mínimo de conduta. Política de SSO: a Política de Segurança e Saúde Ocupacional organiza o compromisso da empresa com esse lema. Pessoas Primeiro e Segurança Primeiro, Human First, Safety First."
        },
        {
          id: "m1-principios",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Os 7 Princípios da Política de SSO",
          playerId: "panda-1139796b-bf63-4204-8735-9d7447294534",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=1139796b-bf63-4204-8735-9d7447294534",
          transcript: "Vídeo. Os sete princípios da Política de SSO. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m1-regras-1",
          type: "content",
          layout: "golden",
          kicker: "📄 Regras de Ouro",
          title: "As 10 Regras de Ouro — parte 1",
          body: "São o padrão inegociável de segurança no dia a dia.",
          cards: [
            { icon: "1", title: "Proteção do corpo", body: "Cabeça, rosto, mãos e pés sempre protegidos." },
            { icon: "2", title: "Máquinas e equipamentos", body: "Operar e usar somente de forma segura." },
            { icon: "3", title: "Empilhadeiras", body: "Condução e direção responsáveis." },
            { icon: "4", title: "Estocagem", body: "Armazenamento seguro de produtos." },
            { icon: "5", title: "Escadas", body: "Proibido celular. Uso obrigatório do corrimão." }
          ],
          quote: "Regra quebrada é risco assumido — e risco assumido vira acidente.",
          transcript: "As dez Regras de Ouro, parte um. São o padrão inegociável de segurança no dia a dia. Um, proteção do corpo: cabeça, rosto, mãos e pés sempre protegidos. Dois, máquinas e equipamentos: operar e usar somente de forma segura. Três, empilhadeiras: condução e direção responsáveis. Quatro, estocagem: armazenamento seguro de produtos. Cinco, escadas: proibido celular. Uso obrigatório do corrimão. Regra quebrada é risco assumido, e risco assumido vira acidente."
        },
        {
          id: "m1-regras-2",
          type: "content",
          layout: "golden",
          kicker: "📄 Regras de Ouro",
          title: "As 10 Regras de Ouro — parte 2",
          body: "As cinco regras seguintes fecham o padrão de conduta em loja e depósito.",
          cards: [
            { icon: "6", title: "Combate a incêndio", body: "Garantir acesso a equipamentos e saídas de emergência." },
            { icon: "7", title: "Trabalho em altura", body: "Plataformas e escadas com isolamento obrigatório de corredores." },
            { icon: "8", title: "Estilete", body: "Uso exclusivo de estiletes homologados pela empresa." },
            { icon: "9", title: "Reporte imediato", body: "Acidentes, incidentes e ameaças vão à liderança na hora." },
            { icon: "10", title: "Atenção constante", body: "Cuidar da própria segurança, dos colegas e dos clientes." }
          ],
          quote: "Aplicar as 10 Regras de Ouro no dia a dia é o principal aprendizado deste módulo.",
          transcript: "As dez Regras de Ouro, parte dois. As cinco regras seguintes fecham o padrão de conduta em loja e depósito. Seis, combate a incêndio: garantir acesso a equipamentos e saídas de emergência. Sete, trabalho em altura: plataformas e escadas com isolamento obrigatório de corredores. Oito, estilete: uso exclusivo de estiletes homologados pela empresa. Nove, reporte imediato: acidentes, incidentes e ameaças vão à liderança na hora. Dez, atenção constante: cuidar da própria segurança, dos colegas e dos clientes. Aplicar as dez Regras de Ouro no dia a dia é o principal aprendizado deste módulo."
        },
        {
          id: "m1-competencia-atos",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Competência Profissional, Atos e Condições Inseguras",
          playerId: "panda-4da57544-d40e-4f96-a696-9c73d99623a6",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4da57544-d40e-4f96-a696-9c73d99623a6",
          transcript: "Vídeo. Competência profissional, atos e condições inseguras. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m1-piramide",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Pirâmide de Desvios, Meta Zero e Foco Total",
          playerId: "panda-784f1db4-3ac9-4f12-a6c6-b20c490ed51a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=784f1db4-3ac9-4f12-a6c6-b20c490ed51a",
          transcript: "Vídeo. Pirâmide de desvios, meta zero e foco total. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m1-desvios",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Comunicação de Desvios, Sanções Disciplinares (NR-1) e a CIPA",
          playerId: "panda-c1fae7b4-a5a7-4503-96c5-19857cf96b79",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c1fae7b4-a5a7-4503-96c5-19857cf96b79",
          transcript: "Vídeo. Comunicação de desvios, sanções disciplinares da N R um e a CIPA. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m1-desafio",
          type: "quiz-intro",
          title: "Desafio NR-01 — Módulo 1",
          count: 3,
          minCorrect: 2,
          icon: "🎮",
          transcript: "Desafio N R zero um, módulo um. Responda três perguntas de múltipla escolha. Você precisa acertar no mínimo duas para avançar."
        },
        {
          id: "m1-p1",
          type: "question",
          image: "assets/fotos/m1=p1.png",
          imageAlt: "Equipe em conversa de segurança na loja",
          question: "Qual é o lema institucional de segurança?",
          alternatives: [
            { id: "a", text: "Produção primeiro, segurança depois", correct: false },
            { id: "b", text: "Pessoas Primeiro e Segurança Primeiro (Human First, Safety First)", correct: true },
            { id: "c", text: "Só a liderança responde pela segurança", correct: false },
            { id: "d", text: "Segurança é opcional se a loja estiver cheia", correct: false }
          ],
          explanation: "O lema é Pessoas Primeiro e Segurança Primeiro — Human First, Safety First.",
          review: "O lema institucional de segurança",
          transcript: "Qual é o lema institucional de segurança? Opção um: produção primeiro, segurança depois. Opção dois: Pessoas Primeiro e Segurança Primeiro, Human First, Safety First. Opção três: só a liderança responde pela segurança. Opção quatro: segurança é opcional se a loja estiver cheia."
        },
        {
          id: "m1-p2",
          type: "question",
          image: "assets/fotos/m1=p2.png",
          imageAlt: "Colaborador demonstrando competência na atividade",
          question: "O que é competência, neste treinamento?",
          alternatives: [
            { id: "a", text: "Ter cargo de liderança", correct: false },
            { id: "b", text: "Saber o quê, para quê e como realizar as atividades", correct: true },
            { id: "c", text: "Memorizar o organograma da CIPA", correct: false },
            { id: "d", text: "Trabalhar rápido sem perguntar", correct: false }
          ],
          explanation: "Competência é saber o quê, para quê e como fazer a atividade com segurança.",
          review: "O conceito de competência",
          transcript: "O que é competência, neste treinamento? Opção um: ter cargo de liderança. Opção dois: saber o quê, para quê e como realizar as atividades. Opção três: memorizar o organograma da CIPA. Opção quatro: trabalhar rápido sem perguntar."
        },
        {
          id: "m1-p3",
          type: "question",
          image: "assets/fotos/m1=p3.png",
          imageAlt: "Situação de ato inseguro e condição insegura",
          question: "Qual é a diferença entre ato inseguro e condição insegura?",
          alternatives: [
            { id: "a", text: "São a mesma coisa", correct: false },
            { id: "b", text: "Ato é o que a pessoa faz; condição é o que o ambiente ou o equipamento permite", correct: true },
            { id: "c", text: "Condição insegura só existe depois do acidente", correct: false },
            { id: "d", text: "Ato inseguro só vale para máquinas", correct: false }
          ],
          explanation: "Ato ou comportamento inseguro é a ação da pessoa. Condição insegura é o ambiente ou o equipamento fora do padrão.",
          review: "Atos inseguros versus condições inseguras",
          transcript: "Qual é a diferença entre ato inseguro e condição insegura? Opção um: são a mesma coisa. Opção dois: ato é o que a pessoa faz; condição é o que o ambiente ou o equipamento permite. Opção três: condição insegura só existe depois do acidente. Opção quatro: ato inseguro só vale para máquinas."
        }
      ]
    },
    {
      id: 2,
      title: "Gestão de Ocorrências, Emergências, Incêndios e Saúde Ocupacional (PCMSO & Viva Bem)",
      objective: "Capacitar o aluno a classificar e comunicar acidentes imediatamente, agir com segurança em incêndio e evacuação, e utilizar os programas de saúde física e mental do SESMT.",
      titleUnlock: {
        title: "PRIMEIRO A AGIR",
        body: "Você classifica ocorrências, comunica no fluxo oficial e sabe evacuar sem pânico.",
        icon: "🚨"
      },
      screens: [
        {
          id: "m2-capa",
          type: "cover",
          title: "Módulo 2 — Gestão de Ocorrências, Emergências, Incêndios e Saúde Ocupacional",
          subtitle: "Classificar e comunicar acidentes imediatamente, agir em incêndio e evacuação, e usar os programas do SESMT, PCMSO e Viva Bem.",
          image: "assets/fotos/capa-modulo2.png",
          transcript: "Módulo dois. Gestão de Ocorrências, Emergências, Incêndios e Saúde Ocupacional. Classificar e comunicar acidentes imediatamente, agir em incêndio e evacuação, e usar os programas do SESMT, PCMSO e Viva Bem."
        },
        {
          id: "m2-ocorrencias",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Classificação de Ocorrências e Fluxo de Comunicação (Moki)",
          playerId: "panda-850593ca-a315-482b-a429-4b78e12af5f6",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=850593ca-a315-482b-a429-4b78e12af5f6",
          transcript: "Vídeo. Classificação de ocorrências e fluxo de comunicação no Moki. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m2-casos",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Estudos de Caso: Aprendendo com Ocorrências Reais",
          playerId: "panda-c1f5996f-5143-4d0f-ba2f-efe66587b91a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c1f5996f-5143-4d0f-ba2f-efe66587b91a",
          transcript: "Vídeo. Estudos de caso: aprendendo com ocorrências reais. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m2-incendio",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Equipamentos de Incêndio, Desobstrução e Segurança Patrimonial",
          playerId: "panda-0958bf75-2e56-4c9e-a1dc-a3dab0cd9d32",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0958bf75-2e56-4c9e-a1dc-a3dab0cd9d32",
          transcript: "Vídeo. Equipamentos de incêndio, desobstrução e segurança patrimonial. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m2-equip-incendio",
          type: "content",
          layout: "figure",
          wide: true,
          kicker: "📄 Emergência",
          title: "Equipamentos de combate a incêndio",
          body: "Manter desobstruídos: saídas de emergência, extintores, hidrantes, detectores de fumaça e sprinklers.",
          image: "assets/fotos/EMERGENCIA.png",
          imageAlt: "Extintor, alarme, sprinkler, hidrante e caixa de mangueira",
          cards: [
            { icon: "🚪", title: "Saídas", body: "Rotas e portas de emergência sempre livres." },
            { icon: "🧯", title: "Extintor", body: "Acesso visível. Nada na frente do equipamento." },
            { icon: "🚰", title: "Hidrante", body: "Caminho até hidrante e caixa de mangueira sem obstáculo." },
            { icon: "🚨", title: "Detecção", body: "Alarme, detector de fumaça e sprinkler sem bloqueio." }
          ],
          quote: "Equipamento de combate obstruído não protege ninguém.",
          transcript: "Equipamentos de combate a incêndio. Manter desobstruídos: saídas de emergência, extintores, hidrantes, detectores de fumaça e sprinklers. Saídas: rotas e portas de emergência sempre livres. Extintor: acesso visível, nada na frente do equipamento. Hidrante: caminho até hidrante e caixa de mangueira sem obstáculo. Detecção: alarme, detector de fumaça e sprinkler sem bloqueio. Equipamento de combate obstruído não protege ninguém."
        },
        {
          id: "m2-evacuacao",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Como Agir em Caso de Emergência e Evacuação",
          playerId: "panda-3ff61cef-a823-4077-8606-4bc6bc851894",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=3ff61cef-a823-4077-8606-4bc6bc851894",
          transcript: "Vídeo. Como agir em caso de emergência e evacuação. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m2-saude",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Programas de Saúde do SESMT, PCMSO e Ficha de Produtos Químicos (FDS)",
          playerId: "panda-feb0c481-7c3d-451f-a397-eb736bd672c9",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=feb0c481-7c3d-451f-a397-eb736bd672c9",
          transcript: "Vídeo. Programas de saúde do SESMT, PCMSO e ficha de produtos químicos FDS. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m2-vivabem",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Suporte Pessoal: Programa Viva Bem e Central de Saúde",
          playerId: "panda-38ef477b-7796-4958-8f99-603453071f92",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=38ef477b-7796-4958-8f99-603453071f92",
          transcript: "Vídeo. Suporte pessoal: programa Viva Bem e Central de Saúde. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m2-campanhas",
          type: "content",
          fit: true,
          kicker: "📄 Saúde e bem-estar",
          title: "Campanhas de saúde da Leroy Merlin",
          body: "A prevenção continua no cuidado com a sua saúde. O PCMSO acompanha a vida laboral — e os canais de apoio estão abertos o tempo todo.",
          cards: [
            { icon: "🩺", title: "PCMSO", body: "Admissional, periódicos in company, retorno ao trabalho, mudança de risco, demissional e consultas assistenciais." },
            { icon: "💉", title: "Vacinação", body: "Campanha anual de vacinação contra a gripe." },
            { icon: "📋", title: "FDS", body: "Tintas, colas, adesivos ou solventes: consulte a FDS antes de iniciar a atividade." },
            { icon: "💚", title: "Viva Bem (Auster)", body: "Gratuito, confidencial e 24 horas: 0800 770 2324." },
            { icon: "🤝", title: "Orientação profissional", body: "Psicologia, jurídico, financeiro, nutrição, fisioterapia, serviço social e consultoria pet." },
            { icon: "🏥", title: "Central de Saúde (D'Or)", body: "0800 940 1265 — aconselhamento médico, plano de saúde e Amor de Mãe até o 3º mês do bebê." }
          ],
          quote: "Você não está sozinho.",
          transcript: "Campanhas de saúde da Leroy Merlin. A prevenção continua no cuidado com a sua saúde. O PCMSO acompanha a vida laboral, e os canais de apoio estão abertos o tempo todo. PCMSO: admissional, periódicos in company, retorno ao trabalho, mudança de risco, demissional e consultas assistenciais. Vacinação: campanha anual de vacinação contra a gripe. FDS: tintas, colas, adesivos ou solventes, consulte a FDS antes de iniciar a atividade. Viva Bem Auster: gratuito, confidencial e 24 horas, 0800 770 2324. Orientação profissional: psicologia, jurídico, financeiro, nutrição, fisioterapia, serviço social e consultoria pet. Central de Saúde D'Or: 0800 940 1265, aconselhamento médico, plano de saúde e Amor de Mãe até o terceiro mês do bebê. Você não está sozinho."
        },
        {
          id: "m2-ergonomia",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Ergonomia e Ginástica Laboral",
          playerId: "panda-82a0d841-e7cb-43d6-b3c6-65f6fc98dd89",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=82a0d841-e7cb-43d6-b3c6-65f6fc98dd89",
          transcript: "Vídeo. Ergonomia e ginástica laboral. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m2-desafio",
          type: "quiz-intro",
          title: "Missão: Faça ou nunca",
          count: 5,
          minCorrect: 4,
          icon: "🚨",
          body: "Você está no plantão. São <strong>5 cenas</strong> dos vídeos deste módulo. Toque em <strong>Faça</strong> ou <strong>Nunca</strong>. Acerte no mínimo <strong>4</strong> para avançar.",
          transcript: "Missão: Faça ou nunca. Você está no plantão. São cinco cenas dos vídeos deste módulo. Toque em Faça ou Nunca. Acerte no mínimo quatro para avançar."
        },
        {
          id: "m2-jogo",
          type: "sort",
          title: "Faça ou nunca?",
          body: "Pense rápido. É o dia a dia da loja, do depósito e do cuidado com você.",
          left: { id: "nok", label: "Nunca", icon: "✕" },
          right: { id: "ok", label: "Faça", icon: "✓" },
          minCorrect: 4,
          time: 40,
          review: "Fluxo no Moki, casos reais, equipamentos de incêndio, evacuação e Viva Bem",
          items: [
            { text: "Sofreu ou presenciou acidente material, incidente, ASA, ACA, trajeto ou ocorrência com cliente? Comunicar na hora o gestor imediato ou o gerente de plantão.", bin: "ok", hint: "O fluxo é imediato: colaborador → gestor → diretor ou SESMT. Tudo entra no Moki." },
            { text: "Empilhar 9 chapas de MDF na vertical no linear — 459 kg — para a cliente ver o produto.", bin: "nok", hint: "Esse caso real causou prensamento e lesão no tórax. Chapas só na horizontal." },
            { text: "Deixar palete, caixa ou mercadoria na frente de extintor, hidrante, sprinkler, detector ou saída de emergência.", bin: "nok", hint: "Acesso livre 100% do tempo. Em emergência, conte também com a Segurança Patrimonial." },
            { text: "O alarme tocou: seguir o brigadista de capacete vermelho e ir ao ponto de encontro, caminhando com calma.", bin: "ok", hint: "Os 4 passos: saídas, brigadistas, instruções da brigada, ponto de encontro. Nunca corra." },
            { text: "Precisa de apoio? Ligar no Viva Bem 0800 770 2324 — gratuito, confidencial e 24 horas.", bin: "ok", hint: "Central de Saúde D'Or: 0800 940 1265. Você não está sozinho." }
          ],
          transcript: "Faça ou nunca? Pense rápido. É o dia a dia da loja, do depósito e do cuidado com você. Toque em Nunca ou Faça para cada cena."
        }
      ]
    },
    {
      id: 3,
      title: "Equipamentos de Proteção (EPIs), Ferramentas Manuais e Práticas Seguras em Loja e Depósito",
      objective: "Detalhar o uso, o ajuste e a conservação de cada EPI, padronizar o estilete homologado e aplicar as regras pelas HQs educativas.",
      titleUnlock: {
        title: "PROTETOR DA OPERAÇÃO",
        body: "Você escolhe e ajusta o EPI certo e só usa estilete homologado.",
        icon: "👷"
      },
      screens: [
        {
          id: "m3-capa",
          type: "cover",
          title: "Módulo 3 — EPIs, Ferramentas Manuais e Práticas Seguras",
          subtitle: "Usar, ajustar e conservar cada EPI, padronizar o estilete homologado e aplicar as HQs educativas.",
          image: "assets/fotos/capa-modulo3.png",
          transcript: "Módulo três. EPIs, Ferramentas Manuais e Práticas Seguras. Usar, ajustar e conservar cada EPI, padronizar o estilete homologado e aplicar as HQs educativas."
        },
        {
          id: "m3-v-epis",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Responsabilidades com EPIs, Calçado, Luvas e Proteção para Cabeça",
          playerId: "panda-13ca701d-4e1f-458c-9b92-fe4693d341d5",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=13ca701d-4e1f-458c-9b92-fe4693d341d5",
          transcript: "Vídeo. Responsabilidades com E P Is, calçado, luvas e proteção para cabeça. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m3-v-altura",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Proteção para Trabalho em Altura, Vapores, Partículas e Ruídos",
          playerId: "panda-777efdc2-6c10-4ee9-b3f8-76aaa0efcdd4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=777efdc2-6c10-4ee9-b3f8-76aaa0efcdd4",
          transcript: "Vídeo. Proteção para trabalho em altura, vapores, partículas e ruídos. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m3-estilete",
          type: "content",
          layout: "figure",
          wide: true,
          kicker: "📄 Uso do Estilete",
          title: "Uso do Estilete",
          body: "Esta ferramenta não é um EPI, porém você é o responsável pela conservação e pelo uso adequado.",
          image: "assets/fotos/correto-estilete.png",
          imageAlt: "Três formas de usar o estilete: corte contra a mão, ferramenta inadequada e o jeito certo com luva e corte para fora",
          cards: [
            { icon: "✕", title: "Errado", body: "Nunca corte em direção à mão ou ao corpo." },
            { icon: "✕", title: "Errado", body: "Não use lâmina solta nem estilete fora do padrão." },
            { icon: "✓", title: "Correto", body: "Luva no apoio, corte para fora, estilete homologado." }
          ],
          quote: "Conservar e usar o estilete do jeito certo é responsabilidade de cada um.",
          transcript: "Uso do estilete. Esta ferramenta não é um EPI, porém você é o responsável pela conservação e pelo uso adequado. Errado: nunca corte em direção à mão ou ao corpo. Errado: não use lâmina solta nem estilete fora do padrão. Correto: luva no apoio, corte para fora, estilete homologado. Conservar e usar o estilete do jeito certo é responsabilidade de cada um."
        },
        {
          id: "m3-lesoes",
          type: "content",
          layout: "figure",
          wide: true,
          sensitive: true,
          kicker: "📄 Casos reais",
          title: "Casos reais de cortes",
          body: "Falta de EPI e estilete fora do padrão causaram lesões graves em mãos e dedos. A foto a seguir é forte e só aparece se você escolher revelar.",
          image: "assets/fotos/imagens-fortes.png",
          imageAlt: "Fotografias reais de cortes e lesões em mãos e dedos",
          quote: "Estilete homologado e luva no corte existem para que isso não aconteça.",
          transcript: "Casos reais de cortes. Falta de EPI e estilete fora do padrão causaram lesões graves em mãos e dedos. A foto a seguir é forte e só aparece se você escolher revelar. Estilete homologado e luva no corte existem para que isso não aconteça."
        },
        {
          id: "m3-v-estilete",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Segurança no Manuseio e Uso do Estilete Homologado",
          playerId: "panda-fc95b229-b6d9-4204-926b-8a83b350fa45",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fc95b229-b6d9-4204-926b-8a83b350fa45",
          transcript: "Vídeo. Segurança no manuseio e uso do estilete homologado. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m3-hqs",
          type: "content",
          kicker: "📄 HQs educativas",
          title: "Exemplos de ocorrência",
          body: "Pratique a segurança em todos os momentos!",
          images: [
            { image: "assets/fotos/hq1.png", caption: "HQ 1 — Armazenamento de chapas e painéis.", imageAlt: "HQ 1: armazenamento de chapas e painéis" },
            { image: "assets/fotos/hq2.png", caption: "HQ 2 — Abastecimento no aéreo e plataforma elevatória.", imageAlt: "HQ 2: aéreo e plataforma elevatória" }
          ],
          quote: "Prevenção é a chave. Acidente zero.",
          transcript: "Exemplos de ocorrência. Pratique a segurança em todos os momentos. HQ um: armazenamento de chapas e painéis. HQ dois: abastecimento no aéreo e plataforma elevatória. Prevenção é a chave. Acidente zero."
        },
        {
          id: "m3-desafio",
          type: "quiz-intro",
          title: "Missão: Seguro ou Inseguro?",
          count: 6,
          minCorrect: 4,
          icon: "🛡️",
          body: "São <strong>6 cenas</strong> da loja e do depósito. Classifique cada uma como <strong>Seguro</strong> ou <strong>Inseguro</strong>. Acerte no mínimo <strong>4</strong> para avançar.",
          transcript: "Missão: Seguro ou Inseguro? São seis cenas da loja e do depósito. Classifique cada uma como Seguro ou Inseguro. Acerte no mínimo quatro para avançar."
        },
        {
          id: "m3-jogo",
          type: "sort",
          title: "Seguro ou inseguro?",
          body: "Toque no lado certo. Pense rápido — é o dia a dia da operação.",
          left: { id: "nok", label: "Inseguro", icon: "✕" },
          right: { id: "ok", label: "Seguro", icon: "✓" },
          minCorrect: 4,
          time: 50,
          review: "EPIs, estilete homologado e práticas em loja e depósito",
          items: [
            { text: "Cortar fitilho com o estilete homologado e luva no apoio, sempre para fora do corpo.", bin: "ok", hint: "Esse é o jeito certo: ferramenta da empresa, luva e corte para fora." },
            { text: "Subir na plataforma elevatória com o capacete solto, sem ajustar a carneira e a cinta jugular.", bin: "nok", hint: "Sem carneira e jugular o capacete não protege." },
            { text: "Usar calçado de segurança em toda a área operacional, do começo ao fim do turno.", bin: "ok", hint: "Calçado de segurança é obrigatório nas áreas operacionais." },
            { text: "Abrir caixa com estilete comprado na loja, sem luva, cortando em direção à mão.", bin: "nok", hint: "Estilete não homologado e corte contra a mão são inseguros." },
            { text: "Trabalhar em altura com cinto tipo paraquedista e talabarte duplo com absorvedor.", bin: "ok", hint: "Em plataforma e altura, o cinto com talabarte é obrigatório." },
            { text: "Empilhar chapas de MDF na vertical, encostadas no linear, para ganhar espaço.", bin: "nok", hint: "MDF na vertical tomba. O armazenamento é na horizontal." }
          ],
          transcript: "Seguro ou inseguro? Toque no lado certo. Pense rápido, é o dia a dia da operação."
        }
      ]
    },
    {
      id: 4,
      title: "Equipamentos Móveis Motorizados, Estruturas de Armazenamento, Escadas e Isolamento",
      objective: "Inspecionar e usar escadas com segurança, respeitar racks, isolar áreas de risco e cumprir os requisitos para operar equipamentos motorizados.",
      titleUnlock: {
        title: "OPERADOR CONSCIENTE",
        body: "Você inspeciona a escada, não mexe em rack e só opera máquina com carteirinha válida.",
        icon: "🪪"
      },
      screens: [
        {
          id: "m4-capa",
          type: "cover",
          title: "Módulo 4 — Equipamentos Móveis, Racks, Escadas e Isolamento",
          subtitle: "Inspecionar escadas, não alterar racks, isolar áreas de risco e operar equipamentos motorizados só com carteirinha válida.",
          image: "assets/fotos/capa-modulo4.png",
          transcript: "Módulo quatro. Equipamentos Móveis, Racks, Escadas e Isolamento. Inspecionar escadas, não alterar racks, isolar áreas de risco e operar equipamentos motorizados só com carteirinha válida."
        },
        {
          id: "m4-v-escadas",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Uso seguro de escadas",
          playerId: "panda-08c72f18-4f8b-4db7-9130-786077a97ce7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=08c72f18-4f8b-4db7-9130-786077a97ce7",
          transcript: "Vídeo. Uso seguro de escadas. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m4-escada-uso",
          type: "content",
          layout: "figure",
          wide: true,
          kicker: "📄 Uso de escada",
          title: "Uso de escada",
          body: "Realize a análise das condições das escadas antes do uso.",
          image: "assets/fotos/ESCADA 2.png",
          imageAlt: "Escada de plataforma: subir e descer de frente, conferir pés, roldanas, corrimão e guarda-corpo",
          cards: [
            { icon: "🪜", title: "Degraus", body: "Degraus íntegros, sem folga nem dano." },
            { icon: "⚙️", title: "Roldanas e pés", body: "Roldanas e pés em perfeito estado." },
            { icon: "✋", title: "Corrimão", body: "Corrimão e guarda-corpo firmes. Use o corrimão." },
            { icon: "👤", title: "De frente", body: "Subir e descer de frente, nesse sentido." }
          ],
          quote: "Subir e descer de frente. Celular no bolso. Inspeção antes do primeiro degrau.",
          transcript: "Uso de escada. Realize a análise das condições das escadas antes do uso. Degraus: íntegros, sem folga nem dano. Roldanas e pés: em perfeito estado. Corrimão e guarda-corpo firmes. Use o corrimão. Subir e descer de frente, nesse sentido. Celular no bolso. Inspeção antes do primeiro degrau."
        },
        {
          id: "m4-v-racks",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Estruturas de Armazenamento: A Regra para Racks e Porta-Paletes",
          playerId: "panda-e083def5-d2cf-4bb7-b509-9feff68cd7fb",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e083def5-d2cf-4bb7-b509-9feff68cd7fb",
          transcript: "Vídeo. Estruturas de armazenamento: a regra para racks e porta-paletes. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m4-v-sinalizacao",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Sinalização e Isolamento Obrigatório de Áreas de Risco",
          playerId: "panda-08c72f18-4f8b-4db7-9130-786077a97ce7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=08c72f18-4f8b-4db7-9130-786077a97ce7",
          transcript: "Vídeo. Sinalização e isolamento obrigatório de áreas de risco. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m4-v-moveis",
          type: "video",
          kicker: "🎥 Vídeo",
          title: "Operação de Equipamentos Móveis Motorizados (NR-11 e NR-12)",
          playerId: "panda-e083def5-d2cf-4bb7-b509-9feff68cd7fb",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e083def5-d2cf-4bb7-b509-9feff68cd7fb",
          transcript: "Vídeo. Operação de equipamentos móveis motorizados, N R onze e N R doze. Assista ao vídeo. Avance quando concluir."
        },
        {
          id: "m4-desafio",
          type: "quiz-intro",
          title: "Desafio NR-01 — Módulo 4",
          count: 3,
          minCorrect: 2,
          icon: "🪪",
          transcript: "Desafio N R zero um, módulo quatro. Responda três perguntas de múltipla escolha. Você precisa acertar no mínimo duas para avançar."
        },
        {
          id: "m4-p1",
          type: "question",
          image: "assets/fotos/m4p1.png",
          imagePosition: "center 18%",
          imageAlt: "Uso seguro de escada na operação",
          question: "Como se sobe e desce uma escada com segurança?",
          alternatives: [
            { id: "a", text: "De costas, falando ao celular", correct: false },
            { id: "b", text: "Sempre de frente para a escada, usando o corrimão, sem celular", correct: true },
            { id: "c", text: "De lado, se estiver com pressa", correct: false },
            { id: "d", text: "Pulando degraus para ganhar tempo", correct: false }
          ],
          explanation: "A regra é subir e descer de frente, com corrimão, após inspecionar degraus, roldanas, guarda-corpo e pés. Celular é proibido.",
          review: "O uso seguro de escadas",
          transcript: "Como se sobe e desce uma escada com segurança? Opção um: de costas, falando ao celular. Opção dois: sempre de frente para a escada, usando o corrimão, sem celular. Opção três: de lado, se estiver com pressa. Opção quatro: pulando degraus para ganhar tempo."
        },
        {
          id: "m4-p3",
          type: "question",
          image: "assets/fotos/m4p2.png",
          imagePosition: "center 28%",
          imageAlt: "Isolamento físico com cones e fita na área da plataforma elevatória",
          question: "Quando o isolamento físico é obrigatório?",
          alternatives: [
            { id: "a", text: "Só depois que o acidente acontece", correct: false },
            { id: "b", text: "Antes de plataforma elevatória, movimentação de carga no aéreo, obras, reformas, valas e implementações", correct: true },
            { id: "c", text: "Apenas no horário de visita da diretoria", correct: false },
            { id: "d", text: "Nunca, se a loja estiver aberta", correct: false }
          ],
          explanation: "O isolamento é prévio e obrigatório em todas essas situações de risco.",
          review: "O isolamento de áreas de risco",
          transcript: "Quando o isolamento físico é obrigatório? Opção um: só depois que o acidente acontece. Opção dois: antes de plataforma elevatória, movimentação de carga no aéreo, obras, reformas, valas e implementações. Opção três: apenas no horário de visita da diretoria. Opção quatro: nunca, se a loja estiver aberta."
        },
        {
          id: "m4-p4",
          type: "question",
          image: "assets/fotos/m4p3.png",
          imagePosition: "center 22%",
          imageAlt: "Operador com carteirinha, empilhadeira, paleteira e plataforma",
          question: "O que é obrigatório para operar empilhadeira, paleteira elétrica ou plataforma?",
          alternatives: [
            { id: "a", text: "Apenas a chave da máquina", correct: false },
            { id: "b", text: "Treinamento NR-11/12, ASO em dia e carteirinha de operador válida", correct: true },
            { id: "c", text: "Autorização verbal de um colega", correct: false },
            { id: "d", text: "Ter trabalhado um dia no depósito", correct: false }
          ],
          explanation: "Sem treinamento específico, ASO e carteirinha dentro da validade, a operação é proibida.",
          review: "Os requisitos para operar equipamentos móveis",
          transcript: "O que é obrigatório para operar empilhadeira, paleteira elétrica ou plataforma? Opção um: apenas a chave da máquina. Opção dois: treinamento NR-11 e NR-12, ASO em dia e carteirinha de operador válida. Opção três: autorização verbal de um colega. Opção quatro: ter trabalhado um dia no depósito."
        },
        {
          id: "m4-final",
          type: "finale",
          kicker: "🏆 Conclusão",
          eyebrow: "Treinamento concluído",
          title: "Parabéns",
          body: "Você concluiu o treinamento NR-01 — Manual de Integração e Segurança do Trabalho.",
          quote: "Pessoas Primeiro e Segurança Primeiro. Tem alguém esperando a sua chegada.",
          chips: ["NR-01", "Integração", "Regras de Ouro"],
          image: "assets/fotos/capafinal.png",
          transcript: "Treinamento concluído. Parabéns. Você concluiu o treinamento N R zero um, Manual de Integração e Segurança do Trabalho. Pessoas Primeiro e Segurança Primeiro. Tem alguém esperando a sua chegada."
        }
      ]
    }
  ]
};
