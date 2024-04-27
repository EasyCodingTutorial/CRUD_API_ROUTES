import ConnectToDb from "@/Lib/ConnectToDb";
import BookModel from "@/Models/BookSchema";
import { NextResponse } from "next/server";


// For Updating The Book By Its ID
export async function PUT(req: any, { params }: any) {
    const { id } = params;

    const { BookTitle, BookAuthor, BookIntro, BookDesc } = await req.json();

    await ConnectToDb()

    await BookModel.findByIdAndUpdate(id, {
        BookTitle,
        BookAuthor,
        BookIntro,
        BookDesc
    })

    return NextResponse.json({ message: "Book Updated Successfully" })
}


// For Getting A Single Book By Its ID
export async function GET(req: any, { params }: any) {

    try {
        const { id } = params;
        await ConnectToDb()
        const Single_Book_Data = await BookModel.findById(id)
        return NextResponse.json({ Single_Book_Data })
    } catch (error) {
        return NextResponse.json({ message: "Something Went Wrong" })
    }

}




// For Deleteing The Book By Its ID
export async function DELETE(req: any, { params }: any) {
    try {
        const { id } = params
        await ConnectToDb()
        await BookModel.findByIdAndDelete(id)
        return NextResponse.json({ message: "Book Deleted Successfully" })
    } catch (error) {
        return NextResponse.json({ message: "Somethign Weng Wrong" })

    }
}
