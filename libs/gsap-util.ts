import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
}

export { gsap, useGSAP, ScrollTrigger, SplitText };
