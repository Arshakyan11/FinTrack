import styles from "./Home.module.scss";
import { Link } from "react-router";
import { ROUTES } from "../../routes/Route";
import {
  FintrackDashImg,
  FIntrackQuestions,
  FintrackSecondDash,
  FintrackStepsImg,
} from "../../assets/images";
import {
  featuresData,
  eachstepsData,
  dashboardPreviewData,
  benefitsData,
  faqDataHome,
  heroHighlightsData,
} from "../../data/manyData";
import { Check, ChevronDown, ChevronUp, MoveRight } from "lucide-react";
import { useState } from "react";
const Home = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  return (
    <section className={styles.homeSec}>
      <div className={styles.container}>
        <div className={styles.home}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className={styles.headerMainTitle}>
                Smarter Personal Finance
              </span>
              <div className={styles.titleBox}>
                <h1 className={styles.title}>Take control of your money.</h1>
                <p className={styles.titleAccent}>
                  Build a better financial future
                </p>
              </div>
              <p className={styles.headerMainText}>
                Manage your income and expenses, create budgets, track your
                savings and understand where your money goes - all in one place.
              </p>
              <div className={styles.headerButtons}>
                <Link
                  to={ROUTES.REGISTRATION}
                  className={styles.buttonGetStarted}
                >
                  Get Started Free →
                </Link>
                <Link
                  to={ROUTES.REGISTRATION}
                  className={styles.buttonExploreFeatures}
                >
                  Explore Features
                </Link>
              </div>
              <ul className={styles.header_skiils}>
                {heroHighlightsData.map((each) => (
                  <li className={styles.skillsEachSkills} key={each.id}>
                    <p className={styles.eachSkilIcon}>
                      <Check size={17} strokeWidth={3} />
                    </p>
                    <p>{each.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.headerRight}>
              <img
                src={FintrackDashImg}
                alt="FinTrack personal finance dashboard"
              />
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.featuresTitles}>
              <p className={styles.titleTop}>Features</p>
              <p className={styles.titleMiddle}>
                Everything you need to <span>manage your finances</span>
              </p>
              <p className={styles.titleBottom}>
                Powerful tools to help you track, plan, improve your financical
                life
              </p>
            </div>
            <div className={styles.featuresAll}>
              {featuresData.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div className={styles.featuresEach} key={feature.id}>
                    <div className={styles.eachLeft}>
                      <Icon size={36} strokeWidth={2.2} />
                    </div>
                    <div className={styles.eachRight}>
                      <p className={styles.eachTitle}>{feature.title}</p>
                      <p className={styles.eachText}>{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.steps}>
            <div className={styles.stepsInfo}>
              <img src={FintrackStepsImg} alt="steps" />
              <div className={styles.stepsInfoText}>
                <p className={styles.topTitle}>How it works</p>
                <p className={styles.middleTitle}>
                  Managing your finances doesn't have to be complicated.
                </p>
                <p className={styles.bottomTitle}>
                  Get started in just a few simple steps and take control of
                  your money today.
                </p>
              </div>
            </div>
            <div className={styles.stepsAll}>
              {eachstepsData.map((eachStep) => (
                <div key={eachStep.id} className={styles.eachStep}>
                  <div className={styles.stepNumberBox}>
                    <p className={styles.stepNumber}>{eachStep.number}</p>
                  </div>
                  <div className={styles.eachStepInfo}>
                    <p className={styles.stepTitle}>{eachStep.title}</p>
                    <p className={styles.stepDesc}>{eachStep.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.dashView}>
            <div className={styles.dashContent}>
              <p className={styles.title}>Dashboard preview</p>
              <p className={styles.descOne}>
                Your fInances, <br /> <span> clearly organized</span>
              </p>
              <p className={styles.descTwo}>
                Get a complete overview of your financial life in one place.
                Track your balance, income, expenses and spending by category
                with clear and interactive visuals.
              </p>
              <ul>
                {dashboardPreviewData.map((each) => (
                  <li key={each.id} className={styles.previewItem}>
                    <span className={styles.checkIcon}>
                      <Check size={17} strokeWidth={3} />
                    </span>
                    <span className={styles.previewText}>{each.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img src={FintrackSecondDash} alt="dashboard image" />
          </div>
          <div className={styles.benefits}>
            <div className={styles.benefitsTitles}>
              <p className={styles.mainTItle}>
                Why choose <span>Fintrack?</span>
              </p>
              <p className={styles.benefitsDesc}>
                A simple, powerful and secure way to manage your personal
                finances.
              </p>
            </div>
            <div className={styles.benefitstems}>
              {benefitsData.map((each) => {
                const Icon = each.icon;
                return (
                  <div className={styles.eachBenefit} key={each.id}>
                    <span className={styles.benefitIcon}>
                      <Icon size={26} strokeWidth={3} />
                    </span>
                    <div className={styles.eachBenefitInfo}>
                      <p className={styles.benefitTitle}>{each.title}</p>
                      <p className={styles.benefitdesc}>{each.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.faq}>
            <div className={styles.faqLeft}>
              <img src={FIntrackQuestions} alt="questions image" />
              <div className={styles.leftTitleBox}>
                <p>
                  Frequently Asked
                  <span>Questions</span>
                </p>
                <span>
                  Find answers to the most common questions about FinTrack.
                </span>
              </div>
            </div>
            <div className={styles.faqList}>
              {faqDataHome.map((each) => {
                const isOpen = activeFaq === each.id;
                return (
                  <div key={each.id} className={styles.faqEachItem}>
                    <h3>
                      <button
                        type="button"
                        className={styles.faqQuestion}
                        onClick={() => setActiveFaq(isOpen ? null : each.id)}
                      >
                        <span>{each.question}</span>
                        {isOpen ? (
                          <ChevronUp
                            color="#16a34a"
                            className={styles.chevron}
                          />
                        ) : (
                          <ChevronDown
                            color="#16a34a"
                            className={styles.chevron}
                          />
                        )}
                      </button>
                    </h3>
                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        <p>{each.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.banner}>
            <div className={styles.bannerText}>
              <p>Your financial journey starts here.</p>
              <span>
                Take the first step towards better financial management with
                FinTrack.
              </span>
            </div>
            <Link to={ROUTES.REGISTRATION}>
              Create Your Free Account <MoveRight color="#16a34a" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
