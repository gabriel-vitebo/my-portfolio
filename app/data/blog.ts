import type { BlogArticle } from '~/types/blog'

export const blogArticles: BlogArticle[] = [
  {
    id: 'como-construir-interfaces-mais-acessiveis-com-vue',
    title: 'Como construir interfaces mais acessíveis com Vue',
    date: 'Artigo',
    description: 'Um guia prático sobre escolhas semânticas, estados de foco e pequenos cuidados de implementação que melhoram a experiência de leitura e navegação para todas as pessoas.',
    sections: [
      {
        title: 'Comece pela semântica',
        paragraphs: [
          'Acessibilidade começa antes de qualquer biblioteca ou componente visual. Quando a estrutura da página usa elementos HTML com significado claro, leitores de tela, navegadores e tecnologias assistivas conseguem entender melhor o que está sendo exibido.',
          'Em Vue, isso significa escolher botões para ações, links para navegação, títulos em uma hierarquia coerente e seções que representem blocos reais de conteúdo. Essa base reduz a necessidade de atributos extras e deixa a interface mais previsível para todo mundo.',
        ],
      },
      {
        title: 'Cuide dos estados interativos',
        paragraphs: [
          'Toda interação precisa ser perceptível. Estados de foco, hover, carregamento e desabilitado ajudam a pessoa a entender onde está, o que pode fazer e o que acabou de acontecer.',
          'Ao criar componentes reutilizáveis, vale tratar esses estados como parte da API visual do componente. Um botão sem foco visível ou um link que só muda pela cor pode funcionar para parte do público, mas deixa outras pessoas perdidas no fluxo.',
        ],
      },
      {
        title: 'Escreva componentes com intenção',
        paragraphs: [
          'Componentes acessíveis são mais fáceis de manter quando a intenção fica explícita. Props bem nomeadas, textos alternativos obrigatórios quando uma imagem comunica informação e labels associados a campos de formulário evitam que detalhes importantes desapareçam durante refatorações.',
          'Também é importante testar o uso pelo teclado. Navegar pela tela usando Tab, Enter, Espaço e Escape revela problemas que muitas vezes não aparecem quando a interface é usada apenas com mouse ou trackpad.',
        ],
      },
      {
        title: 'Acessibilidade melhora o produto',
        paragraphs: [
          'Pensar em acessibilidade não é uma etapa separada do desenvolvimento. É uma forma de criar interfaces mais claras, consistentes e resistentes a contextos diferentes de uso.',
          'Quando a experiência funciona bem com boa semântica, foco visível, textos objetivos e componentes previsíveis, ela tende a funcionar melhor para pessoas com deficiência, para quem está em dispositivos pequenos, para quem usa atalhos e para quem só quer concluir uma tarefa sem fricção.',
        ],
      },
    ],
  },
]
