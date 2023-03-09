import Employee from "./Employee";
import NavigationBar from "./NavigationBar";
const EmployeeList = () => {
    //this componet shows all Employee's
    return (  
        <div>
            <NavigationBar/>
            <div className="flex place-content-center m-2">
            <Employee/>
            <Employee/>
            <Employee/>
            <Employee/>
            <Employee/>
            </div>
        </div>
    );
}
 
export default EmployeeList;