import { FC } from "react";
import Image from "next/image";
import CardList from "../app/data"

const Card:FC = () => {return(

  <div className="container mx-auto py-36 px-8">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
    {CardList.map(card => (
      <div className="shadow-lg rounded-t-md">
        <img src={card.img} alt="ok" />
        <Image src={card.img} alt="prop" fill={true}/>
        <div className="p-5">
        <h3 className="text-2xl font-medium text-slate-700 mb-3">{card.title}</h3>
        <p className="text-lg font-normal text-gray-600">{card.text}</p>
        </div>
      </div>
    ))}
    </div>
    </div>

)}

export default Card;