import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto space-y-10 space-x-5 py-10">
      <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
        <div className="basis-2/5">
          <Skeleton className="w-full aspect-square" />
        </div>
        <div className="basis-3/5 space-y-5">
          <Skeleton className="w-96 h-16" />
          <Skeleton className="w-full h-64" />
          <Skeleton className="w-96 h-12" />
          <Skeleton className="w-full h-12" />
        </div>
      </div>
    </main>
  );
}
