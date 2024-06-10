"use client"
import React, { useState } from "react";
import {
  CustomSuggestionPanel,
  ThailandAddressTypeahead,
  ThailandAddressValue,
} from "react-thailand-address-typeahead";
import { Address } from "@/models/IEcommerceChannel";

export const AddressInput: React.FC<{
  address: Address;
  onChange: (newAddress: Address) => void;
}> = ({ address, onChange }) => {
  const [val, setVal] = useState(
    ThailandAddressValue.fromDatasourceItem({
      d: address.district,
      p: address.province,
      po: address.zipcode,
      s: address.subdistrict,
    })
  );
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleValueChange = (newVal: ThailandAddressValue) => {
    setVal(newVal);
    onChange({
      subdistrict: newVal.subdistrict,
      district: newVal.district,
      province: newVal.province,
      zipcode: newVal.postalCode,
    });
    setShowSuggestions(true); // แสดงรายการแนะนำเมื่อมีการเปลี่ยนแปลงค่า
  };

  const handleSuggestionSelected = (nextVal: ThailandAddressValue) => {
    handleValueChange(nextVal);
    setShowSuggestions(false); // ซ่อนรายการแนะนำเมื่อเลือกค่าแล้ว
  };

  const renderSuggestions = (
    suggestions: ThailandAddressValue[],
    onSelectSuggestion: (nextVal: ThailandAddressValue) => void
  ) => {
    if (!showSuggestions) return null; // ใช้ showSuggestions แทน shouldVisible

    return (
      <ul className="bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-md">
        {suggestions.map((address, index) => (
          <li
            key={index}
            className="py-3 px-4 cursor-pointer hover:bg-orange-100 hover:shadow-[inset_0_0_0_2px_rgba(251,146,60,0.5)] transition-all duration-300 ease-in-out border-b border-gray-200 last:border-b-0 flex items-center"
            onClick={() => onSelectSuggestion(address)}
          >
            <span className="text-gray-800 font-medium hover:text-orange-600">
              {address.subdistrict}, {address.district}, {address.province} {address.postalCode}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ThailandAddressTypeahead value={val} onValueChange={handleValueChange}>
      <ThailandAddressTypeahead.SubdistrictInput
        placeholder="ตำบล"
        className="mb-2 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
        onFocus={() => setShowSuggestions(true)} // แสดงรายการเมื่อ focus
      />
      <ThailandAddressTypeahead.DistrictInput
        placeholder="อำเภอ"
        className="mb-2 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
        onFocus={() => setShowSuggestions(true)} // แสดงรายการเมื่อ focus
      />
      <div className="grid grid-cols-2 gap-4">
        <ThailandAddressTypeahead.ProvinceInput
          placeholder="จังหวัด"
          className="mb-2 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
          onFocus={() => setShowSuggestions(true)} // แสดงรายการเมื่อ focus
        />
        <ThailandAddressTypeahead.PostalCodeInput
          placeholder="รหัสไปรษณีย์"
          className="mb-2 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
          onFocus={() => setShowSuggestions(true)} // แสดงรายการเมื่อ focus
        />
      </div>
      <CustomSuggestionPanel>
        {(suggestions, _) => renderSuggestions(suggestions, handleSuggestionSelected)}
      </CustomSuggestionPanel>
    </ThailandAddressTypeahead>
  );
};
