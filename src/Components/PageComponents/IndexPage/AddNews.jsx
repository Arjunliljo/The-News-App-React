import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../../../App/dataSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL;

function AddNews() {
  const [heading, setHeading] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [btnContent, setbtnContent] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  const [description, setDecription] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      heading,
      image,
      btnContent,
      description,
      author,
    };
    const newAuthor = {
      author,
      authorImg,
    };

    try {
      const articleData = await axios.post(`${BASE_URL}/articles`, newArticle);
      const authorData = await axios.post(`${BASE_URL}/authors`, newAuthor);

      dispatch(addData({ ...articleData.data, ...authorData.data }));
    } catch (e) {
      console.log(e.message);
    }

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
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="creator">Author:</label>
          <input
            type="text"
            id="creator"
            name="creator"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="keywords">Author image:</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={authorImg}
            onChange={(e) => setAuthorImg(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="btnContent">Catagory:</label>
          <input
            type="text"
            id="btnContent"
            name="btnContent"
            value={btnContent}
            onChange={(e) => setbtnContent(e.target.value)}
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
