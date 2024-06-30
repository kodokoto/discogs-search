export default function ArtistPage({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>Artist: {params.id}</h1>
        </div>
    );
}
