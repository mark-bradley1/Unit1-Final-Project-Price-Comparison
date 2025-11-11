import React, { useState } from "react";
import Button from "./Button";

function Form() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        contact: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Thanks for reaching out");
    }

    const isFormValid = formData.name && formData.email && formData.contact;

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </label>
                <br />
                <label>Phone:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required/>
                </label>
                <br />
                <label>Feedback: 
                    <textarea type="text" name="feedback" maxLength="200" value={formData.contact} onChange={handleChange} rows="10" cols="80" required />
                </label>
                <div className="char-counter">
                    {formData.contact.length} / 200 characters
                </div>
                <br />
                <Button
                    type="submit"
                    label="Submit"
                    onClick={handleSubmit}
                    className="submit-btn"
                />
            </form>
        </div>
    )


}


export default Form