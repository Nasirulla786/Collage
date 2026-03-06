import React from "react";

import oath from "../../public/oath.jpeg"
import aws from "../../public/aws.jpeg"

type EventType = {
  id: number;
  title: string;
  date: string;
  description: string;
  venue: string;
  image: string;
};

const events: EventType[] = [
  {
    id: 1,
    title: "UDAAN Inauguration Ceremony",
    date: "12 August 2024",
    venue: "CB-105",
    description:
      "The grand opening of UDAAN – The Endless Journey with inspiring speeches and vision sharing.",
    image: oath,
  },
  {
    id: 2,
    title: "AWS Innovation Session by Technical Guftgu",
    date: "25 September 2024",
    venue: "CB-105",
    description:
      "An interactive tech session focusing on innovation, startups, and future technologies.",
    image: aws,
  },

];

const Happen: React.FC = () => {
  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-3xl text-white font-bold text-center mb-6">
        📸 Events That Happened
      </h1>

      <p className="text-center text-white max-w-2xl mx-auto mb-10">
        Memories from <strong>UDAAN – The Endless Journey</strong>.
        Every event tells a story of growth, learning, and celebration.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Event Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-fit object-cover"
            />

            {/* Event Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-1">
                {event.title}
              </h2>

              <p className="text-sm text-gray-500">
                📅 {event.date} &nbsp; | &nbsp; 📍 {event.venue}
              </p>

              <p className="text-gray-700 text-sm mt-3">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Happen;
