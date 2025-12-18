// GenericNode.js
// A reusable, configurable node component used by all custom node types.

import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

const baseContainerStyle = {
  minWidth: 220,
  minHeight: 90,
  borderRadius: 8,
  border: '1px solid #1F2937',
  background: '#0B1120',
  color: '#F9FAFB',
  padding: '8px 10px',
  boxShadow: '0 4px 12px rgba(15,23,42,0.35)',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  fontSize: 12,
};

const headerStyle = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: 0.3,
  textTransform: 'uppercase',
  marginBottom: 2,
};

const descriptionStyle = {
  fontSize: 11,
  color: '#9CA3AF',
  marginBottom: 4,
};

const fieldsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

const fieldLabelStyle = {
  fontSize: 11,
  color: '#D1D5DB',
  marginBottom: 2,
};

const commonInputStyle = {
  width: '100%',
  fontSize: 11,
  padding: '4px 6px',
  borderRadius: 4,
  border: '1px solid #374151',
  background: '#020617',
  color: '#E5E7EB',
  outline: 'none',
};

// field config:
// {
//   name: string (key in node.data),
//   label: string,
//   type: 'text' | 'select' | 'number',
//   options?: [{ value, label }] // for select
//   min?: number // for number
//   max?: number // for number
//   step?: number // for number
//   getDefaultValue?: ({ id, data }) => any
//   placeholder?: string
// }

// handle config:
// {
//   id: string,
//   type: 'source' | 'target',
//   position: Position,
//   style?: React.CSSProperties
// }

export const GenericNode = ({
  id,
  data,
  title,
  description,
  fields = [],
  handles = [],
  containerStyle = {},
  renderPreview,
}) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const getFieldValue = (field) => {
    const existing = data && data[field.name] !== undefined ? data[field.name] : undefined;
    if (existing !== undefined) {
      return existing;
    }
    if (typeof field.getDefaultValue === 'function') {
      return field.getDefaultValue({ id, data: data || {} });
    }
    if (field.defaultValue !== undefined) {
      return field.defaultValue;
    }
    return field.type === 'number' ? 0 : '';
  };

  const handleChange = (field, rawValue) => {
    let value = rawValue;
    if (field.type === 'number') {
      const num = Number(rawValue);
      value = Number.isNaN(num) ? '' : num;
    }
    updateNodeField(id, field.name, value);
  };

  return (
    <div style={{ ...baseContainerStyle, ...containerStyle }}>
      <div style={headerStyle}>{title}</div>
      {description && <div style={descriptionStyle}>{description}</div>}

      {fields.length > 0 && (
        <div style={fieldsContainerStyle}>
          {fields.map((field) => {
            const value = getFieldValue(field);

            if (field.type === 'select') {
              return (
                <label key={field.name} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={fieldLabelStyle}>{field.label}</span>
                  <select
                    value={value}
                    onChange={(e) => handleChange(field, e.target.value)}
                    style={commonInputStyle}
                  >
                    {(field.options || []).map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              );
            }

            return (
              <label key={field.name} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={fieldLabelStyle}>{field.label}</span>
                <input
                  type={field.type === 'number' ? 'number' : 'text'}
                  value={value}
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  placeholder={field.placeholder}
                  onChange={(e) => handleChange(field, e.target.value)}
                  style={commonInputStyle}
                />
              </label>
            );
          })}
        </div>
      )}

      {typeof renderPreview === 'function' && (
        <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 4 }}>
          {renderPreview({ id, data: data || {} })}
        </div>
      )}

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position || Position.Right}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};


