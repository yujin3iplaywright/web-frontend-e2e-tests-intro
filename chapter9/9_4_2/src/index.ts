import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Hono!'))
app.get('header-and-query', async (c) => {
    console.log(c.req.header)
    console.log(c.req.queries())
    return c.text('ok')
})

serve(app)