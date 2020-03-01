import * as React from 'react';
import {Tool, PaperScope} from '@psychobolt/react-paperjs';
import {ToolEvent, Tool as ToolType, PaperScope as HandleComponent, HitResult} from 'paper';

import BaseTool from "./BaseTool";

type Props = {
    // @ts-ignore
    innerRef: React.Ref<ToolType>,
    // @ts-ignore
    setPaperScope: () => {},
    // @ts-ignore
    paperScope: HandleComponent
}

@PaperScope
class HandTool extends BaseTool<Props> {

    constructor(props) {
        super(props)
        this.state = {paperScope: null}
    }

    // @ts-ignore
    paperScope: HandleComponent

    // @ts-ignore
    hitResult: HitResult
    path: any
    static defaultProps = {
        ...BaseTool.defaultProps
    }

    // @ts-ignore
    setPaperScope = (ps: HandleComponent) => {
        this.setState({paperScope: ps})
        this.paperScope = ps
        console.log(this.paperScope)
    }

    onMouseMove = (e) => {
        let hitResult = this.paperScope.project.hitTest(e.point)
        this.paperScope.project.activeLayer.selected = false
        if (hitResult && hitResult.item) {
            hitResult.item.selected = true
        }
    }

    onMouseDown = (e) => {
        let hitResult = this.paperScope.project.hitTest(e.point)
        console.log(hitResult)
        this.hitResult = hitResult
    }

    onMouseUp = (e) => {
    }

    onMouseDrag = (e) => {
        // console.log(e.delta)
        // console.log(this.hitResult.item.position)
        if (this.hitResult.type === 'fill') {
            // console.log(this.hitResult)
            this.hitResult.item.position.x += e.delta.x
            this.hitResult.item.position.y += e.delta.y
        } else if (this.hitResult.type === 'segment') {
            this.hitResult.segment.point.x += e.delta.x
            this.hitResult.segment.point.y += e.delta.y
            // console.log(this.hitResult.segment.point.x)
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {innerRef, onMouseUp, onMouseDown, onMouseDrag, onMouseMove} = this.props

        return (
            <Tool
                onMouseMove={this.onMouseMove}
                onMouseDown={this.onMouseDown}
                setPaperScope={this.setPaperScope}
                onMouseUp={this.onMouseUp}
                onMouseDrag={this.onMouseDrag}
                ref={innerRef}/>
        )
    }
}

// @ts-ignore
export default React.forwardRef((props: any, ref: React.Ref<ToolType>) => (
    <HandTool {...props} innerRef={ref}/>));
