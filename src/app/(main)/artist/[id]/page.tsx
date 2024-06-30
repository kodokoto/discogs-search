import { Suspense } from 'react';
import ArtistCard from '@/components/ArtistCard';
import ArtistCardSkeleton from '@/components/skeletons/ArtistCardSkeleton';

export default function ArtistPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col gap-4">
            <Suspense fallback={<ArtistCardSkeleton />}>
                <ArtistCard artistId={params.id} />
            </Suspense>           
        </div>
    );
}
