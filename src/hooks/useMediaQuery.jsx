/* ------------- check if you match a breakpoint of a media size ------------ */
import { useState, useEffect } from "react";

const useMediaQuery = query => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchesMedia(query)
        if(media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);

        return () => window.removeEventListener('resize', listener)
    }, [matches, query])

    return matches
}

export default useMediaQuery