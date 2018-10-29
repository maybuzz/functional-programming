const OBA = require('oba-api')

require('dotenv').config()

// Setup authentication to api server
const client = new OBA({
  // ProQuest API Keys
  public: process.env.PUBLIC,
  secret: process.env.SECRET
})

// General usage:
// client.get({ENDPOINT}, {PARAMS});
// ENDPOINT = search | details | refine | schema | availability | holdings
// PARAMS = API url parameter options (see api docs for more info)

// Client returns a promise which resolves the APIs output in JSON

// Example search to the word 'rijk' sorted by title:
client.get('search', {
  q: 'rijk',
  sort: 'title'
})
  .then(res => console.log(res)) // JSON results
  .catch(err => console.log(err)) // Something went wrong in the request to the API
