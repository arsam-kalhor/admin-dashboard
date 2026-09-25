"use client";

import Link from "next/link";
import { useActionState, useState } from "react";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

import { loginAction } from "@/lib/auth";

/* -------------------------------------------------------------------------- */
/* Login Form                                                                 */
/* -------------------------------------------------------------------------- */

export default function LoginForm({
  callbackUrl,
}: {
  callbackUrl: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const [formState, formAction, isPending] = useActionState(loginAction, {});

  const emailError = formState.errors?.email?.[0];
  const passwordError = formState.errors?.password?.[0];

  return (
    <main
      className="
        relative
        min-h-dvh
        w-full
        overflow-hidden
        bg-background
        px-4
        py-8
        sm:px-6
        lg:px-8
      "
    >
      {/* Background Grid */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-size-[52px_52px]
        "
      />

      {/* Top Glow */}
      <div
        className="
          pointer-events-none
          fixed
          -top-48
          left-1/2
          size-128
          -translate-x-1/2
          rounded-full
          bg-white/4
          blur-3xl
        "
      />

      {/* Center */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(90dvh-4rem)]
          items-center
          justify-center
        "
      >
        {/* Main Card */}
        <div
          className="
            grid
            w-full
            max-w-6xl
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-card/75
            shadow-2xl
            backdrop-blur-xl
            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
          {/* ================================================================ */}
          {/* LEFT SIDE                                                        */}
          {/* ================================================================ */}

          <section
            className="
              relative
              hidden
              min-h-130
              overflow-hidden
              border-r
              border-white/10
              p-10
              lg:grid
              lg:grid-rows-[auto_1fr_auto]
              xl:px-12
              xl:py-11
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -left-32
                -top-32
                size-96
                rounded-full
                bg-white/5
                blur-3xl
              "
            />

            {/* Brand */}
            <div className="relative flex items-center gap-3">
              <div
                className="
                  flex
                  size-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white
                  text-black
                  shadow-lg
                "
              >
                <LayoutDashboard className="size-5" />
              </div>

              <div>
                <p className="font-semibold tracking-tight">Admin Space</p>

                <p className="mt-0.5 text-xs text-muted-foreground">
                  Management Platform
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div
              className="
                relative
                flex
                items-center
                py-10
              "
            >
              <div className="w-full max-w-lg">
                {/* Badge */}
                <div
                  className="
                    mb-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-1.5
                    text-xs
                    text-muted-foreground
                  "
                >
                  <Sparkles className="size-3.5" />
                  Modern Admin Experience
                </div>

                {/* Heading */}
                <h1
                  className="
                    text-4xl
                    font-semibold
                    leading-tight
                    tracking-tight
                    xl:text-5xl
                  "
                >
                  Everything you need
                  <br />
                  to manage your
                  <br />
                  <span className="text-muted-foreground">workspace.</span>
                </h1>

                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-md
                    text-sm
                    leading-7
                    text-muted-foreground
                  "
                >
                  A clean and focused dashboard experience built for efficient
                  management.
                </p>

                {/* Features */}
                <div className="mt-8 space-y-3.5">
                  <Feature
                    icon={<Zap className="size-4" />}
                    title="Fast workflow"
                    description="Built for productivity"
                  />

                  <Feature
                    icon={<ShieldCheck className="size-4" />}
                    title="Secure access"
                    description="Protected admin environment"
                  />

                  <Feature
                    icon={<LayoutDashboard className="size-4" />}
                    title="Simple management"
                    description="Everything in one place"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="
                relative
                border-t
                border-white/5
                pt-5
              "
            >
              <p className="text-xs text-muted-foreground">
                © 2026 Admin Space
              </p>
            </div>
          </section>

          {/* ================================================================ */}
          {/* RIGHT SIDE                                                       */}
          {/* ================================================================ */}

          <section
            className="
              flex
              min-h-130
              items-center
              justify-center
              p-7
              sm:p-10
              lg:px-12
            "
          >
            <div className="w-full max-w-sm">
              {/* Mobile Brand */}
              <div
                className="
                  mb-8
                  flex
                  items-center
                  gap-3
                  lg:hidden
                "
              >
                <div
                  className="
                    flex
                    size-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-black
                  "
                >
                  <LayoutDashboard className="size-5" />
                </div>

                <div>
                  <p className="font-semibold">Admin Space</p>

                  <p className="text-xs text-muted-foreground">
                    Management Platform
                  </p>
                </div>
              </div>

              {/* Heading */}
              <div className="mb-6">
                <p
                  className="
                    mb-2
                    text-sm
                    text-muted-foreground
                  "
                >
                  Welcome back
                </p>

                <h2
                  className="
                    text-3xl
                    font-semibold
                    tracking-tight
                  "
                >
                  Sign in to your account
                </h2>

                <p
                  className="
                    mt-2.5
                    text-sm
                    leading-6
                    text-muted-foreground
                  "
                >
                  Enter your credentials to access the dashboard.
                </p>
              </div>

              {/* ============================================================ */}
              {/* Form                                                         */}
              {/* ============================================================ */}

              <form
                action={formAction}
                noValidate
                aria-busy={isPending}
                className="space-y-2"
              >
                <input
                  type="hidden"
                  name="callbackUrl"
                  value={callbackUrl}
                />

                {/* Email */}
                <FieldErrorWrapper error={emailError}>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder=" "
                      autoComplete="email"
                      disabled={isPending}
                      aria-invalid={!!emailError}
                      aria-describedby={emailError ? "email-error" : undefined}
                      className="
                        peer
                        h-14
                        rounded-xl
                        border-white/10
                        bg-white/4
                        px-4
                        pt-5
                        text-sm
                        placeholder:text-transparent
                        transition-all
                        duration-200

                        hover:border-white/20

                        focus-visible:border-white/30
                        focus-visible:ring-white/10

                        aria-invalid:border-destructive!
                        aria-invalid:hover:border-destructive!
                        aria-invalid:focus-visible:border-destructive!
                        aria-invalid:focus-visible:ring-destructive/20
                      "
                    />

                    <FloatingLabel
                      htmlFor="email"
                      text="Email address"
                      error={!!emailError}
                    />
                  </div>
                </FieldErrorWrapper>

                {/* Password */}
                <FieldErrorWrapper error={passwordError}>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder=" "
                      autoComplete="current-password"
                      disabled={isPending}
                      aria-invalid={!!passwordError}
                      aria-describedby={
                        passwordError ? "password-error" : undefined
                      }
                      className="
                        peer
                        h-14
                        rounded-xl
                        border-white/10
                        bg-white/4
                        px-4
                        pt-5
                        pr-12
                        text-sm
                        placeholder:text-transparent
                        transition-all
                        duration-200

                        hover:border-white/20

                        focus-visible:border-white/30
                        focus-visible:ring-white/10

                        aria-invalid:border-destructive!
                        aria-invalid:hover:border-destructive!
                        aria-invalid:focus-visible:border-destructive!
                        aria-invalid:focus-visible:ring-destructive/20
                      "
                    />

                    <FloatingLabel
                      htmlFor="password"
                      text="Password"
                      error={!!passwordError}
                    />

                    {/* Password visibility */}
                    <button
                      type="button"
                      disabled={isPending}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={() => setShowPassword((previous) => !previous)}
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        rounded-md
                        p-1.5
                        text-muted-foreground
                        transition-all
                        duration-200

                        hover:bg-white/5
                        hover:text-foreground

                        disabled:pointer-events-none
                        disabled:opacity-50
                      "
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                </FieldErrorWrapper>

                {/* ---------------------------------------------------------- */}
                {/* Remember Me                                                */}
                {/* ---------------------------------------------------------- */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    pb-2
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2.5
                    "
                  >
                    <Checkbox
                      id="rememberMe"
                      name="rememberMe"
                      value="on"
                      disabled={isPending}
                      className="
                        border-white/20
                        data-[state=checked]:border-primary
                      "
                    />

                    <Label
                      htmlFor="rememberMe"
                      className="
                        cursor-pointer
                        select-none
                        text-xs
                        font-normal
                        text-muted-foreground
                        transition-colors

                        hover:text-foreground
                      "
                    >
                      Remember me
                    </Label>
                  </div>

                  <Link
                    href="/forgot-password"
                    className="
                      text-xs
                      font-medium
                      text-muted-foreground
                      transition-colors

                      hover:text-foreground
                    "
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isPending}
                  aria-disabled={isPending}
                  className="
                    group
                    h-12
                    w-full
                    rounded-xl
                    font-medium
                    shadow-sm
                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-lg

                    disabled:translate-y-0
                    disabled:cursor-not-allowed
                  "
                >
                  {isPending ? (
                    <>
                      <Spinner />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in
                      <ArrowRight
                        className="
                          ml-1
                          size-4
                          transition-transform
                          duration-300

                          group-hover:translate-x-1
                        "
                      />
                    </>
                  )}
                </Button>

                {/* Server Message */}
                <div className="h-6 pt-1">
                  <p
                    role="status"
                    className={`
      truncate
      text-center
      text-xs
      transition-all
      duration-200

      ${
        formState.message
          ? "translate-y-0 opacity-100"
          : "-translate-y-0.5 opacity-0"
      }

      ${formState.success ? "text-emerald-500" : "text-destructive"}
    `}
                  >
                    {formState.message ?? "placeholder"}
                  </p>
                </div>
              </form>

              {/* Security */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-xs
                  text-muted-foreground
                "
              >
                <ShieldCheck className="size-3.5" />
                Secure admin access
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Floating Label                                                             */
/* -------------------------------------------------------------------------- */

function FloatingLabel({
  htmlFor,
  text,
  error,
}: {
  htmlFor: string;
  text: string;
  error?: boolean;
}) {
  return (
    <Label
      htmlFor={htmlFor}
      className={`
        pointer-events-none
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-sm
        font-normal
        transition-all
        duration-200

        ${error ? "text-destructive" : "text-muted-foreground"}

        peer-focus:top-2.5
        peer-focus:translate-y-0
        peer-focus:text-xs

        peer-not-placeholder-shown:top-2.5
        peer-not-placeholder-shown:translate-y-0
        peer-not-placeholder-shown:text-xs

        ${error ? "peer-focus:text-destructive" : "peer-focus:text-foreground"}
      `}
    >
      {text}
    </Label>
  );
}

/* -------------------------------------------------------------------------- */
/* Error                                                                      */
/* -------------------------------------------------------------------------- */

function FieldErrorWrapper({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      {children}

      <div className="mt-1 min-h-4">
        <p
          role="alert"
          className={`
            text-xs
            text-destructive
            transition-all
            duration-200

            ${
              error ? "translate-y-0 opacity-100" : "-translate-y-0.5 opacity-0"
            }
          `}
        >
          {error ?? "placeholder"}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Feature                                                                    */
/* -------------------------------------------------------------------------- */

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex items-center gap-4">
      <div
        className="
          flex
          size-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-white/10
          bg-white/5
          transition-all
          duration-300

          group-hover:border-white/20
          group-hover:bg-white/10
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium">{title}</p>

        <p
          className="
            mt-0.5
            text-xs
            text-muted-foreground
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
