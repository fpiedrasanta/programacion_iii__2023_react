import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Bibliografia = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: 0,
        title: "",
        description: "",
        link: "",
        notes: "",
        idResourceType: 1,
        file: null,
        resourceType: ""
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({...formData, file});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataSend = new FormData();

        formDataSend.append('title', formData.title);
        formDataSend.append('description', formData.description);
        formDataSend.append('file', formData.file);
        formDataSend.append('id', 0);
        formDataSend.append('link', "a");
        formDataSend.append('notes', "a");
        formDataSend.append('idResourceType', 1);
        formDataSend.append('resourceType', "a");

        const response = await fetch('https://localhost:7106/Resource', {
            method: 'POST',
            body: formDataSend
        });

        if(response.ok) {
            navigate('/bibliografias');
        } else {
            alert("Error");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="txt_title">Título</label>
                    <input type="text"
                           className="form-control" 
                           id="txt_title"
                           name="title" 
                           value={formData.title}
                           onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txt_description">Descripción</label>
                    <input type="text"
                           className="form-control" 
                           id="txt_description"
                           name="description" 
                           value={formData.description}
                           onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txt_file">Archivo</label>
                    <input type="file"
                           className="form-control" 
                           id="txt_file"
                           name="file" 
                           onChange={handleFileChange}/>
                </div>
                <div>
                    <button type="submit" className='btn btn-primary'>Guardar</button>
                </div>
            </form>
        </>
    );
}