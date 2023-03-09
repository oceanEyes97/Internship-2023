import Employee from "./Employee";
import NavigationBar from "./NavigationBar";
const TopFiveEmployees = () => {
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
 
export default TopFiveEmployees;