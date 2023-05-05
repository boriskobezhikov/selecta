import React from "react";
import Popup from 'reactjs-popup';
import useInput from "../hooks/useInput";

const WriteReview = () => {
    const login = useInput('');

    return (
      <Popup trigger={<button className="text-xl  text-blue-700 font-bold">WRITE REVIEW</button>} modal>
      <form className="border-2 bg-white backdrop-blur-sm border-black rounded-xl grid justify-items-center self-start " >
        <p className="col-span-full text-xl font-bold"> review </p>
        <label className="col-span-full ">
          <textarea className="border-black border-2 rounded-xl w-full" />
        </label>
        <button type="submit" className="col-span-full ">submit</button>
      </form>
    </Popup>
    )
}

export default WriteReview;