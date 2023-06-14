import React from "react";

export default function ScoreBoard() {
  return (
    <div
      onClick={(e) => {
        e.target.close();
        console.log(e);
      }}
      className="block z-[9999] w-24 h-32 bg-black"
    >
      <div className="">HI</div>
    </section>
  );
}
