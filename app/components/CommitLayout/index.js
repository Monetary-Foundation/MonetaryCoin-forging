/**
*
* CommitLayout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Commit from 'components/Commit';
import { Row, Col } from 'antd';

const Div = styled.div`
  margin-top: 3%;
`;

const BigSpan = styled.span`
  color: #444444;
  font-size: 150%;
`;

const SmallSpan = styled.span`
  color: #8e8e8e;
  font-size: 110%;
`;

function CommitLayout(props) {
  const { web3, commitment } = props;
  return (
    <Div>
      <Row type="flex" align="left" >
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <Commit {...props} />
        </Col>
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <br />
          <SmallSpan> My commitment: </SmallSpan><BigSpan> {(commitment && web3) ? web3.utils.fromWei(commitment, 'ether') : 0}</BigSpan> <br />
          <br />
        </Col>
      </Row>
    </Div>
  );
}

CommitLayout.propTypes = {
  web3: PropTypes.object,
  commitment: PropTypes.string,
};

export default CommitLayout;
