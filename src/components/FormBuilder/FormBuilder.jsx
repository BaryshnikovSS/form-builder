import React from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DropZoneFrom } from '../DropZoneForm';
import { Button } from '@mui/material';

const DragItem = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FORM_ELEMENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
    >
      {children}
    </div>
  );
};

export const FormBuilder = ({
  formElements = [],
  onDrop,
  moveElement,
  removeElement,
  onSubmit,
}) => {
  const handleDownload = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(formElements, null, 2)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';
    link.click();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <DndProvider backend={HTML5Backend}>
        <div style={{ flexGrow: 1, marginRight: 20 }}>
          <DropZoneFrom
            onDrop={onDrop}
            formElements={formElements}
            moveElement={moveElement}
            removeElement={removeElement}
            onSubmit={onSubmit}
          />
        </div>
        <div
          style={{
            width: 300,
          }}
        >
          <h3>Elements</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <DragItem type='input'>Input</DragItem>
            {/* <DragItem type='checkbox'>Checkbox</DragItem>
            <DragItem type='radio'>Radio</DragItem> */}
            {formElements.length > 0 && (
              <Button
                variant='outlined'
                onClick={handleDownload}
              >
                Download JSON
              </Button>
            )}
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default FormBuilder;
