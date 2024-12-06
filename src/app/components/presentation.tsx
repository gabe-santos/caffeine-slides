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
import drinkingCoffee from "@/app/images/drinking-coffee.jpg";
import exercise from "@/app/images/exercise.jpg";
import caffeineInfo from "@/app/images/caffeine-action-infograph.webp";
import tired from "@/app/images/tired.jpg";
import caffeineTiming from "@/app/images/caffeine-timing.webp";
import coffeeCup from "@/app/images/cup-of-coffee.jpg";
import nap from "@/app/images/nap.jpg";
import limitless from "@/app/images/limitless.gif";
import coffeeRoasting from "@/app/images/coffee-roasting.jpeg";
import Link from "next/link";

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
          <p>☕</p>
          <p>Gabe Santos</p>
        </section>

        <section>
          <h2>Today</h2>
          <p>What is Caffeine?</p>
          <p>How does it work?</p>
          <p>How can we use it effectively?</p>
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

        {/* Effects of caffeine */}
        <section data-auto-animate data-transition="slide-in" className="">
          <h2>Effects of Caffeine</h2>
        </section>
        <section data-auto-animate className="">
          <h2 className="text-5xl">Effects of Caffeine</h2>
          <h4 className="text-4xl">Benefits</h4>
          <div className="my-12 flex w-full justify-between gap-6">
            <div className="w-1/2">
              <ul className="space-y-4 text-4xl">
                <li className="fragment">Reduce drowsiness and fatigue</li>
                <li className="fragment">Increase alertness and wakefulness</li>
              </ul>
            </div>
            <div data-id="img-div" className="w-1/2">
              <Image
                className="h-auto w-full rounded-xl"
                src={drinkingCoffee}
                alt="girl drinking coffee"
              />
            </div>
          </div>
        </section>
        <section data-auto-animate className="">
          <h2 className="text-5xl">Effects of Caffeine</h2>
          <h4 className="text-4xl">Benefits</h4>
          <div className="my-12 flex w-full justify-between gap-6">
            <div data-id="img-div" className="w-1/2">
              <Image
                className="h-auto w-full rounded-xl"
                src={exercise}
                alt="girl exercising"
              />
            </div>
            <div className="w-1/2">
              <ul className="space-y-4 text-3xl">
                <li className="fragment">
                  Improved reaction time, concentration and motor coordination
                </li>
                <li className="fragment">Stimulates lipolysis</li>
                <li className="fragment">Potentially improves recovery</li>
                <li className="fragment">
                  Enhances contractile force of muscles
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <Image src={caffeineInfo} alt="caffeine infographic" />
        </section>
        <section>
          <h2 className="text-5xl">Effects of Caffeine</h2>
          <h4 className="text-4xl">Adverse Effects</h4>
          <div className="my-12 flex w-full justify-between gap-6">
            <div className="w-1/2">
              <ul className="space-y-4 text-3xl">
                <li className="fragment">Sleep disruption</li>
                <li className="fragment">Anxiety</li>
                <li className="fragment">Digestive issues</li>
                <li className="fragment">
                  Increased heart rate and blood pressure
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <Image src={tired} alt="tired man" />
            </div>
          </div>
        </section>

        {/* Optimizing Caffeine */}
        <section data-transition="fade-out">
          <h1>Optimizing Caffeine</h1>
        </section>
        <section data-transition="fade">
          <h1>Timing</h1>
        </section>
        <section className="flex justify-center">
          <Image src={caffeineTiming} alt="caffeine timing" />
        </section>
        <section>
          <h2>The effects of caffeine typically last around 4 to 6 hours</h2>
        </section>

        {/* <section data-auto-animate>
          <h2 data-id="coffee-nap-h2">The Coffee Nap</h2>
        </section> */}
        <section data-auto-animate className="flex flex-col">
          <h2 className="fragment" data-id="coffee-nap-h2">
            The Coffee Nap
          </h2>
          <h4 className="fragment">aka</h4>
          <h2 className="fragment" data-id="nappuccino">
            &quot;The Nappuccino&quot;
          </h2>
        </section>
        <section data-auto-animate>
          <h2 data-id="nappuccino">The Nappuccino</h2>
          <h4>A gamechanger</h4>
          <div className="mt-12 flex items-center gap-6">
            <div className="fragment flex aspect-square w-full items-center justify-center overflow-hidden">
              <Image
                className="object-cover"
                src={coffeeCup}
                alt="cup of coffee"
              />
            </div>
            <div className="fragment">+</div>
            <div className="fragment flex aspect-square w-full items-center justify-center overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                src={nap}
                alt="nap"
              />
            </div>
            <div className="fragment">=</div>
            <div className="fragment flex aspect-square w-full items-center justify-center overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                src={limitless}
                alt="limitless"
              />
            </div>
          </div>
        </section>

        <section>
          <h2>L-theanine</h2>
          <div className="flex gap-6">
            <div className="w-1/2">
              <ul className="space-y-4 text-4xl">
                <li>amino acid that promotes relaxation and focus</li>
                <li>goes well with caffeine</li>
                <li>found in tea leaves</li>
              </ul>
            </div>
            <div className="w-1/2">
              <Image src={camelliaSinensis} alt="tea leaves" />
            </div>
          </div>
        </section>

        <section>
          <h2>Avoiding Tolerance</h2>
          <ul>
            <li className="fragment">It is possible to build a tolerance</li>
            <li className="fragment">Limit to under 400mg per day</li>
            <li className="fragment">Take a day off</li>
          </ul>
        </section>

        {/* Misconceptions */}
        <section>
          <h1>Misconceptions & FAQ&apos;s</h1>
        </section>
        <section>
          <h2>&quot;X is more &apos;energizing&apos; than Y&quot;</h2>
        </section>
        <section>
          <table className="p-16 text-4xl">
            <thead>
              <tr>
                <th>Drink</th>
                <th>Caffeine (mg/fl oz)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Espresso</td>
                <td align="right">60</td>
              </tr>
              <tr>
                <td>Cold Brew</td>
                <td align="right">16</td>
              </tr>
              <tr>
                <td>Drip Coffee</td>
                <td align="right">14</td>
              </tr>
              <tr>
                <td>Tea</td>
                <td align="right">4-12</td>
              </tr>
              <tr>
                <td>Coca-Cola</td>
                <td align="right">3</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section data-transition="fade-out">
          <p className="fragment">
            Espresso: 60mg/fl oz x 1.5oz = <strong>90mg</strong>
          </p>
          <p className="fragment">
            Drip Coffee: 14mg/fl oz x 8oz = <strong>112mg</strong>
          </p>
        </section>
        <section data-transition="fade-in">
          <h2>Factors</h2>
          <p className="fragment">Concentration</p>
          <p className="fragment">Total volume</p>
          <p className="fragment">Rate of consumption</p>
        </section>
        <section>
          <h3>&quot;Caffeine dehydrates you&quot;</h3>
          <ul>
            <li>mild diuretic</li>
            <li>usually offset by liquid in beverage</li>
          </ul>
        </section>
        <section data-auto-animate>
          <h3>&quot;There&apos;s No Caffeine in Decaf&quot;</h3>
        </section>
        <section data-auto-animate>
          <h3 className="text-5xl">
            &quot;There&apos;s No Caffeine in Decaf&quot;
          </h3>
          <ul className="text-4xl">
            <li className="fragment">There are tiny amounts of caffeine</li>
            <li className="fragment">Decaf process only removes around 97%</li>
          </ul>
        </section>

        <section data-auto-animate>
          <h2>&quot;Dark roast is &apos;stronger&apos;&quot;</h2>
        </section>
        <section data-auto-animate>
          <h2 className="text-5xl">
            &quot;Dark roast is &apos;stronger&apos;&quot;
          </h2>
          <div className="flex gap-6">
            <div className="w-1/2">
              <ul className="space-y-4 text-4xl">
                <li className="fragment">Dark roast has bolder flavors</li>
                <li className="fragment">
                  Roasted longer so more caffeine is cooked off
                </li>
                <li className="fragment">Difference is negligible</li>
              </ul>
            </div>
            <div className="w-1/2">
              <Image src={coffeeRoasting} alt="coffee roasting" />
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Takeaways</h2>
          <ul>
            <li className="fragment">Be mindful of timing</li>
            <li className="fragment">Avoid consuming a lot at once</li>
            <li className="fragment">Understand concentration vs volume</li>
            <li className="fragment">Take time off</li>
            <li className="fragment">Go do something productive</li>
          </ul>
        </section>

        <section>
          <h1>Questions?</h1>
          <p className="text-3xl">
            This presentation was built with Next.js. The code can be viewed{" "}
            <Link href={"https://github.com/gabe-santos/caffeine-slides"}>
              here
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
