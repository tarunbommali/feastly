import React from "react";
import AccordionItemCard from "./AccordionItemCard";
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";



const AccordionItem = ({ accordionDetails, setActiveAccordion, showItems, index }) => {
  
   
  // Ensure accordionDetails and accordionDetails.item exist before accessing their properties
  if (!accordionDetails || !accordionDetails.item || !accordionDetails.item.card || !accordionDetails.item.card.card) {
    return null; // Return null or handle the case when required properties are undefined
  }

  const accordionItem = accordionDetails.item.card.card;

  const onToggleAccordion = () => {
    setActiveAccordion(index);
  };

  const renderAccordionRestro = () => {
    return (
      <ul className="flex flex-col my-3">
        {accordionItem.itemCards.map((itemCard, index) => (
          <AccordionItemCard key={index} itemCard={itemCard} />
        ))}
      </ul>
    );
  };


  

  return (
    <li className="list-none py-2">
      <div onClick={onToggleAccordion} className="flex justify-between text-[#414449]  w-[100%] border-b-[15px]">
        <h1  className="flex items-center text-xl font-bold my-2 px-2  text-[#282c3f]">
          {accordionItem.title} ({accordionItem.itemCards.length})
        </h1>
        <button>{showItems ?  <IoMdArrowDropup className="text-xl font-bold" />:<IoMdArrowDropdown className="text-xl font-bold" />}</button>
      </div>
      {showItems && renderAccordionRestro()}
    </li>
  );
};

export default AccordionItem;
