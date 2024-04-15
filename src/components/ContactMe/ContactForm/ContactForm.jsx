import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    });
    const [result, setResult] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        
        // Client-side validation
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            setResult("Please enter a valid email address");
            setModalOpen(true);
            return;
        }

        setResult("Sending....");
        const form = new FormData();
        for (const key in formData) {
            form.append("access_key", "4ce9b5b1-d876-4939-8235-229369dbc4c3");
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });

            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                setModalOpen(true);
                setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    message: ""
                });
            } else {
                setResult(data.message);
                setModalOpen(true);
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("An error occurred. Please try again later.");
            setModalOpen(true);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
        setResult("");
    };

    return (
        <div className="contact-form-content">
            <form onSubmit={onSubmit}>
                <div className="name-container">
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                    />
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={3}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{result}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
