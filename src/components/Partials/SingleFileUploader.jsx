import React, { useState } from 'react';
import './SingleFileUploader.css'

const SingleFileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    // We will fill this out later
  };

  return (
    <section classNAme="singleFileUploader">
        <div className="input-group">
            <input id="file" type="file" onChange={handleFileChange} />
        </div>

        {file && (
            <section>
                File details:
                <ul>
                    <li>Name: {file.name}</li>
                    <li>Type: {file.type}</li>
                    <li>Size: {file.size} bytes</li>
                </ul>
            </section>
        )}

        {file && (<button onClick={handleUpload} className="submit">Upload a file</button>)}
    </section>
  );
};

export default SingleFileUploader;