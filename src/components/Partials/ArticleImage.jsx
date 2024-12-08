import './ArticleImage.css'

const ArticleImage = ({ image }) => {
    return (
        <div className="article-image">
          <img src={image} alt="article image" />
        </div>
    )
}

export default ArticleImage;