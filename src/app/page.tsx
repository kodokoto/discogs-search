import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import SearchArtist from '@/components/SearchArtist';

export default function Home() {
    return (
        <>
            <main className="w-[100vw] h-[calc(100vh-6rem)] flex justify-center content-center align-middle">
                <div className="fixed top-1/3 flex flex-col justify-center items-center">
                    <Logo className="text-3xl sm:text-5xl md:text-7xl mb-10" />
                    <div className="flex flex-row justify-center w-[80%]">
                        <SearchArtist />
                    </div>
                </div>
            </main>
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </>
    );
}
