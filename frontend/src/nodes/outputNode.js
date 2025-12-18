// outputNode.js

import { Position } from 'reactflow';
import { GenericNode } from './GenericNode';

export const OutputNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      data={data}
      title="Output"
      description="Collect the final result of your pipeline."
      fields={[
        {
          name: 'outputName',
          label: 'Name',
          type: 'text',
          getDefaultValue: ({ id, data }) =>
            data?.outputName || id.replace('customOutput-', 'output_'),
          placeholder: 'output_name',
        },
        {
          name: 'outputType',
          label: 'Type',
          type: 'select',
          getDefaultValue: ({ data }) => data?.outputType || 'Text',
          options: [
            { value: 'Text', label: 'Text' },
            { value: 'Image', label: 'Image' },
          ],
        },
      ]}
      handles={[
        {
          id: 'value',
          type: 'target',
          position: Position.Left,
          style: { top: '50%' },
        },
      ]}
    />
  );
};
