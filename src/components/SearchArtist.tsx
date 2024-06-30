'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';

import { Button } from './ui/button';

import dynamic from 'next/dynamic';
import type { SearchArtist } from '@/lib/types';

const SearchArtistSuggestions = dynamic(() => import('./SearchArtistSuggestions'), {
    loading: () => <div></div>
});

interface Artist {
    id: number;
    title: string;
}

async function fetchSuggestions(query: string): Promise<SearchArtist[]> {
    if (query.length < 2) return [];
    const res = await fetch(`/api/search/artists?q=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error('Failed to fetch suggestions');
    return res.json();
}

export default function SearchArtist() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [debouncedQuery] = useDebounce(query, 300);
    const router = useRouter();

    const { data: suggestions = [], isLoading } = useQuery({
        queryKey: ['artistSuggestions', debouncedQuery],
        queryFn: () => fetchSuggestions(debouncedQuery),
        enabled: debouncedQuery.length >= 2
    });

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const handleSelect = (artist: Artist) => {
        setOpen(false);
        router.push(`/artist/${artist.id}`);
    };

    return (
        <>
            <Button
                variant="outline"
                className=" relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
                onClick={() => setOpen(true)}>
                <span className="hidden lg:inline-flex">Search artists...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <SearchArtistSuggestions
                open={open}
                setOpen={setOpen}
                query={query}
                setQuery={setQuery}
                suggestions={suggestions}
                isLoading={isLoading}
                handleSelect={handleSelect}
            />
        </>
    );
}
