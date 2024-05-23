import FAQData from "@/store/FAQData";
import FAQItem from "./FAQItem";
import Title from "../Title/Title";

const FAQS: IFAQData[] = FAQData;
const FAQComponent: React.FC = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <Title text={'คำถามที่พบบ่อย'} />
    <div className="w-[90%] lg:w-[70%] xl:w-[55%] p-4">
      {/* <h2 className="text-2xl font-bold mb-4 text-center text-[#555]">คำถามที่พบบ่อย</h2> */}
      {FAQS.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
    </section>
  );
};

export default FAQComponent;
