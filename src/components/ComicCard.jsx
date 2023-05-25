import '../css/Card.css'

export function ComicCard({name,resourceURI}) {
  return (  
    <div className="comicCard">
        <h4>{name}</h4>
        <img src={resourceURI} alt={name} />
    </div>
  )
}
