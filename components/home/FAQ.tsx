import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Mediboard?",
      answer:
        "Mediboard is a comprehensive healthcare management platform designed to streamline patient care, record-keeping, and clinic operations for medical professionals.",
    },
    {
      question: "How secure is patient data on Mediboard?",
      answer:
        "Mediboard employs state-of-the-art encryption and security measures to ensure patient data confidentiality. We comply with HIPAA regulations and industry-standard data protection protocols.",
    },
    {
      question: "Can Mediboard integrate with existing electronic health record (EHR) systems?",
      answer:
        "Yes, Mediboard is designed to integrate seamlessly with many popular EHR systems. Our team can assist with custom integrations to ensure smooth data transfer and compatibility with your current setup.",
    },
    {
      question: "Is training provided for new users?",
      answer:
        "We offer comprehensive training resources including video tutorials, documentation, and live webinars. Additionally, our support team is available to assist with onboarding and answer any questions.",
    },
    {
      question: "What kind of support does Mediboard offer?",
      answer:
        "Mediboard provides 24/7 customer support via email and chat. For premium plans, we also offer dedicated phone support and personalized assistance to ensure you get the most out of our platform.",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ
