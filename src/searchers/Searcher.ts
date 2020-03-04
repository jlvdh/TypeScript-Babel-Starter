import fetch from 'node-fetch'
import { Search as searchType, Mapper, Map, SearchResults } from '../types/Search'

class Searcher {
    searcher: searchType
    constructor (searcher: searchType) {
      this.searcher = searcher
    }

    fetchResults (query: String): Promise<any> { // can contain array or object
      return new Promise((resolve, reject) => {
        fetch(this.searcher.endpoint + this.searcher.queryString + query, { headers: this.searcher.headers })
          .then(res => res.json())
          .then((result: Array<object>) => {
            resolve(result)
          })
          .catch(reject)
      })
    }

    getResultArray (results: any) {
      return this.searcher.resultMap.reduce((acc, curr) => acc[curr], results)
    }

    filterEmptyUrls (results: SearchResults): SearchResults {
      return results.filter(result => result.url)
    }

    addBaseUrl (results: SearchResults): SearchResults {
      return this.searcher.baseUrl
        ? results.map(result => {
          result.url = this.searcher.baseUrl + result.url
          return result
        })
        : results
    }

    getResults = (query: String) => {
      return this.fetchResults(query)
        .then(result => this.getResultArray(result))
        .then(result => this.mapResults(result))
        .then(result => this.filterEmptyUrls(result))
        .then(result => this.addBaseUrl(result))
        .catch(err => {
          console.log(err)
        })
    }

    mapResults (results: any[]):SearchResults {
      // filter empty strings from object mapper
      const objectMapper: Mapper = Object.keys(this.searcher.objectMapper)
        .filter(key => this.searcher.objectMapper[key].length)
        .reduce((acc: Mapper, curr) => {
          acc[curr] = this.searcher.objectMapper[curr]
          return acc
        }
        , {})
      // construct new mapped object
      return results.map(result => (
        Object.keys(objectMapper).reduce((acc: Map, curr) => {
          acc[curr] = objectMapper[curr].reduce((acc, curr) => acc[curr], result)
          return acc
        }, {}
        )))
    }
}

export default Searcher
