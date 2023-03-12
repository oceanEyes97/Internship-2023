import { useEffect,useState } from "react";
import Employee from "./Employee";
import NavigationBar from "./NavigationBar";
const EmployeeList = () => {
    //this componet shows all Employee's
    const [Employees, setEmployees] = useState(null);
    const [FetchStatus, setFetchStatus] = useState(false);
    const [EnableDelete, setEnableDelete] = useState(false);
    const [EnableUpdate, setEnableUpdate] = useState(false);
    //fetching the data from the JSON server and setting into state to be mapped
    useEffect(()=>{
        fetch('http://localhost:8000/employees')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setEmployees(data);    // setting the response in state for mapping
            setFetchStatus(true); //since it takes some time for the server to respond,this is used as a condition for the rendering and mapping of employees
            setEnableDelete(true);// this is used for conditional rendering so that the buttons woudn't appear in the TopFiveEmployees
            setEnableUpdate(true);// this is used for conditional rendering so that the buttons woudn't appear in the TopFiveEmployees
        });
    },[])
    return (  
        <div>
            <NavigationBar/>
            {/* mapping employees */}
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-row items-center flex-wrap">
           {
            FetchStatus&& Employees.map((employee,index)=>(
                <Employee name={employee.fullName} email={employee.email} 
                birthday={employee.birthday} salary={employee.salary} 
                key={index} employeeId={employee.id} enableDelete={EnableDelete}
                enableUpdate={EnableUpdate} disableInput={false}/> 
            ))
           }
            </div>
        </div>
    );
}
 
export default EmployeeList;