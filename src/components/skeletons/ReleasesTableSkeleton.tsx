import { Skeleton } from '../ui/skeleton';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from '@/components/ui/card';

export default function SkeletonTable() {
    return (
        <Card className="border-none">
            <CardHeader>
                <CardTitle>Releases</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className=" w-[100px]"></TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead className='hidden md:table-cell'>Year Released</TableHead>
                            <TableHead className="hidden md:table-cell">Label</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array(5)
                            .fill(0)
                            .map((release: any) => (
                                // <Link href={`/release/${release.id}`} key={release.id} className="w-[100%]">
                                <TableRow key={release.id}>
                                    <TableCell className="">
                                        <Skeleton className="w-10 h-10" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="w-20 h-5" />
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Skeleton className="w-20 h-5" />
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Skeleton className="w-20 h-5" />
                                    </TableCell>
                                </TableRow>
                                // </Link>
                            ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
