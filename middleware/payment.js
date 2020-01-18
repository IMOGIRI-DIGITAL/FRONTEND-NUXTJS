export default  function ({ store, redirect, query, route })  {
    var { id, type } =query

    var types = ['educational','custom','byplaces']

    if ((!id && !type) || !types.includes(type) )
    {
        return redirect('/')
    }
  }