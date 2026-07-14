import { useState } from "react";

import {
    ArrowRight,
    Clock3,
    GraduationCap,
} from "lucide-react";

import {
    studentVisaData,
} from "../../../data/visa/studentvisadata";


const TopStudentVisaCountries = ({
    onSelectCountry,
}) => {

    const [showAll, setShowAll] = useState(false);

    const visibleCountries = showAll
        ? studentVisaData
        : studentVisaData.slice(0, 4);


    const handleApply = (visa) => {

        onSelectCountry?.(visa);

        window.scrollTo({
            top: 500,
            behavior: "smooth",
        });

    };


    return (

        <section
            className="
                bg-white
                py-16
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-4

                    sm:px-6
                    lg:px-8
                "
            >

                {/* Header */}
                <div
                    className="
                        mb-10
                        flex
                        flex-col
                        gap-4

                        sm:flex-row
                        sm:items-end
                        sm:justify-between
                    "
                >

                    <div>

                        <p
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-wider
                                text-blue-600
                            "
                        >
                            Study Abroad
                        </p>

                        <h2
                            className="
                                mt-2
                                text-3xl
                                font-extrabold
                                text-slate-900

                                md:text-4xl
                            "
                        >
                            Top Student Visa Countries
                        </h2>

                        <p
                            className="
                                mt-3
                                max-w-2xl
                                text-sm
                                leading-6
                                text-slate-500
                            "
                        >
                            Explore popular study destinations
                            and find the right student visa for
                            your education journey.
                        </p>

                    </div>

                </div>


                {/* Country Cards */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6

                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >

                    {visibleCountries.map((visa) => (

                        <article
                            key={visa.id}
                            className="
                                group
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                shadow-sm
                                transition-all
                                duration-300

                                hover:-translate-y-2
                                hover:border-blue-200
                                hover:shadow-xl
                            "
                        >

                            {/* =====================
                                COUNTRY IMAGE
                            ====================== */}
                            <div
                                className="
                                    relative
                                    h-48
                                    overflow-hidden
                                "
                            >

                                <img
                                    src={visa.countryImage}
                                    alt={visa.country}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-500

                                        group-hover:scale-110
                                    "
                                />


                                {/* Image Overlay */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-slate-950/70
                                        via-slate-900/10
                                        to-transparent
                                    "
                                />


                                {/* =====================
                                    FLAG IMAGE
                                ====================== */}
                                <div
                                    className="
                                        absolute
                                        left-4
                                        top-4
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        overflow-hidden
                                        rounded-full
                                        border-4
                                        border-white
                                        bg-white
                                        shadow-lg
                                    "
                                >

                                    <img
                                        src={visa.flagImage}
                                        alt={`${visa.country} flag`}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                        "
                                    />

                                </div>


                                {/* Country Name */}
                                <div
                                    className="
                                        absolute
                                        bottom-4
                                        left-4
                                        right-4
                                    "
                                >

                                    <h3
                                        className="
                                            text-xl
                                            font-extrabold
                                            text-white
                                        "
                                    >
                                        {visa.country}
                                    </h3>

                                </div>

                            </div>


                            {/* Card Content */}
                            <div
                                className="
                                    relative
                                    p-5
                                "
                            >

                                {/* =====================
                                    PASSPORT IMAGE
                                ====================== */}
                                <div
                                    className="
                                        absolute
                                        -top-12
                                        right-4
                                        h-24
                                        w-16
                                        overflow-hidden
                                        rounded-md
                                        border-2
                                        border-white
                                        bg-white
                                        shadow-lg
                                        transition-transform
                                        duration-300

                                        group-hover:-translate-y-1
                                        group-hover:rotate-2
                                    "
                                >

                                    <img
                                        src={visa.passportImage}
                                        alt={`${visa.country} passport`}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                        "
                                    />

                                </div>


                                <div className="pr-16">

                                    <h4
                                        className="
                                            text-base
                                            font-bold
                                            text-slate-900
                                        "
                                    >
                                        {visa.visaTitle}
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            font-bold
                                            text-blue-600
                                        "
                                    >
                                        From ${visa.fee}
                                    </p>

                                </div>


                                {/* Information */}
                                <div
                                    className="
                                        mt-6
                                        space-y-3
                                        border-t
                                        border-slate-100
                                        pt-4
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-slate-500
                                        "
                                    >

                                        <Clock3
                                            size={17}
                                            className="text-blue-600"
                                        />

                                        <span>
                                            {visa.processingTime}
                                        </span>

                                    </div>


                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-slate-500
                                        "
                                    >

                                        <GraduationCap
                                            size={17}
                                            className="text-blue-600"
                                        />

                                        <span className="line-clamp-1">
                                            {visa.validity}
                                        </span>

                                    </div>

                                </div>


                                {/* Button */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleApply(visa)
                                    }
                                    className="
                                        group/button
                                        mt-5
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-blue-50
                                        px-4
                                        py-3
                                        text-sm
                                        font-bold
                                        text-blue-600
                                        transition-all
                                        duration-300

                                        hover:bg-blue-600
                                        hover:text-white
                                    "
                                >

                                    View Visa Details

                                    <ArrowRight
                                        size={17}
                                        className="
                                            transition-transform
                                            duration-300

                                            group-hover/button:translate-x-1
                                        "
                                    />

                                </button>

                            </div>

                        </article>

                    ))}

                </div>

            </div>
            
            {/* View All Countries Button */}
            <div className="mt-10 flex justify-center">
                <button
                    type="button"
                    onClick={() =>
                        setShowAll((previous) => !previous)
                    }
                    className="
                        group
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-blue-600
                        bg-white
                        px-7
                        py-3.5
                        text-14
                        font-bold
                        text-blue-600
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-blue-600
                        hover:text-white
                        hover:shadow-lg
                    "
                >
                    {showAll
                        ? "Show Less"
                        : "View All Countries"
                    }

                    <ArrowRight
                        size={35}
                        className={`
                            transition-transform
                            duration-300
                            ${
                                showAll
                                    ? "rotate-180"
                                    : "group-hover:translate-x-1"
                            }
                        `}
                    />
                </button>
            </div>                

        </section>

    );

};


export default TopStudentVisaCountries;