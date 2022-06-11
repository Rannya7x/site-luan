import { Flex, Icon } from "@chakra-ui/react";
import { AiOutlineMenu } from 'react-icons/ai';
import { Logotipo } from '../Icons';

export function Header() {
  return (
    <Flex
      as="header"
      maxWidth={1480}
      w="100%"
      h="32"
      mx="auto"
      p="6"
      align="center"
      justifyContent="space-between"
      position="fixed"
      zIndex={4}
    >
      <Logotipo height="64" width="48"/>

      <Icon as={AiOutlineMenu} w="6" h="7" color="orange"/>
    </Flex>
  );
}