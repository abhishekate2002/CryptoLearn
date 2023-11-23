import { learnData } from "../Learndata";
import BannerImg from "./BannerImg";

import "./BasicCryptData.css";
function BasicCrypt() {
  return (
    <di>
      {learnData.map((item, index) => (
        <div key={index}>
          <h3 className="heading">{item.heading}</h3>
          <p className="data-para">{item.description}</p>
          {item.example ? <p className="example-para">{item.example}</p> : null}
        </div>
      ))}
    </di>
  );
}

function BasicCryptData() {
  return (
    <div className="container">
      <BannerImg />
      <BasicCrypt />
      <footer className="mt-6">
        <h3>More upcoming</h3>
      </footer>
    </div>
  );
}

export default BasicCryptData;
