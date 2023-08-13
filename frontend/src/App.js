import './App.css';
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
import {Outlet, useLoaderData} from "react-router-dom";
import Main from "./routes/main";
import Header from "./component/header";
import data from "./data";

// export async function loader() {
//     const shoes = data;
//     return { shoes };
// }
function App() {

    // let [shoes] = useState(data)
    // const { shoes } = useLoaderData();

    return (
        <div className="App">
            <div id="page">
                <Outlet />
            </div>
        </div>
    );
}


export default App;
