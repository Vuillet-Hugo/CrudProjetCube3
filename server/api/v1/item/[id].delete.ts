import todoModel from "~/server/models/todo.model"

export default defineEventHandler(async (event) => {
    try {
        await todoModel.findByIdAndDelete(event.context.params!.id)
        return setResponse(event, { statusCode: 200, statusMessage: 'Ce pokémon a retrouvé sa liberté.' })
    } catch (error) {
        return setResponse(event, { statusCode: 500, statusMessage: 'Humm ça ne va pas.' })
    }
})