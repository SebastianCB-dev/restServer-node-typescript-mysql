import { Router } from 'express';

import { getUsers,
         getUser,
         postUser,
         putUser,
         deleteUser } from '../controller/user.controller';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', postUser);

userRouter.put('/:id', putUser);

userRouter.delete('/:id', deleteUser);

export default userRouter;