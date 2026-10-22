import { profile } from "../data/profile";
import GlassButton from "./GlassButton";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-white/5 p-10 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Contact
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-sand">
                Let&apos;s work together
              </h2>
              <p className="mt-4 text-sand-dim">{profile.availability}</p>
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="block text-lg font-medium text-sand transition hover:text-accent-glow"
                >
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="block text-sand-dim transition hover:text-sand"
                >
                  {profile.phone}
                </a>
                <p className="text-sm text-sand-dim">{profile.location}</p>
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-block pt-2 text-sm font-medium text-accent-glow hover:underline"
                >
                  Download resume
                </a>
                <div className="flex gap-4 pt-2">
                  {Object.entries(profile.social).map(([key, href]) => (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm capitalize text-sand-dim underline-offset-4 hover:text-sand hover:underline"
                    >
                      {key}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <form
              className="space-y-4 p-10"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-sand-dim">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-xl border border-white/10 bg-ink/50 px-4 py-3 text-sand outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-sand-dim">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-white/10 bg-ink/50 px-4 py-3 text-sand outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-sand-dim">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-ink/50 px-4 py-3 text-sand outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
                  placeholder="Tell me about the role or project…"
                />
              </label>
              <GlassButton type="submit" size="lg" className="w-full">
                Send message
              </GlassButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
