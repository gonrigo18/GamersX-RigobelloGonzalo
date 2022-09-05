import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Contact/Contact.css"

const Contact = () => {
    return (
        <center>
        <div className='marginTop-all'>
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Email:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/> </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Mensaje:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe aqui..." ></textarea>
            </div>
            <div>
            <button className="btn btn-outline-primary">Enviar</button>
            </div>
        </div>
        </center>
    );
};

export default Contact;