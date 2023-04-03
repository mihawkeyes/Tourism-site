import { IHighLights } from "@/store/reducres/tourReducer";
import React from "react";
import styles from "./Highlight.module.css";
import HighlightCards from "@/components/HighlightCards";
import Link from "next/link";

interface IProps {
  highlights: Array<IHighLights>;
}

const Highlight = ({ highlights }: IProps) => {
  return (
    <div className="md:w-[70%] sm:w-[90%] w-[100%] self-center p-3 ">
      <h4 className="mt-5">
        <strong>Highlights</strong>
      </h4>
      <div
        className={`${styles.carouselcontainer} flex justify-between py-5 gap-y-4 `}
      >
        {highlights.map((highlight, index) => {
          return (
            <Link href={{ pathname: `/activity/${highlight.title}` }}>
              <HighlightCards key={index} highlight={highlight} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Highlight;
