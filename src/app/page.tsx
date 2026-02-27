import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Cleetus Client Hub
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            The modern CRM platform built specifically for coaching businesses.
            Manage clients, track progress, and grow your coaching practice.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            title="Client Management"
            description="Track all your clients, their goals, and progress in one place."
          />
          <FeatureCard
            title="Session Scheduling"
            description="Easily schedule and manage coaching sessions with calendar integration."
          />
          <FeatureCard
            title="Progress Analytics"
            description="Visual dashboards to track client progress and business growth."
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}