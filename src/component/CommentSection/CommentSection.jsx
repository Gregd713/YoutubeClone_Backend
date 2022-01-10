import { text } from "express";
import React, { useState } from "react";
import './CommentSection.css'
import axios from 'axios';



const CommentSection=()=>{
  const[comment, setComment]=useState('');
  async function handleSubmit(e){
    e.preventDefault();
    const postComment={
text: comment, 
    }
    let response = await axios.post(`http://localhost:5000/api/comments`, postComment);
    if(response.status == 200){
      console.log("comment posted")
    }
  }
    return(
      <div className="commentbox">
      <form className="commentBox" onSubmit={handleSubmit}>
        <h1>Write a comment:</h1>
        <input placeholder="Write a comment..." value={comment} onChange={(event) => setComment(event.target.value)} type='text'/>
        <button className="loginButton" type="submit">
          Comment
        </button>
      </form>
      </div>
    )
}
export default CommentSection;