import { useState } from "react";
import { Button } from "../components/ui/button";

export default function Commander() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "gommage-50ml",
    quantity: 1,
    shippingMethod: "standard",
  });

  const shippingCosts: Record<string, number> = {
    standard: 2000,
    express: 3000,
    overnight: 5000,
  };

  const productPrices: Record<string, number> = {
    "gommage-50ml": 12000,
    "gommage-200ml": 20000,
    "pack-luxe": 35000,
  };

  const subtotal = productPrices[formData.product] * formData.quantity;
  const shipping = shippingCosts[formData.shippingMethod];
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Commande validée pour ${formData.name}!`);
    setFormData({
      name: "",
      email: "",
      product: "gommage-50ml",
      quantity: 1,
      shippingMethod: "standard",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Commander</h1>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Nom *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Votre nom"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="votre@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Produit</label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="gommage-50ml">Gommage 50ml - 12000</option>
              <option value="gommage-200ml">Gommage 200ml - 20000</option>
              <option value="pack-luxe">Pack Luxe 2x200ml - 35000</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Quantité</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Livraison</label>
            <select
              name="shippingMethod"
              value={formData.shippingMethod}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="standard">Standard - 2000FCFA</option>
              <option value="express">Express - 3000FCFA</option>
              <option value="overnight">Overnight - 5000FCFA</option>
            </select>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span>Sous-total:</span>
              <span>{subtotal.toFixed(2)}fcfa</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Livraison:</span>
              <span>{shipping.toFixed(2)}fcfa</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span className="text-purple-600">{total.toFixed(2)}fcfa</span>
            </div>
          </div>

          <Button variant="primary" size="lg" className="w-full">
            Valider la commande
          </Button>
        </form>
      </div>
    </div>
  );
}
