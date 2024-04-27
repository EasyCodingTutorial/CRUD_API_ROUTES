import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema(
    {
        BookTitle: {
            type: String,
            required: true
        },
        BookAuthor: {
            type: String,
            required: true,
        },
        BookIntro: {
            type: String,
            required: true
        },
        BookDesc: {
            type: String,
            required: true,
        }
    }, {
    timestamps: true
}
)


const BookModel = mongoose.models.BookModel || mongoose.model("BookModel", BookSchema)

export default BookModel

