import { Column, DataType, Model, Scopes, Table } from 'sequelize-typescript';

type UserRole =
    0 /* admin user */
    | 1
    | 2
    | 3
    | 9 /* normal user */


const bcrypt = require('bcrypt');

@Scopes(() => {
    return {};
})
@Table({
    timestamps: true,
    tableName: 'Users'
})
export default class User extends Model<User> {
    @Column({
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        type: DataType.UUIDV4
    })
    id: string;

    @Column({type: DataType.STRING})
    email?: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 9
    })
    role: UserRole;

    @Column({
        type: DataType.STRING,
    })
    get password(): string {
        return this.getDataValue('password');
    }

    set password(value: string) {
        const salt = bcrypt.genSaltSync(10);
        const encryptedPass = bcrypt.hashSync(value, salt);
        this.setDataValue('password', encryptedPass);
    }

    isAdmin() {
        return this.role === 0;
    }


    comparePassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }


    /* Associations */


}
