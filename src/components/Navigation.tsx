import { Box } from '@mui/material';
import CustomLink from './CustomLink';

type NavigationProps = {
  title: string;
};

export default function Navigation({ title }: NavigationProps) {
  return (
    <Box className='flex justify-between border border-black rounded-md py-2 px-4 mb-8 bg-primary'>
      <Box>{title}</Box>
      <Box className='flex gap-2'>
        <CustomLink href='/'>Index</CustomLink>
        <CustomLink href='/login'>Login</CustomLink>
        <CustomLink href='/register'>Register</CustomLink>
      </Box>
    </Box>
  );
}
