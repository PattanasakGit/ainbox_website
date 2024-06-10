"use client"
import React, { useState, useEffect } from "react";
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
  const [detailedAddress, setDetailedAddress] = useState(address.detailedAddress);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setDetailedAddress(address.detailedAddress);
  }, [address.detailedAddress]);

  const handleValueChange = (newVal: ThailandAddressValue) => {
    setVal(newVal);
    onChange({
      ...address,
      subdistrict: newVal.subdistrict,
      district: newVal.district,
      province: newVal.province,
      zipcode: newVal.postalCode,
    });
    setShowSuggestions(true);
  };

  const handleSuggestionSelected = (nextVal: ThailandAddressValue) => {
    handleValueChange(nextVal);
    setShowSuggestions(false);
  };

  const handleDetailedAddressChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDetailedAddress = e.target.value;
    setDetailedAddress(newDetailedAddress);
    onChange({
      ...address,
      detailedAddress: newDetailedAddress,
    });
  };

  const renderSuggestions = (
    suggestions: ThailandAddressValue[],
    onSelectSuggestion: (nextVal: ThailandAddressValue) => void
  ) => {
    if (!showSuggestions) return null;

    return (
      <ul className="bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-md z-100">
        {suggestions.map((address, index) => (
          <li
            key={index}
            className="py-3 px-4 cursor-pointer hover:bg-orange-100 hover:shadow-[inset_0_0_0_2px_rgba(251,146,60,0.5)] transition-all duration-300 ease-in-out border-b border-gray-200 last:border-b-0 flex items-center"
            onClick={() => onSelectSuggestion(address)}
          >
            <span className="text-gray-800 font-medium hover:text-orange-600">
              {address.subdistrict}, {address.district}, {address.province}{" "}
              {address.postalCode}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ThailandAddressTypeahead value={val} onValueChange={handleValueChange}>
      <div className="mb-2">
        <label htmlFor="detailedAddress" className="block text-sm font-medium text-gray-700">ที่อยู่</label>
        <textarea
          id="detailedAddress"
        //placeholder="รายละเอียดที่อยู่"
          value={detailedAddress}
          onChange={handleDetailedAddressChange}
          rows={2}
          className="p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400 resize-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-2">
          <label htmlFor="subdistrict" className="block text-sm font-medium text-gray-700">ตำบล</label>
          <ThailandAddressTypeahead.SubdistrictInput
            id="subdistrict"
            // placeholder="ตำบล"
            className="p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            onFocus={() => setShowSuggestions(true)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="district" className="block text-sm font-medium text-gray-700">อำเภอ</label>
          <ThailandAddressTypeahead.DistrictInput
            id="district"
            // placeholder="อำเภอ"
            className="p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            onFocus={() => setShowSuggestions(true)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-2">
          <label htmlFor="province" className="block text-sm font-medium text-gray-700">จังหวัด</label>
          <ThailandAddressTypeahead.ProvinceInput
            id="province"
            // placeholder="จังหวัด"
            className="p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            onFocus={() => setShowSuggestions(true)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">รหัสไปรษณีย์</label>
          <ThailandAddressTypeahead.PostalCodeInput
            id="postalCode"
            // placeholder="รหัสไปรษณีย์"
            className="p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            onFocus={() => setShowSuggestions(true)}
          />
        </div>
      </div>
      <CustomSuggestionPanel>
        {(suggestions, _) =>
          renderSuggestions(suggestions, handleSuggestionSelected)
        }
      </CustomSuggestionPanel>
    </ThailandAddressTypeahead>
  );
  
};
