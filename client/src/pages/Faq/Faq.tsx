import React from "react";
import styles from "./Faq.module.scss";
import { FintrackFaq } from "../../assets/images";
import { Headset } from "lucide-react";
import { supportHighlightsData } from "../../data/manyData";
const Faq = () => {
  return (
    <section className={styles.faqSec}>
      <div className={styles.container}>
        <div className={styles.faq}>
          <div className={styles.faqHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.headerTitle}>
                <Headset size={24} />
                <span>Support Center</span>
              </div>
              <p className={styles.headerSubTitle}>
                Frequently Asked <span>Questions</span>
              </p>
              <p className={styles.headerDesc}>
                Find clear answers to common questions about FinTrack, its
                features and how to get the most out of it.
              </p>
            </div>
            <img
              src={FintrackFaq}
              alt="FAQ header image"
              className={styles.headerImg}
            />
          </div>
          <div className={styles.supportItems}>
            {supportHighlightsData.map((each) => {
              const Icon = each.icon;
              return (
                <div key={each.id} className={styles.eachItem}>
                  <span>
                    <Icon color="#16a34a" size={30} />
                  </span>
                  <div className={styles.eachItemTextBox}>
                    <p className={styles.textTitle}>{each.title}</p>
                    <p className={styles.textDesc}>{each.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
