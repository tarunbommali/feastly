import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { clearCart } from "../redux-store/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch((store) => store.cart.items);

  const total = cartItems.reduce((acc, item) => acc + (item.price || item.defaultPrice )/ 100, 0);
  const deliveryCharge = 33;
  const gstCharges = 55.6;
  console.log(cartItems)

   

  const handelClearCart = () => {
    dispatch(clearCart());
  };

  const renderCartItemList = () => {
    return (
      <div className="flex flex-col w-[55%]">
        {renderBillDetails()}
        {renderApplyCopounView()}
        {cartItems.map((item) => (
          <CartItemCard key={item.id} itemDetails={item} />
        ))}
      </div>
    );
  };

  const renderEmptyView = () => {
    return (
      <div className="flex flex-col">
        <p className="text-[#535665] font-bold"> Your cart is empty</p>
        <p className="text-[#848591] ">
          You can go to the home page to view more restaurants
        </p>
      </div>
    );
  };

  const renderBillDetails = () => {
    return (
      <div className="flex p-5 flex-col bg-[#e9ecee] w-[100%] ">
        <p className="font-bold">Bill Details</p>
        <div className="flex  justify-between">
          Item Total<span>₹{total}</span>
        </div>

        <div className="flex justify-between">
          Delivery Fee <span>₹{deliveryCharge}</span>
        </div>
        <div className="flex justify-between">
          GST and Restaurant Charges <span>₹{gstCharges}</span>
        </div>
        <hr className="border border-2px my-2 border-black" />
        <div className="flex font-bold justify-between">
          TO PAY<span>₹{total + deliveryCharge + gstCharges}</span>
        </div>
      </div>
    );
  };
  const renderApplyCopounView = () => {
    return (
      <div className="flex items-center justify-between w-[100%] my-2 py-2 shadow-sm">
        <div className="flex items-center">
          <input
            type="input"
            placeholder="Apply Copoun"
            className="border border-dashed rounded-l-lg px-2 text-xl py-1 border-[#a9abb2] outline-none "
          />
          <button className="cursor-pointer border border-[#00a6ed] bg-[#00a6ed] rounded-r-lg text-[#ffffff] px-4 font-bold py-1 text-xl">
            Apply
          </button>
        </div>
        <button
          onClick={handelClearCart}
          className="cursor-pointer  border border-black bg-black rounded-sm text-[#ffffff] px-4 font-bold py-1 text-xl"
        >
          Clear All
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center py-3">
      {cartItems.length === 0 ? renderEmptyView() : renderCartItemList()}
    </div>
  );
}
