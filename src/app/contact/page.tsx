"use client";
import React, { FormEvent, useState } from "react";
import { Meteors } from "@/components//ui/meteors";

function page() {
  return (
    <div className="bg-gray-900 h-[40em] w-full">
      <Meteors number={20} />
      <div className="pt-36 relative">
      {" "}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We are here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form  className="space-y-4 mt-4">
          <input
            type="email"
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-800 placeholder:text-neutral-600"
            required
          />
          <textarea
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-800 placeholder:text-neutral-600"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default page