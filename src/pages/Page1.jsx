import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const frameCount = 70; // Frames of the images.

    const setCanvasSize = () => {
        if (canvasRef.current) {
            console.log('Setting canvas size:', window.innerWidth, window.innerHeight);
            canvasRef.current.width = window.innerWidth;  // Set width to 100vw
            canvasRef.current.height = window.innerHeight; // Set height to 100vh
        }
    };

    useEffect(() => {
        const loadImages = () => {
            const loadedImages = [];
            for (let i = 0; i < frameCount; i++) {
                const img = new Image();

                //IMAGES PLACEHOLDER, Any Image can do! (4K if possible for best results)
                img.src = `assets/imgSequence/asset1/mixkit-black-cat-with-yellow-eyes-1539-4k_${(i + 1).toString().padStart(3, '0')}.jpg`;

                img.onload = () => {
                    loadedImages.push(img);
                    if (loadedImages.length === frameCount) {
                        setImages(loadedImages);
                    }
                };
            }
        };

        loadImages();
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        return () => window.removeEventListener('resize', setCanvasSize);
    }, []);

    // GSAP animation with scroll trigger
    useEffect(() => {
        if (images.length > 0 && canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            const imagesFrame = { frame: 0 };

            gsap.to(imagesFrame, {
                frame: frameCount - 1,
                snap: 'frame',
                scrollTrigger: {
                    trigger: "#page1trigger",
                    start: "top top",
                    pinSpacer: true,
                    pin: true,
                    scrub: 2,
                    // markers: true,
                    onEnter: () => {
                        // Disable horizontal overflow when pinned
                        document.body.style.overflowX = 'hidden';
                    },
                    // onLeaveBack: () => {
                    //     // Re-enable overflow when leaving the section
                    //     document.body.style.overflowX = 'auto';
                    // },
                },
                onUpdate: () => {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(images[imagesFrame.frame], 0, 0, canvas.width, canvas.height);
                }
            });
        }
    }, [images]);

    return (
        <section id="page1trigger" className="bg-black relative w-screen overflow-x-hidden">
            <div className="canvas-container w-screen h-screen relative overflow-x-hidden">
                <canvas ref={canvasRef} />
            </div>
        </section>
    );
};

export default Page1;
