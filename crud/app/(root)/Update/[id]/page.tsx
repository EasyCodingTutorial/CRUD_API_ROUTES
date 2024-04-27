"use client"
import React, { useEffect, useState } from 'react'

import styles from './page.module.css'

// For Components
import { Inputbox } from '@/Components/InputBox/InputBox'
// import { BackButton } from '@/Components/BackButton/BackButton'

import { SnackbarProvider, enqueueSnackbar } from 'notistack';


import { useRouter } from 'next/navigation'



const page = ({ params }: any) => {
    const [BookTitle, setBookTitle] = useState("")
    const [BookAuthor, setBookAuthor] = useState("")
    const [BookIntro, setBookIntro] = useState("")
    const [BookDesc, setBookDesc] = useState("")
    const router = useRouter()

    const { id } = params;

    useEffect(() => {

        const fetchData = async () => {

            try {

                const res = await fetch(`http://localhost:3000/api/Books/${id}`)


                const data = await res.json()

                setBookTitle(data.Single_Book_Data.BookTitle)
                setBookAuthor(data.Single_Book_Data.BookAuthor)
                setBookIntro(data.Single_Book_Data.BookIntro)
                setBookDesc(data.Single_Book_Data.BookDesc)



            } catch (error) {
                enqueueSnackbar("Something Went Wrong", { variant: "error" })
            }



        }

        fetchData()
    }, [id])





    const UpdateBook = async (e: any) => {
        e.preventDefault()

        try {
            const res = await fetch(`http://localhost:3000/api/Books/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    BookTitle,
                    BookAuthor,
                    BookIntro,
                    BookDesc
                }),
            })

            enqueueSnackbar("Book Updated", { variant: "success" })
            router.push("/")

        } catch (error) {
            enqueueSnackbar("Something Went Wrong", { variant: "error" })
        }

    }

    return (
        <>
            <SnackbarProvider />
            {/* <BackButton /> */}
            <div className={styles.AddNewBook}>



                <div className={styles.AddNewBook_Row}>
                    <h6>Update Book Now</h6>

                    <form onSubmit={UpdateBook}>

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

                        <button type='submit' className={styles.Btn}>Update Book  Now</button>




                    </form>
                </div>

            </div>
        </>
    )
}

export default page