import image from '../assets/news_en_1920x1080.jpg'

const NewsItem = ({title, description, src, url}) => {

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
    <img src={src?src:image} style={{height:"200px", width:"327.4px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{String(title).slice(0, 50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Artificial intelligence is transforming industries and creating new opportunities."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
    </div>
    </div>
  )
}

export default NewsItem
