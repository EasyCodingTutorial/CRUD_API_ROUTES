import Link from "next/link"

import { FaFastBackward } from "react-icons/fa";

import styles from './BackButton.module.css'


export const BackButton = () => {
    return (
        <Link href={"/"} className={styles.BackButton}>
            <FaFastBackward />
        </Link>
    )
}