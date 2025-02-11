import React, { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
    const [formData, setFormData] = useState({
        productCode: "AUTO-GEN",
        productName: "",
        productCategory: "",
        productDescription: "",
        unit: "",
        manufacturerID: "",
        hsCode: "",
        unitPrice: 0,
        costPrice: 0,
        taxSlabID: "",
        purTaxRate: 0,
        reorderLevel: 0,
        reorderQty: 0,
        measurementUnit: "",
        netWeight: 0,
        grossWeight: 0,
        dimensions: "",
        packagingType: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
    };

    return (
        <div className="container">
            <h2>Product Form</h2>
            <form onSubmit={handleSubmit} className="form">

                <div className="formGroup">
                    <label>Product Code:</label>
                    <input type="text" name="productCode" value={formData.productCode} readOnly />
                </div>

                <div className="formGroup">
                    <label>Product Name:</label>
                    <input type="text" name="productName" value={formData.productName} onChange={handleChange} required />
                </div>


                <div className="formGroup">
                    <label>Product Category:</label>
                    <select name="productCategory" value={formData.productCategory} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="furniture">Furniture</option>
                        <option value="clothing">Clothing</option>
                        <option value="food">Food</option>
                    </select>
                </div>


                <div className="formGroup">
                    <label>Product Description:</label>
                    <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} required rows="4" />
                </div>


                <div className="formGroup">
                    <label>Unit:</label>
                    <input type="text" name="unit" value={formData.unit} onChange={handleChange} required />
                </div>


                <div className="formGroup">
                    <label>Manufacturer ID:</label>
                    <input type="text" name="manufacturerID" value={formData.manufacturerID} onChange={handleChange} required />
                </div>


                <div className="formGroup">
                    <label>HS Code:</label>
                    <input type="text" name="hsCode" value={formData.hsCode} onChange={handleChange} required />
                </div>


                <div className="formGroup">
                    <label>Unit Price:</label>
                    <input type="number" name="unitPrice" value={formData.unitPrice} onChange={handleChange} required min="0" />
                </div>


                <div className="formGroup">
                    <label>Cost Price:</label>
                    <input type="number" name="costPrice" value={formData.costPrice} onChange={handleChange} required min="0" />
                </div>


                <div className="formGroup">
                    <label>Tax Slab ID:</label>
                    <input type="text" name="taxSlabID" value={formData.taxSlabID} onChange={handleChange} required />
                </div>


                <div className="formGroup">
                    <label>Purchase Tax Rate:</label>
                    <input type="number" name="purTaxRate" value={formData.purTaxRate} onChange={handleChange} required min="0" />
                </div>


                <div className="formGroup">
                    <label>Reorder Level:</label>
                    <input type="number" name="reorderLevel" value={formData.reorderLevel} onChange={handleChange} required min="0" />
                </div>


                <div className="formGroup">
                    <label>Reorder Quantity:</label>
                    <input type="number" name="reorderQty" value={formData.reorderQty} onChange={handleChange} required min="0" />
                </div>


                <div className="formGroup">
                    <label>Measurement Unit:</label>
                    <input type="text" name="measurementUnit" value={formData.measurementUnit} onChange={handleChange} required />
                </div>


                <div className="formGroup">
                    <label>Net Weight:</label>
                    <input type="number" name="netWeight" value={formData.netWeight} onChange={handleChange} required min="0" />
                </div>


                <div className="formGroup">
                    <label>Gross Weight:</label>
                    <input type="number" name="grossWeight" value={formData.grossWeight} onChange={handleChange} required min="0" />
                </div>


                <div className="formGroup">
                    <label>Dimensions:</label>
                    <input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} required />
                </div>


                <div className="formGroup">
                    <label>Packaging Type:</label>
                    <input type="text" name="packagingType" value={formData.packagingType} onChange={handleChange} required />
                </div>


                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
    );
};

export default ProductForm;
