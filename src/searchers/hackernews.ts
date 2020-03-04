import Searcher from './Searcher'

const searchObject = {
  endpoint: 'http://hn.algolia.com/api/v1/search',
  queryString: '?query=',
  resultMap: ['hits'],
  objectMapper: {
    title: ['title'],
    url: ['url']
  }
}

export default new Searcher(searchObject)
