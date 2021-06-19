import React from 'react';

import { DevelopersWrapper } from './styles';

export const Developers = () => (
  <DevelopersWrapper>
    <div className="primary">
      <span className="documentation" />

      <div>
        <h3>Dev</h3>
        <p>REACT</p>

        <div>
          <ul>
            <li>
              <h4>Blabla</h4>
            </li>
            <li>Blabla</li>
            <li>BlablaBlablaBlabla</li>
            <li>Blabla</li>
            <li>BlablaBlablaBlabla</li>
          </ul>

          <ul>
            <li>
              <h4>Blabla</h4>
            </li>
            <li>BlablaBlabla</li>
            <li>BlablaBlablaBlabla</li>
            <li>Blabla</li>
            <li>BlablaBlabla</li>
          </ul>
        </div>
      </div>
    </div>

    <ul className="secondary">
      <li>
        <span className="api-reference" />
        BlablaBlablaBlablaBlabla
      </li>
      <li>
        <span />
        BlablaBlabla
      </li>
      <li>
        <span />
        BlablaBlablaBlabla
      </li>
    </ul>
  </DevelopersWrapper>
);
