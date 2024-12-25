import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const Page4 = () => {

    const cards4 = [

        { id: "#card-9", endTranslateX: 1000, rotate: 45 },
        { id: "#card-10", endTranslateX: 1000, rotate: 45 },
        { id: "#card-11", endTranslateX: 1000, rotate: 45 },
        { id: "#card-12", endTranslateX: 1000, rotate: 45 },
        { id: "#card-13", endTranslateX: 1000, rotate: 45 },
        { id: "#card-14", endTranslateX: 1000, rotate: 45 },
        { id: "#card-15", endTranslateX: 1000, rotate: 45 },
    ]

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#page4trigger',
                start: 'top top',
                end: '+=9000 bottom',
                // pinSpacing: true,
                pin: '#page4trigger',
                scrub: 1,
                // markers: true
            }
        })
            .fromTo('#page4-content', {
                right: '100%'
            }, {
                duration: 1,
                right: '0%',
                ease: 'power3.inOut'

            })
            .to('#page4trigger', {
                backgroundColor: 'white'
            })


        cards4.forEach((card) => {
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
        <div className='bg-white w-[16000px] h-dvh overflow-hidden' id='page4trigger'>
            <div className=' h-dvh w-full absolute flex items-center justify-center' id='page4-content'>

                <div className='w-[300px] h-[300px] relative left-[20%] top-[15%] overflow-hidden rounded-lg whitespace-nowrap' id='card-9'>
                    <img
                        src='assets/page4/page4-img1.jpg'
                        className='object-cover w-[300px] h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[30%] top-[-20%] overflow-hidden rounded-lg' id='card-10'>
                    <img
                        src='assets/page4/page4-img2.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[40%] top-[20%] overflow-hidden rounded-lg' id='card-11'>
                    <img
                        src='assets/page4/page4-img3.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[50%] top-[-20%] overflow-hidden rounded-lg' id='card-12'>
                    <img
                        src='assets/page4/page4-img4.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[60%] top-[-25%] overflow-hidden rounded-lg' id='card-13'>
                    <img
                        src='assets/page4/page4-img5.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[70%] top-[-10%] overflow-hidden rounded-lg' id='card-14'>
                    <img
                        src='assets/page4/page4-img6.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[75%] top-[20%] overflow-hidden rounded-lg' id='card-15'>
                    <img
                        src='assets/page4/page4-img7.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>

                <div className='text-[350px] font-bold text-black p-[25px] font-spectral w-[auto] whitespace-nowrap'>
                    do I everything in <span className='font-lobster'>joy</span> feel don't I .not I'm Because 20s? your <span className='font-lobster'>enjoying</span> you Are
                </div>
            </div>
        </div>
    )
}

export default Page4
