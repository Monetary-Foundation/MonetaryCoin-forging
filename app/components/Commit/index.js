/**
*
* Commit
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import BlueButton from 'components/BlueButton';
import { Button, InputNumber } from 'antd';

function Commit(props) {
  const {
    commitEthSendAmount,
    commitEthSendLoading,
    commitEthSendError,
    commitEthSendTx,
    onChangeAmount,
    onCommitEthSend,
  } = props;

  return (
    <div>
      <h2> Commit for forging </h2>
      <br />
      Amount:{' '}
      <InputNumber
        min={1}
        step={1}
        value={commitEthSendAmount}
        onChange={(value) => onChangeAmount(value)}
      />
      <br />
      Loading: {commitEthSendLoading ? 'true' : 'false'} <br />
      Error: {commitEthSendError || 'false'} <br />
      sendTx: {commitEthSendTx || 'null'} <br />
      <Button type="primary" loading={commitEthSendLoading} size="large" onClick={() => onCommitEthSend()}>
        Commmit
      </Button>
    </div>
  );
}

Commit.propTypes = {
  commitEthSendAmount: PropTypes.number,
  commitEthSendLoading: PropTypes.bool,
  commitEthSendError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  commitEthSendTx: PropTypes.string,
  onChangeAmount: PropTypes.func,
  onCommitEthSend: PropTypes.func,

};

export default Commit;
