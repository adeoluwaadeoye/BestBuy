import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import "../styles/Sidebar.css";
import FlashAd from "./Advert/FlashAd";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Category handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        <FlashAd />
      </section>
    </>
  );
};

export default Sidebar;
