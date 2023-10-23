import { Types } from "mongoose"

export interface ISetResponse {
    statusCode: number
    statusMessage: string
    data?: any,
    cause?: any
}

export interface ITodo {
    _id: Types.ObjectId
    nom: string,
    type: string,
    niveau: number,
    createdAt: Date,
    updatedAt: Date
}