import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Contact/Contact.css"

const Contact = () => {
    return (
        <div className="container my-5">

            <h2>Contacto</h2>
            <hr></hr>

            <form>
                <input type={'text'} className='form-control container my-5'/>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;