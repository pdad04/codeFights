function validTime(time) {     
    const regEx = /^[0-1][0-9](?=:)|^[2][0-3](?=:)|0.{1,2}$|1.{1,2}$|2.{1,2}$|3.{1,2}$|4.{1,2}$|5.{1,2}$/g;

    const match = time.match(regEx);

    return match && match.length === 2 ? true : false;     
}