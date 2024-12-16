import { ThemeSwitcher } from "./ThemeSwitcher";


export function Header() {
  return(
    <header className="flex item-center justify-between">
      <div>
        <h1 className="font-bold text-3xl -tracking-wider">TheUsers</h1>
        <small className="text-muted-foregorund">Gerencie os seus usuários.</small>
      </div>

      <ThemeSwitcher />
    </header>
  )
}
