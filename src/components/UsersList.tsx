import { useUsers } from "@/app/hooks/useUsers";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Switch } from "./ui/switch";
import { Skeleton } from "./ui/skeleton";
import { useUpdateUser } from "@/app/hooks/useUpdateUser";
import { useMutationState } from "@tanstack/react-query";
import { CREATE_USER_MUTATION_KEY } from "@/app/hooks/useCreateUser";
import { IUser } from "@/app/types/IUser";
import { cn } from "@/app/lib/utils";

export function UsersList() {
  const {users, isLoading} = useUsers()
  const {updateUser} = useUpdateUser()


  async function handleBlockedChange(id: string, blocked: boolean){
    await updateUser({id, blocked})
  }

  return (
    <div className="space-y-4">
      {isLoading && (
        <>
          <Skeleton className="h-[74px]"/>
          <Skeleton className="h-[74px]"/>
          <Skeleton className="h-[74px]"/>
        </>
      )}
      {users.map((user) => (
        <div
          className={cn(
            'border p-4 rounded-md flex items-center justify-between',
            user.status === 'pending' && 'opacity-80',
            user.status === 'error' && 'border-destructive bg-destructive/10'
          )}
          key={user.id}
        >
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={`https://github.com/${user.username}.png`} />
              <AvatarFallback>
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div>
              <strong className="text-lg block leading-4">{user.name}</strong>
              <small className="text-muted-foreground">@{user.username}</small>
            </div>
          </div>
          <Switch
            checked={user.blocked}
            onCheckedChange={(blocked) => handleBlockedChange(user.id, blocked)}
            disabled={user.status === "pending" || user.status === "error"}
          />
        </div>
      ))}
    </div>
  );
}
