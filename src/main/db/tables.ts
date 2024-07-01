import db from './connect'

function init() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS category (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      create_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.exec(`
      CREATE TABLE IF NOT EXISTS contents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT NOT NULL,
        title TEXT NOT NULL,
        category_id INTEGER,
        create_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
  `)
}

init()

