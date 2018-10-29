// const OBA = require('oba-api')
const axios = require('axios');
var parseString = require('xml2js').parseString;

require('dotenv').config()

// // Setup authentication to api server
const allKeys = {
  public: process.env.PUBLIC,
  secret: process.env.SECRET
}

const searchEndpoint = '&pagesize'

axios.get(`https://zoeken.oba.nl/api/v1/search/?q=boek&authorization=${allKeys.public + ''}`)
  .then(function (response) {
    // handle success
    console.log('succes')

    parseString(response.data, function(err, result) {
      if(err){console.log(err)}
      else {
        console.log(result);
      }
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


// General usage:
// client.get({ENDPOINT}, {PARAMS});
// ENDPOINT = search | details | refine | schema | availability | holdings
// PARAMS = API url parameter options (see api docs for more info)
//
// Client returns a promise which resolves the APIs output in JSON
//
// Example search to the word 'rijk' sorted by title:
// client.get('search', {
//   q: 'rijk',
//   sort: 'title'
// })
//   .then(res => console.log(res)) // JSON results
//   .catch(err => console.log(err)) // Something went wrong in the request to the API
