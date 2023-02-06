
import React, { useState } from 'react';
import '../Headers/Header.css'
import Header from "../Headers/Header";
import PageRoutes from "./PageRoutes";
import Employee from '../../components/Employee';
import {AssignedProjects, AssignedProjectsContext, ManageProjectsContext} from "../../Context/EmployeContext";
import ManageProjects from "../ManageProjects";

export default function Dashboard() {


const [assignedProject, setAssignedProject] = useState([]);

    const [manageProject, setManageProject] = useState([]);

    return (
        <React.Fragment>

            <ManageProjectsContext.Provider value={[manageProject, setManageProject ]}>
             <AssignedProjectsContext.Provider value={[ assignedProject, setAssignedProject ]}>

                <div className='header'>
                    <Header />
                </div>
                <div className="Product">
                    <PageRoutes />

                </div>

             </AssignedProjectsContext.Provider>
            </ManageProjectsContext.Provider>
        </React.Fragment>

    )

}