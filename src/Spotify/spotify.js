 export const authEndpoint = "https://accounts.spotify.com/authorize";

 const redirectUri = "https://minspotifyclone.netlify.app/";

 const clientId = "8accc0d2f36945e0bea835b6387aced5";

 const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const getTokenFromResponse = ()=>{
      return window.location.hash.
      substring(1)
      .split('&').
      reduce((initial,item)=>{
        let parts = item.split('=');
        initial[parts[0]]= decodeURIComponent(parts[1]);
        return initial;
      },{});
  }

 export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;