// switchNode.js
// Example node that routes a value to one of two branches based on a condition.

import { Position } from 'reactflow';
import { GenericNode } from './GenericNode';

export const SwitchNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      data={data}
      title="Switch"
      description="Route input based on a simple condition."
      fields={[
        {
          name: 'condition',
          label: 'Condition',
          type: 'text',
          defaultValue: 'x > 0',
          placeholder: 'e.g. x > 0',
        },
      ]}
      handles={[
        {
          id: 'input',
          type: 'target',
          position: Position.Left,
          style: { top: '50%' },
        },
        {
          id: 'true',
          type: 'source',
          position: Position.Right,
          style: { top: '33%' },
        },
        {
          id: 'false',
          type: 'source',
          position: Position.Right,
          style: { top: '66%' },
        },
      ]}
    />
  );
};


