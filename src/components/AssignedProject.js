import axios from "axios";
import {Fragment, useContext, useEffect, useState} from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import {AssignedProjectsContext, ManageProjectsContext} from "../Context/EmployeContext";
import ManageProjects from "../containers/ManageProjects";
import {endPoint} from "../Config/endpoints";


function AssignedProject(props) {


    const [manageProject, setManageProject] = useContext(ManageProjectsContext);


    console.log("-- AssignProject---"+props.eid.id)
    console.log(manageProject)

    const handleAdd = () => {
        console.log("-- handleAdd---")

        setManageProject([...manageProject, {
            id: props.id
        }]);
        addEmpProjectToDB();
        console.log(manageProject)

    };

    const removeEmpProjectFromDB = () =>{
        axios.delete(endPoint.getBaseUrl+props.eid.id+"/projects/"+props.id)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    const addEmpProjectToDB = () =>{
        axios.put(endPoint.getBaseUrl+props.eid.id+"/projects/"+props.id)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    const handleRemove = () => {
        console.log("-- handle Remove--")
        removeEmpProjectFromDB();
        setManageProject(manageProject.filter(p => p.id !== props.id));


    };


    const isSelected = () => {
        console.log("isSelected()-"+props.id+"," + manageProject.some(p => p.id === props.id))
        console.log(manageProject)
        if (manageProject.length === 0) return false;
        return manageProject.some(p => p.id === props.id);
    };



    return (
        <div className='Review'>
            <label > {props.id} - {props.name}</label>
            <input type="button" value="add"
                   value={!isSelected() ? 'Add' : 'Remove'}
         onClick={!isSelected()? handleAdd: handleRemove}
            />
            <div>

            </div>
        </div>
    )
}

export default AssignedProject;