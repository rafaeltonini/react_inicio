import React from 'react';

import { Products, Developers, Rafael } from '../Content';
import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown';
import { Container, DropdownStyles } from './styles';

function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
                backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
                backgroundHeight={167}
              />
            </li>
            <li>
              <DropdownOption
                name="Sobre"
                content={Rafael}
                backgroundHeight={215}
              />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default Navbar;
