import React, { useState } from 'react';

const IframeComponent = () => {
  const [iframeUrl, setIframeUrl] = useState('https://www.youtube.com');

  const handleUrlChange = (event) => {
    setIframeUrl(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={iframeUrl}
        onChange={handleUrlChange}
        placeholder="Enter website URL"
      />
      <iframe
        src={iframeUrl}
        width="100%"
        height="500"
        frameBorder="0"
        title="Website Preview"
      />
    </div>
  );
};

export default IframeComponent;