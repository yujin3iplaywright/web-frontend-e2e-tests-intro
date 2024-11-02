import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Hono!'))

serve(app)

// my-app のディレクトリで npm run dev で起動したあとテストを動かす