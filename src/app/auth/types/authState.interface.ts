import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoggedIn: boolean | null;
  isLoading: boolean;
  currentUser: CurrentUserInterface | null;
  validationErrors: BackendErrorInterface | null;
}
