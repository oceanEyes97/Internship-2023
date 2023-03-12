import { useState,useEffect } from "react";
import Employee from "./Employee";
import NavigationBar from "./NavigationBar";
const TopFiveEmployees = () => {
    const [Employees, setEmployees] = useState(null);
    const [Tasks, setTasks] = useState();
    const [ShowEmployees, setShowEmployees] = useState(false);
    const [TopFiveEmployees, setTopFiveEmployees] = useState();
    let employesWithcompleatedTasks=[];
    let SortedEmployees=[];
    //fetcthing the data from the JSON server so we can calculate the Top Employees and render it on the page
    useEffect(()=>{
        fetch('http://localhost:8000/tasks')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setTasks(data);//setting the response in state
        });
        
        fetch('http://localhost:8000/employees')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setEmployees(data);//setting the response in state
        });
        
    },[])

    const hanndleShowTopFiveEmployees=(event)=>{
        event.preventDefault();
        let today=new Date();
        today.setHours(0,0,0);
        let objectCopy={};
        let numberOfCompleatedTasks=0;
        let maxCompleatedTasks=0;
        for (let i = 0; i < Employees.length; i++) //searching for the number of compleated tasks by an employee in the last month
        {
                for (let j = 0; j < Tasks.length; j++) 
                {   let deadline=new Date(Tasks[j].dueDate);
                        deadline.setHours(0,0,0);
                        console.log();
                    if(Employees[i].id==Tasks[j].assigneeId)
                    {  
                         if (Tasks[j].compleated&&((today.getMonth()-deadline.getMonth())<=1))
                        {
                            
                            numberOfCompleatedTasks++;
                            if(maxCompleatedTasks<=numberOfCompleatedTasks)
                            {
                            maxCompleatedTasks=numberOfCompleatedTasks;
                            }
                        
                        }
                        
                    }
                    
                }
                objectCopy={...Employees[i],compleatedTasks:maxCompleatedTasks}; //after every itteration copying the employee data and adding it's number of compleated tasks
                numberOfCompleatedTasks=0;//reseting the counters after one employee is done
                maxCompleatedTasks=0;
                employesWithcompleatedTasks.push(objectCopy);//saving the result in a array
        } 
        employesWithcompleatedTasks.sort((a,b)=>{
          return  b.compleatedTasks-a.compleatedTasks;
        }) //sorting the result from most compleated to least compleated
        for (let i = 0; i < 5; i++) {
            SortedEmployees.push(employesWithcompleatedTasks[i]);// saving the result in the sorted employees array
        }
        setTopFiveEmployees(SortedEmployees);//putting the sorted array into state so it can be mapped
        setShowEmployees(true);
    }
    return ( 
        <div>
            <NavigationBar/>
            {/* mapping the top five employees */}
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-row items-center flex-wrap">
            {
            ShowEmployees&& TopFiveEmployees.map((employee,index)=>(
                <Employee name={employee.fullName} email={employee.email} 
                birthday={employee.birthday} salary={employee.salary}
                key={index} employeeId={employee.id} enableDelete={false}
                enableUpdate={false} disableInput={true}/> 
            ))
           }
            </div>
            <div className="container py-4 px-4 mx-0 min-w-full flex flex-col items-center">
           <button className=" bg-blue-500 text-white text-xl rounded-xl w-[250px] h-[50px] mt-8 mb-4 hover:bg-blue-400"
         onClick={hanndleShowTopFiveEmployees}>Show Top 5 Employees</button>
           </div>
        </div>
     );
}
 
export default TopFiveEmployees;