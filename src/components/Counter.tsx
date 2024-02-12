import { useState } from "react";
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <div>
            <p className={styles.count}>{count}</p>
            <button onClick={handleClick}>Увеличить</button>
        </div>
    )
}