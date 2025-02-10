import { ClipboardList, Search, Clock, Shield, BellRing, BarChart3 } from "lucide-react"

export default function KeyFeatures() {
  const features = [
    {
      icon: <ClipboardList className="w-10 h-10 mb-4 text-primary" />,
      title: "Streamlined Record-Keeping",
      description: "Effortlessly manage patient and medicine records with intuitive interfaces.",
    },
    {
      icon: <Search className="w-10 h-10 mb-4 text-primary" />,
      title: "Instant Search & Access",
      description: "Locate patient details and medical histories in seconds with powerful search capabilities.",
    },
    {
      icon: <Shield className="w-10 h-10 mb-4 text-primary" />,
      title: "Secure Data Management",
      description: "Ensure patient confidentiality with robust security measures and data encryption.",
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
