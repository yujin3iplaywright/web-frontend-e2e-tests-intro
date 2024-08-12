'use client'

import { useState, useCallback, useRef } from 'react'

export function ShuffleMemberForm() {
    // 結果
    const [result, setResult] = useState([] as string[])
    // 要素への参照
    const firstRef = useRef<HTMLInputElement>(null)
    const secondRef = useRef<HTMLInputElement>(null)
    const thirdRef = useRef<HTMLInputElement>(null)
    // 通信
    const callApi = useCallback(async () => {
        const members = [] as string[]
        // const refs = [firstRef, firstRef, firstRef] // ここにバグ！
        const refs = [firstRef, secondRef, thirdRef] // 直した！
        for (const ref of refs) {
            if (ref.current?.value) {
                members.push(ref.current?.value)
            }
        }
        const res = await fetch('/api/shuffle', {
            method: 'post',
            body: JSON.stringify({ members })
        })
        if (res.ok) {
            const result = await res.json() as { members: string[]}
            setResult(result.members)
        }
    }, [])
    return (
        <>
            <label htmlFor="first">textbox:</label>
            <input type="text" ref={firstRef} id="first" name="textbox"/><br/>
            <button onClick={callApi}>シャッフル</button><br/>
            <label htmlFor="result">結果</label><br/>
            <output id="result" htmlFor="first second third fourth">{result.join("→")}</output>
        </>
    )
}