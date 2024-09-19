import React, { useState } from 'react';
import { FormBuilder as Builder } from '../components';

export const FormGenerator = () => {
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

  const removeElement = (index) => {
    setFormElements((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data) => {
    const keys = Object.keys(data);
    alert(keys.map((key) => `${key}: ${data[key]}`).join('\n'));
  };

  return (
    <div>
      <h1>Builder</h1>
      <Builder
        formElements={formElements}
        onDrop={handleDrop}
        moveElement={moveElement}
        removeElement={removeElement}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormGenerator;
