import next from "../../images/next.png";

const LeftButton =  ( onClick, onDisable ) => {
  const handleClick = () => {
    if (!onDisable) {
      onClick();
    }
  };
  return (
    <img
    src={next}
    alt=""
    width="35px"
    onClick={handleClick}
    height="35px"
    style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
/>
  )
}

export default LeftButton;