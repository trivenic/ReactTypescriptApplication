// Not working
// export default const Hello =()=>{
//     <h1>This is typescript Application</h1>
// }




// USE OF PROPS
// function Hello({name}:{name:string}){
//     return(
//         <>
//         <h1>{name}</h1>
//         </>
//     )
// }
// export default Hello;
// ------------------------------------------------------






// USE OF INTERFACE
import { useState } from "react";
import {User} from "../interface/Interface";
import Register from "../register/Register";
function Hello({ user }: { user: User }) {
    const [isRegister,setIsRegister]=useState(false);

    const handleClick=()=>{
        setIsRegister(true)
    }
  return (
    <>
      <h1>Welcome {user.name}</h1>
      <h2>Email : {user.email}</h2>
      <h2>Date of Birth : {user.dateOfBirth}</h2>
      <button onClick={handleClick}>Register</button>
      {isRegister?(<Register/>):(null)}

    </>
  );
}
export default Hello;
// ----------------------------------------------------------

