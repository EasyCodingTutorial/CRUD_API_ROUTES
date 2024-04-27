import styles from "./page.module.css";

// For Icons
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";


const GetAllData = async () => {


  try {

    const res = await fetch("http://localhost:3000/api/Books", {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Something went wrong")
    }

    const data = await res.json()
    return data

  } catch (error) {
    console.log(error)
    throw Error
  }
}

export default async function Home() {

  const { BooksData } = await GetAllData()

  return (
    <>


      <div className={styles.HomeMain}>

        {BooksData.map((I: any) => (
          <div className={styles.HomeBox}>
            <h6>{I.BookTitle}</h6>

            <p>{I.BookIntro}</p>



            {/* For Icons */}
            <div className={styles.HomeBox_Icons}>
              <Link href={`/Update/${I._id}`}>
                <FaEdit className={styles.HomeBox_Icon} />
              </Link>

              <Link href={`/Delete/${I._id}`}>
                <MdDelete className={styles.HomeBox_Icon} />
              </Link>
            </div>





          </div>
        ))
        }

      </div>



    </>
  );
}
