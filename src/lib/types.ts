export interface ArtistData {
    name: string;
    profile: string;
    image: string;
}

// from https://github.com/nktknshn/typescript-discogs-client/tree/master/src/types

export interface Image {
    uri: string;
    height: number;
    width: number;
    resource_url: string;
    type: 'primary' | 'secondary';
    uri150: string;
}

export interface Video {
    duration: number;
    description: string;
    embed: boolean;
    uri: string;
    title: string;
}

export interface SearchArtist {
    thumb: string;
    title: string;
    uri: string;
    master_url: null;
    cover_image: string;
    resource_url: string;
    master_id: null;
    type: 'artist';
    id: number;
    user_data?: {
        in_collection: boolean;
        in_wantlist: boolean;
    };
}

export interface ArtistRelease {
    status: string;
    stats: {
        community: {
            in_collection: number;
            in_wantlist: number;
        };
    };
    thumb: string;
    format: string;
    title: string;
    label: string;
    role: string;
    year?: number;
    resource_url: string;
    artist: string;
    type: 'release';
    id: number;
    trackinfo?: string;
}

export interface Release {
    identifiers: Identifier[];
    series: unknown[];
    labels: Company[];
    community: ReleaseCommunity;
    year: number;
    images?: Image[];
    format_quantity: number;
    id: number;
    artists_sort: string;
    genres: string[];
    thumb: string;
    num_for_sale: number;
    title: string;
    artists: EntityArtist[];
    date_changed: Date | null;
    lowest_price: number | null;
    status: string;
    released_formatted?: string;
    released?: string;
    date_added: Date | null;
    extraartists: EntityArtist[];
    country?: string;
    notes?: string;
    tracklist: ReleaseTrack[];
    companies: Company[];
    uri: string;
    formats: Format[];
    resource_url: string;
    data_quality: string;
    estimated_weight?: number;
    styles?: string[];
    videos?: Video[];
    master_id?: number;
    master_url?: string;
}

export interface ReleaseCommunity {
    status: string;
    rating: Rating;
    want: number;
    contributors: Contributor[];
    have: number;
    submitter: Contributor | null;
    data_quality: string;
}

export interface Contributor {
    username: string;
    resource_url: string;
}

export interface Rating {
    count: number;
    average: number;
}

export interface Company {
    name: string;
    entity_type: string;
    catno: string;
    resource_url: string;
    id: number;
    entity_type_name: string;
}

export interface Format {
    qty: string;
    descriptions?: string[];
    name: string;
    text?: string;
}

export interface Identifier {
    type: string;
    value: string;
    description?: string;
}

export interface ReleaseTrack {
    duration: string;
    position: string;
    type_: string;
    artists?: EntityArtist[];
    title: string;
    extraartists?: EntityArtist[];
}

export interface EntityArtist {
    join: string;
    name: string;
    anv: string;
    tracks: string;
    role: string;
    resource_url: string;
    id: number;
}
