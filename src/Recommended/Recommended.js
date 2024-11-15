import Button from "../components/Product/Button";
import "../styles/Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="recommendation">
        <h2 className="recommended-title double-line">Fresh Offers</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="HP" title="HP" />
          <Button onClickHandler={handleClick} value="Xiang" title="Xiang" />
          <Button onClickHandler={handleClick} value="Acer" title="Acer" />
          <Button onClickHandler={handleClick} value="Sony" title="Sony" />
          <Button onClickHandler={handleClick} value="Xbox" title="Xbox" />
          <Button onClickHandler={handleClick} value="LG" title="LG" />
          <Button onClickHandler={handleClick} value="JBL" title="JBL" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
