import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const PaymentsTable = () => {
  const columns = [
    { field: "orderId", headerName: "Order ID", width: 70, valueGetter: (params) => `#${params.row.orderAmount}`  },
    { field: "orderDate", headerName: "Order date", width: 130 },
    { field: "orderAmount", headerName: "Order amount", width: 130, valueGetter: (params) => `$${params.row.orderAmount}` },
    { field: "transactionFees", headerName: "Transaction fees", width: 130, valueGetter: (params) => `$${params.row.transactionFees}` },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   width: 90,
    // },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];

  const rows = [
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
    { orderId: 281209, orderDate: "7 July, 2023", orderAmount: 1278.23, transactionFees: 22 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      getRowId={(row) => row.orderId}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
  );
};

export default PaymentsTable;
