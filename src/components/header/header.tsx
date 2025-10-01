import { ShoppingCart, User } from "lucide-react";
import { auth, signOut } from "@/auth";
import { NuvendeLogo } from "@/components/icons/app-logo";
import SignIn from "../auth/sign-in";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex w-full flex-col items-center gap-4 py-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-baseline gap-12">
          <div className="flex items-baseline">
            <NuvendeLogo isLink props={{ className: "h-5" }} />
            <h2 className="font-semibold text-emerald-900">.shop</h2>
          </div>

          <div className="flex gap-6">
            <h2 className="group cursor-pointer font-sans text-muted-foreground text-sm hover:text-emerald-900 hover:underline">
              hot <span className="text-rose-500">🔥</span>
            </h2>

            <h2 className="cursor-pointer font-sans text-muted-foreground text-sm hover:text-emerald-900 hover:underline">
              coleções
            </h2>

            <h2 className="cursor-pointer font-sans text-muted-foreground text-sm hover:text-emerald-900 hover:underline">
              homens
            </h2>

            <h2 className="cursor-pointer font-sans text-muted-foreground text-sm hover:text-emerald-900 hover:underline">
              mulheres
            </h2>
          </div>
        </div>

        {session?.user ? (
          <div className="flex items-center gap-2">
            <div>
              <Button className="cursor-pointer rounded-full" variant="ghost">
                <ShoppingCart className="size-4" />
              </Button>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
                className="inline"
              >
                <Button className="cursor-pointer rounded-full" variant="ghost">
                  <User className="size-4" />
                </Button>
              </form>
            </div>

            {session.user.image && (
              <Avatar>
                <AvatarImage
                  alt={session.user.name || "Avatar"}
                  src={session.user.image}
                />

                <AvatarFallback className="text-xs">
                  {session.user.name?.charAt(0).toUpperCase() || "?"}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ) : (
          <SignIn />
        )}
      </div>

      <Separator />
    </header>
  );
}
