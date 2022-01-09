import React from "react";

const LoadingSpinner = ({ overlay }) => {
    return <div className="fixed w-full h-full bg-black/40 z-10">
        <div className=" w-24 h-24 rounded-full border-t-8 border-white absolute left-1/2 top-1/3 animate-spin "></div>
    </div>;
};

export default LoadingSpinner;
