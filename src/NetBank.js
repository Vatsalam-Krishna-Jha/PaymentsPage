import React from "react";
import { useState, useEffect } from "react";

const NetBank = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // fetch(url)
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data); // Assuming the response is JSON data, it will be logged here
  //   })
  //   .catch(error => {
  //     console.error("Fetch error:", error);
  //   });

  // const getData=() =>{

  // }
  const search = (e) => {
    e.preventDefault();
    console.log(e);
    //  const newVal= data.filter(m=> m.id===value? data.BRANCH : "");
    //  setData(newVal);
    console.log(value);
    fetch(`https://ifsc.razorpay.com/${value}`)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((error) => console.error(error));
  };

  //  console.log(data,"dsafjsa");

  // const newonjs = objs.filter(obj => obj.id === id? obj : "");

  return (
    <div>
      <form onSubmit={(e) => search(e)}>
        <div className="form-group">
          <label for="exampleInputEmail1">IFSC Code</label>
          <input
            type="text"
            className="form-control mt-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter IFSC Code"
            value={value}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
        {data && <p>{data.BRANCH}</p>}
      </form>
    </div>
  );
};

export default NetBank;
