import styles from "@/styles/Home.module.css";
import VerticalChart from "@/components/Vertical Chart";
import HorizontalChart from "@/components/HorizontalChart";
import PieChart from "@/components/PieChart";

export default function Home() {
  return (
    <>
      <main className={`${styles.main} `}>
        {/* <VerticalChart/> */}
        {/* <HorizontalChart/> */}
        <PieChart/>
      </main>
    </>
  );
}
