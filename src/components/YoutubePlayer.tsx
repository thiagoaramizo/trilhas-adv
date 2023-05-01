interface YoutubePlayerProps {
  link: string
}

export function YoutubePlayer( {link}:YoutubePlayerProps ) {

  const getYoutubeVideoId = (url: string) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
  
  return (
      <div className="w-fit rounded-md overflow-hidden">
      <iframe 
        id="player" 
        width="640" height="360"
        src={"http://www.youtube.com/embed/"+getYoutubeVideoId(link)+"?enablejsapi=1&origin=https://trilhas.adv.br&rel=0"}
        className="w-full aspect-video"
      ></iframe>
      </div>
  )
}