import { useUsers } from "@/app/hooks/useUsers";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Switch } from "./ui/switch";

export function UsersList() {
  const {users} = useUsers()

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div
          className="border p-4 rounded-md flex items-center justify-between"
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
          <Switch />
        </div>
      ))}
    </div>
  );
}
