import { getArtist } from '@/server/discogsApi';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CoverImage from './CoverImage';

export default async function ArtistCard({ artistId }: { artistId: string }) {
    const artist = await getArtist(Number(artistId));

    return (
        <Card className="flex flex-col md:flex-row justify-center border-none shadow-none">
            <CardHeader className="flex flex-col">
                <CardTitle className="text-2xl">{artist.name}</CardTitle>
                <CardDescription className="text-xs">artist</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4 px-6 md:pt-6 w-full">
                <div className="w-[50%]">
                    <AspectRatio ratio={1}>
                        <CoverImage
                            src={artist.image.resource_url ?? artist.image}
                            alt={artist.name}
                        />
                    </AspectRatio>
                </div>
                <div className="md:w-[80%]">
                    <div className="font-semibold">About</div>
                    <p>
                        {artist.profile}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
