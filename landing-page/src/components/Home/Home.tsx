import { ainboxData } from "@/store/baseData";
import Image from "next/image";
import React from "react";
import Title from "@/components/Title/Title"

const Home: React.FC = () => {
    return (
        <section className="pt-[200px] w-full p-4 text-center">
          <div className="h-[600px] w-full mb-16">
            <div className="h-full w-[60%] mx-auto bg-red-500 rounded-3xl flex items-center justify-center text-[30px] text-white">
              this area for image
            </div>
          </div>
          <div className="mt-[100px]">
            <h1 className="topic text-[40px] my-6">
              {ainboxData.home.topic}
            </h1>
            <pre className="textDetail ">
              {ainboxData.home.subTopic}
            </pre>

            <Title text={ainboxData.home.title} />

            <p className="textDetail mb-16"> 
                {ainboxData.home.subtitle}
            </p>

            <div className="w-full border border-black">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-[40%] border border-black h-[200px]">
                        img 01
                    </div>
                    <div className="w-full sm:w-[60%] border border-black h-[200px]">
                        text
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-[60%] border border-black h-[200px]">
                        text
                    </div>
                    <div className="w-full sm:w-[40%] border border-black h-[200px]">
                        <Image src={ainboxData.home.images[1]} alt='24/7' width={200} height={200}/>
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
        <figure className="w-full sm:w-[40%] border border-black h-[200px]">
            <img src="img01.jpg" alt="Image 01" className="w-full h-full object-cover" />
            <figcaption>Image 01</figcaption>
        </figure>
        <article className="w-full sm:w-[60%] border border-black h-[200px]">
            <p>Text content goes here</p>
        </article>
    </div>
    <div className="flex flex-wrap">
        <article className="w-full sm:w-[60%] border border-black h-[200px]">
            <p>Text content goes here</p>
        </article>
        <figure className="w-full sm:w-[40%] border border-black h-[200px]">
            <img src="img02.jpg" alt="Image 02" className="w-full h-full object-cover" />
            <figcaption>Image 02</figcaption>
        </figure>
    </div>
</section> */}

