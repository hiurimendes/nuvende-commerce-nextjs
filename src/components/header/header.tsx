import { ShoppingCart } from "lucide-react";
import { NuvendeLogo } from "@/components/app-logo";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Header() {
  return (
    <header className="flex w-full flex-col items-center gap-4 py-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-baseline gap-12">
          <div className="flex items-baseline">
            <NuvendeLogo className="h-5" />
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

        <div className="flex items-center gap-4">
          <Button className="cursor-pointer rounded-full" variant="ghost">
            <ShoppingCart className="size-4" />
          </Button>

          <Avatar>
            <AvatarFallback className="text-xs">HM</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Separator />
    </header>
  );
}
