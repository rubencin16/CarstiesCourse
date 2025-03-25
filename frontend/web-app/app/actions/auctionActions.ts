'use server'

import { Auction, PagedResult } from '@/types'
import { auth } from '@/auth'

export async function getData(query: string): Promise<PagedResult<Auction>> {
  const res = await fetch(`http://localhost:6001/search${query}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export async function updateAuctionTest() {
  const data = {
    mileage: Math.floor(Math.random() * 1000) + 1,
  }

  const session = await auth()

  const res = await fetch(
    'http://localhost:6001/auctions/0195cad9-f8d9-7e59-992f-2b38c1e1a6e7',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.accessToken || ''}`,
      },
      body: JSON.stringify(data),
    },
  )

  if (!res.ok) return { status: res.status, statusText: res.statusText }
  return res.statusText
}
