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
import Swal from "sweetalert2";

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
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ["descend", "ascend"] as ("descend" | "ascend")[],
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
            className="py-4 px-3 bg-orange-400 text-white rounded-l-lg hover:bg-[#888] shadow-sm"
            onClick={() => {
              handleEdit(record);
            }}
          >
            <FaEdit />
          </button>
          <button
            className="py-4 px-3 bg-red-400 text-white rounded-r-lg hover:bg-[#888] shadow-sm"
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
                  handleDeleteProduct(record.key);
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
      columns={columns}
      dataSource={dataInTable}
      size="middle"
      pagination={{
        pageSize: 10,
        // showSizeChanger: true,
        // position: ["bottomCenter"],
        // className: "bg-orange-50 rounded-lg p-2 shadow-sm",
      }}
    />
  );
};

export default TableOfProduct;
