import React from 'react'

import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>

            <nav className={styles.Navbar}>
                <Link href={"/"}>
                    <Image
                        src="/logo.png"
                        height={100}
                        width={100}
                        alt='Logo'
                    />
                </Link>

                <h6>CRUD Operation</h6>

                {/* If You Want Make New Component And Add Here Instead of This Link */}
                <Link href={"/AddNewbook"} className={styles.AddNewBook}>Add New Book</Link>

            </nav>

        </>
    )
}

export default Navbar