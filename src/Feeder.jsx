import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Feedtopicons from './Feedtopicons'
import './feeder.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ImageIcon from '@mui/icons-material/Image';

function Feeder({title, followers, promo, img2, img1}) {
  return (
    <div className="feeder feed123 m-3 card d-flex flex-column p-3">
        <div className="divtop d-flex justify-content-between w-100 ">
          <div className="fmid d-flex">
            <div className="div1">
                <img className="cover me-3 rounded " width="50px" height="50px" src={img1} alt="" />
            </div>
            <div className="div2 d-flex flex-column">
                <h6 className="m-0 title">{title}</h6>
                <p className="m-0 ">{followers}</p>
                <p className="m-0 ">{promo}</p>
            </div>
            
          </div>
          <div className="div3 p-3">
              <MoreHorizIcon/>
          </div>

            
        </div>

        <div className="middle">
          <div className="div">
            <h6 className="ps-3 mt-3">NEW! Now open to Founders & CEOs in India.</h6>
          </div>
          <div className="div w-100 ">
            <img className="w-100 mt-2" height="350px" src={img2} alt="" />
          </div>
        </div>
        <div className="d-flex mt-3 px-2 justify-content-between">
        <Feedtopicons Icon={ThumbUpIcon} title="Like"/>
        <Feedtopicons Icon={CommentIcon} title="Comment"/>
        <Feedtopicons Icon={RepeatIcon} title="Repost"/>
        <Feedtopicons Icon={SendIcon} title="Send"/>
        </div>
        <div className=" d-flex mt-3 px-2">
          <img className="rounded-circle img" src="https://www.erwinlist.com/html/wp-content/uploads/2020/02/29-5098-pp_gallery/LinkedIn-Sample-Photo-001%28pp_w768_h768%29.jpg" alt="" />
          <div className="d-flex rounded-pill border border-3 w-100 ms-1"> 
              <input className="w-100 border border-0  ms-3 px-3" type="text" name="" id="" placeholder="Add a Comment..." />
              <Feedtopicons Icon={SentimentSatisfiedAltIcon}/>
              <Feedtopicons Icon={ImageIcon}/>
          </div>
        </div>

    </div>
  )
}

export default Feeder