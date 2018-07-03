/**
*
* CommitLayout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Commit from 'components/Commit';
// import CommitDetails from 'components/CommitDetails';
import { Col } from 'antd';

const Div = styled.div`
  margin-top: 3%;
`;

function CommitLayout(props) {
  return (
    <Col sm={{ span: 10, offset: 1 }} xs={{ span: 22, offset: 1 }}>
      <Div>
        <Commit {...props} />
      </Div>
    </Col>
  );
}

CommitLayout.propTypes = {
  web3: PropTypes.object,
  commitment: PropTypes.string,
};

export default CommitLayout;
