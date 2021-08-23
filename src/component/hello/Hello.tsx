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
import User from "../interface/Interface";
function Hello({ user }: { user: User }) {
  return (
    <>
      <h1>Welcome {user.name}</h1>
      <h2>Age : {user.age}</h2>
      <h2>Date of Birth : {user.dateOfBirth.toDateString()}</h2>
    </>
  );
}
export default Hello;
// ------------------------------------------------------