const navbarData = [

    {
        title:"Home",
        path:"/"
    },


    {
        title:"Destinations",
        megaMenu:true,

        items:[

            {
                name:"Asia",
                children:[

                    "Bangladesh",
                    "Thailand",
                    "Malaysia",
                    "Singapore",
                    "Japan",
                    "South Korea"

                ]
            },


            {
                name:"Europe",
                children:[

                    "Switzerland",
                    "France",
                    "Italy"

                ]
            },


            {
                name:"Middle East",
                children:[

                    "Dubai (UAE)",
                    "Turkey"

                ]
            },


            {
                name:"Maldives",
                path:"/destinations/maldives"
            },


            {
                name:"Bali",
                path:"/destinations/bali"
            }

        ]

    },


    {
        title:"Tour Packages",

        megaMenu:true,

        items:[

            {
                name:"Domestic Tour",
                path:"/packages/domestic"
            },


            {
                name:"International Tour",
                path:"/packages/international"
            },


            {
                name:"Family Tour",
                path:"/packages/family"
            },


            {
                name:"Luxury Tour",
                path:"/packages/luxury"
            },


            {
                name:"Honeymoon Tour",
                path:"/packages/honeymoon"
            },


            {
                name:"Adventure Tour",
                path:"/packages/adventure"
            }

        ]

    },


    {
        title:"Flights",

        megaMenu:true,

        items:[

            {
                name:"Search Flights",
                path:"/flights"
            },


            {
                name:"Flight Deals",
                path:"/flight-deals"
            },


            {
                name:"Schedule",
                path:"/flight-schedule"
            }

        ]

    },


    {
        title:"Hotels",

        megaMenu:true,

        items:[

            {
                name:"Luxury Hotels",
                path:"/hotels/luxury"
            },


            {
                name:"Budget Hotels",
                path:"/hotels/budget"
            },


            {
                name:"Resorts",
                path:"/hotels/resorts"
            }

        ]

    },


    {
        title:"Visa",

        path:"/visa"

    },


    {
        title:"Hajj & Umrah",

        path:"/hajj-umrah"

    },


    {
        title:"Blog",

        path:"/blog"

    },


    {
        title:"Contact",

        path:"/contact"

    }


];


export default navbarData;