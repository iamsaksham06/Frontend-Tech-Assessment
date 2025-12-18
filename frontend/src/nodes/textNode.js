// textNode.js

import { Position } from 'reactflow';
import { GenericNode } from './GenericNode';

export const TextNode = ({ id, data }) => {
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
