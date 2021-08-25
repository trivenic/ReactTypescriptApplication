
// import './App.css';
// import Blogs from './component/blogs/Bolgs';
// import Hello  from './component/hello/Hello';

// // function App() {
// //   const name= "Triveni";
// //    return (
// //     <div className="App">
// //       <Hello name={name}/>
// //     </div>
// //   );
// // }
// // export default App;


// import {User } from "./component/interface/Interface"

// function App() {;
//   const dob : Date =new Date("1996-11-11")
//   const user: User ={name:"Triveni",email:"trivenic@cybage.com",dateOfBirth:dob,password:""}
//   return (
//     <div className="App">
//     <Hello user={user}/> 
//     <Blogs/> 
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Home from './component/home/Home';



function App() {

  
  
  return (
    <div className="App">
     
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
