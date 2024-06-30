// app/api/search/route.ts
import { searchArtists } from '@/server/discogsApi'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 })
  }

  const artists = await searchArtists(query)
  return NextResponse.json(artists)
}