import { Request, Response, Router } from 'express'
import bing from '../../searchers/bing'
import hn from '../../searchers/hackernews'
import mdn from '../../searchers/mdn'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const { q, engines: eng } = req.query

    let engines = (eng && eng.split(',')) || []

    engines = engines.reduce((acc: any[], cur: string) => {
      switch (cur) {
        case 'hn':
          acc.push(hn.getResults(q))
          break
        case 'bing':
          acc.push(bing.getResults(q))
          break
        case 'mdn':
          acc.push(mdn.getResults(q))
          break
      }
      return acc
    }, [])

    if (engines.length === 0) {
      engines.push(hn.getResults(q), bing.getResults(q))
    }

    Promise.all(engines)
      .then((results) => {
        res.json(results.reduce((acc, cur) => {
          acc.push(...cur)
          return acc
        }, []))
      })
  } catch (e) {
    console.log(e)
  }
})

export default router
