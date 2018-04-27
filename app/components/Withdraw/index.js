/**
*
* Withdraw
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from 'antd';
// import BlueButton from 'components/BlueButton';

function Withdraw(props) {
  const {
    onWithdrawSend,
    withdrawSendLoading,
    withdrawMinedLoading,
    withdrawError,
    withdrawSendTx,
    withdrawMinedRecipt,
  } = props;


  return (
    <div>
      <h2> Withdraw forging reward </h2>
      <br />
      WithdrawSendLoading: {withdrawSendLoading ? 'true' : 'false'} <br />
      WithdrawMinedLoading: {withdrawMinedLoading ? 'true' : 'false'} <br />
      Error: {withdrawError || 'false'} <br />
      SendTx: {withdrawSendTx || 'null'} <br />
      MinedRecipt: {(withdrawMinedRecipt && JSON.stringify(withdrawMinedRecipt, 0, 2)) || 'null'} <br />
      <Button type="primary" loading={withdrawMinedLoading} size="large" onClick={() => onWithdrawSend()}>
        Withdraw
      </Button>
    </div>
  );
}

Withdraw.propTypes = {
  onWithdrawSend: PropTypes.func,
  withdrawSendLoading: PropTypes.bool,
  withdrawMinedLoading: PropTypes.bool,
  withdrawError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  withdrawSendTx: PropTypes.string,
  withdrawMinedRecipt: PropTypes.object,
};

export default Withdraw;
