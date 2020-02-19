import Searcher from './Searcher'

const searchObject = {
  headers: { },
  endpoint: 'http://hn.algolia.com/api/v1/search',
  queryString: '?query=',
  resultMap: ['hits'],
  objectMapper: {
    title: ['title'],
    description: [],
    url: ['url']
  }
}

export default new Searcher(searchObject)
