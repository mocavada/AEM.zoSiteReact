module.exports = {
    // default working directory (can be changed per 'cwd' in every asset option)
    context: __dirname,
   
    // path to the clientlib root folder (output)
    clientLibRoot:
      "./../ui.apps/src/main/content/jcr_root/apps/zo/clientlibs",
   
    libs: {
      name: "clientlib-react",
      allowProxy: true,
      categories: ["clientlib-react"],
      jsProcessor: ["min:gcc"],
      serializationFormat: "xml",
      assets: {
        js: ["dist/**/*.js"],
        css: ["dist/**/*.css"]
      }
    }
   };
   