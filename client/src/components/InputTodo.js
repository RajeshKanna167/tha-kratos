import React, { Fragment, useNavigate, useState } from "react";
import { BarChart } from "recharts";



const InputTodo = () => {
    const [student_id, firstname, fathername, branch, dob, gender, setStudent_id, setFirstname, setFathername, setBranch, setDOB, setGender] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault(); //avoid refresh
        try {
            const body = { student_id, firstname, fathername, branch, dob, gender };
            
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    const navigate =useNavigate





    return (
        
        <Fragment>
            <h3 className="text-center mt-5">Kratos - RAJESH KANNA SPA</h3>
            
                
                {
                            
                    
                    // <button className="btn btn-success" onClick={ BarChart }></button>
                    
                    
                
                
                }
            
        </Fragment>
    );
};

export default InputTodo;