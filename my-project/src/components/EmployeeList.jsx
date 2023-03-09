import { useEffect,useState } from "react";
import Employee from "./Employee";
import NavigationBar from "./NavigationBar";
const EmployeeList = () => {
    //this componet shows all Employee's
    const [Employees, setEmployees] = useState(null);
    const [FetchStatus, setFetchStatus] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:8000/employees')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setEmployees(data);
            setFetchStatus(true);
            console.log(Employees);
        });
    },[])
    return (  
        <div>
            <NavigationBar/>
            <div className="flex place-content-center m-2">
           {
            FetchStatus&& Employees.map((employee)=>(
                <Employee name={employee.fullName} email={employee.email} birthday={employee.birthday} salary={employee.salary} key={employee.id}/> 
            ))
           }
            </div>
        </div>
    );
}
 
export default EmployeeList;