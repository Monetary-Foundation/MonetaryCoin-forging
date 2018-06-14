/**
*
* Commit
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import BlueButton from 'components/BlueButton';
import { Button, InputNumber } from 'antd';
import SendLoadingIndicator from 'components/SendLoadingIndicator';


const DivS = styled.div`
  margin-top: 35px;
  margin-bottom: 30px;
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

  currentWindow: PropTypes.number,
  totalWindows: PropTypes.number,
};

export default Commit;
