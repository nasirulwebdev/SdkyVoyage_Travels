import { Link, useRouteError } from "react-router-dom";
import { AlertTriangle } from "lucide-react";


const ErrorPage = () => {

    const error = useRouteError();


    return (

        <section
            className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-base-200
                px-5
            "
        >

            <div
                className="
                    max-w-md
                    rounded-3xl
                    bg-base-100
                    p-10
                    text-center
                    shadow-xl
                "
            >

                <AlertTriangle
                    size={60}
                    className="
                        mx-auto
                        mb-5
                        text-error
                    "
                />


                <h1
                    className="
                        text-5xl
                        font-bold
                    "
                >

                    404

                </h1>


                <h2
                    className="
                        mt-4
                        text-2xl
                        font-semibold
                    "
                >

                    Page Not Found

                </h2>


                <p
                    className="
                        mt-3
                        text-base-content/60
                    "
                >

                    Sorry, the page you are looking for
                    does not exist.

                </p>


                {
                    error?.statusText && (

                        <p
                            className="
                                mt-3
                                text-sm
                                text-error
                            "
                        >

                            {error.statusText}

                        </p>

                    )
                }



                <Link
                    to="/"
                    className="
                        mt-8
                        inline-flex
                        rounded-xl
                        bg-primary
                        px-6
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:opacity-90
                    "
                >

                    Back Home

                </Link>


            </div>


        </section>

    );
};


export default ErrorPage;