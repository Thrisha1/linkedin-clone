import React, {useState, useEffect} from 'react'
import './feedheader.css'
import Feedtopicons from './Feedtopicons'
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WorkIcon from '@mui/icons-material/Work';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { db } from "./firebase";
import firebase from 

const ficon = {
  "margin-left" : "2rem"
}

function Feedheader() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snap) => 
      setPosts(
        snap.docs.map((doc) =>({
          id: doc.id,
          data: doc.data(),
        }))
      )
    )
  }, [])

  const sendposts = (e) => {
    e.preventDefault();
  }

  return (
    <div className="feed1 d-flex flex-column p-3 card rounded m-3">
        <div className=" d-flex">
          <img className="rounded-circle img" src="https://www.erwinlist.com/html/wp-content/uploads/2020/02/29-5098-pp_gallery/LinkedIn-Sample-Photo-001%28pp_w768_h768%29.jpg" alt="" />
          <form action="" className="w-100 h-100  me-3">
            <input className="w-100 h-100 rounded-pill ms-3 px-3" type="text" name="" id="" placeholder="Start a post" />
            <button type="submit" onClick={sendposts} className="d-none" >Submit</button>
          </form>

        </div>
        <div className="d-flex mt-3 h-50 justify-content-between">
            
            <Feedtopicons Icon={ImageIcon} title="Home"/>
            <Feedtopicons Icon={SmartDisplayIcon} title="video" style = {ficon} />
            <Feedtopicons Icon={WorkIcon} title="Job"/>
            <Feedtopicons Icon={RateReviewIcon} title="Write article"/>

        </div>
    </div>
  )
}

export default Feedheader