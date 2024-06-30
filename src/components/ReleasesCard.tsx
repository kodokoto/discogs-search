import { getArtistReleases } from '@/server/discogsApi';
import RealeasesTable from './ReleasesTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export default async function ReleasesCard({ artistId }: { artistId: string }) {
    const releases = await getArtistReleases(Number(artistId));

    return (
        <>
            <Card className="border-none">
                <CardHeader>
                    <CardTitle>Releases</CardTitle>
                </CardHeader>
                <CardContent>
                    <RealeasesTable releases={releases} />
                </CardContent>
            </Card>
        </>
    );
}
