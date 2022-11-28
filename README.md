# Proyecto Pruebas automatizadas

## Semana 7: Generación de Datos

### Prerequisitos: 
Las pruebas se hicieron con las siguientes versiones, asegurese de tener estas versiones antes de ejecutar las pruebas:
* Ghost version: 5.18.0
* node 14.17.0
* npm 6.14.13
* cucumber 7.2.1
* kraken-node 1.0.24

Una vez descargada la carpeta del repositorio, realizar la instalación de dependencias:
  ```
  npm install
  npm install mockaroo
  ```

Para la generación correcta de algunos scripts que se utilizaron en el proyecto, se debe ejecutar el generado de escenarios de la siguiente manera:
```
cd MISO4104_202215_Equipo_White/Semana7/Kraken/features
node generateScenarios-apriori.js
node generateScenarios-pseudo.js
```
En el Wiki de la semana 7 se explica que hace cada uno de estos scripts dinamicos y que tecnica de generación de datos aleatorios apoyan.

El paso siguiente es modificar el archivo properties.json, con las credenciales de acceso al panel de administrador de GHOST, se debe tener en cuenta que estos datos son especificos y determinados para la ejecución de las pruebas e2e de este escenario.

![image](https://user-images.githubusercontent.com/111475768/204167443-eaabf4a1-2b71-458d-9140-27034d06f196.png)

Debido a la restricción de la herramienta Kraken en Windows, se debe seleccionar solo un archivo con un escenario en la carpeta features\ y asegurar que solo un archivo tenga la extensión .feature. Todos los archivos restantes se han publicado con la extension .NA para renombrarlos cada que probemos algun escenario.
![image](https://user-images.githubusercontent.com/111475768/204167351-52cb1519-6fdc-491f-a538-782bad916d4d.png)


Por ultimo, se debe ejecutar la prueba con Kraken desde la misma ruta del archivo package.json del proyecto de la siguiente manera:

```
  ./node_modules/kraken-node/bin/kraken-node run
```
![image](https://user-images.githubusercontent.com/111475768/204167252-c50eeb68-ea68-4f09-b2ec-b5b0edd7907c.png)


Para ver el detalle de las tecnicas utilizadas y los escenarios, puede dirigirse a la wiki de la [Semana 7](https://github.com/cris10958/MISO4104_202215_Equipo_White/wiki/s7_datos)


## Semana 6: Pruebas de regresión visual

### Prerequisitos: 
Las pruebas se hicieron con las siguientes versiones, asegurese de tener estas versiones antes de ejecutar las pruebas:
* Cypress package version: 10.10.0
* Ghost version: 5.18.0
* Ghost version (regresión visual): 3.42.0 
* node version: 14.20.1
* En la version de Ghost 3.42.0 se debe activar el menu "Members" ya que este no viene activo en el setup inicial.
  ![image](https://user-images.githubusercontent.com/111475768/202902662-c7caa462-6782-4586-837d-711d9c95f471.png)


Los 10 escenarios que se plantearon para realizar la regresión visual, por lo cual fueron ejecutados en ambas versiones de Ghost son:

| Escenario                                | Funcionalidad | Herramienta  | Integrantes                           |
| ---------------------------------------- | ------------- | -------------| ---------------------                 |
| Crear página                             | Pages         | Kraken       |Laura Fonseca, Daniel Ochoa            |
| Editar página                            | Pages         | Kraken       |Laura Fonseca, Daniel Ochoa            |
| Crear post                               | Post          | Kraken       |Laura Fonseca, Daniel Ochoa            |
| Editar post                              | Post          | Kraken       |Laura Fonseca, Daniel Ochoa            |
| Reversar publicación de post             | Post          | Kraken       |Laura Fonseca, Daniel Ochoa            |
| Crear tag público                        | Tags          | Cypress      |Alexander Contreras, Alexander Benitez |
| Editar tag público                       | Tags          | Cypress      |Alexander Contreras, Alexander Benitez |
| Crear miembro                            | Members       | Cypress      |Alexander Contreras, Alexander Benitez |
| Editar miembro                           | Members       | Cypress      |Alexander Contreras, Alexander Benitez |
| Cambiar configuración modificando titulo | Settings      | Cypress      |Alexander Contreras, Alexander Benitez |

Para la ejecucion de las pruebas de los 10 escenarios de la semana 6, se han agrupado los escenarios en un solo archivo por herramienta, por lo que puede ejecutarlo de la siguiente manera:

### Instrucciones de Ejecución Cypress
Copiar la carpeta e instalar las dependencias
  ```
  npm install
  ```
  Previamente se debe tener un usuario creado en ghost, las credenciales se debe colocar en el archivo con ruta:
  ```
  * cypress/e2e/scenarios_Ghost3.42.cy.js #en el método login
  * cypress/e2e/scenarios_Ghost5.18.cy.js #en el método login
  ```
  si se desea correr la prueba en modo headless se debe lanzar el siguiente comando en el directorio donde se copio la carpeta
  ```
  cypress run --headless
  ```
  ![image](https://user-images.githubusercontent.com/111475768/202902709-68312ffa-e22c-442a-af3f-89b24117e372.png)


  Si se desea ejecutar la prueba en modo visual entonces se debe descomprimir la carpeta en un proyecto vacio de cypress reemplazando la estructura y luego ejecutar
  ```
  cypress open
  ```
  luego en el navegador que se va a abrir se debe localizar el proyecto y luego ejecutar los 2 scripts
  
  ![image](https://user-images.githubusercontent.com/111475768/202902908-d940aa35-5bdf-4498-b155-a663af03e97c.png)


### Instrucciones de Ejecución Kraken

Las pruebas con la herramienta Kraken se realizaron con las siguientes versiones, asegúrese de tener estas versiones antes de ejecutar las pruebas:
* Windows 10 Home
* node 14.17.0
* npm 6.14.13
* cucumber 7.2.1
* kraken-node 1.0.24
* Android Debug Bridge version 1.0.41 Version 33.0.3-8952118
* Ghost version: 5.18.0
* Ghost version (regresión visual): 3.42.0 

Debido a la restricción de la herramienta Kraken en Windows, se debe seleccionar solo un archivo con un escenario en la carpeta features\ y asegurar que solo un archivo tenga la extensión .feature. A continuación se lista la distribución adecuada en las versiones de Ghost bajo prueba:

- Ghost 3.42.0: Kraken\Pruebas_Krake_Ghost_v3.42\features
- Ghost 5.18.0: Kraken\Pruebas_Krake_Ghost_v5.18\features

| Orden ejecución | Archivo                                                   | Escenario                     | Versión Ghost |
| --------------- | --------------------------------------------------------- | ------------------------------| --------------|
| 1               | \Kraken\Pruebas_Krake_Ghost_v3.42\Lista_Test\F001.feature | Crear página                  | 3.42.0        |
| 2               | \Kraken\Pruebas_Krake_Ghost_v3.42\Lista_Test\F002.feature | Editar página                 | 3.42.0        |
| 3               | \Kraken\Pruebas_Krake_Ghost_v3.42\Lista_Test\F003.feature | Crear página                  | 3.42.0        |
| 4               | \Kraken\Pruebas_Krake_Ghost_v3.42\Lista_Test\F004.feature | Editar post                   | 3.42.0        |
| 5               | \Kraken\Pruebas_Krake_Ghost_v3.42\Lista_Test\F005.feature | Reversar publicación de post  | 3.42.0        |
| 6               | \Kraken\Pruebas_Krake_Ghost_v5.18\Lista_Test\F001.feature | Crear página                  | 5.18.0        |
| 7               | \Kraken\Pruebas_Krake_Ghost_v5.18\Lista_Test\F002.feature | Editar página                 | 5.18.0        |
| 8               | \Kraken\Pruebas_Krake_Ghost_v5.18\Lista_Test\F003.feature | Crear página                  | 5.18.0        |
| 9               | \Kraken\Pruebas_Krake_Ghost_v5.18\Lista_Test\F004.feature | Editar post                   | 5.18.0        |
| 10              | \Kraken\Pruebas_Krake_Ghost_v5.18\Lista_Test\F005.feature | Reversar publicación de post  | 5.18.0        |

Adicional se debe configurar los datos necesarios para la ejecución de las pruebas en el archivo properties.json modificando los valores de EMAIL Y PASSWORD según las credenciales de administrador de Ghost que se tengan. Ejemplo:

```
  {
    "USERNAME":"email_admi@correo.co",
    "PASSWORD":"contraseña",
    "title_new_page":"titulo2",
    "description":"description2",
    "new_title_page":"titulo3",
    "title_new_post":"Nuevo Post",
    "description_post":"Description Post",
    "new_title_post":"Nuevo Titulo del Post",
    "new_title_general":"Pruebas automatizadas ABP",
    "new_description_general":"Thoughts and stories."
  }
```
Para ejecutar el test es necesario ubicarse en la misma ruta del archivo package.json del proyecto y ejecutar los siguientes comandos:

```
  npm i
  ./node_modules/kraken-node/bin/kraken-node run
```

### Regresión Visual con ResembleJS
Una vez ejecutadas ambos escenarios de pruebas, mover las imagenes de cada version de Ghost a la carpeta de ResembleJS asi:
```
Las imagenes de la version 3.42 a la carpeta MISO4104_202215_Equipo_White\Semana6\resemblejs\results\screenshots V1
Las imagenes de la version 5.18 a la carpeta MISO4104_202215_Equipo_White\Semana6\resemblejs\results\screenshots V2
```
Se debe situar en el directorio de Resemble 
```
cd MISO4104_202215_Equipo_White\Semana6\resemblejs
node index.js
```
![image](https://user-images.githubusercontent.com/111475768/202903289-a298556b-e1d0-4d8f-bdc7-fd232d8d6f76.png)

Luego se verifica la salida HTML en la carpeta de salida
![image](https://user-images.githubusercontent.com/111475768/202903388-f018ef71-963c-4bf9-84f3-f24be014dabd.png)

### Regresión Visual con BackStopJS

Una vez ejecutadas ambos escenarios de pruebas, mover las imagenes de cada version de Ghost a la carpeta de backstop asi:
```
Las imagenes de la version 3.42 a la carpeta MISO4104_202215_Equipo_White\Semana6\backstopjs\v1
Las imagenes de la version 5.18 a la carpeta MISO4104_202215_Equipo_White\Semana6\backstopjs\v2
```
Adicionalmente se deben haber subida a una URL, para este caso, en el repo del team:
```
* Las imagenes de la version 3.42  a https://raw.githubusercontent.com/cris10958/MISO4104_202215_Equipo_White/main/Semana6/backstopjs/v1/
* Las imagenes de la version 5.18  a https://raw.githubusercontent.com/cris10958/MISO4104_202215_Equipo_White/main/Semana6/backstopjs/v2/
```
Ahora desde la carpeta del backstopJS se debe contruir dinamicamente el archivo backstop.json
```
node build.js
```
Una vez generado el archivo .json, se debe ejecutar la prueba:
```
backstop test
backstop aprove
```
Finalmente se debe revisar el archivo html con la salida del analisis.
![image](https://user-images.githubusercontent.com/111475768/202913911-b125e81d-8d3c-48da-9403-3202bda641b6.png)






## Semana 5: Pruebas E2E

| Escenario                                | Funcionalidad | Integrantes                       |
| ---------------------------------------- | ------------- | --------------------------------- |
| Crear página                             | Pages         | Laura Fonseca, Alexander Benitez  |
| Editar página                            | Pages         | Laura Fonseca, Alexander Benitez  |
| Reversar publicación de página               | Pages         | Laura Fonseca, Alexander Benitez  |
| Borrar página                            | Pages         | Laura Fonseca, Alexander Benitez  |
| Crear post                               | Post          | Laura Fonseca, Alexander Benitez  |
| Editar post                              | Post          | Laura Fonseca, Alexander Benitez  |
| Reversar publicación de post                 | Post          | Laura Fonseca, Alexander Benitez  |
| Borrar un post                           | Post          | Laura Fonseca, Alexander Benitez  |
| Cambiar configuración modificando titulo | Settings      | Laura Fonseca, Alexander Benitez  |
| Sign out                                 | Log           | Laura Fonseca, Alexander Benitez  |
| Crear miembro                            | Members       | Alexander Contreras, Daniel Ochoa |
| Editar miembro                           | Members       | Alexander Contreras, Daniel Ochoa |
| Borrar miembro                           | Members       | Alexander Contreras, Daniel Ochoa |
| Crear tag público                        | Tags          | Alexander Contreras, Daniel Ochoa |
| Editar tag público                       | Tags          | Alexander Contreras, Daniel Ochoa |
| Borrar tag público                       | Tags          | Alexander Contreras, Daniel Ochoa |
| Crear tag interno                        | Tags          | Alexander Contreras, Daniel Ochoa |
| Editar tag interno                       | Tags          | Alexander Contreras, Daniel Ochoa |
| Borrar tag interno                       | Tags          | Alexander Contreras, Daniel Ochoa |
| Cambiar configuración modificando tema   | Settings      | Alexander Contreras, Daniel Ochoa |

## Ejecución pruebas

- Ejecutar prueba Cypress (MISO4104_202215_Equipo_White\Semana5\Cypress\AlexanderBenitez)

  Descargar las fuentes del repositorio MISO4104_202215_Equipo_White/Semana5/Cypress/AlexanderBenitez/Ghost_e2e/.
  
  La estructura de carpetas es estandar, en la carpeta e2e se encuentran los 10 script, segun la tabla indicada anteriormente
  ![image](https://user-images.githubusercontent.com/111475768/201525025-802f66ba-b678-4571-b771-df80f7806420.png)
  
  Tener en cuenta, para cada script, se deben modificar las credenciales de la cuenta de Ghost que previamente debe tener creada:
  ![image](https://user-images.githubusercontent.com/111475768/201525149-3898b14c-efb7-4fd3-8253-452c987136cc.png)
  
  Si desea correr la prueba en modo headless se debe lanzar el siguiente comando en el directorio Ghost_e2e/
  ```
  cypress run --headless 
  ```
  Las evidencias de las pruebas quedaran almacenadas en las carpetas screenshots y videos respectivamente.
  ![image](https://user-images.githubusercontent.com/111475768/201525278-0f8a3260-42f4-456f-8dfe-e65242e5f978.png)




- Ejecutar prueba Cypress (MISO4104_202215_Equipo_White\Semana5\Cypress\AlexanderContreras)
  

  copiar la carpeta e instalar las dependencias
  ```
  npm install
  ```
  Previamente se debe tener un usuario creado en ghost, las credenciales se debe colocar en el archivo con ruta:
  ```
  cypress/e2e/ghost.cy.js #en el método login
  ```
  si se desea correr la prueba en modo headless se debe lanzar el siguiente comando en el directorio donde se copio la carpeta
  ```
  cypress run --headless
  ```
  Si se desea ejecutar la prueba en modo visual entonces se debe descomprimir la carpeta en un proyecto vacio de cypress reemplazando la estructura y luego ejecutar
  ```
  cypress open
  ```
  luego en el navegador que se va a abrir se debe localizar el proyecto y luego el script ghost.cy

- Ejecutar prueba Kraken (MISO4104_202215_Equipo_White\Semana5\Kraken\LauraFonseca)
 
 Para ejecutar las pruebas se debe clonar el proyecto y ubicarse en la carpeta Semana5\Kraken\LauraFonseca\

  Se debe contar con la aplicación ghost instalada para ejecutar las pruebas, adicional se debe configurar el objeto con las credenciales y datos necesarios para la ejecución en el archivo properties.json modificando los valores de EMAIL Y PASSWORD según las credenciales de administrador de Ghost que se tengan. Ejemplo:

  ```{
    "USERNAME":"email_admi@correo.co",
    "PASSWORD":"contraseña",
    "title_new_page":"titulo2",
    "description":"description2",
    "new_title_page":"titulo3",
    "title_new_post":"Nuevo Post",
    "description_post":"Description Post",
    "new_title_post":"Nuevo Titulo del Post",
    "new_title_general":"Pruebas automatizadas ABP",
    "new_description_general":"Thoughts and stories."
}
  ```

  Debido a la restricción de la herramienta Kraken en Windows, se debe seleccionar solo un archivo con un escenario en la carpeta Lista_Tests\ y asegurar que solo un archivo tenga la extensión .feature:

  | Orden ejecución | Archivo            | Escenario                                    |
  | --------------- | ------------------ | -------------------------------------------- |
  | 1               | F001.feature   | Como administrador de la aplicación Ghost realizo el login, la creación y publicación de una pagina  |
  | 2               | F002.feature   | Como administrador de la aplicación Ghost realizo el login, la creación y edicion de una pagina publicada |
  | 3               | F003.feature   | Como administrador de la aplicación Ghost realizo el login, la creación, publicación y eliminacion de una pagina publicada|
  | 4               | F004.feature      | Como administrador de la aplicación Ghost realizo el login, la creación, publicación y reversión una pagina publicada|
  | 5               | F005.feature      | Como administrador de la aplicación Ghost realizo el login, la creación y publicación de un post |
  | 6               | F006.feature      | Como administrador de la aplicación Ghost realizo el login, la creación, publicación y edición de un post |
  | 7               | F007.feature      | Como administrador de la aplicación Ghost realizo el login, la creación, publicación y despublicar un post   |
  | 8               | F008.feature      | Como administrador de la aplicación Ghost realizo el login, la creación, publicación y eliminación de un post   |
  | 9               | F009.feature      | Como administrador de la aplicación Ghost realizo el login, el cambio del nombre y descipción de la página |
  | 10              | F010.feature | Como administrador de la aplicación Ghost realizo el sign in, el sing out y valido la redirección al login    |

  Para ejecutar el test es necesario ubicarse en la misma ruta del archivo package.json del proyecto y ejecutar los siguientes comandos:

  ```
  npm i
  ./node_modules/kraken-node/bin/kraken-node run
  ```

- Ejecutar prueba Kraken (MISO4104_202215_Equipo_White\Semana5\Kraken\DanielOchoa)

  Para ejecutar las pruebas se debe clonar el proyecto y ubicarse en la carpeta Semana5\Kraken\DanielOchoa\

  Se debe contar con la aplicación ghost instalada para ejecutar las pruebas, adicional se debe configurar las credenciales de un usuario administrador en el archivo properties.json modificando los valores de EMAIL Y PASSWORD. Ejemplo:

  ```
  {
    "EMAIL": "correo@gmail.com",
    "PASSWORD": "Qwerty123"
  }
  ```

  Debido a la restricción de la herramienta Kraken en Windows, se debe seleccionar solo un archivo con un escenario en la carpeta features\ y asegurar que solo un archivo tenga la extensión .feature:

  | Orden ejecución | Archivo            | Escenario                                    |
  | --------------- | ------------------ | -------------------------------------------- |
  | 1               | member_1.feature   | Como usuario de ghost creo un nuevo miembro  |
  | 2               | member_2.feature   | Como usuario de ghost edito un miembro       |
  | 3               | member_3.feature   | Como usuario de ghost elimino un miembro     |
  | 4               | tag_1.feature      | Como usuario de ghost creo un tag publico    |
  | 5               | tag_2.feature      | Como usuario de ghost edito un tag publico   |
  | 6               | tag_3.feature      | Como usuario de ghost elimino un tag publico |
  | 7               | tag_4.feature      | Como usuario de ghost creo un tag interno    |
  | 8               | tag_5.feature      | Como usuario de ghost edito un tag interno   |
  | 9               | tag_6.feature      | Como usuario de ghost elimino un tag interno |
  | 10              | settings_1.feature | Como usuario de ghost configuro tema dark    |

  Para ejecutar el test es necesario ubicarse en la misma ruta del archivo package.json del proyecto y ejecutar los siguientes comandos:

  ```
  npm i
  ./node_modules/kraken-node/bin/kraken-node run
  ```
