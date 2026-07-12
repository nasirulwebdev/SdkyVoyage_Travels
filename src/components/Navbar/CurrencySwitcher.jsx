import { useState } from "react";
import { ChevronDown } from "lucide-react";


const CurrencySwitcher = () => {


const [open,setOpen]=useState(false);



return (

<div className="relative">


<button

onClick={()=>setOpen(!open)}

className="
flex
items-center
gap-1
hover:text-sky-600
"

>

💱 BDT

<ChevronDown size={14}/>

</button>



{
open &&

<div className="
absolute
right-0
mt-3
w-32
bg-white
shadow-lg
rounded-lg
p-2
">


<button className="
block
w-full
text-left
px-3
py-2
hover:bg-sky-50
">

BDT ৳

</button>


<button className="
block
w-full
text-left
px-3
py-2
hover:bg-sky-50
">

USD $

</button>


<button className="
block
w-full
text-left
px-3
py-2
hover:bg-sky-50
">

EUR €

</button>



</div>

}


</div>

)

}


export default CurrencySwitcher;