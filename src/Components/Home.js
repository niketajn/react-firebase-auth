import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate  } from 'react-router-dom'; 
import { useUserAuth } from "../Context/UserAuthContext";

const Home = () => {
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();
    const handlerLogout = async () => {
        try {
            await logOut();
            navigate("/");
        }catch(err){
            console.log(err.message);
        }
    }

return (<>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
            {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Link to="/">
            <Button variant="primary" onClick={handlerLogout}>
            Log out
        </Button>
        </Link>
      </div>
    </>)
};

export default Home;