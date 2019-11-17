module.exports = {
  title: 'NSL Bryophytes',
  description: 'Editing reference for the National Species Lists Bryophyte Shard',
  port: 4545,
  base: '/nsl-bryo-manual/',
  themeConfig: {
    sidebar: [
      {
        title: 'Manual',
        sidebarDepth: 1,
        collapsable: true,
        children: [
          ['/', 'Home'],
          ['/new-reference/', 'New reference'],
          ['/new-name/', 'New name'],
          ['/new-name/primary-instance/', 'Primary instance'],
          ['/new-name/secondary-instance/', 'Secondary instance']
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