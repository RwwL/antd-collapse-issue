
import React from "react";
import { hot } from 'react-hot-loader/root';
import { Collapse } from 'antd';

import "antd/dist/antd.css";

const { Panel } = Collapse;

class App extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ margin: '1em' }}>antd Collapse + react-hot-loader issue debugging</h1>
        <Collapse defaultActiveKey={['1']} onChange={() => null}>
          <Panel header="Panel Header 1" key="1">
            <p>This is panel content 1</p>
          </Panel>
          <Panel header="Panel Header 2" key="2">
            <p>This is panel content 2</p>
          </Panel>
          <Panel header="Panel Header 3" key="3">
            <p>This is panel content 3</p>
          </Panel>
        </Collapse>
        <div style={{ margin: '2em' }}>
          <p>Changing anything on this page results in a hot-update crash with the following stack trace info:</p>
          <pre>
{`(1/2)
(AppContainer, at CSSMotion (webpack://antd-collapse-issue/./node_modules/rc-motion/es/CSSMotion.js?:53:32)) TypeError: Cannot read property 'offsetHeight' of null

Stack trace:
at Object.getCurrentHeight [as start] (webpack://antd-collapse-issue/./node_modules/antd/es/_util/motion.js?:23:18)
at CSSMotion (webpack://antd-collapse-issue/./node_modules/rc-motion/es/CSSMotion.js?:53:32)
at div
at CollapsePanel (eval at ES6ProxyComponentFactory (webpack://antd-collapse-issue/./node_modules/react-hot-loader/dist/react-hot-loader.development.js?), <anonymous>:14:7)
at CollapsePanel (webpack://antd-collapse-issue/./node_modules/antd/es/collapse/CollapsePanel.js?:22:74)
at div
at Collapse (eval at ES6ProxyComponentFactory (webpack://antd-collapse-issue/./node_modules/react-hot-loader/dist/react-hot-loader.development.js?), <anonymous>:14:7)
at Collapse (webpack://antd-collapse-issue/./node_modules/antd/es/collapse/Collapse.js?:34:62)
at App (eval at ES6ProxyComponentFactory (webpack://antd-collapse-issue/./node_modules/react-hot-loader/dist/react-hot-loader.development.js?), <anonymous>:14:7)
at AppContainer (eval at ES6ProxyComponentFactory (webpack://antd-collapse-issue/./node_modules/react-hot-loader/dist/react-hot-loader.development.js?), <anonymous>:14:7)
at HotExportedApp (eval at ES6ProxyComponentFactory (webpack://antd-collapse-issue/./node_modules/react-hot-loader/dist/react-hot-loader.development.js?), <anonymous>:14:7)
(2/2)
(AppContainer, at CSSMotion (webpack://antd-collapse-issue/./node_modules/rc-motion/es/CSSMotion.js?:53:32)) TypeError: Cannot read property 'offsetHeight' of null

Stack trace:
at Object.getCurrentHeight [as start] (webpack://antd-collapse-issue/./node_modules/antd/es/_util/motion.js?:23:18)
at CSSMotion (webpack://antd-collapse-issue/./node_modules/rc-motion/es/CSSMotion.js?:53:32)
at div
at CollapsePanel (eval at ES6ProxyComponentFactory (webpack://antd-collapse-issue/./node_modules/react-hot-loader/dist/react-hot-loader.development.js?), <anonymous>:14:7)
at CollapsePanel (webpack://antd-collapse-issue/./node_modules/antd/es/collapse/CollapsePanel.js?:22:74)
at div
at Collapse (eval at ES6ProxyComponentFactory (webpack://antd-collapse-issue/./node_modules/react-hot-loader/dist/react-hot-loader.development.js?), <anonymous>:14:7)
at Collapse (webpack://antd-collapse-issue/./node_modules/antd/es/collapse/Collapse.js?:34:62)
at App (eval at ES6ProxyComponentFactory (webpack://antd-collapse-issue/./node_modules/react-hot-loader/dist/react-hot-loader.development.js?), <anonymous>:14:7)
at AppContainer (eval at ES6ProxyComponentFactory (webpack://antd-collapse-issue/./node_modules/react-hot-loader/dist/react-hot-loader.development.js?), <anonymous>:14:7)
at HotExportedApp (eval at ES6ProxyComponentFactory (webpack://antd-collapse-issue/./node_modules/react-hot-loader/dist/react-hot-loader.development.js?), <anonymous>:14:7)`}
          </pre>
        </div>
      </>
    );
  }
}

export default hot(App);
