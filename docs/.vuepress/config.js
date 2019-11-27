module.exports = {
  title: 'NSL Bryophytes',
  description: 'Editing reference for the National Species Lists Bryophyte Shard',
  port: 4545,
  base: '/nsl-bryo-manual/',
  plugins: ['@vuepress/medium-zoom', '@vuepress/back-to-top'],
  themeConfig: {
    repo: 'rbgvictoria/nsl-bryo-manual',
    // if your docs are in a different repo from your main project:
    docsRepo: 'rbgvictoria/nsl-bryo-manual',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    editLinkText: 'Edit in GitHub',
    sidebar: [
      {
        title: 'Manual',
        sidebarDepth: 1,
        collapsable: true,
        children: [
          ['/', 'Home'],
          ['/new-author/', 'New author'],
          ['/new-reference/', 'New reference'],
          ['/new-name/', 'New name'],
          ['/new-instance/', 'New instance'],
          ['/apc-tree/', 'APC tree'],
          ['/workflow/', 'Workflow']
        ]
      },
      {
        title: 'Examples',
        sidebarDepth: 2,
        collapsable: true,
        children: [
          ['/examples/spence-and-ramsay-2019/', 'Spence & Ramsay (2019)']
        ]
      }
    ]
  }
}