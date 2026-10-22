import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy | Kairo Pursuit",
};

export default function Privacy() {
  return (
    <section className="prose-page">
      <div className="wrap prose">
        <h1 className="h2">Privacy</h1>
        <p>
          When you send a request through this site, we receive the name,
          business name, email, and notes you enter. We use them only to reply
          to you and to talk about the work you asked about.
        </p>
        <p>
          We don&apos;t sell your information or share it with anyone outside
          Kairo Pursuit, except the email service that delivers your message to
          us.
        </p>
        <p>
          To have your information deleted, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
