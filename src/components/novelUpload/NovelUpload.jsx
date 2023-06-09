import "./novelupload.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const NovelUpload = () => {
  // const [multipleImg, setMultipleImg] = useState(true);

  // const handleImg = (event) => {
  //   setMultipleImg(event.target.files);
  // };

  // function handleUpload() {
  //   const formData = new FormData();
  //   for (let i = 0; i < multipleImg.length; i++) {
  //     const formData = append["images[${i}]"];
  //   }
  // }
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="BookName"></label>
          <input type="text" name="BookName" id="BookName" />
        </div>
        <div>
          <label htmlFor="AuthorName"></label>
          <input type="text" name="AuthorName" id="AuthorName" />
        </div>
        <div>
          <label htmlFor="Description"></label>
          <input type="text" name="Description" id="Description" />
        </div>
        <div>
          <label htmlFor="Rating"></label>
          <input type="text" name="Rating" id="Rating" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
