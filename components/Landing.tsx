"use client";

import React, { useState } from "react";

export default function Landing() {
  const [debugMode, setDebugMode] = useState(false);

  const regularStyle = {
    backgroundImage:
      "linear-gradient(#eee 1px, transparent 1px), linear-gradient(90deg, #eee 1px, transparent 1px)",
    backgroundSize: "20px 20px",
  };

  const debugStyle = {
    background: "white",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    lineHeight: "1.6",
  };

  return (
    <div
      className={`min-h-screen ${debugMode ? "font-sans" : "font-mono"}`}
      style={debugMode ? debugStyle : regularStyle}
    >
      <div className={debugMode ? "" : "max-w-4xl mx-auto p-4"}>
        <header className="mb-8">
          <div className={debugMode ? "" : "border border-black p-2 inline-block"}>
            <h1 className={`${debugMode ? "text-3xl font-bold" : "text-2xl"} mb-2`}>
              crackedsf
            </h1>
            <div>monthly meetups for cracked ai/ml engineers in sf</div>
          </div>
        </header>

        <div className={`${debugMode ? "fixed top-4 right-4" : "absolute top-4 right-4"}`}>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={debugMode}
              onChange={() => setDebugMode(!debugMode)}
              className="sr-only"
            />
            <div
              className={`w-4 h-4 border border-black mr-2 ${
                debugMode ? "bg-black" : "bg-white"
              }`}
            ></div>
            debug mode
          </label>
        </div>

        <main>
          {/* About Section */}
          <section className="mb-8">
            <h2
              className={`${
                debugMode ? "text-2xl font-bold" : "text-xl font-bold underline"
              } mb-2`}
            >
              about crackedsf
            </h2>
            <div className="mb-4">
              crackedsf is dedicated to advanced ai/ml engineering in the sf/bay area.
              our mission is to tackle challenging problems and foster continuous learning.
            </div>
            <div>
              we feature top-tier talks by industry leaders/cracked engineers, focusing on
              the latest advancements in ai/ml engineering and their practical applications.
            </div>
          </section>

          {/* Topics Section */}
          <section className="mb-8">
            <h2
              className={`${
                debugMode ? "text-2xl font-bold" : "text-xl font-bold underline"
              } mb-2`}
            >
              topics we crack
            </h2>
            <ul
              className={`${
                debugMode ? "list-disc" : "list-disc list-inside"
              } pl-4`}
            >
              <li>large language models and scaling challenges</li>
              <li>vector databases architecture and optimization</li>
              <li>distributed ai training and inference</li>
              <li>ml infrastructure and optimization</li>
              <li>advanced nlp and computer vision techniques</li>
              <li>cutting-edge ml algorithms and architectures</li>
              <li>novel llm-empowered interfaces</li>
              <li>ai/ml system design and engineering</li>
              <li>ai agent design and implementation</li>
              <li>solving internet-scale problems</li>
            </ul>
          </section>

          {/* Active Upcoming Event */}
          <section className="mb-8">
            <div className="border border-gray-300 p-4 rounded-lg shadow-md flex flex-col sm:flex-row">
              <img
                src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/u5/636dd22d-b1e0-415e-97cc-c9bdcc29f211.png"
                alt="Chunking Deep Dive Cover"
                className="w-full sm:w-1/2 rounded mb-4 sm:mb-0 sm:mr-4"
              />
              <div>
                <h2 className={`${debugMode ? "text-2xl font-bold" : "text-xl font-bold mt-4"}`}>
                  Chunking Deep Dive: Technical Best Practices for RAG
                </h2>
                <p className="mt-2 text-sm text-gray-600">Feb 27, 5:30 PM - 9:00 PM</p>
                <p className="mt-1 text-sm text-gray-600">Trellis Coworking, SF</p>
                <div className="mt-4 overflow-x-auto">
                  <a href="https://lu.ma/4vm30ufb" className="underline text-[#660099] break-all">https://lu.ma/4vm30ufb</a>
                </div>
              </div>
            </div>
          </section>

          {/* Past Events Section */}
          <section className="mb-8">
            <h2
              className={`${
                debugMode ? "text-2xl font-bold" : "text-xl font-bold underline"
              } mb-2`}
            >
              Past Events
            </h2>
            <div className="space-y-8">
              <div className="opacity-50 pointer-events-none">
                <h3 className="mb-2">
                  Archived: optimizing rag: leveraging re-ranking and llms for superior results
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-black">
                    <tbody>
                      <tr>
                        <td className="border border-black p-2">date</td>
                        <td className="border border-black p-2">dec 12, 5:30-8:30pm</td>
                      </tr>
                      <tr>
                        <td className="border border-black p-2">location</td>
                        <td className="border border-black p-2">
                          375 alabama st suite 410, san francisco, ca
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-black p-2">link</td>
                        <td className="border border-black p-2">
                          <a
                            href="https://lu.ma/35kxjlh7"
                            className="underline text-[#660099]"
                          >
                            https://lu.ma/35kxjlh7
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-black p-2">agenda</td>
                        <td className="border border-black p-2">
                          <>
                            5:30 pm - 6:00 pm: registration and networking
                            <br />
                            6:00 pm - 7:15 pm: technical presentations
                            <br />
                            7:15 pm - 9:00 pm: q&a and extended networking
                          </>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="opacity-50 pointer-events-none">
                <h3 className="mb-2">
                  Archived: previous meetup: embeddings at scale
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-black">
                    <tbody>
                      <tr>
                        <td className="border border-black p-2">date</td>
                        <td className="border border-black p-2">sep 19, 5:45-8:45pm</td>
                      </tr>
                      <tr>
                        <td className="border border-black p-2">link</td>
                        <td className="border border-black p-2 text-gray-500">
                          <span className="line-through">
                            <a
                              href="https://lu.ma/roa2ak6k"
                              className="underline text-[#660099]"
                            >
                              https://lu.ma/roa2ak6k
                            </a>
                          </span>
                          <br />
                          <span>(this meetup has already passed)</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-black p-2">talks</td>
                        <td className="border border-black p-2">
                          charles frye on embedding spaces, amog kamsetty on llm optimization, bin fan on ml caching, michael ryaboy on temporal similarity search
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div>
              we aim for monthly meetups. the format may evolve as we learn what works best for our community of cracked engineers.
            </div>
          </section>

          <section className="mb-8">
            <h2
              className={`${
                debugMode ? "text-2xl font-bold" : "text-xl font-bold underline"
              } mb-2`}
            >
              join our mailing list or apply to speak
            </h2>
            <div className="mb-4">
              stay updated with our latest events and news. join our mailing list and never miss an update!
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSecmoXqyezFWJ-lcfW36fr_sU9KQQpZSfuu-mC2wzEBDrnm8w/viewform?usp=sf_link"
              className="underline text-[#660099]"
            >
              sign up here
            </a>
          </section>
        </main>

        <footer
          className={`mt-8 pt-4 ${
            debugMode ? "border-t border-gray-300" : "border-t border-black"
          } text-sm`}
        >
          <div>
            crackedsf v0.1.0 | powered by caffeine and curiosity
          </div>
          <div>
            inspired by{" "}
            <a href="https://www.sfsystems.xyz/" className="underline">
              sfsystems
            </a>
            , design inspired by{" "}
            <a
              href="https://owickstrom.github.io/the-monospace-web/"
              className="underline"
            >
              the monospace web
            </a>
          </div>
          <div className="mt-2">
            <a href="https://lu.ma/roa2ak6k" className="underline mr-4">
              rsvp for next meetup
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
