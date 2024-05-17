export const code = () => {
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';

  let done: boolean = false;

  let str: string = '';

  while (!done) {
      str +=  alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      done = str.length > 6;
  }
  return str;
}
