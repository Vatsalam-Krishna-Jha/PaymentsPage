import React, { useState, useEffect } from "react";
import Records from "./db.json";

const Upi = () => {
  const [value, setValue] = useState("");
  const [info, setInfo] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
    // const ab = value.split('@');

    // setInfo(ab[1]);
  };
  // useEffect(()=>{
  //     fetch()
  //     .then(res=> {
  //         return res.json();
  //     })
  //     .then(data=> setData(data));

  // },[])

  useEffect(() => {
    setData(Records.filter((mf) => mf.VPAHandle === info));
  }, [info]);

  const search = (e) => {
    e.preventDefault();
    const arr = value.split("@");
    setInfo(arr[1]);
  };

  console.log(data.length);
  // console.log(data);

  return (
    <div className="box1">
      <form onSubmit={(e) => search(e)}>
        <div class="form-group">
          <label for="exampleInputEmail1">UPI ID</label>
          <input
            type="text"
            class="form-control mt-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter UPI Id"
            value={value}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary mt-2">
          Submit
        </button>
        {!data.length == 0 &&
          (data.length == 1 ? <p>{data[0].Appy}</p> : <p>{data[0].Bank}</p>)}
      </form>
    </div>
  );
};

export default Upi;
