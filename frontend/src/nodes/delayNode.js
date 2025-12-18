// delayNode.js
// Example node that represents an artificial delay or wait step.

import { Position } from 'reactflow';
import { GenericNode } from './GenericNode';

export const DelayNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      data={data}
      title="Delay"
      description="Wait for a fixed duration before continuing."
      fields={[
        {
          name: 'durationMs',
          label: 'Duration (ms)',
          type: 'number',
          defaultValue: 1000,
          min: 0,
          step: 100,
        },
      ]}
      renderPreview={({ data }) => {
        const duration = data.durationMs ?? 1000;
        return `Pauses the flow for ~${duration} ms.`;
      }}
      handles={[
        {
          id: 'in',
          type: 'target',
          position: Position.Left,
          style: { top: '50%' },
        },
        {
          id: 'out',
          type: 'source',
          position: Position.Right,
          style: { top: '50%' },
        },
      ]}
    />
  );
};


