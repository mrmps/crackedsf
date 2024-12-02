"use client";

import React, { useState } from "react";
import { LowercaseWrapper } from "./lowercase-wrapper";

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
          <div
            className={debugMode ? "" : "border border-black p-2 inline-block"}
          >
            <h1
              className={`${
                debugMode ? "text-3xl font-bold" : "text-2xl"
              } mb-2`}
            >
              crackedsf
            </h1>
            <div>
              monthly meetups for cracked ai/ml engineers in sf
            </div>
          </div>
        </header>

        <div
          className={`${
            debugMode ? "fixed top-4 right-4" : "absolute top-4 right-4"
          }`}
        >
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
            <LowercaseWrapper>debug mode</LowercaseWrapper>
          </label>
        </div>

        <main>
          <section className="mb-8">
            <h2
              className={`${
                debugMode ? "text-2xl font-bold" : "text-xl font-bold underline"
              } mb-2`}
            >
              <LowercaseWrapper>about crackedsf</LowercaseWrapper>
            </h2>
            <div className="mb-4">
              <LowercaseWrapper>
                crackedsf is dedicated to advanced ai/ml engineering in the
                sf/bay area. our mission is to tackle challenging problems and
                foster continuous learning.
              </LowercaseWrapper>
            </div>
            <div>
              <LowercaseWrapper>
                we feature top-tier talks by industry leaders/cracked engineers,
                focusing on the latest advancements in ai/ml engineering and
                their practical applications.
              </LowercaseWrapper>
            </div>
          </section>

          <section className="mb-8">
            <h2
              className={`${
                debugMode ? "text-2xl font-bold" : "text-xl font-bold underline"
              } mb-2`}
            >
              <LowercaseWrapper>topics we crack</LowercaseWrapper>
            </h2>
            <ul
              className={`${
                debugMode ? "list-disc" : "list-disc list-inside"
              } pl-4`}
            >
              <li>
                <LowercaseWrapper>
                  large language models and scaling challenges
                </LowercaseWrapper>
              </li>
              <li>
                <LowercaseWrapper>
                  vector databases architecture and optimization
                </LowercaseWrapper>
              </li>
              <li>
                <LowercaseWrapper>
                  distributed ai training and inference
                </LowercaseWrapper>
              </li>
              <li>
                <LowercaseWrapper>
                  ml infrastructure and optimization
                </LowercaseWrapper>
              </li>
              <li>
                <LowercaseWrapper>
                  advanced nlp and computer vision techniques
                </LowercaseWrapper>
              </li>
              <li>
                <LowercaseWrapper>
                  cutting-edge ml algorithms and architectures
                </LowercaseWrapper>
              </li>
              <li>
                <LowercaseWrapper>
                  novel llm-empowered interfaces
                </LowercaseWrapper>
              </li>
              <li>
                <LowercaseWrapper>
                  ai/ml system design and engineering
                </LowercaseWrapper>
              </li>
              <li>
                <LowercaseWrapper>
                  ai agent design and implementation
                </LowercaseWrapper>
              </li>
              <li>
                <LowercaseWrapper>
                  solving internet-scale problems
                </LowercaseWrapper>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className={`${
                debugMode ? "text-2xl font-bold" : "text-xl font-bold underline"
              } mb-2`}
            >
              <LowercaseWrapper>upcoming meetup: optimizing rag: leveraging re-ranking and llms for superior results
              </LowercaseWrapper>
            </h2>
            <table className="w-full border-collapse border border-black">
              <tbody>
                <tr>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>date</LowercaseWrapper>
                  </td>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>dec 12, 5:30-8:30pm</LowercaseWrapper>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>location</LowercaseWrapper>
                  </td>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>375 alabama st suite 410, san francisco, ca</LowercaseWrapper>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>link</LowercaseWrapper>
                  </td>
                  <td className="border border-black p-2">
                    <a href="https://forms.fillout.com/t/kfN2K6maXQus" className="underline text-[#660099]">
                      <LowercaseWrapper>
                      https://lu.ma/35kxjlh7
                      </LowercaseWrapper>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>agenda</LowercaseWrapper>
                  </td>
                  <td className="border border-black p-2">
                    <>
                      <LowercaseWrapper>5:30 pm - 6:00 pm: registration and networking</LowercaseWrapper><br/>
                      <LowercaseWrapper>6:00 pm - 7:15 pm: technical presentations</LowercaseWrapper><br/>
                      <LowercaseWrapper>7:15 pm - 9:00 pm: q&a and extended networking</LowercaseWrapper>
                    </>
                    </td>
                    </tr>
              </tbody>
            </table>
          </section>

          <section className="mb-8">
            <h2
              className={`${
                debugMode ? "text-2xl font-bold" : "text-xl font-bold underline"
              } mb-2`}
            >
              <LowercaseWrapper>previous meetup: embeddings at scale</LowercaseWrapper>
            </h2>
            <table className="w-full border-collapse border border-black">
              <tbody>
                <tr>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>date</LowercaseWrapper>
                  </td>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>sep 19, 5:45-8:45pm</LowercaseWrapper>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>link</LowercaseWrapper>
                  </td>
                  <td className="border border-black p-2">
                    <a href="https://lu.ma/roa2ak6k" className="underline text-[#660099]">
                      <LowercaseWrapper>
                        https://lu.ma/roa2ak6k
                      </LowercaseWrapper>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>talks</LowercaseWrapper>
                  </td>
                  <td className="border border-black p-2">
                    <LowercaseWrapper>
                      charles frye on embedding spaces, amog kamsetty on llm
                      optimization, bin fan on ml caching, michael ryaboy on
                      temporal similarity search
                    </LowercaseWrapper>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          

          <section className="mb-8">
            <div>
              <LowercaseWrapper>
                we aim for monthly meetups. the format may evolve as we learn
                what works best for our community of cracked engineers.
              </LowercaseWrapper>
            </div>
          </section>

          <section className="mb-8">
            <h2
              className={`${
                debugMode ? "text-2xl font-bold" : "text-xl font-bold underline"
              } mb-2`}
            >
              <LowercaseWrapper>join our mailing list or apply to speak</LowercaseWrapper>
            </h2>
            <div className="mb-4">
              <LowercaseWrapper>
                stay updated with our latest events and news. join our mailing
                list and never miss an update!
              </LowercaseWrapper>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSecmoXqyezFWJ-lcfW36fr_sU9KQQpZSfuu-mC2wzEBDrnm8w/viewform?usp=sf_link"
              className="underline text-[#660099]"
            >
              <LowercaseWrapper>sign up here</LowercaseWrapper>
            </a>
          </section>
        </main>

        <footer
          className={`mt-8 pt-4 ${
            debugMode ? "border-t border-gray-300" : "border-t border-black"
          } text-sm`}
        >
          <div>
            <LowercaseWrapper>
              crackedsf v0.1.0 | powered by caffeine and curiosity
            </LowercaseWrapper>
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
              <LowercaseWrapper>rsvp for next meetup</LowercaseWrapper>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
