import React from 'react';
import Viewer from 'react-json-view';

export const JSONViewer = ({ jsonObject }) => (
  <div>
    <h3>Generated JSON</h3>
    <Viewer src={jsonObject} />
  </div>
);
