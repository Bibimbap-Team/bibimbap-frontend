import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth='xl' className='my-2'>
      <main>
        <Header />
        <Navigation title='Index' />
        <Typography variant='body1'>Welcome to the home page!</Typography>
        <Footer />
      </main>
    </Container>
  );
}
