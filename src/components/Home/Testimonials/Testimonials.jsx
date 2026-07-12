import {
    ArrowLeft,
    ArrowRight,
    Quote,
    Star,
    Users,
} from "lucide-react";

import { useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        location: "London, United Kingdom",
        initials: "SJ",
        rating: 5,
        tour: "Maldives Honeymoon Package",
        review:
            "SkyVoyage made our honeymoon absolutely unforgettable. Everything was perfectly organized, from the hotel to airport transfers. The entire experience was smooth and stress-free.",
    },
    {
        id: 2,
        name: "Daniel Wilson",
        location: "Toronto, Canada",
        initials: "DW",
        rating: 5,
        tour: "Dubai Luxury Tour",
        review:
            "An amazing travel experience from beginning to end. The team was professional, responsive and always ready to help. I would definitely book my next international trip with SkyVoyage.",
    },
    {
        id: 3,
        name: "Emma Thompson",
        location: "Sydney, Australia",
        initials: "ET",
        rating: 5,
        tour: "Switzerland Adventure",
        review:
            "The itinerary was beautifully planned and every destination exceeded our expectations. We enjoyed every moment of the journey and created memories that will last forever.",
    },
    {
        id: 4,
        name: "Michael Brown",
        location: "New York, USA",
        initials: "MB",
        rating: 5,
        tour: "Thailand Family Tour",
        review:
            "Our family trip was incredibly well organized. The hotels, transportation and activities were excellent. SkyVoyage made traveling with the whole family simple and enjoyable.",
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((current) =>
            current === testimonials.length - 1
                ? 0
                : current + 1
        );
    };

    const previousSlide = () => {
        setActiveIndex((current) =>
            current === 0
                ? testimonials.length - 1
                : current - 1
        );
    };

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section
            className="
                relative
                overflow-hidden
                bg-slate-950
                py-16
                sm:py-20
                lg:py-24
            "
        >
            {/* Background Decoration */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-0
                    h-96
                    w-96
                    rounded-full
                    bg-blue-600/20
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    bottom-0
                    h-96
                    w-96
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                "
            />

            <div
                className="
                    container
                    relative
                    z-10
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >
                <div
                    className="
                        grid
                        items-center
                        gap-12
                        lg:grid-cols-[0.8fr_1.2fr]
                        lg:gap-16
                    "
                >
                    {/* LEFT CONTENT */}
                    <div>
                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-2
                                text-sm
                                font-bold
                                text-blue-300
                                backdrop-blur
                            "
                        >
                            <Users size={17} />

                            Happy Travelers
                        </div>

                        <h2
                            className="
                                mt-6
                                text-3xl
                                font-extrabold
                                tracking-tight
                                text-white
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            What Our Travelers
                            <span className="block text-blue-400">
                                Say About Us
                            </span>
                        </h2>

                        <p
                            className="
                                mt-5
                                max-w-xl
                                text-base
                                leading-8
                                text-slate-400
                                sm:text-lg
                            "
                        >
                            Real stories from travelers who explored
                            unforgettable destinations with SkyVoyage.
                        </p>

                        {/* Stats */}
                        <div
                            className="
                                mt-9
                                grid
                                max-w-lg
                                grid-cols-3
                                gap-3
                            "
                        >
                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                    backdrop-blur
                                "
                            >
                                <p className="text-2xl font-black text-white">
                                    10K+
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                    Travelers
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                    backdrop-blur
                                "
                            >
                                <p className="text-2xl font-black text-white">
                                    4.9
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                    Rating
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                    backdrop-blur
                                "
                            >
                                <p className="text-2xl font-black text-white">
                                    98%
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                    Satisfaction
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* TESTIMONIAL CARD */}
                    <div>
                        <article
                            className="
                                relative
                                rounded-[2rem]
                                border
                                border-white/10
                                bg-white
                                p-6
                                shadow-2xl
                                sm:p-8
                                lg:p-10
                            "
                        >
                            {/* Quote Icon */}
                            <div
                                className="
                                    absolute
                                    -top-6
                                    right-8
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-blue-600
                                    text-white
                                    shadow-lg
                                    shadow-blue-600/30
                                "
                            >
                                <Quote size={27} />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map(
                                    (_, index) => (
                                        <Star
                                            key={index}
                                            size={20}
                                            className="
                                                fill-amber-400
                                                text-amber-400
                                            "
                                        />
                                    )
                                )}
                            </div>

                            {/* Review */}
                            <blockquote
                                className="
                                    mt-6
                                    text-lg
                                    font-medium
                                    leading-8
                                    text-slate-700
                                    sm:text-xl
                                    sm:leading-9
                                "
                            >
                                “{activeTestimonial.review}”
                            </blockquote>

                            {/* Tour */}
                            <div
                                className="
                                    mt-6
                                    inline-flex
                                    rounded-full
                                    bg-blue-50
                                    px-4
                                    py-2
                                    text-sm
                                    font-bold
                                    text-blue-600
                                "
                            >
                                {activeTestimonial.tour}
                            </div>

                            {/* User + Controls */}
                            <div
                                className="
                                    mt-8
                                    flex
                                    flex-col
                                    gap-5
                                    border-t
                                    border-slate-100
                                    pt-6
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                "
                            >
                                {/* User */}
                                <div className="flex items-center gap-4">
                                    <div
                                        className="
                                            flex
                                            h-14
                                            w-14
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-gradient-to-br
                                            from-blue-600
                                            to-cyan-500
                                            font-bold
                                            text-white
                                            shadow-lg
                                        "
                                    >
                                        {activeTestimonial.initials}
                                    </div>

                                    <div>
                                        <h4
                                            className="
                                                font-bold
                                                text-slate-900
                                            "
                                        >
                                            {activeTestimonial.name}
                                        </h4>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                text-slate-500
                                            "
                                        >
                                            {activeTestimonial.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={previousSlide}
                                        aria-label="Previous testimonial"
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-slate-200
                                            text-slate-700
                                            transition-all
                                            duration-300
                                            hover:border-blue-600
                                            hover:bg-blue-600
                                            hover:text-white
                                        "
                                    >
                                        <ArrowLeft size={19} />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={nextSlide}
                                        aria-label="Next testimonial"
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-blue-600
                                            text-white
                                            transition-all
                                            duration-300
                                            hover:bg-blue-700
                                            hover:shadow-lg
                                        "
                                    >
                                        <ArrowRight size={19} />
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* Slider Dots */}
                        <div
                            className="
                                mt-6
                                flex
                                items-center
                                justify-center
                                gap-2
                            "
                        >
                            {testimonials.map((testimonial, index) => (
                                <button
                                    key={testimonial.id}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Show testimonial ${index + 1}`}
                                    className={`
                                        h-2.5
                                        rounded-full
                                        transition-all
                                        duration-300
                                        ${
                                            activeIndex === index
                                                ? "w-8 bg-blue-500"
                                                : "w-2.5 bg-white/30 hover:bg-white/60"
                                        }
                                    `}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;