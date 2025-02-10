import { Button } from "@/components/ui/button"
import { Stethoscope } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <Stethoscope className="w-16 h-16 mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the Future of Healthcare Management
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Streamline your practice, enhance patient care, and reclaim your time with Mediboard's innovative platform.
        </p>
        <Button
          size="lg"
          className="bg-background text-primary hover:bg-primary-foreground hover:text-primary transition-all duration-300 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl"
        >
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}
