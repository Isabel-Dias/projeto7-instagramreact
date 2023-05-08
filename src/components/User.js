import React from "react";


export default function User() {
    const [nome, setNome] = React.useState("catanacomics")
    const [image, setImage] = React.useState("assets/img/catanacomics.svg")

    return (
        <div class="usuario">
            <img onClick={editarImagem} src={image} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon onClick={editarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )

    function editarImagem() {
        let novaImagem = prompt('Por favor, digite o link para a nova imagem:')
        if (novaImagem !== null && novaImagem !== undefined && novaImagem !== "") {
            setImage(novaImagem);
        }
    }
    
    function editarNome() {
        let novoNome = prompt('Por favor, digite o novo nome de usuário:')
        if (novoNome !== null && novoNome !== undefined && novoNome !== "") {
            setNome(novoNome);
        }
    }
}

