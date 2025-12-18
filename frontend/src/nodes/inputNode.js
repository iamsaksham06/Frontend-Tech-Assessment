// inputNode.js

import { Position } from 'reactflow';
import { GenericNode } from './GenericNode';

export const InputNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      data={data}
      title="Input"
      description="Entry point for user-provided values."
      fields={[
        {
          name: 'inputName',
          label: 'Name',
          type: 'text',
          getDefaultValue: ({ id, data }) =>
            data?.inputName || id.replace('customInput-', 'input_'),
          placeholder: 'input_name',
        },
        {
          name: 'inputType',
          label: 'Type',
          type: 'select',
          getDefaultValue: ({ data }) => data?.inputType || 'Text',
          options: [
            { value: 'Text', label: 'Text' },
            { value: 'File', label: 'File' },
          ],
        },
      ]}
      handles={[
        {
          id: 'value',
          type: 'source',
          position: Position.Right,
          style: { top: '50%' },
        },
      ]}
    />
  );
};
