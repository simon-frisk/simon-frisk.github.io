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
            <p>I'm a Ph.D. student at <a href="https://www.wisc.edu">University of Wisconsin-Madison</a>. I am most fortunate to be advised by Prof. <a href="https://pages.cs.wisc.edu/~paris/">Paraschos Koutris</a> in the <a href="https://database.cs.wisc.edu">database group</a>. I am broadly interested in query optimization.</p>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 10
          }}>
            <p>simon.frisk [at] wisc.edu</p>
            <a href="https://www.linkedin.com/in/simon-frisk-a773a31b5/">LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=1eRxj_oAAAAJ&hl=en">Google Scholar</a>
          </div>
        </div>
      </div>
      <h2>Research</h2>
      <Publication
        name="𝜅-Join: Combining Vertex Covers for Parallel Joins"
        authorlist="Simon Frisk, Austen Fan, Paraschos Koutris"
        arxiv="https://arxiv.org/abs/2603.10177"
      />
      <Publication
        name="One Join Order Does Not Fit All: Reducing Intermediate Results with Per-Split Query Plans"
        authorlist="Yujun He, Hangdong Zhao, Simon Frisk, Yifei Yang, Kevin Kristensen, Paraschos Koutris, Xiangyao Yu"
        arxiv="https://arxiv.org/abs/2510.25684"
      />
      <Publication
        name="FlowLog: Efficient and Extensible Datalog via Incrementality"
        authorlist="Hangdong Zhao, Zhenghong Yu, Srinag Rao, Simon Frisk, Zhiwei Fan, Paraschos Koutris"
        venue="VLDB 2026"
        paper="https://www.vldb.org/pvldb/vol19/p361-zhao.pdf"
        arxiv="https://arxiv.org/abs/2511.00865"
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
