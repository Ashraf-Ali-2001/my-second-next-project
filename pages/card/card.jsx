import React from "react"
import Link from "next/link"
import { BiLike } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import {FaRegCommentDots} from "react-icons/fa"
import { Card } from "antd"
import { useState } from "react"
export default function MyCard({ img, name, publisher }) {

  const [like, setLike] = useState(0);
  const [love, setLove] = useState(0);
  const [commet, setComment] = useState(0);

  const addLikeHandler = () => {
    setLike(prev => prev + 1);
  }
  const addLoveHandler = () => {
    setLove(prev => prev + 1);
  }
  const addCommentHandler = () => {
    setComment(prev => prev + 1);
  }

  // const addLargeImg = (img) =>{
     
  // }

  return (
    <div>
      <Card
        style={{
          width: 350,
          textAlign: "center",
          height: 460,
          fontSize: 20,
          backgroundColor: "#f0eed3",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: 15,
          boxShadow:" 2px 5px 16px 3px #999"
        }}
        cover={
        <Link href={`/${img}`}>  <img
            alt="example"
            src={img}
            style={{
              width: 280,
              height: 250
            }
            }
          /></Link>
        }
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>

          {/* For title */}
          <div style={{
            display: "flex",
            flexDirection:"column"
          }}>
          {name}
          {/* {publisher} */}
          </div>

          <div style={{
            width: 220,
            display: "flex",
            justifyContent: "space-between"
          }}>

            {/* For Likes */}
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontSize: 21,
              width: 60
            }}>
              <BiLike style={{
                fontSize: 30
              }} onClick={addLikeHandler}></BiLike>
              {like}
            </div>

            {/* For Love */}
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontSize: 21,
              width: 60,
            }}>
              <AiOutlineHeart style={{
                fontSize: 30,
                color: "#f00"
              }} onClick={ addLoveHandler }></AiOutlineHeart>
              {love}
            </div>


            <div style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontSize: 21,
              width: 60
            }}>
              <FaRegCommentDots style={{
                fontSize: 30
              }} onClick={addCommentHandler}></FaRegCommentDots>
              {commet}
            </div>
          </div>
        </div>
      </Card>

    </div>
  )
}