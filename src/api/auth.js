const login = (use, pass) => {
    return new Promise((resolve, reject) => {
        fetch().then(res => {
            resolve(res);
        })
    })
    .catch(err => { reject(err) })
}

export {
    login
}
