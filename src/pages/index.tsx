import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Navbar from '@/components/Navbar'
import { GetStaticProps } from 'next'
import Image from 'next/image'
const nextI18NextConfig = require('../../next-i18next.config.js');
import FeatureImage from '@/components/FeatureImage'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Head from 'next/head'
export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
    <Head>
        <title>{t('home_title', 'ProfilGroup')}</title>
        <meta
          name="description"
          content={t('home_meta_description', 'ProfilGroup')}
        />
        <meta property="og:title" content={t('home_title', 'ProfilGroup')} />
        <meta
          property="og:description"
          content={t('home_meta_description', 'ProfilGroup')}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Head>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="relative h-[70vh] bg-gradient-to-br from-neutral-700 to-neutral-900 text-white flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-exo">
              {t('hero_title')}
            </h1>
            <p className="text-lg md:text-xl mb-8 font-light">
              {t('hero_subtitle')}
            </p>
            <Link href="/about">
  <button className="bg-white text-lime-700 font-semibold px-6 py-3 rounded-full hover:bg-lime-100 transition">
    {t('learn_more')}
  </button>
</Link>
          </div>
        </section>
         {/* ABOUT SECTION */}
        <section className="bg-gray-50 py-18 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">{t('why_us')}</h2>
              <hr className="w-48 h-1 my-4 border-0 rounded-sm md:my-5 bg-profil">
              </hr>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-sans">
                {t('why_us_desc_extended')}
              </p>
              <ul className="space-y-4 text-gray-800 list-disc list-inside font-sans">
                <li>{t('benefit_1')}</li>
                <li>{t('benefit_2')}</li>
                <li>{t('benefit_3')}</li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-[4/3]">
  <Image
    src="/placeholder-machine.jpg"
    alt="ProfilGroup machines"
    fill
    className="object-cover grayscale"
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-profil/70 via-transparent to-neutral-900 pointer-events-none"
  />
</div>


          </div>
        </section>

<section className="w-full h-[600px] bg-black text-white overflow-hidden">
  {/* Grid (desktop) */}
  <div className="hidden md:grid grid-cols-4 grid-rows-2 w-full h-full">
    <FeatureImage
      src="/feature1.jpg"
      title={t('cnc_title')}
      description={t('cnc_desc')}
      className="col-span-2 row-span-2"
    />
    <FeatureImage
      src="/feature2.jpg"
      title={t('support_title')}
      description={t('support_desc')}
      className="row-span-1 col-span-2"
    />
    <FeatureImage
      src="/feature3.jpg"
      title={t('consulting_title')}
      description={t('consulting_desc')}
      className="row-span-1 col-span-2"
    />
  </div>

  {/* Mobile (stacked cards) */}
  <div className="md:hidden w-full h-full flex flex-col">
    <FeatureImage src="/feature1.jpg" title={t('cnc_title')} description={t('cnc_desc')} className="flex-1" />
    <FeatureImage src="/feature2.jpg" title={t('support_title')} description={t('support_desc')} className="flex-1" />
    <FeatureImage src="/feature3.jpg" title={t('consulting_title')} description={t('consulting_desc')} className="flex-1" />
  </div>
</section>
<section className="bg-white py-24 px-4">
  <div className="max-w-[100rem] mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800">{t('steps_title')}</h2>
    <hr className="w-32 h-1 my-6 mx-auto border-0 rounded-sm bg-profil" />
    <p className="text-gray-600 mb-12 text-lg">{t('steps_intro')}</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 text-left">
      {[1, 2, 3, 4, 5, 6].map((step) => (
        <div key={step} className="py-8 px-4 rounded-xl bg-neutral-50 hover:shadow-xl transition flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl font-extrabold text-profil">{`${step}.`}</span>
            <h3 className="text-base font-semibold text-neutral-600 text-nowrap">{t(`step_${step}_title`)}</h3>
          </div>
          <img src={`/placeholder-machine.jpg`} alt={`Step ${step}`} className="h-32 object-contain mb-4" />
          <p className="text-gray-700 text-sm">{t(`step_${step}_desc`)}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* OUR PARTNERS SECTION */}
<section className="bg-neutral-800 py-20 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-100">{t('our_partners_title')}</h2>
      <hr className="w-48 h-1 mb-4 mx-auto border-0 rounded-sm md:mb-6 bg-profil"></hr>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center justify-items-center">
      <Image src="/partners/homag.png" alt="Partner 1" width={120} height={60} />
      <Image src="/partners/kronospan.png" alt="Partner 2" width={120} height={60} />
      <Image src="/partners/egger.png" alt="Partner 3" width={120} height={60} />
      <Image src="/partners/gtv.png" alt="Partner 4" width={120} height={60} />
      <Image src="/partners/kaindl.png" alt="Partner 5" width={120} height={60} />
      <Image src="/partners/blum.png" alt="Partner 6" width={120} height={60} />
      <Image src="/partners/metalac.png" alt="Partner 7" width={120} height={60} />
      <Image src="/partners/kastamonu.png" alt="Partner 8" width={120} height={60} />
    </div>
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
