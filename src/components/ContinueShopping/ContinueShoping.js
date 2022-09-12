import React from 'react';
import { Link } from 'react-router-dom';

const ContinueShoping = () => {
    return (
        <div>
            <Link to="/cart" className="btn btn-danger my-2">Terminar la compra</Link>
            <br />
            <Link to="/" className='btn btn-warning my-2'>Seguir comprando</Link>
        </div>
    );
};

export default ContinueShoping;