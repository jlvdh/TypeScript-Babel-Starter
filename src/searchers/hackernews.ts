import fetch from 'node-fetch'
import Search from '../types/Search'

const HACKERNEWS_SEARCH_ENDPOINT = 'http://hn.algolia.com/api/v1/search'

export default (search: Search) => {
  return new Promise((resolve, reject) => {
    fetch(`${HACKERNEWS_SEARCH_ENDPOINT}?query=${search.query}`)
      .then(res => res.json())
      .then((result: Object) => {
        resolve(result)
      })
      .catch(reject)
  })
}
