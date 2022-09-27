import React,{useState} from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { signUp } = useUserAuth();
    const [err,setErr] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr('');
        try{
            await signUp(email,password);
            navigate("/")
        }catch(err){
            setErr(err.message)
        }
    }

    return (
        <>
          <div className="p-4 box">
            <h2 className="mb-3">Firebase Auth Signup</h2>
            {err && <Alert variant="danger">{err}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}/>
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
                type="dark"
              />
            </div>
          </div>
          <div className="p-4 box mt-3 text-center">
            Have an account? <Link to="/">Login</Link>
          </div>
        </>
      );
};

export default Signup;