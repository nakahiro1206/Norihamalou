'use client'

import { useState, FormEvent } from 'react'
import { createClient } from '@supabase/supabase-js'

const isLocal = process.env.NEXT_PUBLIC_NODE_ENV === "local"

// Supabase クライアント
const supabase = createClient(
  isLocal ? process.env.NEXT_PUBLIC_SUPABASE_URL_LOCAL! : process.env.NEXT_PUBLIC_SUPABASE_URL!,
  isLocal ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_LOCAL! : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function AdminPage() {
  const [wait, setWait] = useState<number>(0)
  const [soldOut, setSoldOut] = useState(false)
  const [message, setMessage] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setResult('送信中…')

    const { error } = await supabase.from('stalls_status').insert({
      wait_minutes: wait,
      is_sold_out: soldOut,
      message
    })

    setResult(error ? `エラー: ${error.message}` : '保存しました！')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          待ち時間（分）:
          <input
            type="number"
            value={wait}
            onChange={e => setWait(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          品切れ:
          <input
            type="checkbox"
            checked={soldOut}
            onChange={e => setSoldOut(e.target.checked)}
          />
        </label>
      </div>

      <div>
        <label>
          表示メッセージ:
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">送信</button>
      {result && <p>{result}</p>}
    </form>
  )
}
