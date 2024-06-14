"use client";
import React, { useState, useEffect, ReactNode } from "react";
import dynamic from 'next/dynamic';
import { Address } from "@/models/IEcommerceChannel";
import '@/components/ChannelComponent/ECommerce/Ecommerce.css';

// ใช้งาน Dynamic imports เพื่อป้องกันการ render ที่ serverSide
// หาก render ที่ serverSide จะเกิด err ใน lib
const ThailandAddressTypeahead = dynamic(() => import("react-thailand-address-typeahead").then(mod => mod.ThailandAddressTypeahead),{ ssr: false });
const SubdistrictInput = dynamic(() => import("react-thailand-address-typeahead").then(mod => mod.ThailandAddressTypeahead.SubdistrictInput),{ ssr: false });
const DistrictInput = dynamic(() => import("react-thailand-address-typeahead").then(mod => mod.ThailandAddressTypeahead.DistrictInput),{ ssr: false });
const ProvinceInput = dynamic(() => import("react-thailand-address-typeahead").then(mod => mod.ThailandAddressTypeahead.ProvinceInput),{ ssr: false });
const PostalCodeInput = dynamic(() => import("react-thailand-address-typeahead").then(mod => mod.ThailandAddressTypeahead.PostalCodeInput),{ ssr: false });
const CustomSuggestionPanel = dynamic(() => import("react-thailand-address-typeahead").then(mod => mod.CustomSuggestionPanel),{ ssr: false });

export const AddressInput: React.FC<{
  address: Address;
  onChange: (newAddress: Address) => void;
  disabled?: boolean;
}> = ({ address, onChange, disabled }) => {
  const [detailedAddress, setDetailedAddress] = useState(address.detailedAddress);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setDetailedAddress(address.detailedAddress);
  }, [address.detailedAddress]);

  const handleValueChange = (newVal: any) => {
    onChange({
      ...address,
      subdistrict: newVal.subdistrict,
      district: newVal.district,
      province: newVal.province,
      zipcode: newVal.postalCode,
    });
    setShowSuggestions(true);
  };

  const handleSuggestionSelected = (nextVal: any) => {
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
    suggestions: any[],
    onSelectSuggestion: (nextVal: any) => void
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
    <ThailandAddressTypeahead 
      value={{
        subdistrict: address.subdistrict,
        district: address.district,
        province: address.province,
        postalCode: address.zipcode,
      }} 
      onValueChange={handleValueChange}
    >
      <div className="mb-2">
        <label htmlFor="detailedAddress" className="EcommerceLabel">ที่อยู่</label>
        <textarea
          id="detailedAddress"
          value={detailedAddress}
          onChange={handleDetailedAddressChange}
          rows={2}
          className="EcommerceInput resize-none"
          disabled={disabled}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-2">
          <label htmlFor="subdistrict" className="EcommerceLabel">ตำบล</label>
          <SubdistrictInput
            id="subdistrict"
            className="EcommerceInput"
            onFocus={() => setShowSuggestions(true)}
            disabled={disabled}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="district" className="EcommerceLabel">อำเภอ</label>
          <DistrictInput
            id="district"
            className="EcommerceInput"
            onFocus={() => setShowSuggestions(true)}
            disabled={disabled}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-2">
          <label htmlFor="province" className="EcommerceLabel">จังหวัด</label>
          <ProvinceInput
            id="province"
            className="EcommerceInput"
            onFocus={() => setShowSuggestions(true)}
            disabled={disabled}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="postalCode" className="EcommerceLabel">รหัสไปรษณีย์</label>
          <PostalCodeInput
            id="postalCode"
            className="EcommerceInput"
            onFocus={() => setShowSuggestions(false)}
            disabled={disabled}
            required
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
