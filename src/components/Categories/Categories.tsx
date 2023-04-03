import { ICategories } from "@/store/reducres/tourReducer";
import React from "react";
import styles from "./Categories.module.css";
import Image from "next/image";

interface IProps {
  categories: Array<ICategories>;
}

const Categories = ({ categories }: IProps) => {
  return (
    <div className="bg-[#E6F2F2] w-[100%] flex justify-center items-start ">
      <div
        className={`${styles.categoriescontainer} flex justify-between my-5 gap-x-5 w-[70%]`}
      >
        <div className="w-[100%] my-3 sm:w-[50%] ">
          <h4>
            <strong>Categories</strong>{" "}
          </h4>
          <div>
            {categories.map((category,index) => {
              return (
                <div key={index} className="h-[70px] w-[100%] flex justify-between items-center shadow border bg-white my-2 px-3 rounded-[10px] cursor-pointer active:scale-95">
                  <h5> {category.name}</h5>
                  <div className="rounded-[50%] flex border h-[30px] w-[30px] justify-center items-center shadow cursor-pointer active:scale-75 ">
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
            })}
          </div>
        </div>
        <div className="w-[100%] my-3 sm:w-[50%] ">
          <h4>
            <strong>Travel Guide</strong>
          </h4>
          <div className="flex justify-between bg-white my-2 py-3 px-5 sm:p-10 rounded-[10px] items-center shadow border">
            <div className="flex flex-col justify-start w-[50%]">
              <div>
                <h4>
                  <strong>Hadwin Malone</strong>
                </h4>
                <h5>Guide since 2012</h5>
              </div>
              <div className="mt-10 ">
                <button className={`${styles.contactbutton}`}>
                  <span>Contact</span>
                </button>
              </div>
            </div>
            <div
              className={`${styles.guideimage} w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] rounded-[50%]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
