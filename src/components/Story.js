export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.storyUrl} alt={props.storyAlt} />
            </div>
            <div class="usuario">
                {props.storyNome}
            </div>
        </div>
    )
}