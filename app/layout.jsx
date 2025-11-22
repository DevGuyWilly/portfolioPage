import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from './components/Sidebar';
import RightRail from './components/RightRail';
import MobileNav from './components/MobileNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wilson Dagah - Software Engineer',
  description: 'Forward-thinking Software Engineer specializing in Java, Python, and Cloud Platforms.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased flex h-screen overflow-hidden bg-[var(--background)]`}>
        {/* Left Sidebar - Desktop */}
        <Sidebar />

        {/* Mobile Navigation */}
        <MobileNav />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto relative snap-y snap-mandatory scroll-smooth no-scrollbar">
             <div className="min-h-full p-3 md:p-4 flex justify-center">
                <div className="w-full bg-white rounded-[2rem] shadow-sm min-h-[calc(100vh-2rem)] relative overflow-hidden">
                   {children}
                </div>
             </div>
        </main>

        {/* Right Rail */}
        <RightRail />
      </body>
    </html>
  );
}
