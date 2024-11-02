import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.post('/file', async (c) => {
    const form = await c.req.formData()
    for (const [key, value] of form.entries()) {
        if (value instanceof File) {
            console.log(`${key}: name=${value.name} type=${value.type} content=${await value.text()}`)
        } else {
            console.log(`${key}: ${value}`)
        }
    }
    return c.json({status: 'ok'})
})

serve(app)