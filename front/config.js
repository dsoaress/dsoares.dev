const fetch = require('node-fetch')
const url =
  'https://gpnzjmky.api.sanity.io/v1/data/query/production?query=*[_id%20==%20$id]&$id=%22siteSettings%22'

const config = fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

module.exports = config
