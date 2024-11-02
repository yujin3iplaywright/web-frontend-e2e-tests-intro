import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.post('/form', async (c) => {
    const form = await c.req.formData()
    for (const [key, value] of form.entries()) {
        console.log(`${key}: ${value}`)
    }
    return c.json({status: 'ok'})
})

serve(app)