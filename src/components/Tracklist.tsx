import type { ReleaseTrack } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export default function Tracklist({ tracklist }: { tracklist: ReleaseTrack[] }) {
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
