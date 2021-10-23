# ZENBIT TEST APP

## Frontend features

- bootstrapped with CRA
- live form-inputs validation
- adaptive design
- GoogleEmbeddedMapAPI used
- Styled Components
- custom useLocalStorage hook to prevent data loss on page refresh

Visit [site](https://kurkov.online)

---
## Backend features

ORM used is [Sequelize](https://sequelize.org/)

You should have PostgresQL (or other) DATABASE server available. Server is configurated in `backend/.env` file. More details can be found [here](https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database)


REST API works at https://zen.kurkov.online

endpoint available:
```
GET /messages         // get array of all messages
POST /messages        // post one message 
```

Basic validation is used - when posting message the body shoul correspond to Interface `{ name: string; email: string; message: string }`