export default  function ({store, redirect})  {
  if(! store.state.auth.loggedIn)
  {
    redirect('/login')
  }
}

// export default function ({ store, redirect }) {
//     console.log(store.state.auth.loggedIn)
//     // if (store.state.auth.loggedIn) {
//     //   return redirect('/')
//     // }
//   }

