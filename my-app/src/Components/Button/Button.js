import "./Button.css";

const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  const classNames = ["btn"];
  if (selected) classNames.push("isSelected");
  return (
    <button className={classNames.join(" ")} type={type} {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
