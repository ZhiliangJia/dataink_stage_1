import React, {useEffect} from 'react';
import {Layout} from 'antd';
import Sidebar, {refCircle, refLine, refFreeInstance, refRectangle, refPanZoom, refText} from './UI/Sidebar'
import SplitPane from 'react-split-pane';
import {PaperContainer, Circle, Layer, PointText} from '@psychobolt/react-paperjs';
import {
    LineTool,
    FreeformPathTool,
    PolygonTool,
    RectangleTool,
    CircleTool,
    SegmentPathTool,
    PanAndZoom
} from '@psychobolt/react-paperjs-editor';
import HandTool from "./Custom/HandTool";
import TextTool from "./Custom/TextTool";
import './App.css';

const {Header, Sider, Content} = Layout;

let content = null;

let paperContent = null;

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
                    <PaperContainer
                        canvasProps={{
                            border: '1px solid black !important',
                            width: 500,
                            height: 700
                        }} onMount={paper => {
                        paper.view.element.focus();
                        paperContent = paper
                        console.log(paper)
                    }}>
                        <PanAndZoom
                            center={[250, 350]}
                            prepanStyle={{
                                cursor: '-webkit-grab',
                            }}
                            panStyle={{
                                cursor: '-webkit-grabbing',
                            }}
                            onPanEnabled={() => {
                                console.log('Pan enabled'); // eslint-disable-line no-console
                            }}
                            onPanDisabled={() => {
                                console.log('Pan disabled'); // eslint-disable-line no-console
                            }}
                            onZoom={level => {
                                console.log(`Zoom: ${level}`); // eslint-disable-line no-console
                            }}>
                            <FreeformPathTool ref={refFreeInstance}/>
                            <LineTool ref={refLine}/>
                            <CircleTool fillColor='red' ref={refCircle}/>
                            <RectangleTool ref={refRectangle}/>
                            <HandTool ref={refPanZoom}/>
                            <TextTool ref={refText}/>
                        </PanAndZoom>
                    </PaperContainer>
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
