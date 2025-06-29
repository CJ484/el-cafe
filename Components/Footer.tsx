import React from 'react'
import styles from '@/styles/components.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__content}>
            <div className={styles.footer__content__socials}>
                <h3>Follow Us</h3>

            </div>
            <h2>El Cafe</h2>
            <p>123 Main St, Anytown, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@elcafe.com</p>
            <p>Hours: Monday - Friday 8:00 AM - 5:00 PM</p>
            <p>Hours: Saturday - Sunday 9:00 AM - 4:00 PM</p>
        </div>
      <div className={styles.footer__copyright}>
        <p>Copyright &copy; {new Date().getFullYear()} El Cafe. All rights reserved.</p>
      </div>
    </footer>
  )
}
