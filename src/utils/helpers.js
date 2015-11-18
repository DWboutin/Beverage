export function redirectIfNotLoggedIn(props, route) {

  // frontend only
  if(typeof window !== undefined){
    if(props.user._id === undefined){
      props.history.replaceState(null, route);
    }
  }
}