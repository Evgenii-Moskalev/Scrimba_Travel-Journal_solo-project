
import MapPoint from '../map-point.svg'

export default function Article({ elem }) {
    return (
        <div className="card">
            {/* {console.log(props)}; */}
            <img src={elem.imageUrl} alt="Place Card" className="card--img" />
            <div className="card--content">
                <div className="location">
                    <img src={MapPoint} alt="Point On Map" className="location--map-point" />
                    <p className="location--name">{elem.location}</p>
                    <a href={elem.googleMapsUrl} className="location--URL">View on Google Maps</a>
                </div>

                <div className="card-title">
                    <h2 className="card-title--text">{elem.title}</h2>
                </div>

                <div>
                    <p className="card-date__bold">{elem.startDate} - {elem.endDate}</p>
                </div>

                <div>
                    <p className="card-description--text">{elem.description}</p>
                </div>

            </div>
        </div>
    )
}