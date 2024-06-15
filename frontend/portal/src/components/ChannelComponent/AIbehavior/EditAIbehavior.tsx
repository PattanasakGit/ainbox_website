import React, { useState } from "react";

const EditAIbehavior = () => {
  const [formData, setFormData] = useState({
    ai_name: "",
    ai_behavior: "",
    ai_age: "",
    ai_gender: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // handle form submission logic
  };

  return (
    <section className="w-full min-h-screen bg-[#fff0] p-8 pt-4">
      <div className="text-center mb-10">
        <h2 className="text-[42px] font-black text-orange-400">AI Form</h2>
      </div>

      <form onSubmit={handleSubmit} className="w-[70%] mx-auto bg-[#ffffffff] rounded-xl border-2 border-orange-100 shadow-xl p-8">
        <div className="mb-4">
          <label htmlFor="aiName" className="EcommerceLabel">
            ชื่อของผู้ช่วยอัจฉริยะของคุณ (AI)
          </label>
          <input
            type="text"
            id="aiName"
            value={formData.ai_name}
            onChange={handleChange}
            className="EcommerceInput"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="aiBehavior" className="EcommerceLabel">
            พฤติกรรมของผู้ช่วยอัจฉริยะ (AI behavior)
          </label>
          <input
            type="text"
            id="aiBehavior"
            value={formData.ai_behavior}
            onChange={handleChange}
            className="EcommerceInput"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="aiGender" className="EcommerceLabel">
            เพศของผู้ช่วยอัจฉริยะ
          </label>
          <input
            type="text"
            id="aiGender"
            value={formData.ai_gender}
            onChange={handleChange}
            className="EcommerceInput"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="aiAge" className="EcommerceLabel">
            อายุของผู้ช่วยอัจฉริยะ
          </label>
          <input
            type="text"
            id="aiAge"
            value={formData.ai_age}
            onChange={handleChange}
            className="EcommerceInput"
            required
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="mt-4 p-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          >
            บันทึก
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditAIbehavior;
