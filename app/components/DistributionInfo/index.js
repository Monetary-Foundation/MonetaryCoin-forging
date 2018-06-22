/**
*
* DistributionInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Col, Spin } from 'antd';

const BigSpan = styled.span`
  color: #444444;
  font-size: 200%;
`;

const SmallSpan = styled.span`
  color: #8e8e8e;
  font-size: 110%;
`;

function DistributionInfo(props) {
  const { web3, tokenSymbol, getDistributionInfoLoading, getDistributionInfoError, distributionInfo, onGetDistributionInfo } = props;

  if (getDistributionInfoLoading) {
    return (
      <Col sm={{ span: 3 }} xs={{ span: 23, offset: 1 }}>
        <Spin
          spinning={getDistributionInfoLoading}
          style={{ marginTop: 80, position: 'static' }}
          size="large"
          tip="Loading constract info..."
        >
          <br /> <br />
        </Spin>
      </Col>);
  }

  if (getDistributionInfoError) {
    return <div> {getDistributionInfoError} </div>;
  }

  if (distributionInfo) {
    const windowCountdownProps = { //eslint-disable-line
      onGetDistributionInfo,
      timestamp: distributionInfo.timestamp,
      startTimestamp: distributionInfo.startTimestamp,
      windowLenght: distributionInfo.windowLenght,
    };

    // const { totals } = distributionInfo;
    // delete distributionInfo.totals;
    const blockReward = distributionInfo && distributionInfo.blockReward;
    const totalStake = distributionInfo && distributionInfo.totalStake;
    const totalSupply = distributionInfo && distributionInfo.totalSupply;
    return (
      <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }} style={{ marginTop: 30 }}>
        <SmallSpan> Total Supply: </SmallSpan><BigSpan> {totalSupply ? web3.utils.fromWei(totalSupply, 'ether') : 0}</BigSpan> <br />
        <SmallSpan> Block Reward: </SmallSpan><BigSpan> {blockReward ? web3.utils.fromWei(blockReward, 'ether') : 0}</BigSpan> <br />
        <SmallSpan> Total Stake: </SmallSpan><BigSpan> {totalStake ? web3.utils.fromWei(totalStake, 'ether') : 0} </BigSpan> <br />
      </Col>
    );
  }
  return null;
}

DistributionInfo.propTypes = {
  web3: PropTypes.object,
  tokenName: PropTypes.string,
  tokenSymbol: PropTypes.string,
  onGetDistributionInfo: PropTypes.func,
  getDistributionInfoLoading: PropTypes.bool,
  getDistributionInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  distributionInfo: PropTypes.object,
};

export default DistributionInfo;
