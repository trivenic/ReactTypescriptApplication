import {  Route,  Switch } from "react-router-dom";
import Login from "../login/login";
import Register from "../register/Register";
import Blogs from "../blogs/Bolgs";
import Logout from "../logout/Logout";



function Routes({setIsUser,setIsLoggedOut}:{setIsUser:any,setIsLoggedOut:any}){
    return(
        <>
                <Switch>
                   <Route path='/login'>
                       <Login setIsUser={setIsUser} setIsLoggedOut={setIsLoggedOut} />
                   </Route>
                   <Route path='/register' component={Register}></Route>
                   <Route path='/blogs' component={Blogs}></Route>
                   <Route path='/logout' >
                       <Logout setIsUser={setIsUser}/>
                   </Route>
                </Switch>
        </>
    )
}
export default Routes;