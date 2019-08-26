interface SQLSetting {
    [ prop: string ]: any
}

const projectName = 'wired-portfolio';

const setting: SQLSetting = {
    'dev': {
        'username': 'root',
        'password': '',
        'database': `${ {projectName} }_dev`,
        'host': '127.0.0.1',
        'dialect': 'mysql'
    },
    'test': {
        'username': 'root',
        'password': '',
        'database': `${ {projectName} }_test`,
        'host': '127.0.0.1',
        'dialect': 'mysql'
    },
    'prod': {
        'username': 'root',
        'password': 'admin',
        'database': `${ {projectName} }`,
        'host': '127.0.0.1',
        'dialect': 'mysql'
    }
};

const sequelizeConfig = setting[ <string>process.env.NODE_ENV || 'dev' ];
export = sequelizeConfig;
