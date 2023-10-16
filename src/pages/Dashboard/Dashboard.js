import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
const Dashboard = () => {
    return (
        <div>
        <NavBar/>
        <Container fluid>
            <div className="row mt-5">
                <div className="col-md-12 ms-auto text-mod">
                    <b>MODULES</b>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col col-md-4">
                        <div className="card shadow p-2 mb-5 bg-white rounded">
                            <ul className="list-styled"> {/* Add list-unstyled class */}
                                <li className="mb-1 li"><a href="/" className="text-mod">Accounting ↗️ </a></li>
                                <li className="mb-1 li"><a href="/" className="text-mod">Warehouse.Management ↗️</a></li>
                                <li className="mb-1 li"><a href="/" className="text-mod">CRM ↗️</a></li>
                                <li className="li"><a href="/" className="text-mod">Sales ↗️</a></li>
                            </ul>
                        </div>
                </div>
                <div className="col col-md-4">
                <div className="card shadow p-2 mb-5 bg-white rounded">
                    <ul className="list-styled"> {/* Add list-unstyled class */}
                        <li className="mb-1 li"><a href="/" className="text-mod">HRMS ↗️</a></li>
                        <li className="mb-1 li"><a href="/" className="text-mod">Project.Management ↗️</a></li>
                        <li className="mb-1 li"><a href="/" className="text-mod">Support ↗️</a></li>
                        <li className="li"><a href="/" className="text-mod">Asset.Management ↗️</a></li>
                    </ul>
                </div>
                </div>
                <div className="col col-md-4">
                <div className="card shadow p-2 mb-5 bg-white rounded">
                    <ul className="list-styled"> {/* Add list-unstyled class */}
                        <li className="mb-1 li"><a href="/" className="text-mod">Manufacturing ↗️</a></li>
                        <li className="mb-1 li"><a href="/" className="text-mod">Website Management ↗️</a></li>
                        <li className="mb-1 li"><a href="/" className="text-mod">Quality Management ↗️</a></li>
                        <li className="li"><a href="/" className="text-mod">Purchase ↗️</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </Container>
        <Footer/>
        </div>
    )
}
export default Dashboard;
