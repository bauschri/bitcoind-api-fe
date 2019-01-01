## React 4spec Example Application

Functional application for showing & testing basic concepts for working with ReactJS.

### Running app locally 

```bash
yarn install      # install packages
yarn start        # execute start-job from package.json
```

### Development

```
Auth0:
users: 
demo1@xamatech.com
demo2@xamatech.com

password (both):
Demo123456
```

### Building production application to deploy

```bash
yarn build
```

## Folder Structure

```
app/
  .env                          # environment variables, used for react-scripts configurations
  README.md
  node_modules/
  package.json 

  index.js                      # main startup file (connecting store & components)
  stores.js                     # redux data-store, loads redux-reducers and initial app state
  routes.js                     # 

  public/                       # static application files
    index.html
    favicon.ico

  src/
    config/                     # configuration files
    components/                 # basic reusable components (const, only using props)
    containers/                 # state-containers (include redux-actions from *features*)
    features/
      Feature1/                 # actions, constants, reducer, styles for Feature#1
    styles/                     # application style-sheets with SCSS
```

## Todo

- Authentication 
- React-Router integration
- React-Native Example? 

## Features // Resources // Libraries

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Common & well-tested by facebook.
- Folder Structure follows *Wooden House - Group by feature* principles (scalable for bigger applications)
- Application design with Bootstrap4 & SCSS (Bootstrap4)[https://getbootstrap.com/docs]
- Iconic Icon-Set included (Iconic)[https://useiconic.com/open/]
- ReactJS with modern ES6 features [ECMAScript6](http://es6-features.org/)
- React-Redux for managing app state (modular, cross-device support), (Redux)[https://redux.js.org]
- Prettier for JS-Code format (https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08)




- [Bootstrap with React](https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121)
- [React styled Components](https://www.styled-components.com/)
https://github.com/styled-components/babel-plugin-styled-components
https://redux-form.com
