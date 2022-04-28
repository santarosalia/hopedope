import "./photo.css";
import carousel from "./carousel";
const Photo = () => {
  return (
    <div className="photo">
      <h3>사진입니당</h3>
      <div>
        <carousel />
      </div>
    </div>
  );
};

export default Photo;
