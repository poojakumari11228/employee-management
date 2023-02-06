import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import './NewEmployee.css';
import {endPoint} from "../Config/endpoints";

const NewEmployee = (props) => {


    const addEmpRef = useRef();
    const navigator = useNavigate();

    const addEmployee = ()=> {
        const ref = addEmpRef.current;
        const data = {
            name: ref['name'].value,
            salary: ref['salary'].value
        }

        axios.post(endPoint.getBaseUrl, data)
            .then(response =>{
                console.log(response);
            })
            .catch(error=>{
                console.log(error);
            })

        navigator('/');

    }

    return (
        <div className="NewProduct">

            <form ref={addEmpRef}>
                <h1>Add Employee</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                />

                <label>Salary</label>
                <input type="text"
                    label={'salary'}
                    name={'salary'}
                />
                <button onClick={addEmployee} >Add Employee </button>
            </form>

        </div>
    );

}

export default NewEmployee;