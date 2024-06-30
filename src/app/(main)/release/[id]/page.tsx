import Tracklist from '@/components/Tracklist';
import { getReleaseDetails } from '@/server/discogsApi';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import CoverImage from '@/components/CoverImage';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export default async function ReleasePage({
    params
}: {
    params: { id: string };
    searchParams: URLSearchParams;
}) {
    const releaseDetails = await getReleaseDetails(Number(params.id));

    return (
        <Card className="overflow-hidden border-none shadow-none">
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                        {releaseDetails.title}
                    </CardTitle>
                    <CardDescription>
                        {releaseDetails.artists.map((artist: any) => artist.name).join(', ')}
                    </CardDescription>
                </div>
                <div className="ml-6 flex items-center gap-1">
                    {releaseDetails.num_for_sale > 0 ? (
                        <Badge variant="default" className="ml-auto sm:ml-0 whitespace-nowrap">
                            In stock
                        </Badge>
                    ) : (
                        <Badge variant="destructive" className="ml-auto sm:ml-0  whitespace-nowrap">
                            Out of stock
                        </Badge>
                    )}
                </div>
            </CardHeader>
            <CardContent className="px-6 text-sm">
                <div className="flex flex-col md:flex-row md:gap-4">
                    <div className="flex w-full md:w-[40%] items-center justify-center pb-6 md:pb-0">
                        <AspectRatio ratio={1}>
                            <CoverImage
                                src={
                                    releaseDetails.images
                                        ? releaseDetails.images[0].uri
                                        : '/disc.svg'
                                }
                                alt={releaseDetails.title}
                            />
                        </AspectRatio>
                    </div>
                    <div className="md:w-[60%]">
                        <div className="grid gap-3">
                            <div className="font-semibold">Release Details</div>
                            <ul className="grid gap-3">
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Label</span>
                                    <span className="text-right">
                                        {releaseDetails.labels
                                            .map((label: any) => label.name)
                                            .join(', ')}
                                    </span>
                                </li>
                                <li className="flex items-start justify-between">
                                    <span className="text-muted-foreground">Format</span>
                                    <pre className="text-right whitespace-pre-wrap">
                                        {releaseDetails.formats
                                            .map((format: any) => {
                                                return `${format.name}, ${format.descriptions.join(', ')}`;
                                            })
                                            .join('\n\r ')}
                                    </pre>
                                </li>
                            </ul>
                            <Separator className="my-2" />
                            <ul className="grid gap-3">
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Year</span>
                                    <span>{releaseDetails.year}</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Genre</span>
                                    <span className="text-right">
                                        {releaseDetails.genres.join(', ')}
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Style</span>
                                    <span className="text-right">
                                        {(releaseDetails.styles ?? ['--']).join(', ')}
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Country</span>
                                    <span className="text-right">
                                        {releaseDetails.country ?? '--'}
                                    </span>
                                </li>
                            </ul>
                            <Separator className="my-4" />
                            <div className="grid gap-3">
                                <div className="font-semibold">Statistics</div>
                                <dl className="grid gap-3">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Have</dt>
                                        <dd>{releaseDetails.community.have}</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Want</dt>
                                        <dd>{releaseDetails.community.want}</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Rating</dt>
                                        <dd>
                                            {releaseDetails.community.rating.average}/5 (
                                            {releaseDetails.community.rating.count})
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="font-semibold">Tracklist</div>
                <Tracklist tracklist={releaseDetails.tracklist} />
            </CardContent>
        </Card>
    );
}
