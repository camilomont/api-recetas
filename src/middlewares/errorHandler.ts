import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, _: Request, res: Response, __: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
};
