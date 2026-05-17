import { Skeleton } from "@/src/components/ui/skeleton";

export function CountryCardSkeleton() {
  const skeletonItems = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-12 pb-12">
      {skeletonItems.map((_, index) => (
        <div key={index} className="rounded-xl border p-4">
          <div className="flex justify-between">
            <div>
              <Skeleton className="h-5 w-24" />
              <Skeleton className="mt-2 h-4 w-16" />
            </div>

            <Skeleton className="h-12 w-20 rounded-md" />
          </div>

          <div className="my-4 border-t" />

          <div className="flex justify-between">
            <div>
              <Skeleton className="h-4 w-16" />
              <Skeleton className="mt-2 h-4 w-24" />
            </div>

            <div>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="mt-2 h-4 w-16" />
            </div>
          </div>

          <Skeleton className="mt-6 h-10 w-full rounded-lg" />
        </div>
      ))}
    </div>
  );
}
