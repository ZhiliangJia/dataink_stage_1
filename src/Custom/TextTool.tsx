import * as React from 'react';
import {Tool, PaperScope, Paper} from '@psychobolt/react-paperjs';
import {ToolEvent, Tool as ToolType} from 'paper';

import BaseTool from "./BaseTool";

type Props = {
    // @ts-ignore
    innerRef: React.Ref<ToolType>,
    setValue: () => {}
}

@PaperScope
class TextTool extends BaseTool<Props> {
    static defaultProps = {
        ...BaseTool.defaultProps
    }

    state = {text: 'string'}

    setText(text: string): void {
        console.log(text)
    }

    // @ts-ignore
    onMouseUp = (toolEvent: ToolEvent) => {
        const {paper, onMouseUp} = this.props;
        const text = new paper.PointText({
            point: toolEvent.point,
            fontSize: 30,
            fillColor: 'black',
            content: this.state.text
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {innerRef, onMouseUp} = this.props

        return (
            <Tool
                setText={this.setText}
                onMouseUp={this.onMouseUp}
                ref={innerRef}/>
        )
    }
}

// @ts-ignore
export default React.forwardRef((props: any, ref: React.Ref<ToolType>) => (
    <TextTool {...props} innerRef={ref}/>));
