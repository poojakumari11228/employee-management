import {useNavigate} from "react-router";
import { useEffect, useRef, useState} from "react";
import AssignedProject from "../components/AssignedProject";
import axios from "axios";
import {endPoint} from "../Config/endpoints";
import {useLocation} from "react-router-dom";


function ManageProjects() {

    const navigate = useNavigate();
    const [filterProject, setFilterProject] = useState([]);
    const filterRef = useRef();
    const {state} = useLocation();


    const fetchAllProjects = () => {
        axios.get(endPoint.getProjectUrl)
            .then(response => {
                setFilterProject(response.data);
            })
            .catch(error => {
                console.log(error)
            })

    }

    useEffect(fetchAllProjects, []);
    const fetchFilterProjects = () => {

        let name = filterRef.current['name'].value;
        let location = filterRef.current['location'].value;

        if (name === '0' || location === '') {
            alert("PLease Enter details to filter!")
        } else {
            axios.get(endPoint.getProjectUrl, {
                params: {
                    name: name + "", location: location
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
        <br/>
        <form ref={filterRef}>
            <div>
                Name: <input type="text" name='name'/> <br/>
                Location: <input type="text" name='location'/>
                <input type='button' onClick={fetchFilterProjects} value='Filter'/>

            </div>
        </form>
        <div className="Spec">
            <button onClick={() => {
                navigate(-1)
            }}> Back
            </button>
        </div>
        <>
            {filterProjectsList}
        </>

    </div>
}

export default ManageProjects;