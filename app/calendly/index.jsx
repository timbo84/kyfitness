import CalendlyPopup from "@/components/calendly";

export default function Home() {
  return (
    <>
      <div className={styles.homepage}>
        <Navbar />
        <div className={styles.homepageCard}>
          <h1 className={styles.h1}>
            Hi Kylynn! This is going to be your calendar page
          </h1>
        </div>
      </div>
      <CalendlyPopup />
    </>
  );
}
