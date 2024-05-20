import Title from "@/components/Title/Title";
import { ainboxData } from "@/store/baseData";
import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
    return (
        <section className="pt-[200px] w-full p-4 text-center">
          <div className="h-[600px] w-full mb-16">
          <div className="h-full w-[60%] mx-auto bg-[#fff] rounded-3xl flex items-center justify-center text-[30px] text-white relative">
           {/* <Image src={ainboxData.home.images[0]} alt='24/7' layout="fill" objectFit="cover" /> */}
           {/* <Image src={ainboxData.home.images[0]} alt='24/7' height={600} width={600} /> */}
           <img src={ainboxData.home.images[0]} alt='24/7' height={200} width={600} />
          </div>

          </div>
          <div className="mt-[100px]">
            <h1 className="topic text-[40px] my-6">
              {ainboxData.home.topic}
            </h1>
            <pre className="textDetail ">
              {ainboxData.home.detail}
            </pre>

            <Title text={ainboxData.home.title} />

            <p className="textDetail mb-16"> 
                {ainboxData.home.subtitle}
            </p>

            <div className="w-full flex justify-center">
                <div className="w-full lg:w-[80%] p-8">
                    <div className=" flex flex-wrap items-center justify-center">
                        <div className="h-full w-full lg:w-[30%] flex items-start justify-center">
                            <Image src={ainboxData.home.images[1]} alt='24/7' width={300} height={300}/>
                        </div>
                        <div className="w-full lg:w-[70%] bg-[#F1F9FF] rounded-3xl p-8">
                            <h1 className="topic text-[40px] my-6">
                                {ainboxData.home.details[0]}
                            </h1>
                            <p className="textDetail ">
                                {ainboxData.home.details[1]}
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-wrap items-center justify-center p-10">
                        <div className="w-full lg:w-[70%] bg-[#fffff1] rounded-3xl p-8">
                            <h1 className="topic text-[40px] my-6">
                                {ainboxData.home.details[2]}
                            </h1>
                            <p className="textDetail ">
                                {ainboxData.home.details[3]}
                            </p>
                        </div>
                        <div className="h-full w-full lg:w-[30%] flex items-start justify-center">
                            <Image src={ainboxData.home.images[1]} alt='24/7' width={300} height={300}/>
                        </div>
                    </div>
                </div>
            </div>


          </div>
        </section>
      );
};


export default Home;









{/* <section className="w-full border border-black h-[500px]">
    <div className="flex flex-wrap">
        <figure className="w-full sm:w-[40%] border border-black">
            <img src="img01.jpg" alt="Image 01" className="w-full h-full object-cover" />
            <figcaption>Image 01</figcaption>
        </figure>
        <article className="w-full sm:w-[60%] border border-black">
            <p>Text content goes here</p>
        </article>
    </div>
    <div className="flex flex-wrap">
        <article className="w-full sm:w-[60%] border border-black">
            <p>Text content goes here</p>
        </article>
        <figure className="w-full sm:w-[40%] border border-black">
            <img src="img02.jpg" alt="Image 02" className="w-full h-full object-cover" />
            <figcaption>Image 02</figcaption>
        </figure>
    </div>
</section> */}

