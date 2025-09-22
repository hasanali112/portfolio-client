import React, { useState } from "react";
import { X, Plus, Minus } from "lucide-react";

interface CreateProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const CreateProductForm: React.FC<CreateProductFormProps> = ({ isOpen, onClose, onSubmit, isLoading }) => {
  const [features, setFeatures] = useState([""]);
  const [specifications, setSpecifications] = useState([{ key: "", value: "" }]);
  const [tags, setTags] = useState("");

  const addFeature = () => setFeatures([...features, ""]);
  const removeFeature = (index: number) => setFeatures(features.filter((_, i) => i !== index));
  const updateFeature = (index: number, value: string) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const addSpecification = () => setSpecifications([...specifications, { key: "", value: "" }]);
  const removeSpecification = (index: number) => setSpecifications(specifications.filter((_, i) => i !== index));
  const updateSpecification = (index: number, field: string, value: string) => {
    const updated = [...specifications];
    updated[index][field as keyof typeof updated[0]] = value;
    setSpecifications(updated);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const productData = {
      productName: formData.get("productName"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      discountPrice: formData.get("discountPrice") ? Number(formData.get("discountPrice")) : undefined,
      category: formData.get("category"),
      stockQuantity: Number(formData.get("stockQuantity")),
      slug: formData.get("slug"),
      metaTitle: formData.get("metaTitle"),
      metaDescription: formData.get("metaDescription"),
      tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag),
      features: features.filter(f => f.trim()),
      specifications: specifications.filter(s => s.key.trim() && s.value.trim()),
      inStock: formData.get("inStock") === "on",
      featured: formData.get("featured") === "on",
      popular: formData.get("popular") === "on",
      isActive: formData.get("isActive") === "on"
    };

    const finalFormData = new FormData();
    finalFormData.append("data", JSON.stringify(productData));
    
    const productImages = formData.getAll("productImages") as File[];
    productImages.forEach(file => finalFormData.append("productImages", file));

    onSubmit({ ...e, currentTarget: { ...e.currentTarget, formData: finalFormData } } as any);
    
    // Reset form
    setFeatures([""]);
    setSpecifications([{ key: "", value: "" }]);
    setTags("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Create New Product</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="productName"
              placeholder="Product Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="category"
              placeholder="Category"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>
          
          <textarea
            name="description"
            placeholder="Product Description"
            className="w-full p-3 bg-gray-800 text-white rounded-lg h-24"
            required
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="price"
              type="number"
              step="0.01"
              placeholder="Price"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="discountPrice"
              type="number"
              step="0.01"
              placeholder="Discount Price (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="stockQuantity"
              type="number"
              placeholder="Stock Quantity"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Product Images</label>
            <input
              name="productImages"
              type="file"
              multiple
              accept="image/*"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          {/* Features */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-white">Features</label>
              <button type="button" onClick={addFeature} className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                <Plus className="w-3 h-3" />
              </button>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  placeholder="Feature"
                  className="flex-1 p-2 bg-gray-800 text-white rounded"
                />
                <button type="button" onClick={() => removeFeature(index)} className="text-red-400">
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Specifications */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-white">Specifications</label>
              <button type="button" onClick={addSpecification} className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                <Plus className="w-3 h-3" />
              </button>
            </div>
            {specifications.map((spec, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  value={spec.key}
                  onChange={(e) => updateSpecification(index, "key", e.target.value)}
                  placeholder="Key (e.g., Color)"
                  className="flex-1 p-2 bg-gray-800 text-white rounded"
                />
                <input
                  value={spec.value}
                  onChange={(e) => updateSpecification(index, "value", e.target.value)}
                  placeholder="Value (e.g., Red)"
                  className="flex-1 p-2 bg-gray-800 text-white rounded"
                />
                <button type="button" onClick={() => removeSpecification(index)} className="text-red-400">
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="slug"
              placeholder="URL Slug"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Tags (comma separated)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="metaTitle"
              placeholder="Meta Title (SEO)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="metaDescription"
              placeholder="Meta Description (SEO)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>
          
          <div className="flex gap-4">
            <label className="flex items-center text-white">
              <input name="inStock" type="checkbox" defaultChecked className="mr-2" />
              In Stock
            </label>
            <label className="flex items-center text-white">
              <input name="featured" type="checkbox" className="mr-2" />
              Featured
            </label>
            <label className="flex items-center text-white">
              <input name="popular" type="checkbox" className="mr-2" />
              Popular
            </label>
            <label className="flex items-center text-white">
              <input name="isActive" type="checkbox" defaultChecked className="mr-2" />
              Active
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Creating..." : "Create Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductForm;
