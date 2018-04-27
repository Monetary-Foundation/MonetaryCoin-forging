/**
*
* AddressInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Spin } from 'antd';
import CommitLayout from 'components/CommitLayout';
import WithdrawLayout from 'components/WithdrawLayout';

const Div = styled.div`
  padding-top: 2%;
  padding-bottom: 1%;
`;


const BigSpan = styled.span`
  color: #8e8e8e;
  font-size: 150%;
`;
const BigNumber = styled.span`
  color: #444444;
  font-size: 150%;
`;

const SmallSpan = styled.span`
  color: #8e8e8e;
  font-size: 110%;
`;

function AddressInfo(props) {
  const { web3, isWeb3Browser, getAddressInfoLoading, getAddressInfoError, addressInfo, ...rest } = props;

  if (getAddressInfoLoading) {
    return (
      <Spin
        spinning={getAddressInfoLoading}
        style={{ position: 'static' }}
        size="large"
        tip="Loading account info..."
      >
        <br />
        <br />
        <br />
      </Spin>
    );
  }

  if (getAddressInfoError) {
    return <div> {getAddressInfoError} </div>;
  }

  const address = addressInfo && addressInfo.address;
  const balance = addressInfo && addressInfo.balance;
  const commitment = addressInfo && addressInfo.commitment;
  const reward = addressInfo && addressInfo.reward;

  if (!isWeb3Browser) {
    return (
      <Div>
        <br /><hr />
        <Row type="flex" align="left" >
          <Col sm={{ span: 22, offset: 1 }} xs={{ span: 23, offset: 1 }}>
            <BigSpan> No web3 browser detected. </BigSpan> <br />
            You can use web3 browser such as Mist, Metamask or Trust wallet to commit Eth and withdraw tokens directly from this page.
          </Col>
        </Row>
      </Div>
    );
  }

  return (
    <Div>
      <br /><hr />
      <Row type="flex" align="left" >
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }} style={{ overflowX: 'hidden' }}>
          <h2> My Account </h2>
          <h4> Address: </h4> <BigSpan> {address && address.toUpperCase()} </BigSpan> <br />
        </Col>
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }} style={{ overflowX: 'hidden' }}>
          <h2> Details </h2> <br />
          <SmallSpan> My balance: </SmallSpan><BigNumber> {(balance && web3) ? web3.utils.fromWei(balance, 'ether') : 0}</BigNumber> <br />
        </Col>
      </Row>

      <CommitLayout {...rest} commitment={commitment} web3={web3} />
      <WithdrawLayout {...rest} reward={reward} web3={web3} />
    </Div>
  );
}

AddressInfo.propTypes = {
  web3: PropTypes.object,
  isWeb3Browser: PropTypes.bool,
  getAddressInfoLoading: PropTypes.bool,
  getAddressInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  addressInfo: PropTypes.object,
};

export default AddressInfo;
