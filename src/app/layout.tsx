import ReactQueryProvider from '../providers/ReactQueryProvider';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head>
                <title>Discogs Search</title>
                <meta name="description" content="A discogs search app"></meta>
            </head>
            <body className="flex flex-col items-center">
                <ReactQueryProvider>{children}</ReactQueryProvider>
            </body>
        </html>
    );
}
