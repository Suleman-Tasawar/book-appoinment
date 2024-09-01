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
    <div className="card bg-base-100 w-96 h-[600px] shadow-xl">
      <figure>
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={200} 
          layout="responsive"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary text-white">{badge}</div>
        </h2>
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
