import React from 'react';
import { useEffect } from 'react';
import useFetchProducts from '../../hooks/useFetchProducts';
import MainHeader from "../../components/MainHeader";
import { colors } from '../../utils/colors';
function ProductsPage() {
    const { products, loading } = useFetchProducts();
    const thStyle = {
      borderRight: "1px solid #fff",
      paddingBottom: "20px",
      fontSize: "20px",
      padding: "10px",
    };
    
    useEffect(() => {
        console.log("loading", loading);
        console.log("products", products);    
    }, [products]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          width: "100%",
          backgroundColor: colors.primary,
          padding: "20px",
        }}
      >
        <h1
          style={{
            backgroundColor: colors.primary,
            color: colors.orange,
            padding: "10px",
          }}
        >
          Products
        </h1>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              tableLayout: "fixed",
              backgroundColor: colors.secondary,
            }}
          >
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Account ID</th>
                <th style={thStyle}>Active</th>
                <th style={thStyle}>Barcode</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Description</th>
                <th style={thStyle}>Last Modified</th>
                <th style={thStyle}>Image URL</th>
                <th style={thStyle}>Quantity</th>
                <th style={thStyle}>SKU</th>
                <th style={thStyle}>Type</th>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "black" }}></tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{product.id}</td>
                    <td>{new Date(product.created_at).toLocaleDateString()}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.accountid}</td>
                    <td>{product.active.toString()}</td>
                    <td>{product.barcode}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                    <td>{new Date(product.last_modified).toLocaleString()}</td>
                    <td>
                      <img
                        src={product.image_url}
                        alt="Product"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                    <td>{product.quantity}</td>
                    <td>{product.sku}</td>
                    <td>{product.type}</td>
                  </tr>
                  <tr>
                    <td colSpan="14">
                      <div
                        style={{ borderTop: `1px solid ${colors.primary}` }}
                      />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default ProductsPage;