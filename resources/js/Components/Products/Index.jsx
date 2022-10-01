import React from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

const Index = () => {
    const navigate = useNavigate();
    const newProduct = () => {
      navigate("/product/new")
    };
    return (
        <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
            <div className="flex justify-between items-center">
                <div className="my-3 ">
                    <h1>Product</h1>
                </div>
                <div className="my-3 cursor-pointer rounded bg-slate-400 hover:bg-slate-400/80 px-4 py-2 hover:text-gray-50" onClick={() => newProduct()}>
                    Add new
                </div>
            </div>
            <div className="">
                <div className="grid gap-3 grid-cols-5 font-medium px-8 pt-5 pb-1 mt-5 bg-white">
                    <p>Image</p>
                    <p>Product</p>
                    <p>Type</p>
                    <p>Inventory</p>
                </div>
                <div className="px-8 py-3 grid grid-cols-5 items-center border-b text-gray-500 bg-slate-100">
                    <img src="/" alt="" className="h-10" />
                    <a href="//">Product name</a>
                    <p>Catogory</p>
                    <p>50</p>
                    <div className="flex items-center cursor-pointer justify-center">
                        <MdEdit />
                        <button className="mx-4 border bg:hidden w9 h-9 rounded text-gray-400 cursor-pointer"></button>
                        <RiDeleteBin6Line />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
