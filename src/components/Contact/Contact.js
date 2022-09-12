import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Contact/Contact.css"

const Contact = () => {
    return (
        <center>
        <div className='marginTop-all'>
            <div className="mb-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/> </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe aqui..." ></textarea>
            </div>
            <div>
            <button className="btn btn-outline-primary">Enviar</button>
            </div>
        </div>
        </center>
    );
};

export default Contact;