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
    <div className="flex h-full w-full flex-col gap-6 md:flex-row md:gap-2">
      <div className="flex-1 flex-col gap-4">
        <div>
          <a className="flex items-center gap-2 hover:underline" href="/">
            <ArrowLeft className="size-4" />
            <span className="font-thin text-sm md:text-base">
              Voltar á loja
            </span>
          </a>
        </div>
        <div className="mt-6 mb-6 flex flex-col md:mt-8 md:mb-8">
          <h2 className="text-lg text-muted-foreground md:text-xl">
            Seu pedido
          </h2>
          <h3 className="font-semibold text-3xl md:text-4xl">R$ 92,20</h3>
        </div>
        <div className="mr-0 flex items-center justify-between gap-2 md:mr-20">
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <Image
              alt="Boné Nuvende"
              className="rounded-md"
              height={60}
              src="/cap/cap-01.png"
              width={60}
            />
            <div className="flex flex-col">
              <span className="text-sm md:text-base">Boné Nuvende</span>
              <span className="text-muted-foreground text-xs md:text-sm">
                Qtd <span className="font-bold text-black">1</span>
              </span>
            </div>
          </div>
          <span className="font-semibold text-sm md:text-base">R$ 79,90</span>
        </div>

        <div className="mt-6 mr-0 ml-0 flex items-center justify-between md:mt-10 md:mr-20 md:ml-20">
          <p className="text-sm md:text-base">Subtotal</p>{" "}
          <span className="font-semibold text-sm md:text-base">R$ 79,90</span>
        </div>

        <div className="mt-3 mr-0 ml-0 flex items-center justify-between border-t pt-3 md:mt-4 md:mr-20 md:ml-20 md:pt-4">
          <div className="flex justify-between">
            <div className="leading-4">
              <p className="text-muted-foreground text-sm md:text-base">
                Frete
              </p>
              <span className="text-muted-foreground text-xs">
                Sedex (5 á 7 dias úteis)
              </span>
            </div>
          </div>
          <span className="font-semibold text-muted-foreground text-sm md:text-base">
            R$ 12,30
          </span>
        </div>

        <div className="mt-3 mr-0 ml-0 flex items-center justify-between border-t pt-3 md:mt-4 md:mr-20 md:ml-20 md:pt-4">
          <p className="text-sm md:text-base">Total</p>
          <span className="font-semibold text-sm md:text-base">R$ 92,20</span>
        </div>
      </div>

      <CheckoutForm defaultName={session.user.name || ""} />
    </div>
  );
}
