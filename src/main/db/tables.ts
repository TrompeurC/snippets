import db from './connect'
import { Random } from 'mockjs'

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

  // for (let i = 0; i < 10; i++) {
  //   db.prepare('INSERT INTO category (name) VALUES (?)').run(`category ${Random.title(5, 20)}`)
  //   for (let j = 1; j < 30; j++) {
  //     db.prepare('INSERT INTO contents (content, title, category_id) VALUES (?, ?, ?)').run(Random.cparagraph(5, 20), Random.title(5, 20), i)
  //   }
  // }

}

init()

