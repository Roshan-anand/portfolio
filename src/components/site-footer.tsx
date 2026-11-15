import { profile } from "@/lib/profile";
import { Ascii } from "ascii.rest/react";
import { CopyEmail } from "@/components/copy-email";

export function SiteFooter() {
  return (
    <footer className="foot relative flex items-center justify-center overflow-hidden mx-auto border-none! py-0!">
      <div className="absolute bottom-0 flex justify-between items-center w-full px-3 py-2">
        <p className="backdrop-blur-sm">© 2026 Roshan Anand</p>
        <CopyEmail email={profile.email} />
      </div>
      <Ascii piece="deep-reef" className="size-60 rounded-md" />
    </footer>
  );
}
