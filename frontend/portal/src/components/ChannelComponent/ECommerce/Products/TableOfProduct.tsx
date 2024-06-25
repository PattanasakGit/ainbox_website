import useSearch from "@/components/ChannelComponent/ECommerce/Products/SearchInTable";
import type {
  IProductInTable,
  TableOfProductProps,
} from "@/models/IEcommerceChannel";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TableOfProduct: React.FC<TableOfProductProps> = ({
  dataInTable,
  handleModal,
  setIsEdit,
  setDataEditProduct,
  handleDeleteProduct,
}) => {
  const { getColumnSearchProps } = useSearch();

  const handleEdit = (dataInRecord: IProductInTable) => {
    setIsEdit(true);
    setDataEditProduct(dataInRecord);
    handleModal();
  };

  const columns: ColumnsType<IProductInTable> = [
    {
      title: "ขื่อสินค้า",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "ราคา (บาท)",
      dataIndex: "price",
      key: "price",
      width: "15%",
      ...getColumnSearchProps("price"),
    },
    {
      title: "ข้อมูลสินค้า",
      dataIndex: "description",
      key: "description",
      ...getColumnSearchProps("description"),
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ["descend", "ascend"] as ("descend" | "ascend")[],
    },
    {
      title: "ลิงค์ข้อมูลสินค้า",
      dataIndex: "url_link",
      key: "url_link",
      ...getColumnSearchProps("url_link"),
    },
    {
      title: "",
      dataIndex: "key",
      key: "key",
      render: (_, record: IProductInTable) => (
        <div>
          <button
            className="py-3 px-3 bg-orange-400 text-white rounded-l-lg hover:bg-[#555]"
            onClick={() => {
              handleEdit(record);
            }}
          >
            <FaEdit />
          </button>
          <button className="py-3 px-3 bg-red-400 text-white rounded-r-lg hover:bg-[#555]"
            onClick={() => {
              handleDeleteProduct(record.key)
            }}
          >
            <MdDelete />
          </button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataInTable} />;
};

export default TableOfProduct;
