import 'server-only';
import { ArtistData, ArtistRelease, Release, SearchArtist } from '../lib/types';
const DISCOGS_API_URL = 'https://api.discogs.com';

// TODO: Implement Astist, Release and ReleaseDetails types
export async function searchArtists(query: string): Promise<SearchArtist[]> {
    const res = await fetch(
        `${DISCOGS_API_URL}/database/search?q=${query}&type=artist&per_page=10&token=${process.env.DISCOGS_TOKEN}`,
        { next: { revalidate: 300 } }
    );
    if (!res.ok) throw new Error('Failed to fetch artists');
    const data = await res.json();
    return data.results;
}

export async function getArtist(artistId: number): Promise<ArtistData> {
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
        profile: parseArtistProfile(data.profile),
        image: data.images ? data.images[0] : '/disc.svg'
    };
}

export async function getArtistReleases(
    artistId: number,
    page: number = 1,
    perPage: number = 5
): Promise<ArtistRelease[]> {
    const res = await fetch(
        `${DISCOGS_API_URL}/artists/${artistId}/releases?sort=year&sort_order=desc&page=${page}&per_page=${perPage}&token=${process.env.DISCOGS_TOKEN}`,
        { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`Failed to fetch releases for artist ${artistId}: ${res}`);
    const data = await res.json();
    return data.releases;
}

export async function getReleaseDetails(releaseId: number): Promise<Release> {
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

function parseArtistProfile(profile: string): string {
    // remove links from artist profile
    // links are of format [foo=bar] and we just want bar
    // not perfect, but I don't have the time to reverse engineer a parser for whatever discogs is using
    return profile.replace(/\[.*?=(.*?)\]/g, '$1');
}
