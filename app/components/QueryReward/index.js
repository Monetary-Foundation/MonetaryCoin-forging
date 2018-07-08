/**
*
* QueryReward
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Spin } from 'antd';

const P = styled.p`
  font-size: 0.7em;
`;

const B = styled.b`
  font-size: 1.3em;
`;

function QueryReward(props) {
  const {
    queryRewardLoading,
    queryRewardError,
    rewardInfo,
    rewardInfoValue,
    rewardInfoOnBlockNumber,
    rewardInfoAtStake,
    rewardInfoOnBlockReward,
    rewardInfoReward,
  } = props;

  if (queryRewardLoading) {
    return (
      <Col sm={{ span: 10 }} xs={{ span: 23, offset: 1 }}>
        <Spin
          spinning={queryRewardLoading}
          style={{ marginTop: 80, position: 'static' }}
          size="large"
          tip="Query Reward in progress"
        >
          <br /> <br />
        </Spin>
      </Col>);
  }

  if (queryRewardError) {
    return (
      <Col sm={{ span: 10 }} xs={{ span: 23, offset: 1 }}>
        {queryRewardError}
      </Col>
    );
  }


  return (
    <div>
      Commitment value: {rewardInfoValue}<br />
      Commitment block number: {rewardInfoOnBlockNumber}<br />
      Commitment Stake: {rewardInfoAtStake}<br />
      Commitment block reward: {rewardInfoOnBlockReward}<br /><br />
      Expected reward: <B>{rewardInfoReward}</B> <br />
      <P>Actual reward calculated on-chain during the withdraw transaction.</P>
    </div>
  );
}

QueryReward.propTypes = {
  queryRewardLoading: PropTypes.bool,
  queryRewardError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  rewardInfo: PropTypes.object,
  rewardInfoValue: PropTypes.string,
  rewardInfoOnBlockNumber: PropTypes.string,
  rewardInfoAtStake: PropTypes.string,
  rewardInfoOnBlockReward: PropTypes.string,
  rewardInfoReward: PropTypes.string,
};

export default QueryReward;
