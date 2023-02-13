import { CommentInterface } from "src/app/shared/modules/comments/types/comment.interface"
import { BackendErrorInterface } from "src/app/shared/types/backendError.interface"

export interface CommentsStateInterface {
  isSubmitting: boolean,
  isLoading: boolean
  data: CommentInterface[] | null
  error: string | null
  validationErrors: BackendErrorInterface | null
}
