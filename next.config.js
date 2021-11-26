const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
    basePath: isProd ? '/password-submit-website-game-out-game' : '',
    assetPrefix: isProd ? '/password-submit-website-game-out-game/' : '',
}