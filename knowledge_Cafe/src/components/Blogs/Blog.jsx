import React from "react";

export default function Blog({ blog }) {
  const {
    title,
    cover,
    hashtags,
    reading_time,
    posted_date,
    author_img,
    author,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full" src={cover} alt={`Cover picture for this blog : ${title}`} />
      <div className="flex justify-between">
        <div className="m-2 flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
     {hashtags.map(hash =><span key={hash.id} ><a href=""className="gap-2">{hash}</a></span>)}
    </div>
  );
}
