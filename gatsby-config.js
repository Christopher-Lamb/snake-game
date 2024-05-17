/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/snake-game`,
  siteMetadata: {
    title: `snake-game`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Snake Game`,
        short_name: `Snake Game`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `${__dirname}/src/images/favicon.png`,
        icons: [
          {
            src: `${__dirname}/src/images/favicon.png`,
            sizes: `64x64 32x32 24x24 16x16`,
            type: `image/png`,
          },
          {
            src: `${__dirname}/src/images/192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `${__dirname}/src/images/512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
