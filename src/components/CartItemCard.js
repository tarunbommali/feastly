import React from 'react';
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decreaseItem } from '../redux-store/cartSlice';

export default function CartItemCard({ itemDetails }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = cartItems.find(item => item.id === itemDetails.id);
  const quantity = cartItem ? cartItem.quantity : 1;

  const price = itemDetails.price || itemDetails.defaultPrice;
  const SWIGGY_MEDIA_ASSEST = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  const { name, imageId, ratings, itemAttribute, description } = itemDetails || {};
  const { aggregatedRating } = ratings || {};
  const { rating, ratingCountV2 } = aggregatedRating || {};
  const { vegClassifier } = itemAttribute || {};
  const imgUrl = SWIGGY_MEDIA_ASSEST + imageId;

  const renderVegClassifier = () => {
    return (
      <div className="font-bold">
        {vegClassifier === "NONVEG" ? (
          <div className="inline-block p-[1px] px-[2px] rounded-lg border border-[#e43b4f]">
            <IoTriangle className="fill-[#e43b4f] my-1 rounded-md" />
          </div>
        ) : (
          <div className="inline-block p-[1px] px-[4px] rounded-lg border border-[#0f8a65]">
            <FaCircle className="fill-[#0f8a65] my-1 rounded-md" />
          </div>
        )}
      </div>
    );
  };

  const renderQuantityControl = () => {
    return (
      <div className='flex items-center text-xl font-bold border border-[#d4d5d9] rounded-xl shadow-md p-2'>
        <button onClick={() => dispatch(decreaseItem(itemDetails.id))}>-</button>
        <input type="text" disabled className='w-[40px] text-center' value={quantity} />
        <button onClick={() => dispatch(addItem(itemDetails))}>+</button>
      </div>
    );
  };

  return (
    <li className='flex shadow-md my-2 px-5 py-3 w-[100%]' key={itemDetails.id}>
      <div className='flex w-[100%]'>
        <img src={imgUrl} className='h-[190px] w-[180px] rounded-md' alt={name} />
        <div className='flex px-2 flex-col w-[100%]'>
          <div className='flex text-xl font-bold text-[#282c3f]'>
            {renderVegClassifier()}
            {name}
          </div>
          <div className='flex justify-between items-center'>
            {renderQuantityControl()}
            <p className='text-lg font-semibold text-[#686b78]'>₹{(price * quantity) / 100}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
