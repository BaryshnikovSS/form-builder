import React from 'react';
import JSONViewer from 'react-json-view';
import './styles.css';
import { DropZoneFrom } from '../DropZoneForm';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import UploadJSON from '../UploadJSON/UploadJSON';

export const FormRenderer = ({
  formElements = [],
  onDrop,
  moveElement,
  removeElement,
  uploadJSON,
  onSubmit,
}) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <DndProvider backend={HTML5Backend}>
      <div style={{ flexGrow: 1, marginRight: 20 }}>
        {formElements.length > 0 ? (
          <DropZoneFrom
            onDrop={onDrop}
            formElements={formElements}
            moveElement={moveElement}
            removeElement={removeElement}
            onSubmit={onSubmit}
          />
        ) : (
          <UploadJSON onUpload={uploadJSON} />
        )}
      </div>
      <div
        style={{
          width: 300,
        }}
      >
        <h3>Generated JSON</h3>
        <JSONViewer src={formElements} />
      </div>
    </DndProvider>
  </div>
);

export default FormRenderer;
