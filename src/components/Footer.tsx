import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t w-full py-4 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-xs sm:text-sm leading-loose text-muted-foreground md:text-left">
                    built by <Link href="/">kodokoto</Link>. The source code is available on{' '}
                    <Link href="/">GitHub</Link>.
                </p>
            </div>
        </footer>
    );
}
