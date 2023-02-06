function Employee(props) {

    return <div className="Content">
        {/*<h1>Employee</h1>*/}

        <h1>{props.name}</h1>
        <h1>{props.id}</h1>
        <h1>{props.salary}</h1>
        <div className="Info">
            <div className="Author">{props.name}</div>
        </div>
        <br/>
    </div>

}

export default Employee;