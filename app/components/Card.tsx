import React from "react";
import Image from "next/image";
import { CardProps } from "../utils/interface";

const Card: React.FC<CardProps> = ({
  minImage,
  styles = "",
  image,
  title,
  badge,
  text,
  actionBadge,
}) => {
  return (
    <div className={`card w-[100%] ${styles} bg-white shadow-xl`}>
      <figure >
        {minImage ? (
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            src={image}
            alt={title}
            width={250}
            height={300}
            style={{ objectFit: "contain" }}
          />
        )}
      </figure>
      <div className="card-body w-full max-w-[350px] text-center">
        <div className="flex flex-col p-5 md:p-2 lg:p-3  md:flex-col justify-between items-center lg:flex-row">
          <h1 className="card-title">{title}</h1>
          <div className="badge badge-secondary text-white h-10 text-nowrap">
            {badge}
          </div>
        </div>
        <p>{text}</p>
        <div className="card-actions justify-end">
          {actionBadge?.map((action) => (
            <a
              key={action.label}
              href={action.url}
              className="badge badge-outline"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
