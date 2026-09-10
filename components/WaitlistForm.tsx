"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { waitlistSchema, type WaitlistFormValues } from "@/lib/schemas/waitlist";

async function joinWaitlist(payload: WaitlistFormValues) {
  try {
    const { data } = await axios.post<{ message: string }>(
      "/api/waitlist",
      payload,
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError<{ message?: string }>(error)) {
      throw new Error(
        error.response?.data?.message ?? "Something went wrong. Please try again.",
      );
    }
    throw error;
  }
}

export default function WaitlistForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
  });

  const mutation = useMutation({
    mutationFn: joinWaitlist,
    onSuccess: () => reset(),
  });

  const onSubmit = handleSubmit((data) => mutation.mutate(data));

  const message =
    errors.name?.message ||
    errors.email?.message ||
    (mutation.isError
      ? (mutation.error as Error).message
      : mutation.isSuccess
        ? mutation.data.message
        : "");

  const isSuccess = mutation.isSuccess && !errors.name && !errors.email;

  return (
    <div className="relative rounded-3xl border border-border bg-card p-8 shadow-2xl lg:p-10 ring-1 ring-black/5">
      <div className="absolute -top-4 -right-4 size-20 bg-primary/10 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center rotate-12">
        <span className="font-mono text-[10px] text-primary font-bold text-center leading-none uppercase">
          Priority
          <br />
          Access
        </span>
      </div>
      <h3 className="text-2xl font-bold tracking-tight mb-2">
        Secure your spot
      </h3>
      <p className="text-muted-foreground text-sm mb-8">
        Our 2026 placement queue is filling fast. Join the waitlist now!
      </p>

      <form
        onSubmit={onSubmit}
        className="space-y-4"
        aria-busy={mutation.isPending}
      >
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="text-[11px] font-mono font-bold uppercase tracking-widest text-muted-foreground"
          >
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Lawrence Nkum"
            disabled={mutation.isPending}
            {...register("name")}
            className="w-full rounded-xl border border-border bg-stone-50 px-4 py-3 text-sm text-stone-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-[11px] font-mono font-bold uppercase tracking-widest text-muted-foreground"
          >
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="lawrence@fliaffairs.com"
            disabled={mutation.isPending}
            {...register("email")}
            className="w-full rounded-xl border border-border bg-stone-50 px-4 py-3 text-sm text-stone-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-primary-foreground hover:opacity-90 transition-all active:scale-[0.98] shadow-lg disabled:opacity-60"
        >
          {mutation.isPending && (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          )}
          {mutation.isPending ? "Submitting..." : "Request Information Pack"}
        </button>
      </form>

      {message && (
        <p
          className={`text-center mt-4 text-sm ${isSuccess ? "text-primary" : "text-destructive"}`}
        >
          {message}
        </p>
      )}

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
        <div className="flex -space-x-2">
          <div className="size-7 rounded-full bg-stone-200 border-2 border-white" />
          <div className="size-7 rounded-full bg-stone-300 border-2 border-white" />
          <div className="size-7 rounded-full bg-stone-400 border-2 border-white" />
        </div>
        <p className="text-[11px] font-medium text-muted-foreground">
          Join like-mined enthusiasts who are taking a bold step.
        </p>
      </div>
    </div>
  );
}
