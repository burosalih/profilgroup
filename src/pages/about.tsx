import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Footer from '@/components/Footer';
import Head from 'next/head';
import Image from 'next/image';

import nextI18NextConfig from '../../next-i18next.config.js';

export default function AboutPage() {
  const { t } = useTranslation('common')

  return (
    <>
    <Head>
        <title>{t('about_title')} | ProfilGroup</title>
        <meta name="description" content={t('about_meta_description')} />
        <meta property="og:title" content={t('about_title')} />
        <meta property="og:description" content={t('about_meta_description')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logowhite.png" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>
      <Navbar />
      <main className="bg-neutral-800 text-white px-6 md:px-16 py-12 font-sans">
        {/* Title with logo */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-exo"
          >
            {t('about_title')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex justify-center"
          >
            <Image src="/logowhite.png" alt="ProfilGroup Logo" width={600} height={250} className="h-12 md:h-24 scale-90 md:scale-100" />
          </motion.div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{t('about_who_we_are_title')}</h2>
            <hr className="border-none h-1 bg-profil w-20 mb-4" />
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {t('about_who_we_are_desc')}
            </p>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{t('about_services_title')}</h2>
            <hr className="border-none h-1 bg-profil w-20 mb-4" />
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {t('about_services_desc')}
            </p>
          </motion.div>

          {/* Materials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{t('about_materials_title')}</h2>
            <hr className="border-none h-1 bg-profil w-20 mb-4" />
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {t('about_materials_desc')}
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{t('about_philosophy_title')}</h2>
            <hr className="border-none h-1 bg-profil w-20 mb-4" />
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {t('about_philosophy_desc')}
            </p>
          </motion.div>
        </div>

        {/* Map section */}
        <section className="max-w-7xl mx-auto mt-20">
          <h3 className="text-2xl font-semibold mb-2 text-center">
            {t('about_location_title')}
          </h3>
          <hr className="mx-auto border-none h-1 bg-profil w-20 mb-6" />
          <div className="rounded-3xl overflow-hidden border-4 border-white/20 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551.3461325203543!2d17.897221214039877!3d44.20644830087716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee25a30915dd9%3A0x9b15184dcbdd33d3!2sZAVNOBiH-a%2086%2C%20Zenica%2072000!5e0!3m2!1sen!2sba!4v1753206403100!5m2!1sen!2sba"
              width="100%"
              height="450"
              loading="lazy"
              className="w-full h-[450px]"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'bs', ['common'], nextI18NextConfig)),
    },
  }
}
