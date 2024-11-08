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
          title="chair"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="laptop"
          title="laptop"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="games"
          title="games"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="headset"
          title="headset"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="others"
          title="others"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
