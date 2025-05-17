import { GiCheckMark } from "react-icons/gi";
import styles from "./stylesReact.module.css";

export default function React() {
  return (
    <>
      <div className={styles.tabRT}>
        <div className={styles.cardRT}>
          <div className={styles.react}>
            <p>
              <i>
                <GiCheckMark />
              </i>
              ReactNode
            </p>
            <p>
              <i>
                <GiCheckMark />
              </i>
              javascript
            </p>
            <p>
              <i>
                <GiCheckMark />
              </i>
              HTML CSS
            </p>
            <p>
              <i>
                <GiCheckMark />
              </i>
              typescript
            </p>
            <p>
              <i>
                <GiCheckMark />
              </i>
              react + vite
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
