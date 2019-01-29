import { AuthContextProvider } from './AuthContextProvider'
import { SecurityService } from './SecurityService'

export class DefaultSecurityService implements SecurityService {

  public getSchemaDirectives () {
    return null
  }

  public applyAuthMiddleware () {
    return null
  }

  public getAuthContextProvider () {
    return DefaultAuthContextProvider
  }
}

export class DefaultAuthContextProvider implements AuthContextProvider {

  public isAuthenticated () {
    return false
  }

  public hasRole () {
    return false
  }
}
