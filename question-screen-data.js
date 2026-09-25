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
          image: "assets/fotos/capa-modulo2.png",
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
          title: "Missão: Monte o fluxo",
          count: 1,
          minCorrect: 1,
          icon: "📣",
          body: "Toque os <strong>4 passos</strong> na ordem certa: do aviso até o registro no Moki. Se errar, pode tentar de novo.",
          transcript: "Missão monte o fluxo. Toque os quatro passos na ordem certa. Se errar, pode tentar de novo."
        },
        {
          id: "m2-jogo",
          type: "order",
          title: "Monte o fluxo do acidente",
          body: "Toque na ordem: quem avisa, quem assume, quem classifica e onde registra.",
          minCorrect: 1,
          review: "O fluxo oficial: colaborador, gestor, diretor ou SESMT, e registro no Moki",
          items: [
            { key: "aviso", rank: 1, text: "O colaborador acidentado avisa na hora" },
            { key: "gestor", rank: 2, text: "O gestor imediato assume o chamado" },
            { key: "sesmt", rank: 3, text: "O diretor ou o SESMT classifica a ocorrência" },
            { key: "moki", rank: 4, text: "A ocorrência é registrada no Moki" }
          ],
          transcript: "Jogo. Toque os quatro passos na ordem do fluxo."
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
          transcript: "Módulo 3: EPIs, ferramentas manuais e práticas seguras em loja e depósito."
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
          transcript: "Uso do estilete. Esta ferramenta não é um E P I, porém você é o responsável pela conservação e pelo uso adequado. Nunca corte em direção à mão. Não use lâmina solta. O correto é luva no apoio, corte para fora e estilete homologado."
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
          transcript: "Casos reais de cortes. Falta de E P I e estilete fora do padrão causaram lesões graves em mãos e dedos. A foto é forte e só aparece se você escolher revelar."
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
          transcript: "Exemplos de ocorrência. Pratique a segurança em todos os momentos."
        },
        {
          id: "m3-desafio",
          type: "quiz-intro",
          title: "Missão: Seguro ou Inseguro?",
          count: 6,
          minCorrect: 4,
          icon: "🛡️",
          body: "São <strong>6 cenas</strong> da loja e do depósito. Classifique cada uma como <strong>Seguro</strong> ou <strong>Inseguro</strong>. Acerte no mínimo <strong>4</strong> para avançar.",
          transcript: "Missão seguro ou inseguro. São seis cenas. Classifique cada uma. Acerte no mínimo quatro para avançar."
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
          transcript: "Jogo. Classifique cada cena como segura ou insegura."
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
          count: 3,
          minCorrect: 2,
          icon: "🪪",
          transcript: "Desafio final do módulo 4: 3 perguntas."
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
          transcript: "Pergunta 1 do módulo 4."
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
          transcript: "Pergunta 2 do módulo 4."
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
          transcript: "Pergunta 3 — fim do módulo 4."
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
