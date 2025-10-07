import { ProductBuyButton } from "./product-buy-button";

export default function ProductDetails() {
  return (
    <div className="flex flex-col justify-start gap-6 py-4 md:gap-8 md:py-6">
      <div>
        <span className="font-bold text-emerald-600 text-sm md:text-base">
          nuvende
        </span>
        <h1 className="font-bold text-3xl md:text-4xl">Boné Nuvende</h1>
      </div>

      <p className="max-w-full text-muted-foreground text-sm leading-relaxed md:max-w-xs">
        um boné criado para os desenvolvedores que estão prontos para integrar o
        gateway de pagamento nas suas aplicações.
      </p>

      <div className="mt-6 md:mt-28">
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-2">
          <h2 className="font-semibold text-2xl md:text-2xl">R$ 79,90</h2>
          <span className="text-muted-foreground text-sm">
            ou 3x de R$ 26,63
          </span>
        </div>
        <h3 className="text-lg text-muted-foreground line-through md:text-xl">
          R$ 159,90
        </h3>
      </div>
      <div className="">
        <ProductBuyButton />
      </div>
    </div>
  );
}
