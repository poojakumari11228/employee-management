import React, {useState} from 'react';
import '../Headers/Header.css'
import Header from "../Headers/Header";
import PageRoutes from "./PageRoutes";
import {ManageProjectsContext} from "../../Context/EmployeContext";


export default function Dashboard() {

    const [manageProject, setManageProject] = useState([]);

    return (
        <React.Fragment>

            <ManageProjectsContext.Provider value={[manageProject, setManageProject]}>
                <div className='header'>
                    <Header/>
                </div>
                <div className="Product">
                    <PageRoutes/>
                </div>
            </ManageProjectsContext.Provider>
        </React.Fragment>

    )

}