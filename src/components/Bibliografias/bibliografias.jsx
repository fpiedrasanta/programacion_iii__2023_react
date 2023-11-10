import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { ImSpinner3 } from 'react-icons/im';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './bibliografias.css';
import { useEffect } from 'react';
import { useState } from 'react';

export const Bibliografias = () => {
    const fetchData = async () => {
        try {
            let response = await fetch("https://localhost:7106/Resource/Type/1");
            let json = await response.json();
            
            setBibliografias(json);

            console.log(json);
        } catch(e) {
    
        } finally {
            setLoading(false);
        }
    }
    
    const [loading, setLoading] = useState(true);
    const [bibliografias, setBibliografias] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetchData();  
    }, []);
    
    return (
        <>
            {
                loading ?
                    <div className='spinner'><ImSpinner3/></div> :
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Título</th>
                                <th>Link</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            bibliografias.map((bibliografia) => {
                                return (<tr>
                                    <td>{bibliografia.id}</td>
                                    <td>{bibliografia.title}</td>
                                    <td>{bibliografia.link}</td>
                                    <td>{bibliografia.description}</td>
                                    <td>
                                        <Link to="" className="btn btn-primary">Editar</Link>
                                        <Link to="" className="btn btn-secondary">Eliminar</Link>
                                    </td>
                                </tr>);
                            })
                        }
                        </tbody>
                    </Table>
            }
            
        </>
    );
}