import { StillingI } from "src/app/(site)/page";
import Stilling from "./stilling";
import styles from "./Stillinger.module.css";

const Stillinger = ({ stillinger }: { stillinger: StillingI[] }) => {
  if (!stillinger?.length) {
    return (
      <div className={styles.style}>
        <h2 id="ledige-stillinger">Er du nysgjerrig på å jobbe i Nav teknologi?</h2>
        <p>
          Vi har for tiden ingen ledige stillinger, men fortvil ikke! Vi er stadig på jakt etter nye kollegaer og da
          blir stillingsannonsene lagt ut her.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.style}>
      <h2 id="ledige-stillinger">Ledige stillinger</h2>
      <ul>
        {stillinger.map((stilling) => (
          <Stilling key={stilling.title} {...stilling} />
        ))}
      </ul>
    </div>
  );
};

export default Stillinger;
