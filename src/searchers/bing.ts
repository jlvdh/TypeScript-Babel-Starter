// import fetch from 'node-fetch'
// import Search from '../types/Search'
import Searcher from './Searcher'

declare var process : {
  env: {
    BING_KEY: string
  }
}

const AUTH_KEY = process.env.BING_KEY

const searchObject = {
  headers: { 'Ocp-Apim-Subscription-Key': AUTH_KEY },
  endpoint: 'https://api.cognitive.microsoft.com/bing/v7.0/search',
  queryString: '?q=',
  resultMap: ['webPages', 'value'],
  objectMapper: {
    title: ['name'],
    description: ['snippet'],
    url: ['url']
  }
}

export default new Searcher(searchObject)
