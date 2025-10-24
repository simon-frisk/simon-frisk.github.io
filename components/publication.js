 
export default function Publication({name, authorlist, venue, paper, arxiv}) {
    return (
        <div style={{
            paddingTop: "15px",
        }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <h4>{name}</h4>
                <div>
                    {paper && (
                        <a
                        href={paper}
                        style={{
                            color: "blue",
                            margin: "5px"
                        }}
                        >Paper</a>
                    )}
                    {arxiv && (
                        <a
                        href={arxiv}
                        style={{
                            color: "brown",
                            margin: "5px"
                        }}
                        >Arxiv</a>
                    )}
                </div>
            </div>
            <div>
                <p>{authorlist}</p>
                <p>{venue}</p>
            </div>
        </div>
    )
}