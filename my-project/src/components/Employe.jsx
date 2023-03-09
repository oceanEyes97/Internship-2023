import ProfileIcon from "../images/ProfileIcon.png"
const Employe = () => {
    return ( 
    <div className=" w-52 h-52 border-2 rounded-xl p-2 m-2 border-black">
    <img className="w-16 h-16 mx-auto " src={ProfileIcon} alt="ProfileIcon" />
    <p>Full Name:</p>
    <p>Email:</p>
    <p>Date Of Birth:</p>
    <p>Salary:</p>

    </div> 
    );
}
 
export default Employe;