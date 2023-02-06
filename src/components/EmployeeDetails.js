import {useState, useEffect, Fragment, useRef, useContext} from "react";
import {useParams, redirect, useNavigate, Link} from "react-router-dom"
import axios from "axios";
import Project from "./Project";
import './EmployeeDetails.css'
import {endPoint} from "../Config/endpoints";
import {ManageProjectsContext} from "../Context/EmployeContext";


function EmployeeDetails() {

    const {id} = useParams();
    const [employeeDetails, setEmployeeDetails] = useState([]);

    const [manageProject, setManageProject] = useContext(ManageProjectsContext);


    const navigate = useNavigate();



    const fetchEmplById = () => {
        axios.get(endPoint.getBaseUrl + id)
            .then(response => {
                setEmployeeDetails(response.data);
                setManageProject(response.data.projectList.map(p => ({id: p.id, name: p.name})));
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(fetchEmplById, [{id}]);

    const deleteEmp = () => {

        axios.delete(endPoint.getBaseUrl + id)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

        navigate('/');
    }


    const manageProjectsBtn = () => {
        navigate("/manage-projects", {state: {id: {id}}});
    }

    return (
        <>

            <div className="ProductDetail" style={{"width": "100%"}}>
                <h1>Employe Details</h1>
                <h3>{employeeDetails.id}</h3>
                <h3>{employeeDetails.name}</h3>


                {employeeDetails.projectList && employeeDetails.projectList.length > 0 ? (<>
                    <h1> Details</h1>
                    {/*{console.log(employeeDetails.projectList)}*/}
                    {employeeDetails.projectList.map(project => (
                        <Project
                            key={project.id}
                            id={project.id}
                            name={project.name}
                        />))}
                </>) : <h1>No Projects</h1>}

                <input type='button' value='Delete' onClick={deleteEmp}/>
                <input type='button' value='Back' onClick={() => {
                    navigate(-1)
                }}/>

                <label onClick={manageProjectsBtn}>Manage Projects</label>

            </div>
        </>
    );


}

export default EmployeeDetails;

