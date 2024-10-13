import logo from "@/assets/logo.png";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCart } from "@/wix-api/cart";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartButton from "./ShoppingCartButton";

export default async function Navbar() {
  const cart = await getCart(getWixServerClient());

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto p-5 flex items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="ThuDat Shop Logo" width={40} height={40} />
          <span className="text-xl font-bold">Tạp hóa Thu Đạt </span>
        </Link>
        <ShoppingCartButton initialData={cart} />
      </div>
    </header>
  );
}
