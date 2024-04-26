import "./destination.css";

export const Destination = ({ activeStage }) => {
  return (
    <div className="etapMenu">
      <div
        style={{
          backgroundColor:
            activeStage === "blok_transport" ? "#399BDC" : "white",
        }}
        className="blok_transport"
      >
        <b>1. Transport</b>
      </div>
      <div
        style={{
          backgroundColor: activeStage === "blok_nocleg" ? "#399BDC" : "white",
        }}
        className="blok_nocleg"
      >
        <b>2. Nocleg</b>
      </div>
      <div
        style={{
          backgroundColor:
            activeStage === "blok_transport_nm" ? "#399BDC" : "white",
          height: 100,
        }}
        className="blok_transport_nm"
      >
        <b>3. Transport na miejscu</b>
      </div>
      <div
        style={{
          backgroundColor:
            activeStage === "blok_atrakcje" ? "#399BDC" : "white",
        }}
        className="blok_atrakcje"
      >
        <b>4. Atrakcje</b>
      </div>
      <div
        style={{
          backgroundColor:
            activeStage === "blok_ubezpieczenie" ? "#399BDC" : "white",
        }}
        className="blok_ubezpieczenie"
      >
        <b>5. Ubezpieczenie</b>
      </div>
      <div
        style={{
          backgroundColor: activeStage === "blok_zaplata" ? "#399BDC" : "white",
        }}
        className="blok_zaplata"
      >
        <b>6. Zapłać</b>
      </div>
    </div>
  );
};
