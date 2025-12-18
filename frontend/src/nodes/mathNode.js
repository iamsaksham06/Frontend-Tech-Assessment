// mathNode.js
// Example node that performs a simple math expression.

import { Position } from 'reactflow';
import { GenericNode } from './GenericNode';

export const MathNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      data={data}
      title="Math"
      description="Apply a simple math expression to the input value."
      fields={[
        {
          name: 'expression',
          label: 'Expression',
          type: 'text',
          defaultValue: 'x * 2',
          placeholder: 'e.g. x * 2',
        },
        {
          name: 'variableName',
          label: 'Variable Name',
          type: 'text',
          defaultValue: 'x',
          placeholder: 'x',
        },
      ]}
      renderPreview={({ data }) => {
        const expr = data.expression || 'x * 2';
        const variable = data.variableName || 'x';
        return `Evaluates "${expr}" for ${variable}.`;
      }}
      handles={[
        {
          id: 'input',
          type: 'target',
          position: Position.Left,
          style: { top: '50%' },
        },
        {
          id: 'result',
          type: 'source',
          position: Position.Right,
          style: { top: '50%' },
        },
      ]}
    />
  );
};


