import React from 'react';

import { ProductsWrapper } from './styles';

export const Products = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="payments" />

        <div>
          <h3>Prod1</h3>
          <p>Prod1</p>
        </div>
      </li>
      <li>
        <span className="billing" />

        <div>
          <h3>Prod2</h3>
          <p>Prod2</p>
        </div>
      </li>
      <li>
        <span className="connect" />

        <div>
          <h3>Prod3</h3>
          <p>Prod3</p>
        </div>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <span className="sigma" />

        <h3>Cor1</h3>
        <p>Cor1</p>
      </li>
      <li>
        <span className="atlas" />

        <h3>Cor2</h3>
        <p>Cor2</p>
      </li>
      <li>
        <span className="radar" />

        <h3>Cor3</h3>
        <p>Cor3</p>
      </li>
      <li>
        <span className="issuing" />

        <h3>Cor4</h3>
        <p>Cor4</p>
      </li>
      <li>
        <span className="terminal" />

        <h3>Cor5</h3>
        <p>Cor5</p>
      </li>
    </ul>
  </ProductsWrapper>
);
