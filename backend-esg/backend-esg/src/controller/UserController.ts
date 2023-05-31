import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export const getUsers = async (request: Request, response: Response) => {
    const users = await AppDataSource.getRepository(User).find()
    return response.json(users)
}

export const saveUsers = async (request: Request, response: Response) => {
    const user = await AppDataSource.getRepository(User).save(request.body)
    return response.json(user)
}