import { Request, Response } from 'express';
import knex from '../database/connection';

export default class StoresController {
  async index(request: Request, response: Response) {
    const stores = await knex('stores');
    return response.json(stores);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const store = await knex('stores').where('id', id).first();

    if (!store) {
      return response
        .status(400)
        .json({ message: `Store whit id ${id} not found` });
    }

    return response.json({ store });
  }

  async create(request: Request, response: Response) {}

  async update(request: Request, response: Response) {}

  async delete(request: Request, response: Response) {}
}
