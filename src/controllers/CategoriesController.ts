import { Request, Response } from 'express';
import knex from '../database/connection';

export default class CategoriesController {
  async index(request: Request, response: Response) {
    const categories = await knex('categories');
    return response.json(categories);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const category = await knex('categories').where('id', id).first();

    if (!category) {
      return response
        .status(400)
        .json({ message: `Categories whit id ${id} not found` });
    }

    return response.json({ category });
  }

  async create(request: Request, response: Response) {}

  async update(request: Request, response: Response) {}

  async delete(request: Request, response: Response) {}
}
