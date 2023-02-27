module.exports = {
  // General settings
  pathPrefix: "/", // If you deploy your site to yourdomain.tld/blog/ your pathPrefix should be "blog/"
  title: "Yashar Moradi", // Navigation and Site Title
  titleTemplate: "%s | Fractional CTO | Agile Coach", // To Add extra part in title. the title replace the %s. Example: `%s | Site title`
  description: "Strategic Technology Advisor | Fractional CTO | Agile Coach",
  siteUrl: "https://www.yasharmoradi.com", // Domain address of your site. Do not add trailing slash!
  siteLanguage: "en", // Language Tag on <html> element

  // place logo images in static/images folder - Used as site logo
  logoLight: "/images/yasharmoradi_logo.svg",
  logoDark: "/images/yasharmoradi_logo.svg",

  // sticky nav style
  stickyNav: true,

  //place default cover image in static/images folder - used in home page cover
  cover: "/images/cover1.jpg",

  // number of featured posts to show on home page
  featuredPostCount: 4,

  // number of latest posts to show on home page before load more button
  postPerPage: 4,

  disqusShortName: "Yashar Moradi", // disqus shortname for disqus comment

  // JSONLD / Manifest for SEO
  titleAlt: "Yashar Moradi", // Title for JSONLD
  headline: "Strategic Technology Advisor | Fractional CTO | Agile Coach", // Headline for schema.org JSONLD
  favicon: "src/assets/images/icon.png", // Used for manifest favicon generation
  shortName: "Yashar", // shortname for manifest. MUST be shorter than 12 characters
  author: "Yashar Moradi", // Author for schemaORGJSONLD
  themeColor: "#5c5fef",
  backgroundColor: "#ffffff",

  //Twitter and facebook data for SEO
  twitterUsername: "@yasharmoradi", // Twitter Username
  facebook: "example-page", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "XX-XXXXXXXXX-X",

  // mailchimp endpoint.
  // To know how to get it see plugin documentation https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
  mailchimpEndpoint:
    "https://example.us10.list-manage.com/subscribe/post?u=b9ef2fdd3edXXXXXXXXXXXXX&amp;id=XXXXXXXXXXX",
}
