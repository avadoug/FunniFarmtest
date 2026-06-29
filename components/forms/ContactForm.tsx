"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const initialState = {
  name: "",
  email: "",
  message: "",
  wholesale: false,
  productQuestion: false,
  orderSupport: false,
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    setError("");

    const response = await fetch("/api/contact", {
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const payload = (await response.json()) as {
      error?: string;
      message?: string;
    };

    setLoading(false);

    if (!response.ok) {
      setError(payload.error ?? "Could not save the message.");
      return;
    }

    setStatus(payload.message ?? "Message saved.");
    setForm(initialState);
  }

  return (
    <form className="seed-card rounded-seed p-5 md:p-6" onSubmit={submit}>
      <h2 className="font-display text-3xl font-black text-forest-900">
        Send a Note
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label>
          <span className="text-sm font-black text-forest-900">Name</span>
          <input
            className="focus-ring mt-2 min-h-12 w-full rounded-2xl border border-forest-900/15 bg-white/70 px-4 text-sm font-semibold text-forest-900"
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            required
            value={form.name}
          />
        </label>
        <label>
          <span className="text-sm font-black text-forest-900">Email</span>
          <input
            className="focus-ring mt-2 min-h-12 w-full rounded-2xl border border-forest-900/15 bg-white/70 px-4 text-sm font-semibold text-forest-900"
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            required
            type="email"
            value={form.email}
          />
        </label>
        <label className="sm:col-span-2">
          <span className="text-sm font-black text-forest-900">Message</span>
          <textarea
            className="focus-ring mt-2 min-h-40 w-full rounded-2xl border border-forest-900/15 bg-white/70 px-4 py-3 text-sm font-semibold text-forest-900"
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            required
            value={form.message}
          />
        </label>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Check
          checked={form.wholesale}
          label="Wholesale inquiry"
          onChange={(value) =>
            setForm((current) => ({ ...current, wholesale: value }))
          }
        />
        <Check
          checked={form.productQuestion}
          label="Product question"
          onChange={(value) =>
            setForm((current) => ({ ...current, productQuestion: value }))
          }
        />
        <Check
          checked={form.orderSupport}
          label="Order support"
          onChange={(value) =>
            setForm((current) => ({ ...current, orderSupport: value }))
          }
        />
      </div>
      {status && (
        <p className="mt-4 rounded-2xl bg-forest-700/10 p-3 text-sm font-bold text-forest-900">
          {status}
        </p>
      )}
      {error && (
        <p className="mt-4 rounded-2xl bg-clay/10 p-3 text-sm font-bold text-clay">
          {error}
        </p>
      )}
      <Button className="mt-5" disabled={loading} type="submit">
        {loading ? "Saving..." : "Send Message"}
      </Button>
    </form>
  );
}

function Check({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 rounded-2xl border border-forest-900/10 bg-white/50 p-3 text-sm font-bold text-forest-900">
      <input
        checked={checked}
        className="size-4 accent-forest-700"
        onChange={(event) => onChange(event.target.checked)}
        type="checkbox"
      />
      {label}
    </label>
  );
}
