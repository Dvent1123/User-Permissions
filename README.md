# User-Permissions
A middlware use case for user permissions. The project was basically to practice making middleware for routes and add a permissions system to a project. The project itself will dictate whether or not a user has permission to have 'project' visibile or not based on their permissions

## Usage
There are 3 simple routes that were used for this project: the root, /dashboard, and /admin. The root ('/') has no permissions middleware and everyone can see it. The dashboard route has authorized user middleware which checks whether a user is authorized to see the route or not. The admin route has two middlewares, one to check whether the user is authorized and one to check if the user has an admin role attached to it. The permissions middleware can be found in the permissions folder.

Note: All the data is not attached to a database and is hard-coded, this is simply an example of how middleware with permissions works. 
