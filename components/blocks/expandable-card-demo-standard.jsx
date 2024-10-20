import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideClick from "../hooks/useOutsideClick";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const [locationFilter, setLocationFilter] = useState(""); // State for filtering by location
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  // Filtered cards based on the selected location
  const filteredCards = locationFilter
    ? cards.filter((card) => card.location === locationFilter)
    : cards;

  return (
    <>
      <div className="bg-white flex justify-center gap-4 mb-4 m-4">
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:text-black rounded-md "
        >
          <option value="">All Locations</option>
          <option value="Thane">Thane</option>
          <option value="Andheri">Andheri</option>
          <option value="Chembur">Chembur</option>
          <option value="Mulund">Mulund</option>
        </select>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 shadow-lg grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-lg"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                    <motion.p className="text-neutral-500 dark:text-neutral-300">
                      Location: {active.location}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-gradient-to-r from-gray-800 to-gray-900 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {filteredCards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer shadow-lg"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
                <motion.p className="text-neutral-500 dark:text-neutral-300">
                  Location: {card.location}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Beach Cleanup Event",
    title: "Clean Our Oceans",
    location: "Andheri",
    src: "https://images.unsplash.com/photo-1537084642907-629340c7e59c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "Join Now",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Join our beach cleanup initiative to help reduce plastic waste and
          protect marine life. Volunteers will help remove litter from the
          shoreline, contributing to a cleaner environment and raising awareness
          about the impact of pollution on our oceans. Bring friends, family, and
          your passion for protecting the Earth!
        </p>
      );
    },
  },
  {
    description: "Community Tree Planting",
    title: "Plant for the Future",
    location: "Chembur",
    src: "https://plus.unsplash.com/premium_photo-1658506799688-b5a1f54e3c7e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "Participate",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Help us combat deforestation by planting trees in your community. This
          event is an excellent opportunity to give back to nature and improve
          local air quality. Every tree planted makes a significant contribution
          to reducing carbon emissions and creating a sustainable environment.
        </p>
      );
    },
  },
  {
    description: "Bike to Work Day",
    title: "Pedal for the Planet",
    location: "Andheri",
    src: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "Sign Up",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Ditch the car and bike to work! Join us in reducing carbon emissions by
          participating in a citywide event encouraging eco-friendly
          transportation. It's a great way to promote a healthy lifestyle while
          also contributing to a cleaner planet. Track your progress and see how
          much carbon you've saved!
        </p>
      );
    },
  },
  {
    description: "Sustainable Gardening Workshop",
    title: "Green Thumb Initiative",
    location: "Thane",
    src: "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Learn how to grow your own food sustainably with our gardening
          workshop. This hands-on event teaches you about composting, water
          conservation, and planting techniques that benefit both you and the
          planet. Ideal for anyone looking to reduce their environmental impact
          through sustainable living.
        </p>
      );
    },
  },
];
