'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function RealeasesTable({ releases }: { releases: any }) {
    const router = useRouter();
    console.log(releases);
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className=" w-[100px]"></TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Year Released</TableHead>
                    <TableHead className="hidden md:table-cell text-right">Label</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {releases.map((release: any) => (
                    <TableRow
                        key={release.id}
                        onClick={() =>
                            router.push(`/release/${release.main_release ?? release.id}`)
                        }>
                        <TableCell>
                            <div className="w-12 h-12">
                                <Image
                                    src={release.thumb}
                                    alt={release.title}
                                    width={50}
                                    height={50}
                                    style={{
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                        </TableCell>
                        <TableCell>{release.title}</TableCell>
                        <TableCell className="hidden md:table-cell">
                            {release.year ?? '--'}
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-right">
                            {release.label ?? '--'}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
