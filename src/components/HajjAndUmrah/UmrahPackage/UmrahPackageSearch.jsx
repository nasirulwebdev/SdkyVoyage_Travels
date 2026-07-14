import {
    CalendarDays,
    ChevronDown,
    Clock3,
    MapPin,
    Search,
    Tag,
} from "lucide-react";

import {
    useEffect,
    useState,
} from "react";

import {
    umrahPackageSearchData,
} from "../../../data/HajjAndUmrah/UmrahPackageData";


const iconMap = {
    destination: MapPin,
    duration: Clock3,
    packageType: Tag,
    travelMonth: CalendarDays,
};


const UmrahPackageSearch = ({
    searchFilters,
    onSearch,
}) => {

    const [formData, setFormData] = useState({
        destination: "",
        duration: "",
        packageType: "",
        travelMonth: "",
        ...searchFilters,
    });


    useEffect(() => {

        setFormData((previousData) => ({
            ...previousData,
            ...searchFilters,
        }));

    }, [searchFilters]);


    const handleChange = (event) => {

        const {
            name,
            value,
        } = event.target;


        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

    };


    const handleSubmit = (event) => {

        event.preventDefault();

        onSearch?.(formData);

    };


    return (

        <section
            className="
                relative
                z-30
                bg-white
                py-6
                shadow-[0_8px_30px_rgba(15,23,42,0.08)]
            "
        >

            <div
                className="
                    mx-auto
                    max-w-[1440px]
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >

                <form
                    onSubmit={handleSubmit}
                    className="
                        grid
                        grid-cols-1
                        items-end
                        gap-4
                        md:grid-cols-2
                        xl:grid-cols-[repeat(4,minmax(0,1fr))_190px]
                    "
                >

                    {umrahPackageSearchData.fields.map((field) => {

                        const Icon = iconMap[field.name];


                        return (

                            <div
                                key={field.name}
                                className="group"
                            >

                                {/* Label */}

                                <label
                                    htmlFor={`umrah-${field.name}`}
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-semibold
                                        text-slate-700
                                    "
                                >
                                    {field.label}
                                </label>


                                {/* Select Field */}

                                <div
                                    className="
                                        relative
                                        rounded-lg
                                        transition-all
                                        duration-300
                                        group-hover:-translate-y-0.5
                                    "
                                >

                                    {/* Left Icon */}

                                    {Icon && (

                                        <Icon
                                            size={19}
                                            strokeWidth={2}
                                            className="
                                                pointer-events-none
                                                absolute
                                                left-4
                                                top-1/2
                                                z-10
                                                -translate-y-1/2
                                                text-slate-400
                                                transition-colors
                                                duration-300
                                                group-hover:text-emerald-600
                                            "
                                        />

                                    )}


                                    <select
                                        id={`umrah-${field.name}`}
                                        name={field.name}
                                        value={formData[field.name] || ""}
                                        onChange={handleChange}
                                        className="
                                            h-[52px]
                                            w-full
                                            cursor-pointer
                                            appearance-none
                                            rounded-lg
                                            border
                                            border-slate-200
                                            bg-white
                                            pl-11
                                            pr-10
                                            text-sm
                                            font-medium
                                            text-slate-700
                                            outline-none
                                            transition-all
                                            duration-300
                                            hover:border-emerald-400
                                            hover:shadow-md
                                            focus:border-emerald-500
                                            focus:ring-4
                                            focus:ring-emerald-500/10
                                        "
                                    >

                                        <option value="">
                                            All {field.label}
                                        </option>


                                        {field.options.map((option) => (

                                            <option
                                                key={option}
                                                value={option}
                                            >
                                                {option}
                                            </option>

                                        ))}

                                    </select>


                                    {/* Dropdown Icon */}

                                    <ChevronDown
                                        size={18}
                                        className="
                                            pointer-events-none
                                            absolute
                                            right-4
                                            top-1/2
                                            -translate-y-1/2
                                            text-slate-400
                                            transition-all
                                            duration-300
                                            group-hover:text-emerald-600
                                        "
                                    />

                                </div>

                            </div>

                        );

                    })}


                    {/* Search Button */}

                    <button
                        type="submit"
                        className="
                            group/search
                            flex
                            h-[52px]
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-emerald-600
                            px-6
                            text-sm
                            font-bold
                            text-white
                            shadow-lg
                            shadow-emerald-600/20
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-emerald-700
                            hover:shadow-xl
                            hover:shadow-emerald-600/30
                            active:translate-y-0
                        "
                    >

                        <Search
                            size={19}
                            strokeWidth={2.5}
                            className="
                                transition-transform
                                duration-300
                                group-hover/search:scale-110
                            "
                        />

                        <span>
                            {umrahPackageSearchData.buttonText}
                        </span>

                    </button>

                </form>

            </div>

        </section>

    );

};


export default UmrahPackageSearch;