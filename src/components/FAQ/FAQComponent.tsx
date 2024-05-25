import FAQData from "@/store/FAQData";
import FAQItem from "./FAQItem";
import Title from "../Title/Title";

const FAQS: IFAQData[] = FAQData;
const FAQComponent: React.FC = () => {
  return (
    <section className="w-[90vw] flex justify-center items-center flex-col">
      <Title text={'คำถามที่พบบ่อย'} />
    <div className="w-[90%] lg:w-[70%] xl:w-[55%] p-4">
      {FAQS.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
      <hr className="flex-grow h-[2px] bg-[#5555551b] border-none rounded-xl" />
    </div>
    </section>
  );
};

export default FAQComponent;
