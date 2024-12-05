"use client";
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "@/app/my-theme.css";
import Image from "next/image";

import caffeineStructure from "@/app/images/Caffeine_structure.svg.png";
import caffeinePure from "@/app/images/caffeine-pure.jpeg";

export default function Presentation() {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      // other config options
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
        console.log(e);
      }
    };
  }, []);

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h1>Caffeine</h1>
          <p>Gabe Santos</p>
        </section>
        <section data-auto-animate>
          <h1 className="text-left">What even is Caffeine?</h1>
        </section>
        <section
          data-auto-animate
          className="flex border items-center justify-between w-full gap-4"
        >
          <h1 className="text-left text-7xl w-full">What even is Caffeine?</h1>

          <div className="r-stack w-full">
            <Image
              className="fragment"
              src={caffeineStructure}
              alt="caffeine chemical structure"
            />
            <Image
              className="fragment"
              src={caffeinePure}
              alt="caffeine chemical structure"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
