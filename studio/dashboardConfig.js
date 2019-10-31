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
                  buildHookId: '5dbb0f6bda61ec398cd07eab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-bew4cuge',
                  apiId: 'f3e9df6e-24ba-4e3a-8977-546dbdee972f'
                },
                {
                  buildHookId: '5dbb0f6b7af8e3a61fd38b14',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web',
                  apiId: 'ebcc0224-83b3-4908-a82e-94eb2cda2dcd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matthewharwood/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web.netlify.com',
            category: 'apps'
          }
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
