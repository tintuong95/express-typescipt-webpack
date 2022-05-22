/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/ControllerTodo.ts":
/*!*******************************************!*\
  !*** ./src/controllers/ControllerTodo.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst ServicerTodo_1 = __importDefault(__webpack_require__(/*! ../services/ServicerTodo */ \"./src/services/ServicerTodo.ts\"));\r\nclass ControllerTodo {\r\n    constructor() {\r\n        this.index = (req, res) => {\r\n            const service = new ServicerTodo_1.default(req, res);\r\n            service.index();\r\n        };\r\n        this.create = (req, res) => {\r\n            const service = new ServicerTodo_1.default(req, res);\r\n            service.create();\r\n        };\r\n        this.show = (req, res) => {\r\n            const service = new ServicerTodo_1.default(req, res);\r\n            service.show();\r\n        };\r\n        this.update = (req, res) => {\r\n            const service = new ServicerTodo_1.default(req, res);\r\n            service.update();\r\n        };\r\n        this.delete = (req, res) => {\r\n            const service = new ServicerTodo_1.default(req, res);\r\n            service.delete();\r\n        };\r\n    }\r\n}\r\nexports[\"default\"] = new ControllerTodo();\r\n\n\n//# sourceURL=webpack://test2/./src/controllers/ControllerTodo.ts?");

/***/ }),

/***/ "./src/controllers/ControllerUser.ts":
/*!*******************************************!*\
  !*** ./src/controllers/ControllerUser.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst ServiceUser_1 = __importDefault(__webpack_require__(/*! ../services/ServiceUser */ \"./src/services/ServiceUser.ts\"));\r\nclass ControllerUser {\r\n    constructor() {\r\n        this.signup = (req, res) => {\r\n            const service = new ServiceUser_1.default(req, res);\r\n            service.signup();\r\n        };\r\n        this.login = (req, res) => {\r\n            const service = new ServiceUser_1.default(req, res);\r\n            service.login();\r\n        };\r\n        this.update = (req, res) => {\r\n            const service = new ServiceUser_1.default(req, res);\r\n            service.update();\r\n        };\r\n        this.delete = (req, res) => {\r\n            const service = new ServiceUser_1.default(req, res);\r\n            service.delete();\r\n        };\r\n    }\r\n}\r\nexports[\"default\"] = new ControllerUser();\r\n\n\n//# sourceURL=webpack://test2/./src/controllers/ControllerUser.ts?");

/***/ }),

/***/ "./src/db/associations.ts":
/*!********************************!*\
  !*** ./src/db/associations.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst ModelTodo_1 = __importDefault(__webpack_require__(/*! ./models/ModelTodo */ \"./src/db/models/ModelTodo.ts\"));\r\nconst ModelUser_1 = __importDefault(__webpack_require__(/*! ./models/ModelUser */ \"./src/db/models/ModelUser.ts\"));\r\nModelTodo_1.default.belongsTo(ModelUser_1.default, { foreignKey: \"iduser\", as: \"from\" });\r\nModelUser_1.default.hasMany(ModelTodo_1.default, {\r\n    foreignKey: \"iduser\",\r\n    as: \"from\",\r\n});\r\n\n\n//# sourceURL=webpack://test2/./src/db/associations.ts?");

/***/ }),

/***/ "./src/db/config.ts":
/*!**************************!*\
  !*** ./src/db/config.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.sequelize = void 0;\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv_1.default.config();\r\nconst database = process.env.DB_NAME;\r\nconst username = process.env.DB_USERNAME;\r\nconst password = process.env.DB_PASSWORD;\r\nconst host = process.env.DB_HOST;\r\nexports.sequelize = new sequelize_1.Sequelize(database || \"database\", username || \"username\", password || \"\", {\r\n    host: host || \"localhost\",\r\n    dialect: \"mysql\" /* one of  | 'mariadb' | 'postgres' | 'mssql' */,\r\n});\r\n\n\n//# sourceURL=webpack://test2/./src/db/config.ts?");

/***/ }),

/***/ "./src/db/models/ModelTodo.ts":
/*!************************************!*\
  !*** ./src/db/models/ModelTodo.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nconst config_1 = __webpack_require__(/*! ./../config */ \"./src/db/config.ts\");\r\nclass Todo extends sequelize_1.Model {\r\n}\r\nTodo.init({\r\n    id: {\r\n        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,\r\n        primaryKey: true,\r\n        autoIncrement: true,\r\n    },\r\n    name: {\r\n        type: sequelize_1.DataTypes.STRING,\r\n        allowNull: false,\r\n    },\r\n    description: {\r\n        type: sequelize_1.DataTypes.TEXT,\r\n        allowNull: false,\r\n    },\r\n    image: {\r\n        type: sequelize_1.DataTypes.STRING,\r\n        allowNull: false,\r\n    }\r\n}, { sequelize: config_1.sequelize, tableName: \"Todos\" });\r\nexports[\"default\"] = Todo;\r\n\n\n//# sourceURL=webpack://test2/./src/db/models/ModelTodo.ts?");

/***/ }),

/***/ "./src/db/models/ModelUser.ts":
/*!************************************!*\
  !*** ./src/db/models/ModelUser.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nconst config_1 = __webpack_require__(/*! ./../config */ \"./src/db/config.ts\");\r\nclass User extends sequelize_1.Model {\r\n}\r\nUser.init({\r\n    id: {\r\n        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,\r\n        autoIncrement: true,\r\n        primaryKey: true,\r\n    },\r\n    username: {\r\n        type: sequelize_1.DataTypes.STRING,\r\n        allowNull: false,\r\n    },\r\n    password: {\r\n        type: sequelize_1.DataTypes.STRING,\r\n        allowNull: false,\r\n    },\r\n}, { sequelize: config_1.sequelize, tableName: \"Users\" });\r\nexports[\"default\"] = User;\r\n\n\n//# sourceURL=webpack://test2/./src/db/models/ModelUser.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nconst compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nconst morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\r\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\n__webpack_require__(/*! ./db/associations */ \"./src/db/associations.ts\");\r\nconst index_1 = __importDefault(__webpack_require__(/*! ./routers/index */ \"./src/routers/index.ts\"));\r\nconst config_1 = __webpack_require__(/*! ./db/config */ \"./src/db/config.ts\");\r\nclass App {\r\n    constructor() {\r\n        this.routes = () => {\r\n            this.app.use(\"/api\", index_1.default);\r\n        };\r\n        this.plusgin = () => {\r\n            this.app.use(express_1.default.json());\r\n            this.app.use(express_1.default.static(path_1.default.join(__dirname, \"../public\")));\r\n            this.app.use((0, helmet_1.default)());\r\n            this.app.use((0, cors_1.default)());\r\n            this.app.use((0, compression_1.default)());\r\n            this.app.use((0, morgan_1.default)(\"dev\"));\r\n            dotenv_1.default.config();\r\n        };\r\n        this.connectDB = () => {\r\n            config_1.sequelize.sync({ alter: true });\r\n        };\r\n        this.app = (0, express_1.default)();\r\n        this.connectDB();\r\n        this.plusgin();\r\n        this.routes();\r\n    }\r\n}\r\nnew App().app.listen(process.env.PORT || 4000, () => __awaiter(void 0, void 0, void 0, function* () {\r\n    console.log(\"Success!\", process.env.PORT || 4000);\r\n}));\r\n\n\n//# sourceURL=webpack://test2/./src/index.ts?");

/***/ }),

/***/ "./src/routers/RouteTodo.ts":
/*!**********************************!*\
  !*** ./src/routers/RouteTodo.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst ControllerTodo_1 = __importDefault(__webpack_require__(/*! ../controllers/ControllerTodo */ \"./src/controllers/ControllerTodo.ts\"));\r\nclass RouteTodo {\r\n    constructor() {\r\n        this.routes = () => {\r\n            this.router.get(\"/\", ControllerTodo_1.default.index);\r\n            this.router.post(\"/\", ControllerTodo_1.default.create);\r\n            this.router.get(\"/:id\", ControllerTodo_1.default.show);\r\n            this.router.put(\"/:id\", ControllerTodo_1.default.update);\r\n            this.router.delete(\"/:id\", ControllerTodo_1.default.delete);\r\n        };\r\n        this.router = (0, express_1.Router)();\r\n        this.routes();\r\n    }\r\n}\r\nexports[\"default\"] = new RouteTodo().router;\r\n\n\n//# sourceURL=webpack://test2/./src/routers/RouteTodo.ts?");

/***/ }),

/***/ "./src/routers/RouteUser.ts":
/*!**********************************!*\
  !*** ./src/routers/RouteUser.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst ControllerUser_1 = __importDefault(__webpack_require__(/*! ../controllers/ControllerUser */ \"./src/controllers/ControllerUser.ts\"));\r\nclass RouteUser {\r\n    constructor() {\r\n        this.routes = () => {\r\n            this.router.post(\"/login\", ControllerUser_1.default.login);\r\n            this.router.post(\"/signup\", ControllerUser_1.default.signup);\r\n            this.router.delete(\"/:id\", ControllerUser_1.default.delete);\r\n            this.router.put(\"/:id\", ControllerUser_1.default.update);\r\n        };\r\n        this.router = (0, express_1.Router)();\r\n        this.routes();\r\n    }\r\n}\r\nexports[\"default\"] = new RouteUser().router;\r\n\n\n//# sourceURL=webpack://test2/./src/routers/RouteUser.ts?");

/***/ }),

/***/ "./src/routers/index.ts":
/*!******************************!*\
  !*** ./src/routers/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst RouteTodo_1 = __importDefault(__webpack_require__(/*! ./RouteTodo */ \"./src/routers/RouteTodo.ts\"));\r\nconst RouteUser_1 = __importDefault(__webpack_require__(/*! ./RouteUser */ \"./src/routers/RouteUser.ts\"));\r\nclass RouteIndex {\r\n    constructor() {\r\n        this.routes = () => {\r\n            this.router.use(\"/user\", RouteUser_1.default);\r\n            this.router.use(\"/todo\", RouteTodo_1.default);\r\n        };\r\n        this.router = (0, express_1.Router)();\r\n        this.routes();\r\n    }\r\n}\r\nexports[\"default\"] = new RouteIndex().router;\r\n\n\n//# sourceURL=webpack://test2/./src/routers/index.ts?");

/***/ }),

/***/ "./src/services/ServiceUser.ts":
/*!*************************************!*\
  !*** ./src/services/ServiceUser.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst ModelUser_1 = __importDefault(__webpack_require__(/*! ../db/models/ModelUser */ \"./src/db/models/ModelUser.ts\"));\r\nclass ServiceUser {\r\n    constructor(request, response) {\r\n        this.signup = () => __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const response = yield ModelUser_1.default.create(Object.assign({}, this.req.body));\r\n                return this.res.json({\r\n                    data: response,\r\n                    massage: \"Success!\",\r\n                });\r\n            }\r\n            catch (e) {\r\n                return this.res.json({\r\n                    massage: e,\r\n                });\r\n            }\r\n        });\r\n        this.login = () => __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const { username, password } = this.req.body;\r\n                const response = yield ModelUser_1.default.findOne({\r\n                    where: { username },\r\n                });\r\n                if (response !== null) {\r\n                    return this.res.json({\r\n                        massage: \"Success!\",\r\n                    });\r\n                }\r\n                return this.res.json({ massage: \"Fail!\" });\r\n            }\r\n            catch (e) {\r\n                return this.res.json({ massage: e });\r\n            }\r\n        });\r\n        this.update = () => __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const { id } = this.req.params;\r\n                const { username, password } = this.req.body;\r\n                const response = yield ModelUser_1.default.findOne({\r\n                    where: { id },\r\n                });\r\n                if (response !== null) {\r\n                    response.update({ username, password });\r\n                    response.save();\r\n                    return this.res.json({\r\n                        massage: \"Success!\",\r\n                    });\r\n                }\r\n                return this.res.status(404).json({ massage: \"Not Found!\" });\r\n            }\r\n            catch (e) {\r\n                return this.res.json({\r\n                    massage: e,\r\n                });\r\n            }\r\n        });\r\n        this.delete = () => __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const { id } = this.req.params;\r\n                const response = yield ModelUser_1.default.findOne({\r\n                    where: { id },\r\n                });\r\n                if (response !== null) {\r\n                    response.destroy();\r\n                    return this.res.json({\r\n                        massage: \"Success!\",\r\n                    });\r\n                }\r\n                return this.res.json({\r\n                    massage: \"Error!\",\r\n                });\r\n            }\r\n            catch (e) {\r\n                return this.res.status(404).json({\r\n                    massage: \"Not found\",\r\n                });\r\n            }\r\n        });\r\n        this.req = request;\r\n        this.res = response;\r\n    }\r\n}\r\nexports[\"default\"] = ServiceUser;\r\n\n\n//# sourceURL=webpack://test2/./src/services/ServiceUser.ts?");

/***/ }),

/***/ "./src/services/ServicerTodo.ts":
/*!**************************************!*\
  !*** ./src/services/ServicerTodo.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst ModelTodo_1 = __importDefault(__webpack_require__(/*! ../db/models/ModelTodo */ \"./src/db/models/ModelTodo.ts\"));\r\nconst ModelUser_1 = __importDefault(__webpack_require__(/*! ../db/models/ModelUser */ \"./src/db/models/ModelUser.ts\"));\r\nclass ServiceTodo {\r\n    constructor(request, response) {\r\n        this.index = () => __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const response = yield ModelTodo_1.default.findAll({\r\n                    include: [{ model: ModelUser_1.default, as: 'from' }]\r\n                });\r\n                return this.res.json({\r\n                    massage: \"Success!\",\r\n                    data: response,\r\n                });\r\n            }\r\n            catch (e) {\r\n                return this.res.json({\r\n                    massage: e,\r\n                });\r\n            }\r\n        });\r\n        this.create = () => __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const response = yield ModelTodo_1.default.create(this.req.body);\r\n                return this.res.json({\r\n                    massage: \"Success!\",\r\n                });\r\n            }\r\n            catch (e) {\r\n                return this.res.status(400).json({\r\n                    massage: e,\r\n                });\r\n            }\r\n        });\r\n        this.show = () => __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const { id } = this.req.params;\r\n                const response = yield ModelTodo_1.default.findOne({\r\n                    where: { id },\r\n                });\r\n                if (response !== null) {\r\n                    return this.res.json({\r\n                        message: \"Success\",\r\n                        data: response,\r\n                    });\r\n                }\r\n                return this.res.status(404).json({\r\n                    massage: \"Not found\",\r\n                });\r\n            }\r\n            catch (e) {\r\n                return this.res.status(400).json({\r\n                    massage: e,\r\n                });\r\n            }\r\n        });\r\n        this.update = () => __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const { id } = this.req.params;\r\n                const response = yield ModelTodo_1.default.findOne({\r\n                    where: { id },\r\n                });\r\n                if (response !== null) {\r\n                    response.update(Object.assign(Object.assign({}, response), this.req.body));\r\n                    response.save();\r\n                    return this.res.json({\r\n                        massage: \"success!\",\r\n                        data: response,\r\n                    });\r\n                }\r\n                return this.res.status(404).json({\r\n                    massage: \"Not found\",\r\n                });\r\n            }\r\n            catch (e) {\r\n                return this.res.status(400).json({\r\n                    massage: e,\r\n                });\r\n            }\r\n        });\r\n        this.delete = () => __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const { id } = this.req.params;\r\n                const response = yield ModelTodo_1.default.findOne({\r\n                    where: { id },\r\n                });\r\n                if (response !== null) {\r\n                    return this.res.json({\r\n                        massage: \"success!\",\r\n                    });\r\n                }\r\n                return this.res.status(404).json({ massage: \"not found\" });\r\n            }\r\n            catch (e) {\r\n                return this.res.status(400).json({ massage: e });\r\n            }\r\n        });\r\n        this.req = request;\r\n        this.res = response;\r\n    }\r\n}\r\nexports[\"default\"] = ServiceTodo;\r\n\n\n//# sourceURL=webpack://test2/./src/services/ServicerTodo.ts?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;