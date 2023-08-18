import './App.css';
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
import {Outlet, useLoaderData} from "react-router-dom";
import Main from "./routes/Main";
import Header from "./component/Header";
import data from "./data";
import articleData from "./services/articleDataApi";
import {useState} from "react";


function App() {

    // let [shoes] = useState(data)
    // const { shoes } = useLoaderData();

    // let [articles] = useState(articleData)
    // const { articles } = useLoaderData();

    return (
        <div className="App">
            <div id="page">
                <Outlet />
            </div>
        </div>
    );
}


export default App;
