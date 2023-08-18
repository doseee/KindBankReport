import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import ErrorPage from "./error/error-page";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
import Login from "./routes/Login";
import ReportDetail from "./routes/ReportDetail"
import QuizBookMarks from "./routes/QuizBookMarks";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                // path: "/main",
                element: <Main/>,
            },
            {
                path: "/main",
                element: <Main />,
            },
            {
                path: "detail/:detailId",
                element: <Detail/>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/report/:date",
                element: <ReportDetail />,
            },
            {
                path: "/quiz/1",
                element: <QuizBookMarks />,
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
        {/*<App />*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
