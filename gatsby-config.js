require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Blessly Creation`,
    siteTitle: `Blessly Creation`,
    siteHeadline: `Blessly - Evolution Of Fashion`,
    siteDescription: `Blessly - Evolution Of Fashion`,
    author: `@abhirajsavani`,
    siteLanguage: `en`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: `Blessly`,
        socialMedia: [
          {
            title: `Instagram`,
            href: `https://www.instagram.com/blessly.creation/`,
          },
          {
            title: `Twitter`,
            href: `https://twitter.com/BlesslyCreation`,
          },
        ],
        location: `Ahmedabad,Gujarat,India`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia - @lekoarts/gatsby-theme-emilia`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
