"use client";

import { useEffect, useState } from "react";

const address =
  "Mahesh, 1, 392/A G T Road, 391, GT Rd, Mahesh Bose Para, Serampore, Hooghly, Kolkata, West Bengal 712202";
const phones = [
  { display: "9088194881", url: "tel:+919088194881" },
  { display: "7003506068", url: "tel:+917003506068" },
  { display: "6289907427", url: "tel:+916289907427" },
];

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Ravi+Furniture+Mahesh+1+392%2FA+G+T+Road+391+GT+Rd+Mahesh+Bose+Para+Serampore+Hooghly+West+Bengal+712202";

const reasons = [
  ["01", "Quality you can feel", "Carefully selected pieces built for lasting everyday comfort."],
  ["02", "Prices that make sense", "Beautiful options across budgets, with straightforward guidance."],
  ["03", "Everything under one roof", "Living, dining, bedroom, office, storage and pooja furniture."],
  ["04", "Your local furniture partner", "A convenient Mahesh showroom and service you can rely on."],
];

const gallery = [
  ["Our Showroom", "50% 50%", "galleryTall", "/assets/showroom-interior.jpg"],
  ["Dining", "50% 50%", "", "/assets/gallery-dining.jpg"],
  ["Bedroom", "50% 50%", "", "/assets/gallery-bedroom.jpg"],
  ["Storage & Office", "50% 50%", "galleryWide", "/assets/gallery-office.jpg"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lightbox, setLightbox] = useState<{ label: string; position: string; image: string } | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLightbox(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightbox]);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <a className="skipLink" href="#main">Skip to content</a>

      <header className="siteHeader">
        <div className="container navWrap">
          <a className="brand" href="#home" aria-label="Ravi Furniture home">
            <span className="brandMark" aria-hidden="true">R</span>
            <span><strong>Ravi</strong><small>Furniture</small></span>
          </a>

          <button
            className={`menuToggle ${menuOpen ? "open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>

          <nav className={`mainNav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
            {[["Home", "home"], ["About", "about"], ["Categories", "categories"], ["Featured", "featured"], ["Why us", "why-us"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="navCta" href="#contact" onClick={() => setMenuOpen(false)}>Visit showroom</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero" aria-label="Ravi Furniture showroom">
          <h1 className="srOnly">Ravi Furniture — Furnishing your dreams</h1>
          <img className="heroImage" src="/assets/ravi-furniture-hero.jpg" alt="Ravi Furniture premium showroom with a modern sofa collection" width="1600" height="853" />
          <div className="heroShade" />
          <div className="heroCtaBar">
            <div className="container heroCtaInner">
              <div><p className="eyebrow light">Mahesh · Serampore</p><p>Beautiful, dependable furniture for every corner of your home.</p></div>
              <div className="heroActions"><a className="button buttonGold" href="#categories">Explore collection</a><a className="button buttonGhost" href="#contact">Get directions</a></div>
            </div>
          </div>
        </section>

        <section className="trustStrip" aria-label="Our promises">
          <div className="container trustGrid">
            {[["Premium", "Quality"], ["Honest", "Pricing"], ["Stylish", "& Durable"], ["Local", "Showroom"]].map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </section>

        <section id="about" className="section aboutSection">
          <div className="container aboutGrid">
            <div className="aboutImageWrap">
              <img src="/assets/about-store.jpg" alt="Inside Ravi Furniture showroom in Mahesh, Serampore" width="1448" height="1086" loading="lazy" />
              <span>Our Mahesh showroom</span>
            </div>
            <div className="aboutCopy">
              <p className="eyebrow">About the store</p>
              <h2>Furniture for every room and every lifestyle.</h2>
              <p>Ravi Furniture brings together a wide selection of stylish, practical and affordable furniture under one roof. Whether you are setting up a new home or refreshing a single room, our local team helps you find pieces that feel right for your space.</p>
              <div className="aboutPoints"><div><strong>One showroom</strong><span>Complete home collection</span></div><div><strong>Local guidance</strong><span>Friendly help in Serampore</span></div></div>
              <a className="textLink darkLink" href="#contact">Visit the store <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section id="categories" className="section categoriesSection">
          <div className="container">
            <div className="sectionHeading splitHeading">
              <div><p className="eyebrow">Made for your home</p><h2>Shop by category</h2></div>
              <p>From quiet bedrooms to lively living rooms, discover pieces chosen for comfort, everyday use and timeless style.</p>
            </div>
            <button
              className="categoryPoster"
              type="button"
              aria-label="Enlarge Ravi Furniture product categories"
              onClick={() => setLightbox({
                label: "Ravi Furniture Product Categories",
                position: "center",
                image: "/assets/product-categories.jpg",
              })}
            >
              <img
                src="/assets/product-categories.jpg"
                alt="Ravi Furniture product categories including living room, bedroom, dining room, office furniture, storage, seating, pooja units and custom furniture"
                width="1536"
                height="1024"
                loading="lazy"
              />
              <span>Tap to enlarge</span>
            </button>
          </div>
        </section>

        <section id="featured" className="section featuredSection">
          <div className="container">
            <div className="sectionHeading splitHeading">
              <div><p className="eyebrow">Featured collection</p><h2>Quality, choice and service—all in one place.</h2></div>
              <p>Explore what makes Ravi Furniture a trusted local destination for comfortable, stylish and dependable furniture.</p>
            </div>
            <figure className="featuredVisual">
              <img src="/assets/featured-collection.jpg" alt="Featured Ravi Furniture collection and customer benefits" width="1448" height="1086" loading="lazy" />
            </figure>
          </div>
        </section>

        <section id="why-us" className="section whySection">
          <div className="container whyGrid">
            <div className="whyIntro"><p className="eyebrow light">The Ravi promise</p><h2>Furniture you’ll love living with.</h2><p>We make furniture shopping simple: dependable quality, useful variety and friendly local guidance from selection to delivery.</p><a className="textLink" href="#contact">Plan your showroom visit <span aria-hidden="true">→</span></a></div>
            <div className="reasonList">{reasons.map(([number, title, copy]) => <article className="reason" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
          </div>
        </section>

        <section id="gallery" className="section gallerySection">
          <div className="container">
            <div className="sectionHeading centered"><p className="eyebrow">Inside our collection</p><h2>Designed for real homes</h2><p>Fresh arrivals, thoughtful details and comfortable pieces for every room.</p></div>
            <div className="galleryGrid" aria-label="Furniture gallery">
              {gallery.map(([label, position, extra, image]) => (
                <button
                  className={`galleryItem ${extra}`}
                  type="button"
                  key={label}
                  style={{
                    backgroundPosition: position,
                    backgroundImage: `linear-gradient(0deg, rgba(14,8,4,.74), transparent 56%), url("${image}")`,
                  }}
                  onClick={() => setLightbox({ label, position, image })}
                >
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <div className="container contactCard">
            <div className="contactCopy">
              <p className="eyebrow light">Visit Ravi Furniture</p><h2>See it. Feel it. Find your perfect piece.</h2>
              <p>Explore our collection in person and get friendly help choosing furniture that suits your home, style and budget.</p>
              <address><span>Showroom address</span>Mahesh, 1, 392/A G T Road, 391, GT Rd,<br />Mahesh Bose Para, Serampore, Hooghly,<br />Kolkata, West Bengal 712202</address>
              <div className="phoneBlock">
                <span>Contact us</span>
                <div className="phoneLinks">
                  {phones.map((phone, index) => (
                    <span className="phoneItem" key={phone.display}>
                      {index > 0 && <span className="phoneSeparator" aria-hidden="true">|</span>}
                      <a href={phone.url}>{phone.display}</a>
                    </span>
                  ))}
                </div>
              </div>
              <div className="contactActions"><a className="button buttonGold" href={phones[0].url}>Call Us: {phones[0].display}</a><a className="button buttonGhost" href={mapUrl} target="_blank" rel="noreferrer">Google Maps</a><button className="button buttonGhost" type="button" onClick={copyAddress}>Copy address</button></div>
              <p className="copyStatus" aria-live="polite">{copied ? "Address copied — see you at the showroom!" : ""}</p>
            </div>
            <a className="mapPanel" href={mapUrl} target="_blank" rel="noreferrer" aria-label="Open Ravi Furniture location in Google Maps"><span className="mapPin" aria-hidden="true" /><span className="mapLabel"><small>Located in</small><strong>Mahesh, Serampore</strong><em>Open directions →</em></span></a>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="container footerGrid"><a className="brand brandFooter" href="#home"><span className="brandMark" aria-hidden="true">R</span><span><strong>Ravi</strong><small>Furniture</small></span></a><p>Premium furniture for every corner of your home.</p><div className="footerLinks"><a href="#about">About</a><a href="#categories">Categories</a><a href="#featured">Featured</a><a href="#why-us">Why us</a><a href="#contact">Contact</a></div></div>
        <div className="container footerBottom"><span>© {new Date().getFullYear()} Ravi Furniture</span><span>Furnishing your dreams.</span></div>
      </footer>

      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${lightbox.label} gallery preview`} onClick={() => setLightbox(null)}><button type="button" aria-label="Close gallery preview" onClick={() => setLightbox(null)}>×</button><div className="lightboxInner"><div className="lightboxImage" style={{ backgroundPosition: lightbox.position, backgroundImage: `url("${lightbox.image}")` }} /><p>{lightbox.label}</p></div></div>}
    </>
  );
}
