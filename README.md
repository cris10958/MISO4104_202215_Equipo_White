# Proyecto Pruebas automatizadas

## Semana 5: Pruebas E2E

| Escenario                                | Funcionalidad | Integrantes                       |
| ---------------------------------------- | ------------- | --------------------------------- |
| Crear página                             | Pages         | Laura Fonseca, Alexander Benitez  |
| Editar página                            | Pages         | Laura Fonseca, Alexander Benitez  |
| Acceder a una página creada              | Pages         | Laura Fonseca, Alexander Benitez  |
| Borrar página                            | Pages         | Laura Fonseca, Alexander Benitez  |
| Crear post                               | Post          | Laura Fonseca, Alexander Benitez  |
| Editar post                              | Post          | Laura Fonseca, Alexander Benitez  |
| Acceder a un post creado                 | Post          | Laura Fonseca, Alexander Benitez  |
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

- Ejecutar prueba Cypress (MISO4104_202215_Equipo_White\Semana5\Cypress\AlexanderContreras)

- Ejecutar prueba Kraken (MISO4104_202215_Equipo_White\Semana5\Kraken\LauraFonseca)

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
