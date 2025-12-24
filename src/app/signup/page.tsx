'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Globe,
  Facebook,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Palette,
} from 'lucide-react';

export default function SignUpPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex h-screen w-full flex-row">
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 bg-[#1a1122] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvZHbvPFcHAUMtmKsrm0u1-LG8iT9hwOizRSJZr97Kje0psjQTofs2ecNk7PuLvSXJr9iVKXzvkxTAg2J-OF1wT-mU9FqKAjOqdW5rdKUbvyJcyu1gGx9-PIlx1SWSkf8Z6OvFKFKsyr1MPUAjEw7su0fM-V_kIgIP05vdUpNucznuwRLxfJz_FD_9FNBs6UxxzX1CNXT71Oh24ngxP_LeXkoOeqUQvEe9eRxeRDXItx6FNfTYRAsBoyXGvZ-n9qmUkGlZ0TQrPv9T")',
          }}
          data-alt="Afrofuturist digital illustration of a young woman with neon tribal markings reading a floating holographic scroll in a cyberpunk savanna"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#191022] via-[#191022]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        <div className="relative z-10 flex items-center gap-4 text-white">
          <div className="size-8 text-white">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
            AfriStory
          </h2>
        </div>
        <div className="relative z-10 max-w-xl">
          <h3 className="text-4xl font-bold leading-tight tracking-[-0.033em] mb-4 drop-shadow-lg">
            "Narrating the Future."
          </h3>
          <p className="text-lg text-gray-200 font-light leading-relaxed drop-shadow-md">
            Join a pan-African creative universe. Whether you are drafting your
            first comic or publishing a masterpiece, your story starts here.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-md border border-white/10">
            <Palette className="text-xs" />
            <span className="text-xs font-medium">
              Featured Art: "Neo-Lagos Dawn" by K. Boateng
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col h-full bg-background-light dark:bg-background-dark relative overflow-y-auto">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 sm:px-12 xl:px-32 relative z-10">
          <div className="w-full max-w-md flex flex-col gap-8">
            <div className="lg:hidden flex items-center gap-3 text-white mb-2">
              <div className="size-6 text-primary">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-white text-xl font-bold">AfriStory</h2>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#191022] dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                Create your account
              </h1>
              <p className="text-gray-600 dark:text-[#ad92c9] text-base font-normal leading-normal">
                Join the AfriStory Universe as a reader or creator.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full h-12 justify-center gap-3 bg-white dark:bg-[#362348] hover:bg-gray-50 dark:hover:bg-[#4a3061] border-gray-200 dark:border-transparent text-[#191022] dark:text-white text-sm font-bold"
              >
                <Globe className="text-xl" />
                Continue with Google
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 justify-center gap-3 bg-white dark:bg-[#362348] hover:bg-gray-50 dark:hover:bg-[#4a3061] border-gray-200 dark:border-transparent text-[#191022] dark:text-white text-sm font-bold"
              >
                <Facebook className="text-xl" />
                Continue with Facebook
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-200 dark:border-[#362348]"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest">
                Or
              </span>
              <div className="flex-grow border-t border-gray-200 dark:border-[#362348]"></div>
            </div>
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-bold text-gray-700 dark:text-[#ad92c9] ml-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="text-gray-400 group-focus-within:text-primary h-5 w-5" />
                  </div>
                  <Input
                    className="w-full h-12 pl-10 pr-4 bg-white dark:bg-[#251833] border-gray-200 dark:border-[#362348] rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-bold text-gray-700 dark:text-[#ad92c9] ml-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="text-gray-400 group-focus-within:text-primary h-5 w-5" />
                  </div>
                  <Input
                    className="w-full h-12 pl-10 pr-10 bg-white dark:bg-[#251833] border-gray-200 dark:border-[#362348] rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    id="password"
                    placeholder="Create a password"
                    type={passwordVisible ? 'text' : 'password'}
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors cursor-pointer"
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <label className="relative flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5 dark:bg-[#362348]/40 cursor-pointer hover:border-primary/50 transition-colors">
                <div className="flex h-6 items-center">
                  <Checkbox className="size-5 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1122] text-primary focus:ring-primary focus:ring-offset-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#191022] dark:text-white">
                    Join as a Creator
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    I want to publish content on{' '}
                    <span className="text-primary font-bold">AfriStory Pro</span>
                  </span>
                </div>
              </label>
              <Button
                type="submit"
                className="mt-2 h-12 w-full text-base font-bold shadow-lg shadow-primary/20 active:scale-[0.98]"
              >
                Create Account
              </Button>
            </form>
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link
                  className="text-primary hover:text-primary/80 font-bold hover:underline transition-colors"
                  href="#"
                >
                  Log In
                </Link>
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600 max-w-xs mx-auto">
                By clicking "Create Account", you agree to our{' '}
                <a className="underline hover:text-gray-500" href="#">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a className="underline hover:text-gray-500" href="#">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
