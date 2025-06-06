
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/talkzi/Logo'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
      <Logo className="h-12 w-auto mb-8" />
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-3">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-sm">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild size="lg">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  )
}
