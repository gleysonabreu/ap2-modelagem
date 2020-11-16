import { Connection, createConnection } from "typeorm";

const connect = async (name = 'default'): Promise<Connection> => {
  return createConnection(name);
}

export default connect;