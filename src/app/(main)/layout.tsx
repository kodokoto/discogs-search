import SearchArtist from '@/components/SearchArtist';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className="py-3 px-4 sm:py-6 sm:px-8 flex justify-between items center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <Logo className="flex text-xl" />
                <div>
                    <SearchArtist />
                </div>
            </header>
            <main className="w-[90vw] sm:w[80vw] md:[70vw] min-w-[320px] max-w-[1000px] h-full]">
                {children}
            </main>
            <Footer />
        </>
    );
}
