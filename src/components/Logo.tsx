import Image from 'next/image';
import { Link } from '@mui/material';

export default function Logo() {
  return (
    <Link href='/'>
      <Image src='/logo.png' width={64} height={64} alt='Logo of Bibimbap' />
    </Link>
  );
}
