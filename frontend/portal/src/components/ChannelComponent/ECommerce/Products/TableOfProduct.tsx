import type {
  IProductInTable,
  TableOfProductProps,
} from "@/models/IEcommerceChannel";
import React from "react";
import { Table } from "antd";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IProduct } from "@/models/Product";
import type { ColumnsType } from "antd/es/table";
import useSearch from "@/components/ChannelComponent/ECommerce/Products/SearchInTable";

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
      width: "25%",
      fixed: true,
      ellipsis: true,
      ...getColumnSearchProps("name"),
    },
    {
      title: "ราคา (บาท)",
      dataIndex: "price",
      key: "price",
      width: "18%",
      ellipsis: true,
      ...getColumnSearchProps("price"),
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ["descend", "ascend"] as ("descend" | "ascend")[],
    },
    {
      title: "ข้อมูลสินค้า",
      dataIndex: "description",
      key: "description",
      width: "35%",
      ellipsis: true,
      ...getColumnSearchProps("description"),
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ["descend", "ascend"] as ("descend" | "ascend")[],
    },
    {
      title: "ลิงค์ข้อมูลสินค้า",
      dataIndex: "url_link",
      key: "url_link",
      ellipsis: true,
      ...getColumnSearchProps("url_link"),
    },
    {
      title: "",
      dataIndex: "key",
      key: "key",
      width: "12%",
      render: (_, record:any) => (
        <div className="flex justify-end items-end gap-1">
          <button
            className="py-4 px-3 bg-orange-400 text-white rounded-lg hover:bg-orange-700 shadow-sm"
            onClick={() => {
              handleEdit(record);
            }}
          >
            <FaEdit />
          </button>
          <button
            className="py-4 px-3 bg-red-400 text-white rounded-lg hover:bg-red-700 shadow-sm"
            onClick={() => {
              Swal.fire({
                icon: "warning",
                title: "คุณกำลังจะลบรายการสินค้า",
                text: `หากดำเนินการต่อ ${record.name} จะถูกลบออกจากระบบ`,
                showCancelButton: true,
                confirmButtonText: "ลบ",
                cancelButtonColor: "#00000055",
                confirmButtonColor: "#f87171",
                cancelButtonText: "ยกเลิก",
              }).then((result: { isConfirmed: any }) => {
                if (result.isConfirmed) {
                  if (record){
                    handleDeleteProduct(record._id);
                  }
                }
              });
            }}
          >
            <MdDelete />
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns as ColumnsType<IProduct>}
      dataSource={dataInTable}
      size="middle"
      pagination={{
        responsive: true,
        pageSize: 10,
        // showSizeChanger: true,
        position: ["bottomLeft"],
        // className: " rounded-lg p-2 shadow-sm",
      }}
    />
  );
};

export default TableOfProduct;
