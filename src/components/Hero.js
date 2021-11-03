import styles from '../../styles/Hero.module.css'
import Leafs from '../../public/images/leaves.jpg' 
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
    return (
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.image2}>
            <Image
              className={styles.bodyPic2}
              src={Leafs}
              width={200}
              height={200}
            />
          </div>
          <div className={styles.bodyBox}>
            <div className={styles.image}>
              <Image
                className={styles.bodyPic}
                src={Leafs}
                width={400}
                height={400}
              />
            </div>
            <div className={styles.bodyText}>
              <h1>
                Hey, I'm a <br /> <span>Creative </span>web <br />
                Developer.
              </h1>
              <p>
                Hi, I'm Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Nisi ad non quaerat laborum sapiente quis atque molestias
                harum eum illo facere. Nisi ad non quaerat laborum sapiente quis
                atque molestias harum eum illo facere.
              </p>
              <div className={styles.emailBox}>
                <input type='email' placeholder='Email Address' />
                <button>Subscribe</button>
                <p>🌿 Join my newsletter and get free strategy</p>
              </div>
              <button className={styles.btn}>Explore!</button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero;
