import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#page2',
                start: 'top bottom',
                pinSpacer: true,
                scrub: true,
                // markers: true,
            }
        })
            .fromTo('#page2', {
                y: '-100vh'
            }, {
                position: 'fixed'
            })

    })


    return (
        <div
            className="bg-black w-screen hdchrelative overflow-hidden"
            id="page2"
        >
            <div className='w-screen h-[100vh]'
                id='page2-content'>
            </div>
        </div>
    );
};

export default Page2;
