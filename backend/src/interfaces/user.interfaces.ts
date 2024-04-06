export interface User {
    email: string
    password: string
  }

export  interface AuthenticatedRequest extends Request {
    user?: User
  }