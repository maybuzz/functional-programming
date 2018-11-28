require("dotenv").config()

const axios = require("axios")
const gissaApi = require("./oba-api-gissa.js")
const chalk = require("chalk")
const express = require("express")
const app = express()
const port = 1999

const obaApi = new gissaApi({
  public: process.env.PUBLIC
})

// Search for method, params and than optional where you wanna find something
// returns first 20 items
// obaApi.get(endpoint, params, filterKey)
// possible endpoints: search (needs 'q' parameter) | details (needs a 'frabl' parameter) | availability (needs a 'frabl' parameter) | holdings/root | index/x (where x = facet type (like 'book' ))
// possible parameters: q, librarian, refine, sort etc. check oba api documentation for all
// possible filterKey: any higher order key in response object, like title returns only title objects instead of full data object

axios.all([
 // obaApi.getAll("search", {
 //      facet: "type(book)&facet=language(dut)",
 //      q: "author:J.K. Rowling",
 //      librarian: true,
 //      refine: true
 //    }),
  obaApi.getAll("search", {
      facet: "type(book)&facet=language(dut)",
      q: "author:J.R.R. Tolkien",
      librarian: true,
      refine: true
    },
    {
      page:1,
      pagesize: 20,
      maxpages: 6
    })

]).then(axios.spread(response => {
  let res = response.data
  let allArr = []
  let newArr = res.map(book => {
    let bookTitle = book.titles[0].title[0]._
    let bookAuthor = book.authors[0]["main-author"][0]._
    let pages = book.description[0]["physical-description"][0]._

    if (bookAuthor !== "Tolkien, J.R.R." && bookAuthor !== "Rowling, J.K.") {
      return
    }

    bookTitle = bookTitle.substring(0, bookTitle.indexOf('/')).trim()
    pages = Number(pages.substring(0, pages.indexOf('p')).trim())

    let allObj = {bookTitle, bookAuthor, pages}

    allArr.push(allObj)
  })
  console.log(allArr)
  return allArr

})).then(response => {
  app.get("/", (req, res) => res.json(response))
  app.listen(port, () => {
    console.log(chalk.green("Listening on port " + port))
  })
})
.catch(err => console.log(err))
