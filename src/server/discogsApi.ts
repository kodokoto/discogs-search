import 'server-only';

const DISCOGS_API_URL = 'https://api.discogs.com';

// TODO: Implement Astist, Release and ReleaseDetails types
export async function searchArtists(query: string): Promise<any[]> {
    const res = await fetch(
        `${DISCOGS_API_URL}/database/search?q=${query}&type=artist&per_page=10&token=${process.env.DISCOGS_TOKEN}`,
        { next: { revalidate: 300 } }
    );
    if (!res.ok) throw new Error('Failed to fetch artists');
    const data = await res.json();
    return data.results;
}
