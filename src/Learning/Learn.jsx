import { learnData } from "./Learndata";
import BannerImg from "./BannerImg";
export function BasicCryptData() {
  return (
    <>
      {learnData.map((item, index) => (
        <div key={index}>
          <h3>{item.heading}</h3>
          <p>{item.description}</p>
          {item.example ? <p>{item.example}</p> : null}
        </div>
      ))}
    </>
  );
}

function Learn() {
  return (
    <div>
      <BannerImg />
      <BasicCryptData />
    </div>
  );
}

export default Learn;
