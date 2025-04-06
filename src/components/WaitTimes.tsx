// components/WaitTimes.tsx
'use client'

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const isLocal = process.env.NEXT_PUBLIC_NODE_ENV === 'local';

const supabase = createClient(
  isLocal ? process.env.NEXT_PUBLIC_SUPABASE_URL_LOCAL! : process.env.NEXT_PUBLIC_SUPABASE_URL!,
  isLocal ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_LOCAL! : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
export const WaitingTimes = () => {
  const [wait, setWait] = useState<number | null>(null)

  useEffect(() => {
    const fetchWait = async () => {
      const { data, error } = await supabase
        .from('stalls_status')
        .select('wait_minutes')
        .order('created_at', { ascending: false })
        .limit(1)
        .single()

      if (error) {
        console.error('Error fetching wait time:', error.message)
      } else {
        setWait(data?.wait_minutes ?? null)
      }
    }

    fetchWait()
  }, [])

  return <span>{wait !== null ? `${wait} min` : 'Loading...'}</span>
}
