import styles from './ErrorModal.module.css';
import Card from '../UI/Card'
import Button from '../UI/Button'

const Modal = props => {
    return <div className={styles.backdrop} onClick={props.onConfirm}>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>Удаление пользователя</h2>
            </header>
            <div className={styles.content}>
                <p>Вы действительно хотите удалить?</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={() => props.Net(false)}>Да</Button>
                <Button onClick={() => props.Net(false)}>Нет</Button>
            </footer>
        </Card>

    </div>
        
    
}

export default Modal;