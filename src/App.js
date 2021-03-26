
import React from "react";
import { hot } from 'react-hot-loader/root';
import { Collapse } from 'antd';

import "antd/dist/antd.css";

const { Panel } = Collapse;

class App extends React.Component {
  render() {
    return (
      <>
        <h1>antd Collapse + react-hot-loader issue debugging</h1>
        <Collapse defaultActiveKey={['1']} onChange={() => null}>
          <Panel header="Panel Header 1" key="1">
            <p>This is panel content 1, ok?</p>
          </Panel>
          <Panel header="Panel Header 2" key="2">
            <p>This is panel content 2</p>
          </Panel>
          <Panel header="Panel Header 3" key="3">
            <p>This is panel content 3</p>
          </Panel>
        </Collapse>
      </>
    );
  }
}

export default hot(App);
