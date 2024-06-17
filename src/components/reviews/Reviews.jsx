"use client";
import { useState, useEffect } from "react";
import { FaCommentAlt } from "react-icons/fa";
export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://viaje.ai/testimonial_api/");
      const result = await response.json();
      setComments(result.data);
    };

    fetchData();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      );
    }

    if (halfStar) {
      stars.push(
        <span key={fullStars} className="text-yellow-500">
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-9/12 h-screen">
        <h1 className="mx-32 pt-10 font-bold text-2xl text-center">
          What Our Student Says!
        </h1>
        <div className="flex flex-wrap section">
          <img
            src="/potraite.avif "
            className="flex border-2 border-sky-500 lg:my-20 p-3 w-80 h-80"
            alt="image"
          />
          <div className="flex-1 p-4 w-9/12 reviews">
            {comments.map((comment, index) => (
              <div key={index} className="shadow-md mb-4 p-4 border rounded-lg">
                <FaCommentAlt className="h-10 text-[#7440f7]" />
                <p>{comment.comment}</p>
                <div className="flex items-center mb-2">
                  <div className="mr-2">{renderStars(comment.rating)}</div>
                  <span className="font-bold text-gray-800">
                    {comment.comment_by}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
