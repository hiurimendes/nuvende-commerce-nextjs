import { LucideShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

export default function ProductDetails() {
  return (
    <div className="flex flex-col justify-start gap-8 py-6">
      <div>
        <span className="font-bold text-emerald-600">nuvende</span>
        <h1 className="font-bold text-4xl">Boné Nuvende</h1>
      </div>

      <p className="max-w-xs text-muted-foreground text-sm leading-relaxed">
        um boné criado para os desenvolvedores que estão prontos para integrar o
        gateway de pagamento nas suas aplicações.
      </p>

      <div className="mt-28">
        <div className="flex items-baseline gap-2">
          <h2 className="font-semibold text-2xl">R$ 79,90</h2>
          <span className="text-muted-foreground text-sm">
            ou 3x de R$ 26,63
          </span>
        </div>
        <h3 className="text-muted-foreground text-xl line-through">
          R$ 159,90
        </h3>
      </div>
      <div className="">
        <Button className="w-full cursor-pointer bg-emerald-900 py-6 hover:bg-emerald-800">
          <LucideShoppingBag />
          <span className="font-medium text-lg">Comprar</span>
        </Button>
      </div>
    </div>
  );
}
