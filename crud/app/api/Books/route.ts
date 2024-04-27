import ConnectToDb from "@/Lib/ConnectToDb";
import BookModel from "@/Models/BookSchema";
import { NextResponse } from "next/server";


// For POST Request 
export async function POST(req:any) {
    const { BookTitle, BookAuthor, BookIntro, BookDesc } = await req.json()
    await ConnectToDb()
    await BookModel.create({
        BookTitle,
        BookAuthor,
        BookIntro,
        BookDesc
    })
    return NextResponse.json({message:"book Added Successfully"})
}


// For Getting All The Books Data
export async function GET() {
    await ConnectToDb()
    const BooksData = await BookModel.find({})
    const TotalBooks = BooksData.length
    return NextResponse.json({
        TotalBooks,
        BooksData
    })
}

