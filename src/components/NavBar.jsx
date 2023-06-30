import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="py-7">
      <Link
        to="/"
        className="flex items-center justify-center bg-primary-button p-10 gap-10"
      >
        <span className="text-5xl text-white">Nome</span>
      </Link>
    </nav>
  );
}
