import { cards } from "@/app/lib/data";
import Card from "@/app/ui/dashboard/card/card";
//import Chart from "@/app/dashboard/chart/chart";
import styles from "@/app/ui/dashboard/dashboard.module.css";
//import Rightbar from "@/app/dashboard/rightbar/rightbar";
import Transactions from "@/app/ui/dashboard/transactions/transactions";

const Revenue = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        {/* <Chart /> */}
      </div>
   
    </div>
  );
};

export default Revenue;
