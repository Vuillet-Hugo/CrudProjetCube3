import mongoose from "mongoose"
import { ITodo } from "~/types"

const schema = new mongoose.Schema<ITodo>({
    nom: {
        type: String,
        required: [true, 'Ce Pokemon ne convient pas'],
        trim: true,
        maxlength: [20, 'Aucun pokémon ne possède un nom aussi long !']
    },
    type: {
        type: String,
        required: true,
    },
    niveau: {
        type: Number,
        required: true,
    },

}, { timestamps: true })


export default mongoose.model<ITodo>('Pokemon', schema)