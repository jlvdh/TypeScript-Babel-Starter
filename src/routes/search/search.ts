import { Request, Response, Router } from 'express'
import bing from '../../searchers/bing'
import hn from '../../searchers/hackernews'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const { query } = req.query
    const search = {
      query: query
    }
    const bingResult = await bing.createResults(search.query)
    const hnResult = await hn.createResults(search.query)

    res.json([...bingResult, ...hnResult])
  } catch (e) {
    console.log(e)
  }
})

export default router
