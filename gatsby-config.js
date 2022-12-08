module.exports = {
  siteMetadata: {
    title: 'IBM AIOps Training',
    description: 'IBM AIOps Training',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/cp4waiops-training`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        isSwitcherEnabled: 'false',
        
      },
    },
  ],
};
