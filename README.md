# proyectoparcel

## Instalar Parcel
[Crear webapp con Parcel](https://parceljs.org/getting-started/webapp/)  
En una carpeta, inicia el proyecto Parcel instalándolo:  
`npm init`  
`npm install --save-dev parcel`  o `npm i -D parcel`  
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
`npm install -D <paquete>`

+ **"@parcel/transformer-sass"**: "^2.3.2"  
Lo añade Parcel al añadir un enlace al fichero .scss o .sass.  
[@parcel/transformer-sass](https://www.npmjs.com/package/@parcel/transformer-sass)  
+ "**autoprefixer**": "^10.4.4"  
[autoprefixer](https://www.npmjs.com/package/autoprefixer)  
Complemento PostCSS para analizar CSS y agregar prefijos de proveedores a las reglas de CSS utilizando valores de  [Can I Use](https://caniuse.com/).
+ "**bootstrap**": "^5.1.3"  
[bootstrap](https://www.npmjs.com/package/bootstrap)  
+ "**npm-run-all**": "^4.1.5"  
[npm-run-all](https://www.npmjs.com/package/npm-run-all)  
Herramienta CLI para ejecutar múltiples scripts npm en paralelo o secuencial.
+ "**parcel**": "^2.3.2"  
[parcel](https://www.npmjs.com/package/parcel)   
Herramienta de compilación de configuración cero para crear aplicaciones web.
+ "**postcss-preset-env**": "^7.4.3"  
[postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env)  
Permite convertir CSS moderno en algo que la mayoría de los navegadores puedan entender, determinando los polyfills que necesita en función de los targets.  
+ "**posthtml-include**": "^1.7.2"  
[posthtml-include](https://www.npmjs.com/package/posthtml-include)  
Herramienta para añadir bloques de HTML.
+ "**rimraf**": "^3.0.2"  
[rimraf](https://www.npmjs.com/package/rimraf)  
Herramienta para eliminar de forma rápida. Similar a `rm -rf` en Linux.
+ "**stylelint**": "^14.6.1"  
+ "**stylelint-config-standard**": "^25.0.0"  
+ "**stylelint-config-standard-scss**": "^3.0.0"   
[stylelint](https://stylelint.io/user-guide/get-started/)  
Para evitar errores y hacer cumplir las reglas fijadas en los estilos.
+ "**@fortawesome/fontawesome-free**": "^6.1.0"  
[@fortawesome/fontawesome-free](https://www.npmjs.com/package/@fortawesome/fontawesome-free)  
Biblioteca de iconos.  
## Fichero package.json
```
{
  "name": "proyectoparcel",
  "version": "1.0.0",
  "source": "src/index.html",
  "scripts": {
    "parcel:serve": "parcel src/index.html --target web -p 8123 --open",
    "parcel:build": "parcel build src/index.html --target web --no-source-maps --no-cache",
    "start": "parcel",
    "clean": "rimraf dist .cache .cache-loader .parcel-cache",
    "dev": "npm-run-all clean parcel:serve",
    "build": "npm-run-all clean parcel:build"
  },
  "targets": {
    "web": {
      "context": "browser",
      "publicUrl": "./",
      "engines": {
        "browsers": "last 2 versions, > 0.5%, not dead"
      }
    }
  },
  "devDependencies": {
    "@parcel/transformer-sass": "^2.3.2",
    "autoprefixer": "^10.4.4",
    "bootstrap": "^5.1.3",
    "npm-run-all": "^4.1.5",
    "parcel": "^2.3.2",
    "postcss-preset-env": "^7.4.3",
    "posthtml-include": "^1.7.2",
    "rimraf": "^3.0.2",
    "stylelint": "^14.6.1",
    "stylelint-config-standard": "^25.0.0",
    "stylelint-config-standard-scss": "^3.0.0"
  },
  "dependencies": {
    "@fortawesome/fontawesome-free": "^6.1.0"
  }
}
```