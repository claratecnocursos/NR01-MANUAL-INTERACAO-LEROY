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
          transcript: "Módulo 1: fundamentos da segurança, cultura organizacional, regras de ouro e gestão de riscos."
        },
        {
          id: "m1-lema",
          type: "content",
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
          transcript: "Lema institucional: pessoas primeiro e segurança primeiro."
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
          transcript: "Regras de ouro de 1 a 5: proteção do corpo, máquinas, empilhadeiras, estocagem e escadas."
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
          transcript: "Regras de ouro de 6 a 10: incêndio, altura, estilete, reporte e atenção constante."
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
          transcript: "Desafio final do módulo 1: 3 perguntas."
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
          transcript: "Pergunta 1 do módulo 1."
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
          transcript: "Pergunta 2 do módulo 1."
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
          transcript: "Pergunta 3 — fim do módulo 1."
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
          image: "assets/fotos/m2-p1.png",
          transcript: "Módulo 2: ocorrências, emergências, incêndios e saúde ocupacional."
        },
        {
          id: "m2-ocorrencias",
          type: "content",
          kicker: "📄 Classificação",
          title: "Tipos de ocorrência",
          body: "Classificar certo é o primeiro passo para comunicar certo.",
          cards: [
            { icon: "🧱", title: "Acidente material", body: "Dano a produto, estrutura ou equipamento, sem lesão." },
            { icon: "⚠️", title: "Incidente", body: "Quase acidente: o dano quase aconteceu." },
            { icon: "🩹", title: "ASA", body: "Acidente sem afastamento." },
            { icon: "🏥", title: "ACA", body: "Acidente com afastamento." },
            { icon: "🚗", title: "Trajeto", body: "No caminho de casa para o trabalho ou o retorno." },
            { icon: "🤝", title: "Parceiros e clientes", body: "Ocorrência envolvendo terceiros ou clientes na unidade." }
          ],
          quote: "Toda ocorrência entra no fluxo. Nenhuma fica só no corredor.",
          transcript: "Classificação: material, incidente, ASA, ACA, trajeto, parceiros e clientes."
        },
        {
          id: "m2-fluxo",
          type: "content",
          kicker: "📄 Comunicação",
          title: "Fluxo imediato e registro no Moki",
          body: "A comunicação não espera o fim do turno.",
          cards: [
            { icon: "1", title: "Colaborador acidentado", body: "Avisa na hora." },
            { icon: "2", title: "Gestor imediato", body: "Gerente de plantão assume o chamado." },
            { icon: "3", title: "Diretor / SESMT", body: "Análise e classificação oficiais." },
            { icon: "💻", title: "Moki", body: "Registro obrigatório no sistema." }
          ],
          quote: "Colaborador → gestor imediato → diretor ou SESMT → classificação. Sempre no Moki.",
          transcript: "Fluxo: colaborador, gestor imediato, diretor ou SESMT, e registro no Moki."
        },
        {
          id: "m2-casos",
          type: "content",
          kicker: "📄 Estudos de caso",
          title: "O que casos reais ensinam",
          body: "Desvios pequenos viram eventos graves quando o armazenamento ou o EPI falha.",
          cards: [
            { icon: "📦", title: "Chapas de MDF", body: "Queda de 9 chapas — 459 kg — por armazenagem vertical inadequada no linear." },
            { icon: "✋", title: "Lesões em mãos", body: "Cortes graves por falta de EPI e uso de estilete não padronizado." },
            { icon: "🚫", title: "Aprendizado", body: "MDF na horizontal. Estilete homologado. Luvas no corte." },
            { icon: "📣", title: "Depois do susto", body: "Comunique, isole e registre. Não esconda o desvio." }
          ],
          quote: "A prevenção é a chave. Acidente zero começa no jeito de estocar e de cortar.",
          transcript: "Casos: queda de chapas de MDF e lesões por estilete não homologado."
        },
        {
          id: "m2-incendio",
          type: "content",
          kicker: "📄 Emergência",
          title: "Incêndio, equipamentos e evacuação",
          body: "Conhecer o equipamento e o caminho salva tempo — e vida.",
          cards: [
            { icon: "🧯", title: "Equipamentos", body: "Extintores, acionadores manuais, sprinklers, hidrantes e portas corta-fogo." },
            { icon: "🚫", title: "Nunca obstruir", body: "Acesso a equipamento de combate e saída de emergência é sagrado." },
            { icon: "🚪", title: "Evacuação", body: "Conheça saídas e brigadistas. Siga a brigada. Caminhe com calma." },
            { icon: "📍", title: "Ponto de encontro", body: "Só pare quando chegar ao ponto de encontro." }
          ],
          quote: "Em emergência: siga a brigada, não corra, não volte atrás, vá ao ponto de encontro.",
          transcript: "Combate a incêndio, proibição de obstrução e protocolo de evacuação."
        },
        {
          id: "m2-saude",
          type: "content",
          kicker: "📄 SESMT e PCMSO",
          title: "Saúde ocupacional e Viva Bem",
          body: "O SESMT cuida da saúde no trabalho. O Viva Bem cuida da vida fora da tarefa.",
          cards: [
            { icon: "🩺", title: "Exames do PCMSO", body: "Admissional, periódico, retorno ao trabalho, mudança de risco e demissional, in company." },
            { icon: "💉", title: "Vacinação", body: "Campanha anual de gripe." },
            { icon: "📞", title: "Viva Bem (Auster)", body: "0800 770 2324 — 24 horas, gratuito e confidencial." },
            { icon: "🧘", title: "Apoio e ergonomia", body: "Psicologia, jurídico, financeiro, nutrição, fisioterapia, serviço social, pedagogia, pet e ginástica laboral." }
          ],
          quote: "Ergonomia organizacional e cognitiva, mais ginástica laboral no dia a dia.",
          transcript: "PCMSO, vacinação, Viva Bem 0800 770 2324 e ergonomia."
        },
        {
          id: "m2-desafio",
          type: "quiz-intro",
          title: "Desafio NR-01 — Módulo 2",
          count: 4,
          minCorrect: 3,
          icon: "🚨",
          transcript: "Desafio final do módulo 2: 4 perguntas."
        },
        {
          id: "m2-p1",
          type: "question",
          question: "Qual é a ordem correta do fluxo de comunicação de acidente?",
          alternatives: [
            { id: "a", text: "SESMT → colaborador → cliente", correct: false },
            { id: "b", text: "Colaborador acidentado → gestor imediato → diretor / SESMT → registro no Moki", correct: true },
            { id: "c", text: "Só registrar no Moki no dia seguinte", correct: false },
            { id: "d", text: "Avisar apenas o colega mais próximo", correct: false }
          ],
          explanation: "O fluxo é imediato: colaborador, gestor imediato (gerente de plantão), diretor ou SESMT, com registro obrigatório no Moki.",
          review: "O fluxo oficial de comunicação de acidente",
          transcript: "Pergunta 1 do módulo 2."
        },
        {
          id: "m2-p2",
          type: "question",
          question: "O que significa ASA e ACA?",
          alternatives: [
            { id: "a", text: "ASA é com afastamento; ACA é sem afastamento", correct: false },
            { id: "b", text: "ASA é acidente sem afastamento; ACA é acidente com afastamento", correct: true },
            { id: "c", text: "Os dois significam incidente sem lesão", correct: false },
            { id: "d", text: "ASA é trajeto; ACA é material", correct: false }
          ],
          explanation: "ASA: acidente sem afastamento. ACA: acidente com afastamento.",
          review: "A classificação ASA e ACA",
          transcript: "Pergunta 2 do módulo 2."
        },
        {
          id: "m2-p3",
          type: "question",
          question: "Em uma evacuação, o que você deve fazer?",
          alternatives: [
            { id: "a", text: "Correr de volta para pegar pertences", correct: false },
            { id: "b", text: "Seguir a brigada, caminhar com calma e ir ao ponto de encontro", correct: true },
            { id: "c", text: "Esperar no corredor até o fogo acabar", correct: false },
            { id: "d", text: "Obstruir a porta corta-fogo para o vento não entrar", correct: false }
          ],
          explanation: "Conheça saídas e brigadistas, siga as instruções da brigada e caminhe com calma até o ponto de encontro. Nunca obstrua equipamentos nem saídas.",
          review: "O protocolo de evacuação",
          transcript: "Pergunta 3 do módulo 2."
        },
        {
          id: "m2-p4",
          type: "question",
          question: "O que é o programa Viva Bem (Auster)?",
          alternatives: [
            { id: "a", text: "Um curso só de combate a incêndio", correct: false },
            { id: "b", text: "Suporte 24 horas, gratuito e confidencial, pelo 0800 770 2324", correct: true },
            { id: "c", text: "Um exame demissional obrigatório", correct: false },
            { id: "d", text: "O sistema Moki de registro de acidente", correct: false }
          ],
          explanation: "O Viva Bem oferece apoio 24/7, gratuito e confidencial, em psicologia, jurídico, financeiro, nutrição e outros.",
          review: "O programa Viva Bem",
          transcript: "Pergunta 4 — fim do módulo 2."
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
          image: "assets/fotos/capa-modulo1.png",
          transcript: "Módulo 3: EPIs, ferramentas manuais e práticas seguras em loja e depósito."
        },
        {
          id: "m3-resp",
          type: "content",
          kicker: "📄 Responsabilidades",
          title: "Sua parte com o EPI",
          body: "O equipamento só protege se estiver inteiro, limpo e no corpo certo.",
          cards: [
            { icon: "✅", title: "Usar", body: "Colocar o EPI adequado à tarefa, do começo ao fim." },
            { icon: "📦", title: "Guardar e conservar", body: "Aguardar no local certo, sem amassar nem molhar." },
            { icon: "🧼", title: "Higienizar", body: "Limpar conforme a orientação do fabricante e da liderança." },
            { icon: "📣", title: "Comunicar defeito", body: "Rachou, rasgou ou perdeu ajuste? Avise a liderança e troque." }
          ],
          quote: "EPI defeituoso na cabeça é tão perigoso quanto trabalhar sem ele.",
          transcript: "Responsabilidades: usar, guardar, conservar, higienizar e comunicar defeitos do EPI."
        },
        {
          id: "m3-epis",
          type: "content",
          kicker: "📄 Guia técnico",
          title: "Os EPIs da operação",
          body: "Cada área pede um conjunto. Não improvise.",
          cards: [
            { icon: "👢", title: "Calçado de segurança", body: "Obrigatório em todas as áreas operacionais." },
            { icon: "🪖", title: "Capacete", body: "Aéreo, obras e logística. Ajuste da carneira e da cinta jugular. Cores: Manutenção, Brigada, Liderança e Visitante." },
            { icon: "🧤", title: "Luvas", body: "Obrigatórias na logística, movimentação de cargas, aéreo e plataformas." },
            { icon: "🪢", title: "Cinto tipo paraquedista", body: "Com talabarte duplo e absorvedor em trabalho em altura e plataforma elevatória." }
          ],
          quote: "Também entram máscara, protetor facial ou óculos e protetor auricular, conforme o risco.",
          transcript: "EPIs: calçado, capacete com carneira e jugular, luvas e cinto paraquedista."
        },
        {
          id: "m3-estilete",
          type: "content",
          kicker: "📄 Ferramenta",
          title: "Só o estilete homologado Leroy Merlin",
          body: "Lâmina retrátil de segurança. Qualquer outro modelo está proibido.",
          cards: [
            { icon: "✅", title: "Homologado", body: "Estilete da empresa, com lâmina retrátil." },
            { icon: "🚫", title: "Proibido", body: "Estilete de mercado, gilete ou lâmina solta." },
            { icon: "🧤", title: "Luvas no corte", body: "Obrigatórias ao cortar fitilhos e embalagens." },
            { icon: "✋", title: "Por quê", body: "Lesões reais em mãos e dedos nasceram de ferramenta errada." }
          ],
          quote: "Estilete não homologado não entra na operação.",
          transcript: "Uso exclusivo do estilete homologado Leroy Merlin, com luvas no corte."
        },
        {
          id: "m3-hqs",
          type: "content",
          kicker: "📄 HQs educativas",
          title: "Três histórias, três regras de ouro",
          body: "As HQs mostram o jeito certo — e o tombo que o jeito errado causa.",
          cards: [
            { icon: "1", title: "Chapas e painéis", body: "Proibido empilhar MDF na vertical. Horizontal evita tombamento. Prevenção é a chave. Acidente zero." },
            { icon: "2", title: "Aéreo e plataforma", body: "Compartimento blindado das correntes, manutenção em dia e acionamento da brigada se precisar." },
            { icon: "3", title: "Manuseio e ferramentas", body: "Cuidado com pontos de prensamento, como no cortador de grama. Luvas e primeiros socorros." },
            { icon: "📖", title: "Como usar a HQ", body: "Leia, compare com a sua área e corrija o desvio no mesmo dia." }
          ],
          quote: "Prevenção é a chave. Acidente zero.",
          transcript: "HQs: armazenamento de chapas, aéreo e plataforma, manuseio e ferramentas."
        },
        {
          id: "m3-desafio",
          type: "quiz-intro",
          title: "Desafio NR-01 — Módulo 3",
          count: 4,
          minCorrect: 3,
          icon: "👷",
          transcript: "Desafio final do módulo 3: 4 perguntas."
        },
        {
          id: "m3-p1",
          type: "question",
          question: "O que o colaborador deve fazer com o EPI?",
          alternatives: [
            { id: "a", text: "Usar só quando a fiscalização aparecer", correct: false },
            { id: "b", text: "Usar, guardar, conservar, higienizar e comunicar defeitos à liderança", correct: true },
            { id: "c", text: "Emprestar o capacete sem ajustar a carneira", correct: false },
            { id: "d", text: "Guardar o cinto molhado no chão", correct: false }
          ],
          explanation: "A responsabilidade inclui usar corretamente, guardar, conservar, higienizar e avisar defeito.",
          review: "As responsabilidades com o EPI",
          transcript: "Pergunta 1 do módulo 3."
        },
        {
          id: "m3-p2",
          type: "question",
          question: "No capacete, o que precisa estar ajustado?",
          alternatives: [
            { id: "a", text: "Só a cor da função", correct: false },
            { id: "b", text: "Carneira e cinta jugular", correct: true },
            { id: "c", text: "Nada: o capacete solto já protege", correct: false },
            { id: "d", text: "Apenas o adesivo da loja", correct: false }
          ],
          explanation: "O capacete só protege com carneira e cinta jugular ajustadas. As cores identificam a função: manutenção, brigada, liderança, visitante.",
          review: "O ajuste do capacete",
          transcript: "Pergunta 2 do módulo 3."
        },
        {
          id: "m3-p3",
          type: "question",
          question: "Qual estilete pode ser usado na operação?",
          alternatives: [
            { id: "a", text: "Qualquer um comprado na loja", correct: false },
            { id: "b", text: "Somente o estilete homologado Leroy Merlin, de lâmina retrátil", correct: true },
            { id: "c", text: "Gilete, se tiver luva", correct: false },
            { id: "d", text: "O que o colaborador trouxer de casa", correct: false }
          ],
          explanation: "Só o estilete homologado, com lâmina retrátil. Luvas são obrigatórias ao cortar fitilhos e embalagens.",
          review: "O estilete homologado",
          transcript: "Pergunta 3 do módulo 3."
        },
        {
          id: "m3-p4",
          type: "question",
          question: "Como as chapas de MDF devem ser armazenadas?",
          alternatives: [
            { id: "a", text: "Na vertical, encostadas no linear", correct: false },
            { id: "b", text: "Na horizontal, para evitar tombamento", correct: true },
            { id: "c", text: "Em pé, no corredor de emergência", correct: false },
            { id: "d", text: "Em qualquer posição, se alguém segurar", correct: false }
          ],
          explanation: "A HQ 1 proíbe o empilhamento vertical de MDF. O armazenamento é na horizontal para evitar tombamento.",
          review: "O armazenamento seguro de chapas e painéis",
          transcript: "Pergunta 4 — fim do módulo 3."
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
          image: "assets/fotos/m2-p1.png",
          transcript: "Módulo 4: equipamentos móveis motorizados, racks, escadas e isolamento."
        },
        {
          id: "m4-escadas",
          type: "content",
          kicker: "📄 Escadas",
          title: "Uso seguro de escadas",
          body: "A inspeção vem antes do primeiro degrau.",
          cards: [
            { icon: "🔎", title: "Checklist", body: "Degraus, roldanas, corrimão, guarda-corpo e pés." },
            { icon: "👤", title: "De frente", body: "Subir e descer sempre de frente para a escada, usando o corrimão." },
            { icon: "📱", title: "Celular", body: "Proibição absoluta de usar o celular na escada." },
            { icon: "🚫", title: "Não use", body: "Escada folgada, pé quebrado ou corrimão solto sai de operação." }
          ],
          quote: "Corrimão na mão. Celular no bolso. Frente para a escada.",
          transcript: "Inspeção de escadas, subida de frente e proibição de celular."
        },
        {
          id: "m4-racks",
          type: "content",
          kicker: "📄 Estruturas",
          title: "Racks: nem pensar",
          body: "Colaborador não autorizado não monta, não desmonta e não altera porta-paletes.",
          cards: [
            { icon: "🚫", title: "Regra rígida", body: "Racks: nem pensar. Nenhuma adaptação caseira." },
            { icon: "🏢", title: "Quem mexe", body: "Somente empresa homologada." },
            { icon: "🎫", title: "ServiceNow", body: "Abra o chamado pelo Guia ADEO." },
            { icon: "📣", title: "Viu dano", body: "Isole, avise e registre. Não tente consertar." }
          ],
          quote: "Rack danificado ou alterado é condição insegura grave.",
          transcript: "Racks: proibido montar, desmontar ou alterar. Chamado no ServiceNow."
        },
        {
          id: "m4-isolamento",
          type: "content",
          kicker: "📄 Sinalização",
          title: "Isolar antes de executar",
          body: "Área de risco sem isolamento é área liberada para o acidente.",
          cards: [
            { icon: "🚧", title: "Quando isolar", body: "Plataforma elevatória, carga no aéreo, obras, reformas, valas e implementações." },
            { icon: "📏", title: "Como", body: "Isolamento físico prévio, visível e contínuo." },
            { icon: "🚶", title: "Fluxo de pessoas", body: "Cliente e colega não atravessam a zona isolada." },
            { icon: "📣", title: "Antes de ligar", body: "Só opera depois que a área está fechada." }
          ],
          quote: "Primeiro isola. Depois sobe, move ou corta.",
          transcript: "Isolamento físico obrigatório em plataforma, aéreo, obras, valas e implementações."
        },
        {
          id: "m4-moveis",
          type: "content",
          kicker: "📄 NR-11 e NR-12",
          title: "Equipamentos móveis motorizados",
          body: "Sem treinamento, ASO e carteirinha válida, ninguém liga a máquina.",
          cards: [
            { icon: "🚜", title: "Tipos", body: "Empilhadeiras, transpaleteiras ou paleteiras elétricas e plataformas elevatórias." },
            { icon: "🎓", title: "Requisitos", body: "Treinamento NR-11 e NR-12, ASO em dia e carteirinha de operador dentro da validade." },
            { icon: "🪪", title: "Carteirinha", body: "Porte obrigatório durante a operação." },
            { icon: "🚫", title: "Proibido", body: "Pessoa não habilitada não liga e não opera." }
          ],
          quote: "A carteirinha vencida equivale a não ter habilitação.",
          transcript: "Empilhadeiras, paleteiras e plataformas: treinamento, ASO e carteirinha válida."
        },
        {
          id: "m4-desafio",
          type: "quiz-intro",
          title: "Desafio NR-01 — Módulo 4",
          count: 4,
          minCorrect: 3,
          icon: "🪪",
          transcript: "Desafio final do módulo 4: 4 perguntas."
        },
        {
          id: "m4-p1",
          type: "question",
          question: "Como se sobe e desce uma escada com segurança?",
          alternatives: [
            { id: "a", text: "De costas, falando ao celular", correct: false },
            { id: "b", text: "Sempre de frente para a escada, usando o corrimão, sem celular", correct: true },
            { id: "c", text: "De lado, se estiver com pressa", correct: false },
            { id: "d", text: "Pulando degraus para ganhar tempo", correct: false }
          ],
          explanation: "A regra é subir e descer de frente, com corrimão, após inspecionar degraus, roldanas, guarda-corpo e pés. Celular é proibido.",
          review: "O uso seguro de escadas",
          transcript: "Pergunta 1 do módulo 4."
        },
        {
          id: "m4-p2",
          type: "question",
          question: "O que significa a regra “Racks: nem pensar”?",
          alternatives: [
            { id: "a", text: "Qualquer colaborador pode reforçar o rack com madeira", correct: false },
            { id: "b", text: "É proibido montar, desmontar ou alterar racks sem empresa homologada e chamado no ServiceNow", correct: true },
            { id: "c", text: "Racks não precisam de manutenção", correct: false },
            { id: "d", text: "Só a CIPA pode soldar o porta-paletes", correct: false }
          ],
          explanation: "Manutenção e alteração de racks são exclusivas de empresa homologada, via chamado no ServiceNow (Guia ADEO).",
          review: "A regra de racks e porta-paletes",
          transcript: "Pergunta 2 do módulo 4."
        },
        {
          id: "m4-p3",
          type: "question",
          question: "Quando o isolamento físico é obrigatório?",
          alternatives: [
            { id: "a", text: "Só depois que o acidente acontece", correct: false },
            { id: "b", text: "Antes de plataforma elevatória, movimentação de carga no aéreo, obras, reformas, valas e implementações", correct: true },
            { id: "c", text: "Apenas no horário de visita da diretoria", correct: false },
            { id: "d", text: "Nunca, se a loja estiver aberta", correct: false }
          ],
          explanation: "O isolamento é prévio e obrigatório em todas essas situações de risco.",
          review: "O isolamento de áreas de risco",
          transcript: "Pergunta 3 do módulo 4."
        },
        {
          id: "m4-p4",
          type: "question",
          question: "O que é obrigatório para operar empilhadeira, paleteira elétrica ou plataforma?",
          alternatives: [
            { id: "a", text: "Apenas a chave da máquina", correct: false },
            { id: "b", text: "Treinamento NR-11/12, ASO em dia e carteirinha de operador válida", correct: true },
            { id: "c", text: "Autorização verbal de um colega", correct: false },
            { id: "d", text: "Ter trabalhado um dia no depósito", correct: false }
          ],
          explanation: "Sem treinamento específico, ASO e carteirinha dentro da validade, a operação é proibida.",
          review: "Os requisitos para operar equipamentos móveis",
          transcript: "Pergunta 4 — fim do módulo 4."
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
          transcript: "Parabéns. Você concluiu o Manual de Integração e Segurança do Trabalho. Pessoas primeiro e segurança primeiro."
        }
      ]
    }
  ]
};
