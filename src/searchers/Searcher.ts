import fetch from 'node-fetch'
import searchType from '../types/Search'

class Searcher {
    searcher: searchType
    constructor (searcher: searchType) {
      this.searcher = searcher
    }

    fetchResults (query: String): Promise<Array<object>> {
      return new Promise((resolve, reject) => {
        fetch(this.searcher.endpoint + this.searcher.queryString + query, { headers: this.searcher.headers })
          .then(res => res.json())
          .then((result: Array<object>) => {
            resolve(result)
          })
          .catch(reject)
      })
    }

    createResults = async (query: String) => {
      const results = await this.fetchResults(query)

      const resultArr = this.searcher.resultMap.reduce((acc, curr) => acc[curr], results)

      console.log(resultArr)
      return this.mapResults(resultArr)

    //   const { title, description, url } = this.searcher.objectMapper
    //   return resultArr.map(result => ({
    //     // find location of required info eg ['results']
    //     title: title.reduce((acc, curr) => acc[curr], result),
    //     description: description.reduce((acc, curr) => acc[curr], result),
    //     url: url.reduce((acc, curr) => acc[curr], result)
    //   }))
    }

    mapResults (results: Array<any>) {
      // filter empty strings from object mapper

      const objectMapper: {} = Object.keys(this.searcher.objectMapper)
        .filter(key => this.searcher.objectMapper[key].length)
        .reduce((acc, curr) => {
          acc[curr] = this.searcher.objectMapper[curr]
          return acc
        }
        , {})

      return results.map(result => (

        Object.keys(objectMapper).reduce((acc, curr) => {
          acc[curr] = objectMapper[curr].reduce((acc, curr) => acc[curr], result)
          return acc
        }, {}
        )))
    //     objectMapper.reduce((acc, curr) => {
    //         acc[curr.key()] =
    //     }, {})
    //   })
    }
}

export default Searcher
