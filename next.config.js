const withTM = require('next-transpile-modules')([
  '@amcharts/amcharts4/core',
  '@amcharts/amcharts4/charts',
  '@amcharts/amcharts4/themes/animated',
  '@amcharts/amcharts4-geodata/canadaLow',
])

module.exports = withTM({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})
