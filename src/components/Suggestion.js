export default function Suggestion(props) {
    return (
        <div key={props.index} class="sugestao">
            <div class="usuario">
                <img src={props.sugestaoUrl} alt={props.sugestaoAlt} />
                <div class="texto">
                    <div class="nome">{props.sugestaoNome}</div>
                    <div class="razao">{props.sugestaoRazao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}