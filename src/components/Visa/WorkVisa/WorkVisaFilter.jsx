import { workVisaFilterData } from "../../../data/Visa/WorkVisaData.js";

const WorkVisaFilter = ({
    activeFilter,
    onFilterChange,
}) => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            {workVisaFilterData.map((filter) => {
                const isActive =
                    activeFilter === filter.value;

                return (
                    <button
                        key={filter.id}
                        type="button"
                        onClick={() =>
                            onFilterChange(filter.value)
                        }
                        className={`
                            rounded-full
                            border
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            transition-all
                            duration-300
                            ${
                                isActive
                                    ? `
                                        border-blue-600
                                        bg-blue-600
                                        text-white
                                        shadow-md
                                        shadow-blue-600/20
                                    `
                                    : `
                                        border-slate-200
                                        bg-white
                                        text-slate-600
                                        hover:border-blue-300
                                        hover:text-blue-600
                                    `
                            }
                        `}
                    >
                        {filter.label}
                    </button>
                );
            })}
        </div>
    );
};

export default WorkVisaFilter;