"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useGetProducts, useCreateProduct, useUpdateProduct, useDeleteProduct } from "@/hooks/useShop";
import ProductList from "../_components/shop/ProductList";
import CreateProductForm from "../_components/shop/CreateProductForm";
import UpdateProductForm from "../_components/shop/UpdateProductForm";
import ProductDetail from "../_components/shop/ProductDetail";

const ShopPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const { data: productsData, isLoading } = useGetProducts();
  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();
  const deleteMutation = useDeleteProduct();

  const products = productsData?.data || [];

  const handleCreate = (e: any) => {
    const formData = e.currentTarget.formData;
    createMutation.mutate(formData, {
      onSuccess: () => setShowCreateForm(false)
    });
  };

  const handleUpdate = (productData: any) => {
    updateMutation.mutate({ id: selectedProduct._id, data: productData }, {
      onSuccess: () => {
        setShowUpdateForm(false);
        setSelectedProduct(null);
      }
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteMutation.mutate(id);
    }
  };

  const openUpdateForm = (product: any) => {
    setSelectedProduct(product);
    setShowUpdateForm(true);
  };

  const openDetailView = (product: any) => {
    setSelectedProduct(product);
    setShowDetailView(true);
  };

  const closeDetailView = () => {
    setShowDetailView(false);
    setSelectedProduct(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Shop Management</h1>
          <p className="text-gray-400">Manage your products and shop items.</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Product List */}
      <ProductList 
        products={products}
        onEdit={openUpdateForm}
        onDelete={handleDelete}
        onViewDetail={openDetailView}
        isLoading={isLoading}
      />

      {/* Create Form */}
      <CreateProductForm
        isOpen={showCreateForm}
        onClose={() => setShowCreateForm(false)}
        onSubmit={handleCreate}
        isLoading={createMutation.isPending}
      />

      {/* Update Form */}
      <UpdateProductForm
        isOpen={showUpdateForm}
        onClose={() => {
          setShowUpdateForm(false);
          setSelectedProduct(null);
        }}
        onSubmit={handleUpdate}
        product={selectedProduct}
        isLoading={updateMutation.isPending}
      />

      {/* Detail View */}
      <ProductDetail
        isOpen={showDetailView}
        onClose={closeDetailView}
        product={selectedProduct}
      />
    </div>
  );
};

export default ShopPage;
