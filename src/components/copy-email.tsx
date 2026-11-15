"use client";

import { useEffect, useRef, useState } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type CopyEmailProps = {
  email: string;
};

export function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback for non-secure contexts (e.g. http:// on a LAN address).
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }

    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email ${email}`}
      className="group relative inline-flex cursor-pointer items-center"
    >
      <span>{email}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 grid place-items-center bg-ink rounded-md text-paper opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {copied ? <IconCheck size={14} stroke={2} /> : <IconCopy size={14} stroke={2} />}
      </span>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </button>
  );
}
