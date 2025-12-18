// concatNode.js
// Example node that concatenates two text inputs.

import { Position } from 'reactflow';
import { GenericNode } from './GenericNode';

export const ConcatNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      data={data}
      title="Concat"
      description="Join two text inputs with a separator."
      fields={[
        {
          name: 'separator',
          label: 'Separator',
          type: 'text',
          defaultValue: ' ',
          placeholder: ', ',
        },
      ]}
      renderPreview={({ data }) => {
        const sep = data.separator ?? ' ';
        return `Outputs left + "${sep}" + right.`;
      }}
      handles={[
        {
          id: 'left',
          type: 'target',
          position: Position.Left,
          style: { top: '33%' },
        },
        {
          id: 'right',
          type: 'target',
          position: Position.Left,
          style: { top: '66%' },
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


