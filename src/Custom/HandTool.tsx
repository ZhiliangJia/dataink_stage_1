import * as React from 'react';
import {Tool, PaperScope} from '@psychobolt/react-paperjs';
import {ToolEvent, Tool as ToolType} from 'paper';

import BaseTool from "./BaseTool";

type Props = {
    // @ts-ignore
    innerRef: React.Ref<ToolType>,
}

@PaperScope
class HandTool extends BaseTool<Props> {

    static defaultProps = {
        ...BaseTool.defaultProps
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {innerRef, onMouseUp} = this.props

        return (
            <Tool
                ref={innerRef}/>
        )
    }
}

// @ts-ignore
export default React.forwardRef((props: any, ref: React.Ref<ToolType>) => (
    <HandTool {...props} innerRef={ref}/>));
