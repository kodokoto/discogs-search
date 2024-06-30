import ReactQueryProvider from '../providers/ReactQueryProvider';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className="flex flex-col items-center">
                <ReactQueryProvider>{children}</ReactQueryProvider>
            </body>
        </html>
    );
}
