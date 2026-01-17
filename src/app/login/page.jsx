"use client";

import Cookies from "js-cookie";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@example.com" && password === "123456") {
      Cookies.set("auth", "true", { expires: 1, path: "/" });

      // 🔥 IMPORTANT: hard reload
      window.location.href = "/products";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-96 p-6 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          name="email"
          type="email"
          placeholder="admin@example.com"
          className="input input-bordered w-full mb-3"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="123456"
          className="input input-bordered w-full mb-4"
          required
        />

        <button className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
}
