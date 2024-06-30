import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
export default function ArtistCardSkeleton() {
    return (
        <Card className="flex flex-col md:flex-row justify-center border-none shadow-none">
            <CardHeader className="flex flex-col">
                <CardTitle className="text-2xl">
                    <Skeleton className="h-8 w-48" />
                </CardTitle>
                <CardDescription className="text-xs">
                    <Skeleton className="h-4 w-16 mt-2" />
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4 px-6 md:pt-6 w-full">
                <div className="w-[50%]">
                    <AspectRatio ratio={1}>
                        <Skeleton className="w-full h-full" />
                    </AspectRatio>
                </div>
                <div className="md:w-[80%]">
                    <div className="font-semibold">
                        <Skeleton className="h-6 w-20 mb-2" />
                    </div>
                    <div className="space-y-2">
                        {[...Array(4)].map((_, index) => (
                            <Skeleton key={index} className="h-4" />
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
