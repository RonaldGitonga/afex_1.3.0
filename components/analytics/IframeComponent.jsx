import React, { useState } from 'react';

const IframeComponent = (props) => {
  // const [iframeUrl, setIframeUrl] = useState('');

  // const handleUrlChange = (event) => {
  //   setIframeUrl(props.redirect_url);
  // };

  return (
    <div>
      {/* <input
        type="text"
        value={props.redirect_url}
        onChange={handleUrlChange}
        placeholder="Enter website URL"
      /> */}
      <iframe
        src={props.redirect_url}
        width="100%"
        height="500"
        frameBorder="0"
        title="Website Preview"
      />
    </div>
  );
};

export default IframeComponent;