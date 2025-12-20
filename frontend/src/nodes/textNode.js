// textNode.js

import { Position } from 'reactflow';
import { GenericNode } from './GenericNode';

export const TextNode = ({ id, data }) => {
  // Find all {{variable}} occurrences (must be valid JS variable names)
  const variablePattern = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const text = data?.text || '';
  const matches = [...text.matchAll(variablePattern)] || [];
  const variables = Array.from(new Set(matches.map(m => m[1])));

  // Dynamically build handles for each variable (input) and the output
  const inputHandles = variables.map((name, idx) => ({
    id: name,
    type: 'target',
    position: Position.Left,
    style: {
      top: `${(20 + idx * 32)}px` // space handles vertically
    },
  }));
  const handles = [
    ...inputHandles,
    {
      id: 'output',
      type: 'source',
      position: Position.Right,
      style: { top: '50%' },
    }
  ];

  return (
    <GenericNode
      id={id}
      data={data}
      title="Text"
      description="Template or transform text with simple interpolation."
      fields={[
        {
          name: 'text',
          label: 'Text',
          type: 'text',
          getDefaultValue: ({ data }) => data?.text || '{{input}}',
          placeholder: 'Hello, {{name}}',
        },
      ]}
      handles={[
        {
          id: 'output',
          type: 'source',
          position: Position.Right,
          style: { top: '50%' },
        },
      ]}
    />
  );
};
