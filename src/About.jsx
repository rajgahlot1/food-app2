import React from "react";
import aboutImg from "./images/aboutback.jpeg";
const About = () => {
  return (
    <div style={{ backgroundColor: "rgb(7,8,10)" }}>
      <div className="text-center p-4">
        <h1>About us</h1>
      </div>
      <div className="row mb-4">
        <div className="col col-sm text-center pb-4">
          {" "}
          <img src={aboutImg} alt="" />{" "}
        </div>
        <div className="col col-sm me-2 ms-2 ms-sm-0">
        <h3>What makes our food special</h3>
        <p  style={{fontSize:'12px', fontWeight:'lighter'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          dolores possimus cupiditate commodi, quod esse sequi eligendi, nulla
          ipsum consequuntur iusto aliquid, consequatur inventore saepe minus at
          quas consectetur cumque. <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis at
          pariatur sed reiciendis veritatis ipsa nesciunt quisquam itaque
          numquam alias id sit corporis culpa debitis delectus ipsam, veniam ea
          recusandae.
        </p>
        <div className="btn btn-outline-primary border rectangle mb-4">Learn More</div></div>
      </div>
    </div>
  );
};

export default About;
