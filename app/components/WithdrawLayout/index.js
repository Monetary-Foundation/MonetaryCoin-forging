/**
*
* WithdrawLayout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Withdraw from 'components/Withdraw';
// import WithdrawDetails from 'components/WithdrawDetails';
import { Col } from 'antd';

const Div = styled.div`
  margin-top: 3%;
  padding-bottom: 5%;
`;

function WithdrawLayout(props) {
  return (
    <Col sm={{ span: 10, offset: 1 }} xs={{ span: 22, offset: 1 }}>
      <Div>
        <Withdraw {...props} />
      </Div>
    </Col>
  );
}

WithdrawLayout.propTypes = {
  reward: PropTypes.string,
  web3: PropTypes.object,
};

export default WithdrawLayout;
