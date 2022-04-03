# proyectoparcel
[Crear webapp con Parcel](https://parceljs.org/getting-started/webapp/)  
En una carpeta, inicia el proyecto Parcel instalándolo:
`npm install --save-dev parcel`  
Crea la siguiente estructura de carpetas y ficheros:
```
/src
    /assets
        /scripts
            main.ts
        /styles
            style.scss
    /views
        header.html
        footer.html
    index.html
```  
Añade un fichero `.gitignore` para: sass,node,windows,vscode  

## Dependencias:  
+ "@parcel/transformer-sass": "^2.3.2"
+ "autoprefixer": "^10.4.4",
+ "bootstrap": "^5.1.3",
+ "npm-run-all": "^4.1.5",
+ "parcel": "^2.3.2",
+ "postcss-preset-env": "^7.4.3",
+ "posthtml-include": "^1.7.2",
+ "rimraf": "^3.0.2",
+ "stylelint": "^14.6.1",
+ "stylelint-config-standard": "^25.0.0",
+ "stylelint-config-standard-scss": "^3.0.0"  
+ "@fortawesome/fontawesome-free": "^6.1.0"