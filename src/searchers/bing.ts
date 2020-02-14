import fetch from 'node-fetch'
import Search from '../types/Search'

declare var process : {
  env: {
    BING_KEY: string
  }
}

const AUTH_KEY = process.env.BING_KEY

const BING_SEARCH_ENDPOINT = 'https://api.cognitive.microsoft.com/bing/v7.0/search'

export default (search: Search) => {
  return new Promise((resolve, reject) => {
    const headers = { 'Ocp-Apim-Subscription-Key': AUTH_KEY }

    fetch(`${BING_SEARCH_ENDPOINT}?q=${search.query}`, { headers })
      .then(res => res.json())
      .then((result: Object) => {
        resolve(result)
      })
      .catch(reject)
  })
}
