//ts中引入的写法
import * as React from "react";
import {Button, Icon} from 'antd';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1638575_i23xlb5oazk.js',
});

let lineInstance = null;
let circleInstance = null;
let freePathInstance = null;
let rectangleInstance = null;
let refPolygonInstance = null;
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
export const refPolygonTool = instanceRef => {
    refPolygonInstance = instanceRef
}
export default class Sidebar extends React.Component {

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
                    refPolygonInstance.activate()
                }}type="primary" shape="circle"><IconFont type="icon-Line-2"/></Button>
                <Button type="primary" shape="circle"><IconFont type="icon-Text-box"/></Button>
                <Button type="primary" shape="circle"><IconFont type="icon-hand"/></Button>
                <Button type="primary" shape="circle"><IconFont type="icon-zoom"/></Button>
                <Button type="primary" shape="circle"><IconFont type="icon-Link-Select"/></Button>
            </div>
        );
    };
}
