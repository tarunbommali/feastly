import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { clearCart } from "../redux-store/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch(); // ✅ FIXED: Correct usage of useDispatch

  // Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || item.defaultPrice) / 100,
    0
  );

  const deliveryCharge = 33;
  const gstCharges = 55.6;

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const renderBillDetails = () => {
    return (
      <div className="flex flex-col bg-[#e9ecee] w-full p-4 rounded-lg shadow-sm mb-4">
        <p className="font-bold text-lg mb-2">Bill Details</p>
        <div className="flex justify-between mb-1">
          <span>Item Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Delivery Fee</span>
          <span>₹{deliveryCharge}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>GST and Charges</span>
          <span>₹{gstCharges}</span>
        </div>
        <hr className="my-2 border-t border-gray-400" />
        <div className="flex justify-between font-bold text-black">
          <span>TO PAY</span>
          <span>₹{(total + deliveryCharge + gstCharges).toFixed(2)}</span>
        </div>
      </div>
    );
  };

  const renderApplyCouponView = () => {
    return (
      <div className="flex items-center justify-between w-full mb-4 gap-4">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Apply Coupon"
            className="flex-1 px-3 py-2 border border-dashed border-[#a9abb2] rounded-l-md outline-none text-base"
          />
          <button className="px-4 py-2 bg-[#00a6ed] text-white font-semibold rounded-r-md">
            Apply
          </button>
        </div>
        <button
          onClick={handleClearCart}
          className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-red-600 transition"
        >
          Clear All
        </button>
      </div>
    );
  };

  const renderCartItemList = () => {
    return (
      <div className="flex flex-col w-full md:w-[55%]">
        {renderBillDetails()}
        {renderApplyCouponView()}
        {cartItems.map((item) => (
          <CartItemCard key={item.id} itemDetails={item} />
        ))}
      </div>
    );
  };

  const renderEmptyView = () => {
    return (
      <div className="flex flex-col items-center justify-center h-60 text-center">
        <p className="text-[#535665] font-bold text-xl mb-2">
          Your cart is empty
        </p>
        <p className="text-[#848591]">
          You can go to the home page to view more restaurants.
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center px-4 py-6">
      {cartItems.length === 0 ? renderEmptyView() : renderCartItemList()}
    </div>
  );
}
