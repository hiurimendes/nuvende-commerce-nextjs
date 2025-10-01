"use client";

import { LucideShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";

export function ProductBuyButton() {
  const { data: session } = useSession();
  const router = useRouter();

  function handleBuyProduct() {
    if (session) {
      router.push("/checkout");
    } else {
      router.push("/login");
    }
  }

  return (
    <Button
      className="w-full cursor-pointer bg-emerald-900 py-6 hover:bg-emerald-800"
      onClick={handleBuyProduct}
    >
      <LucideShoppingBag />
      <span className="font-medium text-lg">Comprar</span>
    </Button>
  );
}
