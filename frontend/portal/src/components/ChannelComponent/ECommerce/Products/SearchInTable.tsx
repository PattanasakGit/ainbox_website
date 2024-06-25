import { Button, Input, Space } from "antd";
import Highlighter from "react-highlight-words";
import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnType } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import type { IProductInTable } from "@/models/IEcommerceChannel";

type DataIndex = keyof IProductInTable;

const useSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<IProductInTable> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          className="border-2 border-orange-200 focus:border-orange-300 hover:border-orange-300"
          ref={searchInput}
          placeholder={`ค้นหา`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space className="flex justify-between">
          <div className="flex gap-2">
            <button
              className="bg-orange-400 hover:bg-orange-500 focus:bg-orange-600 focus:outline focus:outline-orange-100 rounded-xl px-2 text-white"
              onClick={() =>
                handleSearch(selectedKeys as string[], confirm, dataIndex)
              }
            >
              <SearchOutlined />
              ค้นหา
            </button>
            <button
              className="border text-orange-400 hover:text-orange-500 hover:bg-gray-50 focus:text-orange-600 rounded-xl px-4"
              onClick={() => {
                if (clearFilters) {
                  confirm({ closeDropdown: false });
                  setSearchText((selectedKeys as string[])[0]);
                  setSearchedColumn(dataIndex);
                  handleReset(clearFilters);

                  confirm({ closeDropdown: true });
                  setSearchText((selectedKeys as string[])[0]);
                  setSearchedColumn(dataIndex);
                  handleReset(clearFilters);
                }
              }}
            >
              ล้าง
            </button>
          </div>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            ปิด
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined
        className={`${
          filtered
            ? "text-orange-400 text-xl shadow-sm border bg-[#ffbc1f1e] p-1 rounded-xl"
            : ""
        }`}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 2,
            borderRadius: 5,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  return { getColumnSearchProps, searchText, searchedColumn };
};

export default useSearch;
