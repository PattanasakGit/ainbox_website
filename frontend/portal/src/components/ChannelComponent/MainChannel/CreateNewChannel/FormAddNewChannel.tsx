import AIbehavior from "@/components/ChannelComponent/AIbehavior/AIbehavior";
import CreateEcommerce from "@/components/ChannelComponent/ECommerce/CreateEcommerce";
import SummaryToSubmit from "@/components/ChannelComponent/MainChannel/CreateNewChannel/SummaryToSubmit";
import MainChannel from "@/components/ChannelComponent/MainChannel/MainChannel";
import { ChannelType, IFormAiDetail } from "@/models/IChannel";
import { FormData } from "@/models/IEcommerceChannel";
import { ChannelSidebarSelection, MainSidebarSelection } from "@/models/ISidebar";
import ecommerceService from "@/service/ChannelService/EcommerceService";
import { Steps } from "antd";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateDataWarehouse from "@/components/ChannelComponent/DataWarehouse/CreateDataWarehouse";
import { useChannelSidebar } from "@/store/SidebaeStore";
import showAlert from "@/components/Alert/Alert";

const FormAddNewChannel = ({
  componentForShow,
}: {
  componentForShow: MainSidebarSelection;
}) => {
  const { setSelected } = useChannelSidebar(); 
  const [current, setCurrent] = useState(0);
  const [channel, setchannel] = useState<ChannelType>(ChannelType.ECommerce);
  const [filedata, setfileData] = useState<string>("");
  const [textData, setTextData] = useState<string>("");
  const [formAI, setFormAI] = useState<IFormAiDetail>({
    ai_name: "",
    ai_behavior: "",
    ai_age: "",
    ai_gender: ",",
  });
  const [formData, setFormData] = useState<FormData>({
    business_name: "",
    business_type: "",
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
    website: "",
    opentime: {
      Monday: { open: true, from: "09:00", to: "16:30" },
      Tuesday: { open: true, from: "09:00", to: "16:30" },
      Wednesday: { open: true, from: "09:00", to: "16:30" },
      Thursday: { open: true, from: "09:00", to: "16:30" },
      Friday: { open: true, from: "09:00", to: "16:30" },
      Saturday: { open: false, from: "09:00", to: "16:30" },
      Sunday: { open: false, from: "09:00", to: "16:30" },
    },
  });
  const getUserID = () => {
    return localStorage.getItem("userId");
  }

  const dataCreateChannel = {
    user_id: getUserID()!,
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

  const handleCreate = async () => {
    try {
      await ecommerceService.createChannel(dataCreateChannel);
      // if (typeof window !== 'undefined') {
      //   sessionStorage.setItem('dataChannel', JSON.stringify(dataCreateChannel));
      // }
      // setSelected(ChannelSidebarSelection.Connects)
      
      await showAlert({ icon: 'success', title: `บันทึกสำเร็จ` });
      if (typeof window !== "undefined") {
        // window.location.href = "http://localhost:3001/channel_manager";
        window.location.href = "http://localhost:3001/";
      }
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล\nรหัสความผิดพลาด:FZF0001");
    }
  };

  const handleSetFileData = (urlFile: string) => {
    setfileData(urlFile);
    setTextData("");
  };

  const handleSetTextData = (text: string) => {
    setTextData(text);
    setfileData("");
  };

  const steps = [
    {
      title: "เพิ่มรายละเอียดช่องของคุณ",
      content: "",
    },
    {
      title: "กำหนดพฤตกรรม AI",
      content: (
        <AIbehavior
          formAI={formAI}
          setFormAI={setFormAI}
          handleData={handleAiData}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: "ตรวจสอบและยืนยัน",
      content: (
        <SummaryToSubmit
          formData={formData}
          formAI={formAI}
          channel={channel}
          textData={textData}
          filedata={filedata}
        />
      ),
    },
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
            setchannel={setchannel}
          />
        );
      } else if (
        componentForShow === MainSidebarSelection.CreateDataWarehouse
      ) {
        return (
          <CreateDataWarehouse
            handleSetFileData={handleSetFileData}
            handleSetTextData={handleSetTextData}
            filedata={filedata}
            textData={textData}
            setchannel={setchannel}
            next={next}
          />
        );
      } else if (componentForShow === MainSidebarSelection.CreatePersonal) {
        return (
          <div className="h-screen text-9xl"> CreatePersonal ยังไม่ทำ </div>
        );
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
          className="w-[70%] mx-auto mt-16 mb-12"
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
            onClick={handleCreate}
            className="w-[200px] mt-4 ml-2 p-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          >
            บันทึกข้อมูล
          </button>
        </div>
      )}
      {/* <div className="mt-6">
        {current < steps.length - 1 && <button onClick={next}>Next</button>}
        {current > 0 && (
          <button className="mx-2" onClick={prev}>
            Previous
          </button>
        )}
      </div> */}
    </section>
  );
};

export default FormAddNewChannel;
