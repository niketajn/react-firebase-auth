import React from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
import { useState } from "react";

const Login = () => {

    const { logIn, googleSignIn } = useUserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err,setErr] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr('');
        try{
            await logIn(email,password);
            navigate("/home");
        }catch(err){
            setErr(err.message)
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try{
            await googleSignIn();
            navigate("/home");
        }catch(err){
            setErr(err.message)
        }
    }

    return (
        <>
          <div className="p-4 box">
            <h2 className="mb-3">Firebase Auth Login</h2>
            {err && <Alert variant="danger">{err}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                  />
              </Form.Group>
    
              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                  Log In
                </Button>
              </div>
            </Form>
            <hr />
            <div>
              <GoogleButton
                className="g-btn"
                type="dark" onClick={handleGoogleSignIn}
              />
            </div>
          </div>
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </>
      );
};

export default Login;