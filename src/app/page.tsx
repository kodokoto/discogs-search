import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <main className="w-[100vw] h-[calc(100vh-6rem)] flex justify-center content-center align-middle">
                <div className="fixed top-1/3 flex flex-col justify-center items-center">
                    <Logo className="text-3xl sm:text-5xl md:text-7xl mb-10" />
                    <div className="flex flex-row justify-center w-[80%]">
                        <input type="text" className="w-[80%] p-2 border-2 border-gray-300 rounded-l-md" />
                    </div>
                </div>
            </main>
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </>
    );
}
