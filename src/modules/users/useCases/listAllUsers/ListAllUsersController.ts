import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers
    
    try{
      console.log(user_id);
      
      const user = this.listAllUsersUseCase.execute({user_id: String(user_id)})
      console.log(user)
      return response.status(200).json(user)
    }
    catch (e) {
      return response.status(400).json({ error: e })
    }
  }
}

export { ListAllUsersController };
