import SummaryToSubmit from "@/components/ChannelComponent/MainChannel/CreateNewChannel/SummaryToSubmit";
import CreateAIbehavior from "@/components/ChannelComponent/AIbehavior/CreateAIbehavior";
import CreateEcommerce from "@/components/ChannelComponent/ECommerce/CreateEcommerce";
import MainChannel from "@/components/ChannelComponent/MainChannel/MainChannel";
import ecommerceService from "@/service/ChannelService/EcommerceService";
import { MainSidebarSelection } from "@/models/ISidebar";
import { FormData } from "@/models/IEcommerceChannel";
import { IFormAiDetail } from "@/models/IChannel";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { Steps } from 'antd';

const FormAddNewChannel = ({ componentForShow }: { componentForShow: MainSidebarSelection }) => {
  const [current, setCurrent] = useState(0);
  const [formAI, setFormAI] = useState<IFormAiDetail>({
    ai_name: "",
    ai_behavior: "",
    ai_age: "",
    ai_gender: ","
  });
  const [formData, setFormData] = useState<FormData>({
    shopName: "",
    shopType: "",
    description: "",
    address: {
      detailedAddress: "",
      subdistrict: "",
      district: "",
      province: "",
      zipcode: "",
    },
    phone: "",
    email: "",
  });

  const dataCreateChannel = {
    ...formData,
    ...formAI,
  };


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleEcommerceData = (data: FormData) => {
    setFormData(data);
  };

  const handleAiData = (data: IFormAiDetail) => {
    setFormAI(data);
  };

  const handleSubmit = async () => {
    try {
      await ecommerceService.create(dataCreateChannel);
      toast.success('ข้อมูลถูกบันทึกเรียบร้อยแล้ว');
      console.log('ไม่ error');
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล\nรหัสความผิดพลาด:FZF0001');
      console.log('error');
    }
  };
  

  const steps = [
    {
      title: 'เพิ่มรายละเอียดช่องของคุณ',
      content: '',
    },
    {
      title: 'กำหนดพฤตกรรม AI',
      content: <CreateAIbehavior formAI={formAI} setFormAI={setFormAI} handleData={handleAiData} next={next} prev={prev} />,
    },
    {
      title: 'ตรวจสอบและยืนยัน',
      content: <SummaryToSubmit formData={formData} formAI={formAI} />, // Use the Summary component
    }
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const renderStepContent = () => {
    if (current === 0) {
      if (componentForShow === MainSidebarSelection.CreateEcommerce) {
        return (
          <CreateEcommerce
            next={next}
            handleData={handleEcommerceData}
            formData={formData}
            setFormData={setFormData}
          />
        );
      } else if (componentForShow === MainSidebarSelection.CreateDataWarehouse) {
        return <div className="h-screen text-9xl"> CreateDataWarehouse ยังไม่ทำ </div>;
      } else if (componentForShow === MainSidebarSelection.CreatePersonal) {
        return <div className="h-screen text-9xl"> CreatePersonal ยังไม่ทำ </div>;
      } else {
        return <MainChannel />;
      }
    }
    return steps[current].content;
  };

  return (
    <section className="w-full p-8">
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div>
        <h2 className="text-center text-[42px] font-black text-orange-400">
          เพิ่มข้อมูลธุรกิจของคุณ
        </h2>
        <Steps
          current={current}
          items={items}
          className="w-[70%] mx-auto mt-16 mb-4"
        />
        {renderStepContent()}
      </div>

      {current === 2 && (
        <div className="flex justify-center space-x-2">
          <button
            type="button"
            onClick={prev}
            className="w-[200px] mt-4 p-2 px-4 border text-[#555] rounded-md hover:text-white hover:bg-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          >
            ย้อนกลับ
          </button>
          <button
            type="button"
            onClick={()=>{handleSubmit()}}
            className="w-[200px] mt-4 ml-2 p-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          >
            บันทึกข้อมูล
          </button>
        </div>
      )}

      {/* <div className="mt-6">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button className="mx-2" onClick={prev}>
            Previous
          </Button>
        )}
      </div> */}
    </section>
  );
};

export default FormAddNewChannel;
