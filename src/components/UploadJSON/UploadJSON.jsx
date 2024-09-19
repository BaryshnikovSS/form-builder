import React from 'react';

const UploadJSON = ({ onUpload }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      onUpload?.(data);
    };
    reader.readAsText(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      onUpload(data);
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          border: '2px dashed #ccc',
          minHeight: '100px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        Drop JSON file here
      </div>
      <input
        type='file'
        accept='.json'
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default UploadJSON;
