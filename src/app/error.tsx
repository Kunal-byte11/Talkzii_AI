
'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
      <h1 className="text-4xl font-bold text-destructive mb-4">Oops! Something went wrong.</h1>
      <p className="text-muted-foreground mb-2">
        We encountered an unexpected issue. Please try again.
      </p>
      {error?.message && (
        <p className="text-sm text-muted-foreground/80 mb-6 max-w-md">
          <span className="font-semibold">Error details:</span> {error.message}
        </p>
      )}
      <div className="flex gap-4">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          variant="default"
          size="lg"
        >
          Try again
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}
