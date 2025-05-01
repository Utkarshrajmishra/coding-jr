"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Mail, Lock, Loader } from "lucide-react";
import { LoginSchema, LoginSchemaType } from "@/zod/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    setLoading(true);
    console.log("Form submitted:", data);
    router.push("/dashboard/user/123434");
  };



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

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
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
                {...register("email")}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="••••••••"
                className="w-full text-sm pl-10 pr-10 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-sm px-4 flex items-center justify-center bg-neutral-600 hover:bg-neutral-700 text-white font-medium rounded-lg"
          >
            {loading ? (
              <div className="animate-spin">
                <Loader />
              </div>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
