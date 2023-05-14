import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/Modal/RegisterModal';
import Navbar from './components/Navbar/Navbar';
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './provider/ToastProvider';
import LoginModal from './components/Modal/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/Modal/RentModal';
import Footer from './components/ui/Footer'
import PostModal from './components/Modal/PostModal';

export const metadata = {
  title: 'Scubapp',
  description: 'Best scuba diving app',
}

const font = Nunito({
  subsets: ['latin-ext'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currrentUSer = await getCurrentUser();


  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />

          <RegisterModal />
          <LoginModal />   
          <RentModal />    
          <PostModal />   
          <Navbar currentUser={currrentUSer}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
