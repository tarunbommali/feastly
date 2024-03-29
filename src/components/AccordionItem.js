import React from "react";
import AccordionItemCard from "./AccordionItemCard";

const AccordionItem = ({ accordionDetails }) => {
  // Ensure accordionDetails and accordionDetails.item exist before accessing their properties
  if (!accordionDetails || !accordionDetails.item || !accordionDetails.item.card || !accordionDetails.item.card.card) {
    return null; // Return null or handle the case when required properties are undefined
  }

  const accordionItem = accordionDetails.item.card.card;

  return (
    <li className="list-none py-2">
      <h1 className="flex items-center text-xl font-bold my-2 text-[#282c3f]">
        {accordionItem.title} ({accordionItem.itemCards.length})
      </h1>
      <ul className="flex flex-col my-3 "> 
        {accordionItem.itemCards.map((itemCard, index) => ( // Corrected the mapping function
          <AccordionItemCard key={index} itemCard={itemCard} /> // Added closing bracket > for AccordionItemCard component
        ))}
      </ul>
    </li>
  );
};

export default AccordionItem;
