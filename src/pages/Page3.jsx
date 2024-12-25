import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const Page3 = () => {

    const cards3 = [

        { id: "#card-2", endTranslateX: -1000, rotate: -30 },
        { id: "#card-3", endTranslateX: -1000, rotate: 45 },
        { id: "#card-4", endTranslateX: -1000, rotate: -30 },
        { id: "#card-5", endTranslateX: -1000, rotate: 45 },
        { id: "#card-6", endTranslateX: -1000, rotate: -30 },
        { id: "#card-7", endTranslateX: -1000, rotate: 45 },
        { id: "#card-8", endTranslateX: -1000, rotate: -30 },
    ]

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#page3trigger',
                start: 'top top',
                end: '+=15000 bottom',
                // pinSpacing: true,
                pin: '#page3trigger',
                scrub: 1,
                // markers: true
            }
        })
            .to('#page3-content', {
                duration: 1,
                right: '100%',
                ease: 'power3.inOut'

            })
            .to('#page3trigger', {
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
        <div className='bg-black w-[16000px] h-dvh overflow-hidden' id='page3trigger'>
            <div className=' h-dvh w-full absolute flex items-center justify-center' id='page3-content'>

                <div className='w-[300px] h-[300px] relative left-[20%] top-[15%] overflow-hidden rounded-lg whitespace-nowrap' id='card-2'>
                    <img
                        src='assets/page3/page3-img1.jpg'
                        className='object-cover w-[300px] h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[30%] top-[-20%] overflow-hidden rounded-lg' id='card-3'>
                    <img
                        src='assets/page3/page3-img2.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[40%] top-[20%] overflow-hidden rounded-lg' id='card-4'>
                    <img
                        src='assets/page3/page3-img3.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[50%] top-[-20%] overflow-hidden rounded-lg' id='card-5'>
                    <img
                        src='assets/page3/page3-img4.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[60%] top-[-25%] overflow-hidden rounded-lg' id='card-6'>
                    <img
                        src='assets/page3/page3-img5.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[70%] top-[-10%] overflow-hidden rounded-lg' id='card-7'>
                    <img
                        src='assets/page3/page3-img6.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='w-[300px] h-[300px] relative left-[75%] top-[20%] overflow-hidden rounded-lg' id='card-8'>
                    <img
                        src='assets/page3/page3-img7.jpg'
                        className='object-cover w-full h-full'
                    />
                </div>

                <div className='text-[350px] font-bold text-white p-[25px] font-spectral w-[auto] whitespace-nowrap'>
                    {/* I was 20 when I've realized that these constant feeling of sadness was depression. */}
                    I don't know why I'm always <span className='font-lobster'>sad</span>. I'm always <span className='font-lobster'>unhappy</span>. I don't enjoy things any longer.
                </div>
            </div>
        </div>
    )
}

export default Page3
