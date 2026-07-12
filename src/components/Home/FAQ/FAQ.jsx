import { useState } from "react";
import { ChevronDown, CircleHelp, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
    {
        id: 1,
        question: "How can I book a tour package?",
        answer:
            "You can browse our available tour packages, select your preferred package, review the details and complete your booking request through our website.",
    },
    {
        id: 2,
        question: "Can I customize my travel package?",
        answer:
            "Yes. SkyVoyage offers customizable travel plans based on your destination, budget, travel dates and personal preferences.",
    },
    {
        id: 3,
        question: "Do you provide visa assistance?",
        answer:
            "Yes. We provide assistance for tourist, student and work visa applications. Requirements and processing times depend on the destination country.",
    },
    {
        id: 4,
        question: "Can I book flights and hotels separately?",
        answer:
            "Yes. You can book flights, hotels and other travel services separately based on your individual travel requirements.",
    },
    {
        id: 5,
        question: "What payment methods do you accept?",
        answer:
            "Available payment methods may include online payments, bank transfers and other supported payment options shown during the booking process.",
    },
    {
        id: 6,
        question: "What happens if I need to cancel my booking?",
        answer:
            "Cancellation and refund conditions depend on the selected package, airline, hotel and service provider. Please review the specific cancellation policy before confirming your booking.",
    },
];

const FAQ = () => {
    const [activeId, setActiveId] = useState(1);

    const toggleFAQ = (id) => {
        setActiveId((currentId) =>
            currentId === id ? null : id
        );
    };

    return (
        <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

                    {/* LEFT CONTENT */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                            <CircleHelp size={17} />

                            Frequently Asked Questions
                        </div>

                        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                            Have Questions?
                            <span className="block text-blue-600">
                                We Have Answers.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-lg text-base leading-8 text-slate-500 sm:text-lg">
                            Find answers to some of the most common questions
                            about booking, travel packages, visas and our
                            services.
                        </p>

                        {/* Support Card */}
                        <div className="mt-9 rounded-3xl bg-slate-950 p-7 text-white shadow-xl">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                                <MessageCircle size={26} />
                            </div>

                            <h3 className="mt-6 text-xl font-bold">
                                Still have a question?
                            </h3>

                            <p className="mt-3 leading-7 text-slate-400">
                                Our travel support team is ready to help you
                                plan your next journey.
                            </p>

                            <Link
                                to="/contact"
                                className="
                                    mt-6
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    px-6
                                    py-3
                                    text-sm
                                    font-bold
                                    text-slate-950
                                    transition-all
                                    duration-300
                                    hover:bg-blue-600
                                    hover:text-white
                                "
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* FAQ ACCORDION */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = activeId === faq.id;

                            return (
                                <div
                                    key={faq.id}
                                    className={`
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        bg-white
                                        transition-all
                                        duration-300
                                        ${
                                            isOpen
                                                ? "border-blue-200 shadow-lg shadow-blue-900/5"
                                                : "border-slate-200 shadow-sm"
                                        }
                                    `}
                                >
                                    {/* Question */}
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(faq.id)}
                                        aria-expanded={isOpen}
                                        className="
                                            flex
                                            w-full
                                            items-center
                                            justify-between
                                            gap-5
                                            p-5
                                            text-left
                                            sm:p-6
                                        "
                                    >
                                        <div className="flex items-center gap-4">

                                            {/* Number */}
                                            <span
                                                className={`
                                                    flex
                                                    h-10
                                                    w-10
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    text-sm
                                                    font-bold
                                                    transition-colors
                                                    duration-300
                                                    ${
                                                        isOpen
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-slate-100 text-slate-500"
                                                    }
                                                `}
                                            >
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <h3
                                                className={`
                                                    font-bold
                                                    transition-colors
                                                    sm:text-lg
                                                    ${
                                                        isOpen
                                                            ? "text-blue-600"
                                                            : "text-slate-900"
                                                    }
                                                `}
                                            >
                                                {faq.question}
                                            </h3>
                                        </div>

                                        {/* Arrow */}
                                        <span
                                            className={`
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                transition-all
                                                duration-300
                                                ${
                                                    isOpen
                                                        ? "rotate-180 bg-blue-50 text-blue-600"
                                                        : "bg-slate-100 text-slate-500"
                                                }
                                            `}
                                        >
                                            <ChevronDown size={19} />
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`
                                            grid
                                            transition-all
                                            duration-300
                                            ease-in-out
                                            ${
                                                isOpen
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                            }
                                        `}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="border-t border-slate-100 px-5 py-5 leading-7 text-slate-500 sm:px-20 sm:py-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;