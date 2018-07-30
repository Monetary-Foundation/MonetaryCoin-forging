import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Div } from 'components/DistributionInfo/common';


function DappDescription() {
  return (
    <Div>
      <b>DApp Description:</b> a constant amount of tokens forged every block and distributed among all participants in proportion to their commitment.
      <a target="_blank" rel="noopener" href="https://medium.com/monetary-protocol/monetarycoin-forging-introduction-562791bb1ab5"> Read more</a>
    </Div>
  );
}

DappDescription.propTypes = {

};

export default DappDescription;
