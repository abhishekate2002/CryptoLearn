import "./BannerImg.css";
import banner from "../assets/cryptobasic.png";
function BannerImg() {
  return (
    <div className="banner">
      <img src={banner} alt="banner image" />
    </div>
  );
}

export default BannerImg;
