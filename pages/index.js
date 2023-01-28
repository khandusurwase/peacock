import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
     
      <Head>
        <title>Post Your Job</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="#Home"><p className={styles.regularFont}>PEACOCK SOFTWARES</p></a>
        </h1>

        <p className={styles.description}>
          {/* Get started by  <code>pages/index.js</code> */}
          Get started by
        </p>

        <div className={styles.grid}>
          <a href="#Jobs" className={styles.card}>
            <h3>Post Your Job &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="#TrackDevelopment" className={styles.card}>
            <h3>Track Development &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="#Examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="#Deploy"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="#Home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} 
          <img src="/peacock.jpeg" alt="Peacock" className={styles.logo} />PEACOCK SOFTWARE || 2023
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: black;
        }
        footer img {
          margin-left: 0.5rem;
          border-radius:2;
        }
        footer a {
          display: flex;
          text-color:white;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: white;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
