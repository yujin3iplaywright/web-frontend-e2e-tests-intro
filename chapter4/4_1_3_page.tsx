import type { Metadata } from 'next'
import { Checkout } from './checkout'

export const metadata: Metadata = {
    title: '商品詳細 - チェックアウト',
    description: '4.1.3 toHaveTitle()とtoHaveURL()',
}

export default function checkout() {
    return (
        <main>
            <h1>商品詳細 - チェックアウト</h1>
            <Checkout />
        </main>
    )
}