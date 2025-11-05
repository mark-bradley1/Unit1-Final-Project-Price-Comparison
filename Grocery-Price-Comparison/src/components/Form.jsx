import React, { useState } from "react";

function Form() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Thanks for feedback");
    }

    const isFormValid = formData.name && formData.email && formData.feedback;

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
                <label>Feedback: 
                    <textarea type="text" name="feedback" maxLength="200" value={formData.feedback} onChange={handleChange} required />
                </label>
                <div className="char-counter">
                    {formData.feedback.length} / 200 characters
                </div>
                <br />
                <button type="submit" disabled={!isFormValid}>
                    Submit
                </button>
            </form>
        </div>
    )


}


export default Form