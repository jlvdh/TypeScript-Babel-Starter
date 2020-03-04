import express, { Request, Response } from 'express'
import searchRouter from './search/search'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello'
  })
})

app.use('/search', searchRouter)

export default app
