import crypto from 'crypto'


export const gravatarPath = (string) => {
  if (string !== undefined) {
    console.log(string)
    //暗号学的ハッシュ関数の一つであるmd5を。
    const md5 = crypto.createHash('md5');
    const lowerCaseString = string.trim().toLowerCase();
    console.log(lowerCaseString)
    const digest = md5.update(lowerCaseString, "binary").digest("hex")
    console.log(digest)
    return `http://www.gravatar.com/avatar/${digest}/?d=robohash`;
  } else {
    return
  }
}