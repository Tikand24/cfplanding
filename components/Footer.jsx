'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          {' '}
          Contactar CFP
        </h4>
        <a
          href="https://api.whatsapp.com/send/?phone=573138037661&text=Hola&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <img
            src="/whatsapp.svg"
            alt="whatsapp"
            className="w-[24px] h-[24px] object-contain text-white"
          />
          <span className="font-normal texxt-[16px] text-white">WhatsApp</span>
        </a>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-50">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h4 className="font-extrabold text-[24px] text-white">
                <a
                  href="https://www.facebook.com/asociacionCFP"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook: asociacionCFP
                </a>
              </h4>
              <h4 className="font-extrabold text-[24px] text-white">
                Telefono: 3138037661
              </h4>
              <h4 className="font-extrabold text-[24px] text-white">
                Correo: cfpagropecuario@hotmail.com
              </h4>
            </div>
            <p className="font-noraml text-[14px] text-white">
              Desarrollado por Jonatan villalobos Guchuvo
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
