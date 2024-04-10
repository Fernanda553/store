export interface User {
    name?: string
    email: string
    password?: string
  }

export  interface AuthenticatedRequest extends Request {
    user?: User
  }