import Post from "./Post";

const library = [
    {

        postUrl: "assets/img/meowed.svg",
        postAlt: "meowed",
        postNome: "meowed",
        conteudoUrl: "assets/img/gato-telefone.svg",
        conteudoAlt: "gato-telefone",
        curtidaUrl: "assets/img/respondeai.svg",
        curtidaAlt: "respondeai",
        curtidaNome: "respondeai",
        curtidaNum: 101523
    },
    {
        postUrl: "assets/img/barked.svg",
        postAlt: "barked",
        postNome: "barked",
        conteudoUrl: "assets/img/dog.svg",
        conteudoAlt: "dog",
        curtidaUrl: "assets/img/adorable_animals.svg",
        curtidaAlt: "adorable_animals",
        curtidaNome: "adorable_animals",
        curtidaNum: 99159
    },
    {
        postUrl: "assets/img/barked.svg",
        postAlt: "barked",
        postNome: "barked",
        conteudoUrl: "assets/img/sleeping-dog.svg",
        conteudoAlt: "sleeping-dog",
        curtidaUrl: "assets/img/adorable_animals.svg",
        curtidaAlt: "adorable_animals",
        curtidaNome: "adorable_animals",
        curtidaNum: 70450
    }
]

export default function Posts() {
    return (
        <div class="posts">
            {
                library.map((posted, index) => <Post key={index} 
                    postUrl={posted.postUrl}
                    postAlt={posted.postAlt}
                    postNome={posted.postNome}
                    conteudoUrl={posted.conteudoUrl}
                    conteudoAlt={posted.conteudoAlt}
                    curtidaUrl={posted.curtidaUrl}
                    curtidaAlt={posted.curtidaAlt}
                    curtidaNome={posted.curtidaNome}
                    curtidaNum={posted.curtidaNum}
                />) 
            }
        </div>
    )
}