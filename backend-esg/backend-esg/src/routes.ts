import { Request, Response, Router } from "express"
import { getUsers, saveUsers } from "./controller/UserController"
import { get } from "http"

const routes = Router()

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})

routes.get('/users', getUsers)
routes.post('/users', saveUsers)

export default routes