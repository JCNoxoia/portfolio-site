import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Contact.css";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <motion.div
            className="about-background"
            style={{
                backgroundSize: "300% 300%",
                backgroundImage: `linear-gradient(90deg, rgb(169, 241, 193), rgb(89, 201, 201), rgb(50, 197, 99))`,
                backgroundPosition: "0% 50%"
            }}
            transition={{
                duration: 2.75, repeat: Infinity, ease: "linear"
            }}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
        >
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Got a personal or business project needing an extra set of hands?</h1>
                    <p>Feel free to reach out! I'm always interested in new challenges and collaborations. Shoot me an email through the form or reach out on LinkedIn or Github.</p>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                        <div className="form-element">
                            <label htmlFor="name">Name:</label>
                            <input
                                id ="name"
                                placeholder="Don't be shy!"
                                {...register("name", { required: "Name is required, but you can use a pseudonym 😉" })} />
                            {errors.name && <p className="valid-err">{errors.name.message}</p>}
                        </div>
                        <div className="form-element">
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                placeholder="coolguy87@email.com"
                                {...register("email", {
                                    required: "Email is required if you want me to message you back",
                                    pattern: {
                                        value: /^[^@]+@[^@]+\.[^@]+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            {errors.email && <p className="valid-err">{errors.email.message}</p>}
                        </div>
                        <div className="form-element">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                placeholder="&#8220;Could you build me a pretty site?&#8221;"
                                {...register("message", { required: "Message is required... of course!" })} />
                            {errors.message && <p className="valid-err">{errors.message.message}</p>}
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <h3>Check me out below!</h3>
                <div className="socials-wrapper">
                    <a id="LinkedIn" href="https://www.linkedin.com/in/jaime-barrett-08b535238/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a id="Github" href="https://github.com/JCNoxoia" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareGithub} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;