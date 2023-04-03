import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./HeaderImage.module.css"

interface IProps {
  image?: string,
}

const HeaderImage = ({image}:IProps) => {

  const [headImage, setHeadImage] = useState('/public/head.png')

  useEffect(() => {
    if(image){
      setHeadImage(image)
      console.log(image)
    }
  }, [image])
  
  
  return (
    <div
      className={`${styles.headimage} flex justify-center items-center `}
    >
      <h1 className={`${styles.headtext} `}>
        Welcome <br />
        to Hawaii
      </h1>
    </div>
  );
};

export default HeaderImage;
