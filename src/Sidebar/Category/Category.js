// import "./Category.css";
// import Input from "../../components/Product/Input";

// function Category({ handleChange }) {
//   return (
//     <div className="category">
//       <h2 className="sidebar-title">Category</h2>

//       <div>
//         <label className="sidebar-label-container">
//           <input onChange={handleChange} type="radio" value="" name="test2" />
//           <span className="checkmark"></span>All
//         </label>
//         <Input
//           handleChange={handleChange}
//           value="chair"
//           title="Chair"
//           name="test"
//         />
//         <Input
//           handleChange={handleChange}
//           value="laptop"
//           title="Laptop"
//           name="test"
//         />
//         <Input
//           handleChange={handleChange}
//           value="games"
//           title="Games"
//           name="test"
//         />
//         <Input
//           handleChange={handleChange}
//           value="headset"
//           title="Headset"
//           name="test"
//         />
//         <Input
//           handleChange={handleChange}
//           value="others"
//           title="Others"
//           name="test"
//         />
//       </div>
//     </div>
//   );
// }

// export default Category;


import "./Category.css";
import { FaChair, FaLaptop, FaGamepad, FaHeadphones, FaBoxes, FaTh } from "react-icons/fa";

function Category({ handleChange }) {
  return (
    <div className="category">
      <h2 className="sidebar-title">Category</h2>
      <div className="category-icons">
        {/* All category */}
        <div onClick={() => handleChange({ target: { value: "" } })} className="icon-container">
          <FaTh className="icon" />
          <span>All</span>
        </div>
        
        {/* Chair category */}
        <div onClick={() => handleChange({ target: { value: "chair" } })} className="icon-container">
          <FaChair className="icon" />
          <span>Chair</span>
        </div>
        
        {/* Laptop category */}
        <div onClick={() => handleChange({ target: { value: "laptop" } })} className="icon-container">
          <FaLaptop className="icon" />
          <span>Laptop</span>
        </div>

        {/* Games category */}
        <div onClick={() => handleChange({ target: { value: "games" } })} className="icon-container">
          <FaGamepad className="icon" />
          <span>Games</span>
        </div>

        {/* Headset category */}
        <div onClick={() => handleChange({ target: { value: "headset" } })} className="icon-container">
          <FaHeadphones className="icon" />
          <span>Headset</span>
        </div>

        {/* Others category */}
        <div onClick={() => handleChange({ target: { value: "others" } })} className="icon-container">
          <FaBoxes className="icon" />
          <span>Others</span>
        </div>
      </div>
    </div>
  );
}

export default Category;
