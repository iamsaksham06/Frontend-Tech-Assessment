// toolbar.js

import { DraggableNode } from './draggableNode';
import './toolbar.css';

export const PipelineToolbar = () => {
    return (
        <div className="toolbar">
            <h2 className="toolbar-title">Node Palette</h2>
            <div className="toolbar-nodes">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='http' label='HTTP' />
                <DraggableNode type='concat' label='Concat' />
                <DraggableNode type='switch' label='Switch' />
                <DraggableNode type='customOutput' label='Output' />
            </div>
        </div>
    );
};
