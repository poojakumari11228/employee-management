import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Employee from "../components/Employee";
import {endPoint} from "../Config/endpoints";

function Employees() {

    const [employees, setEmployees] = useState([]);

    const fetchEmps = () => {
        axios.get(endPoint.getBaseUrl)
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error("Error: " + error)
            })
    }

    useEffect(() => {
        fetchEmps()
    }, []);

    const empsList = employees.map(emp => {

        return <>

            <Link to={`${emp.id}`}>
                <div>
                    <Employee
                        key={emp.id}
                        id={emp.id}
                        name={emp.name}
                        gpa={emp.salary}
                    />
                </div>
            </Link>
        </>


    });


    return <div className="Product">
        {empsList}

    </div>;
}

export default Employees;