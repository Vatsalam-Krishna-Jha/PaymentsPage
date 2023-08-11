import React, { useEffect } from "react";
import { useState } from "react";
import image from "./Visa.jpg";
import imager from "./MasterCard.png";
import imagin from "./Amex.png";

const DebCard = () => {
  const [value, setValue] = useState("");
  const [info, setInfo] = useState("");
  const [data, SetData] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    // console.log(!info==="567")
    if (info !== "") {
      fetch(`https://lookup.binlist.net/${info}`)
        .then((res) => res.json())
        .then((d) => SetData(d));
    }
  }, [info]);

  const search = (e) => {
    e.preventDefault();
    const arr = value.slice(0, 8);
    console.log(arr);
    setInfo(arr);

    // fetch(`https://lookup.binlist.net/${info}`)
    // .then(res=> res.json())
    // .then(d=>SetData(d));
  };

  return (
    <div>
      <form onSubmit={search}>
        <div className="form-group">
          <label for="exampleInputEmail1">Card number</label>
          <input
            type="text"
            className="form-control mt-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Card Number"
            value={value}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2 mb-2">
          Submit
        </button>
        {data && (
          <p>
            {data.scheme === "visa" ? (
              <img src={image} style={{ width: "60px" }} />
            ) : data.scheme === "mastercard" ? (
              <img src={imager} style={{ width: "60px" }} />
            ) : (
              <img src={imagin} style={{ width: "60px", height: "50px" }} />
            )}
          </p>
        )}
      </form>
    </div>
  );
};

export default DebCard;
