import { Error } from "mongoose"
import todoModel from "~/server/models/todo.model"
import { ITodo } from "~/types"

export default defineEventHandler(async (event) => {
    try {
        const body: ITodo = await readBody(event)
        if (!body) {
            return setResponse(event, { statusCode: 400, statusMessage: 'J\'ai besoin d\'un nom de pokémon' })
        }
        await todoModel.create({ nom: body.nom, niveau: body.niveau, type: body.type })
        return setResponse(event, { statusCode: 200, statusMessage: 'Un nouveau pokémon débarque !' })
    } catch (error: unknown) {
        if (error instanceof Error.ValidationError) {
            return setResponse(event, { statusCode: 400, statusMessage: error.message })
        }
        return setResponse(event, { statusCode: 500, statusMessage: 'Humm ça ne va pas.' })
    }
})