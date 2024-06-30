import { Suspense } from 'react';
import ArtistCard from '@/components/ArtistCard';

export default function ArtistPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col gap-4">
            <Suspense fallback={<p>Loading...</p>}>
                <ArtistCard artistId={params.id} />
            </Suspense>           
        </div>
    );
}
