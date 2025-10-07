import ProductDetails from "@/components/product/product-details";
import ProductImage from "@/components/product/product-image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-16">
      <ProductImage />
      <ProductDetails />
    </div>
  );
}
