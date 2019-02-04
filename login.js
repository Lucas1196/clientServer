var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
    _inherits(LoginForm, _React$Component);

    function LoginForm(props) {
        _classCallCheck(this, LoginForm);

        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

        _this.state = {
            username: '',
            password: '',
            errors: [],
            pwdState: null
        };
        //Bind the function
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(LoginForm, [{
        key: 'handleChange',
        value: function handleChange(evt) {
            //SetState input name to e.target.value
            this.setState(_defineProperty({}, evt.target.name, evt.target.value));
            this.setState({
                pwdState: "weak"
            });
            if (evt.target.value.length > 4) {
                this.setState({
                    pwdState: "medium"
                });
            }
            if (evt.target.value.length > 7) {
                this.setState({
                    pwdState: "strong"
                });
            }
            //Delete the message saying Input cannot be empty
            this.clearValidationErr([evt.target.name]);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            //On submit check if Username is empty and show error if is true
            if (this.state.username == "") {
                this.showValidationErr("username", "Username cannot be empty!");
            }
            //On submit check if Password is empty and show error if is true
            if (this.state.password == "") {
                this.showValidationErr("password", "Password cannot be empty!");
            }
        }
    }, {
        key: 'showValidationErr',
        value: function showValidationErr(elm, msg) {
            //Validation Error(showERROR)
            this.setState(function (prevState) {
                return {
                    errors: [].concat(_toConsumableArray(prevState.errors), [{ elm: elm, msg: msg }])
                };
            });
        }
    }, {
        key: 'clearValidationErr',
        value: function clearValidationErr(elm) {
            //Function which clear validation error message
            this.setState(function (prevState) {
                var newArr = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = prevState.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var err = _step.value;

                        if (elm != err.elm) {
                            newArr.push(err);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return { errors: newArr };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //Show status for error message like null
            var usernameErr = null,
                passwordErr = null;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.state.errors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var err = _step2.value;

                    if (err.elm == "username") {
                        usernameErr = err.msg;
                    } else if (err.elm == "password") {
                        passwordErr = err.msg;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var pwdWeak = false,
                pwdMedium = false,
                pwdStrong = false;
            if (this.state.pwdState == "weak") {
                pwdWeak = true;
            } else if (this.state.pwdState == "medium") {
                pwdWeak = true;
                pwdMedium = true;
            } else if (this.state.pwdState == "strong") {
                pwdWeak = true;
                pwdMedium = true;
                pwdStrong = true;
            }
            return React.createElement(
                'form',
                { onSubmit: this.handleSubmit, className: 'col-6 offset-3' },
                React.createElement(
                    'div',
                    { className: 'input-group' },
                    React.createElement(
                        'label',
                        null,
                        'Username:',
                        React.createElement('input', { type: 'text', name: 'username', value: this.state.username, onChange: this.handleChange })
                    ),
                    React.createElement(
                        'small',
                        { className: 'dangerError text-left' },
                        usernameErr ? usernameErr : ""
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'input-group' },
                    React.createElement(
                        'label',
                        null,
                        'Password:',
                        React.createElement('input', { type: 'password', name: 'password', value: this.state.password, onChange: this.handleChange })
                    ),
                    React.createElement(
                        'small',
                        { className: 'dangerError text-left' },
                        passwordErr ? passwordErr : ""
                    ),
                    this.state.password && React.createElement(
                        'div',
                        { className: 'password-state row' },
                        React.createElement('div', {
                            className: "col pwd-weak" + (pwdWeak ? " show" : "") }),
                        React.createElement('div', {
                            className: "col pwd-medium" + (pwdMedium ? " show" : "") }),
                        React.createElement('div', {
                            className: "col pwd-strong" + (pwdStrong ? " show" : "") })
                    )
                ),
                React.createElement(
                    'button',
                    { type: 'submit' },
                    'Log in'
                ),
                React.createElement(
                    'div',
                    { className: 'noAccount' },
                    'If you don\'t have an account, ',
                    React.createElement(
                        'a',
                        { href: 'register.html', title: 'Register', className: 'btn-register' },
                        'Register'
                    ),
                    ' !'
                )
            );
        }
    }]);

    return LoginForm;
}(React.Component);

ReactDOM.render(React.createElement(LoginForm, null), document.getElementById('containerLogin'));