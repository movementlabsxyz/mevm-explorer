import { InputGroup, Input, InputLeftAddon, InputLeftElement, Icon, chakra, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import type { ChangeEvent, FormEvent } from 'react';

import searchIcon from 'icons/search.svg';

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  backgroundColor?: string;
}

const SearchBarDesktop = ({ onChange, onSubmit, backgroundColor }: Props) => {
  return (
    <chakra.form
      noValidate
      onSubmit={ onSubmit }
      display={{ base: 'none', lg: 'block' }}
      w="100%"
      bg={ backgroundColor }
      borderRadius="10px"
    >
      <InputGroup>
        <InputLeftAddon w="111px">All filters</InputLeftAddon>
        <InputLeftElement w={ 6 } ml="132px" mr={ 2.5 }>
          <Icon as={ searchIcon } boxSize={ 6 } color={ useColorModeValue('blackAlpha.600', 'whiteAlpha.600') }/>
        </InputLeftElement>
        <Input
          paddingInlineStart="50px"
          placeholder="Search by addresses / transactions / block / token... "
          ml="1px"
          onChange={ onChange }
          borderColor={ useColorModeValue('blackAlpha.100', 'whiteAlpha.200') }
        />
      </InputGroup>
    </chakra.form>
  );
};

export default React.memo(SearchBarDesktop);
