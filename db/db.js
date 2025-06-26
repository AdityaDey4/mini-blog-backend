import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('db.json');
const db = new Low(adapter, { posts: [] });

await db.read();
db.data ||= { posts: [] };
await db.write();

export default db;