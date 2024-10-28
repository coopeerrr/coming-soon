import { SubscribeForm } from '@/components/subscribe-form';
import { ModeToggle } from '@/components/mode-toggle';
import { FeatureBadge } from '@/components/feature-badge';
import { Rocket, Star, Zap } from 'lucide-react';

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
      
      <div className="container px-4 py-16 mx-auto flex flex-col items-center justify-center min-h-screen text-center gap-8">
        <div className="space-y-6 max-w-3xl">
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border shadow-sm bg-primary text-primary-foreground">
              <Rocket className="mr-2 h-4 w-4" />
              Coming Soon
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Your Next-Gen SaaS Platform
          </h1>
          
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Revolutionary tools to supercharge your workflow. Be the first to know when we launch.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <FeatureBadge icon={Star} text="Lightning Fast" iconColor="text-yellow-500" />
            <FeatureBadge icon={Zap} text="AI-Powered" iconColor="text-blue-500" />
          </div>

          <div className="flex justify-center">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </div>
  );
}