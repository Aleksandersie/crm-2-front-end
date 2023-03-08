import React from 'react';
import styles from "./loginWindow.module.scss"
const LoginWindow = () => {
    return (
        <div className={styles.loginWindowBody}>
            <div className={styles.inputWrapper}>
                <div className={styles.inputGroup}>
                    <p>Логин</p>
                    <input type="text" className={styles.input}/>
                </div>
                <div className={styles.inputGroup}>
                    <p>Пароль</p>
                    <input type="text" className={styles.input}/>
                </div>
                <div className={styles.loginWrapper}>
                    <div className={styles.loginBtn}>Войти</div>
                    <p className={styles.loginBlockText}>или</p>
                    <p className={styles.loginBlockText}>продолжить ипользование в режиме гостя</p>
                </div>
            </div>

        </div>
    );
};

export default LoginWindow;