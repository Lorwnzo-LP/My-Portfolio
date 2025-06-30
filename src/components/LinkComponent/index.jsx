import { Link } from "react-router-dom";

export default function LinkComponent({to, children}) {
  return (
    <Link
      className={`
        xl:text-lg
        text-md
        font-bold
        text-white
        `}
      to={to}
    >
      {children}
    </Link>
  );
}
