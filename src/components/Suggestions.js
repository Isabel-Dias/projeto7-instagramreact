import Suggestion from "./Suggestion";

const suggestionsLib = [
    {
        sugestaoUrl: "assets/img/bad.vibes.memes.svg",
        sugestaoAlt: "bad.vibes.memes.svg",
        sugestaoNome: "bad.vibes.memes",
        sugestaoRazao: "Segue você"
    },
    {
        sugestaoUrl: "assets/img/chibirdart.svg",
        sugestaoAlt: "chibirdart",
        sugestaoNome: "chibirdart",
        sugestaoRazao: "Segue você"
    },
    {
        sugestaoUrl: "assets/img/razoesparaacreditar.svg",
        sugestaoAlt: "razoesparaacreditar",
        sugestaoNome: "razoesparaacreditar",
        sugestaoRazao: "Novo no Instagram"
    },
    {
        sugestaoUrl: "assets/img/adorable_animals.svg",
        sugestaoAlt: "adorable_animals",
        sugestaoNome: "adorable_animals",
        sugestaoRazao: "Segue você"
    },
    {
        sugestaoUrl: "assets/img/smallcutecats.svg",
        sugestaoAlt: "smallcutecats",
        sugestaoNome: "smallcutecats",
        sugestaoRazao: "Segue você"
    }
]

export default function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {
                suggestionsLib.map((suggestionbox, index) => <Suggestion key={index} 
                    sugestaoUrl={suggestionbox.sugestaoUrl}
                    sugestaoAlt={suggestionbox.sugestaoAlt}
                    sugestaoNome={suggestionbox.sugestaoNome}
                    sugestaoRazao={suggestionbox.sugestaoRazao}
                />) 
            }

        </div>
    )
}