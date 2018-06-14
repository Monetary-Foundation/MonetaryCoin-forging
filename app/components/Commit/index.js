/**
*
* Commit
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import BlueButton from 'components/BlueButton';

import TxDisplay from 'components/TxDisplay';
import SendLoadingIndicator from 'components/SendLoadingIndicator';
import { Button, InputNumber } from 'antd';

const DivS = styled.div`
  margin-top: 35px;
  margin-bottom: 15px;
`;

function Commit(props) {
  const {
    commitEthSendWindow,
    commitEthSendAmount,
    commitEthSendLoading,
    commitEthError,
    commitEthSendTx,
    commitEthMinedLoading,
    commitEthMinedRecipt,
    onChangeWindow,
    onChangeAmount,
    onCommitEthSend,

    networkId,

    currentWindow,
    totalWindows,
  } = props;


  return (
    <div>
      <h3> Commit Ether </h3>
      <DivS>
        Window:{' '}
        <InputNumber
          min={currentWindow}
          max={totalWindows - 1}
          step={1}
          value={commitEthSendWindow}
          onChange={(value) => onChangeWindow(value)}
        />
        <br /><br />
        Amount:{' '}
        <InputNumber
          min={0.01}
          step={0.01}
          value={commitEthSendAmount}
          onChange={(value) => onChangeAmount(value)}
        />
        <br /><br /><br />
        <Button type="primary" size="large" onClick={() => onCommitEthSend()}>
          Commit Ether
        </Button>
        <SendLoadingIndicator
          loading={commitEthSendLoading}
          error={commitEthError}
          tx={commitEthSendTx}
        />
      </DivS>
      <TxDisplay tx={commitEthSendTx} networkId={networkId} />

      commitEthSendLoading: {commitEthSendLoading ? 'true' : 'false'} <br />
      commitEthMinedLoading: {commitEthMinedLoading ? 'true' : 'false'} <br />
      Error: {commitEthError ? commitEthError.toString() : 'false'} <br />
      sendTx: {commitEthSendTx || 'null'} <br />
      Recipt: {commitEthMinedRecipt ? '[Object]' : 'null'} <br />
    </div>
  );
}

Commit.propTypes = {
  commitEthSendWindow: PropTypes.number,
  commitEthSendAmount: PropTypes.number,
  commitEthSendLoading: PropTypes.bool,
  commitEthMinedLoading: PropTypes.bool,
  commitEthError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  commitEthSendTx: PropTypes.string,
  commitEthMinedRecipt: PropTypes.object,
  onChangeWindow: PropTypes.func,
  onChangeAmount: PropTypes.func,
  onCommitEthSend: PropTypes.func,

  networkId: PropTypes.number,

  currentWindow: PropTypes.number,
  totalWindows: PropTypes.number,
};

export default Commit;
