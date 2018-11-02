require("dotenv").config()

const axios = require("axios")
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

axios.all([
  obaApi.get("search", {
    // thats jessy[]
    facet: ["type(book)", "language(eng)"],
    librarian: true,
    q: "author:J.R.R. Tolkien",
    refine: true
  }, "title"),

  obaApi.get("search", {
    // thats jessy[]
    facet: ["type(book)", "language(eng)"],
    librarian: true,
    q: "title:Lord of the rings",
    refine: true
  }, "title"),

  obaApi.get("search", {
    // thats jessy[]
    facet: ["type(book)", "language(eng)"],
    librarian: true,
    q: "title:The Hobbit",
    refine: true
  }, "title")
]).then(response => {
  console.log(response)

  app.get("/", (req, res) => res.json(response))
  app.listen(port, () => {
    console.log(chalk.green("Listening on port ${port}"))
  })
    // Both requests are now complete
  })
