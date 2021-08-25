 export  interface User {
    name:string,
    email:string,
    password:string,
    dateOfBirth:string
}
export interface Geo {
    lat: string,
    lng: string
  }

 export interface Company{
    name:string,
    catchPhrase:string,
    bs:string
  }

export interface Address{
    street: string,
    suite:string,
    city: string,
    zipcode: number,
    geo:Geo
 }
 
export interface BlogUser{
    id:number,
    name:string,
    username:string,
    email:string,
    address:Address,
    phone:string,
    website:string,
    company:Company
 }

