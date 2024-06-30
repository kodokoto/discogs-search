import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export type Track = {
    position: string;
    title: string;
    duration: string;
    artists: { id: string; name: string }[];
    extraartists: { id: string; name: string }[];
};

export default function Tracklist({ tracklist }: { tracklist: Track[] }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Position</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Featuring</TableHead>
                    <TableHead className="text-right">Duration</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tracklist.map((track) => (
                    <TableRow key={track.position}>
                        <TableCell>{track.position}</TableCell>
                        <TableCell>{track.title}</TableCell>
                        <TableCell className="hidden md:table-cell">
                            <span>
                                {track.extraartists?.map((artist) => artist.name).join(', ')}
                            </span>
                        </TableCell>
                        <TableCell className="text-right">{track.duration}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
