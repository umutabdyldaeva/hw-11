import Button from '../UI/Button';
import Card from '../UI/Card'
import Modal from '../UI/Modal'
import { useState } from 'react'
import styles from './UsersList.module.css'

const UsersList = props => {
    const [error, setError] = useState(false)

    function func(id){
        setError(true);
        props.func(id)
    }

    function Net(bul){
        setError(bul)
    }



    return(
        <Card className={styles.users}>
            {error ? <Modal Net={Net} />  : ""}
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        {user.age} years old
                     <Button onClick={() => func(user.id)}>Delete</Button> 
                    </li>
                  ))}
            </ul>
        
        </Card>
    )
}

export default UsersList;