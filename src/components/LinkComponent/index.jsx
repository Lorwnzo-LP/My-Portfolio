import { Link } from "react-router-dom";

export default function LinkComponent({to, children}) {
  return (
    <Link
      className={`
        text-lg
        font-bold
        text-white
        ${
        location.pathname === to ? "underline underline-offset-1" : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}
