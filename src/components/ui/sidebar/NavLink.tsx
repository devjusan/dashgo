import { Icon, Link, LinkProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';

interface INavLink extends LinkProps {
  icon: ElementType;
  children: string;
}

const NavLink = ({ icon, children, ...rest }: INavLink) => (
  <Link display="flex" alignItems="center" {...rest}>
    <Icon as={icon} fontSize="20" />
    <Text ml="4" fontWeight="medium">
      {children}
    </Text>
  </Link>
);

export default NavLink;
