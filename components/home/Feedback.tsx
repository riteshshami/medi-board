import FeedbackForm from "../forms/feedback-form";

const Feedback = () => {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Feedback Form</h2>
                <div className="flex flex-col items-center justify-center">
                    <FeedbackForm />
                </div>
            </div>
        </section>
    )
}

export default Feedback;
