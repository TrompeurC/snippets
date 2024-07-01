import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron';
import path from 'node:path'
import fs from 'node:fs'

const file = path.resolve(app.getPath('appData'), 'snippets')

if (!fs.existsSync(file)) {
  fs.mkdirSync(file, { recursive: true })
}

const db: BetterSqlite3.Database = new Database(path.resolve(file, 'snippets.db'));

db.pragma('journal_mode = WAL');


export default db
