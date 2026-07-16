class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        this.keyStore.set(`${key}:${timestamp}`, value);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let temp = timestamp;
        while(temp > 0) {
            if(this.keyStore.has(`${key}:${temp}`)) {
                return this.keyStore.get(`${key}:${temp}`);
            }
            temp--;
        }
        return "";
    }
}
