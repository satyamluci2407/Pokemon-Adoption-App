import { useEffect, useState } from "react";

export default function useMediaQuery (mediaQueryString) {

  const [matches, setMatches] = useState(false);

  const mql = window.matchMedia(mediaQueryString);

  useEffect(() => {

    setMatches(mql.matches);

    const documentChangeHandler = (e) => {
      setMatches(e.matches);
    }

    mql.addEventListener('change', documentChangeHandler);

    return () => {
      mql.removeEventListener('change', documentChangeHandler);
    }

  }, [mql]);

  return matches;

}
