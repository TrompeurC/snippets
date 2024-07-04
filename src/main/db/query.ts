import db from "./connect"

export const findAll = (sql: string, params: Record<string, any>) => {
  return db.prepare(sql).all(params)
}

export const findOne = (sql: string, params: Record<string, any>) => db.prepare(sql).get(params)

export const insert = (sql: string, params: Record<string, any>) => {
  return db.prepare(sql).run(params).lastInsertRowid
}

export const update = (sql: string, params: Record<string, any>) => {
  return db.prepare(sql).run(params).changes
}

export const del = (sql: string, params: Record<string, any> = {}) => {
  return db.prepare(sql).run(params).changes
}
