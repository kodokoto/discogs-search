import { useRef } from 'react';
import {
    CommandDialog,
    CommandInput,
    Command,
    CommandList,
    CommandGroup,
    CommandEmpty,
    CommandItem
} from './ui/command';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function SearchArtistSuggestions({
    open,
    setOpen,
    query,
    setQuery,
    suggestions,
    isLoading,
    handleSelect
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
    query: string;
    setQuery: (query: string) => void;
    suggestions: any[];
    isLoading: boolean;
    handleSelect: (artist: any) => void;
}) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <Command shouldFilter={false}>
                <CommandInput
                    placeholder="Search artists..."
                    value={query}
                    onValueChange={setQuery}
                    ref={inputRef}
                />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {!(!isLoading && suggestions.length === 0) && (
                        <CommandGroup heading="Artists">
                            {isLoading && (
                                <CommandItem disabled>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Loading...
                                </CommandItem>
                            )}
                            {!isLoading &&
                                suggestions.map((artist) => (
                                    <CommandItem
                                        key={artist.id}
                                        onSelect={() => handleSelect(artist)}>
                                        <div className="flex gap-4">
                                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                <Image
                                                    src={artist.cover_image}
                                                    alt={artist.title}
                                                    fill
                                                    style={{
                                                        objectFit: 'cover'
                                                    }}
                                                    sizes="32px"
                                                />
                                            </div>
                                            <div className="flex flex-col ml-2 justify-center">
                                                <div className="font-semibold">{artist.title}</div>
                                            </div>
                                        </div>
                                    </CommandItem>
                                ))}
                        </CommandGroup>
                    )}
                </CommandList>
            </Command>
        </CommandDialog>
    );
}
