import React, { useState } from 'react';
import { FormRenderer as Renderer } from '../components';

export const FormRenderer = () => {
  const [formElements, setFormElements] = useState([]);

  const handleDrop = (item) => {
    setFormElements((prev) => [...prev, item]);
  };

  const moveElement = (fromIndex, toIndex) => {
    const updatedElements = [...formElements];
    const [movedElement] = updatedElements.splice(fromIndex, 1);
    updatedElements.splice(toIndex, 0, movedElement);
    setFormElements(updatedElements);
  };

  const onSubmit = (data) => {
    const keys = Object.keys(data);
    alert(keys.map((key) => `${key}: ${data[key]}`).join('\n'));
  };

  return (
    <div>
      <h1>Renderer</h1>
      <Renderer
        formElements={formElements}
        onDrop={handleDrop}
        moveElement={moveElement}
        uploadJSON={setFormElements}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormRenderer;
