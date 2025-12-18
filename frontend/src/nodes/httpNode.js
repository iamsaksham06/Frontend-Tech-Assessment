// httpNode.js
// Example node that represents an HTTP request step.

import { Position } from 'reactflow';
import { GenericNode } from './GenericNode';

export const HttpNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      data={data}
      title="HTTP"
      description="Fetch data from an HTTP endpoint."
      fields={[
        {
          name: 'method',
          label: 'Method',
          type: 'select',
          defaultValue: 'GET',
          options: [
            { value: 'GET', label: 'GET' },
            { value: 'POST', label: 'POST' },
          ],
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          defaultValue: 'https://api.example.com',
          placeholder: 'https://api.example.com',
        },
      ]}
      renderPreview={({ data }) => {
        const method = data.method || 'GET';
        const url = data.url || 'https://api.example.com';
        return `${method} ${url}`;
      }}
      handles={[
        {
          id: 'body',
          type: 'target',
          position: Position.Left,
          style: { top: '50%' },
        },
        {
          id: 'response',
          type: 'source',
          position: Position.Right,
          style: { top: '50%' },
        },
      ]}
    />
  );
};


