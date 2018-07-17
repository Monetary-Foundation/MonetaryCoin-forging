/**
*
* SubHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { exchanges } from 'utils/constants';

const RowS = styled(Row)`
  div{
    text-align: center;
  }
  span {
    font-size: 1.3em;
  }
`;

function SubHeader(props) {
  const { tokenSymbol } = props;
  const token = tokenSymbol || 'MERO';
  const { name, url } = exchanges[token][0];
  return (
    <RowS type="flex" >
      <Col xs={{ span: 20, offset: 1 }}>
        <span>
          Get {tokenSymbol} via the
          <a target="_blank" rel="noopener" href="https://monetarycoin.io">
            {' MonetaryCoin Distribution '}
          </a>
          or the
          <a target="_blank" rel="noopener" href={url}>
            {` ${name}`} exchange
          </a>
        </span>
      </Col>
    </RowS>
  );
}

SubHeader.propTypes = {
  tokenSymbol: PropTypes.string,
};

export default SubHeader;
