"use client";

import {
  useEffect,
  useTransition,
} from "react";

import {
  AlertTriangle,
  Home,
  RefreshCcw,
} from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

type DashboardErrorProps = {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
};

export default function DashboardError({
  error,
  reset,
}: DashboardErrorProps) {
  const [isPending, startTransition] =
    useTransition();

  useEffect(() => {
    console.error(
      "Dashboard error:",
      error,
    );
  }, [error]);

  const handleRetry = () => {
    startTransition(() => {
      reset();
    });
  };

  return (
    <main className="flex min-h-[70vh] items-center justify-center p-4">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border bg-card shadow-sm">
        {/* Background Effects */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-destructive/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 left-10 size-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative p-6 sm:p-8">
          {/* Icon */}
          <div className="flex size-14 items-center justify-center rounded-2xl border border-destructive/20 bg-destructive/10">
            <AlertTriangle className="size-6 text-destructive" />
          </div>

          {/* Content */}
          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-widest text-destructive">
              Something went wrong
            </p>

            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              We couldn&apos;t load this page
            </h1>

            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              {getErrorMessage(error)}
            </p>
          </div>

          {/* Error ID */}
          {error.digest && (
            <div className="mt-6 rounded-xl border bg-muted/30 px-4 py-3">
              <p className="text-xs text-muted-foreground">
                Error reference
              </p>

              <p className="mt-1 font-mono text-xs text-foreground">
                {error.digest}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              disabled={isPending}
              onClick={handleRetry}
              className="h-10"
            >
              {isPending ? (
                <>
                  <Spinner data-icon="inline-start" />
                  Trying again...
                </>
              ) : (
                <>
                  <RefreshCcw className="size-4" />
                  Try Again
                </>
              )}
            </Button>

            <Button
              variant="outline"
              nativeButton={false}
              render={
                <Link href="/dashboard" />
              }
              className="h-10"
            >
              <Home className="size-4" />
              Dashboard
            </Button>
          </div>

          <p className="mt-6 text-xs leading-5 text-muted-foreground">
            If the problem continues, try refreshing the page or
            returning to the dashboard.
          </p>
        </div>
      </div>
    </main>
  );
}

function getErrorMessage(
  error: Error,
) {
  const allowedMessages = [
    "Failed to load users.",
    "Failed to load products.",
  ];

  if (
    allowedMessages.includes(
      error.message,
    )
  ) {
    return error.message;
  }

  return "An unexpected error occurred while loading the dashboard. Please try again.";
}