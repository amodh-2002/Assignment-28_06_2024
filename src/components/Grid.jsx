import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import axios from "axios";
import "ag-grid-enterprise";
import { exportToPDF } from "../gridExporter";

const Grid = () => {
  // Define default column properties for the grid
  const gridRef = useRef();
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      editable: true,
      filter: true,
      floatingFilter: true,
    };
  }, []);

  // State to hold the row data for the grid
  const [rowData, setRowData] = useState([]);
  // State to hold the total price of all products
  const [totalPrice, setTotalPrice] = useState(0);
  // Define column definitions for the grid
  const [colDefs, setColDefs] = useState([
    { field: "id", checkboxSelection: true },
    { field: "title" },
    {
      field: "price",
      valueFormatter: (params) => `$${params.value.toLocaleString()}`,
    },
    {
      field: "description",
      flex: 2, // Give more space to description
    },
  ]);

  const onGridReady = (params) => {
    gridRef.current = params;
  };
  const onBtExport = useCallback(() => {
    if (gridRef.current && gridRef.current.api) {
      gridRef.current.api.exportDataAsExcel({ fileName: "data" });
    } else {
      console.error("Grid API not available");
    }
  }, []);
  // Effect to fetch product data when component mounts
  useEffect(() => {
    axios
      .get("/src/data/data.json")
      .then((response) => {
        const products = response.data.products;
        console.log(products);
        // Filter and map the required fields from the API response
        const filteredProducts = products.map(
          ({ id, title, price, description }) => ({
            id,
            title,
            price,
            description,
          })
        );
        setRowData(filteredProducts);

        // Calculate total price of all products
        const total = filteredProducts.reduce(
          (sum, product) => sum + product.price,
          0
        );
        setTotalPrice(total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="ag-theme-material-dark max-w-screen-xl mx-auto"
      style={{ height: 500, fontFamily: "Poppins" }}
    >
      {/* Render the AG Grid component */}
      <div className="my-5 flex items-center gap-5">
        <button
          onClick={() => onBtExport()}
          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
          style={{ marginBottom: "5px", fontWeight: "bold" }}
        >
          Export to Excel
        </button>
        <button
          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
          style={{ marginBottom: "5px", fontWeight: "bold" }}
          onClick={() => exportToPDF(gridRef.current.api)}
        >
          Export to PDF
        </button>
      </div>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection={"multiple"}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20]}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
      />
      {/* Render the Form component and pass the total price */}
    </div>
  );
};

export default Grid;

// useEffect(() => {
//   // Calculate total price whenever rowData changes
//   const total = rowData.reduce((sum, product) => sum + product.price, 0);
//   setTotalPrice(total);
// }, [rowData]);
