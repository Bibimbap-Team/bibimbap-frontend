import { Box } from '@mui/material';
import CustomLink from './CustomLink';

type NavigationProps = {
  title: string;
};

export default function Navigation({ title }: NavigationProps) {
  return (
    <Box className='flex justify-between border border-black rounded-md p-2 bg-primary'>
      <Box>{title} Page</Box>
      <Box className='flex gap-2'>
        Index
        <CustomLink href='/login'>Login</CustomLink>
        <CustomLink href='/register'>Register</CustomLink>
      </Box>
    </Box>
  );
}
