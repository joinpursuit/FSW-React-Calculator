import "../App.css";

const Button = ({ icon, tcolor, bcolor, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(icon)}
      className="button-wrapper"
      style={{ backgroundColor: bcolor, color: tcolor }}
    >
      {icon}
    </div>
  );
};

export default Button;
