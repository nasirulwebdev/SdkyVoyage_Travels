const SearchResult = ({ results }) => {

    if (!results.length) {

        return (

            <p className="mt-6 text-center text-gray-500">

                No results found.

            </p>

        );

    }

    return (

        <div className="mt-5 space-y-3">

            {

                results.map((item) => (

                    <div
                        key={item.id}
                        className="rounded-xl border p-4 hover:bg-blue-50 transition"
                    >

                        <h3 className="font-semibold">

                            {item.title}

                        </h3>

                        <p className="text-sm text-gray-500">

                            {item.type}

                        </p>

                    </div>

                ))

            }

        </div>

    );

};

export default SearchResult;