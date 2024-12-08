const PhotoFrame = ({description, event, path}) =>  (
    <article>
        <div>
            <img src={path} alt="gallery photo" />
        </div>
        <div>
            <h1>{event}</h1>
            <p>{description}</p>
            <input type="button" value="Delete" />
        </div>
    </article>
)

export default PhotoFrame;
