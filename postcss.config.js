/* eslint-disable global-require */
module.export = {
  plugins: [
    require('autoprefixer')({
      browsers: 'last 2 versions',
      cascade: false,
    }),
  ],
}
