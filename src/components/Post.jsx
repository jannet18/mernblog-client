import React from "react";

export const Post = () => {
  return (
    <div className="post">
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
            dreamy, the rise and fall of the misty valleys, hills and mountains
            of the spectacular Aberdare ranges that sit across Nyeri and
            Nyandarua counties are a sight to behold.
            <br />
            The picturesque mountainous scenery is one of the highlights of a
            visit to this wonderland. Open moorlands and dense forests
            characterize the vast park coupled with a deep lush of clean crisp
            air perfect for a break away from life in search of relaxation,
            peace and tranquility.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
