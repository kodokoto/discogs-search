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

export async function getArtist(artistId: number): Promise<any> {
    const res = await fetch(
        `${DISCOGS_API_URL}/artists/${artistId}?token=${process.env.DISCOGS_TOKEN}`,
        {
            next: { revalidate: 3600 }
        }
    );
    if (!res.ok) throw new Error('Failed to fetch artist');
    const data = await res.json();
    // just return the name, profile and first image
    return {
        name: data.name,
        profile: data.profile,
        image: data.images ? data.images[0] : '/disc.svg'
    };
}

export async function getArtistReleases(
    artistId: number,
    page: number = 1,
    perPage: number = 5
): Promise<any[]> {
    const res = await fetch(
        `${DISCOGS_API_URL}/artists/${artistId}/releases?sort=year&sort_order=desc&page=${page}&per_page=${perPage}&token=${process.env.DISCOGS_TOKEN}`,
        { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`Failed to fetch releases for artist ${artistId}: ${res}`);
    const data = await res.json();
    return data.releases;
}

export async function getReleaseDetails(releaseId: number): Promise<any> {
    const res = await fetch(
        `${DISCOGS_API_URL}/releases/${releaseId}?token=${process.env.DISCOGS_TOKEN}`,
        {
            next: { revalidate: 86400 }
        }
    );
    if (!res.ok) throw new Error('Failed to fetch release details');
    const data = await res.json();
    return data;
}
