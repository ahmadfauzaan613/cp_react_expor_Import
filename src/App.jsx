import { useState } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import logo from './Assets/logoGdf.png'
import heroImage from './Assets/content/64b11f9342d7b.jpg'
import shallotImage from './Assets/bawang.png'
import cinnamonImage from './Assets/icon_8.png'
import turmericImage from './Assets/pngegg.png'
import gingerImage from './Assets/Jahe-removebg-preview.png'
import polishedTurmericImage from './Assets/pngwing.com.png'
import betelImage from './Assets/pngwing.com (1).png'
import cardamomImage from './Assets/kapulaga_1-removebg-preview.png'
import cocoaImage from './Assets/cocoa-bean-hot-chocolate-ingredient-tea-cocoa-beans-e160b9b1c60358983096900b5b9d76a8.png'
import companyProfile from './Assets/CompanyProfile_PTGhandafi.pdf'
import certificate from './Assets/SertifikatPT.pdf'
import npwp from './Assets/230121239550NPWP.pdf'
import gallery1 from './Assets/content/6145a8a8627d4.jpg'
import gallery2 from './Assets/content/WhatsApp Image 2023-10-06 at 20.49.27_b3f24394.jpg'
import gallery3 from './Assets/content/WhatsApp Image 2023-10-06 at 20.51.13_6ae0b61f.jpg'
import gallery4 from './Assets/content/WhatsApp Image 2023-10-06 at 20.51.42_1ee0791e.jpg'
import gallery5 from './Assets/content/WhatsApp Image 2023-10-08 at 19.15.11_6dd0f9ec.jpg'
import gallery6 from './Assets/content/WhatsApp Image 2023-10-08 at 19.24.56_fcf2eadb.jpg'
import gallery7 from './Assets/content/r2.jpg'
import gallery8 from './Assets/content/r3.jpg'
import gallery9 from './Assets/content/r5.jpg'
import gallery10 from './Assets/content/r7.jpg'
import gallery11 from './Assets/content/hasil-pertanian-5.webp'
import gallery12 from './Assets/content/kunyit(1)3.jpeg'
import gallery13 from './Assets/content/kunyit-garut-potensial-untuk-diekspor_18030.jpg'

const products = [
  { name: 'Shallots', code: 'HS 070310', image: shallotImage, detail: 'Round bulbs with a bright red outer layer.' },
  { name: 'Cinnamon', code: 'HS 0906', image: cinnamonImage, detail: 'Grade A rolls, cut to 8 cm, dry, fragrant, and spicy.' },
  { name: 'Turmeric', code: 'HS 0910.30.00', image: turmericImage, detail: 'Whole turmeric rhizomes for food and ingredient buyers.' },
  { name: 'Double-polished turmeric', code: 'Buyer specification', image: polishedTurmericImage, detail: 'Curcumin 4%, moisture 13%, with 3 to 6 cm dried pieces.' },
  { name: 'Elephant ginger', code: 'HS 0910', image: gingerImage, detail: 'Whole, clean rhizomes with 12 to 14% moisture when dried.' },
  { name: 'Betel nut', code: 'HS 0802800', image: betelImage, detail: 'Available in 10 to 15 cm sizing with buyer-agreed specifications.' },
  { name: 'Cardamom', code: 'HS 0908', image: cardamomImage, detail: '5 to 8 mm size, 13% moisture, and oil content above 2%.' },
  { name: 'Cocoa beans', code: 'HS 1801', image: cocoaImage, detail: 'Dried beans with 7% moisture and a 1% broken or damaged allowance.' },
]

const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13]

function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg> }
function MenuIcon({ open }) { return <svg viewBox="0 0 24 24" aria-hidden="true">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg> }

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const href = (hash) => location.pathname === '/' ? hash : `/${hash}`
  const closeMenu = () => setOpen(false)
  return <header className="site-header"><a className="skip-link" href="#main">Skip to main content</a><div className="nav-shell"><Link className="brand" to="/" onClick={closeMenu} aria-label="Ghandafi home"><img src={logo} alt="PT Ghandafi Berkah Utama" /></Link><button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><MenuIcon open={open} /><span>{open ? 'Close' : 'Menu'}</span></button><nav id="primary-nav" className={open ? 'primary-nav open' : 'primary-nav'} aria-label="Primary navigation"><a onClick={closeMenu} href={href('#about')}>Company</a><a onClick={closeMenu} href={href('#products')}>Commodities</a><a onClick={closeMenu} href={href('#terms')}>Trade terms</a><Link onClick={closeMenu} to="/gallery">Field notes</Link><a onClick={closeMenu} className="nav-contact" href={href('#contact')}>Discuss an order</a></nav></div></header>
}

function Footer() { return <footer><div className="footer-main"><img src={logo} alt="PT Ghandafi Berkah Utama" /><p>Indonesian agricultural commodities prepared for international trade.</p><a href="mailto:marketing@ghandafi.com">marketing@ghandafi.com</a></div><div className="footer-base"><span>PT Ghandafi Berkah Utama</span><span>Pekanbaru, Riau, Indonesia</span></div></footer> }
function WhatsAppLink() { return <a className="whatsapp" href="https://wa.me/6288271974588?text=Hello%20Ghandafi%2C%20I%20would%20like%20to%20discuss%20a%20commodity%20order." target="_blank" rel="noreferrer" aria-label="Discuss an order on WhatsApp"><span>WA</span><b>Start a conversation</b></a> }

function Hero() { return <section className="hero"><div className="hero-copy"><p className="kicker">Indonesia, prepared for the world</p><h1>Reliable produce.<br/><em>Clear trade terms.</em></h1><p className="hero-intro">We supply Indonesian spices and agricultural commodities for international buyers, with product specifications and shipping terms discussed from the start.</p><div className="hero-actions"><a className="button primary" href="#products">Review our commodities <ArrowIcon /></a><a className="text-link" href={companyProfile} target="_blank" rel="noreferrer">Download company profile</a></div></div><figure className="hero-visual"><img src={heroImage} alt="Fresh turmeric rhizomes held after harvest" /><figcaption><span>Origin</span><strong>Sumatra, Indonesia</strong></figcaption></figure></section> }

function About() { return <section className="about section" id="about"><div className="section-index">01 / Company</div><div className="about-lead"><h2>Built around the product, not the promise.</h2><p>PT Ghandafi Berkah Utama is an Indonesian supplier and exporter based in Pekanbaru, Riau. We focus on shallots, cinnamon, turmeric, and other agricultural commodities sourced in Indonesia.</p></div><div className="about-detail"><p>Our work covers product preparation, packing, and trade coordination. Buyers can review product details and commercial terms before moving to an order discussion.</p><div className="document-links"><a href={certificate} target="_blank" rel="noreferrer">Company certificate <ArrowIcon /></a><a href={npwp} target="_blank" rel="noreferrer">Company NPWP <ArrowIcon /></a></div></div></section> }

function Products() { return <section className="products section" id="products"><div className="products-heading"><div><div className="section-index light">02 / Commodities</div><h2>Products with a clear starting specification.</h2></div><p>Specifications shown here come from the company’s existing product catalogue. Final grade, volume, packing, and shipment details are confirmed for each inquiry.</p></div><div className="product-list">{products.map((product, index) => <article className="product-row" key={product.name}><span className="product-number">{String(index + 1).padStart(2, '0')}</span><div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /></div><div className="product-name"><h3>{product.name}</h3><span>{product.code}</span></div><p>{product.detail}</p></article>)}</div></section> }

function TradeTerms() { return <section className="terms section" id="terms"><div className="section-index">03 / Trade terms</div><div className="terms-title"><h2>A practical route from inquiry to port.</h2><p>Commercial terms are agreed per order. The options below reflect the terms currently stated in the company profile.</p></div><div className="term-grid"><article><span>Shipping</span><h3>FOB, CNF, or CIF</h3><p>Select a shipping basis that matches your receiving arrangement and insurance needs.</p></article><article><span>Payment</span><h3>Bank T/T</h3><p>Payment structures include a 50% down payment, with the balance against a copy of the bill of lading or by irrevocable letter of credit at sight.</p></article><article><span>Port of loading</span><h3>Belawan Port</h3><p>Shipments can be arranged from Belawan Port in North Sumatra.</p><a href="https://maps.app.goo.gl/EZUPKVbk6AcQzeeC6" target="_blank" rel="noreferrer">View port location <ArrowIcon /></a></article></div></section> }

function GalleryPreview() { return <section className="field-notes section"><div className="field-copy"><div className="section-index">04 / Field notes</div><h2>Products seen closer to their source.</h2><p>A working gallery of crops, handling, and agricultural material from the company archive.</p><Link className="text-link" to="/gallery">Open the full gallery <ArrowIcon /></Link></div><div className="field-images"><img src={gallery2} alt="Indonesian agricultural produce" loading="lazy"/><img src={gallery5} alt="Produce handling documentation" loading="lazy"/><img src={gallery7} alt="Cinnamon from Indonesia" loading="lazy"/></div></section> }

function Contact() {
  const [status, setStatus] = useState('')
  function submit(event) { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(`Commodity inquiry from ${data.get('name')}`); const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone / WhatsApp: ${data.get('phone')}\n\nInquiry:\n${data.get('message')}`); setStatus('Your email application is opening with the inquiry details filled in.'); window.location.href = `mailto:marketing@ghandafi.com?subject=${subject}&body=${body}` }
  return <section className="contact section" id="contact"><div className="contact-copy"><div className="section-index light">05 / Contact</div><h2>Tell us what you need to source.</h2><p>Include the commodity, target volume, destination port, and preferred shipping term. We will use those details to continue the conversation.</p><div className="contact-lines"><a href="mailto:marketing@ghandafi.com">marketing@ghandafi.com</a><a href="tel:+6288271974588">+62 882 7197 4588</a><address>Jl. Budisari No. 16A, Umbansari<br/>Rumbai, Pekanbaru, Riau, Indonesia</address></div></div><form onSubmit={submit}><label>Full name<input required name="name" autoComplete="name" /></label><label>Email address<input required type="email" name="email" autoComplete="email" /></label><label>Phone or WhatsApp<input required type="tel" name="phone" autoComplete="tel" /></label><label>What would you like to source?<textarea required name="message" rows="5" placeholder="Commodity, volume, destination, and preferred shipping term" /></label><button className="button clay" type="submit">Prepare email inquiry <ArrowIcon /></button><p className="form-status" aria-live="polite">{status}</p></form></section>
}

function Home() { return <><Header/><main id="main"><Hero/><About/><Products/><TradeTerms/><GalleryPreview/><Contact/></main><Footer/><WhatsAppLink/></> }
function GalleryPage() { return <><Header/><main id="main" className="gallery-page"><div className="gallery-intro"><p className="kicker">Field notes</p><h1>A closer look at the produce.</h1><p>Images from the company archive covering crops, ingredients, and product handling.</p></div><div className="gallery-grid">{gallery.map((image, i) => <figure key={image}><img src={image} alt={`Ghandafi agricultural documentation ${i + 1}`} loading={i > 3 ? 'lazy' : 'eager'} /></figure>)}</div><div className="gallery-return"><Link className="button primary" to="/">Return to company overview</Link></div></main><Footer/><WhatsAppLink/></> }
function NotFound() { return <><Header/><main id="main" className="not-found"><p className="kicker">404</p><h1>This page is not in our catalogue.</h1><p>Return to the company overview or contact us about a product.</p><Link className="button primary" to="/">Go to homepage</Link></main><Footer/></> }

export default function App() { return <Routes><Route path="/" element={<Home/>}/><Route path="/gallery" element={<GalleryPage/>}/><Route path="/Gallery" element={<Navigate to="/gallery" replace/>}/><Route path="/Article" element={<Navigate to="/#products" replace/>}/><Route path="/Article-2" element={<Navigate to="/#products" replace/>}/><Route path="/Article-3" element={<Navigate to="/#products" replace/>}/><Route path="*" element={<NotFound/>}/></Routes> }
