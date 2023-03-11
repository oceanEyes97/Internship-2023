import { useEffect,useState } from "react";
import Employee from "./Employee";
import NavigationBar from "./NavigationBar";
const EmployeeList = () => {
    //this componet shows all Employee's
    const [Employees, setEmployees] = useState(null);
    const [FetchStatus, setFetchStatus] = useState(false);
    const [EnableDelete, setEnableDelete] = useState(false);
    const [EnableUpdate, setEnableUpdate] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:8000/employees')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setEmployees(data);
            setFetchStatus(true);
            setEnableDelete(true);
            setEnableUpdate(true);
            console.log(Employees);
        });
    },[])
    return (  
        <div>
            <NavigationBar/>
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-row items-center content-around">
           {
            FetchStatus&& Employees.map((employee,index)=>(
                <Employee name={employee.fullName} email={employee.email} 
                birthday={employee.birthday} salary={employee.salary} 
                key={index} employeeId={employee.id} enableDelete={EnableDelete}
                enableUpdate={EnableUpdate}/> 
            ))
           }
            </div>
        </div>
    );
}
 
export default EmployeeList;