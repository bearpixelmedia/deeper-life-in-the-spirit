import { motion, useReducedMotion } from "framer-motion";
import { AMAZON_URL, author, book } from "./data";
import "./App.css";

function AmazonButton({
  className = "",
  label = "Buy on Amazon",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      className={`cta ${className}`.trim()}
      href={AMAZON_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{label}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="cta-arrow">
        <path
          d="M5 12h12m0 0-5-5m5 5-5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const fadeUp = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere-glow atmosphere-glow--dawn" />
        <div className="atmosphere-glow atmosphere-glow--valley" />
        <div className="atmosphere-rays" />
        <div className="atmosphere-grain" />
      </div>

      <header className="site-header">
        <div className="shell site-header-inner">
          <a className="wordmark" href="#top">
            Deeper Life in the Spirit
          </a>
          <AmazonButton className="cta--compact" label="Get the book" />
        </div>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <motion.p
              className="hero-brand"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {book.title}
            </motion.p>
            <motion.h1
              id="hero-title"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              A year in Scripture. A life formed by the Spirit.
            </motion.h1>
            <motion.p
              className="hero-support"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              Pastor Dr. Daniel Page’s 365-day journey from Genesis to Revelation—
              for readers longing to know God more intimately through His Word.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <AmazonButton />
              <a className="text-link" href="#about">
                About the book
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cover-stage">
              <motion.img
                className="cover"
                src={book.coverSrc}
                alt={`Cover of ${book.title} by ${book.author}`}
                width={1000}
                height={1499}
                animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }
              />
              <div className="cover-glow" aria-hidden="true" />
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="section about shell"
          aria-labelledby="about-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">About the book</p>
          <h2 id="about-heading">Scripture’s story, day by day</h2>
          <div className="prose">
            {book.description.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </motion.section>

        <section className="section gallery shell" aria-labelledby="gallery-heading">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">From the Amazon listing</p>
            <h2 id="gallery-heading">Front and back cover</h2>
            <p className="section-lead">
              Product photos from the Amazon page—front cover art and the full back cover.
            </p>
          </motion.div>
          <div className="gallery-grid">
            {book.gallery.map((item, index) => (
              <motion.figure
                key={item.src}
                className="gallery-item"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeUp}
                transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.08 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
                <figcaption>{item.label}</figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        <section className="section themes shell" aria-labelledby="themes-heading">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Along the way</p>
            <h2 id="themes-heading">What this year invites</h2>
            <p className="section-lead">
              Drawn from the Amazon listing—themes of the journey, not a made-up table of contents.
            </p>
          </motion.div>
          <div className="theme-list">
            {book.themes.map((theme, index) => (
              <motion.article
                key={theme.title}
                className="theme-item"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.08 }}
              >
                <span className="theme-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{theme.title}</h3>
                <p>{theme.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          id="author"
          className="section author shell"
          aria-labelledby="author-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <div className="author-layout">
            <img
              className="author-portrait"
              src={author.portraitSrc}
              alt={`Portrait of ${author.name}`}
              width={640}
              height={640}
              loading="lazy"
            />
            <div className="author-copy">
              <p className="eyebrow">About the author</p>
              <h2 id="author-heading">{author.name}</h2>
              <p className="author-role">{author.role}</p>
              <div className="prose">
                {author.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <p className="source-note">
                Author photo and biography from the{" "}
                <a href={author.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {author.sourceLabel}
                </a>
                .
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="buy"
          className="section buy shell"
          aria-labelledby="buy-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <div className="buy-layout">
            <div className="buy-copy">
              <p className="eyebrow">Get the book</p>
              <h2 id="buy-heading">Begin the journey on Amazon</h2>
              <p className="section-lead">
                Paperback · {book.pages} pages · {book.price} · {book.publisher} ·{" "}
                {book.publicationDate}
              </p>
              <dl className="meta-list">
                <div>
                  <dt>ISBN-13</dt>
                  <dd>{book.isbn13}</dd>
                </div>
                <div>
                  <dt>ASIN</dt>
                  <dd>{book.asin}</dd>
                </div>
                <div>
                  <dt>Language</dt>
                  <dd>{book.language}</dd>
                </div>
              </dl>
              <AmazonButton label="Buy Deeper Life in the Spirit" />
            </div>
            <div className="buy-covers" aria-hidden="true">
              <img
                className="buy-cover buy-cover--front"
                src={book.coverSrc}
                alt=""
                width={1000}
                height={1499}
                loading="lazy"
              />
              <img
                className="buy-cover buy-cover--back"
                src={book.coverBackSrc}
                alt=""
                width={600}
                height={900}
                loading="lazy"
              />
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <div className="shell site-footer-inner">
          <p>
            © {new Date().getFullYear()} {book.author}. {book.title}.
          </p>
          <p>
            Cover art, product photos, and listing details from the{" "}
            <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
              Amazon listing
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
