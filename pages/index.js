import MyCard from "./card/card";
import Link from "next/link";
import { useState } from "react";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

export default function Home() {

  const [data, setData] = useState([]);

  const fetchUserData = (val) => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${val}`)
      .then(response => {
        return response.json()
      })
      .then(item => {
        const myData = item.data.recipes
        setData(myData);
        console.log(myData)
      })
  }
  const onSearch = (value) =>  {
    fetchUserData(value);

  }

  return (
    <div className="container">
      <Search
        placeholder="Search any type category which we have"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
  
      {data.map(myItem => (
        <MyCard key={Math.random()} img={myItem.image_url} name={myItem.title} publisher={myItem.publisher}></MyCard>
      ))}
    </div>
  )
}

