/**
*
* Web3Status
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'antd';
const Token = styled.div`
  font-size: 330%;
`;

function Web3Status(props) {
  const {
    initStatus,
    web3,
    // networkName,
    tokenName,
    tokenAddress,
    distributionAddress,
    // tokenList,
  } = props;

  if (initStatus === 'loading') {
    return (
      <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
        <div> init in progress, check Mist/Metamask is connected to Ropsten / mainnet and unlocked ....</div>
      </Col>
    );
  }

  if (initStatus === 'error') {
    return (
      <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
        <div> {web3} </div>
      </Col>
    );
  }

  const provider = web3 && web3.currentProvider && web3.currentProvider.constructor.name;
  return (
    <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
      <Token>
        {tokenName}
      </Token>
      Distribution Contract: <br /> {distributionAddress} <br /><br />
      Token Contract: <br /> {tokenAddress} <br /> <br />
      Web3 Provider: <br /> {provider || 'no web3 provider specified'} <br />
    </Col>
  );
}

Web3Status.propTypes = {
  initStatus: PropTypes.string,
  web3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  networkName: PropTypes.string,
  tokenName: PropTypes.string,
  tokenAddress: PropTypes.string,
  distributionAddress: PropTypes.string,
  tokenList: PropTypes.array,
};

export default Web3Status;