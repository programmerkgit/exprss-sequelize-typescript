import { Model, Sequelize, SequelizeOptions } from 'sequelize-typescript';
import User from './user';
import Session from './session';
import config = require('../sequelize-config');

class Mock extends Model<Mock> {

}

const path = require('path');
export const sequelize = new Sequelize(<SequelizeOptions>{
    ...config,
    modelPaths: [ path.join(__dirname, './*.model.ts.ts') ]
});
sequelize.addModels([ User, Session ]);

export { User, Session };
