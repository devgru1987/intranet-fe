import { FaFilePdf } from "react-icons/fa6";
import { FaFileExcel } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa";
import React from "react";
import "../Pages/PolicyUpload.css"

const PolicyDownloadLink = ({ filename, originalname}) => {

    const url = `http://localhost:3000/uploads/policies/${filename}`
    const ext = originalname.split('.')[1]

    const handleDownload = (url) => {
      const aTag =  document.createElement("a")
      console.log(originalname)
      aTag.href = url
      aTag.setAttribute("download", originalname)
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()
    }

    return (
        <div id="file-type">
          <div id="document" className={originalname}>
            {(ext === 'pdf') && <FaFilePdf size='6em' className="pdf"/>}
            {(ext === 'xlsx') && <FaFileExcel size="6em"/>}
            {(ext === 'docx') && <FaFileWord size="6em"/>}
          </div>
          <p>{  originalname.length < 15 ? originalname.slice(0, 15) : originalname.slice(0, 12) + '...'}</p>
          <button onClick={() => handleDownload(url)}>Download</button>
        </div>
    )
}

export default PolicyDownloadLink 