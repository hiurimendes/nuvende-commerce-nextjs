import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignIn from "@/components/auth/sign-in";
import { NuvendeLogo } from "@/components/icons/app-logo";
import { Separator } from "@/components/ui/separator";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    return redirect("/");
  }

  return (
    <div className="flex h-full">
      <div className="hidden md:block md:w-1/2">
        <Image
          alt="CAP Banner"
          className="h-full object-cover"
          height={512}
          quality={100}
          src="/cap/cap-banner.png"
          width={3000}
        />
      </div>

      <div className="flex w-full flex-col items-start justify-end bg-emerald-600 p-6 md:w-1/2 md:p-8">
        <div className="flex-1">
          <NuvendeLogo color="white" props={{ className: "h-6 md:h-8" }} />
        </div>

        <div>
          <h1 className="font-bold text-4xl text-white md:text-5xl">Entrar</h1>
          <h2 className="text-base text-muted md:text-lg">
            acesse a sua conta para continuar com o seu pedido.
          </h2>
        </div>

        <Separator className="mt-4" />

        <div className="w-full max-w-sm pt-4">
          <SignIn className="w-full" isFullWidth />
        </div>
      </div>
    </div>
  );
}
