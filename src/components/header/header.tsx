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
    <header className="flex w-full flex-col items-center gap-4 py-4 md:py-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-baseline gap-6 md:gap-12">
          <div className="flex items-baseline">
            <NuvendeLogo isLink props={{ className: "h-4 md:h-5" }} />
            <h2 className="font-semibold text-emerald-900 text-sm md:text-base">
              .shop
            </h2>
          </div>

          <div className="hidden gap-6 md:flex">
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
          <div className="flex items-center gap-1 md:gap-2">
            <div>
              <Button
                className="cursor-pointer rounded-full"
                size="sm"
                variant="ghost"
              >
                <ShoppingCart className="size-4" />
              </Button>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
                className="inline"
              >
                <Button
                  className="cursor-pointer rounded-full"
                  size="sm"
                  variant="ghost"
                >
                  <User className="size-4" />
                </Button>
              </form>
            </div>

            {session.user.image && (
              <Avatar className="size-8 md:size-10">
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
