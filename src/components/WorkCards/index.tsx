import styles from "./styles.module.css";

type WorkProps = {
  id: string;
  title: string;
  description: string;
  rating: number;
};

export default function WorkCards({ works }: WorkProps[] | any) {
  return (
    <div className={styles.mainContainer}>
      {works.map((work) => {
        return (
          <div className={styles.work}>
            <h2>{work.title}</h2>
            <h3>{work.description}</h3>
            <h3>{work.rating} </h3>
          </div>
        );
      })}
    </div>
  );
}
