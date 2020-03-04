import Searcher from './Searcher'

const searchObject = {
  endpoint: 'https://developer.mozilla.org/api/v1/search/en-US',
  queryString: '?q=',
  resultMap: ['documents'],
  baseUrl: 'https://developer.mozilla.org/',
  objectMapper: {
    title: ['title'],
    url: ['slug'],
    description: ['excerpt']
  }
}

export default new Searcher(searchObject)
