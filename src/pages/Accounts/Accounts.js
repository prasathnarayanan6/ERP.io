import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "../../components/navbar/NavBar";
import { Container } from "@mui/material";
import '../Accounts/accounts.css'

const Accounts = () => {
    return (
        <div>
            <NavBar/>
            <Container>
                <div className="row mt-4">
                    <div className="col-6 col-sm-6 left">
                        <b className="">Accounts</b>
                    </div>
                    <div className="col-6 col-sm-6 right">
                        <button className="btn btn-warning btn-sm">Menu</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Accounts;
