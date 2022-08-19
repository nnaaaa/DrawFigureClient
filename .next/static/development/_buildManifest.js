self.__BUILD_MANIFEST = {
  __rewrites: {
    beforeFiles: [],
    afterFiles: [{ source: "\u002F" }],
    fallback: [],
  },
  "/_error": ["static\u002Fchunks\u002Fpages\u002F_error.js"],
  "/draw/[id]": ["static\u002Fchunks\u002Fpages\u002Fdraw\u002F[id].js"],
  "/edit/[id]": ["static\u002Fchunks\u002Fpages\u002Fedit\u002F[id].js"],
  "/list": ["static\u002Fchunks\u002Fpages\u002Flist.js"],
  sortedPages: [
    "\u002F_app",
    "\u002F_error",
    "\u002Fdraw\u002F[id]",
    "\u002Fedit\u002F[id]",
    "\u002Flist",
  ],
}
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
