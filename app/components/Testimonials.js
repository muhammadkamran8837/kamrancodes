/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Counter from "./Counter";

const reviews = [
  {
    name: "heinrich618",
    country: "South Africa",
    rating: 5,
    time: "3 months ago",
    review:
      "This was one of my best experiences working with freelancers I would definitely recommend very professional and have a deep understanding, He went beyond my expectations.",
  },
  {
    name: "rachidabik256",
    country: "Belgium",
    rating: 5,
    time: "9 months ago",
    review:
      "Your web design work is excellent, delivering a clear and impressive combination of aesthetics and functionality.",
  },
  {
    name: "matangr",
    country: "Israel",
    rating: 5,
    time: "1 year ago",
    review:
      "Very professional, excellent communication, with few improvements made my site look very professional and attractive.",
  },
  {
    name: "deankyprianou",
    country: "United Kingdom",
    rating: 5,
    time: "1 year ago",
    review:
      "An all round excellent provider. Great communication, excellent quality, I would definitely recommend.",
  },
  {
    name: "imonkeys",
    country: "United States",
    rating: 5,
    time: "1 year ago",
    review: "Extremely and exceptional service.",
  },
  {
    name: "luckycap",
    country: "India",
    rating: 5,
    time: "1 year ago",
    review:
      "The seller was very helpful and very responsible, he did my two projects perfectly as I wanted and I would recommend others to choose him. Finally, his deliveries are always on time and he would do the given work perfectly.",
  },
  {
    name: "apride7",
    country: "United States",
    rating: 5,
    time: "1 year ago",
    review:
      "Very helpful...especially for a novice like me. Highly recommended!",
  },
  {
    name: "hanchuush",
    country: "Tunisia",
    rating: 5,
    time: "1 year ago",
    review: "Smooth communication and fast delivery, much appreciated!",
  },
  {
    name: "adamlomeli",
    country: "United States",
    rating: 4.3,
    time: "1 year ago",
    review:
      "Super communicative and always very responsive! Gives great suggestions and works really hard. Highly recommend!",
  },
];

const Review = ({ review, index }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        type: "spring",
        stiffness: 30,
        damping: 20,
        delay: index * 0.1,
      }}
      className="border border-slate-600 p-4 rounded-lg shadow-md"
    >
      <h3 className="text-lg font-semibold">{review.name}</h3>
      <p className="text-sm text-neutral-400">{review.country}</p>
      <p className="text-sm text-neutral-400">{review.time}</p>
      <div className="flex items-center">
        <p className="text-yellow-400">
          {"★".repeat(Math.floor(review.rating))}
        </p>
        <p className="text-neutral-400 ml-2">{review.rating}</p>
      </div>
      <p className="mt-2 text-xs">{review.review}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const [visibleReviews, setVisibleReviews] = useState(6);

  const showMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3);
  };

  return (
    <div id="Testimonials" className="text-neutral-200 lg:mt-20">
      <h1 className="text-neutral-400">Testimonials</h1>
      <hr className="mb-6 border-slate-600 shadow-md" />
      <div className="mb-8 flex lg:flex-row flex-col gap-4 justify-between align-center">
        <h2 className="text-xl lg:text-3xl font-bold">
          Check out Clients Response to my work
        </h2>
        <button className=" flex flex-row self-center mb-5 bg-blue-800 text-white rounded-2xl shadow-md shadow-slate-600 px-2 py-1 gap-2">
          <a href="https://www.fiverr.com/users/mkamran306/">
            My Fiverr Profile
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
      <Counter />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <Review key={index} review={review} index={index} />
        ))}
      </div>
      {visibleReviews < reviews.length && (
        <div className="flex justify-center align-center">
          <button
            onClick={showMoreReviews}
            className="mb-5 bg-blue-800 text-neutral-200 rounded-2xl shadow-md shadow-slate-600 px-2 py-1 mt-5 text-sm "
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
