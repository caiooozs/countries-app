import { Skeleton } from "@/components/ui/skeleton";

export function CountryCardSkeleton() {
  return (
    <div className="w-[350px] rounded-xl border p-4">
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
  );
}
