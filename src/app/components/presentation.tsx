"use client";
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "@/app/my-theme.css";
import Image from "next/image";

import caffeineStructure from "@/app/images/Caffeine_structure.svg.png";
import caffeinePure from "@/app/images/caffeine-pure.jpeg";
import coffeaArabica from "@/app/images/coffea-arabica.jpg";
import camelliaSinensis from "@/app/images/camellia-sinensis.jpeg";
import theobromaCacao from "@/app/images/theobroma-cacao.jpeg";
import chineseTeaHistory from "@/app/images/chinese-tea-history.jpg";
import kaldisGoats from "@/app/images/kaldis-goats.png";
import friedlieb from "@/app/images/friedlieb.png";
import sufi from "@/app/images/sufi.jpeg";
import caffeineActionNormal from "@/app/images/caffeine-action-normal.png";
import caffeineActionWithCaffeine from "@/app/images/caffeine-action-with-caffeine.png";

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
          <h2>What even is Caffeine?</h2>
        </section>
        <section data-auto-animate className="">
          <h2 className="">What even is Caffeine?</h2>
          <div className="flex w-full justify-between gap-4">
            <div>
              <ul>
                <li className="fragment">
                  stimulant of the methylxanthine class
                </li>
              </ul>
            </div>
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
          </div>
        </section>

        <section data-transition="fade" className="">
          <div className="grid w-full grid-cols-3 justify-between">
            <div className="fragment flex flex-col gap-2">
              <p className="m-0 text-left text-[.5em]">Coffea Arabica</p>
              <Image className="m-0" src={coffeaArabica} alt="coffea arabica" />
            </div>
            <div className="fragment flex flex-col gap-2">
              <p className="m-0 text-left text-[.5em]">Camellia Sinensis</p>
              <Image
                className="m-0"
                src={camelliaSinensis}
                alt="camellia sinensis"
              />
            </div>
            <div className="fragment flex flex-col gap-2">
              <p className="m-0 text-left text-[.5em]">Theobroma cacao</p>
              <Image
                className="m-0"
                src={theobromaCacao}
                alt="theobroma cacao"
              />
            </div>
          </div>
        </section>

        <section data-transition="fade" className="">
          <h1 data-id="idk">History</h1>
        </section>
        <section data-transition="zoom-in slide-out">
          <div className="r-stack">
            <h1 className="">🤔</h1>
            <Image
              className="fragment"
              src={chineseTeaHistory}
              alt="chinese tea history"
            />
            <Image className="fragment" src={kaldisGoats} alt="kaldi's goats" />
            <Image className="fragment" src={sufi} alt="sufi coffee" />
            <Image
              className="fragment"
              src={friedlieb}
              alt="friedlieb ferdinand runge"
            />
          </div>
        </section>

        {/* How Caffeine Works in the body */}
        <section data-auto-animate>
          <h2>How caffeine works</h2>
        </section>
        <section data-auto-animate className="">
          <h2>How caffeine works</h2>
          <div className="flex">
            <div className="fragment w-1/2">
              <Image
                className="h-auto w-full object-contain"
                src={caffeineActionNormal}
                alt="normal neuron action"
              />
            </div>
            <div className="fragment w-1/2">
              <Image
                className="h-auto w-full object-contain"
                src={caffeineActionWithCaffeine}
                alt="neuron with caffeine"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
