import type { Project, ProjectsData } from '~/types/portfolio'
import { githubUrl } from './constants'
import curriculoAiHomePageImage from '~/assets/images/projects/curriculo-ai/home-page.png'
import curriculoAiResultsPageImage from '~/assets/images/projects/curriculo-ai/result-page.png'
import curriculoAiCoverImage from '~/assets/images/projects/curriculo-ai/cover.png'
import checknumbersHomePageImage from '~/assets/images/projects/check-numbers/home-page.png'
import checknumbersCoverImage from '~/assets/images/projects/check-numbers/cover.png'
import foodExplorerHomePageImage from '~/assets/images/projects/food-explorer/home.png'
import foodExplorerContentImage from '~/assets/images/projects/food-explorer/content.png'
import foodExplorerCreateImage from '~/assets/images/projects/food-explorer/create-page.png'
import foodExplorerEditPageImage from '~/assets/images/projects/food-explorer/edit-page.png'
import foodExplorerSearchPageImage from '~/assets/images/projects/food-explorer/search.png'
import foodExplorerCoverImage from '~/assets/images/projects/food-explorer/cover.png'
import rocketPayProductImage from '~/assets/images/projects/rocket-pay/home.png'
import rocketPayCoverImage from '~/assets/images/projects/rocket-pay/cover.png'
import focusTimerCoverImage from '~/assets/images/projects/focus-timer/cover.png'
import focusTimerPreviewDarkModeImage from '~/assets/images/projects/focus-timer/preview-darkmode.png'
import focusTimerPreviewLightModeImage from '~/assets/images/projects/focus-timer/preview-lightmode.png'
import questLogCoverImage from '~/assets/images/projects/quest-log/cover.png'
import questLogLoginPageImage from '~/assets/images/projects/quest-log/login-page.jpeg'
import questLogMissionPageImage from '~/assets/images/projects/quest-log/mission-page.jpeg'
import questLogPainelPageImage from '~/assets/images/projects/quest-log/painel-page.jpeg'
import questLogProfilePageImage from '~/assets/images/projects/quest-log/profile-page.jpeg'


export const projectsSection: ProjectsData = {
  title: 'Projetos',
  subtitle: 'Uma seleção de interfaces, produtos e ferramentas construídos com foco em execução, clareza e qualidade técnica.',
}

export const projects: Project[] = [
  {
    slug: 'curriculo-ai',
    title: 'Currículo AI',
    shortDescription: 'Uma ferramenta que avalia currículos e sugere melhorias com ajuda de IA.',
    description: 'Projeto desenvolvido para uma apresentação da faculdade com o objetivo de utilizar inteligência artificial para solucionar um problema comum entre profissionais em busca de oportunidades: a insegurança em relação à qualidade do próprio currículo. A ideia surgiu a partir da minha própria experiência ao procurar o primeiro emprego, quando surgiam dúvidas sobre quais informações incluir, como me apresentar melhor e se o currículo estava alinhado com as expectativas do mercado.\n\nA aplicação permite que o usuário envie seu currículo em PDF e informe sua área de atuação para receber uma análise personalizada. Com base nessas informações, a inteligência artificial avalia o conteúdo do documento e gera um feedback detalhado, apontando pontos fortes, oportunidades de melhoria e sugestões para tornar o currículo mais atrativo para recrutadores. O objetivo é oferecer uma orientação rápida, acessível e prática para ajudar profissionais a se prepararem melhor para processos seletivos.',
    image: curriculoAiCoverImage,
    gallery: [
      { type: 'image', src: curriculoAiHomePageImage },
      { type: 'image', src: curriculoAiResultsPageImage },
    ],
    githubLinks: [{ url: `${githubUrl}/curriculo-ai` }],
    demoUrl: 'https://curriculo-ai-sepia.vercel.app',
    technologies: ['Nuxt', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
  },
  {
    slug: 'check-numbers',
    title: 'Check Numbers',
    shortDescription: 'Uma ferramenta que organiza apostas e confere automaticamente os resultados de sorteios.',
    description:
      'Esse é um projeto pessoal que surgiu para resolver uma situação comum entre familiares, amigos e colegas que participam de bolões da Mega da Virada. Quando existem muitas apostas, conferir manualmente cada jogo após o sorteio pode se tornar uma tarefa demorada e confusa. A aplicação permite cadastrar e armazenar todas as apostas de forma simples, mantendo os dados salvos no navegador para consultas futuras. Após a divulgação do resultado oficial, basta informar os números sorteados para que o sistema faça a conferência automaticamente, exibindo quantos acertos cada jogo obteve e quais foram os números correspondentes. O projeto nasceu a partir da experiência de pessoas próximas que participavam desses bolões e precisavam conferir diversos jogos manualmente todos os anos. Embora tenha sido criado pensando na Mega da Virada, a solução também pode ser utilizada para auxiliar na conferência de outros sorteios e apostas semelhantes, tornando o processo muito mais rápido, organizado e prático.',
    image: checknumbersCoverImage,
    gallery: [{ type: 'image', src: checknumbersHomePageImage }],
    githubLinks: [{ url: `${githubUrl}/checkNumbers` }],
    demoUrl: 'https://gabriel-vitebo.github.io/checkNumbers/',
    technologies: ['React', 'Vite', 'Typescript', 'Styled Components'],
  },
  {
    slug: 'food-explorer',
    title: 'Food Explorer',
    shortDescription: 'Uma plataforma de pedidos de comida com experiência completa para clientes e administradores.',
    description:
      'O Food Explorer foi o projeto final desenvolvido para a conclusão do curso Explorer, da Rocketseat, e marcou minha primeira experiência construindo uma aplicação full stack completa de forma independente. Em uma época em que ferramentas de inteligência artificial para desenvolvimento ainda não faziam parte do dia a dia, fui responsável por planejar, desenvolver e integrar todas as partes do sistema, incluindo front-end, back-end, banco de dados e deploy da aplicação. Foi um dos projetos mais desafiadores da minha trajetória até então, pois precisei aprender e aplicar diversos conceitos que eram totalmente novos para mim. A aplicação simula uma plataforma de delivery de alimentos com dois tipos de usuários. Os clientes podem navegar pelo cardápio, pesquisar pratos, favoritar seus itens preferidos, adicionar produtos ao carrinho e acompanhar a atualização dos valores em tempo real durante a montagem do pedido. Já os administradores possuem acesso a ferramentas de gerenciamento que permitem criar, editar e remover pratos, mantendo o catálogo sempre atualizado. Além de consolidar meus conhecimentos técnicos, esse projeto representou um marco importante na minha evolução como desenvolvedor por ter sido a primeira aplicação completa que consegui idealizar, construir e entregar sozinho.',
    image: foodExplorerCoverImage,
    gallery: [
      { type: 'youtube', url: 'https://youtu.be/q3YN-PIgiAs', title: 'Demonstração do Food Explorer' },
      { type: 'image', src: foodExplorerHomePageImage },
      { type: 'image', src: foodExplorerContentImage },
      { type: 'image', src: foodExplorerCreateImage },
      { type: 'image', src: foodExplorerEditPageImage },
      { type: 'image', src: foodExplorerSearchPageImage },
    ],
    githubLinks: [{ label: 'Front-end', url: `${githubUrl}/food-explorer` }, { label: 'Back-end', url: `${githubUrl}/api-food-explorer` }],
    technologies: ['React', 'MySql', 'Node.js', 'Express', 'JWT', 'Styled Components'],
  },
  {
    slug: 'rocket-pay',
    title: 'Rocket Pay',
    shortDescription: 'Uma aplicação que identifica a bandeira do cartão em tempo real utilizando expressões regulares',
    description:
      'O Rocket Pay foi desenvolvido durante um evento da Rocketseat com foco no estudo e na prática de expressões regulares (Regex). O objetivo do projeto era criar uma interface de cadastro de cartão capaz de identificar automaticamente a bandeira do cartão com base nos números informados pelo usuário, sem utilizar bibliotecas externas ou serviços de terceiros. Conforme os dados são preenchidos, a interface é atualizada em tempo real para exibir visualmente a bandeira correspondente, tornando a experiência mais dinâmica e interativa. Como o foco do projeto era o aprendizado, nenhum dado é armazenado, validado ou enviado para qualquer serviço, funcionando apenas como uma simulação visual. O maior desafio foi construir toda a lógica de identificação utilizando exclusivamente expressões regulares, exercitando conceitos importantes de reconhecimento de padrões e manipulação de texto que são amplamente utilizados no desenvolvimento de software.',
    image: rocketPayCoverImage,
    gallery: [{ type: 'image', src: rocketPayProductImage }],
    githubLinks: [{ url: `${githubUrl}/Rocketpay` }],
    demoUrl: 'https://rocketpay-swart.vercel.app/',
    technologies: ['HTML', 'CSS', 'Regex', 'JavaScript'],
  },
  {
    slug: 'desafio-focus-timer',
    title: 'Focus Timer',
    shortDescription: 'Uma aplicação de foco e produtividade inspirada na técnica Pomodoro com sons ambientes e tema escuro.',
    description:
      'O Focus Timer foi o primeiro projeto que desenvolvi completamente sozinho e representa um marco importante na minha trajetória como desenvolvedor. Criado como parte de um desafio do curso Explorer, da Rocketseat, o projeto foi uma oportunidade para colocar em prática tudo o que eu havia aprendido até então sobre HTML, CSS e JavaScript, sem utilizar qualquer biblioteca externa. A aplicação foi inspirada na técnica Pomodoro e tem como objetivo ajudar usuários a manterem o foco durante períodos de estudo ou trabalho. Ao acessar a plataforma, o usuário encontra um cronômetro pronto para uso, com opções para iniciar, pausar, reiniciar ou até mesmo definir um tempo personalizado. Para tornar a experiência mais agradável e imersiva, o sistema também oferece diferentes sons ambientes, como chuva e natureza, que podem ser reproduzidos simultaneamente ao cronômetro, com controle individual de volume para cada opção. Quando o tempo chega ao fim, a aplicação exibe um aviso indicando que o ciclo foi concluído. Um dos maiores desafios do projeto foi a implementação completa do modo escuro, desenvolvida manualmente sem o auxílio de bibliotecas ou frameworks. Além de ser uma ferramenta funcional de produtividade, o Focus Timer representa um momento importante de aprendizado, onde consegui transformar conceitos fundamentais de desenvolvimento web em uma aplicação completa e interativa.',
    image: focusTimerCoverImage,
    gallery: [
      { type: 'image', src: focusTimerPreviewDarkModeImage },
      { type: 'image', src: focusTimerPreviewLightModeImage },
    ],
    githubLinks: [{ url: `${githubUrl}/Desafio-focus-timer-2.0` }],
    demoUrl: 'https://gabriel-vitebo.github.io/Desafio-focus-timer-2.0/',
    technologies: ['JavaScript', 'CSS', 'HTML'],
  },
  {
    slug: 'quest-log',
    title: 'Quest Log',
    shortDescription: 'Uma aplicação que transforma a gestão de tarefas em uma jornada de evolução inspirada em RPGs.',
    description:
      'O Quest Log nasceu como um trabalho da faculdade sobre desenvolvimento de aplicações mobile, mas rapidamente se transformou em um desafio pessoal muito maior. Além de cumprir os requisitos acadêmicos, decidi aproveitar a oportunidade para aprender tecnologias completamente novas para mim, tornando este meu primeiro aplicativo mobile desenvolvido com React Native e minha primeira experiência utilizando Firebase. A aplicação foi criada para ajudar usuários a organizar e acompanhar suas tarefas do dia a dia, permitindo criar atividades, definir níveis de dificuldade e acompanhar seu progresso através de diferentes estados, como pendente, em andamento e concluída. O grande diferencial do projeto está na sua abordagem inspirada em jogos de RPG. Em vez de simplesmente concluir tarefas em uma lista comum, o usuário assume o papel de um membro de uma guilda e cada atividade se transforma em uma missão. Conforme as missões são concluídas, o usuário recebe pontos de experiência proporcionais à dificuldade da tarefa, evolui de nível e desbloqueia novos títulos ao longo da jornada. A proposta foi unir produtividade e gamificação para tornar a organização de tarefas mais divertida, engajante e motivadora, transformando obrigações do cotidiano em pequenas conquistas dentro de uma aventura pessoal.',
    image: questLogCoverImage,
    gallery: [
      { type: 'youtube', url: 'https://youtube.com/shorts/YtVXiPXary0?feature=share', title: 'Demonstração do Quest Log' },
      { type: 'image', src: questLogLoginPageImage },
      { type: 'image', src: questLogMissionPageImage },
      { type: 'image', src: questLogPainelPageImage },
      { type: 'image', src: questLogProfilePageImage },
    ],
    githubLinks: [{ url: `${githubUrl}/questlog` }],
    technologies: ['React Native', 'TypeScript', 'Firebase'],
  },
]
