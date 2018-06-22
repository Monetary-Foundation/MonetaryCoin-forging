/**
*
* Instructions
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Timeline } from 'antd';

const Item = Timeline.Item;

const RowS = styled(Row)`
  margin-top:1.4em;
`;

const TimelineS = styled(Timeline)`
  //margin-top: 2em !important;
`;

function Instructions() {
  return (
    <RowS type="flex" align="left" >
      <Col xs={{ span: 22, offset: 1 }} >
        <h2> Forging instructions </h2>
        <br />
        <TimelineS>
          <Item color="grey">Please read
            <a target="_blank" rel="noopener" href="https://monetarycoin.org/forging"> MonetaryCoin Forging Details</a>
          </Item>
          <Item color="grey"><b>Test</b> this procces by selecting <b>Ropsten Test Network</b> from Metamask/Web3 browser before commiting real Ether</Item>
          <Item><b>commit</b> Tokens for Forging</Item>
          <Item color="red">The Forging reward will increase with every block mined</Item>
          <Item ><b>Withdraw</b> commitmend and reward</Item>
        </TimelineS>
      </Col>
    </RowS>
  );
}

Instructions.propTypes = {

};

export default Instructions;
