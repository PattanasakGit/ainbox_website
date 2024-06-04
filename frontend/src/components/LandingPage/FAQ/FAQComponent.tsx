import FAQData from "../../../store/LandingPage/FAQData";
import Title from "../Title/Title";
import FAQItem from "./FAQItem";

const FAQS: IFAQData[] = FAQData;
const FAQComponent: React.FC = () => {
  return (
    <section className="w-[98vw] flex justify-center items-center flex-col">
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
