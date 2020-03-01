//ts中引入的写法
import * as React from "react";
import {Button, Icon, Modal, Input} from 'antd';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1638575_i23xlb5oazk.js',
});

let lineInstance = null;
let circleInstance = null;
let freePathInstance = null;
let rectangleInstance = null;
let panZoomInstance = null;
let textInstance = null;
let handInstance = null;
let paperScope = null;

export const refLine = instanceRef => {
    lineInstance = instanceRef
}

export const refCircle = instanceRef => {
    circleInstance = instanceRef
}

export const refFreeInstance = instanceRef => {
    freePathInstance = instanceRef
}

export const refRectangle = instanceRef => {
    rectangleInstance = instanceRef
}

export const refPanZoom = instanceRef => {
    panZoomInstance = instanceRef
}

export const refText = instanceRef => {
    textInstance = instanceRef
    panZoomInstance.activate()
}
export const refHand = instanceRef => {
    handInstance = instanceRef
    console.log(handInstance)
    panZoomInstance.activate()
}

export const setPaperScope = (ps) => {
    paperScope = ps
    handInstance.setPaperScope(paperScope)
    console.log(paperScope)
}


export default class Sidebar extends React.Component {
    state = {visible: false, refText: 'Text'};

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
        textInstance.setText(this.state.refText)
        textInstance.activate()
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div>
                <Button onClick={() => {
                    freePathInstance.activate()
                }} type="primary" shape="circle"><IconFont type="icon-pen"/></Button>
                <Button onClick={() => {
                    lineInstance.activate()
                }} type="primary" shape="circle"><IconFont type="icon-Line"/></Button>
                <Button onClick={() => {
                    circleInstance.activate()
                }} type="primary" shape="circle"><IconFont type="icon-Select-1"/></Button>
                <Button onClick={() => {
                    rectangleInstance.activate()
                }} type="primary" shape="circle"><IconFont type="icon-Select-"/></Button>
                <Button onClick={() => {
                    panZoomInstance.activate()
                }} type="primary" shape="circle"><IconFont type="icon-hand"/></Button>
                <Button onClick={() => {
                    textInstance.activate()
                }} type="primary" shape="circle"><IconFont type="icon-Text-box"/></Button>
                <Button type="primary" shape="circle"><IconFont type="icon-zoom"/></Button>
                <Button type="primary" shape="circle"><IconFont type="icon-hand"/></Button>
                <Button onClick={() => {
                    handInstance.activate()
                }} type="primary" shape="circle"><IconFont type="icon-Link-Select"/></Button>
                <Modal
                    title="Text"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={false}
                    onCancel={this.handleCancel}>
                    <Input value={this.state.refText} onChange={(e) => {
                        this.setState({
                            refText: e.target.value
                        })
                    }}/>
                </Modal>
            </div>
        );
    };
}
