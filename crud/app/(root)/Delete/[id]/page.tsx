"use client"
import React from 'react'

import styles from './page.module.css'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import { useRouter } from 'next/navigation'



const page = ({ params }: any) => {
    const { id } = params

    const router = useRouter()

    const DeleteNow = async () => {

        const res = await fetch(`http://localhost:3000/api/Books/${id}`, {
            method: "DELETE"
        })

        if (res.ok) {
            enqueueSnackbar("Book Deleted Successfully", { variant: "success" })
            router.push("/")
        }

    }

    return (
        <>
            <SnackbarProvider />
            <div className={styles.DeleteMessage}>
                <h6>Are You Sure You Wants To Delete This</h6>
                <button onClick={DeleteNow} className={styles.DeleteBtn}>Delete Now</button>
            </div>
        </>
    )
}

export default page