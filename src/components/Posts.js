import Post from "./Post";
export default function Posts() {
    return (
        <div class="posts">
            <Post
                postUrl="assets/img/meowed.svg"
                postAlt="meowed"
                postNome="meowed"
                conteudoUrl="assets/img/gato-telefone.svg"
                conteudoAlt="gato-telefone"
                curtidaUrl="assets/img/respondeai.svg"
                curtidaAlt="respondeai"
                curtidaNome="respondeai"
                curtidaNum="outras 101.523 pessoas"
            />
            <Post
                postUrl="assets/img/barked.svg"
                postAlt="barked"
                postNome="barked"
                conteudoUrl="assets/img/dog.svg"
                conteudoAlt="dog"
                curtidaUrl="assets/img/adorable_animals.svg"
                curtidaAlt="adorable_animals"
                curtidaNome="adorable_animals"
                curtidaNum="outras 99.159 pessoas"
            />
            <Post
                postUrl="assets/img/barked.svg"
                postAlt="barked"
                postNome="barked"
                conteudoUrl="assets/img/sleeping-dog.svg"
                conteudoAlt="sleeping-dog"
                curtidaUrl="assets/img/adorable_animals.svg"
                curtidaAlt="adorable_animals"
                curtidaNome="adorable_animals"
                curtidaNum="outras 70.450 pessoas"
            />
        </div>
    )
}