import {useNavigate} from "react-router";
import {useContext, useEffect, useRef, useState} from "react";
import {AssignedProjectsContext, ManageProjectsContext} from "../Context/EmployeContext";
import Project from "../components/Project";
import AssignedProject from "../components/AssignedProject";
import assignedProject from "../components/AssignedProject";
import axios from "axios";
import {endPoint} from "../Config/endpoints";
import {useLocation} from "react-router-dom";


function ManageProjects() {

    const navigate = useNavigate();
    const [manageProject, setManageProject] = useContext(ManageProjectsContext);

    const [filterProject, setFilterProject] = useState([]);

    // const projects = manageProject.projectList;

    const filterRef = useRef();

    const {state}= useLocation();

    console.log(manageProject);


    const fetchAllProjects = () =>{
        // console.log("----------")
        axios.get(endPoint.getProjectUrl)
            .then(response => {
                setFilterProject(response.data);
            })
            .catch(error =>{
                console.log(error)
            })

    }

    useEffect(fetchAllProjects, []);

    // const projectsList = projects.map(p => {
    //
    //     return <>
    //         <div>
    //             <AssignedProject id={p.id}
    //                              name={p.name}
    //             >
    //
    //             </AssignedProject>
    //
    //         </div>
    //     </>
    // });

    const fetchFilterProjects =() =>{

        let name =  filterRef.current['name'].value;
        let location = filterRef.current['location'].value;
        console.log("Filter by")

        if (name === '0' || location === '') {
            alert("PLease Enter details to filter!")
        }
        else {

            axios.get(endPoint.getProjectUrl, {
                params: {
                    name: name+"",
                    location: location
                }
            }).then(response => {
                setFilterProject(response.data);
            })
                .catch(error => {
                    console.error("Error: " + error);
                })
        }

    }


    const filterProjectsList = filterProject.map(p => {

        return <>
            <div>
                <AssignedProject id={p.id}
                                 name={p.name}
                                 eid={state.id}
                >
                </AssignedProject>

            </div>
        </>
    });




    return <div>

        <br />
       <form ref={filterRef}>
           <div>
               Name: <input type="text" name='name' /> <br />
               Location: <input type="text" name='location'/>
               <input type='button' onClick={fetchFilterProjects}  value='Filter'/>

           </div>
       </form>
        <div className="Spec" >
            <button  onClick={()=>{navigate(-1)}}> Back</button>
        </div>
        {/*<>{projectsList}*/}
        {/*</>*/}

        <>
            {filterProjectsList}
        </>


    </div>
}

export default ManageProjects;