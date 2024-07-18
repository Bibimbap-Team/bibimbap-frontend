import { forwardRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MUILink, LinkProps as MUILinkProps } from '@mui/material';

type CustomLinkProps = NextLinkProps & MUILinkProps;

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  function CustomLink(props, ref) {
    const { href, as, ...other } = props;

    return (
      <NextLink href={href} as={as} passHref>
        <MUILink ref={ref} {...other} />
      </NextLink>
    );
  }
);

export default CustomLink;
