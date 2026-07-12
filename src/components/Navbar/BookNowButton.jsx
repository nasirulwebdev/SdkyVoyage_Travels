import { Link } from "react-router-dom";

const BookNowButton = ()=>{

return(
<Link
to="/booking"
className="
bg-green-600
text-white
px-5
py-2
rounded-full
font-semibold
hover:bg-sky-700
transition
">
Book Now
</Link>
)}


export default BookNowButton;