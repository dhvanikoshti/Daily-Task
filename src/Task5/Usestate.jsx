import React, { useState } from "react";
import img1 from "./mobile1.png";
import img2 from "./mobile3.png";

function Usestate() {

    const [image, setImage] = useState(img1);
    const [bg, setbg] = useState('gray');

    function change() {
        setImage(img2);
    }
    function changebg() {
        setbg('black');        
    }
    return (
        <div className="mx-140 my-30 p-5" >
            <img src={image} alt="img1" height="200px" width="300px" className="border-gray-200 border-2 p-6 rounded-xl" style={{background:bg}} />
            <div className="grid-cols-2">
            <button onClick={change} className="text-center text-2xl p-2 my-6 mx-12 bg-slate-600 rounded-xl text-amber-50">Change Image</button>
            <button onClick={changebg} className="text-center text-2xl p-2 my-6 mx-12 bg-slate-600 rounded-xl text-amber-50">Change Color</button>
            </div>
        </div>
    );
}
export default Usestate;