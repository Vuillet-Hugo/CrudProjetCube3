
import todoModel from "~/server/models/todo.model"

export default defineEventHandler(async (event) => {
    try {
        const items = await todoModel.find().sort('-createdAt')
        return setResponse(event, { statusCode: 200, statusMessage: 'Parfait !', data: items })
    } catch (error: unknown) {
        return setResponse(event, { statusCode: 500, statusMessage: 'Humm ça ne va pas.' })
    }
})