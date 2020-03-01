import React, {useEffect} from 'react';
import {Layout, Button} from 'antd';
import Sidebar, {
    refCircle,
    refLine,
    refFreeInstance,
    refRectangle,
    refPanZoom,
    refText,
    refHand,
    setPaperScope
} from './UI/Sidebar'
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
import MoveTool from "./Custom/MoveTool";
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
                <Button onClick={(e) => {
                    console.log(paperContent.project.exportJSON())
                }} style={{
                    float: 'right'
                }}>Export</Button>
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
                        setPaperScope(paperContent)
                        console.log(paperContent)
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
                            <MoveTool ref={refPanZoom}/>
                            <TextTool ref={refText}/>
                            <HandTool ref={refHand}/>
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
                        pane2Style={{background: '#aaa4ba'}}>
                        <div/>
                        <div/>
                    </SplitPane>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
