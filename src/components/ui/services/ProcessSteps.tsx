import styles from './ProcessSteps.module.css';

interface Step {
  step: string;
  title: string;
  desc: string;
}

interface ProcessStepsProps {
  title?: string;
  steps: Step[];
}

export default function ProcessSteps({ title = 'HOW IT WORKS', steps }: ProcessStepsProps) {
  return (
    <section className={styles.processSection}>
      <div className="container">
        <div className={styles.processHeader}>
          <h2 className={styles.processTitle}>{title}</h2>
        </div>
        
        <div className={styles.processGrid}>
          {steps.map((item, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.stepNumber}>{item.step}</div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
