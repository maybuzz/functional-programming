
const axios = require('axios')
const convert = require('xml-to-json-promise').xmlDataToJSON
const chalk = require('chalk')

module.exports = class OBA {
    constructor(options) {
        this.key = options.public,
        this.pages = {}
    }

    stringify(object) {
        const keys = Object.keys(object)
        const values = Object.values(object)
        return keys.map((key, i) => `&${key}=${values[i]}`).join('')
    }

    getAll(endpoint, query, pages) {
        const url = `https://zoeken.oba.nl/api/v1/${endpoint}/?authorization=${this.key}${this.stringify(query)}`
        this.pages = pages

        return this.getRequests(url)
          .then(requests => {
            return axios.all(requests)
              .then(axios.spread((...responses) => {
                const json = responses.map((res) => convert(res.data))
                return Promise.all(json)
              }))
              .then(res => res.map(obj => obj.aquabrowser.results[0].result))
              .then(res => {
                return {
                  data: [].concat(...res),
                  url: url
                }
              })
          })
      }

      getAmountOfRequests(url) {
        return axios.get(url)
          .then(res => convert(res.data))
          .then(res => (Math.ceil(res.aquabrowser.meta[0].count[0] / this.pages.pagesize) + 1))
      }
      getRequests(url) {
        return this.getAmountOfRequests(url).then(amount => {
            let promises = []
            amount > this.pages.maxpages ? amount = this.pages.maxpages : false
            for (let i = this.pages.page; i < amount; i++) {
                promises.push(axios.get(`${url}&page=${i}&pagesize=${this.pages.pagesize}`))
            }
            return promises
        })
    }
}
