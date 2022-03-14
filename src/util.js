export const getIsAuth = () => {
    const isAuth = localStorage.getItem('isAuth')
    return isAuth
}