import React from "react";
import Image from "next/image";

interface ActionBadge {
  label: string;
  url: string;
}

interface CardProps {
  image: string;
  title: string;
  badge: string;
  text: string;
  actionBadge: ActionBadge[];
}

const Card: React.FC<CardProps> = ({ image, title, badge, text, actionBadge }) => {
  return (
    <div className="card bg-white w-72 lg:w-96 h-[600px] shadow-xl">
      <figure className="w-full h-full">
        <Image 
          src={image} 
          alt={title} 
          width={250} 
          height={300}
          style={{objectFit: "contain"}}
        />
      </figure>
      <div className="card-body">
        <div className="flex flex-col md:flex-col justify-between items-center lg:flex-row">    
          <h1 className="card-title">{title}</h1>
          <div className="badge badge-secondary text-white h-10 text-nowrap">{badge}</div>
        </div>
        <p>{text}</p>
        <div className="card-actions justify-end">
          {actionBadge.map((action) => (
            <a key={action.label} href={action.url} className="badge badge-outline">
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
