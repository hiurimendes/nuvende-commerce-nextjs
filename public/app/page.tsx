import ProductDetails from "@/components/product/product-details";
import ProductImage from "@/components/product/product-image";

export default function Home() {
  return (
    <div className="flex gap-16">
      <ProductImage />
      <ProductDetails />
    </div>
  );
}
