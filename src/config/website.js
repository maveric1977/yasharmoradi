module.exports = {
  // General settings
  pathPrefix: "/", // If you deploy your site to yourdomain.tld/blog/ your pathPrefix should be "blog/"
  title: "Yashar Moradi: Fractional CTO | Coach | Technology Advisor", // Navigation and Site Title
  titleTemplate: "Yashar Moradi: %s", // To Add extra part in title. the title replace the %s. Example: `%s | Site title`
  description: "Hi I am Yashar Moradi a seasoned technology leader in Munich, Germany, providing expert guidance as a Technology Advisor, Fractional CTO, and Agile Coach. Let's work together to achieve your technology and leadership goals.",
  siteUrl: "https://www.yasharmoradi.com", // Domain address of your site. Do not add trailing slash!
  siteLanguage: "en", // Language Tag on <html> element

  // place logo images in static/images folder - Used as site logo
  logoLight: "/images/yasharmoradi_logo.svg",
  logoDark: "/images/yasharmoradi_logo.svg",

  // sticky nav style
  stickyNav: true,

  //place default cover image in static/images folder - used in home page cover
  cover: "/images/cover.jpg",

  // number of featured posts to show on home page
  featuredPostCount: 4,

  // number of latest posts to show on home page before load more button
  postPerPage: 4,

  disqusShortName: "Yashar Moradi", // disqus shortname for disqus comment

  // JSONLD / Manifest for SEO
  titleAlt: "Yashar Moradi", // Title for JSONLD
  headline: "Technology Advisor | Fractional CTO | Agile Coach", // Headline for schema.org JSONLD
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
  googleAnalytics4Id: "G-S9HDKZMGYP",

  // mailchimp endpoint.
  // To know how to get it see plugin documentation https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
  mailchimpEndpoint:
    "https://example.us10.list-manage.com/subscribe/post?u=b9ef2fdd3edXXXXXXXXXXXXX&amp;id=XXXXXXXXXXX",
}
