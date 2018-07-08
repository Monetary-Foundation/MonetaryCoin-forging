/**
*
* Commit
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import BlueButton from 'components/BlueButton';

import SendLoadingIndicator from 'components/SendLoadingIndicator';
import { Button, InputNumber } from 'antd';
import ErrorDisplay from 'components/ErrorDisplay';
import TxDisplay from 'components/TxDisplay';

const DivS = styled.div`
  margin-bottom: 15px;
`;

const DivS2 = styled.div`
  height: 13em;
  display: flex;
  align-items: center;
`;

function Commit(props) {
  const {
    commitEthSendAmount,
    commitEthSendLoading,
    commitEthError,
    commitEthSendTx,
    // commitEthMinedLoading,
    commitEthMinedRecipt,
    onChangeAmount,
    onCommitEthSend,
    networkId,

  } = props;

  const conditionalSpace = (!commitEthSendTx && !commitEthError) ? <br /> : null;
  console.log(commitEthSendAmount);
  console.log((commitEthSendAmount === 0));
  
  return (
    <div>
      <h3> POS Forging - Commit </h3>
      <DivS2>
        Amount: {' '}
        <InputNumber
          style={{ width: '120px' }}
          min={0}
          step={1000}
          value={commitEthSendAmount}
          formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          onChange={(value) => onChangeAmount(value)}
        />
      </DivS2>
      <Button type="primary" size="large" onClick={() => onCommitEthSend()} disabled={(commitEthSendAmount === 0)}>
        Commit Tokens
      </Button>
      <SendLoadingIndicator
        loading={commitEthSendLoading}
        error={commitEthError}
        tx={commitEthSendTx}
        minedRecipt={commitEthMinedRecipt}
      />
      <DivS />
      {conditionalSpace}
      <TxDisplay tx={commitEthSendTx} networkId={networkId} />
      <ErrorDisplay error={commitEthError} />
      <br />
      {/* commitEthSendLoading: {commitEthSendLoading ? 'true' : 'false'} <br />
      commitEthMinedLoading: {commitEthMinedLoading ? 'true' : 'false'} <br />
      Error: {commitEthError ? commitEthError.toString() : 'false'} <br />
      sendTx: {commitEthSendTx || 'null'} <br />
      Recipt: {commitEthMinedRecipt ? '[Object]' : 'null'} <br /> */}
    </div>
  );
}

Commit.propTypes = {
  commitEthSendAmount: PropTypes.number,
  commitEthSendLoading: PropTypes.bool,
  // commitEthMinedLoading: PropTypes.bool,
  commitEthError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  commitEthSendTx: PropTypes.string,
  commitEthMinedRecipt: PropTypes.object,
  // onChangeWindow: PropTypes.func,
  onChangeAmount: PropTypes.func,
  onCommitEthSend: PropTypes.func,

  networkId: PropTypes.number,

  // currentWindow: PropTypes.number,
  // totalWindows: PropTypes.number,
};

export default Commit;
