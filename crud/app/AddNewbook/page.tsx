"use client"
import React, { useState } from 'react'

import styles from './page.module.css'

// For Components
import { Inputbox } from '@/Components/InputBox/InputBox'
import { BackButton } from '@/Components/BackButton/BackButton'

import { SnackbarProvider, enqueueSnackbar } from 'notistack';


import { useRouter } from 'next/navigation'

const page = () => {

    const [BookTitle, setBookTitle] = useState("")
    const [BookAuthor, setBookAuthor] = useState("")
    const [BookIntro, setBookIntro] = useState("")
    const [BookDesc, setBookDesc] = useState("")
    const router = useRouter()



    const SaveBook = async (e: any) => {

        e.preventDefault()

        if (BookTitle == "" || BookAuthor == "" || BookIntro == "" || BookDesc == "") {
            enqueueSnackbar("All Fields Are Required", { variant: "error" })
        } else {
            // enqueueSnackbar("Good", { variant: "success" })


            try {
                const result = await fetch("http://localhost:3000/api/Books", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        BookTitle,
                        BookAuthor,
                        BookIntro,
                        BookDesc
                    })
                })

                if (result.ok) {
                    enqueueSnackbar("Book Created Successfully", { variant: "success" })
                    router.push("/")
                }

            } catch (error) {
                enqueueSnackbar("Something Went Wrong", { variant: "error" })
            }

        }




    }

    return (
        <>
            <SnackbarProvider />
            <BackButton />

            <div className={styles.AddNewBook}>



                <div className={styles.AddNewBook_Row}>
                    <h6>Add New Book Now</h6>

                    <form onSubmit={SaveBook}>

                        <Inputbox
                            id="BookTitle"
                            onChange={(e: any) => setBookTitle(e.target.value)}
                            labelText="Book Title"
                            value={BookTitle}
                        />




                        <Inputbox
                            id="BookAuthor"
                            onChange={(e: any) => setBookAuthor(e.target.value)}
                            labelText="Book Author"
                            value={BookAuthor}
                        />


                        <Inputbox
                            id="BookIntro"
                            onChange={(e: any) => setBookIntro(e.target.value)}
                            labelText="Book Intro"
                            value={BookIntro}
                        />



                        <Inputbox
                            id="BookDesc"
                            onChange={(e: any) => setBookDesc(e.target.value)}
                            labelText="Book Description"
                            value={BookDesc}
                        />

                        <button type='submit' className={styles.Btn}>Save Book  Now</button>




                    </form>
                </div>

            </div>

        </>
    )
}

export default page