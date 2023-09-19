import prev from "../../images/prev.png";

const RightButton =  ( onClick, onDisable ) => {
  const handleClick = () => {
    if (!onDisable) {
      onClick();
    }
  };
  return (
    <img
      src={prev}
      alt=""
      width="35px"
      onClick={handleClick}
      height="35px"
      style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
    />
  )
}

export default RightButton;