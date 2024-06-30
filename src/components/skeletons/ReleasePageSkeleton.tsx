import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function ReleasePageSkeleton() {
    return (
        <Card className="overflow-hidden border-none">
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-0.5 w-full">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
                <Skeleton className="h-6 w-20 ml-6" />
            </CardHeader>
            <CardContent className="p-6 text-sm">
                <div className="flex flex-col md:flex-row md:gap-4">
                    <div className="flex w-full md:w-[50%] items-center justify-center pb-6 md:pb-0">
                        <Skeleton className="h-[400px] w-[400px]" />
                    </div>
                    <div className="md:w-[50%]">
                        <div className="grid gap-3">
                            <Skeleton className="h-5 w-32" />
                            <ul className="grid gap-3">
                                {[...Array(2)].map((_, i) => (
                                    <li key={i} className="flex items-center justify-between">
                                        <Skeleton className="h-4 w-20" />
                                        <Skeleton className="h-4 w-32" />
                                    </li>
                                ))}
                            </ul>
                            <Separator className="my-2" />
                            <ul className="grid gap-3">
                                {[...Array(4)].map((_, i) => (
                                    <li key={i} className="flex items-center justify-between">
                                        <Skeleton className="h-4 w-24" />
                                        <Skeleton className="h-4 w-28" />
                                    </li>
                                ))}
                            </ul>
                            <Separator className="my-4" />
                            <div className="grid gap-3">
                                <Skeleton className="h-5 w-24" />
                                <dl className="grid gap-3">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <Skeleton className="h-4 w-16" />
                                            <Skeleton className="h-4 w-20" />
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <Separator className="my-4" />
                <Skeleton className="h-5 w-24 mb-4" />
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-8 w-full mb-2" />
                ))}
            </CardContent>
        </Card>
    );
}
