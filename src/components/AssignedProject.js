import axios from "axios";
import {useContext} from "react";
import {ManageProjectsContext} from "../Context/EmployeContext";
import {endPoint} from "../Config/endpoints";


function AssignedProject(props) {


    const [manageProject, setManageProject] = useContext(ManageProjectsContext);

    const handleAdd = () => {
        setManageProject([...manageProject, {
            id: props.id
        }]);
        addEmpProjectToDB();
        console.log(manageProject)

    };

    const removeEmpProjectFromDB = () => {
        axios.delete(endPoint.getBaseUrl + props.eid.id + "/projects/" + props.id)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const addEmpProjectToDB = () => {
        axios.put(endPoint.getBaseUrl + props.eid.id + "/projects/" + props.id)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleRemove = () => {
        removeEmpProjectFromDB();
        setManageProject(manageProject.filter(p => p.id !== props.id));
    };


    const isSelected = () => {
        if (manageProject.length === 0) return false;
        return manageProject.some(p => p.id === props.id);
    };


    return (<div className='Review'>
        <label> {props.id} - {props.name}</label>
        <input type="button"
               value={!isSelected() ? 'Add' : 'Remove'}
               onClick={!isSelected() ? handleAdd : handleRemove}
        />
        <div>

        </div>
    </div>)
}

export default AssignedProject;