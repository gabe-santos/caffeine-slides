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
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h1>Caffeine</h1>
          <p>Gabe Santos</p>
        </section>
        <section data-auto-animate>
          <h1 className="r-fit-text">What even is Caffeine?</h1>
        </section>
        <section
          data-auto-animate
          className="flex w-full items-center justify-between gap-4"
        >
          <h1 className="w-full text-left text-7xl">What even is Caffeine?</h1>

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
