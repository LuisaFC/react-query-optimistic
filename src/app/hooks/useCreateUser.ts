import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../services/createUser";
import { USERS_QUERY_KEY } from "./useUsers";
import { IUser } from "../types/IUser";

export const CREATE_USER_MUTATION_KEY = ['createUser']

export function useCreateUser() {
  const queryClient = useQueryClient()

  const {mutateAsync, isPending} = useMutation({
    mutationFn: createUser,
    onMutate: (variables) => {
      const tmpUserId = String(Math.random())

      queryClient.setQueryData<IUser[]>(
        USERS_QUERY_KEY,
        (old) => old?.concat({
          ...variables,
          id: tmpUserId
        })
      );

      return {tmpUserId}
    },
    onSuccess: (data, _variables, context) => {
      queryClient.setQueryData<IUser[]>(
        USERS_QUERY_KEY,
        (old) => old?.map(user => (
          user.id === context.tmpUserId? data : user
        ))
      );
    },

    onError: (_error, _variables, context) => {
      queryClient.setQueryData<IUser[]>(
        USERS_QUERY_KEY,
        (old) => old?.filter(user => (
          user.id !== context?.tmpUserId
        ))
      )
    }
  })

  return {
    createUser: mutateAsync,
    isLoading: isPending
  }
}
