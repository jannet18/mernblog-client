import React from "react";
import { formatISO9075 } from "date-fns";

export const Post = ({ title, summary, content, cover, createdAt, author }) => {
  return (
    <>
      {/* <div className="post">
        <img src="aberdare.jpeg" alt="" />
        <div className="content">
          <h2>Aberdare National Park</h2>
          <p className="info">
            <a href="/" className="author">
              Darlene
            </a>
            <time>2023-12-13 16:00</time>
          </p>
          <div className="summary">
            <p>
              “Majestic Peaks, Moorlands and Intriguing Falls” Alluring and
              dreamy, the rise and fall of the misty valleys, hills and
              mountains of the spectacular Aberdare ranges that sit across Nyeri
              and Nyandarua counties are a sight to behold.
              <br />
              The picturesque mountainous scenery is one of the highlights of a
              visit to this wonderland. Open moorlands and dense forests
              characterize the vast park coupled with a deep lush of clean crisp
              air perfect for a break away from life in search of relaxation,
              peace and tranquility.{" "}
            </p>
          </div>
        </div>
      </div> */}
      <div className="post">
        <img src={cover} alt="" />
        <div className="content">
          <h2>{title}</h2>
          <p className="info">
            <a href="/" className="author">
              {author?.username}
            </a>
            <time>{formatISO9075(new Date(createdAt))}</time>
            {/* <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time> */}
          </p>
          <div className="summary">
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </>
  );
};
