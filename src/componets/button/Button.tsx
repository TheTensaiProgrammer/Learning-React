import styles from './styles.module.css'

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button className={styles.button} {...props} />
}

export { Button }

