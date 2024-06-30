import { Suspense } from 'react';
import ArtistCard from '@/components/ArtistCard';
import ArtistCardSkeleton from '@/components/skeletons/ArtistCardSkeleton';
import { Separator } from '@/components/ui/separator';
import ReleasesCard from '@/components/ReleasesCard';
import ReleasesTableSkeleton from '@/components/skeletons/ReleasesTableSkeleton';

export default function ArtistPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col gap-4">
            <Suspense fallback={<ArtistCardSkeleton />}>
                <ArtistCard artistId={params.id} />
            </Suspense>
            
            <Separator orientation="horizontal" />

            <Suspense fallback={<ReleasesTableSkeleton />}>
                <ReleasesCard artistId={params.id} />
            </Suspense>
        </div>
    );
}
