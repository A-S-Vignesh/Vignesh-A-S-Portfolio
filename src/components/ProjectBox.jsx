import React from "react";
import Tag from "./Tag";

function ProjectBox({ name, detail, image, gitlink, livedemo, fade }) {
  return (
    <div
      className="card w-full shadow-custom-dark bg-custom-blue transition-transform duration-300 ease-out hover:scale-105 dark:bg-custom-darkblue dark:shadow-custom-light"
      data-aos={fade}
    >
      <figure>
        <img className="border-b-2" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <div className="flex gap-4 p-4">
          <Tag text="React" />
          <Tag text="Tailwind CSS" />
          <Tag text="JavaScript" />
        </div>
        <h2 className="card-title text-sky-500 font-bold text-lg">{name}</h2>
        <p className="text-sm">{detail}</p>
        <div className="card-actions justify-between">
          <a
            href={gitlink}
            className="btn btn-outline btn-info hover:scale-105 transform transition duration-300 ease-in-out"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 480 512"
              height="19"
              width="19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
            </svg>
            Git
          </a>
          <a
            href={livedemo}
            className="btn btn-outline btn-info hover:scale-105 transform transition duration-300 ease-in-out"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeidth="0"
              viewBox="0 0 16 16"
              height="19"
              width="19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"></path>
            </svg>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
