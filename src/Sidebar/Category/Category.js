import "./Category.css";

function Category({ handleChange }) {
  return (
    <div className="category">
      <h2 className="sidebar-title">Category</h2>
      <div className="category-icons">

        {/* All category */}
        <div onClick={() => handleChange({ target: { value: "" } })} className="icon-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7043/7043937.png"
            alt="All"
            className="icon-image"
          />
          <span>All</span>
        </div>

        {/* Chair category */}
        <div onClick={() => handleChange({ target: { value: "chair" } })} className="icon-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7793/7793135.png"
            alt="Chair"
            className="icon-image"
          />
          <span>Chair</span>
        </div>

        {/* Laptop category */}
        <div onClick={() => handleChange({ target: { value: "laptop" } })} className="icon-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3076/3076303.png"
            alt="Laptop"
            className="icon-image"
          />
          <span>Laptop</span>
        </div>

        {/* Games category */}
        <div onClick={() => handleChange({ target: { value: "games" } })} className="icon-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2972/2972351.png"
            alt="Games"
            className="icon-image"
          />
          <span>Games</span>
        </div>

        {/* Headset category */}
        <div onClick={() => handleChange({ target: { value: "headset" } })} className="icon-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2292/2292116.png"
            alt="Headset"
            className="icon-image"
          />
          <span>Headset</span>
        </div>

        {/* Others category */}
        <div onClick={() => handleChange({ target: { value: "others" } })} className="icon-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/14120/14120322.png"
            alt="Others"
            className="icon-image"
          />
          <span>Others</span>
        </div>
      </div>
    </div>
  );
}

export default Category;
