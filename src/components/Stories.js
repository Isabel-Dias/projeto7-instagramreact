import Story from "./Story"

const storiesLib = [
    {
        storyUrl:"assets/img/9gag.svg", 
        storyAlt: "9gag", 
        storyNome: "9gag" 
    },
    {
        storyUrl: "assets/img/meowed.svg",
        storyAlt: "meowed", 
        storyNome: "meowed",
    },
    {
        storyUrl: "assets/img/barked.svg",
        storyAlt: "barked", 
        storyNome: "barked" 
    },
    {
        storyUrl: "assets/img/nathanwpylestrangeplanet.svg", 
        storyAlt: "nathanwpylestrangeplanet", 
        storyNome: "nathanwpylestrangeplanet"
    },
    {
        storyUrl: "assets/img/wawawicomics.svg", 
        storyAlt: "wawawicomics", 
        storyNome: "wawawicomics"
    },
    {
        storyUrl: "assets/img/respondeai.svg", 
        storyAlt: "respondeai", 
        storyNome: "respondeai"
    },
    {
        storyUrl: "assets/img/filomoderna.svg", 
        storyAlt: "filomoderna", 
        storyNome: "filomoderna"
    },
    {
        storyUrl: "assets/img/memeriagourmet.svg", 
        storyAlt: "memeriagourmet", 
        storyNome: "memeriagourmet"
    }
]

export default function Stories() {
    return (
        <div class="stories">
            {
                storiesLib.map((storybox, index) => <Story key={index} 
                    storyUrl={storybox.storyUrl}
                    storyAlt={storybox.storyAlt}
                    storyNome={storybox.storyNome}
                />) 
            }

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}