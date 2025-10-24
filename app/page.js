import Image from "next/image";
import styles from "./page.module.css";
import Publication from "@/components/publication";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <Image
          src="/pic.png"
          width={200}
          height={200}
          style={{
            borderRadius: "5px"
          }}
        />
        <div className={styles.header_text}>
          <div>
            <h1>Simon Frisk</h1>
            <p>I'm a Ph.D. student at <a href="https://www.wisc.edu">University of Wisconsin-Madison</a>. I am most fortunate to be advised by Prof. <a href="https://pages.cs.wisc.edu/~paris/">Paraschos Koutris</a> in the <a href="https://database.cs.wisc.edu">database group</a>. I am interested in query optimization, distributed query processing, recursive query processing and more.</p>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 10
          }}>
            <p>simon.frisk [at] wisc.edu</p>
            <a href="https://scholar.google.com/citations?user=1eRxj_oAAAAJ&hl=en">Google Scholar</a>
          </div>
        </div>
      </div>
      <h2>Publications</h2>
      <Publication
        name="FlowLog: Efficient and Extensible Datalog via Incrementality"
        authorlist="Hangdong Zhao, Zhenghong Yu, Srinag Rao, Simon Frisk, Zhiwei Fan, Paraschos Koutris"
        venue="VLDB 2026"
      />
      <Publication
        name="Parallel Query Processing with Heterogeneous Machines"
        authorlist="Simon Frisk, Paraschos Koutris"
        venue="ICDT 2025"
        paper="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ICDT.2025.27"
        arxiv="https://arxiv.org/abs/2501.08896"
      />
    </div>
  );
}
// <a href="https://www.linkedin.com/in/simon-frisk-a773a31b5/">LinkedIn</a>
// <a href="https://scholar.google.com/citations?user=1eRxj_oAAAAJ&hl=en">Google Scholar</a>