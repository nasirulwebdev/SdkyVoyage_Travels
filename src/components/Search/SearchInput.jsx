import { Search } from "lucide-react";

const SearchInput = ({ value, onChange }) => {

    return (

        <div className="flex items-center rounded-xl border px-4 py-3">

            <Search className="text-gray-500" size={20} />

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search destinations, hotels, flights..."
                className="ml-3 w-full outline-none"
            />

        </div>

    );

};

export default SearchInput;