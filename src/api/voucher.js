const BASE_URL = "https://facebook.github.io/react-native/movies.json";

const getVouchers = () => {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL, {  }).then((res) => {
            resolve(res);
        }).catch((err) => { reject(err) });
    })
}
export {
    getVouchers
}