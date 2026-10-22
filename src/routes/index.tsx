import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/captured.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Emergency Plumber Keighley | Boiler Repair, Heating Engineer \u0026 Plumbing Services 24/7" },
    { name: "description", content: "24/7 emergency plumber in Keighley: boiler repair, heating engineers and plumbing services with fast local response." },
    { property: "og:title", content: "Emergency Plumber Keighley | 24/7 Plumbing \u0026 Boiler Repair" },
    { property: "og:description", content: "24/7 emergency plumber in Keighley: boiler repair, heating engineers and plumbing services with fast local response." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { "className": "\x5f_variable_f367f3", "lang": "en" }, body: { "className": "\x66ont-sans \x61ntialiased \x73election:\x62g-[#\x3435CFF]/\x330" } } },
  component: Index,
});

function Index() {
  return (<><style>{capturedCSS.replace(/(<\/|<)(s)(tyle)/gi, (_, prefix, letter, rest) => prefix + (letter === "s" ? "\\73 " : "\\53 ") + rest)}</style>
    <>
      <div hidden>
        {/* $ */}
        {/* /$ */}
      </div>
      <div className={"\x73ize-full \x62g-white"}>
        <div className={"\x62g-primary \x74ext-white \x70y-2 \x70x-4 \x74ext-center \x74ext-sm \x66ont-bold \x66lex \x66lex-wrap \x69tems-center \x6austify-center \x67ap-x-2 \x67ap-y-1"}>
          <div className={"\x66lex \x69tems-center \x67ap-2"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-flame \x77-4 \x68-4 \x61nimate-pulse"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
            <span>Limited Time Offer: Boiler Servicing from only £79!</span>
          </div>
          <a className={"\x75nderline \x68over:\x74ext-white/\x380 \x74ransition \x73hadow-sm"} href="#quote">Book Now →</a>
        </div>
        <nav className={"\x62g-white \x62order-b \x62order-gray-200 \x73ticky \x74op-0 \x7a-50 \x73hadow-sm"}>
          <div className={"\x6dax-w-7xl \x6dx-auto \x70x-2 \x73m:\x70x-6 \x6cg:\x70x-8"}>
            <div className={"\x66lex \x69tems-center \x6austify-between \x68-20"}>
              <a className={"\x66lex \x69tems-center \x68-16 \x77-[\x3180px] \x72elative \x66lex-shrink-0"} href="/">
                <img alt={"Emergency Plumbing & Heating — Gastech 24/7 Plumbing & Heating Services"} className={"\x6fbject-contain \x6fbject-left"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="180px" srcSet="/site-assets/2fc9a77ad3880561.webp 16w, /site-assets/2a37513da94443ca.webp 32w, /site-assets/16dfed2d0a4140df.webp 48w, /site-assets/89822bb8bb6700ff.webp 64w, /site-assets/e53bd4f0dcf4d9b4.webp 96w, /site-assets/fdc85b33b33c9495.webp 128w, /site-assets/a1faa1198597cf62.webp 256w, /site-assets/f1169b0928c86755.webp 384w, /site-assets/a7dab452c400f234.webp 640w, /site-assets/41ab1e5a2041bd86.webp 750w, /site-assets/da2c11b2d49dfc2f.webp 828w, /site-assets/79f23c168944f36d.webp 1080w, /site-assets/79f23c168944f36d.webp 1200w, /site-assets/79f23c168944f36d.webp 1920w, /site-assets/79f23c168944f36d.webp 2048w, /site-assets/79f23c168944f36d.webp 3840w" src="/site-assets/79f23c168944f36d.webp" {...({ decoding: "async" } as any)} />
              </a>
              <div className={"\x68idden \x6cg:\x66lex \x69tems-center \x67ap-7 \x78l:\x67ap-8"}>
                <a className={"\x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x66ont-medium \x74ext-sm \x78l:\x74ext-base"} href="/">About</a>
                <a className={"\x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x66ont-medium \x74ext-sm \x78l:\x74ext-base"} href="/">Services</a>
                <a className={"\x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x66ont-medium \x74ext-sm \x78l:\x74ext-base"} href="/">Areas We Cover</a>
                <a className={"\x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x66ont-medium \x74ext-sm \x78l:\x74ext-base"} href="/#reviews">Reviews</a>
                <a className={"\x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x66ont-medium \x74ext-sm \x78l:\x74ext-base"} href="/#process">How It Works</a>
                <a className={"\x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x66ont-medium \x74ext-sm \x78l:\x74ext-base"} href="/">FAQ</a>
                <a className={"\x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x66ont-medium \x74ext-sm \x78l:\x74ext-base"} href="/">Contact</a>
              </div>
              <div className={"\x66lex \x69tems-center \x67ap-2 \x73m:\x67ap-3"}>
                <a className={"\x62g-primary \x68over:\x62g-primary-hover \x74ext-white \x70x-3 \x73m:\x70x-5 \x6cg:\x70x-6 \x70y-2.\x35 \x73m:\x70y-3 \x72ounded-lg \x66ont-bold \x74ransition \x66lex \x69tems-center \x67ap-2 \x74ext-sm \x73m:\x74ext-base \x6cg:\x74ext-lg"} href="tel:07598088229">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-phone \x77-4 \x68-4 \x73m:\x77-5 \x73m:\x68-5"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className={"\x68idden \x73m:\x69nline"}>07598 088229</span>
                  <span className={"\x73m:\x68idden"}>Call Now</span>
                </a>
                <button type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" className={"\x6cg:\x68idden \x69nline-flex \x69tems-center \x6austify-center \x68-11 \x77-11 \x72ounded-lg \x74ext-gray-700 \x68over:\x62g-gray-100 \x68over:\x74ext-primary \x74ransition"}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-menu \x77-6 \x68-6"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="mobile-menu" className={"\x6cg:\x68idden \x66ixed \x69nset-x-0 \x74op-20 \x62ottom-0 \x62g-white \x7a-40 \x74ransition-transform \x64uration-200 \x65ase-out \x74ranslate-x-full \x70ointer-events-none"} aria-hidden="true">
            <div className={"\x68-full \x6fverflow-y-auto"}>
              <nav className={"\x70x-4 \x70y-6"}>
                <ul className={"\x73pace-y-1"}>
                  <li>
                    <a className={"\x62lock \x70y-4 \x70x-4 \x74ext-lg \x66ont-semibold \x74ext-gray-900 \x68over:\x62g-gray-50 \x68over:\x74ext-primary \x72ounded-lg \x74ransition \x62order-b \x62order-gray-100"} href="/">About</a>
                  </li>
                  <li>
                    <a className={"\x62lock \x70y-4 \x70x-4 \x74ext-lg \x66ont-semibold \x74ext-gray-900 \x68over:\x62g-gray-50 \x68over:\x74ext-primary \x72ounded-lg \x74ransition \x62order-b \x62order-gray-100"} href="/">Services</a>
                  </li>
                  <li>
                    <a className={"\x62lock \x70y-4 \x70x-4 \x74ext-lg \x66ont-semibold \x74ext-gray-900 \x68over:\x62g-gray-50 \x68over:\x74ext-primary \x72ounded-lg \x74ransition \x62order-b \x62order-gray-100"} href="/">Areas We Cover</a>
                  </li>
                  <li>
                    <a className={"\x62lock \x70y-4 \x70x-4 \x74ext-lg \x66ont-semibold \x74ext-gray-900 \x68over:\x62g-gray-50 \x68over:\x74ext-primary \x72ounded-lg \x74ransition \x62order-b \x62order-gray-100"} href="/#reviews">Reviews</a>
                  </li>
                  <li>
                    <a className={"\x62lock \x70y-4 \x70x-4 \x74ext-lg \x66ont-semibold \x74ext-gray-900 \x68over:\x62g-gray-50 \x68over:\x74ext-primary \x72ounded-lg \x74ransition \x62order-b \x62order-gray-100"} href="/#process">How It Works</a>
                  </li>
                  <li>
                    <a className={"\x62lock \x70y-4 \x70x-4 \x74ext-lg \x66ont-semibold \x74ext-gray-900 \x68over:\x62g-gray-50 \x68over:\x74ext-primary \x72ounded-lg \x74ransition \x62order-b \x62order-gray-100"} href="/">FAQ</a>
                  </li>
                  <li>
                    <a className={"\x62lock \x70y-4 \x70x-4 \x74ext-lg \x66ont-semibold \x74ext-gray-900 \x68over:\x62g-gray-50 \x68over:\x74ext-primary \x72ounded-lg \x74ransition \x62order-b \x62order-gray-100"} href="/">Contact</a>
                  </li>
                </ul>
                <div className={"\x6dt-6 \x70x-4 \x73pace-y-3"}>
                  <a className={"\x66lex \x69tems-center \x6austify-center \x67ap-2 \x62g-primary \x68over:\x62g-primary-hover \x74ext-white \x66ont-bold \x70y-4 \x72ounded-xl \x74ransition \x73hadow-md"} href="tel:07598088229"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-phone \x77-5 \x68-5"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>Call 07598 088229</a>
                  <a className={"\x66lex \x69tems-center \x6austify-center \x67ap-2 \x62g-gray-900 \x74ext-white \x68over:\x62g-black \x66ont-bold \x70y-4 \x72ounded-xl \x74ransition"} href="/">Get a Free Quote</a>
                </div>
                <p className={"\x6dt-8 \x70x-4 \x74ext-xs \x74ext-gray-500 \x74ext-center"}>Gas Safe registered · 24/7 emergency response · Fixed pricing</p>
              </nav>
            </div>
          </div>
        </nav>
        <main>
          <div>
            <section className={"\x72elative \x62g-gradient-to-br \x66rom-gray-800 \x74o-gray-900 \x74ext-white \x6fverflow-hidden"}>
              <div className={"\x61bsolute \x69nset-0 \x6fpacity-20"}>
                <img alt="Professional plumber working on heating system" className={"\x6fbject-cover"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/67ed0e120e0df0ad.webp 640w, /site-assets/516b98fcfabea09f.webp 750w, /site-assets/e4a5d986d1fbc344.webp 828w, /site-assets/ce144be7e63c3caa.webp 1080w, /site-assets/4af9b2e237f7c94b.webp 1200w, /site-assets/2fcf6769a18a3e08.webp 1920w, /site-assets/2fcf6769a18a3e08.webp 2048w, /site-assets/2fcf6769a18a3e08.webp 3840w" src="/site-assets/2fcf6769a18a3e08.webp" {...({ decoding: "async" } as any)} />
              </div>
              <div className={"\x72elative \x6dax-w-7xl \x6dx-auto \x70x-6 \x73m:\x70x-6 \x6cg:\x70x-8 \x70y-16 \x6cg:\x70y-28"}>
                <div className={"\x67rid \x6cg:\x67rid-cols-2 \x67ap-12 \x69tems-center"}>
                  <div className={"\x73pace-y-8"}>
                    <div className={"\x73pace-y-3"}>
                      <div className={"\x66lex \x69tems-center \x67ap-2 \x62g-accent/\x320 \x62ackdrop-blur-sm \x70x-4 \x70y-2 \x72ounded-full \x62order \x62order-accent  \x77-fit"}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-flame \x77-5 \x68-5 \x74ext-accent \x61nimate-pulse \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                        </svg>
                        <span className={"\x66ont-bold \x74ext-accent \x74ext-sm \x73m:\x74ext-base \x77-fit"}>Boiler Servicing from £79</span>
                      </div>
                      <div className={"\x66lex \x69tems-center \x67ap-2 \x62g-white/\x310 \x62ackdrop-blur-sm \x70x-4 \x70y-2 \x72ounded-full  \x77-fit"}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x74ext-accent \x66ill-accent \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                        <span className={"\x66ont-bold \x74ext-sm \x73m:\x74ext-base"}>5.0 Google Reviews</span>
                      </div>
                      <div className={"\x66lex \x69tems-center \x67ap-2 \x62g-white/\x310 \x62ackdrop-blur-sm \x70x-4 \x70y-2 \x72ounded-full  \x77-fit"}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-shield \x77-5 \x68-5 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        </svg>
                        <span className={"\x66ont-bold \x74ext-sm \x73m:\x74ext-base"}>Licensed Plumbers / Gas Engineers</span>
                      </div>
                      <div className={"\x66lex \x69tems-center \x67ap-2 \x62g-white/\x310 \x62ackdrop-blur-sm \x70x-4 \x70y-2 \x72ounded-full  \x77-fit"}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-clock \x77-5 \x68-5 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span className={"\x66ont-bold \x74ext-sm \x73m:\x74ext-base"}>24/7 Emergency Plumber</span>
                      </div>
                    </div>
                    <h1 className={"\x74ext-3xl \x73m:\x74ext-5xl \x6cg:\x74ext-6xl \x66ont-bold \x6ceading-tight \x62reak-words"}>24/7 Emergency Plumbers and Gas Engineers in {/*  */}Keighley{/*  */} and surrounding areas, Same Day Service <span className={"\x74ext-primary"}>Guaranteed</span></h1>
                    <p className={"\x74ext-sm \x73m:\x74ext-xl \x74ext-gray-200"}>Book a free quote in under a minute. Our local emergency plumbers and gas engineers in {/*  */}Keighley{/*  */} respond fast to leaking pipe, burst pipe, leaks, boiler repairs and installation, blocked drains across nearby areas. We offer planned and reactive maintenance to suit your requirements.            </p>
                    <div className={"\x62g-primary/\x320 \x62order-2 \x62order-primary \x70-6 \x72ounded-xl"}>
                      <div className={"\x66lex \x69tems-start \x67ap-3"}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <div>
                          <p className={"\x66ont-bold \x74ext-lg \x6db-2"}> Our Service Guarantee:</p>
                          <ul className={"\x73pace-y-1 \x74ext-gray-200"}>
                            <li>✓ Fast same-day plumbing and heating response</li>
                            <li>✓ Fixed right the first time</li>
                            <li>✓ Transparent local pricing</li>
                            <li>✓ Trusted {/*  */}Keighley{/*  */} plumbing experts</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={"\x66lex \x66lex-col \x73m:\x66lex-row \x67ap-4 \x70t-2"}>
                      <a className={"\x62g-primary \x68over:\x62g-primary-hover \x70x-8 \x70y-5 \x72ounded-xl \x66ont-bold \x74ext-xl \x74ransition \x69nline-flex \x69tems-center \x6austify-center \x67ap-2 \x73hadow-lg \x68over:\x73hadow-xl"} href="#quote">Get Your Free Quote<span className={"\x74ext-2xl"}>→</span></a>
                      <a className={"\x62g-white \x74ext-gray-900 \x68over:\x62g-gray-100 \x70x-8 \x70y-5 \x72ounded-xl \x66ont-bold \x74ext-xl \x74ransition \x69nline-flex \x69tems-center \x6austify-center \x67ap-2 \x62order-2 \x62order-white"} href="tel:07598088229"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-phone \x77-6 \x68-6"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>07598 088229</a>
                    </div>
                    <div className={"\x66lex \x69tems-center \x67ap-2 \x74ext-primary \x62g-white/\x310 \x62ackdrop-blur-sm \x70x-4 \x70y-4 \x72ounded-lg \x77-fit"}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-alert \x77-5 \x68-5 \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="12" />
                        <line x1="12" x2="12.01" y1="16" y2="16" />
                      </svg>
                      <span className={"\x66ont-semibold"}>Trusted Local plumbers and gas engineers</span>
                    </div>
                  </div>
                  <div className={"\x72elative \x7a-10 \x77-full \x66lex \x69tems-center \x6austify-center \x6cg:\x6austify-end"}>
                    <div className={"\x77-full \x6dax-w-lg \x70x-0 \x73croll-mt-24"} id="quote">
                      <div className={"\x62g-white \x74ext-gray-900 \x70-4 \x73m:\x70-8 \x72ounded-2xl \x73hadow-2xl \x77-full \x6dx-auto \x6din-h-[\x3600px] \x66lex \x66lex-col"}>
                        <div className={"\x74ext-center \x6db-6"}>
                          <h3 className={"\x74ext-2xl \x66ont-bold \x6db-2"}>Get Your FREE Quote</h3>
                          <p className={"\x74ext-gray-600"}>Takes 60 seconds. No obligation.</p>
                          <p className={"\x74ext-sm \x74ext-primary \x66ont-semibold \x6dt-2"}>⚡ We typically respond within 60/90 minutes</p>
                        </div>
                        <form className={"\x73pace-y-4"}>
                          <input type="text" placeholder="Your Full Name *" className={"\x77-full \x70x-4 \x70y-3 \x72ounded-lg \x62order-2 \x62order-gray-300 \x66ocus:\x62order-primary \x66ocus:\x72ing-2 \x66ocus:\x72ing-primary/\x320 \x6futline-none \x74ransition"} required name="name" />
                          <input type="tel" placeholder="Mobile Number *" className={"\x77-full \x70x-4 \x70y-3 \x72ounded-lg \x62order-2 \x62order-gray-300 \x66ocus:\x62order-primary \x66ocus:\x72ing-2 \x66ocus:\x72ing-primary/\x320 \x6futline-none \x74ransition"} required name="phone" />
                          <input type="email" placeholder="Email Address" className={"\x77-full \x70x-4 \x70y-3 \x72ounded-lg \x62order-2 \x62order-gray-300 \x66ocus:\x62order-primary \x66ocus:\x72ing-2 \x66ocus:\x72ing-primary/\x320 \x6futline-none \x74ransition"} name="email" />
                          <div className={"\x67rid \x67rid-cols-1 \x73m:\x67rid-cols-2 \x67ap-4"}>
                            <input type="text" placeholder="Postcode *" className={"\x77-full \x70x-4 \x70y-3 \x72ounded-lg \x62order-2 \x62order-gray-300 \x66ocus:\x62order-primary \x66ocus:\x72ing-2 \x66ocus:\x72ing-primary/\x320 \x6futline-none \x74ransition \x75ppercase"} required name="postcode" />
                            <input type="text" placeholder={"House Number & Street *"} className={"\x77-full \x70x-4 \x70y-3 \x72ounded-lg \x62order-2 \x62order-gray-300 \x66ocus:\x62order-primary \x66ocus:\x72ing-2 \x66ocus:\x72ing-primary/\x320 \x6futline-none \x74ransition"} required name="address" />
                          </div>
                          <div className={"\x62b-custom-select-container \x62b-customSelect"}>
                            <span className={"\x62b-custom-select-opener"} role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-dXlbj-panel" aria-activedescendant="bb-customSelect-dXlbj-selectedOption" tabIndex={0}>
                              <span>What do you need? *</span>
                            </span>
                            <select name="service" className={"\x77-full \x70x-4 \x70y-3 \x72ounded-lg \x62order-2 \x62order-gray-300 \x66ocus:\x62order-primary \x66ocus:\x72ing-2 \x66ocus:\x72ing-primary/\x320 \x6futline-none \x74ransition"} required tabIndex={-1} defaultValue="">
                              <option value="">What do you need? *</option>
                              <option>Boiler repair</option>
                              <option>Boiler service</option>
                              <option>Boiler installation</option>
                              <option>Blocked drain repair</option>
                              <option>Blocked toilet repair</option>
                              <option>Leak pipe repair</option>
                              <option>Drain unblocking</option>
                              <option>Dish washer installation</option>
                              <option>Emergency plumbing</option>
                              <option>Electric shower replacement</option>
                              <option>Gas cooker replacement</option>
                              <option>General plumbing issue</option>
                              <option>Gas/electric hob replacement</option>
                              <option>Outdoor tap replacement/repair</option>
                              <option>Pipework adjustment</option>
                              <option>Radiator replacement</option>
                              <option>Radiator valve repair</option>
                              <option>Shower replacement/repair</option>
                              <option>Same day plumber</option>
                              <option>Stop cock repair/replace</option>
                              <option>Tap replacement</option>
                              <option>Tap repair</option>
                              <option>Bathroom repair</option>
                              <option>Thermostat installation</option>
                              <option>Other</option>
                            </select>
                            <div id="bb-customSelect-dXlbj-panel" className={"\x62b-custom-select-panel"} role="listbox">
                              <div className={"\x62b-custom-select-option \x62b-is-selected \x62b-has-focus"} role="option" id="bb-customSelect-dXlbj-selectedOption">What do you need? *</div>
                              <div className={"\x62b-custom-select-option"} role="option">Boiler repair</div>
                              <div className={"\x62b-custom-select-option"} role="option">Boiler service</div>
                              <div className={"\x62b-custom-select-option"} role="option">Boiler installation</div>
                              <div className={"\x62b-custom-select-option"} role="option">Blocked drain repair</div>
                              <div className={"\x62b-custom-select-option"} role="option">Blocked toilet repair</div>
                              <div className={"\x62b-custom-select-option"} role="option">Leak pipe repair</div>
                              <div className={"\x62b-custom-select-option"} role="option">Drain unblocking</div>
                              <div className={"\x62b-custom-select-option"} role="option">Dish washer installation</div>
                              <div className={"\x62b-custom-select-option"} role="option">Emergency plumbing</div>
                              <div className={"\x62b-custom-select-option"} role="option">Electric shower replacement</div>
                              <div className={"\x62b-custom-select-option"} role="option">Gas cooker replacement</div>
                              <div className={"\x62b-custom-select-option"} role="option">General plumbing issue</div>
                              <div className={"\x62b-custom-select-option"} role="option">Gas/electric hob replacement</div>
                              <div className={"\x62b-custom-select-option"} role="option">Outdoor tap replacement/repair</div>
                              <div className={"\x62b-custom-select-option"} role="option">Pipework adjustment</div>
                              <div className={"\x62b-custom-select-option"} role="option">Radiator replacement</div>
                              <div className={"\x62b-custom-select-option"} role="option">Radiator valve repair</div>
                              <div className={"\x62b-custom-select-option"} role="option">Shower replacement/repair</div>
                              <div className={"\x62b-custom-select-option"} role="option">Same day plumber</div>
                              <div className={"\x62b-custom-select-option"} role="option">Stop cock repair/replace</div>
                              <div className={"\x62b-custom-select-option"} role="option">Tap replacement</div>
                              <div className={"\x62b-custom-select-option"} role="option">Tap repair</div>
                              <div className={"\x62b-custom-select-option"} role="option">Bathroom repair</div>
                              <div className={"\x62b-custom-select-option"} role="option">Thermostat installation</div>
                              <div className={"\x62b-custom-select-option"} role="option">Other</div>
                            </div>
                          </div>
                          <div>
                            <textarea name="description" maxLength={500} rows={4} placeholder="Briefly describe the issue (optional) — e.g. boiler not heating water, leak under kitchen sink, blocked bathroom upstairs..." className={"\x77-full \x70x-4 \x70y-3 \x72ounded-lg \x62order-2 \x62order-gray-300 \x66ocus:\x62order-primary \x66ocus:\x72ing-2 \x66ocus:\x72ing-primary/\x320 \x6futline-none \x74ransition \x72esize-y"} />
                            <div className={"\x66lex \x6austify-end \x6dt-1"}>
                              <span className={"\x74ext-xs \x74ext-gray-500"}>0{/*  */}/{/*  */}500</span>
                            </div>
                          </div>
                          <button className={"\x77hitespace-nowrap \x64isabled:\x70ointer-events-none \x64isabled:\x6fpacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg:\x6eot([\x63lass*='\x73ize-'])]:\x73ize-4 \x73hrink-0 [&\x5fsvg]:\x73hrink-0 \x6futline-none \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-ring/\x350 \x66ocus-visible:\x72ing-[\x33px] \x61ria-invalid:\x72ing-destructive/\x320 \x64ark:\x61ria-invalid:\x72ing-destructive/\x340 \x61ria-invalid:\x62order-destructive \x72ounded-md \x70x-6 \x68as-[>\x73vg]:\x70x-4 \x77-full \x62g-primary \x68over:\x62g-primary-hover \x74ext-white \x66ont-bold \x74ext-lg \x68-auto \x70y-4 \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ransition-all \x61ctive:\x73cale-[\x30.\x398]"} type="submit">Get My FREE Quote →</button>
                          <p className={"\x74ext-xs \x74ext-gray-500 \x74ext-center"}>No spam. Your details stay private.</p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className={"\x72elative \x62g-white \x70y-12 \x6cg:\x70y-16 \x6fverflow-hidden"}>
              <div className={"\x6dax-w-7xl \x6dx-auto \x70x-0 \x73m:\x70x-6 \x6cg:\x70x-0"}>
                <div className={"\x72elative"}>
                  <div className={"\x6fverflow-hidden"}>
                    <div className={"\x66lex \x67ap-8 \x74ransition-transform \x64uration-[\x33000ms] \x65ase-in-out"} style={{ transform: "translateX(-100%)" } as unknown as CSSProperties}>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="BAXI" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/eeda544838180b23.webp 640w, /site-assets/eeda544838180b23.webp 750w, /site-assets/eeda544838180b23.webp 828w, /site-assets/eeda544838180b23.webp 1080w, /site-assets/eeda544838180b23.webp 1200w, /site-assets/eeda544838180b23.webp 1920w, /site-assets/eeda544838180b23.webp 2048w, /site-assets/eeda544838180b23.webp 3840w" src="/site-assets/eeda544838180b23.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="Ideal Heating" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/f2c4fa993550d30c.webp 640w, /site-assets/67db0da07d8cb1c0.webp 750w, /site-assets/67db0da07d8cb1c0.webp 828w, /site-assets/67db0da07d8cb1c0.webp 1080w, /site-assets/67db0da07d8cb1c0.webp 1200w, /site-assets/67db0da07d8cb1c0.webp 1920w, /site-assets/67db0da07d8cb1c0.webp 2048w, /site-assets/67db0da07d8cb1c0.webp 3840w" src="/site-assets/67db0da07d8cb1c0.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="Worcester" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/48c7e95e720ee309.webp 640w, /site-assets/e802c4dc7dc1d8f9.webp 750w, /site-assets/f4343ff9743e540c.webp 828w, /site-assets/e6c2249b5fc411a1.webp 1080w, /site-assets/f9c3ca5a15905c3f.webp 1200w, /site-assets/5e25d1378a6b701f.webp 1920w, /site-assets/5e25d1378a6b701f.webp 2048w, /site-assets/5e25d1378a6b701f.webp 3840w" src="/site-assets/5e25d1378a6b701f.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="Vaillant" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/d5afe54bbd73634b.webp 640w, /site-assets/a33cc49db6dddf7c.webp 750w, /site-assets/ab810773b053789b.webp 828w, /site-assets/1bf96e90678757e9.webp 1080w, /site-assets/1bf96e90678757e9.webp 1200w, /site-assets/1bf96e90678757e9.webp 1920w, /site-assets/1bf96e90678757e9.webp 2048w, /site-assets/1bf96e90678757e9.webp 3840w" src="/site-assets/1bf96e90678757e9.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="Viessmann" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/de4280118e9f564c.webp 640w, /site-assets/b34192f19c18e62c.webp 750w, /site-assets/888b0d5f95da67dd.webp 828w, /site-assets/5496403d9b187181.webp 1080w, /site-assets/d9e82f5d0b270ffe.webp 1200w, /site-assets/540b6f46a3492245.webp 1920w, /site-assets/540b6f46a3492245.webp 2048w, /site-assets/540b6f46a3492245.webp 3840w" src="/site-assets/540b6f46a3492245.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="Brand 6" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/cf23009367841435.webp 640w, /site-assets/eaadf07128abae2f.webp 750w, /site-assets/e5df0b25b8c811b6.webp 828w, /site-assets/c44298204ab09370.webp 1080w, /site-assets/fb5318dbacb561f6.webp 1200w, /site-assets/f24101ad26162475.webp 1920w, /site-assets/f24101ad26162475.webp 2048w, /site-assets/f24101ad26162475.webp 3840w" src="/site-assets/f24101ad26162475.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="BAXI" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/eeda544838180b23.webp 640w, /site-assets/eeda544838180b23.webp 750w, /site-assets/eeda544838180b23.webp 828w, /site-assets/eeda544838180b23.webp 1080w, /site-assets/eeda544838180b23.webp 1200w, /site-assets/eeda544838180b23.webp 1920w, /site-assets/eeda544838180b23.webp 2048w, /site-assets/eeda544838180b23.webp 3840w" src="/site-assets/eeda544838180b23.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="Ideal Heating" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/f2c4fa993550d30c.webp 640w, /site-assets/67db0da07d8cb1c0.webp 750w, /site-assets/67db0da07d8cb1c0.webp 828w, /site-assets/67db0da07d8cb1c0.webp 1080w, /site-assets/67db0da07d8cb1c0.webp 1200w, /site-assets/67db0da07d8cb1c0.webp 1920w, /site-assets/67db0da07d8cb1c0.webp 2048w, /site-assets/67db0da07d8cb1c0.webp 3840w" src="/site-assets/67db0da07d8cb1c0.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="Worcester" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/48c7e95e720ee309.webp 640w, /site-assets/e802c4dc7dc1d8f9.webp 750w, /site-assets/f4343ff9743e540c.webp 828w, /site-assets/e6c2249b5fc411a1.webp 1080w, /site-assets/f9c3ca5a15905c3f.webp 1200w, /site-assets/5e25d1378a6b701f.webp 1920w, /site-assets/5e25d1378a6b701f.webp 2048w, /site-assets/5e25d1378a6b701f.webp 3840w" src="/site-assets/5e25d1378a6b701f.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="Vaillant" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/d5afe54bbd73634b.webp 640w, /site-assets/a33cc49db6dddf7c.webp 750w, /site-assets/ab810773b053789b.webp 828w, /site-assets/1bf96e90678757e9.webp 1080w, /site-assets/1bf96e90678757e9.webp 1200w, /site-assets/1bf96e90678757e9.webp 1920w, /site-assets/1bf96e90678757e9.webp 2048w, /site-assets/1bf96e90678757e9.webp 3840w" src="/site-assets/1bf96e90678757e9.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="Viessmann" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/de4280118e9f564c.webp 640w, /site-assets/b34192f19c18e62c.webp 750w, /site-assets/888b0d5f95da67dd.webp 828w, /site-assets/5496403d9b187181.webp 1080w, /site-assets/d9e82f5d0b270ffe.webp 1200w, /site-assets/540b6f46a3492245.webp 1920w, /site-assets/540b6f46a3492245.webp 2048w, /site-assets/540b6f46a3492245.webp 3840w" src="/site-assets/540b6f46a3492245.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-shrink-0"} style={{ width: "20%" } as unknown as CSSProperties}>
                        <div className={"\x66lex \x69tems-center \x6austify-center \x68-24 \x62g-gray-50 \x72ounded-lg \x70-4"}>
                          <div className={"\x72elative \x77-full \x68-16"}>
                            <img alt="Brand 6" className={"\x6fbject-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="100vw" srcSet="/site-assets/cf23009367841435.webp 640w, /site-assets/eaadf07128abae2f.webp 750w, /site-assets/e5df0b25b8c811b6.webp 828w, /site-assets/c44298204ab09370.webp 1080w, /site-assets/fb5318dbacb561f6.webp 1200w, /site-assets/f24101ad26162475.webp 1920w, /site-assets/f24101ad26162475.webp 2048w, /site-assets/f24101ad26162475.webp 3840w" src="/site-assets/f24101ad26162475.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* $ */}
          {/* $ */}
          <section className={"\x70y-8 \x6dd:\x70y-24 \x62g-white"}>
            <div className={"\x6dax-w-7xl \x6dx-auto \x70x-2 \x6cg:\x70x-8"}>
              <div className={"\x74ext-center \x6db-8 \x6dd:\x6db-16 \x73pace-y-4"}>
                <h2 className={"\x74ext-2xl \x6dd:\x74ext-5xl \x66ont-extrabold \x74ext-[#\x30D253F]"}>Tired of Unreliable Plumbers?</h2>
                <p className={"\x74ext-sm \x6dd:\x74ext-xl \x74ext-gray-500 \x6dax-w-3xl \x6dx-auto"}>You're not alone. Here's what <span className={"\x66ont-semibold \x74ext-gray-700"}>Homeowners/customers</span> say they hate about hiring plumbers:</p>
              </div>
              <div className={"\x67rid \x6dd:\x67rid-cols-3 \x67ap-8"}>
                <div className={"\x62g-white \x70-10 \x72ounded-2xl \x62order \x62order-gray-100 \x73hadow-lg \x68over:\x73hadow-xl \x74ransition-shadow \x64uration-300 \x73pace-y-6"}>
                  <div className={"\x66lex \x69tems-start \x67ap-4"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-alert \x77-8 \x68-6 \x74ext-red-500 \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    <span className={"\x74ext-lg \x74ext-gray-700 \x6ceading-tight \x70t-1"}> They never show up on time</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-4"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-lg \x74ext-[#\x30D253F] \x66ont-bold \x6ceading-tight \x70t-1"}> We arrive on time or your call-out fee is reduced</span>
                  </div>
                </div>
                <div className={"\x62g-white \x70-10 \x72ounded-2xl \x62order \x62order-gray-100 \x73hadow-lg \x68over:\x73hadow-xl \x74ransition-shadow \x64uration-300 \x73pace-y-6"}>
                  <div className={"\x66lex \x69tems-start \x67ap-4"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-alert \x77-8 \x68-6 \x74ext-red-500 \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    <span className={"\x74ext-lg \x74ext-gray-700 \x6ceading-tight \x70t-1"}> Hidden fees and price surprises</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-4"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-lg \x74ext-[#\x30D253F] \x66ont-bold \x6ceading-tight \x70t-1"}> Clear fixed pricing quoted upfront</span>
                  </div>
                </div>
                <div className={"\x62g-white \x70-10 \x72ounded-2xl \x62order \x62order-gray-100 \x73hadow-lg \x68over:\x73hadow-xl \x74ransition-shadow \x64uration-300 \x73pace-y-6"}>
                  <div className={"\x66lex \x69tems-start \x67ap-4"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-alert \x77-8 \x68-6 \x74ext-red-500 \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    <span className={"\x74ext-lg \x74ext-gray-700 \x6ceading-tight \x70t-1"}>Takes days to get a quote back</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-4"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-lg \x74ext-[#\x30D253F] \x66ont-bold \x6ceading-tight \x70t-1"}>Fast response within 15 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /$ */}
          {/* /$ */}
          <section className={"\x70y-8 \x6dd:\x70y-20 \x62g-white"}>
            <div className={"\x6dax-w-7xl \x6dx-auto \x70x-2 \x6cg:\x70x-8"}>
              <div className={"\x74ext-center \x6db-8 \x6dd:\x6db-12"}>
                <h2 className={"\x74ext-2xl \x6dd:\x74ext-4xl \x66ont-bold \x74ext-gray-900 \x6db-4"}>What You Get When You Book With Us</h2>
                <p className={"\x74ext-sm \x6dd:\x74ext-xl \x74ext-gray-600"}>More than a plumber. A fast, reliable <b>plumbing service</b> you can trust.</p>
              </div>
              <div className={"\x62g-gradient-to-br \x66rom-gray-50 \x74o-gray-100 \x70-8 \x6cg:\x70-12 \x72ounded-2xl \x62order-2 \x62order-primary"}>
                <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-6"}>
                  <div className={"\x66lex \x69tems-start \x67ap-3"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-gray-900 \x66ont-medium \x74ext-lg"}> FREE no-obligation quote within 60 minutes</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-3"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-gray-900 \x66ont-medium \x74ext-lg"}>Same-day plumbing and heating service available</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-3"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-gray-900 \x66ont-medium \x74ext-lg"}> Fixed pricing — no hidden plumbing fees</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-3"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-gray-900 \x66ont-medium \x74ext-lg"}> 15+ years professional plumbing experience</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-3"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-gray-900 \x66ont-medium \x74ext-lg"}>Full-year warranty on parts supplied</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-3"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-gray-900 \x66ont-medium \x74ext-lg"}>Workmanship guarantee</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-3"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-gray-900 \x66ont-medium \x74ext-lg"}>We clean up and leave your home spotless</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-3"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-gray-900 \x66ont-medium \x74ext-lg"}> 24/7 emergency plumbing service</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-3"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-gray-900 \x66ont-medium \x74ext-lg"}>Fully licensed, insured &amp; certified plumbers</span>
                  </div>
                  <div className={"\x66lex \x69tems-start \x67ap-3"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className={"\x74ext-gray-900 \x66ont-medium \x74ext-lg"}> Friendly local plumbers who respect your home</span>
                  </div>
                </div>
                <div className={"\x6dt-10 \x66lex \x66lex-col \x73m:\x66lex-row \x67ap-4 \x6austify-center"}>
                  <a className={"\x62g-primary \x68over:\x62g-primary-hover \x74ext-white \x70x-8 \x70y-4 \x72ounded-xl \x66ont-bold \x74ext-lg \x74ransition \x69nline-flex \x69tems-center \x6austify-center \x67ap-2 \x73hadow-lg"} href="#quote">Book Your FREE Quote<span className={"\x74ext-xl"}>→</span></a>
                  <a className={"\x62g-white \x74ext-gray-900 \x68over:\x62g-gray-50 \x70x-8 \x70y-4 \x72ounded-xl \x66ont-bold \x74ext-lg \x74ransition \x69nline-flex \x69tems-center \x6austify-center \x67ap-2 \x62order-2 \x62order-gray-300"} href="tel:07598088229"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-phone \x77-6 \x68-6"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>Call 07598 088229</a>
                </div>
              </div>
            </div>
          </section>
          {/* $ */}
          <section id="process" className={"\x70y-8 \x6dd:\x70y-24 \x62g-gray-50/\x350 \x73croll-mt-24"}>
            <div className={"\x6dax-w-7xl \x6dx-auto \x70x-6 \x6cg:\x70x-8 \x74ext-center"}>
              <h2 className={"\x74ext-2xl \x6dd:\x74ext-5xl \x66ont-extrabold \x74ext-secondary \x6db-4"}>How We Work — <span className={"\x74ext-secondary"}>Simple As 1-2-3</span></h2>
              <p className={"\x74ext-sm \x6dd:\x74ext-xl \x74ext-gray-600 \x6db-16 \x6dax-w-2xl \x6dx-auto"}>Getting reliable plumbing help in {/*  */}Keighley{/*  */} is quick and straightforward.</p>
              <div className={"\x67rid \x6dd:\x67rid-cols-3 \x67ap-8 \x72elative"}>
                <div className={"\x72elative \x7a-10 \x62g-white \x70-8 \x6cg:\x70-12 \x72ounded-[\x32rem] \x73hadow-xl \x68over:\x73hadow-2xl \x74ransition-all \x64uration-500 \x67roup \x68over:\x2dtranslate-y-3 \x62order \x62order-gray-100 \x66lex \x66lex-col \x69tems-center"}>
                  <div className={"\x66lex \x6austify-center \x6db-10"}>
                    <div className={"\x77-20 \x68-20 \x62g-primary \x74ext-white \x72ounded-full \x66lex \x69tems-center \x6austify-center \x74ext-4xl \x66ont-extrabold \x73hadow-xl \x73hadow-primary/\x320 \x67roup-hover:\x73cale-110 \x74ransition-transform \x64uration-500"}>1</div>
                  </div>
                  <h3 className={"\x74ext-2xl \x66ont-bold \x74ext-secondary \x6db-6 \x67roup-hover:\x74ext-primary \x74ransition-colors"}>Book Your Free Quote</h3>
                  <p className={"\x74ext-gray-600 \x6ceading-relaxed \x74ext-lg"}>Fill out the quick form or give us a call. Our team responds fast and schedules a convenient time to assess your plumbing issue.</p>
                </div>
                <div className={"\x72elative \x7a-10 \x62g-white \x70-8 \x6cg:\x70-12 \x72ounded-[\x32rem] \x73hadow-xl \x68over:\x73hadow-2xl \x74ransition-all \x64uration-500 \x67roup \x68over:\x2dtranslate-y-3 \x62order \x62order-gray-100 \x66lex \x66lex-col \x69tems-center"}>
                  <div className={"\x66lex \x6austify-center \x6db-10"}>
                    <div className={"\x77-20 \x68-20 \x62g-primary \x74ext-white \x72ounded-full \x66lex \x69tems-center \x6austify-center \x74ext-4xl \x66ont-extrabold \x73hadow-xl \x73hadow-primary/\x320 \x67roup-hover:\x73cale-110 \x74ransition-transform \x64uration-500"}>2</div>
                  </div>
                  <h3 className={"\x74ext-2xl \x66ont-bold \x74ext-secondary \x6db-6 \x67roup-hover:\x74ext-primary \x74ransition-colors"}>We Inspect &amp; Quote</h3>
                  <p className={"\x74ext-gray-600 \x6ceading-relaxed \x74ext-lg"}>Our licensed plumber visits your property, diagnoses the problem, and provides a clear fixed-price quote with no hidden surprises.</p>
                </div>
                <div className={"\x72elative \x7a-10 \x62g-white \x70-8 \x6cg:\x70-12 \x72ounded-[\x32rem] \x73hadow-xl \x68over:\x73hadow-2xl \x74ransition-all \x64uration-500 \x67roup \x68over:\x2dtranslate-y-3 \x62order \x62order-gray-100 \x66lex \x66lex-col \x69tems-center"}>
                  <div className={"\x66lex \x6austify-center \x6db-10"}>
                    <div className={"\x77-20 \x68-20 \x62g-primary \x74ext-white \x72ounded-full \x66lex \x69tems-center \x6austify-center \x74ext-4xl \x66ont-extrabold \x73hadow-xl \x73hadow-primary/\x320 \x67roup-hover:\x73cale-110 \x74ransition-transform \x64uration-500"}>3</div>
                  </div>
                  <h3 className={"\x74ext-2xl \x66ont-bold \x74ext-secondary \x6db-6 \x67roup-hover:\x74ext-primary \x74ransition-colors"}>Work Done Fast</h3>
                  <p className={"\x74ext-gray-600 \x6ceading-relaxed \x74ext-lg"}>Approve the quote and we’ll schedule the repair promptly. Most plumbing jobs are completed quickly with quality workmanship guaranteed.</p>
                </div>
              </div>
            </div>
          </section>
          {/* /$ */}
          {/* $ */}
          <section className={"\x70y-20 \x62g-white \x6fverflow-hidden"}>
            <div className={"\x6dax-w-7xl \x6dx-auto \x70x-6 \x73m:\x70x-6 \x6cg:\x70x-8"}>
              <div className={"\x66lex \x66lex-col \x6cg:\x66lex-row \x69tems-center \x67ap-12 \x6cg:\x67ap-20"}>
                <div className={"\x77-full \x6cg:\x77-1/\x32 \x72elative"}>
                  <div className={"\x72elative \x61spect-square \x72ounded-2xl \x6fverflow-hidden \x73hadow-2xl"}>
                    <div className={"\x72elative \x77-full \x68-full \x6fbject-cover"}>
                      <img alt="Professional plumber at work" className={"\x6fbject-cover"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/43cf8c209d1089a5.webp 256w, /site-assets/e45b8a39b4c6b0a8.webp 384w, /site-assets/685f7e6086541e7c.webp 640w, /site-assets/26dbc37b669bb981.webp 750w, /site-assets/f110c18ec6cabda4.webp 828w, /site-assets/2f6c064d14e03b2a.webp 1080w, /site-assets/209ec8dab7f9b4ae.webp 1200w, /site-assets/b54986271fecf3f4.webp 1920w, /site-assets/209ec8dab7f9b4ae.webp 2048w, /site-assets/209ec8dab7f9b4ae.webp 3840w" src="/site-assets/209ec8dab7f9b4ae.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                    </div>
                  </div>
                  <div className={"\x61bsolute \x2dbottom-6 \x2dright-6 \x77-32 \x68-32 \x62g-primary/\x310 \x72ounded-full \x62lur-2xl \x2dz-10"} />
                  <div className={"\x61bsolute \x2dtop-6 \x2dleft-6 \x77-32 \x68-32 \x62g-blue-500/\x310 \x72ounded-full \x62lur-2xl \x2dz-10"} />
                </div>
                <div className={"\x77-full \x6cg:\x77-1/\x32 \x73pace-y-8"}>
                  <div className={"\x73pace-y-4"}>
                    <h2 className={"\x74ext-2xl \x6dd:\x74ext-5xl \x66ont-bold \x74ext-gray-900 \x6ceading-tight"}>Top-Tier Plumbing Expertise for Every Property</h2>
                    <p className={"\x74ext-sm \x6dd:\x74ext-xl \x74ext-gray-600 \x6ceading-relaxed"}>Whether it’s a <b>leaking pipe repair</b>, blocked drain, or general plumbing issue, our experienced plumbers deliver reliable solutions for homes and businesses in <b>Keighley</b>. We don't just fix plumbing problems — we make sure your system runs safely, efficiently, and reliably.</p>
                  </div>
                  <ul className={"\x73pace-y-4"}>
                    <li className={"\x66lex \x69tems-start \x67ap-4"}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className={"\x74ext-lg \x74ext-gray-800 \x66ont-medium"}>Advanced diagnostics for complex plumbing issues</span>
                    </li>
                    <li className={"\x66lex \x69tems-start \x67ap-4"}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className={"\x74ext-lg \x74ext-gray-800 \x66ont-medium"}>Work completed to the latest safety standards</span>
                    </li>
                    <li className={"\x66lex \x69tems-start \x67ap-4"}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-circle-check-big \x77-6 \x68-6 \x74ext-primary \x66lex-shrink-0 \x6dt-1"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className={"\x74ext-lg \x74ext-gray-800 \x66ont-medium"}>High-quality parts and professional installation</span>
                    </li>
                  </ul>
                  <div className={"\x70t-4"}>
                    <a className={"\x69nline-flex \x69tems-center \x67ap-2 \x62g-primary \x68over:\x62g-primary-hover \x74ext-white \x70x-8 \x70y-4 \x72ounded-xl \x66ont-bold \x74ext-lg \x74ransition \x73hadow-lg \x68over:\x73hadow-xl"} href="#quote">Book Same-Day Service →</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /$ */}
          {/* $ */}
          {/* $ */}
          <section id="services" className={"\x70y-8 \x6dd:\x70y-20 \x62g-gray-50 \x73croll-mt-24"}>
            <div className={"\x6dax-w-7xl \x6dx-auto \x70x-6 \x73m:\x70x-6 \x6cg:\x70x-8"}>
              <div className={"\x74ext-center \x6db-16"}>
                <h2 className={"\x74ext-2xl \x6dd:\x74ext-4xl \x66ont-bold \x74ext-gray-900 \x6db-4"}>Our Plumbing Services</h2>
                <p className={"\x74ext-sm \x6dd:\x74ext-xl \x74ext-gray-600 \x6dax-w-4xl \x6dx-auto"}>From emergency plumbing repairs to full installations, <b>Keighley{/*  */} plumbers you can rely on</b></p>
              </div>
              <div className={"\x67rid \x73m:\x67rid-cols-2 \x6cg:\x67rid-cols-4 \x67ap-6"}>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-bath \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M10 4 8 6" />
                      <path d="M17 19v2" />
                      <path d="M2 12h20" />
                      <path d="M7 19v2" />
                      <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Bathroom Plumbing</h3>
                  <p className={"\x74ext-gray-600"}>Tap repairs, sink installs, and bathroom plumbing upgrades.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-waves \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Blocked Drain Repair</h3>
                  <p className={"\x74ext-gray-600"}>Blocked drains, sinks, and toilets cleared quickly and safely.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-flame \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Boiler Installation</h3>
                  <p className={"\x74ext-gray-600"}>A-rated combi, system and regular boilers fitted by Gas Safe engineers.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-flame \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Boiler Servicing &amp; Repairs</h3>
                  <p className={"\x74ext-gray-600"}>Professional boiler servicing (from £79) and fast same-day repairs.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-thermometer \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Central Heating Repairs</h3>
                  <p className={"\x74ext-gray-600"}>Expert central heating system repairs, troubleshooting, and maintenance.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-utensils \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                      <path d="M7 2v20" />
                      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Dishwasher Installation</h3>
                  <p className={"\x74ext-gray-600"}>Dishwashers plumbed in, levelled, and leak-tested first time.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-shower-head \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m4 4 2.5 2.5" />
                      <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
                      <path d="M15 5 5 15" />
                      <path d="M14 17v.01" />
                      <path d="M10 16v.01" />
                      <path d="M13 13v.01" />
                      <path d="M16 10v.01" />
                      <path d="M11 20v.01" />
                      <path d="M17 14v.01" />
                      <path d="M20 11v.01" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Electric Shower Installation &amp; Repair</h3>
                  <p className={"\x74ext-gray-600"}>Cold, leaking or dead electric showers repaired and replaced same-day.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-wrench \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Emergency Drain Unblocking</h3>
                  <p className={"\x74ext-gray-600"}>Fast drain cleaning and blockage removal services.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-siren \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
                      <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
                      <path d="M21 12h1" />
                      <path d="M18.5 4.5 18 5" />
                      <path d="M2 12h1" />
                      <path d="M12 2v1" />
                      <path d="m4.929 4.929.707.707" />
                      <path d="M12 12v6" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Emergency Plumbing</h3>
                  <p className={"\x74ext-gray-600"}>24/7 emergency plumber for leaking pipe, burst pipe, leaks, and urgent repairs.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-flame \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Gas Hob &amp; Cooker Replacement</h3>
                  <p className={"\x74ext-gray-600"}>Gas Safe hob and cooker swaps, tightness-tested and safe to use.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-flame \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Gas Leak Repairs</h3>
                  <p className={"\x74ext-gray-600"}>Emergency gas leak detection and permanent pipework repairs.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-clipboard-check \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <rect x="8" y="2" rx="1" ry="1" {...({ width: "8", height: "4" } as any)} />
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <path d="m9 14 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Gas Safety Inspections &amp; CP12</h3>
                  <p className={"\x74ext-gray-600"}>Official gas safety inspections and CP12 certification for landlords.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-thumbs-up \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M7 10v12" />
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>General Plumbing Services</h3>
                  <p className={"\x74ext-gray-600"}>Powerful everyday plumbing solutions for homes and businesses.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-shield-check \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Hot Water System Repairs</h3>
                  <p className={"\x74ext-gray-600"}>Fast repairs and servicing for electric, gas, and instant hot water systems.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-zap \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Immersion Heater Replacement</h3>
                  <p className={"\x74ext-gray-600"}>Burnt-out immersion elements and thermostats replaced same-day.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-droplets \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Leaking Pipe Repair</h3>
                  <p className={"\x74ext-gray-600"}>Fix leaking pipes, burst pipes, water pressure issues, and damaged plumbing.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-wrench \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Macerator Replacement</h3>
                  <p className={"\x74ext-gray-600"}>Saniflo and macerator units repaired and replaced fast.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-droplet \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Outdoor Tap Installation</h3>
                  <p className={"\x74ext-gray-600"}>WRAS-compliant garden taps fitted with winter isolation.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-wind \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
                      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
                      <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Power Flushing</h3>
                  <p className={"\x74ext-gray-600"}>Deep clean your heating system to improve efficiency and lower energy bills.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-thermometer \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Radiator Repairs</h3>
                  <p className={"\x74ext-gray-600"}>Fixing cold spots, leaking valves, and professional radiator installations.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-shower-head \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m4 4 2.5 2.5" />
                      <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
                      <path d="M15 5 5 15" />
                      <path d="M14 17v.01" />
                      <path d="M10 16v.01" />
                      <path d="M13 13v.01" />
                      <path d="M16 10v.01" />
                      <path d="M11 20v.01" />
                      <path d="M17 14v.01" />
                      <path d="M20 11v.01" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Shower Pump Replacement</h3>
                  <p className={"\x74ext-gray-600"}>Weak, noisy or dead shower pumps replaced to restore strong flow.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-wifi \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M12 20h.01" />
                      <path d="M2 8.82a15 15 0 0 1 20 0" />
                      <path d="M5 12.859a10 10 0 0 1 14 0" />
                      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Smart WiFi Thermostat Installation</h3>
                  <p className={"\x74ext-gray-600"}>Hive, Nest and Tado smart thermostats wired, paired and set up.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-droplet \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Tap Repair &amp; Replacement</h3>
                  <p className={"\x74ext-gray-600"}>Dripping taps fixed and new kitchen and bathroom taps fitted.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-bath \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M10 4 8 6" />
                      <path d="M17 19v2" />
                      <path d="M2 12h20" />
                      <path d="M7 19v2" />
                      <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Toilet Flush Repair</h3>
                  <p className={"\x74ext-gray-600"}>Running toilets and weak or broken flushes fixed same-day.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-flame \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Underfloor Heating Repairs</h3>
                  <p className={"\x74ext-gray-600"}>Cold zones, pressure loss and manifold leaks diagnosed and fixed.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-washing-machine \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M3 6h3" />
                      <path d="M17 6h.01" />
                      <rect x="3" y="2" rx="2" {...({ width: "18", height: "20" } as any)} />
                      <circle cx="12" cy="13" r="5" />
                      <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Washing Machine Installation</h3>
                  <p className={"\x74ext-gray-600"}>Washing machines plumbed, levelled, and leak-tested.</p>
                </a>
                <a className={"\x62g-white \x70-6 \x72ounded-xl \x73hadow-md \x68over:\x73hadow-xl \x74ransition \x67roup \x62lock"} href="/">
                  <div className={"\x6db-4 \x67roup-hover:\x73cale-110 \x74ransition"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-funnel \x77-10 \x68-10 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                    </svg>
                  </div>
                  <h3 className={"\x74ext-lg \x66ont-bold \x74ext-gray-900 \x6db-2"}>Water Filter Tap Installation</h3>
                  <p className={"\x74ext-gray-600"}>Filtered, 3-in-1 and boiling water taps fitted and flushed ready to drink.</p>
                </a>
              </div>
              <div className={"\x6dt-12 \x74ext-center"}>
                <a className={"\x69nline-flex \x69tems-center \x67ap-2 \x62g-primary \x68over:\x62g-primary-hover \x74ext-white \x70x-8 \x70y-4 \x72ounded-xl \x66ont-bold \x74ext-lg \x74ransition \x73hadow-lg"} href="#quote">Get Your FREE Quote Today<span className={"\x74ext-xl"}>→</span></a>
              </div>
            </div>
          </section>
          {/* /$ */}
          {/* /$ */}
          {/* $ */}
          <section className={"\x70y-8 \x6dd:\x70y-24 \x62g-white"}>
            <div className={"\x6dax-w-7xl \x6dx-auto \x70x-6 \x73m:\x70x-6 \x6cg:\x70x-8"}>
              <div className={"\x74ext-center \x6db-8 \x6dd:\x6db-16 \x73pace-y-4"}>
                <h2 className={"\x74ext-2xl \x6dd:\x74ext-5xl \x66ont-extrabold \x74ext-gray-900"}>Our Latest Plumbing Projects</h2>
                <p className={"\x74ext-sm \x6dd:\x74ext-xl \x74ext-gray-600 \x6dax-w-2xl \x6dx-auto"}>See why <b>Keighley{/*  */} homeowners trust our plumbing services.</b> Quality work that keeps your home running smoothly.</p>
              </div>
              <div className={"\x67rid \x6cg:\x67rid-cols-2 \x67ap-8 \x69tems-stretch"}>
                <div className={"\x67rid \x73m:\x67rid-cols-2 \x67ap-6"}>
                  <div className={"\x66lex \x66lex-col \x62g-gray-50 \x72ounded-2xl \x6fverflow-hidden \x62order \x62order-gray-100 \x68over:\x73hadow-xl \x74ransition-all \x64uration-300 \x67roup"}>
                    <div className={"\x61spect-[\x34/\x33] \x72elative \x6fverflow-hidden"}>
                      <img src="/site-assets/c90571e8f08b99ab.png" alt={"Sink & Tap Repairs"} className={"\x77-full \x68-full \x6fbject-cover \x67roup-hover:\x73cale-105 \x74ransition-transform \x64uration-500"} />
                    </div>
                    <div className={"\x70-6 \x73pace-y-3 \x66lex-1"}>
                      <p className={"\x74ext-xs \x66ont-bold \x74ext-primary \x75ppercase \x74racking-tighter"}>KITCHEN PLUMBING</p>
                      <h3 className={"\x74ext-xl \x66ont-bold \x74ext-gray-900 \x6ceading-tight"}>Sink &amp; Tap Repairs</h3>
                      <p className={"\x74ext-gray-600 \x74ext-sm \x6ceading-relaxed"}>Fix leaking taps, install modern mixer taps, and clear blocked kitchen drains quickly.</p>
                      <a className={"\x66lex \x69tems-center \x67ap-1 \x74ext-gray-900 \x66ont-bold \x74ext-sm \x68over:\x67ap-2 \x74ransition-all \x70t-2 \x67roup-hover:\x74ext-primary"} href="#quote">Book This Service{/*  */}{" "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-4 \x68-4"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m9 18 6-6-6-6" /></svg></a>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x62g-gray-50 \x72ounded-2xl \x6fverflow-hidden \x62order \x62order-gray-100 \x68over:\x73hadow-xl \x74ransition-all \x64uration-300 \x67roup"}>
                    <div className={"\x61spect-[\x34/\x33] \x72elative \x6fverflow-hidden"}>
                      <img src="/site-assets/5526282606cb8bdc.png" alt="Bathroom Installations" className={"\x77-full \x68-full \x6fbject-cover \x67roup-hover:\x73cale-105 \x74ransition-transform \x64uration-500"} />
                    </div>
                    <div className={"\x70-6 \x73pace-y-3 \x66lex-1"}>
                      <p className={"\x74ext-xs \x66ont-bold \x74ext-primary \x75ppercase \x74racking-tighter"}>BATHROOM PLUMBING</p>
                      <h3 className={"\x74ext-xl \x66ont-bold \x74ext-gray-900 \x6ceading-tight"}>Bathroom Installations</h3>
                      <p className={"\x74ext-gray-600 \x74ext-sm \x6ceading-relaxed"}>Professional bathroom installations and fast repairs for residential bathrooms</p>
                      <a className={"\x66lex \x69tems-center \x67ap-1 \x74ext-gray-900 \x66ont-bold \x74ext-sm \x68over:\x67ap-2 \x74ransition-all \x70t-2 \x67roup-hover:\x74ext-primary"} href="#quote">Schedule Installation{/*  */}{" "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-4 \x68-4"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m9 18 6-6-6-6" /></svg></a>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x62g-gray-50 \x72ounded-2xl \x6fverflow-hidden \x62order \x62order-gray-100 \x68over:\x73hadow-xl \x74ransition-all \x64uration-300 \x67roup"}>
                    <div className={"\x61spect-[\x34/\x33] \x72elative \x6fverflow-hidden"}>
                      <img src="/site-assets/9ab12f25c6d9c075.png" alt="Gas Appliances Installation" className={"\x77-full \x68-full \x6fbject-cover \x67roup-hover:\x73cale-105 \x74ransition-transform \x64uration-500"} />
                    </div>
                    <div className={"\x70-6 \x73pace-y-3 \x66lex-1"}>
                      <p className={"\x74ext-xs \x66ont-bold \x74ext-primary \x75ppercase \x74racking-tighter"}>GAS SERVICES</p>
                      <h3 className={"\x74ext-xl \x66ont-bold \x74ext-gray-900 \x6ceading-tight"}>Gas Appliances Installation</h3>
                      <p className={"\x74ext-gray-600 \x74ext-sm \x6ceading-relaxed"}>Professional installation and servicing for gas hobs, cookers, and kitchen appliances.</p>
                      <a className={"\x66lex \x69tems-center \x67ap-1 \x74ext-gray-900 \x66ont-bold \x74ext-sm \x68over:\x67ap-2 \x74ransition-all \x70t-2 \x67roup-hover:\x74ext-primary"} href="#quote">Book Installation{/*  */}{" "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-4 \x68-4"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m9 18 6-6-6-6" /></svg></a>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x62g-gray-50 \x72ounded-2xl \x6fverflow-hidden \x62order \x62order-gray-100 \x68over:\x73hadow-xl \x74ransition-all \x64uration-300 \x67roup"}>
                    <div className={"\x61spect-[\x34/\x33] \x72elative \x6fverflow-hidden"}>
                      <img src="/site-assets/d5b2704b68fd51f8.png" alt="Hot Water Repairs" className={"\x77-full \x68-full \x6fbject-cover \x67roup-hover:\x73cale-105 \x74ransition-transform \x64uration-500"} />
                    </div>
                    <div className={"\x70-6 \x73pace-y-3 \x66lex-1"}>
                      <p className={"\x74ext-xs \x66ont-bold \x74ext-primary \x75ppercase \x74racking-tighter"}>HOT WATER SYSTEMS</p>
                      <h3 className={"\x74ext-xl \x66ont-bold \x74ext-gray-900 \x6ceading-tight"}>Hot Water Repairs</h3>
                      <p className={"\x74ext-gray-600 \x74ext-sm \x6ceading-relaxed"}>Installation and servicing for gas, electric, and instant hot water systems.</p>
                      <a className={"\x66lex \x69tems-center \x67ap-1 \x74ext-gray-900 \x66ont-bold \x74ext-sm \x68over:\x67ap-2 \x74ransition-all \x70t-2 \x67roup-hover:\x74ext-primary"} href="#quote">Restore My Hot Water{/*  */}{" "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-4 \x68-4"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m9 18 6-6-6-6" /></svg></a>
                    </div>
                  </div>
                </div>
                <div className={"\x66lex \x66lex-col \x62g-gray-50 \x72ounded-2xl \x6fverflow-hidden \x62order \x62order-gray-100 \x68over:\x73hadow-2xl \x74ransition-all \x64uration-500 \x67roup"}>
                  <div className={"\x66lex-1 \x72elative \x6din-h-[\x3300px] \x6fverflow-hidden"}>
                    <img src="/site-assets/55c99e99921e6285.webp" alt={"Full Kitchen & Bathroom Plumbing Project"} className={"\x77-full \x68-full \x6fbject-cover \x67roup-hover:\x73cale-105 \x74ransition-transform \x64uration-700"} />
                  </div>
                  <div className={"\x70-6 \x6cg:\x70-8 \x73pace-y-6"}>
                    <div className={"\x73pace-y-3"}>
                      <p className={"\x74ext-sm \x66ont-bold \x74ext-primary \x75ppercase \x74racking-widest"}>Premium Projects</p>
                      <h3 className={"\x74ext-3xl \x6cg:\x74ext-4xl \x66ont-black \x74ext-gray-900 \x6ceading-[\x31.\x31]"}>Complete Residential Plumbing &amp; Gas heating repairs</h3>
                      <p className={"\x74ext-lg \x74ext-gray-600 \x6ceading-relaxed \x6dax-w-lg"}>A full residential plumbing upgrade including new pipework, efficient hot water systems, and modern fixtures designed for long-term reliability.</p>
                    </div>
                    <div className={"\x66lex \x66lex-wrap \x6austify-between \x69tems-center \x70t-4"}>
                      <a className={"\x62g-primary \x68over:\x62g-primary-hover \x74ext-white \x70x-4 \x70y-4 \x72ounded-xl \x66ont-bold \x74ext-lg \x73hadow-lg"} href="#quote">Book Your FREE Quote</a>
                      <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-900 \x66ont-bold \x74ext-lg \x68over:\x67ap-3 \x74ransition-all \x75nderline \x64ecoration-2 \x64ecoration-primary \x75nderline-offset-4"} href="tel:07598088229">Call Now for Fast Plumbing<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-5 \x68-5"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m9 18 6-6-6-6" /></svg></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /$ */}
          {/* $ */}
          <section id="reviews" className={"\x70y-20 \x62g-white \x73croll-mt-24"}>
            <div className={"\x6dax-w-7xl \x6dx-auto \x70x-6 \x73m:\x70x-6 \x6cg:\x70x-8"}>
              <div className={"\x74ext-center \x6db-16"}>
                <h2 className={"\x74ext-2xl \x6dd:\x74ext-4xl \x66ont-bold \x74ext-gray-900 \x6db-4"}>Real Reviews From Real Plumbing Customers</h2>
                <a className={"\x66lex \x69tems-center \x6austify-center \x67ap-2 \x6db-4 \x68over:\x6fpacity-80 \x74ransition \x67roup"} href="https://www.google.com/maps/place/GASTECH+24%2F7+PLUMBING+%26+HEATING+SERVICES/@53.8779389,-1.8778056,17z/data=!4m8!3m7!1s0x487befdd6ce9c6f9:0x59771ace26e125f9!8m2!3d53.8779358!4d-1.8752307!9m1!1b1!16s%2Fg%2F11ry0x5dj_?entry=ttu" rel="noopener noreferrer" target="_blank">
                  <div className={"\x66lex \x67ap-1"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-6 \x68-6 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-6 \x68-6 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-6 \x68-6 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-6 \x68-6 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-6 \x68-6 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </div>
                  <span className={"\x74ext-2xl \x66ont-bold \x74ext-gray-900"}>5.0</span>
                  <span className={"\x74ext-gray-600 \x62order-b \x62order-dotted \x62order-gray-400 \x67roup-hover:\x74ext-primary \x67roup-hover:\x62order-primary \x74ransition"}>from 200+ Google reviews</span>
                </a>
              </div>
              <div className={"\x67rid \x6dd:\x67rid-cols-3 \x67ap-8 \x6db-12"}>
                <div className={"\x62g-gray-50 \x70-6 \x72ounded-xl \x73hadow-md \x62order \x62order-gray-200"}>
                  <div className={"\x66lex \x69tems-start \x67ap-3 \x6db-4"}>
                    <div className={"\x62g-pink-500 \x77-12 \x68-12 \x72ounded-full \x66lex \x69tems-center \x6austify-center \x74ext-white \x66ont-bold \x74ext-xl \x66lex-shrink-0"}>M</div>
                    <div className={"\x66lex-1 \x6din-w-0"}>
                      <div className={"\x66ont-bold \x74ext-gray-900"}>Mal Gaskell</div>
                      <div className={"\x74ext-sm \x74ext-primary \x66ont-semibold \x74ext-nowrap"}>Verified Customer</div>
                      <div className={"\x74ext-xs \x74ext-gray-500"}>3 weeks ago</div>
                    </div>
                    <div className={"\x66lex-shrink-0"}>
                      <svg viewBox="0 0 48 48" className={"\x77-6 \x68-6"} {...({ xmlns: "http://www.w3.org/2000/svg" } as any)}>
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                      </svg>
                    </div>
                  </div>
                  <div className={"\x66lex \x67ap-1 \x6db-4"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </div>
                  <p className={"\x74ext-gray-700 \x6ceading-relaxed \x6cine-clamp-4"}>Exceptional service! Was incredibly professional, friendly, and helpful from start to finish. Arrived promptly the very next day and went above and beyond to ensure all our issues were resolved. The workmanship was flawless. We are absolutely delighted with the result and highly recommend his services to anyone.</p>
                </div>
                <div className={"\x62g-gray-50 \x70-6 \x72ounded-xl \x73hadow-md \x62order \x62order-gray-200"}>
                  <div className={"\x66lex \x69tems-start \x67ap-3 \x6db-4"}>
                    <div className={"\x62g-blue-500 \x77-12 \x68-12 \x72ounded-full \x66lex \x69tems-center \x6austify-center \x74ext-white \x66ont-bold \x74ext-xl \x66lex-shrink-0"}>K</div>
                    <div className={"\x66lex-1 \x6din-w-0"}>
                      <div className={"\x66ont-bold \x74ext-gray-900"}>Kathryn Berry</div>
                      <div className={"\x74ext-sm \x74ext-primary \x66ont-semibold \x74ext-nowrap"}>Verified Customer</div>
                      <div className={"\x74ext-xs \x74ext-gray-500"}>2 month ago</div>
                    </div>
                    <div className={"\x66lex-shrink-0"}>
                      <svg viewBox="0 0 48 48" className={"\x77-6 \x68-6"} {...({ xmlns: "http://www.w3.org/2000/svg" } as any)}>
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                      </svg>
                    </div>
                  </div>
                  <div className={"\x66lex \x67ap-1 \x6db-4"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </div>
                  <p className={"\x74ext-gray-700 \x6ceading-relaxed \x6cine-clamp-4"}>Great service, came out tonight, late Saturday night, within an hour or so of calling, kept us updated on arrival time. Diagnosed problem quickly, went away for a part and came back to fit it. Had our boiler working and heating going in no time, thank goodness as it's absolutely freezing! Good communication and went out of his way to help, will definitely use again.</p>
                </div>
                <div className={"\x62g-gray-50 \x70-6 \x72ounded-xl \x73hadow-md \x62order \x62order-gray-200"}>
                  <div className={"\x66lex \x69tems-start \x67ap-3 \x6db-4"}>
                    <div className={"\x62g-purple-500 \x77-12 \x68-12 \x72ounded-full \x66lex \x69tems-center \x6austify-center \x74ext-white \x66ont-bold \x74ext-xl \x66lex-shrink-0"}>J</div>
                    <div className={"\x66lex-1 \x6din-w-0"}>
                      <div className={"\x66ont-bold \x74ext-gray-900"}>Jack Nottidge</div>
                      <div className={"\x74ext-sm \x74ext-primary \x66ont-semibold \x74ext-nowrap"}>Verified Customer</div>
                      <div className={"\x74ext-xs \x74ext-gray-500"}>1 Month ago</div>
                    </div>
                    <div className={"\x66lex-shrink-0"}>
                      <svg viewBox="0 0 48 48" className={"\x77-6 \x68-6"} {...({ xmlns: "http://www.w3.org/2000/svg" } as any)}>
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                      </svg>
                    </div>
                  </div>
                  <div className={"\x66lex \x67ap-1 \x6db-4"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-star \x77-5 \x68-5 \x66ill-accent \x74ext-accent"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </div>
                  <p className={"\x74ext-gray-700 \x6ceading-relaxed \x6cine-clamp-4"}>Brilliant service from start to finish. We had our gas fire capped and I can’t fault the job at all. Attiq was on time, did a perfect job and massively went above and beyond in helping me when he found an issue with our gas meter that the supplier had to come and fix. Thank you! 10/10</p>
                </div>
              </div>
              <div className={"\x66lex \x66lex-col \x73m:\x66lex-row \x69tems-center \x6austify-center \x67ap-6"}>
                <button className={"\x74ext-primary \x68over:\x74ext-primary-hover \x66ont-bold \x74ext-lg \x74ransition \x63ursor-pointer"}>
                  <span className={"\x66lex \x69tems-center \x67ap-2"}>Show more reviews <span className={"\x74ext-xl"}>↓</span></span>
                </button>
                <div className={"\x68-6 \x77-px \x62g-gray-300 \x68idden \x73m:\x62lock"} />
                <a className={"\x69nline-flex \x69tems-center \x67ap-2 \x62g-gray-900 \x74ext-white \x70x-6 \x70y-3 \x72ounded-xl \x66ont-bold \x68over:\x62g-black \x74ransition \x73hadow-md"} href="https://www.google.com/maps/place/GASTECH+24%2F7+PLUMBING+%26+HEATING+SERVICES/@53.8779389,-1.8778056,17z/data=!4m8!3m7!1s0x487befdd6ce9c6f9:0x59771ace26e125f9!8m2!3d53.8779358!4d-1.8752307!9m1!1b1!16s%2Fg%2F11ry0x5dj_?entry=ttu" rel="noopener noreferrer" target="_blank">View all 200+ Google Reviews<svg className={"\x77-5 \x68-5"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg" } as any)}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg></a>
                <a className={"\x74ext-primary \x68over:\x74ext-primary-hover \x66ont-bold \x74ext-lg \x74ransition"} href={"https://www.google.com/maps/place/GASTECH+24%2F7+PLUMBING+%26+HEATING+SERVICES/@53.8779389,-1.8778056,17z/data=!4m8!3m7!1s0x487befdd6ce9c6f9:0x59771ace26e125f9!8m2!3d53.8779358!4d-1.8752307!9m1!1b1!16s%2Fg%2F11ry0x5dj_?entry=ttu&review=1"} rel="noopener noreferrer" target="_blank">Write a Review</a>
              </div>
            </div>
          </section>
          {/* /$ */}
          {/* $ */}
          <section id="faq" className={"\x70y-8 \x6dd:\x70y-20 \x62g-gray-50 \x73croll-mt-24"}>
            <div className={"\x6dax-w-4xl \x6dx-auto \x70x-6 \x73m:\x70x-6 \x6cg:\x70x-8"}>
              <div className={"\x74ext-center \x6db-16"}>
                <h2 className={"\x74ext-2xl \x6dd:\x74ext-4xl \x66ont-bold  \x74ext-[#\x320242a] \x6db-4"}>Frequently Asked Plumbing Questions</h2>
                <p className={"\x74ext-sm \x6dd:\x74ext-xl \x74ext-[#\x320242a]"}>Everything you need to know about our <b>professional plumbing services</b>.</p>
              </div>
              <div className={"\x73pace-y-4"}>
                <div className={"\x62g-white \x72ounded-xl \x73hadow-sm \x62order \x62order-gray-200 \x6fverflow-hidden \x68over:\x62order-primary \x74ransition"}>
                  <details className={"\x67roup"} open>
                    <summary className={"\x66lex \x69tems-center \x6austify-between \x70-6 \x63ursor-pointer \x6cist-none"}>
                      <span className={"\x66ont-bold \x74ext-lg \x74ext-gray-900 \x67roup-open:\x74ext-primary"}>Do you offer emergency 24/7 plumbing services?</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-plus \x77-6 \x68-6 \x74ext-gray-400 \x67roup-open:\x72otate-45 \x74ransition \x74ransition-transform"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </summary>
                    <div className={"\x70x-6 \x70b-6 \x74ext-[#\x320242a] \x6ceading-relaxed \x62order-t \x62order-gray-100 \x70t-4"}>Yes. Our plumbers are available <b>24/7 for emergency plumbing issues</b> like leaking pipe, burst pipe, water leaks, blocked drains, and hot water failures.</div>
                  </details>
                </div>
                <div className={"\x62g-white \x72ounded-xl \x73hadow-sm \x62order \x62order-gray-200 \x6fverflow-hidden \x68over:\x62order-primary \x74ransition"}>
                  <details className={"\x67roup"}>
                    <summary className={"\x66lex \x69tems-center \x6austify-between \x70-6 \x63ursor-pointer \x6cist-none"}>
                      <span className={"\x66ont-bold \x74ext-lg \x74ext-gray-900 \x67roup-open:\x74ext-primary"}>How much does a plumbing call-out cost?</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-plus \x77-6 \x68-6 \x74ext-gray-400 \x67roup-open:\x72otate-45 \x74ransition \x74ransition-transform"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </summary>
                    <div className={"\x70x-6 \x70b-6 \x74ext-[#\x320242a] \x6ceading-relaxed \x62order-t \x62order-gray-100 \x70t-4"}>Call-out costs depend on the type of plumbing issue and repair required. We always provide <b>clear upfront pricing with no hidden fees.</b></div>
                  </details>
                </div>
                <div className={"\x62g-white \x72ounded-xl \x73hadow-sm \x62order \x62order-gray-200 \x6fverflow-hidden \x68over:\x62order-primary \x74ransition"}>
                  <details className={"\x67roup"}>
                    <summary className={"\x66lex \x69tems-center \x6austify-between \x70-6 \x63ursor-pointer \x6cist-none"}>
                      <span className={"\x66ont-bold \x74ext-lg \x74ext-gray-900 \x67roup-open:\x74ext-primary"}>Are your plumbers licensed and insured?</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-plus \x77-6 \x68-6 \x74ext-gray-400 \x67roup-open:\x72otate-45 \x74ransition \x74ransition-transform"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </summary>
                    <div className={"\x70x-6 \x70b-6 \x74ext-[#\x320242a] \x6ceading-relaxed \x62order-t \x62order-gray-100 \x70t-4"}>Yes. Our team includes <b>fully licensed and insured plumbers</b> with years of experience in residential plumbing repairs and installations.</div>
                  </details>
                </div>
                <div className={"\x62g-white \x72ounded-xl \x73hadow-sm \x62order \x62order-gray-200 \x6fverflow-hidden \x68over:\x62order-primary \x74ransition"}>
                  <details className={"\x67roup"}>
                    <summary className={"\x66lex \x69tems-center \x6austify-between \x70-6 \x63ursor-pointer \x6cist-none"}>
                      <span className={"\x66ont-bold \x74ext-lg \x74ext-gray-900 \x67roup-open:\x74ext-primary"}>Do you provide a warranty on plumbing work?</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-plus \x77-6 \x68-6 \x74ext-gray-400 \x67roup-open:\x72otate-45 \x74ransition \x74ransition-transform"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </summary>
                    <div className={"\x70x-6 \x70b-6 \x74ext-[#\x320242a] \x6ceading-relaxed \x62order-t \x62order-gray-100 \x70t-4"}>Absolutely. All plumbing repairs and installations include a <b>workmanship guarantee and warranty on supplied parts.</b></div>
                  </details>
                </div>
                <div className={"\x62g-white \x72ounded-xl \x73hadow-sm \x62order \x62order-gray-200 \x6fverflow-hidden \x68over:\x62order-primary \x74ransition"}>
                  <details className={"\x67roup"}>
                    <summary className={"\x66lex \x69tems-center \x6austify-between \x70-6 \x63ursor-pointer \x6cist-none"}>
                      <span className={"\x66ont-bold \x74ext-lg \x74ext-gray-900 \x67roup-open:\x74ext-primary"}>Which areas do your plumbers service?</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-plus \x77-6 \x68-6 \x74ext-gray-400 \x67roup-open:\x72otate-45 \x74ransition \x74ransition-transform"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </summary>
                    <div className={"\x70x-6 \x70b-6 \x74ext-[#\x320242a] \x6ceading-relaxed \x62order-t \x62order-gray-100 \x70t-4"}>We provide plumbing services across <b>Keighley and nearby areas</b>, offering fast response for both emergency and scheduled plumbing work.</div>
                  </details>
                </div>
                <div className={"\x62g-white \x72ounded-xl \x73hadow-sm \x62order \x62order-gray-200 \x6fverflow-hidden \x68over:\x62order-primary \x74ransition"}>
                  <details className={"\x67roup"}>
                    <summary className={"\x66lex \x69tems-center \x6austify-between \x70-6 \x63ursor-pointer \x6cist-none"}>
                      <span className={"\x66ont-bold \x74ext-lg \x74ext-gray-900 \x67roup-open:\x74ext-primary"}>Do you provide Landlord Gas Safety Certificates (CP12)?</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-plus \x77-6 \x68-6 \x74ext-gray-400 \x67roup-open:\x72otate-45 \x74ransition \x74ransition-transform"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </summary>
                    <div className={"\x70x-6 \x70b-6 \x74ext-[#\x320242a] \x6ceading-relaxed \x62order-t \x62order-gray-100 \x70t-4"}>Yes, we are <b>Gas Safe registered</b> and provide full landlord gas safety inspections and CP12 certification to ensure your property remains legally compliant.</div>
                  </details>
                </div>
              </div>
              <div className={"\x6dt-12 \x74ext-center \x62g-white \x70-8 \x72ounded-2xl \x73hadow-lg \x62order-2 \x62order-dashed \x62order-gray-200"}>
                <h4 className={"\x74ext-xl \x66ont-bold \x6db-2"}>Still have questions?</h4>
                <p className={" \x74ext-[#\x320242a] \x6db-6"}>Our friendly plumbing team is ready to help with any <b>plumbing repair or installation enquiry</b>.</p>
                <div className={"\x66lex \x66lex-col \x73m:\x66lex-row \x67ap-4 \x6austify-center"}>
                  <a className={"\x66ont-bold \x74ext-primary \x68over:\x74ext-primary-hover \x74ransition \x74ext-lg \x75nderline"} href="#quote">Book your free quote </a>
                  <span className={"\x68idden \x73m:\x69nline \x74ext-gray-300"}>|</span>
                  <a className={"\x66ont-bold \x74ext-primary \x68over:\x74ext-primary-hover \x74ransition \x74ext-lg \x75nderline"} href="tel:07598088229">Call us on 07598 088229</a>
                </div>
              </div>
            </div>
          </section>
          {/* /$ */}
          <section id="areas" className={"\x70y-8 \x6dd:\x70y-20 \x62g-gray-50"}>
            <div className={"\x6dax-w-7xl \x6dx-auto \x70x-6 \x73m:\x70x-6 \x6cg:\x70x-8"}>
              <div className={"\x74ext-center \x6db-12"}>
                <h2 className={"\x74ext-2xl \x6dd:\x74ext-4xl \x66ont-bold \x74ext-gray-900 \x6db-4"}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x69nline \x77-10 \x68-10 \x74ext-primary \x6db-2"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>Areas We Serve in and Around {/*  */}Keighley</h2>
                <p className={"\x74ext-sm \x6dd:\x74ext-xl \x74ext-gray-600"}>Providing <b>reliable plumbing services across {/*  */}Keighley{/*  */} and nearby West Yorkshire areas.</b></p>
              </div>
              <div className={"\x62g-white \x70-6 \x6dd:\x70-8 \x72ounded-2xl \x73hadow-sm \x62order \x62order-gray-200"}>
                <div className={"\x67rid \x67rid-cols-2 \x73m:\x67rid-cols-3 \x6cg:\x67rid-cols-4 \x67ap-x-6 \x67ap-y-3"}>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Addingham<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}LS29{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Adel<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}LS16{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Allerton<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BD15{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Alwoodley<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}LS17{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Appletreewick<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BD23{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Armley<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}LS12{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Baildon<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BD17{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Barnoldswick<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BB18{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Beeston<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}LS11{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Bingley<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BD16{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Birkenshaw<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BD11{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Bolton Bridge<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BD23{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Bradford<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BD1{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Bradley<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BD23{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Bramhope<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}LS16{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Bramley<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}LS13{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Brighouse<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}HD6{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Broughton<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BD23{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Burnley<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}BB10{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                  <a className={"\x66lex \x69tems-center \x67ap-2 \x74ext-gray-700 \x68over:\x74ext-primary \x74ransition \x70y-1.\x35 \x67roup"} href="/">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-3.\x35 \x68-3.\x35 \x74ext-primary \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={"\x74ext-sm \x66ont-medium"}>Calcutt<span className={"\x74ext-gray-400 \x66ont-normal"}> ({/*  */}HG5{/*  */})</span></span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-right \x77-3.\x35 \x68-3.\x35 \x6dl-auto \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x2dtranslate-x-1 \x67roup-hover:\x74ranslate-x-0 \x74ransition"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
                <div className={"\x6dt-6 \x74ext-center"}>
                  <button type="button" className={"\x69nline-flex \x69tems-center \x67ap-2 \x62g-gray-50 \x68over:\x62g-gray-100 \x62order \x62order-gray-200 \x74ext-gray-900 \x70x-6 \x70y-3 \x72ounded-xl \x66ont-semibold \x74ext-sm \x74ransition"}>Show more areas (88)<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-chevron-down \x77-4 \x68-4 \x74ransition-transform"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m6 9 6 6 6-6" /></svg></button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className={"\x62g-gray-900 \x74ext-white \x70y-12 \x62order-t \x62order-gray-800"}>
          <div className={"\x6dax-w-7xl \x6dx-auto \x70x-6 \x73m:\x70x-6 \x6cg:\x70x-8"}>
            <div className={"\x67rid \x6dd:\x67rid-cols-4 \x67ap-8 \x6db-8"}>
              <div>
                <div className={"\x6db-4 \x72elative \x68-10 \x77-[\x3250px]"}>
                  <img alt={"Gastech 24/7 Plumbing & Heating Services"} className={"\x6fbject-contain \x6fbject-left"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" } as unknown as CSSProperties} sizes="250px" srcSet="/site-assets/7d967827328bdad0.webp 16w, /site-assets/dfe82b7fc7ddb9ef.webp 32w, /site-assets/8baa0ccb4cb1e185.webp 48w, /site-assets/d6a66761998fa1fc.webp 64w, /site-assets/118dae56edd58b8d.webp 96w, /site-assets/298f13692419e826.webp 128w, /site-assets/fafc2ad367097c20.webp 256w, /site-assets/9ac4b6742de241f1.webp 384w, /site-assets/0b2d5a042bf1d4b6.webp 640w, /site-assets/c13b6430138784b4.webp 750w, /site-assets/b3617bf9126252c3.webp 828w, /site-assets/b3617bf9126252c3.webp 1080w, /site-assets/b3617bf9126252c3.webp 1200w, /site-assets/b3617bf9126252c3.webp 1920w, /site-assets/b3617bf9126252c3.webp 2048w, /site-assets/b3617bf9126252c3.webp 3840w" src="/site-assets/b3617bf9126252c3.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                </div>
                <p className={"\x74ext-gray-400 \x6db-4"}>
                  <b>{" "}{/*  */}Keighley{/*  */}'s trusted plumbing experts</b>
                </p>
                <p>Fast, reliable help for <b>emergency plumbing, blocked drains, leaking pipe, burst pipe, and hot water repairs</b> across {/*  */}Keighley{/*  */} and nearby areas.</p>
                <br />
                <div className={"\x73pace-y-2 \x74ext-sm \x74ext-gray-400 \x6db-6"}>
                  <p>Fully licensed &amp; insured plumbers</p>
                  <p>Same-day plumbing and heating service available</p>
                  <p>24/7 emergency plumbing support</p>
                </div>
                <div className={"\x66lex \x67ap-4 \x69tems-center"}>
                  <img alt="WRAS Approved" width="80" height="40" className={"\x72ounded \x62g-white \x70-1"} style={{ color: "transparent" } as unknown as CSSProperties} srcSet="/site-assets/9a9f19bf3cc358aa.webp 1x, /site-assets/a7a43ab29dc15116.webp 2x" src="/site-assets/a7a43ab29dc15116.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                  <img alt="Gas Safe" width="40" height="40" className={"\x72ounded \x62g-white "} style={{ color: "transparent" } as unknown as CSSProperties} srcSet="/site-assets/3f144ff0b86b09b5.webp 1x, /site-assets/83f829c57019edb1.webp 2x" src="/site-assets/83f829c57019edb1.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                </div>
              </div>
              <div>
                <h4 className={"\x66ont-bold \x6db-4 \x74ext-lg"}>Our Plumbing Services</h4>
                <ul className={"\x73pace-y-2 \x74ext-gray-400"}>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Bathroom Plumbing</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Blocked Drain Repair</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Boiler Servicing &amp; Repairs</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Central Heating Repairs</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Emergency Plumbing</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Gas Leak Repairs</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Gas Safety Inspections (CP12)</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Leaking Pipe Repair</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Power Flushing</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Radiator Repairs</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Tap Repair &amp; Replacement</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Toilet Flush Repair</a>
                  </li>
                  <li>
                    <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Washing Machine Installation</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={"\x66ont-bold \x6db-4 \x74ext-lg"}>Contact Our Local Plumbers</h4>
                <ul className={"\x73pace-y-3 \x74ext-gray-400"}>
                  <li className={"\x66lex \x69tems-center \x67ap-2"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-phone \x77-4 \x68-4 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a className={"\x68over:\x74ext-primary \x74ransition \x66ont-bold"} href="tel:07598088229">07598 088229</a>
                  </li>
                  <li className={"\x66lex \x69tems-start \x67ap-2"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-map-pin \x77-4 \x68-4 \x74ext-primary \x6dt-1 \x66lex-shrink-0"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Keighley{/*  */} &amp; Surrounding {/*  */}West Yorkshire{/*  */} Areas</span>
                  </li>
                  <li className={"\x66lex \x69tems-center \x67ap-2"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-clock \x77-4 \x68-4 \x74ext-primary"} {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>24/7 Emergency Plumbing Service</span>
                  </li>
                  <li>
                    <a className={"\x69nline-block \x6dt-2 \x74ext-primary \x68over:\x74ext-primary-hover \x66ont-bold \x75nderline \x74ransition"} href="/">Visit our Contact page →</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={"\x66ont-bold \x6db-4 \x74ext-lg"}>Need a fast plumber in {/*  */}Keighley{/*  */}?</h4>
                <p className={"\x74ext-gray-400 \x6db-6 \x74ext-sm"}>Our expert team at {/*  */}Keighley{/*  */} Plumbing Services is available 24/7 for all your plumbing emergencies.</p>
                <a className={"\x69nline-block \x77-full \x74ext-center \x62g-primary \x68over:\x62g-primary-hover \x74ext-white \x66ont-bold \x70y-4 \x70x-6 \x72ounded-xl \x74ransition \x73hadow-lg"} href="#quote">Get Your Free Quote</a>
              </div>
            </div>
          </div>
          <div className={"\x6dax-w-7xl \x6dx-auto \x70x-6 \x62order-t \x62order-gray-800 \x70t-8 \x66lex \x66lex-col \x73m:\x66lex-row \x6austify-between \x69tems-center \x67ap-4 \x74ext-sm \x74ext-gray-400"}>
            <p>Emergency Plumbers 247 is a trading name of Gastech 24/7 Plumbing &amp; Heating Services. Serving {/*  */}Keighley{/*  */} &amp; surrounding {/*  */}West Yorkshire{/*  */} areas. © {/*  */}2026{/*  */} All rights reserved.</p>
            <ul className={"\x66lex \x66lex-wrap \x69tems-center \x67ap-x-5 \x67ap-y-2"}>
              <li>
                <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Blog</a>
              </li>
              <li>
                <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Contact</a>
              </li>
              <li>
                <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className={"\x68over:\x74ext-primary \x74ransition"} href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      {/* $ */}
      {/* /$ */}
      <a aria-label="Contact us on WhatsApp" className={"\x66ixed \x62ottom-6 \x72ight-6 \x7a-50 \x66lex \x69tems-center \x6austify-center \x77-14 \x68-14 \x62g-[#\x325D366] \x74ext-white \x72ounded-full \x73hadow-lg \x68over:\x62g-[#\x3128C7E] \x74ransition-all \x64uration-300 \x74ransform \x68over:\x73cale-110 \x61ctive:\x73cale-95 \x67roup \x74ranslate-y-20 \x6fpacity-0 \x70ointer-events-none"} href="https://wa.me/447598088229?text=Hi%20GASTECH%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20some%20plumbing%20work." rel="noopener noreferrer" target="_blank">
        <svg viewBox="0 0 16 16" fill="currentColor" className={"\x77-8 \x68-8"} {...({ xmlns: "http://www.w3.org/2000/svg" } as any)}>
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
        <span className={"\x61bsolute \x72ight-16 \x62g-white \x74ext-gray-900 \x70x-3 \x70y-1.\x35 \x72ounded-lg \x74ext-sm \x66ont-bold \x73hadow-md \x6fpacity-0 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity \x77hitespace-nowrap \x62order \x62order-gray-100 \x70ointer-events-none"}>Chat with us!</span>
        <span className={"\x61bsolute \x69nset-0 \x72ounded-full \x62g-[#\x325D366] \x61nimate-ping \x6fpacity-20 \x2dz-10"} />
      </a>
    </>
  </>);
}
