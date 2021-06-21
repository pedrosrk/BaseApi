import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import {User} from '../entity/user'

export const getHello = async (req: Request, res: Response): Promise<Response> => {
  return res.send("This is my first app!!!")
}

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const listUsers = await getRepository(User).find()
  return res.json(listUsers)
}














































/*
export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users)
}
 
export const createUser = async (req: Request, res: Response): Promise<Response> => {
    //console.log(req.params)
    const newUser = getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser)
    return res.json(results)
}
 
export const getUser = async ( req: Request, res: Response ): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return res.json(results);
  };
 
export const updateUser = async ( req: Request, res: Response ): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);
  if (user){
      getRepository(User).merge(user, req.body);
      const results = await getRepository(User).save(user);
      return res.json(results);
  }
  return res.status(404).json({msg: 'Not User found'})
};

export const deleteUser = async ( req: Request, res: Response ): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);
  if (user){
      const results = await getRepository(User).delete(req.params.id);
      return res.json(results);
  }
  return res.status(404).json({msg: 'Not User found'})
};
*/
