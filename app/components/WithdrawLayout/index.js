/**
*
* WithdrawLayout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Withdraw from 'components/Withdraw';
import { Row, Col } from 'antd';

const Div = styled.div`
  margin-top: 3%;
  padding-bottom: 5%;
`;

const BigSpan = styled.span`
  color: #444444;
  font-size: 150%;
`;

const SmallSpan = styled.span`
  color: #8e8e8e;
  font-size: 110%;
`;

function WithdrawLayout(props) {
  const { reward, web3 } = props;
  return (
    <Div>
      <Row type="flex" align="left" >
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <Withdraw {...props} />
        </Col>
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <SmallSpan> Forging reward: </SmallSpan><BigSpan> {(reward && web3) ? web3.utils.fromWei(reward, 'ether') : 0}</BigSpan> <br />
          <br />
        </Col>
      </Row>
    </Div>
  );
}

WithdrawLayout.propTypes = {
  reward: PropTypes.string,
  web3: PropTypes.object,
};

export default WithdrawLayout;
