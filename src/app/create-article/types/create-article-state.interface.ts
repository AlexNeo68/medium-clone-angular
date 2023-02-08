import { BackendErrorInterface } from "src/app/shared/types/backendError.interface";

export interface CreateArticleStateInterface {
  isSubmitting: boolean,
  validationErrors: BackendErrorInterface | null
}
