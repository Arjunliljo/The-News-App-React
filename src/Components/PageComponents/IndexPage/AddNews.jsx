import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../App/Login/dataSlice";
import { useNavigate } from "react-router-dom";

function AddNews() {
  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");
  const [creator, setCreator] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState("");
  const [description, setDecription] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.dataSet.data.at(-1).id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      image_url,
      creator,
      category,
      keywords,
      description,
      id: id + 1,
    };
    dispatch(updateData(data));
    navigate("/articles");
  };

  return (
    <div className="formContainer">
      <form className="addForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image_url">Image URL:</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="creator">Creator:</label>
          <input
            type="text"
            id="creator"
            name="creator"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="keywords">Keywords:</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDecription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNews;
