import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
   const [userList, setUserList] = useState([]);

   const addUserHandler = (uName, uAge) => {
     setUserList(prevUserList => {
       return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()} ]
     })
   }
   function Delete(id){
     setUserList(
       userList.filter((el)=>{
         if(el.id !== id){
           return el
         }
       })
     )
   }

return(
  <div className='App'>
    <AddUser onAddUser={addUserHandler}/>
    <UsersList users={userList} func = {Delete}/>
    
  </div>
)
}



export default App;
