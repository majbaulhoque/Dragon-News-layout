import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import imgOne from "../../../assets/1.png"
import imgTwo from "../../../assets/2.png"
import imgThree from "../../../assets/3.png"
import { MdOutlineDateRange } from "react-icons/md";
import moment from "moment";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <div className="mb-7">
                <h3 className="text-xl mb-7 font-semibold">All Category</h3>
                <div className="space-y-6 text-xl">
                    {
                        categories?.map(category =>(<Link
                            className="block px-5 " 
                            to={`/category/${category.id}`}
                            key={category.id}>
                                {category.name}
                        </Link>))
                    }
                    
                </div>
            </div>
            <div>
                <div>
                    <img src={imgOne} alt="" />
                    <p className="font-semibold text-xl py-5 ">Local Community Center Hosts Happy Children’s Art Festival Today</p>
                    <div className="flex items-center mb-5">
                        <p className="mr-9">Children</p>
                        <MdOutlineDateRange className="mr-2"/>
                        <p>{moment().format("dddd D YYYY")}</p>
                    </div>
                </div>
                <div>
                    <img src={imgTwo} alt="" />
                    <p className="font-semibold text-xl py-5 ">The Heart of Happiness and Togetherness</p>
                    <div className="flex items-center mb-5">
                        <p className="mr-12">Family</p>
                        <MdOutlineDateRange className="mr-2"/>
                        <p>{moment().format("dddd D YYYY")}</p>
                    </div>
                </div>
                <div>
                    <img src={imgThree} alt="" />
                    <p className="font-semibold text-xl py-5 ">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex items-center mb-5">
                        <p className="mr-14">Sports</p>
                        <MdOutlineDateRange className="mr-2"/>
                        <p>{moment().format("dddd D YYYY")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;