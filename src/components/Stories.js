import Story from "./Story"

export default function Stories() {
    return (
        <div class="stories">
            <Story storyUrl="assets/img/9gag.svg" storyAlt="9gag" storyNome="9gag" />
            <Story storyUrl="assets/img/meowed.svg" storyAlt="meowed" storyNome="meowed" />
            <Story storyUrl="assets/img/barked.svg" storyAlt="barked" storyNome="barked" />
            <Story storyUrl="assets/img/nathanwpylestrangeplanet.svg" storyAlt="nathanwpylestrangeplanet" storyNome="nathanwpylestrangeplanet" />
            <Story storyUrl="assets/img/wawawicomics.svg" storyAlt="wawawicomics" storyNome="wawawicomics" />
            <Story storyUrl="assets/img/respondeai.svg" storyAlt="respondeai" storyNome="respondeai" />
            <Story storyUrl="assets/img/filomoderna.svg" storyAlt="filomoderna" storyNome="filomoderna" />
            <Story storyUrl="assets/img/memeriagourmet.svg" storyAlt="memeriagourmet" storyNome="memeriagourmet" />

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}