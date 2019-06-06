export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf918d1d9827fb1dab70cad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6cpyhhtq',
                  apiId: '9fab29f5-fea4-4039-88d1-6f5649d7ef23'
                },
                {
                  buildHookId: '5cf918d1a6a75178e6950acd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cneisiko',
                  apiId: '31950aef-ed3b-43b1-914c-32bc269025d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AkashBadhe/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-cneisiko.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
