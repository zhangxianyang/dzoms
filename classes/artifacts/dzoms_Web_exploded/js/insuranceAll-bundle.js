webpackJsonp([2],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__(142);

exports['default'] = _grid.Row;
module.exports = exports['default'];

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

__webpack_require__(139);

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(3);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(10);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSwitch = __webpack_require__(205);

var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Switch = function (_React$Component) {
    (0, _inherits3['default'])(Switch, _React$Component);

    function Switch() {
        (0, _classCallCheck3['default'])(this, Switch);
        return (0, _possibleConstructorReturn3['default'])(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Switch, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className;

            var classes = (0, _classnames2['default'])(className, (0, _defineProperty3['default'])({}, prefixCls + '-small', size === 'small'));
            return _react2['default'].createElement(_rcSwitch2['default'], (0, _extends3['default'])({}, this.props, { className: classes }));
        }
    }]);
    return Switch;
}(_react2['default'].Component);

exports['default'] = Switch;

Switch.defaultProps = {
    prefixCls: 'ant-switch'
};
Switch.propTypes = {
    prefixCls: _propTypes2['default'].string,
    // HACK: https://github.com/ant-design/ant-design/issues/5368
    // size=default and size=large are the same
    size: _propTypes2['default'].oneOf(['small', 'default', 'large']),
    className: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

__webpack_require__(224);

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = __webpack_require__(52);

var _select = __webpack_require__(46);

var _select2 = _interopRequireDefault(_select);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(22);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(23);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    UtilSelect: {
        displayName: 'UtilSelect'
    }
};

var _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'D:/react/newProject/components/util/Select.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'D:/react/newProject/components/util/Select.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2(_DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
} /*
    组件功能：下拉选择框
  */


var UtilSelect = _wrapComponent('UtilSelect')(function (_React$Component) {
    _inherits(UtilSelect, _React$Component);

    function UtilSelect(props) {
        _classCallCheck(this, UtilSelect);

        var _this = _possibleConstructorReturn(this, (UtilSelect.__proto__ || Object.getPrototypeOf(UtilSelect)).call(this, props));

        _this.state = {
            employeeJobNumber: []
        };
        return _this;
    }

    _createClass(UtilSelect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            $.ajax({
                type: "get",
                url: "/employeeJobNumber",
                dataType: 'json',
                contentType: 'application/json',
                success: function success(data) {
                    console.log(data.data);
                    var employeeJobNumber = [];
                    if (data.status > 0) {
                        data.data.map(function (obj) {
                            employeeJobNumber.push(obj.employeeId);
                        });
                        self.setState({
                            employeeJobNumber: employeeJobNumber
                        });
                    }
                },
                error: function error(data) {
                    alert("失败");
                }
            });
        }
    }, {
        key: 'onemployeeIdChange',
        value: function onemployeeIdChange(value) {
            //console.log('员工id:',value);
        }
    }, {
        key: 'genselectRows',
        value: function genselectRows() {
            var self = this;
            var selectRows = self.state.employeeJobNumber.map(function (item) {
                return _react3.default.createElement(
                    Option,
                    { value: item },
                    item
                );
            });
            return selectRows;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                _select2.default,
                {
                    showSearch: true,
                    style: { width: '100%' },
                    placeholder: '\u8BF7\u8F93\u5165\u5458\u5DE5\u5DE5\u53F7',
                    optionFilterProp: 'children',
                    onChange: this.onemployeeIdChange.bind(this),
                    filterOption: function filterOption(input, option) {
                        return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                    }
                },
                this.genselectRows()
            );
        }
    }]);

    return UtilSelect;
}(_react3.default.Component));

exports.default = UtilSelect;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(17)))

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);









var classNames = __webpack_require__(9);

function noop() {}

var Switch = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Switch, _Component);

  function Switch(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Switch);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _initialiseProps.call(_this);

    var checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    _this.state = { checked: checked };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Switch, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: !!nextProps.checked
        });
      }
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      if (this.props.disabled) {
        return;
      }
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked
        });
      }
      this.props.onChange(checked);
    }

    // Handle auto focus when click switch in Chrome

  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          className = _props.className,
          prefixCls = _props.prefixCls,
          disabled = _props.disabled,
          checkedChildren = _props.checkedChildren,
          tabIndex = _props.tabIndex,
          unCheckedChildren = _props.unCheckedChildren,
          restProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'prefixCls', 'disabled', 'checkedChildren', 'tabIndex', 'unCheckedChildren']);

      var checked = this.state.checked;
      var switchTabIndex = disabled ? -1 : tabIndex || 0;
      var switchClassName = classNames((_classNames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, className, !!className), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls, true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-checked', checked), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-disabled', disabled), _classNames));
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'span',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, restProps, {
          className: switchClassName,
          tabIndex: switchTabIndex,
          ref: this.saveNode,
          onKeyDown: this.handleKeyDown,
          onClick: this.toggle,
          onMouseUp: this.handleMouseUp
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'span',
          { className: prefixCls + '-inner' },
          checked ? checkedChildren : unCheckedChildren
        )
      );
    }
  }]);

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.toggle = function () {
    var onClick = _this2.props.onClick;

    var checked = !_this2.state.checked;
    _this2.setChecked(checked);
    onClick(checked);
  };

  this.handleKeyDown = function (e) {
    if (e.keyCode === 37) {
      // Left
      _this2.setChecked(false);
    } else if (e.keyCode === 39) {
      // Right
      _this2.setChecked(true);
    } else if (e.keyCode === 32 || e.keyCode === 13) {
      // Space, Enter
      _this2.toggle();
    }
  };

  this.handleMouseUp = function (e) {
    if (_this2.node) {
      _this2.node.blur();
    }
    if (_this2.props.onMouseUp) {
      _this2.props.onMouseUp(e);
    }
  };

  this.saveNode = function (node) {
    _this2.node = node;
  };
};

Switch.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  prefixCls: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  disabled: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  checkedChildren: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  unCheckedChildren: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  onChange: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onMouseUp: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  tabIndex: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number,
  checked: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  defaultChecked: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool
};

Switch.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false,
  onChange: noop,
  onClick: noop
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(204);

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(25)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(72, function() {
			var newContent = __webpack_require__(72);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = __webpack_require__(33);

var _table = __webpack_require__(32);

var _table2 = _interopRequireDefault(_table);

var _css2 = __webpack_require__(26);

var _button = __webpack_require__(20);

var _button2 = _interopRequireDefault(_button);

var _css3 = __webpack_require__(110);

var _icon = __webpack_require__(35);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(146);

var _switch = __webpack_require__(145);

var _switch2 = _interopRequireDefault(_switch);

var _css5 = __webpack_require__(40);

var _datePicker = __webpack_require__(39);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _css6 = __webpack_require__(31);

var _form = __webpack_require__(30);

var _form2 = _interopRequireDefault(_form);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(22);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(23);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Sorter = __webpack_require__(34);

var _Sorter2 = _interopRequireDefault(_Sorter);

var _Filters = __webpack_require__(38);

var _Filters2 = _interopRequireDefault(_Filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Accident: {
    displayName: 'Accident'
  }
};

var _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'D:/react/newProject/components/insurance/accident.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'D:/react/newProject/components/insurance/accident.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2(_DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var FormItem = _form2.default.Item;
var MonthPicker = _datePicker2.default.MonthPicker,
    RangePicker = _datePicker2.default.RangePicker;

var dateFormat = 'YYYY/MM/DD';
var monthFormat = 'YYYY/MM';

var Accident = _wrapComponent('Accident')(function (_React$Component) {
  _inherits(Accident, _React$Component);

  function Accident(props) {
    _classCallCheck(this, Accident);

    var _this = _possibleConstructorReturn(this, (Accident.__proto__ || Object.getPrototypeOf(Accident)).call(this, props));

    var colVisible = new Array(40);
    for (var i = 1; i < 11; i++) {
      colVisible[i] = true;
    }
    for (var i = 11; i < colVisible.length; i++) {
      colVisible[i] = false;
    }
    // console.log(colVisible)
    _this.state = {
      selectedRowKeys: [], //Check here to configure the default column
      loading: false,
      recData: [], //从后台接收到的数据
      newKey: 0,
      selectedTime: "",
      colVisible: colVisible
    };
    _this.key = 0;
    return _this;
  }

  _createClass(Accident, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      $.ajax({
        url: self.props.accidentListInfoUrl,
        type: "get",
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
          if (data.status > 0) {
            //console.log(data.data);
            for (var i = 0; i < data.data.length; i++) {
              data.data[i]["key"] = data.data[i].id;
            }
            // console.log(data.data) 
            data.data.map(function (row) {
              for (var col in row) {
                if (row[col] == null) {
                  row[col] = '';
                }
              }
            });
            self.setState({
              recData: data.data
            });
          } else {
            recData: "";
          }
        }.bind(this),
        error: function error() {
          alert("请求失败");
        }
      });
    }
  }, {
    key: 'onTimeChange',
    value: function onTimeChange(date, dateString) {
      dateString = dateString.replace('/', '-');
      this.setState({
        selectedTime: dateString
      });
    }
  }, {
    key: 'search',
    value: function search() {
      var self = this;
      var selectedTime = self.state.selectedTime;
      $.get(self.props.accidentListInfoUrl + "?selectedTime=" + selectedTime, function (data) {
        if (data.status > 0) {
          var data = data.data;
          for (var i = 0; i < data.length; i++) {
            data[i]["key"] = data[i].id;
          }
          self.setState({
            recData: data
          });
        } else {
          recData: "";
        }
      });
    }
    // linkDetails(e,index){
    //     console.log(e.target.value,index);
    // }

  }, {
    key: 'download',
    value: function download() {
      window.location.href = this.props.downloadUrl;
    }
  }, {
    key: 'switchChange',
    value: function switchChange(index, value) {
      var newArray = Object.assign([], this.state.colVisible);
      newArray[index] = !newArray[index];
      this.setState({
        colVisible: newArray
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var filterData = new _Filters2.default().filter(this.state.recData);
      var columns = [{
        title: '序号',
        width: 30,
        render: function render(text, record, index) {
          return _react3.default.createElement(
            'span',
            null,
            ++index
          );
        }
      }, {
        title: '驾驶人',
        dataIndex: 'jsr',
        key: 'jsr',
        width: 75,
        filters: filterData.jsr,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.jsr, b.jsr);
        },
        onFilter: function onFilter(value, record) {
          return record.jsr.indexOf(value) === 0;
        }
      }, {
        title: '车牌号',
        dataIndex: 'cph',
        key: 'cph',
        width: 75,
        filters: filterData.cph,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cph, b.cph);
        },
        onFilter: function onFilter(value, record) {
          return record.cph.indexOf(value) === 0;
        }
      }, {
        title: '案件性质',
        dataIndex: 'ajxz',
        key: 'ajxz',
        width: 85,
        filters: filterData.ajxz,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.ajxz, b.ajxz);
        },
        onFilter: function onFilter(value, record) {
          return record.ajxz.indexOf(value) === 0;
        }
      }, {
        title: '出险日期',
        dataIndex: 'cxrq',
        key: 'cxrq',
        width: 85,
        filters: filterData.cxrq,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cxrq, b.cxrq);
        },
        onFilter: function onFilter(value, record) {
          return record.cxrq.indexOf(value) === 0;
        }
      }, {
        title: '赔付金额',
        dataIndex: 'pfje',
        key: 'pfje',
        width: 85,
        filters: filterData.pfje,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.pfje, b.pfje);
        },
        onFilter: function onFilter(value, record) {
          return record.pfje.indexOf(value) === 0;
        }
      }, {
        title: '结案日期',
        dataIndex: 'jarq',
        key: 'jarq',
        width: 73,
        filters: filterData.jarq,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.jarq, b.jarq);
        },
        onFilter: function onFilter(value, record) {
          return record.jarq.indexOf(value) === 0;
        }
      }, {
        title: '出险地址',
        dataIndex: 'cxdz',
        key: 'cxdz',
        width: 85,
        filters: filterData.cxdz,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cxdz, b.cxdz);
        },
        onFilter: function onFilter(value, record) {
          return record.cxdz.indexOf(value) === 0;
        }
      }, {
        title: '出险原因',
        dataIndex: 'cxyy',
        key: 'cxyy',
        width: 85,
        filters: filterData.cxyy,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cxyy, b.cxyy);
        },
        onFilter: function onFilter(value, record) {
          return record.cxyy.indexOf(value) === 0;
        }
      }, {
        title: '出险经过',
        dataIndex: 'cxjg',
        key: 'cxjg',
        width: 90,
        filters: filterData.cxjg,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cxjg, b.cxjg);
        },
        onFilter: function onFilter(value, record) {
          return record.cxjg.indexOf(value) === 0;
        }
        // ,{
        //   title: '所属部门',
        //   dataIndex: 'cxjg',
        //   key:'cxjg',
        //   width:90,
        //   filters:filterData.cxjg,
        //   sorter: (a, b) => (new Sorter().sort(a.cxjg, b.cxjg)),
        //   onFilter: (value, record) => record.cxjg.indexOf(value) === 0
        // } 
      }, {
        title: '驾驶证',
        dataIndex: 'jsz',
        key: 'jsz',
        width: 75,
        filters: filterData.jsz,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.jsz, b.jsz);
        },
        onFilter: function onFilter(value, record) {
          return record.jsz.indexOf(value) === 0;
        }
      }, {
        title: '报案时间',
        dataIndex: 'basj',
        width: 100,
        key: 'basj',
        filters: filterData.basj,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.basj, b.basj);
        },
        onFilter: function onFilter(value, record) {
          return record.basj.indexOf(value) === 0;
        }
      }, {
        title: '结案时间',
        dataIndex: 'jasj',
        width: 100,
        key: 'jasj',
        filters: filterData.jasj,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.jasj, b.jasj);
        },
        onFilter: function onFilter(value, record) {
          return record.jasj.indexOf(value) === 0;
        }
      }, {
        title: '保单号',
        dataIndex: 'bdh',
        width: 73,
        key: 'bdh',
        filters: filterData.bdh,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bdh, b.bdh);
        },
        onFilter: function onFilter(value, record) {
          return record.bdh.indexOf(value) === 0;
        }
        //render:(text, record, index)=>(<a onClick={this.linkDetails.bind(this,index)}>{text}</a>)
      }, {
        title: '初登日期',
        dataIndex: 'cdrq',
        key: 'cdrq',
        width: 85,
        filters: filterData.cdrq,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cdrq, b.cdrq);
        },
        onFilter: function onFilter(value, record) {
          return record.cdrq.indexOf(value) === 0;
        }
      }, {
        title: '报案号',
        dataIndex: 'bah',
        key: 'bah',
        width: 73,
        filters: filterData.bah,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bah, b.bah);
        },
        onFilter: function onFilter(value, record) {
          return record.bah.indexOf(value) === 0;
        }
      }, {
        title: '立案号',
        dataIndex: 'lah',
        key: 'lah',
        width: 73,
        filters: filterData.lah,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.lah, b.lah);
        },
        onFilter: function onFilter(value, record) {
          return record.lah.indexOf(value) === 0;
        }
      }, {
        title: '条款',
        dataIndex: 'tk',
        key: 'tk',
        width: 85,
        filters: filterData.tk,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.tk, b.tk);
        },
        onFilter: function onFilter(value, record) {
          return record.tk.indexOf(value) === 0;
        }
      }, {
        title: '保费',
        dataIndex: 'bf',
        key: 'bf',
        width: 85,
        filters: filterData.bf,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bf, b.bf);
        },
        onFilter: function onFilter(value, record) {
          return record.bf.indexOf(value) === 0;
        }
      }, {
        title: '事故处理方式',
        dataIndex: 'sgclfs',
        key: 'sgclfs',
        width: 105,
        filters: filterData.sgclfs,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.sgclfs, b.sgclfs);
        },
        onFilter: function onFilter(value, record) {
          return record.sgclfs.indexOf(value) === 0;
        }
      }, {
        title: '事故处理部门',
        dataIndex: 'sgclbm',
        key: 'sgclbm',
        width: 105,
        filters: filterData.sgclbm,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.sgclbm, b.sgclbm);
        },
        onFilter: function onFilter(value, record) {
          return record.sgclbm.indexOf(value) === 0;
        }
      }, {
        title: '通赔标志',
        dataIndex: 'tpbz',
        key: 'tpbz',
        width: 105,
        filters: filterData.tpbz,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.tpbz, b.tpbz);
        },
        onFilter: function onFilter(value, record) {
          return record.tpbz.indexOf(value) === 0;
        }
      }, {
        title: '业务来源',
        dataIndex: 'ywly',
        key: 'ywly',
        width: 105,
        filters: filterData.ywly,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.ywly, b.ywly);
        },
        onFilter: function onFilter(value, record) {
          return record.ywly.indexOf(value) === 0;
        }
      }, {
        title: '保单归属机构',
        dataIndex: 'bdgsjg',
        key: 'bdgsjg',
        width: 105,
        filters: filterData.bdgsjg,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bdgsjg, b.bdgsjg);
        },
        onFilter: function onFilter(value, record) {
          return record.bdgsjg.indexOf(value) === 0;
        }
      }, {
        title: '启保日期',
        dataIndex: 'qbrq',
        key: 'qbrq',
        width: 105,
        filters: filterData.qbrq,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.qbrq, b.qbrq);
        },
        onFilter: function onFilter(value, record) {
          return record.qbrq.indexOf(value) === 0;
        }
      }, {
        title: '终保日期',
        dataIndex: 'zbrq',
        key: 'zbrq',
        width: 105,
        filters: filterData.zbrq,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.zbrq, b.zbrq);
        },
        onFilter: function onFilter(value, record) {
          return record.zbrq.indexOf(value) === 0;
        }
      }, {
        title: '估损金额',
        dataIndex: 'gsje',
        key: 'gsje',
        width: 85,
        filters: filterData.gsje,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.gsje, b.gsje);
        },
        onFilter: function onFilter(value, record) {
          return record.gsje.indexOf(value) === 0;
        }
      }, {
        title: '估计赔款',
        dataIndex: 'gjpk',
        key: 'gjpk',
        width: 85,
        filters: filterData.gjpk,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.gjpk, b.gjpk);
        },
        onFilter: function onFilter(value, record) {
          return record.gjpk.indexOf(value) === 0;
        }
      }, {
        title: '报案人',
        dataIndex: 'bar',
        key: 'bar',
        width: 73,
        filters: filterData.bar,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bar, b.bar);
        },
        onFilter: function onFilter(value, record) {
          return record.bar.indexOf(value) === 0;
        }
      }, {
        title: '报案人电话',
        dataIndex: 'bardh',
        key: 'bardh',
        width: 95,
        filters: filterData.bardh,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bardh, b.bardh);
        },
        onFilter: function onFilter(value, record) {
          return record.bardh.indexOf(value) === 0;
        }
      }, {
        title: '立案日期',
        dataIndex: 'larq',
        key: 'larq',
        width: 73,
        filters: filterData.larq,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.larq, b.larq);
        },
        onFilter: function onFilter(value, record) {
          return record.larq.indexOf(value) === 0;
        }
      }, {
        title: '查勘员',
        dataIndex: 'cky',
        key: 'cky',
        width: 73,
        filters: filterData.cky,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cky, b.cky);
        },
        onFilter: function onFilter(value, record) {
          return record.cky.indexOf(value) === 0;
        }
      }, {
        title: '查勘员2',
        dataIndex: 'cky2',
        key: 'cky2',
        width: 73,
        filters: filterData.cky2,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cky2, b.cky2);
        },
        onFilter: function onFilter(value, record) {
          return record.cky2.indexOf(value) === 0;
        }
      }, {
        title: '处理人代码',
        dataIndex: 'clrdm',
        key: 'clrdm',
        width: 73,
        filters: filterData.clrdm,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.clrdm, b.clrdm);
        },
        onFilter: function onFilter(value, record) {
          return record.clrdm.indexOf(value) === 0;
        }
      }, {
        title: '保单经办人',
        dataIndex: 'bdjbr',
        key: 'bdjbr',
        width: 73,
        filters: filterData.bdjbr,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bdjbr, b.bdjbr);
        },
        onFilter: function onFilter(value, record) {
          return record.bdjbr.indexOf(value) === 0;
        }
      }, {
        title: '保单归属人',
        dataIndex: 'bdgsr',
        key: 'bdgsr',
        width: 73,
        filters: filterData.bdgsr,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bdgsr, b.bdgsr);
        },
        onFilter: function onFilter(value, record) {
          return record.bdgsr.indexOf(value) === 0;
        }
      }, {
        title: '被保险人',
        dataIndex: 'bbxr',
        key: 'bbxr',
        width: 73,
        filters: filterData.bbxr,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bbxr, b.bbxr);
        },
        onFilter: function onFilter(value, record) {
          return record.bbxr.indexOf(value) === 0;
        }
      }, {
        title: '厂牌型号',
        dataIndex: 'cpxh',
        key: 'cpxh',
        width: 85,
        filters: filterData.cpxh,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cpxh, b.cpxh);
        },
        onFilter: function onFilter(value, record) {
          return record.cpxh.indexOf(value) === 0;
        }
      }, {
        title: '创建时间',
        dataIndex: 'create_date',
        key: 'create_date',
        width: 90,
        filters: filterData.create_date,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.create_date, b.create_date);
        },
        onFilter: function onFilter(value, record) {
          return record.create_date.indexOf(value) === 0;
        }
      }];
      var self = this;
      var switchBox = columns.map(function (row, index) {
        return _react3.default.createElement(_switch2.default, { style: { margin: 5 }, size: 'small', checkedChildren: row.title, unCheckedChildren: row.title, checked: self.state.colVisible[index], onChange: self.switchChange.bind(self, index) });
      });
      columns = columns.filter(function (item, index) {
        return self.state.colVisible[index] == true;
      });
      // console.log(columns)
      var _state = this.state,
          loading = _state.loading,
          selectedRowKeys = _state.selectedRowKeys;

      var hasSelected = selectedRowKeys.length > 0;
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'div',
          { style: { position: 'relative', float: 'right', marginBottom: '10px' } },
          _react3.default.createElement(
            'div',
            { style: { position: 'absolute', top: '-55px', right: '65px' }, onClick: this.download.bind(this) },
            _react3.default.createElement(_icon2.default, { type: 'download', style: { fontSize: '18px' } }),
            '\u4E0B\u8F7D'
          ),
          _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(MonthPicker, { onChange: this.onTimeChange.bind(this), format: monthFormat, placeholder: '\u65E5\u671F\u9009\u62E9' }),
            _react3.default.createElement(
              _button2.default,
              { onClick: this.search.bind(this) },
              '\u641C\u7D22'
            )
          )
        ),
        _react3.default.createElement(
          'div',
          { style: { clear: 'both' } },
          switchBox
        ),
        _react3.default.createElement(_table2.default, { bordered: true, style: { clear: 'both' }, key: this.key++, columns: columns, dataSource: this.state.recData })
      );
    }
  }]);

  return Accident;
}(_react3.default.Component));

if (document.getElementById("accident")) _reactDom2.default.render(_react3.default.createElement(Accident, pageUrls), document.getElementById("accident"));
exports.default = Accident;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(17)))

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = __webpack_require__(33);

var _table = __webpack_require__(32);

var _table2 = _interopRequireDefault(_table);

var _css2 = __webpack_require__(26);

var _button = __webpack_require__(20);

var _button2 = _interopRequireDefault(_button);

var _css3 = __webpack_require__(110);

var _icon = __webpack_require__(35);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(40);

var _datePicker = __webpack_require__(39);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _css5 = __webpack_require__(31);

var _form = __webpack_require__(30);

var _form2 = _interopRequireDefault(_form);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(22);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(23);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Sorter = __webpack_require__(34);

var _Sorter2 = _interopRequireDefault(_Sorter);

var _Filters = __webpack_require__(38);

var _Filters2 = _interopRequireDefault(_Filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  InsuranceList: {
    displayName: 'InsuranceList'
  }
};

var _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'D:/react/newProject/components/insurance/insuranceList.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'D:/react/newProject/components/insurance/insuranceList.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2(_DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var FormItem = _form2.default.Item;
var MonthPicker = _datePicker2.default.MonthPicker,
    RangePicker = _datePicker2.default.RangePicker;

var dateFormat = 'YYYY/MM/DD';
var monthFormat = 'YYYY/MM';

var InsuranceList = _wrapComponent('InsuranceList')(function (_React$Component) {
  _inherits(InsuranceList, _React$Component);

  function InsuranceList(props) {
    _classCallCheck(this, InsuranceList);

    var _this = _possibleConstructorReturn(this, (InsuranceList.__proto__ || Object.getPrototypeOf(InsuranceList)).call(this, props));

    _this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      recData: [], //从后台接收到的数据
      newKey: 0,
      selectedTime: ""
    };
    _this.key = 0;
    _this.filters = {};
    return _this;
  }

  _createClass(InsuranceList, [{
    key: 'componentDidMount',
    value: async function componentDidMount() {
      var self = this;
      $.ajax({
        url: self.props.insuranceListInfoUrl,
        type: "get",
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
          //if(data){
          if (data.status > 0) {
            var data = data.data;
            for (var i = 0; i < data.length; i++) {
              data[i]["key"] = data[i].id;
            }
            self.setState({
              recData: data
            });
          } else {
            recData: "";
          }
        }.bind(self),
        error: function error() {
          alert("请求失败");
        }
      });
    }
  }, {
    key: 'onTimeChange',
    value: function onTimeChange(date, dateString) {
      dateString = dateString.replace('/', '-');
      this.setState({
        selectedTime: dateString
      });
    }
  }, {
    key: 'search',
    value: function search() {
      var self = this;
      var selectedTime = self.state.selectedTime;
      $.get(self.props.insuranceListInfoUrl + "?selectedTime=" + selectedTime, function (data) {
        if (data.status > 0) {
          var data = data.data;
          for (var i = 0; i < data.length; i++) {
            data[i]["key"] = data[i].id;
          }
          self.setState({
            recData: data
          });
        } else {
          recData: "";
        }
      });
    }
  }, {
    key: 'download',
    value: function download() {
      window.location.href = this.props.downloadUrl;
    }
  }, {
    key: 'render',
    value: function render() {
      var filterData = new _Filters2.default().filter(this.state.recData);
      console.log(filterData);
      var columns = [{
        title: '序号',
        width: 50,
        fixed: 'left',
        render: function render(text, record, index) {
          return _react3.default.createElement(
            'span',
            null,
            ++index
          );
        }
      }, {
        title: '保单号',
        dataIndex: 'bdh',
        fixed: 'left',
        width: 180,
        key: 'bdh',
        filters: filterData.bdh,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bdh, b.bdh);
        },
        onFilter: function onFilter(value, record) {
          return record.bdh.indexOf(value) === 0;
        }
      }, {
        title: '车牌号',
        dataIndex: 'cph',
        fixed: 'left',
        width: 100,
        key: 'cph',
        filters: filterData.cph,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cph, b.cph);
        },
        onFilter: function onFilter(value, record) {
          return record.cph.indexOf(value) === 0;
        }
      }, {
        title: '被保险人',
        dataIndex: 'bbxr',
        key: '1',
        filters: filterData.bbxr,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bbxr, b.bbxr);
        },
        onFilter: function onFilter(value, record) {
          return record.bbxr.indexOf(value) === 0;
        }
      }, {
        title: '保险起期',
        dataIndex: 'bxqq',
        key: '2',
        filters: filterData.bxqq,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bxqq, b.bxqq);
        },
        onFilter: function onFilter(value, record) {
          return record.bxqq.indexOf(value) === 0;
        }
      }, {
        title: '保险止期',
        dataIndex: 'bxzq',
        key: '3',
        filters: filterData.bxzq,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.bxzq, b.bxzq);
        },
        onFilter: function onFilter(value, record) {
          return record.bxzq.indexOf(value) === 0;
        }
      }, {
        title: '总保额',
        dataIndex: 'zbe',
        key: '4',
        filters: filterData.zbe,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.zbe, b.zbe);
        },
        onFilter: function onFilter(value, record) {
          return record.zbe.indexOf(value) === 0;
        }
      }, {
        title: '总保费',
        dataIndex: 'zbf',
        key: '5',
        filters: filterData.zbf,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.zbf, b.zbf);
        },
        onFilter: function onFilter(value, record) {
          return record.zbf.indexOf(value) === 0;
        }
      }, {
        title: '录入时间',
        dataIndex: 'lrsj',
        key: 'lrsj',
        filters: filterData.lrsj,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.lrsj, b.lrsj);
        },
        onFilter: function onFilter(value, record) {
          return record.lrsj.indexOf(value) === 0;
        }
      }];
      var _state = this.state,
          loading = _state.loading,
          selectedRowKeys = _state.selectedRowKeys;

      var hasSelected = selectedRowKeys.length > 0;
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'div',
          { style: { float: 'right', marginBottom: '10px', position: 'relative' } },
          _react3.default.createElement(
            'div',
            { style: { position: 'absolute', top: '-55px', right: '65px' }, onClick: this.download.bind(this) },
            _react3.default.createElement(_icon2.default, { type: 'download', style: { fontSize: '18px' } }),
            '\u4E0B\u8F7D'
          ),
          _react3.default.createElement(MonthPicker, { onChange: this.onTimeChange.bind(this), format: monthFormat, placeholder: '\u65E5\u671F\u9009\u62E9' }),
          _react3.default.createElement(
            _button2.default,
            { onClick: this.search.bind(this) },
            '\u641C\u7D22'
          )
        ),
        _react3.default.createElement(_table2.default, { style: { clear: 'both' }, key: this.key++, columns: columns, dataSource: this.state.recData, scroll: { x: 1300 } })
      );
    }
  }]);

  return InsuranceList;
}(_react3.default.Component));

if (document.getElementById("insuranceList")) _reactDom2.default.render(_react3.default.createElement(InsuranceList, pageUrls), document.getElementById("insuranceList"));
exports.default = InsuranceList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(17)))

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = __webpack_require__(26);

var _button = __webpack_require__(20);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(113);

var _row = __webpack_require__(112);

var _row2 = _interopRequireDefault(_row);

var _css3 = __webpack_require__(109);

var _col = __webpack_require__(108);

var _col2 = _interopRequireDefault(_col);

var _css4 = __webpack_require__(51);

var _inputNumber = __webpack_require__(50);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _css5 = __webpack_require__(42);

var _modal = __webpack_require__(41);

var _modal2 = _interopRequireDefault(_modal);

var _css6 = __webpack_require__(40);

var _datePicker = __webpack_require__(39);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _css7 = __webpack_require__(52);

var _select = __webpack_require__(46);

var _select2 = _interopRequireDefault(_select);

var _css8 = __webpack_require__(29);

var _input = __webpack_require__(37);

var _input2 = _interopRequireDefault(_input);

var _css9 = __webpack_require__(111);

var _radio = __webpack_require__(91);

var _radio2 = _interopRequireDefault(_radio);

var _css10 = __webpack_require__(31);

var _form = __webpack_require__(30);

var _form2 = _interopRequireDefault(_form);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(22);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(23);

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SelectInfo = __webpack_require__(92);

var _SelectInfo2 = _interopRequireDefault(_SelectInfo);

var _carNumber = __webpack_require__(568);

var _carNumber2 = _interopRequireDefault(_carNumber);

var _Select = __webpack_require__(148);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SeatingIssue: {
    displayName: 'SeatingIssue'
  }
};

var _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'D:/react/newProject/components/insurance/seatingIssue.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'D:/react/newProject/components/insurance/seatingIssue.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2(_DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var FormItem = _form2.default.Item;
var RadioGroup = _radio2.default.Group;
var RadioButton = _radio2.default.Button;
var InputGroup = _input2.default.Group;
var Option = _select2.default.Option;
var MonthPicker = _datePicker2.default.MonthPicker,
    RangePicker = _datePicker2.default.RangePicker;

var dateFormat = 'YYYY/MM/DD';
var monthFormat = 'YYYY/MM';

var SeatingIssue = _wrapComponent('SeatingIssue')(function (_React$Component) {
  _inherits(SeatingIssue, _React$Component);

  function SeatingIssue(props) {
    _classCallCheck(this, SeatingIssue);

    var _this = _possibleConstructorReturn(this, (SeatingIssue.__proto__ || Object.getPrototypeOf(SeatingIssue)).call(this, props));

    _this.state = _defineProperty({
      recData: "",
      recCph: [], //后台请求回来的车牌号数组
      employeeJobNumber: [],
      errorMessage: "",
      objCph: ""
    }, 'errorMessage', "");
    _this.CphValue = ""; //后面的车牌号
    _this.cphId = ""; //车牌号ID
    _this.cphPrefix = ""; //车牌号前缀
    _this.seatType = ["xzps", "xzwz", "dzps", "dzwz"];
    _this.seatTypeObj = {};
    return _this;
  }

  _createClass(SeatingIssue, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
    //   var self=this;
    //   $.ajax({
    //     type:"get",
    //     //url: "/employeeJobNumber",
    //     url:this.props.employeeInfoUrl,
    //     dataType: 'json',
    //     contentType : 'application/json',
    //     success: function(data){           
    //         var  employeeJobNumber=[]; 
    //         if(data.status>0){
    //            data.data.map(function(obj){
    //               employeeJobNumber.push(obj.employeeName+"-"+obj.employeeId);
    //            })
    //            self.setState({
    //               employeeJobNumber:employeeJobNumber
    //            });
    //         }           
    //     },
    //     error: function(data){
    //        alert("失败");
    //     }
    // });


    //车牌号处理start

  }, {
    key: 'objCph',
    value: function objCph(_objCph) {
      this.setState({ objCph: _objCph });
    }
  }, {
    key: 'errorMessage',
    value: function errorMessage(_errorMessage) {
      this.setState({ errorMessage: _errorMessage });
    }
    //车牌号处理end

  }, {
    key: 'onNumChange',
    value: function onNumChange(type, num) {
      this.seatTypeObj[type] = num;
    }
  }, {
    key: 'onemployeeIdChange',
    value: function onemployeeIdChange(value) {
      //console.log('员工id:',value);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var result = {};
      this.props.form.validateFieldsAndScroll(function (err, values) {
        if (_this2.state.errorMessage == "" && Object.keys(_this2.seatTypeObj).length !== 0) {
          //暂时不验证车牌号
          //if(Object.keys(this.seatTypeObj).length !== 0){
          if (!err) {
            result = values;
            //console.log(this.seatTypeObj);
            result.issueType = _this2.seatTypeObj;
            result.cph = _this2.state.objCph;
            $.ajax({
              type: "POST",
              //url: "/test",
              url: _this2.props.submitUrl,
              data: JSON.stringify(result),
              dataType: 'json',
              contentType: 'application/json',
              success: function success(data) {
                if (data.status > 0) {
                  _modal2.default.success({
                    title: '提示信息',
                    content: '保存成功！'
                  });
                } else {
                  _modal2.default.error({
                    title: '错误信息',
                    content: '保存失败！'
                  });
                }
              },
              error: function error(data) {
                alert("失败");
              }
            });
          } else {
            return;
          }
        } else {
          return;
        }
      });
      console.log(result);
    }
    // genselectRows(){
    //     var self=this;
    //     var selectRows=self.state.employeeJobNumber.map(function(item){
    //         return(                         
    //             <Option value={item}>{item}</Option>             
    //         )
    //     });
    //     return selectRows;
    // }

  }, {
    key: 'selectInfoErrorMessage',
    value: function selectInfoErrorMessage(errorMessage) {
      this.setState({
        errorMessage: errorMessage
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 14 }
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 14,
            offset: 6
          }
        }
      };
      var assueType = _react3.default.createElement(
        'span',
        null,
        _react3.default.createElement(
          'span',
          { style: { color: '#F04134' } },
          '*'
        ),
        ' \u53D1\u653E\u7C7B\u578B'
      );
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          _form2.default,
          { onSubmit: this.handleSubmit.bind(this) },
          _react3.default.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: '\u8F66\u724C\u53F7\u7801\uFF1A',
              hasFeedback: true
            }),
            getFieldDecorator('cph', {
              rules: [{
                required: true, message: '请输入车牌号！'
              }]
            })(_react3.default.createElement(
              'div',
              null,
              _react3.default.createElement(_carNumber2.default, _extends({}, pageUrls, { errorMessage: this.errorMessage.bind(this), objCph: this.objCph.bind(this) }))
            ))
          ),
          _react3.default.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: assueType
            }),
            getFieldDecorator('issueType')(_react3.default.createElement(
              _row2.default,
              null,
              _react3.default.createElement(
                _col2.default,
                { span: 12 },
                _react3.default.createElement(
                  'span',
                  null,
                  '\u5C0F\u5EA7\u7834\u635F\uFF1A'
                ),
                _react3.default.createElement(_inputNumber2.default, { min: 1, max: 10, defaultValue: 0, onChange: this.onNumChange.bind(this, this.seatType[0]) })
              ),
              _react3.default.createElement(
                _col2.default,
                { span: 12 },
                _react3.default.createElement(
                  'span',
                  null,
                  '\u5C0F\u5EA7\u6C61\u6E0D\uFF1A'
                ),
                _react3.default.createElement(_inputNumber2.default, { min: 1, max: 10, defaultValue: 0, onChange: this.onNumChange.bind(this, this.seatType[1]) })
              ),
              _react3.default.createElement(
                _col2.default,
                { span: 12 },
                _react3.default.createElement(
                  'span',
                  null,
                  '\u5927\u5EA7\u7834\u635F\uFF1A'
                ),
                _react3.default.createElement(_inputNumber2.default, { min: 1, max: 10, defaultValue: 0, onChange: this.onNumChange.bind(this, this.seatType[2]) })
              ),
              _react3.default.createElement(
                _col2.default,
                { span: 12 },
                _react3.default.createElement(
                  'span',
                  null,
                  '\u5927\u5EA7\u6C61\u6E0D\uFF1A'
                ),
                _react3.default.createElement(_inputNumber2.default, { min: 1, max: 10, defaultValue: 0, onChange: this.onNumChange.bind(this, this.seatType[3]) })
              )
            ))
          ),
          _react3.default.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: '\u5458\u5DE5\u5DE5\u53F7\uFF1A',
              hasFeedback: true
            }),
            getFieldDecorator('employeeId', {
              rules: [{
                required: true, message: '员工工号不能为空!'
              }]
            })(_react3.default.createElement(
              _select2.default,
              {
                showSearch: true,
                style: { width: '100%' },
                placeholder: '\u8BF7\u8F93\u5165\u5458\u5DE5\u5DE5\u53F7',
                optionFilterProp: 'children',
                onChange: this.onemployeeIdChange.bind(this),
                filterOption: function filterOption(input, option) {
                  return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                }
              },
              _react3.default.createElement(
                Option,
                { value: 's001-\u5F20\u4E09' },
                's001-\u5F201'
              ),
              _react3.default.createElement(
                Option,
                { value: 's002-\u5F20\u4E09' },
                's002-\u5F202'
              ),
              _react3.default.createElement(
                Option,
                { value: 's003-\u5F20\u4E09' },
                's003-\u5F203'
              ),
              _react3.default.createElement(
                Option,
                { value: 's004-\u5F20\u4E09' },
                's004-\u5F204'
              ),
              _react3.default.createElement(
                Option,
                { value: 's005-\u5F20\u4E09' },
                's005-\u5F205'
              ),
              _react3.default.createElement(
                Option,
                { value: 's006-\u5F20\u4E09' },
                's006-\u5F204'
              )
            ))
          ),
          _react3.default.createElement(
            FormItem,
            tailFormItemLayout,
            _react3.default.createElement(
              _button2.default,
              { type: 'primary', htmlType: 'submit', size: 'large' },
              '\u63D0\u4EA4'
            )
          )
        )
      );
    }
  }]);

  return SeatingIssue;
}(_react3.default.Component));

var WrappedSeatingIssue = _form2.default.create()(SeatingIssue);
if (document.getElementById("seatingIssue")) _reactDom2.default.render(_react3.default.createElement(WrappedSeatingIssue, pageUrls), document.getElementById("seatingIssue"));
exports.default = SeatingIssue;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(17)))

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = __webpack_require__(33);

var _table = __webpack_require__(32);

var _table2 = _interopRequireDefault(_table);

var _css2 = __webpack_require__(42);

var _modal = __webpack_require__(41);

var _modal2 = _interopRequireDefault(_modal);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(22);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(23);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Sorter = __webpack_require__(34);

var _Sorter2 = _interopRequireDefault(_Sorter);

var _Filters = __webpack_require__(38);

var _Filters2 = _interopRequireDefault(_Filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SeatingIssueHisInfo: {
    displayName: 'SeatingIssueHisInfo'
  }
};

var _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'D:/react/newProject/components/insurance/seatingIssueHisInfo.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'D:/react/newProject/components/insurance/seatingIssueHisInfo.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2(_DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var SeatingIssueHisInfo = _wrapComponent('SeatingIssueHisInfo')(function (_React$Component) {
  _inherits(SeatingIssueHisInfo, _React$Component);

  function SeatingIssueHisInfo(props) {
    _classCallCheck(this, SeatingIssueHisInfo);

    var _this = _possibleConstructorReturn(this, (SeatingIssueHisInfo.__proto__ || Object.getPrototypeOf(SeatingIssueHisInfo)).call(this, props));

    _this.state = {
      recData: [] //从后台接收到的数据
    };
    return _this;
  }

  _createClass(SeatingIssueHisInfo, [{
    key: 'componentDidMount',
    value: async function componentDidMount() {
      $.ajax({
        url: this.props.seatingIssueHisInfoUrl,
        type: "get",
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
          if (data.status > 0) {
            // console.log("aaaa");
            // console.log(data);
            var data = data.data;
            for (var i in data) {
              data[i]["key"] = data[i].id;
            }
            this.setState({
              recData: data
            });
          } else {
            recData: "";
          }
        }.bind(this),
        error: function error(data) {
          _modal2.default.error({
            title: '错误信息',
            content: data.message
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var filterData = new _Filters2.default().filter(this.state.recData);
      var columns = [{
        title: '序号',
        width: 50,
        fixed: 'left',
        render: function render(text, record, index) {
          return _react3.default.createElement(
            'span',
            null,
            ++index
          );
        }
      }, {
        title: '车牌号',
        dataIndex: 'cph',
        key: 'cph',
        filters: filterData.cph,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.cph, b.cph);
        },
        onFilter: function onFilter(value, record) {
          return record.cph.indexOf(value) === 0;
        }
      }, {
        title: '员工工号',
        dataIndex: 'employeeId',
        key: 'employeeId',
        filters: filterData.employeeId,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.employeeId, b.employeeId);
        },
        onFilter: function onFilter(value, record) {
          return record.employeeId.indexOf(value) === 0;
        }
      }, {
        title: '小座破损',
        dataIndex: 'xzps',
        key: 'xzps',
        filters: filterData.xzps,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.xzps, b.xzps);
        },
        onFilter: function onFilter(value, record) {
          return record.xzps.indexOf(value) === 0;
        }
      }, {
        title: '小座污渍',
        dataIndex: 'xzwz',
        key: 'xzwz',
        filters: filterData.xzwz,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.xzwz, b.xzwz);
        },
        onFilter: function onFilter(value, record) {
          return record.xzwz.indexOf(value) === 0;
        }
      }, {
        title: '大座破损',
        dataIndex: 'dzps',
        key: 'count',
        filters: filterData.dzps,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.dzps, b.dzps);
        },
        onFilter: function onFilter(value, record) {
          return record.dzps.indexOf(value) === 0;
        }
      }, {
        title: '大座污渍',
        dataIndex: 'dzwz',
        key: 'dzwz',
        filters: filterData.dzwz,
        sorter: function sorter(a, b) {
          return new _Sorter2.default().sort(a.dzwz, b.dzwz);
        },
        onFilter: function onFilter(value, record) {
          return record.count.indexOf(value) === 0;
        }
      }];
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(_table2.default, { key: this.key++, pagination: false, columns: columns, dataSource: this.state.recData })
      );
    }
  }]);

  return SeatingIssueHisInfo;
}(_react3.default.Component));

if (document.getElementById("seatingIssueHisInfo")) _reactDom2.default.render(_react3.default.createElement(SeatingIssueHisInfo, pageUrls), document.getElementById("seatingIssueHisInfo"));
exports.default = SeatingIssueHisInfo;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(17)))

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = __webpack_require__(52);

var _select = __webpack_require__(46);

var _select2 = _interopRequireDefault(_select);

var _css2 = __webpack_require__(29);

var _input = __webpack_require__(37);

var _input2 = _interopRequireDefault(_input);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(22);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(23);

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SelectInfo = __webpack_require__(92);

var _SelectInfo2 = _interopRequireDefault(_SelectInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CarNumber: {
        displayName: 'CarNumber'
    }
};

var _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'D:/react/newProject/components/util/carNumber.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'D:/react/newProject/components/util/carNumber.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _DReactNewProjectNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2(_DReactNewProjectNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
} /*
    组件功能：车牌号的组件
    引用时：<CarNumber {...pageUrls} errorMessage={this.errorMessage.bind(this)}  objCph={this.objCph.bind(this)} />
            函数：
            objCph(objCph){
                this.setState({objCph:objCph});
            }
            errorMessage(errorMessage){
                this.setState({errorMessage:errorMessage});
            }
  */


var InputGroup = _input2.default.Group;
var Option = _select2.default.Option;

var CarNumber = _wrapComponent('CarNumber')(function (_React$Component) {
    _inherits(CarNumber, _React$Component);

    function CarNumber(props) {
        _classCallCheck(this, CarNumber);

        var _this = _possibleConstructorReturn(this, (CarNumber.__proto__ || Object.getPrototypeOf(CarNumber)).call(this, props));

        _this.state = {
            recData: [], //后台请求回来的车牌号数组
            objCph: "" //车牌号单独的对象
        };
        _this.CphValue = ""; //后面的车牌号
        _this.cphId = ""; //车牌号ID
        _this.cphPrefix = "黑A"; //车牌号前缀
        return _this;
    }

    _createClass(CarNumber, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            $.ajax({
                type: "get",
                url: self.props.chepaihao,
                data: JSON.stringify(self.cphPrefix),
                dataType: 'json',
                contentType: 'application/json',
                success: function success(data) {
                    self.setState({
                        recData: data
                    });
                },
                error: function error(data) {
                    alert("失败");
                }
            });
        }
    }, {
        key: 'chepaihaoChange',
        value: function chepaihaoChange(value) {
            if (value) {
                this.cphPrefix = value;
            }
            if (!value) {
                this.cphPrefix = "黑A";
            }
            //console.log(value);    
        }
    }, {
        key: 'changeValue',
        value: function changeValue(value) {
            var objCph = this.cphPrefix + value;
            this.setState({
                objCph: objCph
            });
            this.props.objCph(objCph);
        }
    }, {
        key: 'selectInfoErrorMessage',
        value: function selectInfoErrorMessage(errorMessage) {
            this.setState({
                errorMessage: errorMessage
            });
            this.props.errorMessage(errorMessage);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                InputGroup,
                { compact: true, style: { width: '100%' } },
                _react3.default.createElement(
                    _select2.default,
                    { style: { width: '20%' }, defaultValue: '\u9ED1A', placeholder: '\u8F66\u724C\u5F52\u5C5E\u5730', onChange: this.chepaihaoChange.bind(this) },
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1A' },
                        '\u9ED1A'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1B' },
                        '\u9ED1B'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1C' },
                        '\u9ED1C'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1D' },
                        '\u9ED1D'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1E' },
                        '\u9ED1E'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1F' },
                        '\u9ED1F'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1G' },
                        '\u9ED1G'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1H' },
                        '\u9ED1H'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1J' },
                        '\u9ED1J'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1K' },
                        '\u9ED1K'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1L' },
                        '\u9ED1L'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1M' },
                        '\u9ED1M'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1N' },
                        '\u9ED1N'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1P' },
                        '\u9ED1P'
                    ),
                    _react3.default.createElement(
                        Option,
                        { value: '\u9ED1R' },
                        '\u9ED1R'
                    )
                ),
                _react3.default.createElement(_SelectInfo2.default, _extends({ selectInfoErrorMessage: this.selectInfoErrorMessage.bind(this), changeValue: this.changeValue.bind(this), style: { width: '50%', display: 'inlineBlock' }, recData: this.state.recData }, this.props))
            );
        }
    }]);

    return CarNumber;
}(_react3.default.Component));

exports.default = CarNumber;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(17)))

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(465);
__webpack_require__(464);
__webpack_require__(466);
__webpack_require__(467);

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable declaration-bang-space-before */\n/* stylelint-disable declaration-bang-space-before */\n.ant-switch {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  height: 22px;\n  min-width: 44px;\n  line-height: 20px;\n  vertical-align: middle;\n  border-radius: 20px;\n  border: 1px solid transparent;\n  background-color: rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  transition: all 0.36s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ant-switch-inner {\n  color: #fff;\n  font-size: 12px;\n  margin-left: 24px;\n  margin-right: 6px;\n  display: block;\n}\n.ant-switch:after {\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 1px;\n  top: 1px;\n  border-radius: 18px;\n  background-color: #fff;\n  content: \" \";\n  cursor: pointer;\n  transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.ant-switch:active:after {\n  width: 24px;\n}\n.ant-switch:focus {\n  box-shadow: 0 0 0 2px rgba(16, 142, 233, 0.2);\n  outline: 0;\n}\n.ant-switch:focus:hover {\n  box-shadow: none;\n}\n.ant-switch-small {\n  height: 14px;\n  min-width: 28px;\n  line-height: 12px;\n}\n.ant-switch-small .ant-switch-inner {\n  margin-left: 18px;\n  margin-right: 3px;\n}\n.ant-switch-small:after {\n  width: 12px;\n  height: 12px;\n  top: 0;\n  left: 0.5px;\n}\n.ant-switch-small:active:after {\n  width: 16px;\n}\n.ant-switch-small.ant-switch-checked:after {\n  left: 100%;\n  margin-left: -12.5px;\n}\n.ant-switch-small.ant-switch-checked .ant-switch-inner {\n  margin-left: 3px;\n  margin-right: 18px;\n}\n.ant-switch-small:active.ant-switch-checked:after {\n  margin-left: -16.5px;\n}\n.ant-switch-checked {\n  background-color: #108ee9;\n}\n.ant-switch-checked .ant-switch-inner {\n  margin-left: 6px;\n  margin-right: 24px;\n}\n.ant-switch-checked:after {\n  left: 100%;\n  margin-left: -19px;\n}\n.ant-switch-checked:active:after {\n  margin-left: -25px;\n}\n.ant-switch-disabled {\n  cursor: not-allowed;\n  background: #f4f4f4;\n}\n.ant-switch-disabled:after {\n  background: #ccc;\n  cursor: not-allowed;\n}\n.ant-switch-disabled .ant-switch-inner {\n  color: rgba(0, 0, 0, 0.25);\n}\n", ""]);

// exports


/***/ })

},[571]);