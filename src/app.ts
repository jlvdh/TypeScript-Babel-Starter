import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hallo fjongons!'
  })
})

export default app
