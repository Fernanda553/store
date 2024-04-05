import { Request, Response, NextFunction } from 'express'

const forRoutes = (req: Request, _: Response, next: NextFunction) => {
  console.log(`${req.method} url:: ${req.url}`)
  next()
}

export default forRoutes
