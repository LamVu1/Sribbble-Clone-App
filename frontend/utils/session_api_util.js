export const login = user => {
  return(
    $.ajax(
      {
        method: 'POST',
        url: '/api/session',
        data: { user }
      }
    )
  )
};
  
export const signup = user => {
  return(
    $.ajax(
      {
        method: 'POST',
        url: '/api/user',
        data: { user }
      }
    )
  )
};


export const update = message => {
  return(
    $.ajax(
      {
        method: 'PATCH',
        url: '/api/user',
        data: { message }
      }
    )
  )
};

export const logout = () => {
  return(
    $.ajax(
      {
        method: 'DELETE',
        url: '/api/session'
      }
    )
  )
};
  