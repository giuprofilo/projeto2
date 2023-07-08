import { Link } from "react-router-dom";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <nav className="py-7">
      <Link
        to="/"
        className="flex items-center justify-center bg-primary-button p-10 gap-10"
      >
        <GlobeAmericasIcon className="h-12 w-12 text-white" />
        <span className="text-5xl text-white">TravelRatings</span>
      </Link>
    </nav>
  );
}
