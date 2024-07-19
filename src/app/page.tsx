import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Index from '@/components/Index';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth='xl' className='my-2'>
      <Header />
      <Navigation title='Index Page' />
      <main>
        <Index />
      </main>
      <Footer />
    </Container>
  );
}
