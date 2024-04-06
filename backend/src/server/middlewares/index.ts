import { Request, Response, NextFunction } from 'express'

interface Middleware {
  (req: Request, res: Response, next: NextFunction): void;
}

const forRoutes: Middleware = (req: Request, _: Response, next: NextFunction) => {
  console.log(`${req.method} url:: ${req.url}`)
  next()
}

export default forRoutes
