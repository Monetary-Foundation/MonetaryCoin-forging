/**
*
* Withdraw
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'antd';
import ErrorDisplay from 'components/ErrorDisplay';
import TxDisplay from 'components/TxDisplay';
import SendLoadingIndicator from 'components/SendLoadingIndicator';
import QueryReward from 'components/QueryReward';

const DivS = styled.div`
  margin-bottom: 15px; 
`;

const DivS2 = styled.div`
  height: 13em;
  display: flex;
  align-items: center;
`;

function Withdraw(props) {
  const {
    networkId,
    currentWindow,
    // onChangeWithdrawWindow,
    onWithdrawSend,
    withdrawSendLoading,
    // withdrawMinedLoading,
    withdrawError,
    withdrawSendTx,
    withdrawMinedRecipt,

    commitment,
    onQueryReward,
    rewardInfoReward,
    ...rest

  } = props;

  const conditionalSpace = (!withdrawSendTx && !withdrawError) ? <br /> : null;

  const noClosedWindows = (currentWindow === 0);

  const queryRewardProps = { rewardInfoReward, ...rest };

  const isCommitment = commitment && commitment !== '0';

  const conditionalInstructions = (!isCommitment) ? <p>Please commit MonetaryCoin first.</p> : null;

  return (
    <div>
      <h3> POS Forging - Withdraw </h3>
      <DivS>
        <DivS2>
          <QueryReward {...queryRewardProps} />
        </DivS2>
        <Button
          type="default"
          size="large"
          onClick={() => onQueryReward()}
          disabled={!isCommitment}
        >
          Query Reward
        </Button>{' '}
        <Button
          type="primary"
          size="large"
          onClick={() => onWithdrawSend()}
          disabled={!(rewardInfoReward && rewardInfoReward !== '0')}
        >
          Withdraw Tokens
        </Button>
        <SendLoadingIndicator
          loading={withdrawSendLoading}
          error={withdrawError}
          tx={withdrawSendTx}
          minedRecipt={withdrawMinedRecipt}
        />
      </DivS>
      {conditionalInstructions}
      {conditionalSpace}
      {noClosedWindows ? 'Withdraw is possible once the first window is closed.' : null}
      <TxDisplay tx={withdrawSendTx} networkId={networkId} />
      <ErrorDisplay error={withdrawError} />
      <br />
    </div>
  );
}

Withdraw.propTypes = {
  networkId: PropTypes.number,
  currentWindow: PropTypes.number,
  // onChangeWithdrawWindow: PropTypes.func,
  onWithdrawSend: PropTypes.func,
  withdrawSendLoading: PropTypes.bool,
  // withdrawMinedLoading: PropTypes.bool,
  withdrawError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  withdrawSendTx: PropTypes.string,
  withdrawMinedRecipt: PropTypes.object,

  onQueryReward: PropTypes.func,
  rewardInfoReward: PropTypes.string,
};

export default Withdraw;
