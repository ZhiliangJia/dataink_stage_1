import React from 'react';
import {Layout} from 'antd';
import Sidebar, {refCircle, refLine, refFreeInstance, refRectangle,refPolygonTool} from './UI/Sidebar'
import SplitPane from 'react-split-pane';
import {PaperContainer, PanAndZoom} from '@psychobolt/react-paperjs';
import {
    LineTool,
    FreeformPathTool,
    RectangleTool,
    CircleTool,
    PolygonTool
} from '@psychobolt/react-paperjs-editor';
import './App.css';

const {Header, Sider, Content} = Layout;
const App = () => {
    return (
        <Layout className="me-layout">
            <Header className="me-header">
                ChartInk 0.1
            </Header>
            <Layout>
                <Sider width={48} className="me-left-bar">
                    <Sidebar/>
                </Sider>
                <Content className="me-canvas">
                    <PaperContainer canvasProps={{
                        border: '1px solid',
                        width: window.screen.width,
                        height: window.screen.height
                    }}>
                        <FreeformPathTool ref={refFreeInstance}/>
                        <LineTool ref={refLine}/>
                        <CircleTool ref={refCircle}/>
                        <RectangleTool ref={refRectangle}/>
                        <PolygonTool ref={refPolygonTool}/>
                    </PaperContainer>
                    {/*<PaperContainer ={(e) => {*/}
                    {/*    console.log(e)*/}
                    {/*}}>*/}

                    {/*</PaperContainer>*/}
                </Content>
                <Content className="me-right-bar">
                    <SplitPane
                        defaultSize="60%"
                        split="horizontal"
                        style={{position: 'static'}}
                        resizerStyle={{padding: '5px'}}
                        paneStyle={{background: '#eee'}}
                        pane2Style={{background: '#aaa4ba'}}
                    >
                        <div/>
                        <div/>
                    </SplitPane>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
