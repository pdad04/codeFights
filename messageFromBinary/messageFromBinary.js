function messageFromBinaryCode(code) {
    return code.match(/\d{1,8}/g).map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
}