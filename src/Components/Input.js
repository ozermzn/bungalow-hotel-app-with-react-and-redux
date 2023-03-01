import classNames from "classnames";

function Input({ children, type, ...rest }) {
  const classes = classNames(
    rest.className,
    "border border-orange-500 mx-3 w-full p-1 border-2 rounded-lg focus:border-green-500 "
  );

  return <input {...rest} className={classes} type={type} />;
}

export default Input;
