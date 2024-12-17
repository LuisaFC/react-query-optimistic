import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../services/createUser";
import { USERS_QUERY_KEY } from "./useUsers";

export const CREATE_USER_MUTATION_KEY = ['createUser']

export function useCreateUser() {
  const queryClient = useQueryClient()

  const {mutateAsync, isPending} = useMutation({
    mutationKey: CREATE_USER_MUTATION_KEY,
    mutationFn: createUser,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY
      })
    }
  })

  return {
    createUser: mutateAsync,
    isLoading: isPending
  }
}
