import classNames from "classnames";
import { GoSync } from "react-icons/go";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  loading,

  ...rest
}) {
  const classes = classNames(
    rest.className,
    "flex items-center gap-1 px-2 py-2 my-1 font-semibold rounded-lg shadow-md  focus:ring-2 focus:ring-orange-500 text-orange-500 h-10 hover:scale-125 transition ",
    {
      "bg-orange-500 text-slate-50 hover:bg-orange-700 focus:ring-orange-400":
        primary,
      "bg-sky-500 text-white hover:bg-sky-700 focus:ring-sky-400": secondary,
      "bg-amber-500 text-white hover:bg-amber-700 focus:ring-amber-400":
        warning,
      "bg-lime-500 text-slate-50 hover:bg-lime-700 focus:ring-lime-400":
        success,
      "opacity-80 bg-yellow-500 hover:bg-yellow-700": loading,
      "bg-red-500 text-slate-50  hover:bg-red-700 focus:ring-red-400": danger,
    }
  );
  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}
export default Button;
