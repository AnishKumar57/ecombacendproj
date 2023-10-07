**How to create project. steps**
  1. Create an app and setup server using express framework
    
  
  2. Create Model in your nodejs app using Sequelize
  3. Create DB and store data inside using sequelize
  4. Create MVC based folder structure.
  * Dependencies installed:
    1. express
    2. dotenv
    3. sequelize && mysql2
    4. sequelize cli
    5. npm install --save-dev sequelize-cli
    
    6. To create an empty project you will need to execute init command
        
        *npx sequelize-cli init*
        
        This will create following folders

        - config, contains config file, which tells CLI how to connect with database
        - models, contains all models for your project
        - migrations, contains all migration files
        - seeders, contains all seed files
        **6.1.  Configuration**
            Before continuing further we will need to tell the CLI how to connect to the database. To do that let's open default config file config/config.json. It looks something like this:
             {
                "development": {
                    "username": "root",
                    "password": null,
                    "database": "database_development",
                    "host": "127.0.0.1",
                    "dialect": "mysql"
                },
                "test": {
                    "username": "root",
                    "password": null,
                    "database": "database_test",
                    "host": "127.0.0.1",
                    "dialect": "mysql"
                },
                "production": {
                    "username": "root",
                    "password": null,
                    "database": "database_production",
                    "host": "127.0.0.1",
                    "dialect": "mysql"
                }
            }

            Note that the Sequelize CLI assumes mysql by default. If you're using another dialect, you need to change the content of the "dialect" option.
            Now edit this file and set correct database credentials and dialect. The keys of the objects (e.g. "development") are used on model/index.js for matching process.env.NODE_ENV (When undefined, "development" is a default value).
            Sequelize will use the default connection port for each dialect (for example, for postgres, it is port 5432). If you need to specify a different port, use the "port" field (it is not present by default in config/config.js but you can simply add it).

        **Creating the first Model (and Migration)**
            Once you have properly configured CLI config file you are ready to create your first migration. It's as simple as executing a simple command.

            We will use model:generate command. This command requires two options:

            name: the name of the model;
            attributes: the list of model attributes.
            Let's create a model named User.
            
        *npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string*

        **Running Migrations**
            Until this step, we haven't inserted anything into the database. We have just created the required model and migration files for our first model, User. Now to actually create that table in the database you need to run db:migrate command.

        *npx sequelize-cli db:migrate*

            This command will execute these steps:

            Will ensure a table called SequelizeMeta in database. This table is used to record which migrations have run on the current database
            Start looking for any migration files which haven't run yet. This is possible by checking SequelizeMeta table. In this case it will run XXXXXXXXXXXXXX-create-user.js migration, which we created in last step.
            Creates a table called Users with all columns as specified in its migration file.



