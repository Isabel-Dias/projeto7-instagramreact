import React from "react";

export default function Post(props) {
  const[nameHeart, setNameHeart] = React.useState("heart-outline");
  const[bookmark, setBookmark] = React.useState(false);
  const[numLikes, setNumLikes] = React.useState(props.curtidaNum);
  const[heartColor, setHeartColor] = React.useState();

  function likePost(){
    if (nameHeart === "heart-outline") {
      setNameHeart("heart")
      setNumLikes(props.curtidaNum + 1)
      setHeartColor("red")
    } else {
      setNameHeart("heart-outline")
      setNumLikes(props.curtidaNum)
      setHeartColor()
    }
  }

  return (
    <div data-test="post" key={props.index} class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.postUrl} alt={props.postAlt} />{props.postNome}</div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image" onDoubleClick={likePost} src={props.conteudoUrl} alt={props.conteudoAlt} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            
            <ion-icon data-test="like-post" name={nameHeart} class={heartColor} onClick={likePost}></ion-icon>
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
            Curtido por <strong>{props.curtidaNome}</strong> e <strong>outras {numLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}