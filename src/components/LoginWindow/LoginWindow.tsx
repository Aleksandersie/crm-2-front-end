import React from 'react';
import styles from "./loginWindow.module.scss"
const LoginWindow = () => {
    return (
        <div className={styles.loginWindowBody}>
            <div>
                <div>
                    <p>Логин</p>
                    <input type="text" className={styles.input}/>
                </div>
                <div>
                    <p>Пароль</p>
                    <input type="text" className={styles.input}/>
                </div>
            </div>

        </div>
    );
};

export default LoginWindow;