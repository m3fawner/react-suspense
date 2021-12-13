export const BIN_IDS = {
    APPLICATION: '61b783ce01558c731cd3994e',
    POSTS: '61b78df001558c731cd3a2b3',
}
const fetchBin = (binID, delay = 0) => {
    return new Promise(async (resolve, reject) => {
        try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${binID}`, {
            headers: {
                'X-Master-Key': process.env.REACT_APP_JSON_BIN_KEY
            }
        })
        const { record } = await response.json();
        setTimeout(() => {
            resolve(record);
        }, delay);
    } catch (e) {
        reject(e);
    }
    });
};

export default fetchBin;