import { Link } from "react-router-dom";

export default function LinkComponent({to, children}) {
  return (
    <Link
      className={`
        lg:text-lg
        text-sm
        font-bold
        text-white
        ${
        location.pathname.includes(to) ? "underline underline-offset-1" : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}
