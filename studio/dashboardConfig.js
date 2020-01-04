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
                  buildHookId: '5e0ffe1c3e9a1186f59cf69d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2qrw3k8d',
                  apiId: 'd31a7069-0f16-4dfc-817d-f813e5773790'
                },
                {
                  buildHookId: '5e0ffe1c898951dccaed504c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kw76fp1i',
                  apiId: 'e2050b04-91c9-4582-8c7a-9dd9d291b1c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reecep/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kw76fp1i.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
