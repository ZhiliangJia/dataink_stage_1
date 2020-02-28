import React from 'react';
import {ToolEventHandler} from '@psychobolt/react-paperjs';
import {PaperScope, Path, Segment, KeyEvent} from 'paper';

type Props = {
    // @ts-ignore
    paper: PaperScope,
    onMouseDown: ToolEventHandler,
    onMouseDrag: ToolEventHandler,
    onMouseUp: ToolEventHandler
}

class BaseTool<P> extends React.Component<P & Props> {
    static defaultProps = {
        onMouseUp: () => {
        },
        onMouseDrag: () => {
        },
        onMouseDown: () => {
        },
    }
    // @ts-ignore
    path: Path

}

export default BaseTool
