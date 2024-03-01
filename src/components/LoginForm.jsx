import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SigninForm = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const [showPass, setShowPass] = useState(false)
    const passwordRef = useRef();

    const handleShowPass = () => {
        setShowPass(!showPass);

        if (showPass) {
            passwordRef.current.type = "password";
        } else {
            passwordRef.current.type = "text";
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);

        if (showPassword) {
            passwordRef.current.type = "text";
        } else {
            passwordRef.current.type = "password";
        }
}