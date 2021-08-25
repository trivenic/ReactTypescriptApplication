import { useEffect } from "react";
import { useHistory } from "react-router";
import { User } from "../interface/Interface";

function Logout({setIsUser}:{setIsUser:any}){
    const user: User ={name:"",email:"",dateOfBirth:"",password:""}
    const history = useHistory();
    useEffect(()=>{
        setIsUser(user);
        history.push('/login')
    })
    return null;
}

export default Logout;