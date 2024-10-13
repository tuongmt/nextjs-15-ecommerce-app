import { useAddItemToCart } from "@/hooks/cart";
import { cn } from "@/lib/utils";
import { products } from "@wix/stores";
import { ShoppingCartIcon } from "lucide-react";
import LoadingButton from "./LoadingButton";
import { ButtonProps } from "./ui/button";

interface AddToCartButtonProps extends ButtonProps {
  product: products.Product;
  selectedOptions: Record<string, string>;
  quantity: number;
}

export default function AddToCartButton({
  product,
  selectedOptions,
  quantity,
  className,
  ...props
}: AddToCartButtonProps) {
  const mutation = useAddItemToCart();

  return (
    <LoadingButton
      loading={mutation.isPending}
      onClick={() => mutation.mutate({ product, selectedOptions, quantity })}
      {...props}
      className={cn("flex gap-3", className)}
    >
      <ShoppingCartIcon />
      Thêm vào giỏ hàng
    </LoadingButton>
  );
}
