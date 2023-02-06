import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";


function Project(props) {




    return (
        <div className='Review'>
            <label > {props.id} - {props.name}</label>

            <div>

            </div>
        </div>
    )
}

export default Project;