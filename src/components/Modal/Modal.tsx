import React, {ReactElement, ReactNode} from 'react';
import styles from "./modalStyles.module.scss"

interface IModal{
    active:boolean,
    setActive:any
    children:ReactNode | ReactElement
}
const Modal:React.FC<IModal> = ({active,setActive,children}) => {
    return (
        <div className= {active? styles.modalActive:styles.modalNonActive}onClick={()=>setActive(false)}>
            <div className={styles.modalContent} onClick={event =>event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;