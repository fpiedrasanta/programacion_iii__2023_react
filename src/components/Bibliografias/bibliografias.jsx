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
    const [page, setPage] = useState(1);
    
    const nextPage = () => {
        setPage(page + 1);
    }

    const prevPage = () => {
        setPage(page - 1);
    }

    const find = (evt) => {
        const { value } = evt.target;
        setQuery(value);
    }

    const [query, setQuery] = useState("");

    const fetchData = async () => {
        try {
            let response = await fetch(`https://localhost:7106/Resource/Type/1?page=${page}&pageSize=5&query=${query}`);
            let json = await response.json();
            
            setBibliografias(json.list);

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
    }, [page, query]);
    
    return (
        <>
            <Link to="/bibliografia" className="btn btn-primary">Nuevo</Link>

            <input type="text" value={query} onChange={find}/>
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
            <a className='btn btn-primary' onClick={prevPage}>Anterior</a>
            <p>{page}</p>
            <a className='btn btn-primary' onClick={nextPage}>Siguiente</a>
        </>
    );
}