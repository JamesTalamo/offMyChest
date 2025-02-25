import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const Page5 = () => {

    const cards3 = [

        { id: "#card-16", endTranslateX: -1000, rotate: -30 },
        { id: "#card-17", endTranslateX: -1000, rotate: 45 },
        { id: "#card-18", endTranslateX: -1000, rotate: -30 },
        { id: "#card-19", endTranslateX: -1000, rotate: 45 },
        { id: "#card-20", endTranslateX: -1000, rotate: -30 },
        { id: "#card-21", endTranslateX: -1000, rotate: 45 },
        { id: "#card-22", endTranslateX: -1000, rotate: -30 },
    ]

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#page5trigger',
                start: 'top top',
                end: '+=15000 bottom',
                // pinSpacing: true,
                pin: '#page5trigger',
                scrub: 1,
                // markers: true
            }
        })
            .to('#page5-content', {
                duration: 1,
                right: '100%',
                ease: 'power3.inOut'

            })
            .to('#page5trigger', {
                backgroundColor: 'white'
            })


        cards3.forEach((card) => {
            ScrollTrigger.create({
                trigger: card.id,
                start: "top top",
                end: '+=9000',
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(card.id, {
                        x: `${card.endTranslateX * self.progress * 2}%`,
                        rotate: `${card.rotate * self.progress * 2}`,
                        duration: 0.5,
                        ease: 'power3.inOut'
                    })
                }
            })
        })
    })

    return (
        <div className='bg-white w-[16000px] h-dvh overflow-hidden' id='page5trigger'>
            <div className=' h-dvh w-full absolute flex items-center justify-center' id='page5-content'>

                <div className='w-[300px] h-[300px] relative left-[20%] top-[15%] overflow-hidden rounded-lg whitespace-nowrap' id='card-16'>
                    <img
                        src='assets/page5/page5-img1.png'
                        className='object-cover w-[300px] h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[30%] top-[-20%] overflow-hidden rounded-lg' id='card-17'>
                    <img
                        src='assets/page5/page5-img2.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[40%] top-[20%] overflow-hidden rounded-lg' id='card-18'>
                    <img
                        src='assets/page5/page5-img3.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[50%] top-[-20%] overflow-hidden rounded-lg' id='card-19'>
                    <img
                        src='assets/page5/page5-img4.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[60%] top-[-25%] overflow-hidden rounded-lg' id='card-20'>
                    <img
                        src='assets/page5/page5-img5.png'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[70%] top-[-10%] overflow-hidden rounded-lg' id='card-21'>
                    <img
                        src='assets/page5/page5-img6.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[75%] top-[20%] overflow-hidden rounded-lg' id='card-22'>
                    <img
                        src='assets/page5/page5-img7.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>

                <div className='text-[350px] font-bold text-black p-[25px] font-spectral  w-[auto] whitespace-nowrap'>
                    Knowing that my future gets <span className='font-lobster'>brighter</span> as the <span className='font-lobster'>days</span> go by. <span className='font-lobster'>Faith</span> will guide everything.
                </div>
            </div>
        </div>
    )
}

export default Page5
