import todoModel from "~/server/models/todo.model"
import { ITodo } from "~/types"

export default defineEventHandler(async (event) => {
    try {
        const body: ITodo = await readBody(event)
        await todoModel.findByIdAndUpdate<ITodo>({ _id: event.context.params!.id }, { nom: body.nom, type:body.type, nveau:body.niveau })
        return setResponse(event, { statusCode: 200, statusMessage: 'Le pokémon à évolué !' })
    } catch (error) {
        console.log(error)
        return setResponse(event, { statusCode: 500, statusMessage: 'Humm ça ne va pas. ' })
    }
})