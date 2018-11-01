require("dotenv").config()

const api = require("./oba-api.js")
const chalk = require("chalk");
const express = require("express")
const app = express()
const port = 1999

const obaApi = new api({
  url: "https://zoeken.oba.nl/api/v1/",
  key: process.env.PUBLIC
})

// Search for method, params and than optional where you wanna find something
// returns first 20 items
// obaApi.get(endpoint, params, filterKey)
// possible endpoints: search (needs 'q' parameter) | details (needs a 'frabl' parameter) | availability (needs a 'frabl' parameter) | holdings/root | index/x (where x = facet type (like 'book' ))
// possible parameters: q, librarian, refine, sort etc. check oba api documentation for all
// possible filterKey: any higher order key in response object, like title returns only title objects instead of full data object
obaApi.get("search", {
  facet: ["type(book)", "language(dut)"],
  q: "in de ban van de ring",
  // page: 2,
  librarian: true,
  refine: true
}).then(response => {

// const newSummarys = response.data.map(item => {
//       return item[0]["_"] ? item[0]["_"] : item[0]
// })
// console.log(newSummarys)

  // response ends up here
  console.log(response)

  // Make server with the response on the port
  app.get("/", (req, res) => res.json(response))
  app.listen(port, () => console.log(chalk.green("Listening on port ${port}")))
})
