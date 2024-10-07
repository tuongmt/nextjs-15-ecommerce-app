import banner from "@/assets/banner.jpg";
import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { delay } from "@/lib/utils";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-5 py-10 space-y-10">
      {/* Banner */}
      <div className="flex items-center bg-secondary md:h-96">
        <div className="space-y-7 p-10 text-center md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold">
            Lấp đầy khoảng trống trong tim bạn
          </h1>
          <p>
            Một ngày khó khăn? Thẻ tín dụng đã đạt giới hạn? Mua vài món đồ đắt
            tiền và trở nên vui vẻ trở lại!
          </p>
          {/* Link like a button */}
          <Button asChild>
            <Link href="/shop">
              Mua sắm ngay <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>

        <div className="relative hidden md:block w-1/2 h-full">
          <Image
            src={banner}
            alt="ThuDat Shop banner"
            className="h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
        </div>
      </div>
      {/* Use suspense to separate a component of the whole block (It only works alone) */}
      <Suspense fallback={<LoadingSkeleton />}>
        <FeaturedProducts />
      </Suspense>
    </main>
  );
}

async function FeaturedProducts() {
  await delay(1000);

  const wixClient = getWixServerClient();

  const collection = await getCollectionBySlug(wixClient,"sản-phẩm-nổi-bật");

  if (!collection?._id) {
    return null;
  }

  const featuredProducts = await queryProducts(wixClient,{
    collectionIds: collection._id,
  });

  if (!featuredProducts.items.length) {
    return null;
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Sản phẩm nổi bật</h2>
      <div className="flex gap-5 flex-col grid-cols-2 sm:grid md:grid-cols-4">
        {featuredProducts.items.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="flex gap-5 flex-col grid-cols-2 sm:grid md:grid-cols-4 pt-12">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-[27rem] w-full" />
      ))}
    </div>
  );
}
