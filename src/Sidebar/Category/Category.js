import "./Category.css";
import Input from "../../components/Product/Input";

function Category({ handleChange }) {
  return (
    <div className="category">
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="chair"
          title="Chair"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="laptop"
          title="Laptop"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="games"
          title="Games"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="headset"
          title="Headset"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="others"
          title="Others"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
