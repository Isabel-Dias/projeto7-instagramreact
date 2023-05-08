import React from "react";

export default function Post(props) {
  const[like, setLike] = React.useState(false);
  const[bookmark, setBookmark] = React.useState(false);

  return (
    <div data-test="post" key={props.index} class="post">
      <div class="topo">
        <div class="usuario">
          <img data-test="post-image" src={props.postUrl} alt={props.postAlt} />{props.postNome}</div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.conteudoUrl} alt={props.conteudoAlt} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {like ?
              <ion-icon data-test="like-post" name="heart" style={{ color: "red" }} onClick={() => setLike(!like)}></ion-icon> :
              <ion-icon data-test="like-post" name="heart-outline" onClick={() => setLike(!like)} ></ion-icon>
            }
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {bookmark ?
              <ion-icon data-test="save-post" name="bookmark" onClick={() => setBookmark(!bookmark)}></ion-icon> :
              <ion-icon data-test="save-post" name="bookmark-outline" onClick={() => setBookmark(!bookmark)} ></ion-icon>
            }
          </div>
        </div>

        <div class="curtidas">
          <img src={props.curtidaUrl} alt={props.curtidaAlt} />
          <div data-test="likes-number" class="texto">
            Curtido por <strong>{props.curtidaNome}</strong> e <strong>outras {props.curtidaNum} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}