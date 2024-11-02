import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.post('/json', async (c) => {
    const json = await c.req.json()
    console.log(JSON.stringify(json, null, 2))
    return c.text('ok')
})

serve(app)