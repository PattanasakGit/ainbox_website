"use client";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Upload } from "antd";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { RcFile } from "antd/es/upload";
import showAlert from "@/components/Alert/Alert";
import { storage } from "../../../firebaseConfig";

const { Dragger } = Upload;

interface UploadComponentProps {
  handleSetFileData: (url: string) => void;
}

const UploadComponent: React.FC<UploadComponentProps> = ({
  handleSetFileData,
}) => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadProps: UploadProps = {
    name: "file",
    multiple: false,
    accept: ".pdf,.txt,.markdown,.docx",
    customRequest: async ({ file, onSuccess, onError }) => {
      const rcFile = file as RcFile;
      const storageRef = ref(storage, `file_data_channel/${rcFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, rcFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          showAlert({ icon: 'error', title: `อัปโหลดไฟล์ ${rcFile.name} ล้มเหลว` });
          onError?.(error as Error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            showAlert({ icon: 'success', title: `อัปโหลดไฟล์ ${rcFile.name} สำเร็จ` });
            handleSetFileData(downloadURL);
            onSuccess?.(null, uploadTask.snapshot as unknown as XMLHttpRequest);
          } catch (error) {
            console.error("ไม่สามารถรับ URL สำหรับดาวน์โหลด:", error);
            showAlert({ icon: 'error', title: `อัปโหลดไฟล์ ${rcFile.name} ล้มเหลว` });
            onError?.(error as Error);
          }
        }
      );
    },
    onDrop(e) {
      console.log("ไฟล์ที่ลาก", e.dataTransfer.files);
    },
  };

  return (
    <div className="relative w-[75%] h-[400px] m-4">
      <Dragger {...uploadProps} className="w-full h-full">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          คลิกหรือลากไฟล์มาวางที่นี่เพื่ออัปโหลด
        </p>
        <p className="ant-upload-hint">
          รองรับการอัปโหลดไฟล์เดียว (.pdf, .txt, .markdown, .docx)
        </p>
      </Dragger>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
          <div
            className="h-full bg-orange-400 transition-all duration-300 ease-in-out"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;