import bing from './bing'
import hackernews from './hackernews'
import SearchType from '../types/Search'

export default (searchers: Array<(search: SearchType) => Object>, search: SearchType) => {
  searchers.forEach(searcher => {
    searcher(search)
  })
}
