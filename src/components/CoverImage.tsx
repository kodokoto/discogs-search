import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';

export default function CoverImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="h-full w-full grid grid-cols-20 grid-rows-20 ">
            <div className=" overflow-hidden rounded-lg shadow-xl row-start-1 row-span-19 col-start-2 col-span-19 z-10">
                <AspectRatio ratio={1}>
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        objectFit="cover"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                    />
                </AspectRatio>
            </div>
            <div className="rounded-lg shadow-sm row-start-2 row-span-19 col-start-1 col-span-19 bg-gradient-to-tr from-primary/25 to-primary"></div>
        </div>
    );
}
