import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { FaFileUpload } from "react-icons/fa";
import { getAllPolicies, getPolicyStatus, getPolicyError, fetchPolicies,  postPolicies } from '../../app/features/Policy/policySlice'
import AdminPolicy from '../Partials/AdminPolicy'
import './Policyupload.css'

const PolicyUpload = () => {
    const dispatch =  useDispatch()
    const policyList =  useSelector(getAllPolicies)
    const policyStatus =  useSelector(getPolicyStatus)
    const policyError =  useSelector(getPolicyError)
    const [department, setDepartment] = useState('')
    const [file, setFile] = useState(null)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        if(policyStatus === 'idle'){
            dispatch(fetchPolicies())
        }
    }, [policyStatus, dispatch])

    let displayContent
    if(policyStatus === 'loading'){
        displayContent = <p>Loading ..</p>
    }else if(policyStatus === 'succeded'){
        displayContent = policyList.map((file) => <AdminPolicy key={file._id} id={file._id} name={file.originalname} department={file.department}/>)
    }else if(policyStatus === 'failed'){
        displayContent = <p>{`${policyError}... Please reload page`}</p>
    }

    const handleShowForm = () => {
        setShowForm(true)
    }

    const handleLoadedFile = (event) => {
        setFile(event.target.files[0])
    }
    
    const onOptionChangeHandler = (event) => {
        setDepartment(event.target.value)
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const url = 'http://localhost:3000/policies/upload'
        const formData =  new FormData();
        formData.append('file', file)
        formData.append('fileName', file.name)
        formData.append('department', department)

        const config =  {headers: {'content-type': 'multipart/form-data', }}

        dispatch(postPolicies(formData, config))
    };

    const options = [
        "Finance",
        "Human Resource",
        "IT",
        "Legal",
        "Marketing",
        "Operations",
        "Sales"
    ];

    return (
        <div>
            { 
               !showForm && 
                <div id="policy-intro">
                    <h3>Company policies</h3>
                    <p>This page displays all uploaded policies</p>
                    <button onClick={handleShowForm}>Upload more</button>
                </div>
            }

            { showForm && <form onSubmit={handleSubmit} id="upload-form">
                    <h3>Upload Policies</h3>
                    <p>Choose a department from the dropdown, select the policy document to upload, and click the "Upload" button.</p>
                    <section id="form-content">
                        <select onChange={onOptionChangeHandler} id="selection-option">
                            <option>Department</option>
                            {options.map((option, index) => {
                                return (<option key={index} value={option}>{option}</option>)
                                })
                            }
                        </select><br />
                        <input type='file' onChange={handleLoadedFile} id="input-file"/><br />
                        <button onClick={handleSubmit} id="upload-button">Upload</button>
                    </section>
                </form>
            }

            <section id="tabular">
                <table id="policy-table">
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>Department</th>
                            <th id="manage">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayContent}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default PolicyUpload
