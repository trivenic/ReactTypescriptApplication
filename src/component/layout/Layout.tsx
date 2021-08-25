import Routes from "../route/Routes";
import {useState} from "react";
import { Link } from "react-router-dom";
import './Layout.css'
import { User } from "../interface/Interface";
function Layout(){

    const [isLoggedOut,setIsLoggedOut]=useState(false);
    const user: User ={name:"",email:"",dateOfBirth:"",password:""}
    const [isUser,setIsUser]=useState<User>(user);
    function handleLogout(){
        setIsLoggedOut(false);
    }
    return (
        <div className="Layout">
            <header className="Layout-header">
            <h1>React Application</h1> 
            <h4>{isUser.name}</h4>
            <h5>{isUser.email}</h5>
            <nav className="Layout-nav">
                <Link to='/login' className="Layout-nav-link">Login</Link>
                <Link to='/register' className="Layout-nav-link">Register</Link>
                {isLoggedOut?( <Link to='/logout' className="Layout-nav-link" onClick={handleLogout}>Logout</Link>):null}
                
            </nav>
        </header>
        <main>
            <Routes setIsUser={setIsUser} setIsLoggedOut={setIsLoggedOut}/>
        </main>
        <footer></footer>
        </div>
    )
}

export default Layout;

