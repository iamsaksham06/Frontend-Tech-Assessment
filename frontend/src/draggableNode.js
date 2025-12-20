// draggableNode.js

import './draggableNode.css';

const nodeIcons = {
  customInput: '📥',
  llm: '🤖',
  customOutput: '📤',
  text: '📝',
  math: '🔢',
  delay: '⏱️',
  http: '🌐',
  concat: '🔗',
  switch: '🔄',
};

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    const icon = nodeIcons[type] || '⚙️';
  
    return (
      <div
        className="draggable-node"
        onDragStart={(event) => onDragStart(event, type)}
        draggable
      >
          <span className="draggable-node-icon">{icon}</span>
          <span className="draggable-node-label">{label}</span>
      </div>
    );
  };
  