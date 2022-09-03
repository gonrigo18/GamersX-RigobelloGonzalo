import React from 'react';
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className='container row'>
            <h2>Categorias</h2>
            <Link to="/Category/Ram" className="navlink">MEMORIAS RAM</Link>
            <Link to="/Category/Procesadores" className="header-navlink">PROCESADORES</Link>
            <Link to="/Category/Muebles" className="header-navlink">MUEBLES</Link>
        </div>
    );
};

export default Category;