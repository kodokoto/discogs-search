import Link from 'next/link';

export default function Logo(props: any) {
    return (
        <div {...props}>
            <Link
                className="my-auto text-[length:inherit] text-center font-bold bg-clip-text text-transparent bg-gradient-to-tr from-violet-700 to-violet-300"
                href={'/'}>
                Discogs Search
            </Link>
        </div>
    );
}
