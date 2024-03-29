// https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id/6860916

/**
 * @description Generates a GUID
 * @returns {string} GUID
 */
module.exports = generateGuid = () => {
    let S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return (S4()+S4()+'-'+S4()+'-'+S4()+'-'+S4()+'-'+S4()+S4()+S4());
}
