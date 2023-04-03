import { IHighLights } from "@/store/reducres/tourReducer";
import Image from "next/image";
import React from "react";
import styles from "./HighlightCards.module.css";

interface IProps {
  highlight: IHighLights;
}

const HighlightCards = ({ highlight }: IProps) => {
  return (
    <div className="relative h-[250px] min-w-[200px] sm:w-[200px] flex flex-col rounded-[8px] border shadow mr-4 cursor-pointer active:scale-95 ">
      <div className={`${styles.img} h-[40%] `}>
        <Image
          src={highlight.image}
          alt={highlight.title}
          width={250}
          height={150}
          className="rounded-t-[8px]"
        />
      </div>
      <div className="flex flex-col px-2 h-[60%]  justify-start flex-grow">
        <h6 className={`${styles.title} py-2`}>{highlight.title}</h6>
        <main className={`${styles.description}`}>{highlight.description}</main>
      </div>
      <div className="absolute  top-[85%] left-[80%] rounded-[50%] flex border h-[30px] w-[30px] shadow justify-center items-center cursor-pointer active:scale-75">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z"
            fill="#008080"
          />
        </svg>
      </div>
    </div>
  );
};

export default HighlightCards;
