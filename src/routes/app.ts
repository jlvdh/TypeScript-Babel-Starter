import express, { Request, Response } from 'express'
import searchRouter from './search/search'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello'
  })
})

app.use('/search', searchRouter)

export default app
