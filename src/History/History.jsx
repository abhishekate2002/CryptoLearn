import { Chrono } from "react-chrono";
import ITEM from "./data";
const History = () => {
  return (
    <center>
      <div style={{ width: "1000px", height: "700px" }}>
        <Chrono
          items={ITEM}
          mode="VERTICAL_ALTERNATING"
          scrollable={{ scrollbar: true }}
          useReadMore
          theme={{
            primary: "#E79F3D",
            secondary: "#F7F7F7",
            cardBgColor: "#F7F7F7",
            titleColor: "#E79F3D",
            titleColorActive: "#E79F3D",
          }}
        />
      </div>
    </center>
  );
};

export default History;
