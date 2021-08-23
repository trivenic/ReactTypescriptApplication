
import './App.css';
import Hello  from './component/hello/Hello';

// function App() {
//   const name= "Triveni";
//    return (
//     <div className="App">
//       <Hello name={name}/>
//     </div>
//   );
// }
// export default App;


import User from "./component/interface/Interface"

function App() {;
  const dob : Date =new Date("1996-11-11")
  const user:User ={name:"Triveni",age:23,dateOfBirth:dob}
  return (
    <div className="App">
    <Hello user={user}/>  
    </div>
  );
}

 export default App;
