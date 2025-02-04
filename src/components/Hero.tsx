"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OrderForm from "./OrderForm";
import { buttonVariants } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";


export default function Hero() {


    const [mainImage, setMainImage] = useState("/1.jpg");

    // Function to change the main image when a thumbnail is clicked
    const handleThumbnailClick = (src: string) => {
        setMainImage(src);
    }

    return (

        <div className="h-auto w-full bg-gradient-to-r from-gray-400 to-sky-700 flex flex-col sm:flex-row  justify-around items-center py-10 px-4 sm:px-6 md:px-12">
            {/* Image Section */}
            <div className="flex flex-col items-center sm:items-start w-full sm:w-1/3 mb-6 sm:mb-0">
                <div className="md:w-full sm:w-1/2 mb-4">
                    <Image src={mainImage} alt="RealMaddridCream" width={400} height={300} className="h-auto w-full object-cover" />
                </div>
                <div className="flex space-x-3 mb-2 md:ml-5 sm:mb-0 sm:ml-0">
                    <div onClick={() => handleThumbnailClick("/2.jpeg")} className="cursor-pointer">
                        <Image src={"/2.jpeg"} alt="pic1" height={100} width={100} className="rounded-md" />
                    </div>
                    <div onClick={() => handleThumbnailClick("/3.jpeg")} className="cursor-pointer">
                        <Image src={"/3.jpeg"} alt="pic2" height={100} width={100} className="rounded-md" />
                    </div>
                    <div onClick={() => handleThumbnailClick("/4.jpeg")} className="cursor-pointer">
                        <Image src={"/4.jpeg"} alt="pic3" height={100} width={100} className="rounded-md" />
                    </div>
                    <div onClick={() => handleThumbnailClick("/5.png")} className="cursor-pointer">
                        <Image src={"/5.png"} alt="pic 4" height={100} width={100} className="rounded-md" />
                    </div>
                </div>
            </div>

            {/* Product Info Section */}
            <div className="w-full sm:w-1/3 text-center sm:text-left sm:ml-6 mb-6 sm:mb-0">
                <h1 className=" font-bold text-2xl sm:text-3xl text-white">Cream ya Prostate </h1>
                <p className="text-xl text-gray-300 mt-2">
                Cream ya Prostate ni dawa ya juu iliyoundwa kusaidia afya ya kibofu. Tofauti na virutubisho vya kumeza, inatumika moja kwa moja kwenye ngozi.                </p>
                <h2 className="text-white font-bold text-xl sm:text-2xl mt-4">PRICE</h2>


                <div className="mt-4">
                    <p className="font-bold text-lg ">Bei: 3999 KSH</p>
                    <p className="font-bold italic text-lg  animate-flash shadow-lg">Nunua zaidi ya 1 na upate punguzo kubwa </p>
                </div>

                <h2 className="text-white font-bold mt-4 text-xl">MAELEZO:</h2>
                <p className="text-gray-300 mt-2">
                Ufanisi wa cream ya prostate hutoka kwa viungo vyake vya kazi. Baadhi ya vipengele vya kawaida ni pamoja na:
                Saw Palmetto: Hupunguza dalili za kuongezeka kwa tezi dume. <br />
                Lycopene: Inatoa mali ya antioxidant.<br />
                Zinki: Muhimu kwa kazi ya kinga na udhibiti wa homoni.<br/>
                *Marudio ya kukojoa/haraka ya kukojoa/dysuria..<br/>
                *Maisha ya kutofautiana kati ya mume na mke..
                </p>

                <Link href={'https://wa.me/qr/AR43EYIELKAZL1'} className={buttonVariants({ variant: "outline" })}><FaWhatsapp />Customer Support</Link>

            </div>



            <OrderForm />
        </div>

    );
}
