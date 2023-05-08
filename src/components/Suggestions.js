import Suggestion from "./Suggestion";

export default function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Suggestion
                sugestaoUrl="assets/img/bad.vibes.memes.svg"
                sugestaoAlt="bad.vibes.memes.svg"
                sugestaoNome="bad.vibes.memes"
                sugestaoRazao="Segue você"
            />
            <Suggestion
                sugestaoUrl="assets/img/chibirdart.svg"
                sugestaoAlt="chibirdart"
                sugestaoNome="chibirdart"
                sugestaoRazao="Segue você"
            />
            <Suggestion
                sugestaoUrl="assets/img/razoesparaacreditar.svg"
                sugestaoAlt="razoesparaacreditar"
                sugestaoNome="razoesparaacreditar"
                sugestaoRazao="Novo no Instagram"
            />
            <Suggestion
                sugestaoUrl="assets/img/adorable_animals.svg"
                sugestaoAlt="adorable_animals"
                sugestaoNome="adorable_animals"
                sugestaoRazao="Segue você"
            />
            <Suggestion
                sugestaoUrl="assets/img/smallcutecats.svg"
                sugestaoAlt="smallcutecats"
                sugestaoNome="smallcutecats"
                sugestaoRazao="Segue você"
            />

        </div>
    )
}