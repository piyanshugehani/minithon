import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // Check if the ref exists and if the clicked element is outside the ref
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Execute the callback function
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
