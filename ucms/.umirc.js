export default {
  plugins: [
    ['umi-plugin-routes', {
      exclude: [
        /models/,
        /services/,
      ],
    }],
    'umi-plugin-dva'
  ]

}
