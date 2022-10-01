import React from "react";

export const Output = ({ paragraphs }) => {
  return (
    <div className="paragraph__container">
      {paragraphs.map((sentence, index) => {
        return <ul className="ul__block">
                  <li className="items__list" key={index}> {sentence}</li>
              </ul>
      })}
    </div>
)}