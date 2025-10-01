import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { CheckoutForm } from "@/components/checkout/checkout-form";

export default async function CheckoutPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  return (
    <div className="flex h-full w-full gap-2">
      <div className="flex-1 flex-col gap-4">
        <div>
          <a className="flex items-center gap-2 hover:underline" href="/">
            <ArrowLeft className="size-4" />
            <span className="font-thin text-md">Voltar á loja</span>
          </a>
        </div>
        <div className="mt-8 mb-8 flex flex-col">
          <h2 className="text-muted-foreground text-xl">Seu pedido</h2>
          <h3 className="font-semibold text-4xl">R$ 92,20</h3>
        </div>
        <div className="mr-20 flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-4">
            <Image
              alt="Boné Nuvende"
              className="rounded-md"
              height={60}
              src="/cap/cap-01.png"
              width={60}
            />
            <div className="flex flex-col">
              <span>Boné Nuvende</span>
              <span className="text-muted-foreground text-sm">
                Qtd <span className="font-bold text-black">1</span>
              </span>
            </div>
          </div>
          <span className="font-semibold">R$ 79,90</span>
        </div>

        <div className="mt-10 mr-20 ml-20 flex items-center justify-between">
          <p className="">Subtotal</p>{" "}
          <span className="font-semibold">R$ 79,90</span>
        </div>

        <div className="mt-4 mr-20 ml-20 flex items-center justify-between border-t pt-4">
          <div className="flex justify-between">
            <div className="leading-4">
              <p className="text-muted-foreground">Frete</p>
              <span className="text-muted-foreground text-xs">
                Sedex (5 á 7 dias úteis)
              </span>
            </div>
          </div>
          <span className="font-semibold text-muted-foreground">R$ 12,30</span>
        </div>

        <div className="mt-4 mr-20 ml-20 flex items-center justify-between border-t pt-4">
          <p className="">Total</p>
          <span className="font-semibold">R$ 92,20</span>
        </div>
      </div>

      <CheckoutForm defaultName={session.user.name || ""} />
    </div>
  );
}
