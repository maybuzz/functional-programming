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
  // obaApi.get("search", {
  //   facet: ["type(book)", "language(dut)"],
  //   q: "author:J.R.R. Tolkien",
  //   // page: 2,
  //   librarian: true,
  //   refine: true
  // }),

  obaApi.get("search", {
    facet: ["type(book)", "language(dut)"],
    q: "author:J.K. Rowling",
    page: 2,
    librarian: true,
    refine: true
  })

]).then(axios.spread(function iets(auteur){
  let res = auteur.data.aquabrowser.results[0]
  let allArr = []
  let newArr = res.result.map(function (book){
    let bookTitle = book.titles[0].title[0]._
    let bookAuthor = book.authors[0]["main-author"][0]._
    let totalPages = book.description[0]["physical-description"][0]._

    let allObj = {bookTitle, bookAuthor, totalPages}

    allArr.push(allObj)
  })
  console.log(allArr)
  return allArr

})).then(response => {
  app.get("/", (req, res) => res.json(response))
  app.listen(port, () => {
    console.log(chalk.green("Listening on port ${port}"))
  })
    // Both requests are now complete
  })
