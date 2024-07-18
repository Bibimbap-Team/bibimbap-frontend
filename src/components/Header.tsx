import Logo from '@/components/Logo';
import { Box } from '@mui/material';
import CustomLink from './CustomLink';

export default function Header() {
  return (
    <Box className='flex justify-between'>
      <Box>
        <Logo />
        <i>Professional way to prepare programming contest problems</i>
      </Box>
      <Box className='flex gap-2'>
        <CustomLink href='/login'>Login</CustomLink>
        <CustomLink href='/register'>Register</CustomLink>
      </Box>
    </Box>
  );
}
