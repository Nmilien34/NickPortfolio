import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-text-white mb-6">
          Hi, I'm Nick
        </h1>
        <p className="text-xl md:text-2xl text-normal-text mb-8">
          Full-stack developer passionate about creating exceptional digital experiences
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
