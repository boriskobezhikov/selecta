import React, { useContext, useState } from "react";
import Popup from 'reactjs-popup';
import useInput from "../hooks/useInput";
import { AuthContext } from "../App";
import { useParams } from "react-router-dom";

const WriteReview = () => {
  const {id}  = useParams();
  const review = useInput('');
  const auth = useContext(AuthContext);
  
  const submitReview = async () => {
    const url: string = 'http://localhost:5000/reviews';
    if (id) {
    await fetch( url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.key}`
      },
      body: JSON.stringify({
        album_id: +id, 
        text: review.value,
      })
    }).then((response) => {
        response.json().then((data) => {
            console.log(data);
        })
    })
  }
  }

    return (
      <Popup trigger={<button type="submit" className="text-xl  text-blue-700 font-bold">WRITE REVIEW</button>} 
      modal
      >
      <form className="border-4 bg-white backdrop-blur-xl border-black rounded-xl grid justify-items-center px-20 py-4" >
        <div className="col-span-full text-xl font-bold"> REVIEW </div>
        <div className="col-span-full px-8 pt-4">
        <label className="">
          <textarea onChange={review.onChange} className="border-black border-2 rounded-xl resize-none w-96  h-40 text-center" placeholder="..." />
        </label>
        </div>
        <div className="col-span-full py-2">
          <button type="button" onClick={submitReview} className="text-blue-600 text-lg">submit</button>
        </div>
      </form>
    </Popup>
    )
}

export default WriteReview;