export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '624d7bf97bec0e0aa18ef3b4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u5efmppa',
                  apiId: '6c231803-f0e0-4249-9527-6b4a46f60a49'
                },
                {
                  buildHookId: '624d7bf986639300a3592c08',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-68bwjniq',
                  apiId: '42f15e60-61e5-4f9b-bfae-0a5cd106026f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arbeen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-68bwjniq.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
