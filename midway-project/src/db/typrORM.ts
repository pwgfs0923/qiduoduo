const dbConnection = await createConnection({
  type: "sqlite",
  database: ":memory:",
  dropSchema: true,
  entities: [UserEntity],
  synchronize: true,
  logging: false,
});