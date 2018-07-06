/**
*
* QueryReward
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


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
  return (
    <div>
      queryRewardLoading: <br />
      queryRewardError: <br />
      rewardInfo: <br />

      Commitment value: {rewardInfoValue}<br />
      Commitment block number: {rewardInfoOnBlockNumber}<br />
      Commitment Stake: {rewardInfoAtStake}<br />
      Commitment block reward: {rewardInfoOnBlockReward}<br />
      On chain reward: {rewardInfoReward} <br />
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
