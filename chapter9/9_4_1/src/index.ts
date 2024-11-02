import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
  return c.text('Hello Hono!')
})

serve(app)

// my-app のディレクトリで npm run dev で起動したあとテストを動かす