"use client";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-[400px] border border-gray-200 p-8">
        <div className="space-y-2 mb-4 text-center">
          <h1 className="text-2xl text-neutral-700 font-bold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500">
            Sign in to continue to your account
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <Mail size={18} />
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-none focus:ring-none text-gray-900 placeholder:text-gray-400 transition-all duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
            </div>
            <div className="relative">
              <div className="absolute text-sm inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full text-sm pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-none focus:ring-none text-gray-900 placeholder:text-gray-400 transition-all duration-200 ease-in-out"
              />
              <button
                type="button"
                className="absolute  inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-sm px-4 bg-neutral-600 hover:bg-neutral-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
