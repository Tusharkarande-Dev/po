"use client"
import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import Button from "./Button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToUp() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (isBrowser() && window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  useEffect(() => {
    
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <Button
        className={`fixed bottom-8 right-8 rounded-[100%] size-14  z-50  ${isVisible ? 'visible' : 'hidden'}`}
        onClick={scrollToUp}
      >
        <IoIosArrowRoundUp size={45} className="font-black inline-block text-center" />
      </Button>
    </>
  );
};

export default ScrollToTop;
