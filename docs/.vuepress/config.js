module.exports = {
  title: 'NSL Bryophytes',
  description: 'Editing reference for the National Species Lists Bryophyte Shard',
  port: 4545,
  base: '/nsl-bryo-manual/',
  repo: 'rbgvictoria/nsl-bryo-manual',
  plugins: ['@vuepress/medium-zoom', '@vuepress/back-to-top'],
  themeConfig: {
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
          ['/apc-tree/', 'APC tree']
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