interface CafeMenuPaneProps {
    title: string
    data: string[]
}

const CafeMenuPane = ({title, data}: CafeMenuPaneProps) => {
    return (
        <div>
            {title}
            {data.map((ai, i)=>(
                <div key={i}>{ai}</div>
            ))}
        </div>
    )
}

export default CafeMenuPane;