import './Title.css'

export default function Title({ abc, subtitle}) {
    return (
        <div className="title-block">
            <h1 className="title">{abc}</h1>
            <br />
            <h2 className="subtitle">{subtitle}</h2>
        </div>
    )
}