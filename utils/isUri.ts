export const check = (url: string) => {
    if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(url)) return false;

      // check for hex escapes that aren't complete
      if (/%[^0-9a-f]/i.test(url)) return false;
      if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(url)) return false;

      try {
        new URL(url)
        return url
      } catch(err) {
        return false
      }
  }
