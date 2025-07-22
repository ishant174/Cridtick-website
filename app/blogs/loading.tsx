import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header Skeleton */}
      <div className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="w-10 h-10 rounded-xl" />
              <Skeleton className="w-24 h-8" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Skeleton className="w-16 h-6" />
              <Skeleton className="w-16 h-6" />
              <Skeleton className="w-10 h-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="w-48 h-12 mx-auto mb-6 rounded-full" />
            <Skeleton className="w-96 h-16 mx-auto mb-4" />
            <Skeleton className="w-80 h-16 mx-auto mb-8" />
            <Skeleton className="w-full max-w-2xl h-24 mx-auto mb-12" />

            {/* Search and Filters Skeleton */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <Skeleton className="flex-1 h-12" />
                <div className="flex gap-2">
                  <Skeleton className="w-32 h-12" />
                  <Skeleton className="w-32 h-12" />
                </div>
              </div>

              {/* Stats Skeleton */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="text-center">
                    <Skeleton className="w-16 h-10 mx-auto mb-2" />
                    <Skeleton className="w-20 h-4 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="w-32 h-8 mx-auto mb-4" />
            <Skeleton className="w-64 h-12 mx-auto mb-6" />
            <Skeleton className="w-96 h-6 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <Skeleton className="w-full h-64" />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Skeleton className="w-24 h-6" />
                    <Skeleton className="w-20 h-4" />
                    <Skeleton className="w-20 h-4" />
                  </div>
                  <Skeleton className="w-full h-8 mb-4" />
                  <Skeleton className="w-full h-20 mb-6" />
                  <div className="flex flex-wrap gap-2 mb-6">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <Skeleton key={j} className="w-16 h-6" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-10 h-10 rounded-full" />
                      <div>
                        <Skeleton className="w-24 h-4 mb-1" />
                        <Skeleton className="w-20 h-3" />
                      </div>
                    </div>
                    <Skeleton className="w-24 h-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Skeleton */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="w-48 h-12 mx-auto mb-6" />
            <Skeleton className="w-64 h-6 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Skeleton className="w-20 h-5" />
                    <Skeleton className="w-16 h-4" />
                  </div>
                  <Skeleton className="w-full h-6 mb-3" />
                  <Skeleton className="w-full h-16 mb-4" />
                  <div className="flex flex-wrap gap-1 mb-4">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <Skeleton key={j} className="w-12 h-5" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-16 h-4" />
                      <Skeleton className="w-12 h-4" />
                    </div>
                    <Skeleton className="w-16 h-8" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
