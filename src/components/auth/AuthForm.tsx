"use client";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AuthFormProps {
  type?: "login" | "signup";
}

export default function AuthForm({ type = "login" }: AuthFormProps) {
  return (
    <form className="space-y-5">
      {type === "signup" && (
        <div>
          <label className="mb-2 block text-sm font-medium">Full Name</label>

          <Input placeholder="John Doe" />
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>

        <Input type="email" placeholder="john@example.com" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>

        <Input type="password" placeholder="••••••••" />
      </div>

      {type === "signup" && (
        <div>
          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <Input type="password" placeholder="••••••••" />
        </div>
      )}

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Button type="button" variant="outline">
          Google
        </Button>

        <Button type="button" variant="outline">
          GitHub
        </Button>
      </div>

      <Button className="w-full">
        {type === "login" ? "Login" : "Create Account"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {type === "login" ? (
          <>
            Do not have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-violet-600 hover:underline"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-violet-600 hover:underline"
            >
              Login
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
