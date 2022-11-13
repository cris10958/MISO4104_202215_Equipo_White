# Proyecto Pruebas automatizadas

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
