function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~branchs-components-branches-module~business-components-business-module~dashboard-components-~2c2af7d1"], {
  /***/
  "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js ***!
    \**********************************************************************************************/

  /*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY, ɵ0 */

  /***/
  function node_modulesSwimlaneNgxDatatable__ivy_ngcc__Fesm2015SwimlaneNgxDatatableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickType", function () {
      return ClickType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function () {
      return ColumnChangesService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnMode", function () {
      return ColumnMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContextmenuType", function () {
      return ContextmenuType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function () {
      return DataTableBodyCellComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function () {
      return DataTableBodyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function () {
      return DataTableBodyRowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function () {
      return DataTableColumnCellDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function () {
      return DataTableColumnCellTreeToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function () {
      return DataTableColumnDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function () {
      return DataTableColumnHeaderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function () {
      return DataTableFooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function () {
      return DataTableFooterTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function () {
      return DataTableHeaderCellComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function () {
      return DataTableHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function () {
      return DataTablePagerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function () {
      return DataTableRowWrapperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function () {
      return DataTableSelectionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function () {
      return DataTableSummaryRowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatatableComponent", function () {
      return DatatableComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function () {
      return DatatableFooterDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function () {
      return DatatableGroupHeaderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function () {
      return DatatableGroupHeaderTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function () {
      return DatatableRowDetailDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function () {
      return DatatableRowDetailTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function () {
      return DimensionsHelper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DraggableDirective", function () {
      return DraggableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Keys", function () {
      return Keys;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LongPressDirective", function () {
      return LongPressDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function () {
      return NgxDatatableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderableDirective", function () {
      return OrderableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
      return ProgressBarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function () {
      return ResizeableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RowHeightCache", function () {
      return RowHeightCache;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function () {
      return ScrollbarHelper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function () {
      return ScrollerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionType", function () {
      return SelectionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortDirection", function () {
      return SortDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortType", function () {
      return SortType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function () {
      return VisibilityDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function () {
      return adjustColumnWidths;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "camelCase", function () {
      return camelCase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function () {
      return columnGroupWidths;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function () {
      return columnTotalWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "columnsByPin", function () {
      return columnsByPin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function () {
      return columnsByPinArr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function () {
      return columnsTotalWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deCamelCase", function () {
      return deCamelCase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deepValueGetter", function () {
      return deepValueGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function () {
      return elementsFromPoint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function () {
      return emptyStringGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function () {
      return forceFillColumnWidths;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function () {
      return getTotalFlexGrow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function () {
      return getVendorPrefixedName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getterForProp", function () {
      return getterForProp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function () {
      return groupRowsByParents;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "id", function () {
      return id;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function () {
      return isNullOrUndefined;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nextSortDir", function () {
      return nextSortDir;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function () {
      return numericIndexGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function () {
      return optionalGetterForProp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "orderByComparator", function () {
      return orderByComparator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRows", function () {
      return selectRows;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function () {
      return selectRowsBetween;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function () {
      return setColumnDefaults;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function () {
      return shallowValueGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sortRows", function () {
      return sortRows;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throttle", function () {
      return throttle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throttleable", function () {
      return throttleable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateTemplates", function () {
      return translateTemplates;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateXY", function () {
      return translateXY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * Gets the width of the scrollbar.  Nesc for windows
     * http://stackoverflow.com/a/13382873/888165
     */


    var _c0 = ["*"];

    function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-progress");
      }
    }

    function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-summary-row", 9);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", ctx_r7.summaryHeight)("offsetX", ctx_r7.offsetX)("innerWidth", ctx_r7.innerWidth)("rows", ctx_r7.rows)("columns", ctx_r7.columns);
      }
    }

    function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-row", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r15.onTreeAction(group_r10);
        })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return _r4.onActivate($event, ctx_r18.indexes.first + i_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isSelected", _r4.getRowSelected(group_r10))("innerWidth", ctx_r12.innerWidth)("offsetX", ctx_r12.offsetX)("columns", ctx_r12.columns)("rowHeight", ctx_r12.getRowHeight(group_r10))("row", group_r10)("rowIndex", ctx_r12.getRowIndex(group_r10))("expanded", ctx_r12.getRowExpanded(group_r10))("rowClass", ctx_r12.rowClass)("displayCheck", ctx_r12.displayCheck)("treeStatus", group_r10 && group_r10.treeStatus);
      }
    }

    function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-row", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var i_r23 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return _r4.onActivate($event, i_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r22 = ctx.$implicit;

        var group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isSelected", _r4.getRowSelected(row_r22))("innerWidth", ctx_r21.innerWidth)("offsetX", ctx_r21.offsetX)("columns", ctx_r21.columns)("rowHeight", ctx_r21.getRowHeight(row_r22))("row", row_r22)("group", group_r10.value)("rowIndex", ctx_r21.getRowIndex(row_r22))("expanded", ctx_r21.getRowExpanded(row_r22))("rowClass", ctx_r21.rowClass);
      }
    }

    function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
      }

      if (rf & 2) {
        var group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r10.value)("ngForTrackBy", ctx_r14.rowTrackingFn);
      }
    }

    function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r28.rowContextmenu.emit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupedRows", ctx_r8.groupedRows)("innerWidth", ctx_r8.innerWidth)("ngStyle", ctx_r8.getRowsStyles(group_r10))("rowDetail", ctx_r8.rowDetail)("groupHeader", ctx_r8.groupHeader)("offsetX", ctx_r8.offsetX)("detailRowHeight", ctx_r8.getDetailRowHeight(group_r10 && group_r10[i_r11], i_r11))("row", group_r10)("expanded", ctx_r8.getRowExpanded(group_r10))("rowIndex", ctx_r8.getRowIndex(group_r10 && group_r10[i_r11]));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.groupedRows)("ngIfElse", _r13);
      }
    }

    function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-summary-row", 16);
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r9.getBottomSummaryRowStyles())("rowHeight", ctx_r9.summaryHeight)("offsetX", ctx_r9.offsetX)("innerWidth", ctx_r9.innerWidth)("rows", ctx_r9.rows)("columns", ctx_r9.columns);
      }
    }

    function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-scroller", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r30.onBodyScroll($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollbarV", ctx_r5.scrollbarV)("scrollbarH", ctx_r5.scrollbarH)("scrollHeight", ctx_r5.scrollHeight)("scrollWidth", ctx_r5.columnGroupWidths == null ? null : ctx_r5.columnGroupWidths.total);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.summaryRow && ctx_r5.summaryPosition === "top");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.temp)("ngForTrackBy", ctx_r5.rowTrackingFn);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.summaryRow && ctx_r5.summaryPosition === "bottom");
      }
    }

    function DataTableBodyComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 17);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r6.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-header-cell", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var column_r35 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r36.onColumnResized($event, column_r35);
        })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r38.onLongPressStart($event);
        })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r39.onLongPressEnd($event);
        })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r40.onSort($event);
        })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r41.select.emit($event);
        })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r42.columnContextmenu.emit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r35 = ctx.$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEnabled", column_r35.resizeable)("pressModel", column_r35)("pressEnabled", ctx_r34.reorderable && column_r35.draggable)("dragX", ctx_r34.reorderable && column_r35.draggable && column_r35.dragging)("dragY", false)("dragModel", column_r35)("dragEventTarget", ctx_r34.dragEventTarget)("headerHeight", ctx_r34.headerHeight)("isTarget", column_r35.isTarget)("targetMarkerTemplate", ctx_r34.targetMarkerTemplate)("targetMarkerContext", column_r35.targetMarkerContext)("column", column_r35)("sortType", ctx_r34.sortType)("sorts", ctx_r34.sorts)("selectionType", ctx_r34.selectionType)("sortAscendingIcon", ctx_r34.sortAscendingIcon)("sortDescendingIcon", ctx_r34.sortDescendingIcon)("allRowsSelected", ctx_r34.allRowsSelected);
      }
    }

    function DataTableHeaderComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 18, "datatable-header-cell", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var colGroup_r33 = ctx.$implicit;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("datatable-row-" + colGroup_r33.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r32._styleByGroup[colGroup_r33.type]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", colGroup_r33.columns)("ngForTrackBy", ctx_r32.columnTrackingFn);
      }
    }

    function DatatableComponent_datatable_header_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-header", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r45.onColumnSort($event);
        })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r47.onColumnResize($event);
        })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r48.onColumnReorder($event);
        })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r49.onHeaderSelect($event);
        })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r50.onColumnContextmenu($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sorts", ctx_r43.sorts)("sortType", ctx_r43.sortType)("scrollbarH", ctx_r43.scrollbarH)("innerWidth", ctx_r43._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 14, ctx_r43._offsetX))("dealsWithGroup", ctx_r43.groupedRows !== undefined)("columns", ctx_r43._internalColumns)("headerHeight", ctx_r43.headerHeight)("reorderable", ctx_r43.reorderable)("targetMarkerTemplate", ctx_r43.targetMarkerTemplate)("sortAscendingIcon", ctx_r43.cssClasses.sortAscending)("sortDescendingIcon", ctx_r43.cssClasses.sortDescending)("allRowsSelected", ctx_r43.allRowsSelected)("selectionType", ctx_r43.selectionType);
      }
    }

    function DatatableComponent_datatable_footer_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-footer", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r51.onFooterPage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowCount", ctx_r44.rowCount)("pageSize", ctx_r44.pageSize)("offset", ctx_r44.offset)("footerHeight", ctx_r44.footerHeight)("footerTemplate", ctx_r44.footer)("totalMessage", ctx_r44.messages.totalMessage)("pagerLeftArrowIcon", ctx_r44.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r44.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r44.cssClasses.pagerPrevious)("selectedCount", ctx_r44.selected.length)("selectedMessage", !!ctx_r44.selectionType && ctx_r44.messages.selectedMessage)("pagerNextIcon", ctx_r44.cssClasses.pagerNext);
      }
    }

    function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) {}

    function DataTableHeaderCellComponent_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r53.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r53.targetMarkerContext);
      }
    }

    function DataTableHeaderCellComponent_label_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r58.select.emit(!ctx_r58.allRowsSelected);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r54.allRowsSelected);
      }
    }

    function DataTableHeaderCellComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r60.onSort();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r55.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) {}

    function DataTableHeaderCellComponent_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
      }

      if (rf & 2) {
        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r56.column.headerTemplate)("ngTemplateOutletContext", ctx_r56.cellContext);
      }
    }

    function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) {}

    var _c1 = function _c1(a0, a1, a2, a3, a4) {
      return {
        rowCount: a0,
        pageSize: a1,
        selectedCount: a2,
        curPage: a3,
        offset: a4
      };
    };

    function DataTableFooterComponent_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r63.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c1, ctx_r63.rowCount, ctx_r63.pageSize, ctx_r63.selectedCount, ctx_r63.curPage, ctx_r63.offset));
      }
    }

    function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r67.selectedCount == null ? null : ctx_r67.selectedCount.toLocaleString(), " ", ctx_r67.selectedMessage, " / ");
      }
    }

    function DataTableFooterComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r64.selectedMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r64.rowCount == null ? null : ctx_r64.rowCount.toLocaleString(), " ", ctx_r64.totalMessage, " ");
      }
    }

    function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-pager", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r68.page.emit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r65.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r65.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r65.pagerPreviousIcon)("pagerNextIcon", ctx_r65.pagerNextIcon)("page", ctx_r65.curPage)("size", ctx_r65.pageSize)("count", ctx_r65.rowCount)("hidden", !ctx_r65.isVisible);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "selected-count": a0
      };
    };

    function DataTablePagerComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);

          var pg_r71 = ctx.$implicit;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r72.selectPage(pg_r71.number);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pg_r71 = ctx.$implicit;

        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", pg_r71.number === ctx_r70.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "page " + pg_r71.number);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pg_r71.text, " ");
      }
    }

    function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-cell", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r81);

          var ii_r79 = ctx.index;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r80.onActivate($event, ii_r79);
        })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r81);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r82.onTreeAction();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r78 = ctx.$implicit;

        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("row", ctx_r77.row)("group", ctx_r77.group)("expanded", ctx_r77.expanded)("isSelected", ctx_r77.isSelected)("rowIndex", ctx_r77.rowIndex)("column", column_r78)("rowHeight", ctx_r77.rowHeight)("displayCheck", ctx_r77.displayCheck)("treeStatus", ctx_r77.treeStatus);
      }
    }

    function DataTableBodyRowComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var colGroup_r75 = ctx.$implicit;

        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r75.type, " datatable-row-group");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r74._groupStyles[colGroup_r75.type]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", colGroup_r75.columns)("ngForTrackBy", ctx_r74.columnTrackingFn);
      }
    }

    function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) {}

    function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
      }

      if (rf & 2) {
        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r86.groupHeader.template)("ngTemplateOutletContext", ctx_r86.groupContext);
      }
    }

    function DataTableRowWrapperComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r83.getGroupHeaderStyle());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r83.groupHeader && ctx_r83.groupHeader.template);
      }
    }

    function DataTableRowWrapperComponent_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
      }
    }

    function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) {}

    function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
      }

      if (rf & 2) {
        var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r88.rowDetail.template)("ngTemplateOutletContext", ctx_r88.rowContext);
      }
    }

    function DataTableRowWrapperComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r85.detailRowHeight, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r85.rowDetail && ctx_r85.rowDetail.template);
      }
    }

    var _c3 = ["cellTemplate"];

    function DataTableBodyCellComponent_label_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r95);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r94.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r90.isSelected);
      }
    }

    function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 11);
      }
    }

    function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
      }
    }

    function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 13);
      }
    }

    function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r101.onTreeAction();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r96.treeStatus === "disabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r96.treeStatus === "loading");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r96.treeStatus === "collapsed");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r96.treeStatus === "expanded" || ctx_r96.treeStatus === "disabled");
      }
    }

    function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

    var _c4 = function _c4(a0) {
      return {
        cellContext: a0
      };
    };

    function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r97.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, ctx_r97.cellContext));
      }
    }

    function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r91.column.treeToggleTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r91.column.treeToggleTemplate);
      }
    }

    function DataTableBodyCellComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 15);
      }

      if (rf & 2) {
        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r92.sanitizedValue)("innerHTML", ctx_r92.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) {}

    function DataTableBodyCellComponent_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r93.column.cellTemplate)("ngTemplateOutletContext", ctx_r93.cellContext);
      }
    }

    function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-body-row", 1);
      }

      if (rf & 2) {
        var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerWidth", ctx_r106.innerWidth)("offsetX", ctx_r106.offsetX)("columns", ctx_r106._internalColumns)("rowHeight", ctx_r106.rowHeight)("row", ctx_r106.summaryRow)("rowIndex", 0 - 1);
      }
    }

    var ScrollbarHelper = /*#__PURE__*/function () {
      function ScrollbarHelper(document) {
        _classCallCheck(this, ScrollbarHelper);

        this.document = document;
        this.width = this.getWidth();
      }

      _createClass(ScrollbarHelper, [{
        key: "getWidth",
        value: function getWidth() {
          var outer = this.document.createElement('div');
          outer.style.visibility = 'hidden';
          outer.style.width = '100px';
          outer.style.msOverflowStyle = 'scrollbar';
          this.document.body.appendChild(outer);
          var widthNoScroll = outer.offsetWidth;
          outer.style.overflow = 'scroll';
          var inner = this.document.createElement('div');
          inner.style.width = '100%';
          outer.appendChild(inner);
          var widthWithScroll = inner.offsetWidth;
          outer.parentNode.removeChild(outer);
          return widthNoScroll - widthWithScroll;
        }
      }]);

      return ScrollbarHelper;
    }();

    ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) {
      return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
    };

    ScrollbarHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ScrollbarHelper,
      factory: ScrollbarHelper.ɵfac
    });

    ScrollbarHelper.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    ScrollbarHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], ScrollbarHelper);
    /**
     * Gets the width of the scrollbar.  Nesc for windows
     * http://stackoverflow.com/a/13382873/888165
     */

    var DimensionsHelper = /*#__PURE__*/function () {
      function DimensionsHelper() {
        _classCallCheck(this, DimensionsHelper);
      }

      _createClass(DimensionsHelper, [{
        key: "getDimensions",
        value: function getDimensions(element) {
          return element.getBoundingClientRect();
        }
      }]);

      return DimensionsHelper;
    }();

    DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) {
      return new (t || DimensionsHelper)();
    };

    DimensionsHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DimensionsHelper,
      factory: DimensionsHelper.ɵfac
    });
    /**
     * service to make DatatableComponent aware of changes to
     * input bindings of DataTableColumnDirective
     */

    var ColumnChangesService = /*#__PURE__*/function () {
      function ColumnChangesService() {
        _classCallCheck(this, ColumnChangesService);

        this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(ColumnChangesService, [{
        key: "columnInputChanges$",
        get: function get() {
          return this.columnInputChanges.asObservable();
        }
      }, {
        key: "onInputChange",
        value: function onInputChange() {
          this.columnInputChanges.next();
        }
      }]);

      return ColumnChangesService;
    }();

    ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) {
      return new (t || ColumnChangesService)();
    };

    ColumnChangesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ColumnChangesService,
      factory: ColumnChangesService.ɵfac
    });

    var DataTableFooterTemplateDirective = function DataTableFooterTemplateDirective(template) {
      _classCallCheck(this, DataTableFooterTemplateDirective);

      this.template = template;
    };

    DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) {
      return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
    };

    DataTableFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DataTableFooterTemplateDirective,
      selectors: [["", "ngx-datatable-footer-template", ""]]
    });

    DataTableFooterTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };
    /**
     * Visibility Observer Directive
     *
     * Usage:
     *
     * 		<div
     * 			visibilityObserver
     * 			(visible)="onVisible($event)">
     * 		</div>
     *
     */


    var VisibilityDirective = /*#__PURE__*/function () {
      function VisibilityDirective(element, zone) {
        _classCallCheck(this, VisibilityDirective);

        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(VisibilityDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.runCheck();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearTimeout(this.timeout);
        }
      }, {
        key: "onVisibilityChange",
        value: function onVisibilityChange() {
          var _this = this;

          // trigger zone recalc for columns
          this.zone.run(function () {
            _this.isVisible = true;

            _this.visible.emit(true);
          });
        }
      }, {
        key: "runCheck",
        value: function runCheck() {
          var _this2 = this;

          var check = function check() {
            // https://davidwalsh.name/offsetheight-visibility
            var _this2$element$native = _this2.element.nativeElement,
                offsetHeight = _this2$element$native.offsetHeight,
                offsetWidth = _this2$element$native.offsetWidth;

            if (offsetHeight && offsetWidth) {
              clearTimeout(_this2.timeout);

              _this2.onVisibilityChange();
            } else {
              clearTimeout(_this2.timeout);

              _this2.zone.runOutsideAngular(function () {
                _this2.timeout = setTimeout(function () {
                  return check();
                }, 50);
              });
            }
          };

          this.timeout = setTimeout(function () {
            return check();
          });
        }
      }]);

      return VisibilityDirective;
    }();

    VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) {
      return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    VisibilityDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: VisibilityDirective,
      selectors: [["", "visibilityObserver", ""]],
      hostVars: 2,
      hostBindings: function VisibilityDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.isVisible);
        }
      },
      outputs: {
        visible: "visible"
      }
    });

    VisibilityDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.visible')], VisibilityDirective.prototype, "isVisible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], VisibilityDirective.prototype, "visible", void 0);
    /**
     * Draggable Directive for Angular2
     *
     * Inspiration:
     *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
     *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
     *
     */

    var DraggableDirective = /*#__PURE__*/function () {
      function DraggableDirective(element) {
        _classCallCheck(this, DraggableDirective);

        this.dragX = true;
        this.dragY = true;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDragging = false;
        this.element = element.nativeElement;
      }

      _createClass(DraggableDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubscription();
        }
      }, {
        key: "onMouseup",
        value: function onMouseup(event) {
          if (!this.isDragging) return;
          this.isDragging = false;
          this.element.classList.remove('dragging');

          if (this.subscription) {
            this._destroySubscription();

            this.dragEnd.emit({
              event: event,
              element: this.element,
              model: this.dragModel
            });
          }
        }
      }, {
        key: "onMousedown",
        value: function onMousedown(event) {
          var _this3 = this;

          // we only want to drag the inner header text
          var isDragElm = event.target.classList.contains('draggable');

          if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            var mouseDownPos = {
              x: event.clientX,
              y: event.clientY
            };
            var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe(function (ev) {
              return _this3.onMouseup(ev);
            });
            var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup)).subscribe(function (ev) {
              return _this3.move(ev, mouseDownPos);
            });
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
              event: event,
              element: this.element,
              model: this.dragModel
            });
          }
        }
      }, {
        key: "move",
        value: function move(event, mouseDownPos) {
          if (!this.isDragging) return;
          var x = event.clientX - mouseDownPos.x;
          var y = event.clientY - mouseDownPos.y;
          if (this.dragX) this.element.style.left = "".concat(x, "px");
          if (this.dragY) this.element.style.top = "".concat(y, "px");
          this.element.classList.add('dragging');
          this.dragging.emit({
            event: event,
            element: this.element,
            model: this.dragModel
          });
        }
      }, {
        key: "_destroySubscription",
        value: function _destroySubscription() {
          if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
          }
        }
      }]);

      return DraggableDirective;
    }();

    DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
      return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DraggableDirective,
      selectors: [["", "draggable", ""]],
      inputs: {
        dragX: "dragX",
        dragY: "dragY",
        dragEventTarget: "dragEventTarget",
        dragModel: "dragModel"
      },
      outputs: {
        dragStart: "dragStart",
        dragging: "dragging",
        dragEnd: "dragEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    DraggableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DraggableDirective.prototype, "dragEventTarget", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DraggableDirective.prototype, "dragModel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DraggableDirective.prototype, "dragX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DraggableDirective.prototype, "dragY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DraggableDirective.prototype, "dragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DraggableDirective.prototype, "dragging", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DraggableDirective.prototype, "dragEnd", void 0);

    var ResizeableDirective = /*#__PURE__*/function () {
      function ResizeableDirective(element, renderer) {
        _classCallCheck(this, ResizeableDirective);

        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resizing = false;
        this.element = element.nativeElement;
      }

      _createClass(ResizeableDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var renderer2 = this.renderer;
          this.resizeHandle = renderer2.createElement('span');

          if (this.resizeEnabled) {
            renderer2.addClass(this.resizeHandle, 'resize-handle');
          } else {
            renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
          }

          renderer2.appendChild(this.element, this.resizeHandle);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubscription();

          if (this.renderer.destroyNode) {
            this.renderer.destroyNode(this.resizeHandle);
          } else if (this.resizeHandle) {
            this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
          }
        }
      }, {
        key: "onMouseup",
        value: function onMouseup() {
          this.resizing = false;

          if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();

            this.resize.emit(this.element.clientWidth);
          }
        }
      }, {
        key: "onMousedown",
        value: function onMousedown(event) {
          var _this4 = this;

          var isHandle = event.target.classList.contains('resize-handle');
          var initialWidth = this.element.clientWidth;
          var mouseDownScreenX = event.screenX;

          if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe(function (ev) {
              return _this4.onMouseup();
            });
            var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup)).subscribe(function (e) {
              return _this4.move(e, initialWidth, mouseDownScreenX);
            });
            this.subscription.add(mouseMoveSub);
          }
        }
      }, {
        key: "move",
        value: function move(event, initialWidth, mouseDownScreenX) {
          var movementX = event.screenX - mouseDownScreenX;
          var newWidth = initialWidth + movementX;
          var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
          var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;

          if (overMinWidth && underMaxWidth) {
            this.element.style.width = "".concat(newWidth, "px");
          }
        }
      }, {
        key: "_destroySubscription",
        value: function _destroySubscription() {
          if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
          }
        }
      }]);

      return ResizeableDirective;
    }();

    ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) {
      return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    ResizeableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: ResizeableDirective,
      selectors: [["", "resizeable", ""]],
      hostVars: 2,
      hostBindings: function ResizeableDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) {
            return ctx.onMousedown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
        }
      },
      inputs: {
        resizeEnabled: "resizeEnabled",
        minWidth: "minWidth",
        maxWidth: "maxWidth"
      },
      outputs: {
        resize: "resize"
      }
    });

    ResizeableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResizeableDirective.prototype, "resizeEnabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResizeableDirective.prototype, "minWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResizeableDirective.prototype, "maxWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ResizeableDirective.prototype, "resize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])], ResizeableDirective.prototype, "onMousedown", null);

    var OrderableDirective = /*#__PURE__*/function () {
      function OrderableDirective(differs, document) {
        _classCallCheck(this, OrderableDirective);

        this.document = document;
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.differ = differs.find({}).create();
      }

      _createClass(OrderableDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          // HACK: Investigate Better Way
          this.updateSubscriptions();
          this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.draggables.forEach(function (d) {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
          });
        }
      }, {
        key: "updateSubscriptions",
        value: function updateSubscriptions() {
          var _this5 = this;

          var diffs = this.differ.diff(this.createMapDiffs());

          if (diffs) {
            var subscribe = function subscribe(_ref) {
              var currentValue = _ref.currentValue,
                  previousValue = _ref.previousValue;
              unsubscribe({
                previousValue: previousValue
              });

              if (currentValue) {
                currentValue.dragStart.subscribe(_this5.onDragStart.bind(_this5));
                currentValue.dragging.subscribe(_this5.onDragging.bind(_this5));
                currentValue.dragEnd.subscribe(_this5.onDragEnd.bind(_this5));
              }
            };

            var unsubscribe = function unsubscribe(_ref2) {
              var previousValue = _ref2.previousValue;

              if (previousValue) {
                previousValue.dragStart.unsubscribe();
                previousValue.dragging.unsubscribe();
                previousValue.dragEnd.unsubscribe();
              }
            };

            diffs.forEachAddedItem(subscribe); // diffs.forEachChangedItem(subscribe.bind(this));

            diffs.forEachRemovedItem(unsubscribe);
          }
        }
      }, {
        key: "onDragStart",
        value: function onDragStart() {
          this.positions = {};
          var i = 0;

          var _iterator = _createForOfIteratorHelper(this.draggables.toArray()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var dragger = _step.value;
              var elm = dragger.element;
              var left = parseInt(elm.offsetLeft.toString(), 0);
              this.positions[dragger.dragModel.prop] = {
                left: left,
                right: left + parseInt(elm.offsetWidth.toString(), 0),
                index: i++,
                element: elm
              };
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "onDragging",
        value: function onDragging(_ref3) {
          var element = _ref3.element,
              model = _ref3.model,
              event = _ref3.event;
          var prevPos = this.positions[model.prop];
          var target = this.isTarget(model, event);

          if (target) {
            if (this.lastDraggingIndex !== target.i) {
              this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                newIndex: target.i,
                initialIndex: prevPos.index
              });
              this.lastDraggingIndex = target.i;
            }
          } else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
              prevIndex: this.lastDraggingIndex,
              initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
          }
        }
      }, {
        key: "onDragEnd",
        value: function onDragEnd(_ref4) {
          var element = _ref4.element,
              model = _ref4.model,
              event = _ref4.event;
          var prevPos = this.positions[model.prop];
          var target = this.isTarget(model, event);

          if (target) {
            this.reorder.emit({
              prevIndex: prevPos.index,
              newIndex: target.i,
              model: model
            });
          }

          this.lastDraggingIndex = undefined;
          element.style.left = 'auto';
        }
      }, {
        key: "isTarget",
        value: function isTarget(model, event) {
          var _this6 = this;

          var i = 0;
          var x = event.x || event.clientX;
          var y = event.y || event.clientY;
          var targets = this.document.elementsFromPoint(x, y);

          var _loop = function _loop(prop) {
            // current column position which throws event.
            var pos = _this6.positions[prop]; // since we drag the inner span, we need to find it in the elements at the cursor

            if (model.prop !== prop && targets.find(function (el) {
              return el === pos.element;
            })) {
              return {
                v: {
                  pos: pos,
                  i: i
                }
              };
            }

            i++;
          };

          for (var prop in this.positions) {
            var _ret = _loop(prop);

            if (typeof _ret === "object") return _ret.v;
          }
        }
      }, {
        key: "createMapDiffs",
        value: function createMapDiffs() {
          return this.draggables.toArray().reduce(function (acc, curr) {
            acc[curr.dragModel.$$id] = curr;
            return acc;
          }, {});
        }
      }]);

      return OrderableDirective;
    }();

    OrderableDirective.ɵfac = function OrderableDirective_Factory(t) {
      return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
    };

    OrderableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: OrderableDirective,
      selectors: [["", "orderable", ""]],
      contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DraggableDirective, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
        }
      },
      outputs: {
        reorder: "reorder",
        targetChanged: "targetChanged"
      }
    });

    OrderableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], OrderableDirective.prototype, "reorder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], OrderableDirective.prototype, "targetChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(DraggableDirective, {
      descendants: true
    })], OrderableDirective.prototype, "draggables", void 0);
    OrderableDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], OrderableDirective);

    var LongPressDirective = /*#__PURE__*/function () {
      function LongPressDirective() {
        _classCallCheck(this, LongPressDirective);

        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseX = 0;
        this.mouseY = 0;
      }

      _createClass(LongPressDirective, [{
        key: "press",
        get: function get() {
          return this.pressing;
        }
      }, {
        key: "isLongPress",
        get: function get() {
          return this.isLongPressing;
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          var _this7 = this;

          // don't do right/middle clicks
          if (event.which !== 1 || !this.pressEnabled) return; // don't start drag if its on resize handle

          var target = event.target;
          if (target.classList.contains('resize-handle')) return;
          this.mouseX = event.clientX;
          this.mouseY = event.clientY;
          this.pressing = true;
          this.isLongPressing = false;
          var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
          this.subscription = mouseup.subscribe(function (ev) {
            return _this7.onMouseup();
          });
          this.timeout = setTimeout(function () {
            _this7.isLongPressing = true;

            _this7.longPressStart.emit({
              event: event,
              model: _this7.pressModel
            });

            _this7.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup)).subscribe(function (mouseEvent) {
              return _this7.onMouseMove(mouseEvent);
            }));

            _this7.loop(event);
          }, this.duration);
          this.loop(event);
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove(event) {
          if (this.pressing && !this.isLongPressing) {
            var xThres = Math.abs(event.clientX - this.mouseX) > 10;
            var yThres = Math.abs(event.clientY - this.mouseY) > 10;

            if (xThres || yThres) {
              this.endPress();
            }
          }
        }
      }, {
        key: "loop",
        value: function loop(event) {
          var _this8 = this;

          if (this.isLongPressing) {
            this.timeout = setTimeout(function () {
              _this8.longPressing.emit({
                event: event,
                model: _this8.pressModel
              });

              _this8.loop(event);
            }, 50);
          }
        }
      }, {
        key: "endPress",
        value: function endPress() {
          clearTimeout(this.timeout);
          this.isLongPressing = false;
          this.pressing = false;

          this._destroySubscription();

          this.longPressEnd.emit({
            model: this.pressModel
          });
        }
      }, {
        key: "onMouseup",
        value: function onMouseup() {
          this.endPress();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubscription();
        }
      }, {
        key: "_destroySubscription",
        value: function _destroySubscription() {
          if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
          }
        }
      }]);

      return LongPressDirective;
    }();

    LongPressDirective.ɵfac = function LongPressDirective_Factory(t) {
      return new (t || LongPressDirective)();
    };

    LongPressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: LongPressDirective,
      selectors: [["", "long-press", ""]],
      hostVars: 4,
      hostBindings: function LongPressDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) {
            return ctx.onMouseDown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
        }
      },
      inputs: {
        pressEnabled: "pressEnabled",
        duration: "duration",
        pressModel: "pressModel"
      },
      outputs: {
        longPressStart: "longPressStart",
        longPressing: "longPressing",
        longPressEnd: "longPressEnd"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LongPressDirective.prototype, "pressEnabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LongPressDirective.prototype, "pressModel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LongPressDirective.prototype, "duration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LongPressDirective.prototype, "longPressStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LongPressDirective.prototype, "longPressing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LongPressDirective.prototype, "longPressEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.press')], LongPressDirective.prototype, "press", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.longpress')], LongPressDirective.prototype, "isLongPress", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])], LongPressDirective.prototype, "onMouseDown", null);

    var ScrollerComponent = /*#__PURE__*/function () {
      function ScrollerComponent(ngZone, element, renderer) {
        _classCallCheck(this, ScrollerComponent);

        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
      }

      _createClass(ScrollerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // manual bind so we don't always listen
          if (this.scrollbarV || this.scrollbarH) {
            var renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
          }
        }
      }, {
        key: "setOffset",
        value: function setOffset(offsetY) {
          if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
          }
        }
      }, {
        key: "onScrolled",
        value: function onScrolled(event) {
          var _this9 = this;

          var dom = event.currentTarget;
          requestAnimationFrame(function () {
            _this9.scrollYPos = dom.scrollTop;
            _this9.scrollXPos = dom.scrollLeft;

            _this9.updateOffset();
          });
        }
      }, {
        key: "updateOffset",
        value: function updateOffset() {
          var direction;

          if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
          } else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
          }

          this.scroll.emit({
            direction: direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
          });
          this.prevScrollYPos = this.scrollYPos;
          this.prevScrollXPos = this.scrollXPos;
        }
      }]);

      return ScrollerComponent;
    }();

    ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
      return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    ScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ScrollerComponent,
      selectors: [["datatable-scroller"]],
      hostAttrs: [1, "datatable-scroll"],
      hostVars: 4,
      hostBindings: function ScrollerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
        }
      },
      inputs: {
        scrollbarV: "scrollbarV",
        scrollbarH: "scrollbarH",
        scrollHeight: "scrollHeight",
        scrollWidth: "scrollWidth"
      },
      outputs: {
        scroll: "scroll"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ScrollerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });

    ScrollerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScrollerComponent.prototype, "scrollbarV", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScrollerComponent.prototype, "scrollbarH", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScrollerComponent.prototype, "scrollHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScrollerComponent.prototype, "scrollWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ScrollerComponent.prototype, "scroll", void 0);

    var DatatableGroupHeaderTemplateDirective = function DatatableGroupHeaderTemplateDirective(template) {
      _classCallCheck(this, DatatableGroupHeaderTemplateDirective);

      this.template = template;
    };

    DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) {
      return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
    };

    DatatableGroupHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DatatableGroupHeaderTemplateDirective,
      selectors: [["", "ngx-datatable-group-header-template", ""]]
    });

    DatatableGroupHeaderTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };

    var DatatableGroupHeaderDirective = /*#__PURE__*/function () {
      function DatatableGroupHeaderDirective() {
        _classCallCheck(this, DatatableGroupHeaderDirective);

        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */

        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(DatatableGroupHeaderDirective, [{
        key: "template",
        get: function get() {
          return this._templateInput || this._templateQuery;
        }
        /**
         * Toggle the expansion of a group
         */

      }, {
        key: "toggleExpandGroup",
        value: function toggleExpandGroup(group) {
          this.toggle.emit({
            type: 'group',
            value: group
          });
        }
        /**
         * Expand all groups
         */

      }, {
        key: "expandAllGroups",
        value: function expandAllGroups() {
          this.toggle.emit({
            type: 'all',
            value: true
          });
        }
        /**
         * Collapse all groups
         */

      }, {
        key: "collapseAllGroups",
        value: function collapseAllGroups() {
          this.toggle.emit({
            type: 'all',
            value: false
          });
        }
      }]);

      return DatatableGroupHeaderDirective;
    }();

    DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) {
      return new (t || DatatableGroupHeaderDirective)();
    };

    DatatableGroupHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DatatableGroupHeaderDirective,
      selectors: [["ngx-datatable-group-header"]],
      contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
        }
      },
      inputs: {
        rowHeight: "rowHeight",
        _templateInput: ["template", "_templateInput"]
      },
      outputs: {
        toggle: "toggle"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableGroupHeaderDirective.prototype, "rowHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template')], DatatableGroupHeaderDirective.prototype, "_templateInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableGroupHeaderTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
      "static": true
    })], DatatableGroupHeaderDirective.prototype, "_templateQuery", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableGroupHeaderDirective.prototype, "toggle", void 0);
    /**
     * Always returns the empty string ''
     */

    function emptyStringGetter() {
      return '';
    }
    /**
     * Returns the appropriate getter function for this kind of prop.
     * If prop == null, returns the emptyStringGetter.
     */


    function getterForProp(prop) {
      if (prop == null) {
        return emptyStringGetter;
      }

      if (typeof prop === 'number') {
        return numericIndexGetter;
      } else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
          return deepValueGetter;
        } else {
          return shallowValueGetter;
        }
      }
    }
    /**
     * Returns the value at this numeric index.
     * @param row array of values
     * @param index numeric index
     * @returns any or '' if invalid index
     */


    function numericIndexGetter(row, index) {
      if (row == null) {
        return '';
      } // mimic behavior of deepValueGetter


      if (!row || index == null) {
        return row;
      }

      var value = row[index];

      if (value == null) {
        return '';
      }

      return value;
    }
    /**
     * Returns the value of a field.
     * (more efficient than deepValueGetter)
     * @param obj object containing the field
     * @param fieldName field name string
     */


    function shallowValueGetter(obj, fieldName) {
      if (obj == null) {
        return '';
      }

      if (!obj || !fieldName) {
        return obj;
      }

      var value = obj[fieldName];

      if (value == null) {
        return '';
      }

      return value;
    }
    /**
     * Returns a deep object given a string. zoo['animal.type']
     */


    function deepValueGetter(obj, path) {
      if (obj == null) {
        return '';
      }

      if (!obj || !path) {
        return obj;
      } // check if path matches a root-level field
      // { "a.b.c": 123 }


      var current = obj[path];

      if (current !== undefined) {
        return current;
      }

      current = obj;
      var split = path.split('.');

      if (split.length) {
        for (var i = 0; i < split.length; i++) {
          current = current[split[i]]; // if found undefined, return empty string

          if (current === undefined || current === null) {
            return '';
          }
        }
      }

      return current;
    }

    function optionalGetterForProp(prop) {
      return prop && function (row) {
        return getterForProp(prop)(row, prop);
      };
    }
    /**
     * This functions rearrange items by their parents
     * Also sets the level value to each of the items
     *
     * Note: Expecting each item has a property called parentId
     * Note: This algorithm will fail if a list has two or more items with same ID
     * NOTE: This algorithm will fail if there is a deadlock of relationship
     *
     * For example,
     *
     * Input
     *
     * id -> parent
     * 1  -> 0
     * 2  -> 0
     * 3  -> 1
     * 4  -> 1
     * 5  -> 2
     * 7  -> 8
     * 6  -> 3
     *
     *
     * Output
     * id -> level
     * 1      -> 0
     * --3    -> 1
     * ----6  -> 2
     * --4    -> 1
     * 2      -> 0
     * --5    -> 1
     * 7     -> 8
     *
     *
     * @param rows
     *
     */


    function groupRowsByParents(rows, from, to) {
      if (from && to) {
        var nodeById = {};
        var l = rows.length;
        var node = null;
        nodeById[0] = new TreeNode(); // that's the root node

        var uniqIDs = rows.reduce(function (arr, item) {
          var toValue = to(item);

          if (arr.indexOf(toValue) === -1) {
            arr.push(toValue);
          }

          return arr;
        }, []);

        for (var i = 0; i < l; i++) {
          // make TreeNode objects for each item
          nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }

        for (var _i = 0; _i < l; _i++) {
          // link all TreeNode objects
          node = nodeById[to(rows[_i])];
          var parent = 0;
          var fromValue = from(node.row);

          if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
            parent = fromValue;
          }

          node.parent = nodeById[parent];
          node.row['level'] = node.parent.row['level'] + 1;
          node.parent.children.push(node);
        }

        var resolvedRows = [];
        nodeById[0].flatten(function () {
          resolvedRows = [].concat(_toConsumableArray(resolvedRows), [this.row]);
        }, true);
        return resolvedRows;
      } else {
        return rows;
      }
    }

    var TreeNode = /*#__PURE__*/function () {
      function TreeNode() {
        var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, TreeNode);

        if (!row) {
          row = {
            level: -1,
            treeStatus: 'expanded'
          };
        }

        this.row = row;
        this.parent = null;
        this.children = [];
      }

      _createClass(TreeNode, [{
        key: "flatten",
        value: function flatten(f, recursive) {
          if (this.row['treeStatus'] === 'expanded') {
            for (var i = 0, l = this.children.length; i < l; i++) {
              var child = this.children[i];
              f.apply(child, Array.prototype.slice.call(arguments, 2));
              if (recursive) child.flatten.apply(child, arguments);
            }
          }
        }
      }]);

      return TreeNode;
    }();
    /**
     * Converts strings from something to camel case
     * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
     */


    function camelCase(str) {
      // Replace special characters with a space
      str = str.replace(/[^a-zA-Z0-9 ]/g, ' '); // put a space before an uppercase letter

      str = str.replace(/([a-z](?=[A-Z]))/g, '$1 '); // Lower case first character and some other stuff

      str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase(); // uppercase characters preceded by a space or number

      str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
        return b.trim() + c.toUpperCase();
      });
      return str;
    }
    /**
     * Converts strings from camel case to words
     * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
     */


    function deCamelCase(str) {
      return str.replace(/([A-Z])/g, function (match) {
        return " ".concat(match);
      }).replace(/^./, function (match) {
        return match.toUpperCase();
      });
    }
    /**
     * Creates a unique object id.
     * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
     */


    function id() {
      return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
    }
    /**
     * Sets the column defaults
     */


    function setColumnDefaults(columns) {
      if (!columns) return; // Only one column should hold the tree view
      // Thus if multiple columns are provided with
      // isTreeColumn as true we take only the first one

      var treeColumnFound = false;

      var _iterator2 = _createForOfIteratorHelper(columns),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var column = _step2.value;

          if (!column.$$id) {
            column.$$id = id();
          } // prop can be numeric; zero is valid not a missing prop
          // translate name => prop


          if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camelCase(column.name);
          }

          if (!column.$$valueGetter) {
            column.$$valueGetter = getterForProp(column.prop);
          } // format props if no name passed


          if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = deCamelCase(String(column.prop));
          }

          if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
          }

          if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
          }

          if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
          }

          if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
          }

          if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
          }

          if (!column.hasOwnProperty('width')) {
            column.width = 150;
          }

          if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
          } else {
            if (column.isTreeColumn && !treeColumnFound) {
              // If the first column with isTreeColumn is true found
              // we mark that treeCoulmn is found
              treeColumnFound = true;
            } else {
              // After that isTreeColumn property for any other column
              // will be set as false
              column.isTreeColumn = false;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    function isNullOrUndefined(value) {
      return value === null || value === undefined;
    }
    /**
     * Translates templates definitions to objects
     */


    function translateTemplates(templates) {
      var result = [];

      var _iterator3 = _createForOfIteratorHelper(templates),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var temp = _step3.value;
          var col = {};
          var props = Object.getOwnPropertyNames(temp);

          var _iterator4 = _createForOfIteratorHelper(props),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var prop = _step4.value;
              col[prop] = temp[prop];
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
          }

          if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
          }

          if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
          }

          if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
          }

          result.push(col);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return result;
    }

    var ColumnMode;

    (function (ColumnMode) {
      ColumnMode["standard"] = "standard";
      ColumnMode["flex"] = "flex";
      ColumnMode["force"] = "force";
    })(ColumnMode || (ColumnMode = {}));

    var SelectionType;

    (function (SelectionType) {
      SelectionType["single"] = "single";
      SelectionType["multi"] = "multi";
      SelectionType["multiClick"] = "multiClick";
      SelectionType["cell"] = "cell";
      SelectionType["checkbox"] = "checkbox";
    })(SelectionType || (SelectionType = {}));

    var SortType;

    (function (SortType) {
      SortType["single"] = "single";
      SortType["multi"] = "multi";
    })(SortType || (SortType = {}));

    var ContextmenuType;

    (function (ContextmenuType) {
      ContextmenuType["header"] = "header";
      ContextmenuType["body"] = "body";
    })(ContextmenuType || (ContextmenuType = {}));

    var DataTableColumnHeaderDirective = function DataTableColumnHeaderDirective(template) {
      _classCallCheck(this, DataTableColumnHeaderDirective);

      this.template = template;
    };

    DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) {
      return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
    };

    DataTableColumnHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DataTableColumnHeaderDirective,
      selectors: [["", "ngx-datatable-header-template", ""]]
    });

    DataTableColumnHeaderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };

    var DataTableColumnCellDirective = function DataTableColumnCellDirective(template) {
      _classCallCheck(this, DataTableColumnCellDirective);

      this.template = template;
    };

    DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) {
      return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
    };

    DataTableColumnCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DataTableColumnCellDirective,
      selectors: [["", "ngx-datatable-cell-template", ""]]
    });

    DataTableColumnCellDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };

    var DataTableColumnCellTreeToggle = function DataTableColumnCellTreeToggle(template) {
      _classCallCheck(this, DataTableColumnCellTreeToggle);

      this.template = template;
    };

    DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) {
      return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
    };

    DataTableColumnCellTreeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DataTableColumnCellTreeToggle,
      selectors: [["", "ngx-datatable-tree-toggle", ""]]
    });

    DataTableColumnCellTreeToggle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };

    var DataTableColumnDirective = /*#__PURE__*/function () {
      function DataTableColumnDirective(columnChangesService) {
        _classCallCheck(this, DataTableColumnDirective);

        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
      }

      _createClass(DataTableColumnDirective, [{
        key: "cellTemplate",
        get: function get() {
          return this._cellTemplateInput || this._cellTemplateQuery;
        }
      }, {
        key: "headerTemplate",
        get: function get() {
          return this._headerTemplateInput || this._headerTemplateQuery;
        }
      }, {
        key: "treeToggleTemplate",
        get: function get() {
          return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.isFirstChange) {
            this.isFirstChange = false;
          } else {
            this.columnChangesService.onInputChange();
          }
        }
      }]);

      return DataTableColumnDirective;
    }();

    DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) {
      return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ColumnChangesService));
    };

    DataTableColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DataTableColumnDirective,
      selectors: [["ngx-datatable-column"]],
      contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnHeaderDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellTreeToggle, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
        }
      },
      inputs: {
        name: "name",
        prop: "prop",
        frozenLeft: "frozenLeft",
        frozenRight: "frozenRight",
        flexGrow: "flexGrow",
        resizeable: "resizeable",
        comparator: "comparator",
        pipe: "pipe",
        sortable: "sortable",
        draggable: "draggable",
        canAutoResize: "canAutoResize",
        minWidth: "minWidth",
        width: "width",
        maxWidth: "maxWidth",
        checkboxable: "checkboxable",
        headerCheckboxable: "headerCheckboxable",
        headerClass: "headerClass",
        cellClass: "cellClass",
        isTreeColumn: "isTreeColumn",
        treeLevelIndent: "treeLevelIndent",
        summaryFunc: "summaryFunc",
        summaryTemplate: "summaryTemplate",
        _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"],
        _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"],
        _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    DataTableColumnDirective.ctorParameters = function () {
      return [{
        type: ColumnChangesService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "prop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "frozenLeft", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "frozenRight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "flexGrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "resizeable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "comparator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "pipe", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "sortable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "canAutoResize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "minWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "maxWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "checkboxable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "headerCheckboxable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "headerClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "cellClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "isTreeColumn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "treeLevelIndent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "summaryFunc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "summaryTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cellTemplate')], DataTableColumnDirective.prototype, "_cellTemplateInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableColumnCellDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
      "static": true
    })], DataTableColumnDirective.prototype, "_cellTemplateQuery", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('headerTemplate')], DataTableColumnDirective.prototype, "_headerTemplateInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableColumnHeaderDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
      "static": true
    })], DataTableColumnDirective.prototype, "_headerTemplateQuery", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('treeToggleTemplate')], DataTableColumnDirective.prototype, "_treeToggleTemplateInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableColumnCellTreeToggle, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
      "static": true
    })], DataTableColumnDirective.prototype, "_treeToggleTemplateQuery", void 0);

    var DatatableRowDetailTemplateDirective = function DatatableRowDetailTemplateDirective(template) {
      _classCallCheck(this, DatatableRowDetailTemplateDirective);

      this.template = template;
    };

    DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) {
      return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
    };

    DatatableRowDetailTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DatatableRowDetailTemplateDirective,
      selectors: [["", "ngx-datatable-row-detail-template", ""]]
    });

    DatatableRowDetailTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };

    var DatatableRowDetailDirective = /*#__PURE__*/function () {
      function DatatableRowDetailDirective() {
        _classCallCheck(this, DatatableRowDetailDirective);

        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */

        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(DatatableRowDetailDirective, [{
        key: "template",
        get: function get() {
          return this._templateInput || this._templateQuery;
        }
        /**
         * Toggle the expansion of the row
         */

      }, {
        key: "toggleExpandRow",
        value: function toggleExpandRow(row) {
          this.toggle.emit({
            type: 'row',
            value: row
          });
        }
        /**
         * API method to expand all the rows.
         */

      }, {
        key: "expandAllRows",
        value: function expandAllRows() {
          this.toggle.emit({
            type: 'all',
            value: true
          });
        }
        /**
         * API method to collapse all the rows.
         */

      }, {
        key: "collapseAllRows",
        value: function collapseAllRows() {
          this.toggle.emit({
            type: 'all',
            value: false
          });
        }
      }]);

      return DatatableRowDetailDirective;
    }();

    DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) {
      return new (t || DatatableRowDetailDirective)();
    };

    DatatableRowDetailDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DatatableRowDetailDirective,
      selectors: [["ngx-datatable-row-detail"]],
      contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DatatableRowDetailTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
        }
      },
      inputs: {
        rowHeight: "rowHeight",
        _templateInput: ["template", "_templateInput"]
      },
      outputs: {
        toggle: "toggle"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableRowDetailDirective.prototype, "rowHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template')], DatatableRowDetailDirective.prototype, "_templateInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableRowDetailTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
      "static": true
    })], DatatableRowDetailDirective.prototype, "_templateQuery", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableRowDetailDirective.prototype, "toggle", void 0);

    var DatatableFooterDirective = /*#__PURE__*/function () {
      function DatatableFooterDirective() {
        _classCallCheck(this, DatatableFooterDirective);
      }

      _createClass(DatatableFooterDirective, [{
        key: "template",
        get: function get() {
          return this._templateInput || this._templateQuery;
        }
      }]);

      return DatatableFooterDirective;
    }();

    DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) {
      return new (t || DatatableFooterDirective)();
    };

    DatatableFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DatatableFooterDirective,
      selectors: [["ngx-datatable-footer"]],
      contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
        }
      },
      inputs: {
        footerHeight: "footerHeight",
        totalMessage: "totalMessage",
        selectedMessage: "selectedMessage",
        pagerLeftArrowIcon: "pagerLeftArrowIcon",
        pagerRightArrowIcon: "pagerRightArrowIcon",
        pagerPreviousIcon: "pagerPreviousIcon",
        pagerNextIcon: "pagerNextIcon",
        _templateInput: ["template", "_templateInput"]
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "footerHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "totalMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "selectedMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "pagerLeftArrowIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "pagerRightArrowIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "pagerPreviousIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "pagerNextIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template')], DatatableFooterDirective.prototype, "_templateInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableFooterTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
    })], DatatableFooterDirective.prototype, "_templateQuery", void 0);
    /**
     * Returns the columns by pin.
     */

    function columnsByPin(cols) {
      var ret = {
        left: [],
        center: [],
        right: []
      };

      if (cols) {
        var _iterator5 = _createForOfIteratorHelper(cols),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var col = _step5.value;

            if (col.frozenLeft) {
              ret.left.push(col);
            } else if (col.frozenRight) {
              ret.right.push(col);
            } else {
              ret.center.push(col);
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }

      return ret;
    }
    /**
     * Returns the widths of all group sets of a column
     */


    function columnGroupWidths(groups, all) {
      return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
      };
    }
    /**
     * Calculates the total width of all columns and their groups
     */


    function columnTotalWidth(columns, prop) {
      var totalWidth = 0;

      if (columns) {
        var _iterator6 = _createForOfIteratorHelper(columns),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var c = _step6.value;
            var has = prop && c[prop];
            var width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }

      return totalWidth;
    }
    /**
     * Calculates the total width of all columns and their groups
     */


    function columnsTotalWidth(columns, prop) {
      var totalWidth = 0;

      var _iterator7 = _createForOfIteratorHelper(columns),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var column = _step7.value;
          var has = prop && column[prop];
          totalWidth = totalWidth + (has ? column[prop] : column.width);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return totalWidth;
    }

    function columnsByPinArr(val) {
      var colsByPinArr = [];
      var colsByPin = columnsByPin(val);
      colsByPinArr.push({
        type: 'left',
        columns: colsByPin['left']
      });
      colsByPinArr.push({
        type: 'center',
        columns: colsByPin['center']
      });
      colsByPinArr.push({
        type: 'right',
        columns: colsByPin['right']
      });
      return colsByPinArr;
    }
    /**
     * This object contains the cache of the various row heights that are present inside
     * the data table.   Its based on Fenwick tree data structure that helps with
     * querying sums that have time complexity of log n.
     *
     * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
     * https://github.com/mikolalysenko/fenwick-tree
     *
     */


    var RowHeightCache = /*#__PURE__*/function () {
      function RowHeightCache() {
        _classCallCheck(this, RowHeightCache);

        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
      }
      /**
       * Clear the Tree array.
       */


      _createClass(RowHeightCache, [{
        key: "clearCache",
        value: function clearCache() {
          this.treeArray = [];
        }
        /**
         * Initialize the Fenwick tree with row Heights.
         *
         * @param rows The array of rows which contain the expanded status.
         * @param rowHeight The row height.
         * @param detailRowHeight The detail row height.
         */

      }, {
        key: "initCache",
        value: function initCache(details) {
          var rows = details.rows,
              rowHeight = details.rowHeight,
              detailRowHeight = details.detailRowHeight,
              externalVirtual = details.externalVirtual,
              rowCount = details.rowCount,
              rowIndexes = details.rowIndexes,
              rowExpansions = details.rowExpansions;
          var isFn = typeof rowHeight === 'function';
          var isDetailFn = typeof detailRowHeight === 'function';

          if (!isFn && isNaN(rowHeight)) {
            throw new Error("Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number or function value: (".concat(rowHeight, ") when 'scrollbarV' is enabled."));
          } // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.


          if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error("Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number or function value: (".concat(detailRowHeight, ") when 'scrollbarV' is enabled."));
          }

          var n = externalVirtual ? rowCount : rows.length;
          this.treeArray = new Array(n);

          for (var i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
          }

          for (var _i2 = 0; _i2 < n; ++_i2) {
            var row = rows[_i2];
            var currentRowHeight = rowHeight;

            if (isFn) {
              currentRowHeight = rowHeight(row);
            } // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.


            var expanded = rowExpansions.has(row);

            if (row && expanded) {
              if (isDetailFn) {
                var index = rowIndexes.get(row);
                currentRowHeight += detailRowHeight(row, index);
              } else {
                currentRowHeight += detailRowHeight;
              }
            }

            this.update(_i2, currentRowHeight);
          }
        }
        /**
         * Given the ScrollY position i.e. sum, provide the rowIndex
         * that is present in the current view port.  Below handles edge cases.
         */

      }, {
        key: "getRowIndex",
        value: function getRowIndex(scrollY) {
          if (scrollY === 0) return 0;
          return this.calcRowIndex(scrollY);
        }
        /**
         * When a row is expanded or rowHeight is changed, update the height.  This can
         * be utilized in future when Angular Data table supports dynamic row heights.
         */

      }, {
        key: "update",
        value: function update(atRowIndex, byRowHeight) {
          if (!this.treeArray.length) {
            throw new Error("Update at index ".concat(atRowIndex, " with value ").concat(byRowHeight, " failed:\n        Row Height cache not initialized."));
          }

          var n = this.treeArray.length;
          atRowIndex |= 0;

          while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= atRowIndex + 1;
          }
        }
        /**
         * Range Sum query from 1 to the rowIndex
         */

      }, {
        key: "query",
        value: function query(atIndex) {
          if (!this.treeArray.length) {
            throw new Error("query at index ".concat(atIndex, " failed: Fenwick tree array not initialized."));
          }

          var sum = 0;
          atIndex |= 0;

          while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & atIndex + 1) - 1;
          }

          return sum;
        }
        /**
         * Find the total height between 2 row indexes
         */

      }, {
        key: "queryBetween",
        value: function queryBetween(atIndexA, atIndexB) {
          return this.query(atIndexB) - this.query(atIndexA - 1);
        }
        /**
         * Given the ScrollY position i.e. sum, provide the rowIndex
         * that is present in the current view port.
         */

      }, {
        key: "calcRowIndex",
        value: function calcRowIndex(sum) {
          if (!this.treeArray.length) return 0;
          var pos = -1;
          var dataLength = this.treeArray.length; // Get the highest bit for the block size.

          var highestBit = Math.pow(2, dataLength.toString(2).length - 1);

          for (var blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            var nextPos = pos + blockSize;

            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
              sum -= this.treeArray[nextPos];
              pos = nextPos;
            }
          }

          return pos + 1;
        }
      }]);

      return RowHeightCache;
    }();

    var cache = {};
    var testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;

    var ɵ0 = function ɵ0() {
      var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
      var match = typeof styles !== 'undefined' ? Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
      var pre = match !== null ? match[1] : undefined; // tslint:disable-next-line: tsr-detect-non-literal-regexp

      var dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
      return dom ? {
        dom: dom,
        lowercase: pre,
        css: "-".concat(pre, "-"),
        js: pre[0].toUpperCase() + pre.substr(1)
      } : undefined;
    }; // Get Prefix
    // http://davidwalsh.name/vendor-prefix


    var prefix = ɵ0();

    function getVendorPrefixedName(property) {
      var name = camelCase(property);

      if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
          cache[name] = prefix.css + property;
        } else if (testStyle[property] !== undefined) {
          cache[name] = property;
        }
      }

      return cache[name];
    } // browser detection and prefixing tools


    var transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
    var backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
    var hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
    var hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
    var ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
    var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);

    function translateXY(styles, x, y) {
      if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
          styles[transform] = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
          styles[backfaceVisibility] = 'hidden';
        } else {
          styles[camelCase(transform)] = "translate(".concat(x, "px, ").concat(y, "px)");
        }
      } else {
        styles.top = "".concat(y, "px");
        styles.left = "".concat(x, "px");
      }
    }

    var DataTableBodyComponent = /*#__PURE__*/function () {
      /**
       * Creates an instance of DataTableBodyComponent.
       */
      function DataTableBodyComponent(cd) {
        var _this10 = this;

        _classCallCheck(this, DataTableBodyComponent);

        this.cd = cd;
        this.selected = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new WeakMap();
        this.rowExpansions = [];
        /**
         * Get the height of the detail row.
         */

        this.getDetailRowHeight = function (row, index) {
          if (!_this10.rowDetail) {
            return 0;
          }

          var rowHeight = _this10.rowDetail.rowHeight;
          return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
        }; // declare fn here so we can get access to the `this` property


        this.rowTrackingFn = function (index, row) {
          var idx = _this10.getRowIndex(row);

          if (_this10.trackByProp) {
            return row[_this10.trackByProp];
          } else {
            return idx;
          }
        };
      }

      _createClass(DataTableBodyComponent, [{
        key: "pageSize",
        get: function get() {
          return this._pageSize;
        },
        set: function set(val) {
          this._pageSize = val;
          this.recalcLayout();
        }
      }, {
        key: "rows",
        get: function get() {
          return this._rows;
        },
        set: function set(val) {
          this._rows = val;
          this.recalcLayout();
        }
      }, {
        key: "columns",
        get: function get() {
          return this._columns;
        },
        set: function set(val) {
          this._columns = val;
          var colsByPin = columnsByPin(val);
          this.columnGroupWidths = columnGroupWidths(colsByPin, val);
        }
      }, {
        key: "offset",
        get: function get() {
          return this._offset;
        },
        set: function set(val) {
          this._offset = val;
          if (!this.scrollbarV || this.scrollbarV && !this.virtualization) this.recalcLayout();
        }
      }, {
        key: "rowCount",
        get: function get() {
          return this._rowCount;
        },
        set: function set(val) {
          this._rowCount = val;
          this.recalcLayout();
        }
      }, {
        key: "bodyWidth",
        get: function get() {
          if (this.scrollbarH) {
            return this.innerWidth + 'px';
          } else {
            return '100%';
          }
        }
      }, {
        key: "bodyHeight",
        get: function get() {
          return this._bodyHeight;
        }
        /**
         * Returns if selection is enabled.
         */
        ,
        set: function set(val) {
          if (this.scrollbarV) {
            this._bodyHeight = val + 'px';
          } else {
            this._bodyHeight = 'auto';
          }

          this.recalcLayout();
        }
      }, {
        key: "selectEnabled",
        get: function get() {
          return !!this.selectionType;
        }
        /**
         * Property that would calculate the height of scroll bar
         * based on the row heights cache for virtual scroll and virtualization. Other scenarios
         * calculate scroll height automatically (as height will be undefined).
         */

      }, {
        key: "scrollHeight",
        get: function get() {
          if (this.scrollbarV && this.virtualization && this.rowCount) {
            return this.rowHeightsCache.query(this.rowCount - 1);
          } // avoid TS7030: Not all code paths return a value.


          return undefined;
        }
        /**
         * Called after the constructor, initializing input properties
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe(function (_ref5) {
              var type = _ref5.type,
                  value = _ref5.value;

              if (type === 'row') {
                _this11.toggleRowExpansion(value);
              }

              if (type === 'all') {
                _this11.toggleAllRows(value);
              } // Refresh rows after toggle
              // Fixes #883


              _this11.updateIndexes();

              _this11.updateRows();

              _this11.cd.markForCheck();
            });
          }

          if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe(function (_ref6) {
              var type = _ref6.type,
                  value = _ref6.value;

              if (type === 'group') {
                _this11.toggleRowExpansion(value);
              }

              if (type === 'all') {
                _this11.toggleAllRows(value);
              } // Refresh rows after toggle
              // Fixes #883


              _this11.updateIndexes();

              _this11.updateRows();

              _this11.cd.markForCheck();
            });
          }
        }
        /**
         * Called once, before the instance is destroyed.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
          }
        }
        /**
         * Updates the Y offset given a new offset.
         */

      }, {
        key: "updateOffsetY",
        value: function updateOffsetY(offset) {
          // scroller is missing on empty table
          if (!this.scroller) {
            return;
          }

          if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            var rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
          } else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
          }

          this.scroller.setOffset(offset || 0);
        }
        /**
         * Body was scrolled, this is mainly useful for
         * when a user is server-side pagination via virtual scroll.
         */

      }, {
        key: "onBodyScroll",
        value: function onBodyScroll(event) {
          var scrollYPos = event.scrollYPos;
          var scrollXPos = event.scrollXPos; // if scroll change, trigger update
          // this is mainly used for header cell positions

          if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
              offsetY: scrollYPos,
              offsetX: scrollXPos
            });
          }

          this.offsetY = scrollYPos;
          this.offsetX = scrollXPos;
          this.updateIndexes();
          this.updatePage(event.direction);
          this.updateRows();
        }
        /**
         * Updates the page given a direction.
         */

      }, {
        key: "updatePage",
        value: function updatePage(direction) {
          var offset = this.indexes.first / this.pageSize;

          if (direction === 'up') {
            offset = Math.ceil(offset);
          } else if (direction === 'down') {
            offset = Math.floor(offset);
          }

          if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({
              offset: offset
            });
          }
        }
        /**
         * Updates the rows in the view port
         */

      }, {
        key: "updateRows",
        value: function updateRows() {
          var _this12 = this;

          var _this$indexes = this.indexes,
              first = _this$indexes.first,
              last = _this$indexes.last;
          var rowIndex = first;
          var idx = 0;
          var temp = []; // if grouprowsby has been specified treat row paging
          // parameters as group paging parameters ie if limit 10 has been
          // specified treat it as 10 groups rather than 10 rows

          if (this.groupedRows) {
            var maxRowsPerGroup = 3; // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows

            if (this.groupedRows.length === 1) {
              maxRowsPerGroup = this.groupedRows[0].value.length;
            }

            while (rowIndex < last && rowIndex < this.groupedRows.length) {
              // Add the groups into this page
              var group = this.groupedRows[rowIndex];
              this.rowIndexes.set(group, rowIndex);

              if (group.value) {
                // add indexes for each group item
                group.value.forEach(function (g, i) {
                  var _idx = "".concat(rowIndex, "-").concat(i);

                  _this12.rowIndexes.set(g, _idx);
                });
              }

              temp[idx] = group;
              idx++; // Group index in this context

              rowIndex++;
            }
          } else {
            while (rowIndex < last && rowIndex < this.rowCount) {
              var row = this.rows[rowIndex];

              if (row) {
                // add indexes for each row
                this.rowIndexes.set(row, rowIndex);
                temp[idx] = row;
              }

              idx++;
              rowIndex++;
            }
          }

          this.temp = temp;
        }
        /**
         * Get the row height
         */

      }, {
        key: "getRowHeight",
        value: function getRowHeight(row) {
          // if its a function return it
          if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
          }

          return this.rowHeight;
        }
        /**
         * @param group the group with all rows
         */

      }, {
        key: "getGroupHeight",
        value: function getGroupHeight(group) {
          var rowHeight = 0;

          if (group.value) {
            for (var index = 0; index < group.value.length; index++) {
              rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
          }

          return rowHeight;
        }
        /**
         * Calculate row height based on the expanded state of the row.
         */

      }, {
        key: "getRowAndDetailHeight",
        value: function getRowAndDetailHeight(row) {
          var rowHeight = this.getRowHeight(row);
          var expanded = this.getRowExpanded(row); // Adding detail row height if its expanded.

          if (expanded) {
            rowHeight += this.getDetailRowHeight(row);
          }

          return rowHeight;
        }
        /**
         * Calculates the styles for the row so that the rows can be moved in 2D space
         * during virtual scroll inside the DOM.   In the below case the Y position is
         * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
         * 100 px then following styles are generated:
         *
         * transform: translate3d(0px, 0px, 0px);    ->  row0
         * transform: translate3d(0px, 30px, 0px);   ->  row1
         * transform: translate3d(0px, 130px, 0px);  ->  row2
         *
         * Row heights have to be calculated based on the row heights cache as we wont
         * be able to determine which row is of what height before hand.  In the above
         * case the positionY of the translate3d for row2 would be the sum of all the
         * heights of the rows before it (i.e. row0 and row1).
         *
         * @param rows the row that needs to be placed in the 2D space.
         * @returns the CSS3 style to be applied
         *
         * @memberOf DataTableBodyComponent
         */

      }, {
        key: "getRowsStyles",
        value: function getRowsStyles(rows) {
          var styles = {}; // only add styles for the group if there is a group

          if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
          }

          if (this.scrollbarV && this.virtualization) {
            var idx = 0;

            if (this.groupedRows) {
              // Get the latest row rowindex in a group
              var row = rows[rows.length - 1];
              idx = row ? this.getRowIndex(row) : 0;
            } else {
              idx = this.getRowIndex(rows);
            } // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.


            var pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
          }

          return styles;
        }
        /**
         * Calculate bottom summary row offset for scrollbar mode.
         * For more information about cache and offset calculation
         * see description for `getRowsStyles` method
         *
         * @returns the CSS3 style to be applied
         *
         * @memberOf DataTableBodyComponent
         */

      }, {
        key: "getBottomSummaryRowStyles",
        value: function getBottomSummaryRowStyles() {
          if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
          }

          var styles = {
            position: 'absolute'
          };
          var pos = this.rowHeightsCache.query(this.rows.length - 1);
          translateXY(styles, 0, pos);
          return styles;
        }
        /**
         * Hides the loading indicator
         */

      }, {
        key: "hideIndicator",
        value: function hideIndicator() {
          var _this13 = this;

          setTimeout(function () {
            return _this13.loadingIndicator = false;
          }, 500);
        }
        /**
         * Updates the index of the rows in the viewport
         */

      }, {
        key: "updateIndexes",
        value: function updateIndexes() {
          var first = 0;
          var last = 0;

          if (this.scrollbarV) {
            if (this.virtualization) {
              // Calculation of the first and last indexes will be based on where the
              // scrollY position would be at.  The last index would be the one
              // that shows up inside the view port the last.
              var height = parseInt(this.bodyHeight, 0);
              first = this.rowHeightsCache.getRowIndex(this.offsetY);
              last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            } else {
              // If virtual rows are not needed
              // We render all in one go
              first = 0;
              last = this.rowCount;
            }
          } else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
              first = Math.max(this.offset * this.pageSize, 0);
            }

            last = Math.min(first + this.pageSize, this.rowCount);
          }

          this.indexes = {
            first: first,
            last: last
          };
        }
        /**
         * Refreshes the full Row Height cache.  Should be used
         * when the entire row array state has changed.
         */

      }, {
        key: "refreshRowHeightCache",
        value: function refreshRowHeightCache() {
          if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
            return;
          } // clear the previous row height cache if already present.
          // this is useful during sorts, filters where the state of the
          // rows array is changed.


          this.rowHeightsCache.clearCache(); // Initialize the tree only if there are rows inside the tree.

          if (this.rows && this.rows.length) {
            var rowExpansions = new Set();

            var _iterator8 = _createForOfIteratorHelper(this.rows),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var row = _step8.value;

                if (this.getRowExpanded(row)) {
                  rowExpansions.add(row);
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            this.rowHeightsCache.initCache({
              rows: this.rows,
              rowHeight: this.rowHeight,
              detailRowHeight: this.getDetailRowHeight,
              externalVirtual: this.scrollbarV && this.externalPaging,
              rowCount: this.rowCount,
              rowIndexes: this.rowIndexes,
              rowExpansions: rowExpansions
            });
          }
        }
        /**
         * Gets the index for the view port
         */

      }, {
        key: "getAdjustedViewPortIndex",
        value: function getAdjustedViewPortIndex() {
          // Capture the row index of the first row that is visible on the viewport.
          // If the scroll bar is just below the row which is highlighted then make that as the
          // first index.
          var viewPortFirstRowIndex = this.indexes.first;

          if (this.scrollbarV && this.virtualization) {
            var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
          }

          return viewPortFirstRowIndex;
        }
        /**
         * Toggle the Expansion of the row i.e. if the row is expanded then it will
         * collapse and vice versa.   Note that the expanded status is stored as
         * a part of the row object itself as we have to preserve the expanded row
         * status in case of sorting and filtering of the row set.
         */

      }, {
        key: "toggleRowExpansion",
        value: function toggleRowExpansion(row) {
          // Capture the row index of the first row that is visible on the viewport.
          var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
          var rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
          var expanded = rowExpandedIdx > -1; // If the detailRowHeight is auto --> only in case of non-virtualized scroll

          if (this.scrollbarV && this.virtualization) {
            var detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1); // const idx = this.rowIndexes.get(row) || 0;

            var idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
          } // Update the toggled row and update thive nevere heights in the cache.


          if (expanded) {
            this.rowExpansions.splice(rowExpandedIdx, 1);
          } else {
            this.rowExpansions.push(row);
          }

          this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
          });
        }
        /**
         * Expand/Collapse all the rows no matter what their state is.
         */

      }, {
        key: "toggleAllRows",
        value: function toggleAllRows(expanded) {
          // clear prev expansions
          this.rowExpansions = []; // Capture the row index of the first row that is visible on the viewport.

          var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();

          if (expanded) {
            var _iterator9 = _createForOfIteratorHelper(this.rows),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var row = _step9.value;
                this.rowExpansions.push(row);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }

          if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
          } // Emit all rows that have been expanded.


          this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
          });
        }
        /**
         * Recalculates the table
         */

      }, {
        key: "recalcLayout",
        value: function recalcLayout() {
          this.refreshRowHeightCache();
          this.updateIndexes();
          this.updateRows();
        }
        /**
         * Tracks the column
         */

      }, {
        key: "columnTrackingFn",
        value: function columnTrackingFn(index, column) {
          return column.$$id;
        }
        /**
         * Gets the row pinning group styles
         */

      }, {
        key: "stylesByGroup",
        value: function stylesByGroup(group) {
          var widths = this.columnGroupWidths;
          var offsetX = this.offsetX;
          var styles = {
            width: "".concat(widths[group], "px")
          };

          if (group === 'left') {
            translateXY(styles, offsetX, 0);
          } else if (group === 'right') {
            var bodyWidth = parseInt(this.innerWidth + '', 0);
            var totalDiff = widths.total - bodyWidth;
            var offsetDiff = totalDiff - offsetX;
            var offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
          }

          return styles;
        }
        /**
         * Returns if the row was expanded and set default row expansion when row expansion is empty
         */

      }, {
        key: "getRowExpanded",
        value: function getRowExpanded(row) {
          if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
            var _iterator10 = _createForOfIteratorHelper(this.groupedRows),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var group = _step10.value;
                this.rowExpansions.push(group);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }

          return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
        }
      }, {
        key: "getRowExpandedIdx",
        value: function getRowExpandedIdx(row, expanded) {
          var _this14 = this;

          if (!expanded || !expanded.length) return -1;
          var rowId = this.rowIdentity(row);
          return expanded.findIndex(function (r) {
            var id = _this14.rowIdentity(r);

            return id === rowId;
          });
        }
        /**
         * Gets the row index given a row
         */

      }, {
        key: "getRowIndex",
        value: function getRowIndex(row) {
          return this.rowIndexes.get(row) || 0;
        }
      }, {
        key: "onTreeAction",
        value: function onTreeAction(row) {
          this.treeAction.emit({
            row: row
          });
        }
      }]);

      return DataTableBodyComponent;
    }();

    DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) {
      return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    DataTableBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableBodyComponent,
      selectors: [["datatable-body"]],
      viewQuery: function DataTableBodyComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ScrollerComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
        }
      },
      hostAttrs: [1, "datatable-body"],
      hostVars: 4,
      hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
        }
      },
      inputs: {
        selected: "selected",
        pageSize: "pageSize",
        rows: "rows",
        columns: "columns",
        offset: "offset",
        rowCount: "rowCount",
        bodyHeight: "bodyHeight",
        offsetX: "offsetX",
        loadingIndicator: "loadingIndicator",
        scrollbarV: "scrollbarV",
        scrollbarH: "scrollbarH",
        externalPaging: "externalPaging",
        rowHeight: "rowHeight",
        emptyMessage: "emptyMessage",
        selectionType: "selectionType",
        rowIdentity: "rowIdentity",
        rowDetail: "rowDetail",
        groupHeader: "groupHeader",
        selectCheck: "selectCheck",
        displayCheck: "displayCheck",
        trackByProp: "trackByProp",
        rowClass: "rowClass",
        groupedRows: "groupedRows",
        groupExpansionDefault: "groupExpansionDefault",
        innerWidth: "innerWidth",
        groupRowsBy: "groupRowsBy",
        virtualization: "virtualization",
        summaryRow: "summaryRow",
        summaryPosition: "summaryPosition",
        summaryHeight: "summaryHeight"
      },
      outputs: {
        scroll: "scroll",
        page: "page",
        activate: "activate",
        select: "select",
        detailToggle: "detailToggle",
        rowContextmenu: "rowContextmenu",
        treeAction: "treeAction"
      },
      decls: 5,
      vars: 9,
      consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]],
      template: function DataTableBodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "datatable-selection", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) {
            return ctx.select.emit($event);
          })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) {
            return ctx.activate.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableSelectionComponent, ProgressBarComponent, ScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], DataTableSummaryRowComponent, DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableBodyRowComponent];
      },
      encapsulation: 2,
      changeDetection: 0
    });

    DataTableBodyComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "scrollbarV", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "scrollbarH", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "loadingIndicator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "externalPaging", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rowHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "offsetX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "emptyMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "selectionType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "selected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rowIdentity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rowDetail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "groupHeader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "selectCheck", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "displayCheck", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "trackByProp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rowClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "groupedRows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "groupExpansionDefault", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "innerWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "groupRowsBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "virtualization", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "summaryRow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "summaryPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "summaryHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "pageSize", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rows", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "columns", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "offset", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rowCount", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], DataTableBodyComponent.prototype, "bodyWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], DataTableBodyComponent.prototype, "bodyHeight", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "scroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "page", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "activate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "select", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "detailToggle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "rowContextmenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "treeAction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ScrollerComponent)], DataTableBodyComponent.prototype, "scroller", void 0);

    var DataTableHeaderComponent = /*#__PURE__*/function () {
      function DataTableHeaderComponent(cd) {
        _classCallCheck(this, DataTableHeaderComponent);

        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this._columnGroupWidths = {
          total: 100
        };
        this._styleByGroup = {
          left: {},
          center: {},
          right: {}
        };
        this.destroyed = false;
      }

      _createClass(DataTableHeaderComponent, [{
        key: "innerWidth",
        get: function get() {
          return this._innerWidth;
        },
        set: function set(val) {
          var _this15 = this;

          this._innerWidth = val;
          setTimeout(function () {
            if (_this15._columns) {
              var colByPin = columnsByPin(_this15._columns);
              _this15._columnGroupWidths = columnGroupWidths(colByPin, _this15._columns);

              _this15.setStylesByGroup();
            }
          });
        }
      }, {
        key: "headerHeight",
        get: function get() {
          return this._headerHeight;
        },
        set: function set(val) {
          if (val !== 'auto') {
            this._headerHeight = "".concat(val, "px");
          } else {
            this._headerHeight = val;
          }
        }
      }, {
        key: "columns",
        get: function get() {
          return this._columns;
        },
        set: function set(val) {
          var _this16 = this;

          this._columns = val;
          var colsByPin = columnsByPin(val);
          this._columnsByPin = columnsByPinArr(val);
          setTimeout(function () {
            _this16._columnGroupWidths = columnGroupWidths(colsByPin, val);

            _this16.setStylesByGroup();
          });
        }
      }, {
        key: "offsetX",
        get: function get() {
          return this._offsetX;
        },
        set: function set(val) {
          this._offsetX = val;
          this.setStylesByGroup();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed = true;
        }
      }, {
        key: "onLongPressStart",
        value: function onLongPressStart(_ref7) {
          var event = _ref7.event,
              model = _ref7.model;
          model.dragging = true;
          this.dragEventTarget = event;
        }
      }, {
        key: "onLongPressEnd",
        value: function onLongPressEnd(_ref8) {
          var _this17 = this;

          var event = _ref8.event,
              model = _ref8.model;
          this.dragEventTarget = event; // delay resetting so sort can be
          // prevented if we were dragging

          setTimeout(function () {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            var column = _this17._columns.find(function (c) {
              return c.$$id === model.$$id;
            });

            if (column) {
              column.dragging = false;
            }
          }, 5);
        }
      }, {
        key: "headerWidth",
        get: function get() {
          if (this.scrollbarH) {
            return this.innerWidth + 'px';
          }

          return '100%';
        }
      }, {
        key: "trackByGroups",
        value: function trackByGroups(index, colGroup) {
          return colGroup.type;
        }
      }, {
        key: "columnTrackingFn",
        value: function columnTrackingFn(index, column) {
          return column.$$id;
        }
      }, {
        key: "onColumnResized",
        value: function onColumnResized(width, column) {
          if (width <= column.minWidth) {
            width = column.minWidth;
          } else if (width >= column.maxWidth) {
            width = column.maxWidth;
          }

          this.resize.emit({
            column: column,
            prevValue: column.width,
            newValue: width
          });
        }
      }, {
        key: "onColumnReordered",
        value: function onColumnReordered(_ref9) {
          var prevIndex = _ref9.prevIndex,
              newIndex = _ref9.newIndex,
              model = _ref9.model;
          var column = this.getColumn(newIndex);
          column.isTarget = false;
          column.targetMarkerContext = undefined;
          this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
          });
        }
      }, {
        key: "onTargetChanged",
        value: function onTargetChanged(_ref10) {
          var prevIndex = _ref10.prevIndex,
              newIndex = _ref10.newIndex,
              initialIndex = _ref10.initialIndex;

          if (prevIndex || prevIndex === 0) {
            var oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
          }

          if (newIndex || newIndex === 0) {
            var newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;

            if (initialIndex !== newIndex) {
              newColumn.targetMarkerContext = {
                "class": 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
              };
            }
          }
        }
      }, {
        key: "getColumn",
        value: function getColumn(index) {
          var leftColumnCount = this._columnsByPin[0].columns.length;

          if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
          }

          var centerColumnCount = this._columnsByPin[1].columns.length;

          if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
          }

          return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
        }
      }, {
        key: "onSort",
        value: function onSort(_ref11) {
          var column = _ref11.column,
              prevValue = _ref11.prevValue,
              newValue = _ref11.newValue;

          // if we are dragging don't sort!
          if (column.dragging) {
            return;
          }

          var sorts = this.calcNewSorts(column, prevValue, newValue);
          this.sort.emit({
            sorts: sorts,
            column: column,
            prevValue: prevValue,
            newValue: newValue
          });
        }
      }, {
        key: "calcNewSorts",
        value: function calcNewSorts(column, prevValue, newValue) {
          var idx = 0;

          if (!this.sorts) {
            this.sorts = [];
          }

          var sorts = this.sorts.map(function (s, i) {
            s = Object.assign({}, s);

            if (s.prop === column.prop) {
              idx = i;
            }

            return s;
          });

          if (newValue === undefined) {
            sorts.splice(idx, 1);
          } else if (prevValue) {
            sorts[idx].dir = newValue;
          } else {
            if (this.sortType === SortType.single) {
              sorts.splice(0, this.sorts.length);
            }

            sorts.push({
              dir: newValue,
              prop: column.prop
            });
          }

          return sorts;
        }
      }, {
        key: "setStylesByGroup",
        value: function setStylesByGroup() {
          this._styleByGroup.left = this.calcStylesByGroup('left');
          this._styleByGroup.center = this.calcStylesByGroup('center');
          this._styleByGroup.right = this.calcStylesByGroup('right');

          if (!this.destroyed) {
            this.cd.detectChanges();
          }
        }
      }, {
        key: "calcStylesByGroup",
        value: function calcStylesByGroup(group) {
          var widths = this._columnGroupWidths;
          var offsetX = this.offsetX;
          var styles = {
            width: "".concat(widths[group], "px")
          };

          if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
          } else if (group === 'right') {
            var totalDiff = widths.total - this.innerWidth;
            var offset = totalDiff * -1;
            translateXY(styles, offset, 0);
          }

          return styles;
        }
      }]);

      return DataTableHeaderComponent;
    }();

    DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) {
      return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    DataTableHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableHeaderComponent,
      selectors: [["datatable-header"]],
      hostAttrs: [1, "datatable-header"],
      hostVars: 4,
      hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
        }
      },
      inputs: {
        innerWidth: "innerWidth",
        headerHeight: "headerHeight",
        columns: "columns",
        offsetX: "offsetX",
        sorts: "sorts",
        sortAscendingIcon: "sortAscendingIcon",
        sortDescendingIcon: "sortDescendingIcon",
        scrollbarH: "scrollbarH",
        dealsWithGroup: "dealsWithGroup",
        targetMarkerTemplate: "targetMarkerTemplate",
        sortType: "sortType",
        allRowsSelected: "allRowsSelected",
        selectionType: "selectionType",
        reorderable: "reorderable"
      },
      outputs: {
        sort: "sort",
        reorder: "reorder",
        resize: "resize",
        select: "select",
        columnContextmenu: "columnContextmenu"
      },
      decls: 2,
      vars: 4,
      consts: [["orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
      template: function DataTableHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) {
            return ctx.onColumnReordered($event);
          })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) {
            return ctx.onTargetChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
        }
      },
      directives: function directives() {
        return [OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableHeaderCellComponent, ResizeableDirective, LongPressDirective, DraggableDirective];
      },
      encapsulation: 2,
      changeDetection: 0
    });

    DataTableHeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "sortAscendingIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "sortDescendingIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "scrollbarH", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "dealsWithGroup", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "targetMarkerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "innerWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "sorts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "sortType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "allRowsSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "selectionType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "reorderable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "headerHeight", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "columns", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "offsetX", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderComponent.prototype, "reorder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderComponent.prototype, "resize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderComponent.prototype, "select", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderComponent.prototype, "columnContextmenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], DataTableHeaderComponent.prototype, "headerWidth", null);
    /**
     * Throttle a function
     */

    function throttle(func, wait, options) {
      options = options || {};
      var context;
      var args;
      var result;
      var timeout = null;
      var previous = 0;

      function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
      }

      return function () {
        var now = +new Date();

        if (!previous && options.leading === false) {
          previous = now;
        }

        var remaining = wait - (now - previous);
        context = this;
        args = arguments;

        if (remaining <= 0) {
          clearTimeout(timeout);
          timeout = null;
          previous = now;
          result = func.apply(context, args);
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }

        return result;
      };
    }
    /**
     * Throttle decorator
     *
     *  class MyClass {
     *    throttleable(10)
     *    myFn() { ... }
     *  }
     */


    function throttleable(duration, options) {
      return function innerDecorator(target, key, descriptor) {
        return {
          configurable: true,
          enumerable: descriptor.enumerable,
          get: function getter() {
            Object.defineProperty(this, key, {
              configurable: true,
              enumerable: descriptor.enumerable,
              value: throttle(descriptor.value, duration, options)
            });
            return this[key];
          }
        };
      };
    }
    /**
     * Calculates the Total Flex Grow
     */


    function getTotalFlexGrow(columns) {
      var totalFlexGrow = 0;

      var _iterator11 = _createForOfIteratorHelper(columns),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var c = _step11.value;
          totalFlexGrow += c.flexGrow || 0;
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      return totalFlexGrow;
    }
    /**
     * Adjusts the column widths.
     * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
     */


    function adjustColumnWidths(allColumns, expectedWidth) {
      var columnsWidth = columnsTotalWidth(allColumns);
      var totalFlexGrow = getTotalFlexGrow(allColumns);
      var colsByGroup = columnsByPin(allColumns);

      if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
      }
    }
    /**
     * Resizes columns based on the flexGrow property, while respecting manually set widths
     */


    function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
      // calculate total width and flexgrow points for coulumns that can be resized
      for (var attr in colsByGroup) {
        var _iterator12 = _createForOfIteratorHelper(colsByGroup[attr]),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var column = _step12.value;

            if (!column.canAutoResize) {
              maxWidth -= column.width;
              totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            } else {
              column.width = 0;
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }

      var hasMinWidth = {};
      var remainingWidth = maxWidth; // resize columns until no width is left to be distributed

      do {
        var widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;

        for (var _attr in colsByGroup) {
          var _iterator13 = _createForOfIteratorHelper(colsByGroup[_attr]),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _column = _step13.value;

              // if the column can be resize and it hasn't reached its minimum width yet
              if (_column.canAutoResize && !hasMinWidth[_column.prop]) {
                var newWidth = _column.width + _column.flexGrow * widthPerFlexPoint;

                if (_column.minWidth !== undefined && newWidth < _column.minWidth) {
                  remainingWidth += newWidth - _column.minWidth;
                  _column.width = _column.minWidth;
                  hasMinWidth[_column.prop] = true;
                } else {
                  _column.width = newWidth;
                }
              }
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        }
      } while (remainingWidth !== 0);
    }
    /**
     * Forces the width of the columns to
     * distribute equally but overflowing when necessary
     *
     * Rules:
     *
     *  - If combined withs are less than the total width of the grid,
     *    proportion the widths given the min / max / normal widths to fill the width.
     *
     *  - If the combined widths, exceed the total width of the grid,
     *    use the standard widths.
     *
     *  - If a column is resized, it should always use that width
     *
     *  - The proportional widths should never fall below min size if specified.
     *
     *  - If the grid starts off small but then becomes greater than the size ( + / - )
     *    the width should use the original width; not the newly proportioned widths.
     */


    function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed) {
      var defaultColWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 300;
      var columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(function (c) {
        return c.canAutoResize !== false;
      });

      var _iterator14 = _createForOfIteratorHelper(columnsToResize),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var _column2 = _step14.value;

          if (!_column2.$$oldWidth) {
            _column2.$$oldWidth = _column2.width;
          }
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      var additionWidthPerColumn = 0;
      var exceedsWindow = false;
      var contentWidth = getContentWidth(allColumns, defaultColWidth);
      var remainingWidth = expectedWidth - contentWidth;
      var columnsProcessed = [];
      var remainingWidthLimit = 1; // when to stop
      // This loop takes care of the

      do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;

        var _iterator15 = _createForOfIteratorHelper(columnsToResize),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var column = _step15.value;

            if (exceedsWindow && allowBleed) {
              column.width = column.$$oldWidth || column.width || defaultColWidth;
            } else {
              var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;

              if (column.minWidth && newSize < column.minWidth) {
                column.width = column.minWidth;
                columnsProcessed.push(column);
              } else if (column.maxWidth && newSize > column.maxWidth) {
                column.width = column.maxWidth;
                columnsProcessed.push(column);
              } else {
                column.width = newSize;
              }
            }

            column.width = Math.max(0, column.width);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }

        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
      } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
    }
    /**
     * Remove the processed columns from the current active columns.
     */


    function removeProcessedColumns(columnsToResize, columnsProcessed) {
      var _iterator16 = _createForOfIteratorHelper(columnsProcessed),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var column = _step16.value;
          var index = columnsToResize.indexOf(column);
          columnsToResize.splice(index, 1);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }
    /**
     * Gets the width of the columns
     */


    function getContentWidth(allColumns) {
      var defaultColWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
      var contentWidth = 0;

      var _iterator17 = _createForOfIteratorHelper(allColumns),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var column = _step17.value;
          contentWidth += column.width || defaultColWidth;
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      return contentWidth;
    }

    var SortDirection;

    (function (SortDirection) {
      SortDirection["asc"] = "asc";
      SortDirection["desc"] = "desc";
    })(SortDirection || (SortDirection = {}));
    /**
     * Gets the next sort direction
     */


    function nextSortDir(sortType, current) {
      if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
          return SortDirection.desc;
        } else {
          return SortDirection.asc;
        }
      } else {
        if (!current) {
          return SortDirection.asc;
        } else if (current === SortDirection.asc) {
          return SortDirection.desc;
        } else if (current === SortDirection.desc) {
          return undefined;
        } // avoid TS7030: Not all code paths return a value.


        return undefined;
      }
    }
    /**
     * Adapted from fueld-ui on 6/216
     * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
     */


    function orderByComparator(a, b) {
      if (a === null || typeof a === 'undefined') a = 0;
      if (b === null || typeof b === 'undefined') b = 0;

      if (a instanceof Date && b instanceof Date) {
        if (a < b) return -1;
        if (a > b) return 1;
      } else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b); // Isn't a number so lowercase the string to properly compare

        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
      } else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b)) return -1;
        if (parseFloat(a) > parseFloat(b)) return 1;
      } // equal each other


      return 0;
    }
    /**
     * creates a shallow copy of the `rows` input and returns the sorted copy. this function
     * does not sort the `rows` argument in place
     */


    function sortRows(rows, columns, dirs) {
      if (!rows) return [];
      if (!dirs || !dirs.length || !columns) return _toConsumableArray(rows);
      /**
       * record the row ordering of results from prior sort operations (if applicable)
       * this is necessary to guarantee stable sorting behavior
       */

      var rowToIndexMap = new Map();
      rows.forEach(function (row, index) {
        return rowToIndexMap.set(row, index);
      });

      var temp = _toConsumableArray(rows);

      var cols = columns.reduce(function (obj, col) {
        if (col.comparator && typeof col.comparator === 'function') {
          obj[col.prop] = col.comparator;
        }

        return obj;
      }, {}); // cache valueGetter and compareFn so that they
      // do not need to be looked-up in the sort function body

      var cachedDirs = dirs.map(function (dir) {
        var prop = dir.prop;
        return {
          prop: prop,
          dir: dir.dir,
          valueGetter: getterForProp(prop),
          compareFn: cols[prop] || orderByComparator
        };
      });
      return temp.sort(function (rowA, rowB) {
        var _iterator18 = _createForOfIteratorHelper(cachedDirs),
            _step18;

        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var cachedDir = _step18.value;
            // Get property and valuegetters for column to be sorted
            var prop = cachedDir.prop,
                valueGetter = cachedDir.valueGetter; // Get A and B cell values from rows based on properties of the columns

            var propA = valueGetter(rowA, prop);
            var propB = valueGetter(rowB, prop); // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.

            var comparison = cachedDir.dir !== SortDirection.desc ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir); // Don't return 0 yet in case of needing to sort by next property

            if (comparison !== 0) return comparison;
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }

        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */

        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
      });
    }

    var DatatableComponent = /*#__PURE__*/function () {
      function DatatableComponent(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
        var _this18 = this;

        _classCallCheck(this, DatatableComponent);

        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        this.columnChangesService = columnChangesService;
        this.configuration = configuration;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */

        this.selected = [];
        /**
         * Enable vertical scrollbars
         */

        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */

        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */

        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */

        this.columnMode = ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */

        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */

        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */

        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */

        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */

        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */

        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */

        this.swapColumns = true;
        /**
         * The type of sorting
         */

        this.sortType = SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */

        this.sorts = [];
        /**
         * Css class overrides
         */

        this.cssClasses = {
          sortAscending: 'datatable-icon-up',
          sortDescending: 'datatable-icon-down',
          pagerLeftArrow: 'datatable-icon-left',
          pagerRightArrow: 'datatable-icon-right',
          pagerPrevious: 'datatable-icon-prev',
          pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */

        this.messages = {
          // Message to show when array is presented
          // but contains no values
          emptyMessage: 'No data to display',
          // Footer total message
          totalMessage: 'total',
          // Footer selected message
          selectedMessage: 'selected'
        };
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */

        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * @memberOf DatatableComponent
         */

        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */

        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */

        this.summaryRow = false;
        /**
         * A height of summary row
         */

        this.summaryHeight = 30;
        /**
         * A property holds a summary row position: top/bottom
         */

        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */

        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */

        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * A cell or row was selected.
         */

        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Column sort was invoked.
         */

        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */

        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Columns were re-ordered.
         */

        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Column was resized.
         */

        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */

        this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        /**
         * A row was expanded ot collapsed for tree
         */

        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowCount = 0;
        this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this._count = 0;
        this._offset = 0;
        this._subscriptions = [];
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */

        this.rowIdentity = function (x) {
          if (_this18._groupRowsBy) {
            // each group in groupedRows are stored as {key, value: [rows]},
            // where key is the groupRowsBy index
            return x.key;
          } else {
            return x;
          }
        }; // get ref to elm for measuring


        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create(); // apply global settings from Module.forRoot

        if (this.configuration && this.configuration.messages) {
          this.messages = Object.assign({}, this.configuration.messages);
        }
      }
      /**
       * Rows that are displayed in the table.
       */


      _createClass(DatatableComponent, [{
        key: "rows",
        get:
        /**
         * Gets the rows.
         */
        function get() {
          return this._rows;
        }
        /**
         * This attribute allows the user to set the name of the column to group the data with
         */
        ,
        set: function set(val) {
          this._rows = val;

          if (val) {
            this._internalRows = _toConsumableArray(val);
          } // auto sort on new updates


          if (!this.externalSorting) {
            this.sortInternalRows();
          } // auto group by parent on new update


          this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // recalculate sizes/etc

          this.recalculate();

          if (this._rows && this._groupRowsBy) {
            // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
            this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
          }

          this.cd.markForCheck();
        }
      }, {
        key: "groupRowsBy",
        get: function get() {
          return this._groupRowsBy;
        }
        /**
         * Columns to be displayed.
         */
        ,
        set: function set(val) {
          if (val) {
            this._groupRowsBy = val;

            if (this._rows && this._groupRowsBy) {
              // cretes a new array with the data grouped
              this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
          }
        }
      }, {
        key: "columns",
        get:
        /**
         * Get the columns.
         */
        function get() {
          return this._columns;
        }
        /**
         * The page size to be shown.
         * Default value: `undefined`
         */
        ,
        set: function set(val) {
          if (val) {
            this._internalColumns = _toConsumableArray(val);
            setColumnDefaults(this._internalColumns);
            this.recalculateColumns();
          }

          this._columns = val;
        }
      }, {
        key: "limit",
        get:
        /**
         * Gets the limit.
         */
        function get() {
          return this._limit;
        }
        /**
         * The total count of all rows.
         * Default value: `0`
         */
        ,
        set: function set(val) {
          this._limit = val; // recalculate sizes/etc

          this.recalculate();
        }
      }, {
        key: "count",
        get:
        /**
         * Gets the count.
         */
        function get() {
          return this._count;
        }
        /**
         * The current offset ( page - 1 ) shown.
         * Default value: `0`
         */
        ,
        set: function set(val) {
          this._count = val; // recalculate sizes/etc

          this.recalculate();
        }
      }, {
        key: "offset",
        get: function get() {
          return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
        }
        /**
         * CSS class applied if the header height if fixed height.
         */
        ,
        set: function set(val) {
          this._offset = val;
        }
      }, {
        key: "isFixedHeader",
        get: function get() {
          var headerHeight = this.headerHeight;
          return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
        }
        /**
         * CSS class applied to the root element if
         * the row heights are fixed heights.
         */

      }, {
        key: "isFixedRow",
        get: function get() {
          return this.rowHeight !== 'auto';
        }
        /**
         * CSS class applied to root element if
         * vertical scrolling is enabled.
         */

      }, {
        key: "isVertScroll",
        get: function get() {
          return this.scrollbarV;
        }
        /**
         * CSS class applied to root element if
         * virtualization is enabled.
         */

      }, {
        key: "isVirtualized",
        get: function get() {
          return this.virtualization;
        }
        /**
         * CSS class applied to the root element
         * if the horziontal scrolling is enabled.
         */

      }, {
        key: "isHorScroll",
        get: function get() {
          return this.scrollbarH;
        }
        /**
         * CSS class applied to root element is selectable.
         */

      }, {
        key: "isSelectable",
        get: function get() {
          return this.selectionType !== undefined;
        }
        /**
         * CSS class applied to root is checkbox selection.
         */

      }, {
        key: "isCheckboxSelection",
        get: function get() {
          return this.selectionType === SelectionType.checkbox;
        }
        /**
         * CSS class applied to root if cell selection.
         */

      }, {
        key: "isCellSelection",
        get: function get() {
          return this.selectionType === SelectionType.cell;
        }
        /**
         * CSS class applied to root if single select.
         */

      }, {
        key: "isSingleSelection",
        get: function get() {
          return this.selectionType === SelectionType.single;
        }
        /**
         * CSS class added to root element if mulit select
         */

      }, {
        key: "isMultiSelection",
        get: function get() {
          return this.selectionType === SelectionType.multi;
        }
        /**
         * CSS class added to root element if mulit click select
         */

      }, {
        key: "isMultiClickSelection",
        get: function get() {
          return this.selectionType === SelectionType.multiClick;
        }
        /**
         * Column templates gathered from `ContentChildren`
         * if described in your markup.
         */

      }, {
        key: "columnTemplates",
        get:
        /**
         * Returns the column templates.
         */
        function get() {
          return this._columnTemplates;
        }
        /**
         * Returns if all rows are selected.
         */
        ,
        set: function set(val) {
          this._columnTemplates = val;
          this.translateColumns(val);
        }
      }, {
        key: "allRowsSelected",
        get: function get() {
          var allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;

          if (this.bodyComponent && this.selectAllRowsOnPage) {
            var indexes = this.bodyComponent.indexes;
            var rowsOnPage = indexes.last - indexes.first;
            allRowsSelected = this.selected.length === rowsOnPage;
          }

          return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
        }
        /**
         * Lifecycle hook that is called after data-bound
         * properties of a directive are initialized.
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // need to call this immediatly to size
          // if the table is hidden the visibility
          // listener will invoke this itself upon show
          this.recalculate();
        }
        /**
         * Lifecycle hook that is called after a component's
         * view has been fully initialized.
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this19 = this;

          if (!this.externalSorting) {
            this.sortInternalRows();
          } // this has to be done to prevent the change detection
          // tree from freaking out because we are readjusting


          if (typeof requestAnimationFrame === 'undefined') {
            return;
          }

          requestAnimationFrame(function () {
            _this19.recalculate(); // emit page for virtual server-side kickoff


            if (_this19.externalPaging && _this19.scrollbarV) {
              _this19.page.emit({
                count: _this19.count,
                pageSize: _this19.pageSize,
                limit: _this19.limit,
                offset: 0
              });
            }
          });
        }
        /**
         * Lifecycle hook that is called after a component's
         * content has been fully initialized.
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this20 = this;

          this.columnTemplates.changes.subscribe(function (v) {
            return _this20.translateColumns(v);
          });
          this.listenForColumnInputChanges();
        }
        /**
         * Translates the templates to the column objects
         */

      }, {
        key: "translateColumns",
        value: function translateColumns(val) {
          if (val) {
            var arr = val.toArray();

            if (arr.length) {
              this._internalColumns = translateTemplates(arr);
              setColumnDefaults(this._internalColumns);
              this.recalculateColumns();
              this.sortInternalRows();
              this.cd.markForCheck();
            }
          }
        }
        /**
         * Creates a map with the data grouped by the user choice of grouping index
         *
         * @param originalArray the original array passed via parameter
         * @param groupByIndex  the index of the column to group the data by
         */

      }, {
        key: "groupArrayBy",
        value: function groupArrayBy(originalArray, groupBy) {
          // create a map to hold groups with their corresponding results
          var map = new Map();
          var i = 0;
          originalArray.forEach(function (item) {
            var key = item[groupBy];

            if (!map.has(key)) {
              map.set(key, [item]);
            } else {
              map.get(key).push(item);
            }

            i++;
          });

          var addGroup = function addGroup(key, value) {
            return {
              key: key,
              value: value
            };
          }; // convert map back to a simple array of objects


          return Array.from(map, function (x) {
            return addGroup(x[0], x[1]);
          });
        }
        /*
         * Lifecycle hook that is called when Angular dirty checks a directive.
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
              this.sortInternalRows();
            } else {
              this._internalRows = _toConsumableArray(this.rows);
            } // auto group by parent on new update


            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            this.recalculatePages();
            this.cd.markForCheck();
          }
        }
        /**
         * Recalc's the sizes of the grid.
         *
         * Updated automatically on changes to:
         *
         *  - Columns
         *  - Rows
         *  - Paging related
         *
         * Also can be manually invoked or upon window resize.
         */

      }, {
        key: "recalculate",
        value: function recalculate() {
          this.recalculateDims();
          this.recalculateColumns();
          this.cd.markForCheck();
        }
        /**
         * Window resize handler to update sizes.
         */

      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          this.recalculate();
        }
        /**
         * Recalulcates the column widths based on column width
         * distribution mode and scrollbar offsets.
         */

      }, {
        key: "recalculateColumns",
        value: function recalculateColumns() {
          var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._internalColumns;
          var forceIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
          var allowBleed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.scrollbarH;
          if (!columns) return undefined;
          var width = this._innerWidth;

          if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
          }

          if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx, allowBleed);
          } else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
          }

          return columns;
        }
        /**
         * Recalculates the dimensions of the table size.
         * Internally calls the page size and row count calcs too.
         *
         */

      }, {
        key: "recalculateDims",
        value: function recalculateDims() {
          var dims = this.dimensionsHelper.getDimensions(this.element);
          this._innerWidth = Math.floor(dims.width);

          if (this.scrollbarV) {
            var height = dims.height;
            if (this.headerHeight) height = height - this.headerHeight;
            if (this.footerHeight) height = height - this.footerHeight;
            this.bodyHeight = height;
          }

          this.recalculatePages();
        }
        /**
         * Recalculates the pages after a update.
         */

      }, {
        key: "recalculatePages",
        value: function recalculatePages() {
          this.pageSize = this.calcPageSize();
          this.rowCount = this.calcRowCount();
        }
        /**
         * Body triggered a page event.
         */

      }, {
        key: "onBodyPage",
        value: function onBodyPage(_ref12) {
          var offset = _ref12.offset;

          // Avoid pagination caming from body events like scroll when the table
          // has no virtualization and the external paging is enable.
          // This means, let's the developer handle pagination by my him(her) self
          if (this.externalPaging && !this.virtualization) {
            return;
          }

          this.offset = offset;
          this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
          });
        }
        /**
         * The body triggered a scroll event.
         */

      }, {
        key: "onBodyScroll",
        value: function onBodyScroll(event) {
          this._offsetX.next(event.offsetX);

          this.scroll.emit(event);
          this.cd.detectChanges();
        }
        /**
         * The footer triggered a page event.
         */

      }, {
        key: "onFooterPage",
        value: function onFooterPage(event) {
          this.offset = event.page - 1;
          this.bodyComponent.updateOffsetY(this.offset);
          this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
          });

          if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
              selected: this.selected
            });
          }
        }
        /**
         * Recalculates the sizes of the page
         */

      }, {
        key: "calcPageSize",
        value: function calcPageSize() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

          // Keep the page size constant even if the row has been expanded.
          // This is because an expanded row is still considered to be a child of
          // the original row.  Hence calculation would use rowHeight only.
          if (this.scrollbarV && this.virtualization) {
            var size = Math.ceil(this.bodyHeight / this.rowHeight);
            return Math.max(size, 0);
          } // if limit is passed, we are paging


          if (this.limit !== undefined) {
            return this.limit;
          } // otherwise use row length


          if (val) {
            return val.length;
          } // other empty :(


          return 0;
        }
        /**
         * Calculates the row count.
         */

      }, {
        key: "calcRowCount",
        value: function calcRowCount() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

          if (!this.externalPaging) {
            if (!val) return 0;

            if (this.groupedRows) {
              return this.groupedRows.length;
            } else if (this.treeFromRelation != null && this.treeToRelation != null) {
              return this._internalRows.length;
            } else {
              return val.length;
            }
          }

          return this.count;
        }
        /**
         * The header triggered a contextmenu event.
         */

      }, {
        key: "onColumnContextmenu",
        value: function onColumnContextmenu(_ref13) {
          var event = _ref13.event,
              column = _ref13.column;
          this.tableContextmenu.emit({
            event: event,
            type: ContextmenuType.header,
            content: column
          });
        }
        /**
         * The body triggered a contextmenu event.
         */

      }, {
        key: "onRowContextmenu",
        value: function onRowContextmenu(_ref14) {
          var event = _ref14.event,
              row = _ref14.row;
          this.tableContextmenu.emit({
            event: event,
            type: ContextmenuType.body,
            content: row
          });
        }
        /**
         * The header triggered a column resize event.
         */

      }, {
        key: "onColumnResize",
        value: function onColumnResize(_ref15) {
          var column = _ref15.column,
              newValue = _ref15.newValue;

          /* Safari/iOS 10.2 workaround */
          if (column === undefined) {
            return;
          }

          var idx;

          var cols = this._internalColumns.map(function (c, i) {
            c = Object.assign({}, c);

            if (c.$$id === column.$$id) {
              idx = i;
              c.width = newValue; // set this so we can force the column
              // width distribution to be to this value

              c.$$oldWidth = newValue;
            }

            return c;
          });

          this.recalculateColumns(cols, idx);
          this._internalColumns = cols;
          this.resize.emit({
            column: column,
            newValue: newValue
          });
        }
        /**
         * The header triggered a column re-order event.
         */

      }, {
        key: "onColumnReorder",
        value: function onColumnReorder(_ref16) {
          var column = _ref16.column,
              newValue = _ref16.newValue,
              prevValue = _ref16.prevValue;

          var cols = this._internalColumns.map(function (c) {
            return Object.assign({}, c);
          });

          if (this.swapColumns) {
            var prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
          } else {
            if (newValue > prevValue) {
              var movedCol = cols[prevValue];

              for (var i = prevValue; i < newValue; i++) {
                cols[i] = cols[i + 1];
              }

              cols[newValue] = movedCol;
            } else {
              var _movedCol = cols[prevValue];

              for (var _i3 = prevValue; _i3 > newValue; _i3--) {
                cols[_i3] = cols[_i3 - 1];
              }

              cols[newValue] = _movedCol;
            }
          }

          this._internalColumns = cols;
          this.reorder.emit({
            column: column,
            newValue: newValue,
            prevValue: prevValue
          });
        }
        /**
         * The header triggered a column sort event.
         */

      }, {
        key: "onColumnSort",
        value: function onColumnSort(event) {
          // clean selected rows
          if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
              selected: this.selected
            });
          }

          this.sorts = event.sorts; // this could be optimized better since it will resort
          // the rows again on the 'push' detection...

          if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
          } // auto group by parent on new update


          this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // Always go to first page when sorting to see the newly sorted data

          this.offset = 0;
          this.bodyComponent.updateOffsetY(this.offset);
          this.sort.emit(event);
        }
        /**
         * Toggle all row selection
         */

      }, {
        key: "onHeaderSelect",
        value: function onHeaderSelect(event) {
          if (this.bodyComponent && this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            var first = this.bodyComponent.indexes.first;
            var last = this.bodyComponent.indexes.last;
            var allSelected = this.selected.length === last - first; // remove all existing either way

            this.selected = []; // do the opposite here

            if (!allSelected) {
              var _this$selected;

              (_this$selected = this.selected).push.apply(_this$selected, _toConsumableArray(this._internalRows.slice(first, last)));
            }
          } else {
            // before we splice, chk if we currently have all selected
            var _allSelected = this.selected.length === this.rows.length; // remove all existing either way


            this.selected = []; // do the opposite here

            if (!_allSelected) {
              var _this$selected2;

              (_this$selected2 = this.selected).push.apply(_this$selected2, _toConsumableArray(this.rows));
            }
          }

          this.select.emit({
            selected: this.selected
          });
        }
        /**
         * A row was selected from body
         */

      }, {
        key: "onBodySelect",
        value: function onBodySelect(event) {
          this.select.emit(event);
        }
        /**
         * A row was expanded or collapsed for tree
         */

      }, {
        key: "onTreeAction",
        value: function onTreeAction(event) {
          var _this21 = this;

          var row = event.row; // TODO: For duplicated items this will not work

          var rowIndex = this._rows.findIndex(function (r) {
            return r[_this21.treeToRelation] === event.row[_this21.treeToRelation];
          });

          this.treeAction.emit({
            row: row,
            rowIndex: rowIndex
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._subscriptions.forEach(function (subscription) {
            return subscription.unsubscribe();
          });
        }
        /**
         * listen for changes to input bindings of all DataTableColumnDirective and
         * trigger the columnTemplates.changes observable to emit
         */

      }, {
        key: "listenForColumnInputChanges",
        value: function listenForColumnInputChanges() {
          var _this22 = this;

          this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(function () {
            if (_this22.columnTemplates) {
              _this22.columnTemplates.notifyOnChanges();
            }
          }));
        }
      }, {
        key: "sortInternalRows",
        value: function sortInternalRows() {
          this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
        }
      }]);

      return DatatableComponent;
    }();

    DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
      return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('configuration', 8));
    };

    DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DatatableComponent,
      selectors: [["ngx-datatable"]],
      contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
        }
      },
      viewQuery: function DatatableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DataTableBodyComponent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DataTableHeaderComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
        }
      },
      hostAttrs: [1, "ngx-datatable"],
      hostVars: 22,
      hostBindings: function DatatableComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() {
            return ctx.onWindowResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
        }
      },
      inputs: {
        selected: "selected",
        scrollbarV: "scrollbarV",
        scrollbarH: "scrollbarH",
        rowHeight: "rowHeight",
        columnMode: "columnMode",
        headerHeight: "headerHeight",
        footerHeight: "footerHeight",
        externalPaging: "externalPaging",
        externalSorting: "externalSorting",
        loadingIndicator: "loadingIndicator",
        reorderable: "reorderable",
        swapColumns: "swapColumns",
        sortType: "sortType",
        sorts: "sorts",
        cssClasses: "cssClasses",
        messages: "messages",
        groupExpansionDefault: "groupExpansionDefault",
        selectAllRowsOnPage: "selectAllRowsOnPage",
        virtualization: "virtualization",
        summaryRow: "summaryRow",
        summaryHeight: "summaryHeight",
        summaryPosition: "summaryPosition",
        rowIdentity: "rowIdentity",
        rows: "rows",
        groupedRows: "groupedRows",
        groupRowsBy: "groupRowsBy",
        columns: "columns",
        limit: "limit",
        count: "count",
        offset: "offset",
        targetMarkerTemplate: "targetMarkerTemplate",
        selectionType: "selectionType",
        rowClass: "rowClass",
        selectCheck: "selectCheck",
        displayCheck: "displayCheck",
        trackByProp: "trackByProp",
        treeFromRelation: "treeFromRelation",
        treeToRelation: "treeToRelation"
      },
      outputs: {
        scroll: "scroll",
        activate: "activate",
        select: "select",
        sort: "sort",
        page: "page",
        reorder: "reorder",
        resize: "resize",
        tableContextmenu: "tableContextmenu",
        treeAction: "treeAction"
      },
      decls: 5,
      vars: 34,
      consts: [["visibilityObserver", "", 3, "visible"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], [3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
      template: function DatatableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() {
            return ctx.recalculate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 16, "datatable-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "datatable-body", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) {
            return ctx.onBodyPage($event);
          })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) {
            return ctx.activate.emit($event);
          })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) {
            return ctx.onRowContextmenu($event);
          })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) {
            return ctx.onBodySelect($event);
          })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) {
            return ctx.onBodyScroll($event);
          })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) {
            return ctx.onTreeAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.headerHeight);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerHeight);
        }
      },
      directives: function directives() {
        return [VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableBodyComponent, DataTableHeaderComponent, DataTableFooterComponent];
      },
      pipes: function pipes() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]];
      },
      styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"],
      encapsulation: 2,
      changeDetection: 0
    });

    DatatableComponent.ctorParameters = function () {
      return [{
        type: ScrollbarHelper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: DimensionsHelper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
      }, {
        type: ColumnChangesService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['configuration']
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "targetMarkerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "rows", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "groupRowsBy", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "groupedRows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "columns", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "selected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "scrollbarV", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "scrollbarH", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "rowHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "columnMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "headerHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "footerHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "externalPaging", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "externalSorting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "limit", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "count", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "offset", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "loadingIndicator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "selectionType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "reorderable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "swapColumns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "sortType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "sorts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "cssClasses", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "messages", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "rowClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "selectCheck", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "displayCheck", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "groupExpansionDefault", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "trackByProp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "selectAllRowsOnPage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "virtualization", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "treeFromRelation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "treeToRelation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "summaryRow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "summaryHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "summaryPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "scroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "activate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "select", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "page", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "reorder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "resize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "tableContextmenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "treeAction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.fixed-header')], DatatableComponent.prototype, "isFixedHeader", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.fixed-row')], DatatableComponent.prototype, "isFixedRow", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.scroll-vertical')], DatatableComponent.prototype, "isVertScroll", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.virtualized')], DatatableComponent.prototype, "isVirtualized", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.scroll-horz')], DatatableComponent.prototype, "isHorScroll", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.selectable')], DatatableComponent.prototype, "isSelectable", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.checkbox-selection')], DatatableComponent.prototype, "isCheckboxSelection", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.cell-selection')], DatatableComponent.prototype, "isCellSelection", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.single-selection')], DatatableComponent.prototype, "isSingleSelection", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.multi-selection')], DatatableComponent.prototype, "isMultiSelection", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.multi-click-selection')], DatatableComponent.prototype, "isMultiClickSelection", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(DataTableColumnDirective)], DatatableComponent.prototype, "columnTemplates", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableRowDetailDirective)], DatatableComponent.prototype, "rowDetail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableGroupHeaderDirective)], DatatableComponent.prototype, "groupHeader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableFooterDirective)], DatatableComponent.prototype, "footer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(DataTableBodyComponent)], DatatableComponent.prototype, "bodyComponent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(DataTableHeaderComponent)], DatatableComponent.prototype, "headerComponent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "rowIdentity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'), throttleable(5)], DatatableComponent.prototype, "onWindowResize", null);
    DatatableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('configuration'))], DatatableComponent);

    var DataTableHeaderCellComponent = /*#__PURE__*/function () {
      function DataTableHeaderCellComponent(cd) {
        _classCallCheck(this, DataTableHeaderCellComponent);

        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
          column: this.column,
          sortDir: this.sortDir,
          sortFn: this.sortFn,
          allRowsSelected: this.allRowsSelected,
          selectFn: this.selectFn
        };
      }

      _createClass(DataTableHeaderCellComponent, [{
        key: "allRowsSelected",
        get: function get() {
          return this._allRowsSelected;
        },
        set: function set(value) {
          this._allRowsSelected = value;
          this.cellContext.allRowsSelected = value;
        }
      }, {
        key: "column",
        get: function get() {
          return this._column;
        },
        set: function set(column) {
          this._column = column;
          this.cellContext.column = column;
          this.cd.markForCheck();
        }
      }, {
        key: "sorts",
        get: function get() {
          return this._sorts;
        },
        set: function set(val) {
          this._sorts = val;
          this.sortDir = this.calcSortDir(val);
          this.cellContext.sortDir = this.sortDir;
          this.sortClass = this.calcSortClass(this.sortDir);
          this.cd.markForCheck();
        }
      }, {
        key: "columnCssClasses",
        get: function get() {
          var cls = 'datatable-header-cell';
          if (this.column.sortable) cls += ' sortable';
          if (this.column.resizeable) cls += ' resizeable';

          if (this.column.headerClass) {
            if (typeof this.column.headerClass === 'string') {
              cls += ' ' + this.column.headerClass;
            } else if (typeof this.column.headerClass === 'function') {
              var res = this.column.headerClass({
                column: this.column
              });

              if (typeof res === 'string') {
                cls += res;
              } else if (typeof res === 'object') {
                var keys = Object.keys(res);

                for (var _i4 = 0, _keys = keys; _i4 < _keys.length; _i4++) {
                  var k = _keys[_i4];
                  if (res[k] === true) cls += " ".concat(k);
                }
              }
            }
          }

          var sortDir = this.sortDir;

          if (sortDir) {
            cls += " sort-active sort-".concat(sortDir);
          }

          return cls;
        }
      }, {
        key: "name",
        get: function get() {
          // guaranteed to have a value by setColumnDefaults() in column-helper.ts
          return this.column.headerTemplate === undefined ? this.column.name : undefined;
        }
      }, {
        key: "minWidth",
        get: function get() {
          return this.column.minWidth;
        }
      }, {
        key: "maxWidth",
        get: function get() {
          return this.column.maxWidth;
        }
      }, {
        key: "width",
        get: function get() {
          return this.column.width;
        }
      }, {
        key: "isCheckboxable",
        get: function get() {
          return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
        }
      }, {
        key: "onContextmenu",
        value: function onContextmenu($event) {
          this.columnContextmenu.emit({
            event: $event,
            column: this.column
          });
        }
      }, {
        key: "calcSortDir",
        value: function calcSortDir(sorts) {
          var _this23 = this;

          if (sorts && this.column) {
            var sort = sorts.find(function (s) {
              return s.prop === _this23.column.prop;
            });
            if (sort) return sort.dir;
          }
        }
      }, {
        key: "onSort",
        value: function onSort() {
          if (!this.column.sortable) return;
          var newValue = nextSortDir(this.sortType, this.sortDir);
          this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue: newValue
          });
        }
      }, {
        key: "calcSortClass",
        value: function calcSortClass(sortDir) {
          if (sortDir === SortDirection.asc) {
            return "sort-btn sort-asc ".concat(this.sortAscendingIcon);
          } else if (sortDir === SortDirection.desc) {
            return "sort-btn sort-desc ".concat(this.sortDescendingIcon);
          } else {
            return "sort-btn";
          }
        }
      }]);

      return DataTableHeaderCellComponent;
    }();

    DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) {
      return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    DataTableHeaderCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableHeaderCellComponent,
      selectors: [["datatable-header-cell"]],
      hostAttrs: [1, "datatable-header-cell"],
      hostVars: 11,
      hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) {
            return ctx.onContextmenu($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.columnCssClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
        }
      },
      inputs: {
        allRowsSelected: "allRowsSelected",
        column: "column",
        sorts: "sorts",
        sortType: "sortType",
        sortAscendingIcon: "sortAscendingIcon",
        sortDescendingIcon: "sortDescendingIcon",
        isTarget: "isTarget",
        targetMarkerTemplate: "targetMarkerTemplate",
        targetMarkerContext: "targetMarkerContext",
        selectionType: "selectionType",
        headerHeight: "headerHeight"
      },
      outputs: {
        sort: "sort",
        select: "select",
        columnContextmenu: "columnContextmenu"
      },
      decls: 6,
      vars: 6,
      consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
      template: function DataTableHeaderCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() {
            return ctx.onSort();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTarget);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sortClass);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });

    DataTableHeaderCellComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "sortType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "sortAscendingIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "sortDescendingIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "isTarget", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "targetMarkerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "targetMarkerContext", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "allRowsSelected", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "selectionType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "column", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "headerHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "sorts", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderCellComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderCellComponent.prototype, "select", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderCellComponent.prototype, "columnContextmenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], DataTableHeaderCellComponent.prototype, "columnCssClasses", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.title')], DataTableHeaderCellComponent.prototype, "name", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.minWidth.px')], DataTableHeaderCellComponent.prototype, "minWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.maxWidth.px')], DataTableHeaderCellComponent.prototype, "maxWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px')], DataTableHeaderCellComponent.prototype, "width", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event'])], DataTableHeaderCellComponent.prototype, "onContextmenu", null);

    var DataTableFooterComponent = /*#__PURE__*/function () {
      function DataTableFooterComponent() {
        _classCallCheck(this, DataTableFooterComponent);

        this.selectedCount = 0;
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(DataTableFooterComponent, [{
        key: "isVisible",
        get: function get() {
          return this.rowCount / this.pageSize > 1;
        }
      }, {
        key: "curPage",
        get: function get() {
          return this.offset + 1;
        }
      }]);

      return DataTableFooterComponent;
    }();

    DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) {
      return new (t || DataTableFooterComponent)();
    };

    DataTableFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableFooterComponent,
      selectors: [["datatable-footer"]],
      hostAttrs: [1, "datatable-footer"],
      inputs: {
        selectedCount: "selectedCount",
        footerHeight: "footerHeight",
        rowCount: "rowCount",
        pageSize: "pageSize",
        offset: "offset",
        pagerLeftArrowIcon: "pagerLeftArrowIcon",
        pagerRightArrowIcon: "pagerRightArrowIcon",
        pagerPreviousIcon: "pagerPreviousIcon",
        pagerNextIcon: "pagerNextIcon",
        totalMessage: "totalMessage",
        footerTemplate: "footerTemplate",
        selectedMessage: "selectedMessage"
      },
      outputs: {
        page: "page"
      },
      decls: 4,
      vars: 8,
      consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
      template: function DataTableFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, ctx.selectedMessage));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], DataTablePagerComponent];
      },
      encapsulation: 2,
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "footerHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "rowCount", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "pageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "pagerLeftArrowIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "pagerRightArrowIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "pagerPreviousIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "pagerNextIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "totalMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "footerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "selectedCount", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "selectedMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableFooterComponent.prototype, "page", void 0);

    var DataTablePagerComponent = /*#__PURE__*/function () {
      function DataTablePagerComponent() {
        _classCallCheck(this, DataTablePagerComponent);

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._count = 0;
        this._page = 1;
        this._size = 0;
      }

      _createClass(DataTablePagerComponent, [{
        key: "size",
        get: function get() {
          return this._size;
        },
        set: function set(val) {
          this._size = val;
          this.pages = this.calcPages();
        }
      }, {
        key: "count",
        get: function get() {
          return this._count;
        },
        set: function set(val) {
          this._count = val;
          this.pages = this.calcPages();
        }
      }, {
        key: "page",
        get: function get() {
          return this._page;
        },
        set: function set(val) {
          this._page = val;
          this.pages = this.calcPages();
        }
      }, {
        key: "totalPages",
        get: function get() {
          var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
          return Math.max(count || 0, 1);
        }
      }, {
        key: "canPrevious",
        value: function canPrevious() {
          return this.page > 1;
        }
      }, {
        key: "canNext",
        value: function canNext() {
          return this.page < this.totalPages;
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          this.selectPage(this.page - 1);
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.selectPage(this.page + 1);
        }
      }, {
        key: "selectPage",
        value: function selectPage(page) {
          if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
              page: page
            });
          }
        }
      }, {
        key: "calcPages",
        value: function calcPages(page) {
          var pages = [];
          var startPage = 1;
          var endPage = this.totalPages;
          var maxSize = 5;
          var isMaxSized = maxSize < this.totalPages;
          page = page || this.page;

          if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);

            if (startPage < 1) {
              startPage = 1;
              endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            } else if (endPage > this.totalPages) {
              startPage = Math.max(this.totalPages - maxSize + 1, 1);
              endPage = this.totalPages;
            }
          }

          for (var num = startPage; num <= endPage; num++) {
            pages.push({
              number: num,
              text: num
            });
          }

          return pages;
        }
      }]);

      return DataTablePagerComponent;
    }();

    DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) {
      return new (t || DataTablePagerComponent)();
    };

    DataTablePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTablePagerComponent,
      selectors: [["datatable-pager"]],
      hostAttrs: [1, "datatable-pager"],
      inputs: {
        size: "size",
        count: "count",
        page: "page",
        pagerLeftArrowIcon: "pagerLeftArrowIcon",
        pagerRightArrowIcon: "pagerRightArrowIcon",
        pagerPreviousIcon: "pagerPreviousIcon",
        pagerNextIcon: "pagerNextIcon"
      },
      outputs: {
        change: "change"
      },
      decls: 14,
      vars: 21,
      consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]],
      template: function DataTablePagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() {
            return ctx.selectPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() {
            return ctx.prevPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() {
            return ctx.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() {
            return ctx.selectPage(ctx.totalPages);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canPrevious());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerPreviousIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canPrevious());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canNext());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerRightArrowIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canNext());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerNextIcon);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      encapsulation: 2,
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "pagerLeftArrowIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "pagerRightArrowIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "pagerPreviousIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "pagerNextIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "size", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "count", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "page", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTablePagerComponent.prototype, "change", void 0);

    var ProgressBarComponent = function ProgressBarComponent() {
      _classCallCheck(this, ProgressBarComponent);
    };

    ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
      return new (t || ProgressBarComponent)();
    };

    ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProgressBarComponent,
      selectors: [["datatable-progress"]],
      decls: 3,
      vars: 0,
      consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
      template: function ProgressBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    var Keys;

    (function (Keys) {
      Keys[Keys["up"] = 38] = "up";
      Keys[Keys["down"] = 40] = "down";
      Keys[Keys["return"] = 13] = "return";
      Keys[Keys["escape"] = 27] = "escape";
      Keys[Keys["left"] = 37] = "left";
      Keys[Keys["right"] = 39] = "right";
    })(Keys || (Keys = {}));

    var DataTableBodyRowComponent = /*#__PURE__*/function () {
      function DataTableBodyRowComponent(differs, scrollbarHelper, cd, element) {
        _classCallCheck(this, DataTableBodyRowComponent);

        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._groupStyles = {
          left: {},
          center: {},
          right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
      }

      _createClass(DataTableBodyRowComponent, [{
        key: "columns",
        get: function get() {
          return this._columns;
        },
        set: function set(val) {
          this._columns = val;
          this.recalculateColumns(val);
          this.buildStylesByGroup();
        }
      }, {
        key: "innerWidth",
        get: function get() {
          return this._innerWidth;
        },
        set: function set(val) {
          if (this._columns) {
            var colByPin = columnsByPin(this._columns);
            this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
          }

          this._innerWidth = val;
          this.recalculateColumns();
          this.buildStylesByGroup();
        }
      }, {
        key: "offsetX",
        get: function get() {
          return this._offsetX;
        },
        set: function set(val) {
          this._offsetX = val;
          this.buildStylesByGroup();
        }
      }, {
        key: "cssClass",
        get: function get() {
          var cls = 'datatable-body-row';

          if (this.isSelected) {
            cls += ' active';
          }

          if (this.rowIndex % 2 !== 0) {
            cls += ' datatable-row-odd';
          }

          if (this.rowIndex % 2 === 0) {
            cls += ' datatable-row-even';
          }

          if (this.rowClass) {
            var res = this.rowClass(this.row);

            if (typeof res === 'string') {
              cls += " ".concat(res);
            } else if (typeof res === 'object') {
              var keys = Object.keys(res);

              for (var _i5 = 0, _keys2 = keys; _i5 < _keys2.length; _i5++) {
                var k = _keys2[_i5];

                if (res[k] === true) {
                  cls += " ".concat(k);
                }
              }
            }
          }

          return cls;
        }
      }, {
        key: "columnsTotalWidths",
        get: function get() {
          return this._columnGroupWidths.total;
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
          }
        }
      }, {
        key: "trackByGroups",
        value: function trackByGroups(index, colGroup) {
          return colGroup.type;
        }
      }, {
        key: "columnTrackingFn",
        value: function columnTrackingFn(index, column) {
          return column.$$id;
        }
      }, {
        key: "buildStylesByGroup",
        value: function buildStylesByGroup() {
          this._groupStyles.left = this.calcStylesByGroup('left');
          this._groupStyles.center = this.calcStylesByGroup('center');
          this._groupStyles.right = this.calcStylesByGroup('right');
          this.cd.markForCheck();
        }
      }, {
        key: "calcStylesByGroup",
        value: function calcStylesByGroup(group) {
          var widths = this._columnGroupWidths;
          var offsetX = this.offsetX;
          var styles = {
            width: "".concat(widths[group], "px")
          };

          if (group === 'left') {
            translateXY(styles, offsetX, 0);
          } else if (group === 'right') {
            var bodyWidth = parseInt(this.innerWidth + '', 0);
            var totalDiff = widths.total - bodyWidth;
            var offsetDiff = totalDiff - offsetX;
            var offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
          }

          return styles;
        }
      }, {
        key: "onActivate",
        value: function onActivate(event, index) {
          event.cellIndex = index;
          event.rowElement = this._element;
          this.activate.emit(event);
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var keyCode = event.keyCode;
          var isTargetRow = event.target === this._element;
          var isAction = keyCode === Keys["return"] || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

          if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
              type: 'keydown',
              event: event,
              row: this.row,
              rowElement: this._element
            });
          }
        }
      }, {
        key: "onMouseenter",
        value: function onMouseenter(event) {
          this.activate.emit({
            type: 'mouseenter',
            event: event,
            row: this.row,
            rowElement: this._element
          });
        }
      }, {
        key: "recalculateColumns",
        value: function recalculateColumns() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.columns;
          this._columns = val;
          var colsByPin = columnsByPin(this._columns);
          this._columnsByPin = columnsByPinArr(this._columns);
          this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
        }
      }, {
        key: "onTreeAction",
        value: function onTreeAction() {
          this.treeAction.emit();
        }
      }]);

      return DataTableBodyRowComponent;
    }();

    DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) {
      return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    DataTableBodyRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableBodyRowComponent,
      selectors: [["datatable-body-row"]],
      hostVars: 6,
      hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseenter($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
        }
      },
      inputs: {
        treeStatus: "treeStatus",
        columns: "columns",
        innerWidth: "innerWidth",
        offsetX: "offsetX",
        expanded: "expanded",
        rowClass: "rowClass",
        row: "row",
        group: "group",
        isSelected: "isSelected",
        rowIndex: "rowIndex",
        displayCheck: "displayCheck",
        rowHeight: "rowHeight"
      },
      outputs: {
        activate: "activate",
        treeAction: "treeAction"
      },
      decls: 1,
      vars: 2,
      consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]],
      template: function DataTableBodyRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableBodyCellComponent];
      },
      encapsulation: 2,
      changeDetection: 0
    });

    DataTableBodyRowComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
      }, {
        type: ScrollbarHelper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "columns", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "innerWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "expanded", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "rowClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "row", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "group", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "isSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "rowIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "displayCheck", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "treeStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "offsetX", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], DataTableBodyRowComponent.prototype, "cssClass", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "rowHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px')], DataTableBodyRowComponent.prototype, "columnsTotalWidths", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyRowComponent.prototype, "activate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyRowComponent.prototype, "treeAction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], DataTableBodyRowComponent.prototype, "onKeyDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter', ['$event'])], DataTableBodyRowComponent.prototype, "onMouseenter", null);
    DataTableBodyRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())], DataTableBodyRowComponent);

    var DataTableRowWrapperComponent = /*#__PURE__*/function () {
      function DataTableRowWrapperComponent(cd, differs) {
        _classCallCheck(this, DataTableRowWrapperComponent);

        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this.groupContext = {
          group: this.row,
          expanded: this.expanded,
          rowIndex: this.rowIndex
        };
        this.rowContext = {
          row: this.row,
          expanded: this.expanded,
          rowIndex: this.rowIndex
        };
        this._expanded = false;
        this.rowDiffer = differs.find({}).create();
      }

      _createClass(DataTableRowWrapperComponent, [{
        key: "rowIndex",
        get: function get() {
          return this._rowIndex;
        },
        set: function set(val) {
          this._rowIndex = val;
          this.rowContext.rowIndex = val;
          this.groupContext.rowIndex = val;
          this.cd.markForCheck();
        }
      }, {
        key: "expanded",
        get: function get() {
          return this._expanded;
        },
        set: function set(val) {
          this._expanded = val;
          this.groupContext.expanded = val;
          this.rowContext.expanded = val;
          this.cd.markForCheck();
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
          }
        }
      }, {
        key: "onContextmenu",
        value: function onContextmenu($event) {
          this.rowContextmenu.emit({
            event: $event,
            row: this.row
          });
        }
      }, {
        key: "getGroupHeaderStyle",
        value: function getGroupHeaderStyle() {
          var styles = {};
          styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
          styles['backface-visibility'] = 'hidden';
          styles['width'] = this.innerWidth;
          return styles;
        }
      }]);

      return DataTableRowWrapperComponent;
    }();

    DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) {
      return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]));
    };

    DataTableRowWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableRowWrapperComponent,
      selectors: [["datatable-row-wrapper"]],
      hostAttrs: [1, "datatable-row-wrapper"],
      hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) {
            return ctx.onContextmenu($event);
          });
        }
      },
      inputs: {
        rowIndex: "rowIndex",
        expanded: "expanded",
        innerWidth: "innerWidth",
        rowDetail: "rowDetail",
        groupHeader: "groupHeader",
        offsetX: "offsetX",
        detailRowHeight: "detailRowHeight",
        row: "row",
        groupedRows: "groupedRows"
      },
      outputs: {
        rowContextmenu: "rowContextmenu"
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 3,
      consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
      template: function DataTableRowWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_1_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });

    DataTableRowWrapperComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "innerWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "rowDetail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "groupHeader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "offsetX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "detailRowHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "row", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "groupedRows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableRowWrapperComponent.prototype, "rowContextmenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "rowIndex", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "expanded", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event'])], DataTableRowWrapperComponent.prototype, "onContextmenu", null);

    var DataTableBodyCellComponent = /*#__PURE__*/function () {
      function DataTableBodyCellComponent(element, cd) {
        _classCallCheck(this, DataTableBodyCellComponent);

        this.cd = cd;
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
          onCheckboxChangeFn: this.onCheckboxChangeFn,
          activateFn: this.activateFn,
          row: this.row,
          group: this.group,
          value: this.value,
          column: this.column,
          rowHeight: this.rowHeight,
          isSelected: this.isSelected,
          rowIndex: this.rowIndex,
          treeStatus: this.treeStatus,
          onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
      }

      _createClass(DataTableBodyCellComponent, [{
        key: "group",
        get: function get() {
          return this._group;
        },
        set: function set(group) {
          this._group = group;
          this.cellContext.group = group;
          this.checkValueUpdates();
          this.cd.markForCheck();
        }
      }, {
        key: "rowHeight",
        get: function get() {
          return this._rowHeight;
        },
        set: function set(val) {
          this._rowHeight = val;
          this.cellContext.rowHeight = val;
          this.checkValueUpdates();
          this.cd.markForCheck();
        }
      }, {
        key: "isSelected",
        get: function get() {
          return this._isSelected;
        },
        set: function set(val) {
          this._isSelected = val;
          this.cellContext.isSelected = val;
          this.cd.markForCheck();
        }
      }, {
        key: "expanded",
        get: function get() {
          return this._expanded;
        },
        set: function set(val) {
          this._expanded = val;
          this.cellContext.expanded = val;
          this.cd.markForCheck();
        }
      }, {
        key: "rowIndex",
        get: function get() {
          return this._rowIndex;
        },
        set: function set(val) {
          this._rowIndex = val;
          this.cellContext.rowIndex = val;
          this.checkValueUpdates();
          this.cd.markForCheck();
        }
      }, {
        key: "column",
        get: function get() {
          return this._column;
        },
        set: function set(column) {
          this._column = column;
          this.cellContext.column = column;
          this.checkValueUpdates();
          this.cd.markForCheck();
        }
      }, {
        key: "row",
        get: function get() {
          return this._row;
        },
        set: function set(row) {
          this._row = row;
          this.cellContext.row = row;
          this.checkValueUpdates();
          this.cd.markForCheck();
        }
      }, {
        key: "sorts",
        get: function get() {
          return this._sorts;
        },
        set: function set(val) {
          this._sorts = val;
          this.calcSortDir = this.calcSortDir(val);
        }
      }, {
        key: "treeStatus",
        get: function get() {
          return this._treeStatus;
        },
        set: function set(status) {
          if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
            this._treeStatus = 'collapsed';
          } else {
            this._treeStatus = status;
          }

          this.cellContext.treeStatus = this._treeStatus;
          this.checkValueUpdates();
          this.cd.markForCheck();
        }
      }, {
        key: "columnCssClasses",
        get: function get() {
          var cls = 'datatable-body-cell';

          if (this.column.cellClass) {
            if (typeof this.column.cellClass === 'string') {
              cls += ' ' + this.column.cellClass;
            } else if (typeof this.column.cellClass === 'function') {
              var res = this.column.cellClass({
                row: this.row,
                group: this.group,
                column: this.column,
                value: this.value,
                rowHeight: this.rowHeight
              });

              if (typeof res === 'string') {
                cls += ' ' + res;
              } else if (typeof res === 'object') {
                var keys = Object.keys(res);

                for (var _i6 = 0, _keys3 = keys; _i6 < _keys3.length; _i6++) {
                  var k = _keys3[_i6];

                  if (res[k] === true) {
                    cls += " ".concat(k);
                  }
                }
              }
            }
          }

          if (!this.sortDir) {
            cls += ' sort-active';
          }

          if (this.isFocused) {
            cls += ' active';
          }

          if (this.sortDir === SortDirection.asc) {
            cls += ' sort-asc';
          }

          if (this.sortDir === SortDirection.desc) {
            cls += ' sort-desc';
          }

          return cls;
        }
      }, {
        key: "width",
        get: function get() {
          return this.column.width;
        }
      }, {
        key: "minWidth",
        get: function get() {
          return this.column.minWidth;
        }
      }, {
        key: "maxWidth",
        get: function get() {
          return this.column.maxWidth;
        }
      }, {
        key: "height",
        get: function get() {
          var height = this.rowHeight;

          if (isNaN(height)) {
            return height;
          }

          return height + 'px';
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.checkValueUpdates();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.cellTemplate) {
            this.cellTemplate.clear();
          }
        }
      }, {
        key: "checkValueUpdates",
        value: function checkValueUpdates() {
          var value = '';

          if (!this.row || !this.column) {
            value = '';
          } else {
            var val = this.column.$$valueGetter(this.row, this.column.prop);
            var userPipe = this.column.pipe;

            if (userPipe) {
              value = userPipe.transform(val);
            } else if (value !== undefined) {
              value = val;
            }
          }

          if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
          }
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          this.isFocused = true;
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          this.isFocused = false;
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          this.activate.emit({
            type: 'click',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
          });
        }
      }, {
        key: "onDblClick",
        value: function onDblClick(event) {
          this.activate.emit({
            type: 'dblclick',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
          });
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var keyCode = event.keyCode;
          var isTargetCell = event.target === this._element;
          var isAction = keyCode === Keys["return"] || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

          if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
              type: 'keydown',
              event: event,
              row: this.row,
              group: this.group,
              rowHeight: this.rowHeight,
              column: this.column,
              value: this.value,
              cellElement: this._element
            });
          }
        }
      }, {
        key: "onCheckboxChange",
        value: function onCheckboxChange(event) {
          this.activate.emit({
            type: 'checkbox',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
          });
        }
      }, {
        key: "calcSortDir",
        value: function calcSortDir(sorts) {
          var _this24 = this;

          if (!sorts) {
            return;
          }

          var sort = sorts.find(function (s) {
            return s.prop === _this24.column.prop;
          });

          if (sort) {
            return sort.dir;
          }
        }
      }, {
        key: "stripHtml",
        value: function stripHtml(html) {
          if (!html.replace) {
            return html;
          }

          return html.replace(/<\/?[^>]+(>|$)/g, '');
        }
      }, {
        key: "onTreeAction",
        value: function onTreeAction() {
          this.treeAction.emit(this.row);
        }
      }, {
        key: "calcLeftMargin",
        value: function calcLeftMargin(column, row) {
          var levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
          return column.isTreeColumn ? row.level * levelIndent : 0;
        }
      }]);

      return DataTableBodyCellComponent;
    }();

    DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) {
      return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    DataTableBodyCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableBodyCellComponent,
      selectors: [["datatable-body-cell"]],
      viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
        }
      },
      hostVars: 10,
      hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() {
            return ctx.onFocus();
          })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() {
            return ctx.onBlur();
          })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) {
            return ctx.onDblClick($event);
          })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.columnCssClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
        }
      },
      inputs: {
        group: "group",
        rowHeight: "rowHeight",
        isSelected: "isSelected",
        expanded: "expanded",
        rowIndex: "rowIndex",
        column: "column",
        row: "row",
        sorts: "sorts",
        treeStatus: "treeStatus",
        displayCheck: "displayCheck"
      },
      outputs: {
        activate: "activate",
        treeAction: "treeAction"
      },
      decls: 5,
      vars: 6,
      consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]],
      template: function DataTableBodyCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });

    DataTableBodyCellComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "displayCheck", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "group", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "rowHeight", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "isSelected", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "expanded", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "rowIndex", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "column", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "row", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "sorts", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "treeStatus", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyCellComponent.prototype, "activate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyCellComponent.prototype, "treeAction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cellTemplate', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": true
    })], DataTableBodyCellComponent.prototype, "cellTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], DataTableBodyCellComponent.prototype, "columnCssClasses", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px')], DataTableBodyCellComponent.prototype, "width", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.minWidth.px')], DataTableBodyCellComponent.prototype, "minWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.maxWidth.px')], DataTableBodyCellComponent.prototype, "maxWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], DataTableBodyCellComponent.prototype, "height", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus')], DataTableBodyCellComponent.prototype, "onFocus", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur')], DataTableBodyCellComponent.prototype, "onBlur", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])], DataTableBodyCellComponent.prototype, "onClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dblclick', ['$event'])], DataTableBodyCellComponent.prototype, "onDblClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], DataTableBodyCellComponent.prototype, "onKeyDown", null);

    function selectRows(selected, row, comparefn) {
      var selectedIndex = comparefn(row, selected);

      if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
      } else {
        selected.push(row);
      }

      return selected;
    }

    function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
      var reverse = index < prevIndex;

      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var greater = i >= prevIndex && i <= index;
        var lesser = i <= prevIndex && i >= index;
        var range = {
          start: 0,
          end: 0
        };

        if (reverse) {
          range = {
            start: index,
            end: prevIndex
          };
        } else {
          range = {
            start: prevIndex,
            end: index + 1
          };
        }

        if (reverse && lesser || !reverse && greater) {
          // if in the positive range to be added to `selected`, and
          // not already in the selected array, add it
          if (i >= range.start && i <= range.end) {
            selected.push(row);
          }
        }
      }

      return selected;
    }

    var DataTableSelectionComponent = /*#__PURE__*/function () {
      function DataTableSelectionComponent() {
        _classCallCheck(this, DataTableSelectionComponent);

        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(DataTableSelectionComponent, [{
        key: "selectRow",
        value: function selectRow(event, index, row) {
          var _this$selected3;

          if (!this.selectEnabled) return;
          var chkbox = this.selectionType === SelectionType.checkbox;
          var multi = this.selectionType === SelectionType.multi;
          var multiClick = this.selectionType === SelectionType.multiClick;
          var selected = [];

          if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
              selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
              selected = selectRows(_toConsumableArray(this.selected), row, this.getRowSelectedIdx.bind(this));
            } else {
              selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
          } else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
          }

          if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
          }

          this.selected.splice(0, this.selected.length);

          (_this$selected3 = this.selected).push.apply(_this$selected3, _toConsumableArray(selected));

          this.prevIndex = index;
          this.select.emit({
            selected: selected
          });
        }
      }, {
        key: "onActivate",
        value: function onActivate(model, index) {
          var type = model.type,
              event = model.event,
              row = model.row;
          var chkbox = this.selectionType === SelectionType.checkbox;
          var select = !chkbox && (type === 'click' || type === 'dblclick') || chkbox && type === 'checkbox';

          if (select) {
            this.selectRow(event, index, row);
          } else if (type === 'keydown') {
            if (event.keyCode === Keys["return"]) {
              this.selectRow(event, index, row);
            } else {
              this.onKeyboardFocus(model);
            }
          }

          this.activate.emit(model);
        }
      }, {
        key: "onKeyboardFocus",
        value: function onKeyboardFocus(model) {
          var keyCode = model.event.keyCode;
          var shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;

          if (shouldFocus) {
            var isCellSelection = this.selectionType === SelectionType.cell;

            if (!model.cellElement || !isCellSelection) {
              this.focusRow(model.rowElement, keyCode);
            } else if (isCellSelection) {
              this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
          }
        }
      }, {
        key: "focusRow",
        value: function focusRow(rowElement, keyCode) {
          var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
          if (nextRowElement) nextRowElement.focus();
        }
      }, {
        key: "getPrevNextRow",
        value: function getPrevNextRow(rowElement, keyCode) {
          var parentElement = rowElement.parentElement;

          if (parentElement) {
            var focusElement;

            if (keyCode === Keys.up) {
              focusElement = parentElement.previousElementSibling;
            } else if (keyCode === Keys.down) {
              focusElement = parentElement.nextElementSibling;
            }

            if (focusElement && focusElement.children.length) {
              return focusElement.children[0];
            }
          }
        }
      }, {
        key: "focusCell",
        value: function focusCell(cellElement, rowElement, keyCode, cellIndex) {
          var nextCellElement;

          if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
          } else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
          } else if (keyCode === Keys.up || keyCode === Keys.down) {
            var nextRowElement = this.getPrevNextRow(rowElement, keyCode);

            if (nextRowElement) {
              var children = nextRowElement.getElementsByClassName('datatable-body-cell');
              if (children.length) nextCellElement = children[cellIndex];
            }
          }

          if (nextCellElement) nextCellElement.focus();
        }
      }, {
        key: "getRowSelected",
        value: function getRowSelected(row) {
          return this.getRowSelectedIdx(row, this.selected) > -1;
        }
      }, {
        key: "getRowSelectedIdx",
        value: function getRowSelectedIdx(row, selected) {
          var _this25 = this;

          if (!selected || !selected.length) return -1;
          var rowId = this.rowIdentity(row);
          return selected.findIndex(function (r) {
            var id = _this25.rowIdentity(r);

            return id === rowId;
          });
        }
      }]);

      return DataTableSelectionComponent;
    }();

    DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) {
      return new (t || DataTableSelectionComponent)();
    };

    DataTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableSelectionComponent,
      selectors: [["datatable-selection"]],
      inputs: {
        rows: "rows",
        selected: "selected",
        selectEnabled: "selectEnabled",
        selectionType: "selectionType",
        rowIdentity: "rowIdentity",
        selectCheck: "selectCheck"
      },
      outputs: {
        activate: "activate",
        select: "select"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function DataTableSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "rows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "selected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "selectEnabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "selectionType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "rowIdentity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "selectCheck", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableSelectionComponent.prototype, "activate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableSelectionComponent.prototype, "select", void 0);

    function defaultSumFunc(cells) {
      var cellsWithValues = cells.filter(function (cell) {
        return !!cell;
      });

      if (!cellsWithValues.length) {
        return null;
      }

      if (cellsWithValues.some(function (cell) {
        return typeof cell !== 'number';
      })) {
        return null;
      }

      return cellsWithValues.reduce(function (res, cell) {
        return res + cell;
      });
    }

    function noopSumFunc(cells) {
      return null;
    }

    var DataTableSummaryRowComponent = /*#__PURE__*/function () {
      function DataTableSummaryRowComponent() {
        _classCallCheck(this, DataTableSummaryRowComponent);

        this.summaryRow = {};
      }

      _createClass(DataTableSummaryRowComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (!this.columns || !this.rows) {
            return;
          }

          this.updateInternalColumns();
          this.updateValues();
        }
      }, {
        key: "updateInternalColumns",
        value: function updateInternalColumns() {
          this._internalColumns = this.columns.map(function (col) {
            return Object.assign(Object.assign({}, col), {
              cellTemplate: col.summaryTemplate
            });
          });
        }
      }, {
        key: "updateValues",
        value: function updateValues() {
          var _this26 = this;

          this.summaryRow = {};
          this.columns.filter(function (col) {
            return !col.summaryTemplate;
          }).forEach(function (col) {
            var cellsFromSingleColumn = _this26.rows.map(function (row) {
              return row[col.prop];
            });

            var sumFunc = _this26.getSummaryFunction(col);

            _this26.summaryRow[col.prop] = col.pipe ? col.pipe.transform(sumFunc(cellsFromSingleColumn)) : sumFunc(cellsFromSingleColumn);
          });
        }
      }, {
        key: "getSummaryFunction",
        value: function getSummaryFunction(column) {
          if (column.summaryFunc === undefined) {
            return defaultSumFunc;
          } else if (column.summaryFunc === null) {
            return noopSumFunc;
          } else {
            return column.summaryFunc;
          }
        }
      }]);

      return DataTableSummaryRowComponent;
    }();

    DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) {
      return new (t || DataTableSummaryRowComponent)();
    };

    DataTableSummaryRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableSummaryRowComponent,
      selectors: [["datatable-summary-row"]],
      hostAttrs: [1, "datatable-summary-row"],
      inputs: {
        rows: "rows",
        columns: "columns",
        rowHeight: "rowHeight",
        offsetX: "offsetX",
        innerWidth: "innerWidth"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
      template: function DataTableSummaryRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableBodyRowComponent],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSummaryRowComponent.prototype, "rows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSummaryRowComponent.prototype, "columns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSummaryRowComponent.prototype, "rowHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSummaryRowComponent.prototype, "offsetX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSummaryRowComponent.prototype, "innerWidth", void 0);
    var NgxDatatableModule_1;

    var NgxDatatableModule = NgxDatatableModule_1 = /*#__PURE__*/function () {
      function NgxDatatableModule() {
        _classCallCheck(this, NgxDatatableModule);
      }

      _createClass(NgxDatatableModule, null, [{
        key: "forRoot",
        value:
        /**
         * Configure global configuration via INgxDatatableConfig
         * @param configuration
         */
        function forRoot(configuration) {
          return {
            ngModule: NgxDatatableModule_1,
            providers: [{
              provide: 'configuration',
              useValue: configuration
            }]
          };
        }
      }]);

      return NgxDatatableModule;
    }();

    NgxDatatableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgxDatatableModule
    });
    NgxDatatableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgxDatatableModule_Factory(t) {
        return new (t || NgxDatatableModule)();
      },
      providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollbarHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DimensionsHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ColumnChangesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ngx-datatable-footer-template]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisibilityDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[visibilityObserver]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        isVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.visible']
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[draggable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        dragX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEventTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResizeableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[resizeable]',
          host: {
            '[class.resizeable]': 'resizeEnabled'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      }, {
        resizeEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[orderable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      }, {
        reorder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        targetChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        draggables: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [DraggableDirective, {
            descendants: true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LongPressDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[long-press]'
        }]
      }], function () {
        return [];
      }, {
        pressEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longPressStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        longPressing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        longPressEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        press: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.press']
        }],
        isLongPress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.longpress']
        }],
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        pressModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-scroller',
          template: " <ng-content></ng-content> ",
          host: {
            "class": 'datatable-scroll'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      }, {
        scrollbarV: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollbarH: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        scrollHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.height.px']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.width.px']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableGroupHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ngx-datatable-group-header-template]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableGroupHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'ngx-datatable-group-header'
        }]
      }], function () {
        return [];
      }, {
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _templateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['template']
        }],
        _templateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [DatatableGroupHeaderTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ngx-datatable-header-template]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ngx-datatable-cell-template]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnCellTreeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ngx-datatable-tree-toggle]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'ngx-datatable-column'
        }]
      }], function () {
        return [{
          type: ColumnChangesService
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        prop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        frozenLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        frozenRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        flexGrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resizeable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        comparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sortable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        canAutoResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checkboxable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        headerCheckboxable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        headerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cellClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isTreeColumn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        treeLevelIndent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        summaryFunc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        summaryTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _cellTemplateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cellTemplate']
        }],
        _cellTemplateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [DataTableColumnCellDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            "static": true
          }]
        }],
        _headerTemplateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['headerTemplate']
        }],
        _headerTemplateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [DataTableColumnHeaderDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            "static": true
          }]
        }],
        _treeToggleTemplateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['treeToggleTemplate']
        }],
        _treeToggleTemplateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [DataTableColumnCellTreeToggle, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableRowDetailTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ngx-datatable-row-detail-template]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableRowDetailDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'ngx-datatable-row-detail'
        }]
      }], function () {
        return [];
      }, {
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _templateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['template']
        }],
        _templateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [DatatableRowDetailTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'ngx-datatable-footer'
        }]
      }], null, {
        footerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        totalMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectedMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerLeftArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerRightArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerPreviousIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _templateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['template']
        }],
        _templateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [DataTableFooterTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-body',
          template: "\n    <datatable-progress *ngIf=\"loadingIndicator\"> </datatable-progress>\n    <datatable-selection\n      #selector\n      [selected]=\"selected\"\n      [rows]=\"rows\"\n      [selectCheck]=\"selectCheck\"\n      [selectEnabled]=\"selectEnabled\"\n      [selectionType]=\"selectionType\"\n      [rowIdentity]=\"rowIdentity\"\n      (select)=\"select.emit($event)\"\n      (activate)=\"activate.emit($event)\"\n    >\n      <datatable-scroller\n        *ngIf=\"rows?.length\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [scrollHeight]=\"scrollHeight\"\n        [scrollWidth]=\"columnGroupWidths?.total\"\n        (scroll)=\"onBodyScroll($event)\"\n      >\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'top'\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n        <datatable-row-wrapper\n          [groupedRows]=\"groupedRows\"\n          *ngFor=\"let group of temp; let i = index; trackBy: rowTrackingFn\"\n          [innerWidth]=\"innerWidth\"\n          [ngStyle]=\"getRowsStyles(group)\"\n          [rowDetail]=\"rowDetail\"\n          [groupHeader]=\"groupHeader\"\n          [offsetX]=\"offsetX\"\n          [detailRowHeight]=\"getDetailRowHeight(group && group[i], i)\"\n          [row]=\"group\"\n          [expanded]=\"getRowExpanded(group)\"\n          [rowIndex]=\"getRowIndex(group && group[i])\"\n          (rowContextmenu)=\"rowContextmenu.emit($event)\"\n        >\n          <datatable-body-row\n            *ngIf=\"!groupedRows; else groupedRowsTemplate\"\n            tabindex=\"-1\"\n            [isSelected]=\"selector.getRowSelected(group)\"\n            [innerWidth]=\"innerWidth\"\n            [offsetX]=\"offsetX\"\n            [columns]=\"columns\"\n            [rowHeight]=\"getRowHeight(group)\"\n            [row]=\"group\"\n            [rowIndex]=\"getRowIndex(group)\"\n            [expanded]=\"getRowExpanded(group)\"\n            [rowClass]=\"rowClass\"\n            [displayCheck]=\"displayCheck\"\n            [treeStatus]=\"group && group.treeStatus\"\n            (treeAction)=\"onTreeAction(group)\"\n            (activate)=\"selector.onActivate($event, indexes.first + i)\"\n          >\n          </datatable-body-row>\n          <ng-template #groupedRowsTemplate>\n            <datatable-body-row\n              *ngFor=\"let row of group.value; let i = index; trackBy: rowTrackingFn\"\n              tabindex=\"-1\"\n              [isSelected]=\"selector.getRowSelected(row)\"\n              [innerWidth]=\"innerWidth\"\n              [offsetX]=\"offsetX\"\n              [columns]=\"columns\"\n              [rowHeight]=\"getRowHeight(row)\"\n              [row]=\"row\"\n              [group]=\"group.value\"\n              [rowIndex]=\"getRowIndex(row)\"\n              [expanded]=\"getRowExpanded(row)\"\n              [rowClass]=\"rowClass\"\n              (activate)=\"selector.onActivate($event, i)\"\n            >\n            </datatable-body-row>\n          </ng-template>\n        </datatable-row-wrapper>\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'bottom'\"\n          [ngStyle]=\"getBottomSummaryRowStyles()\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n      </datatable-scroller>\n      <div class=\"empty-row\" *ngIf=\"!rows?.length && !loadingIndicator\" [innerHTML]=\"emptyMessage\"></div>\n    </datatable-selection>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'datatable-body'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, {
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detailToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rowContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        treeAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bodyWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.width']
        }],
        bodyHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.height']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loadingIndicator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollbarV: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollbarH: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        externalPaging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        emptyMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectionType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowIdentity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        groupHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trackByProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        groupedRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        groupExpansionDefault: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        innerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        groupRowsBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        virtualization: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        summaryRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        summaryPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        summaryHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scroller: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [ScrollerComponent]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-header',
          template: "\n    <div\n      orderable\n      (reorder)=\"onColumnReordered($event)\"\n      (targetChanged)=\"onTargetChanged($event)\"\n      [style.width.px]=\"_columnGroupWidths.total\"\n      class=\"datatable-header-inner\"\n    >\n      <div\n        *ngFor=\"let colGroup of _columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"_styleByGroup[colGroup.type]\"\n      >\n        <datatable-header-cell\n          *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\"\n          resizeable\n          [resizeEnabled]=\"column.resizeable\"\n          (resize)=\"onColumnResized($event, column)\"\n          long-press\n          [pressModel]=\"column\"\n          [pressEnabled]=\"reorderable && column.draggable\"\n          (longPressStart)=\"onLongPressStart($event)\"\n          (longPressEnd)=\"onLongPressEnd($event)\"\n          draggable\n          [dragX]=\"reorderable && column.draggable && column.dragging\"\n          [dragY]=\"false\"\n          [dragModel]=\"column\"\n          [dragEventTarget]=\"dragEventTarget\"\n          [headerHeight]=\"headerHeight\"\n          [isTarget]=\"column.isTarget\"\n          [targetMarkerTemplate]=\"targetMarkerTemplate\"\n          [targetMarkerContext]=\"column.targetMarkerContext\"\n          [column]=\"column\"\n          [sortType]=\"sortType\"\n          [sorts]=\"sorts\"\n          [selectionType]=\"selectionType\"\n          [sortAscendingIcon]=\"sortAscendingIcon\"\n          [sortDescendingIcon]=\"sortDescendingIcon\"\n          [allRowsSelected]=\"allRowsSelected\"\n          (sort)=\"onSort($event)\"\n          (select)=\"select.emit($event)\"\n          (columnContextmenu)=\"columnContextmenu.emit($event)\"\n        >\n        </datatable-header-cell>\n      </div>\n    </div>\n  ",
          host: {
            "class": 'datatable-header'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        reorder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        columnContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        innerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        headerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.height']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        headerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.width']
        }],
        sorts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sortAscendingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sortDescendingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollbarH: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dealsWithGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        targetMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sortType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allRowsSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectionType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        reorderable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-datatable',
          template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          host: {
            "class": 'ngx-datatable'
          },
          styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
        }]
      }], function () {
        return [{
          type: ScrollbarHelper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: DimensionsHelper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
        }, {
          type: ColumnChangesService
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: ['configuration']
          }]
        }];
      }, {
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollbarV: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollbarH: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        columnMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        headerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        footerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        externalPaging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        externalSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loadingIndicator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        reorderable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        swapColumns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sortType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sorts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cssClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        messages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        groupExpansionDefault: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectAllRowsOnPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        virtualization: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        summaryRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        summaryHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        summaryPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        reorder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tableContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        treeAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rowIdentity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        groupedRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        groupRowsBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        limit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isFixedHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.fixed-header']
        }],
        isFixedRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.fixed-row']
        }],
        isVertScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.scroll-vertical']
        }],
        isVirtualized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.virtualized']
        }],
        isHorScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.scroll-horz']
        }],
        isSelectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.selectable']
        }],
        isCheckboxSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.checkbox-selection']
        }],
        isCellSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.cell-selection']
        }],
        isSingleSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.single-selection']
        }],
        isMultiSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.multi-selection']
        }],
        isMultiClickSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.multi-click-selection']
        }],
        columnTemplates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [DataTableColumnDirective]
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize']
        }],
        targetMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectionType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trackByProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        treeFromRelation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        treeToRelation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [DatatableRowDetailDirective]
        }],
        groupHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [DatatableGroupHeaderDirective]
        }],
        footer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [DatatableFooterDirective]
        }],
        bodyComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [DataTableBodyComponent]
        }],
        headerComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [DataTableHeaderComponent]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableHeaderCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-header-cell',
          template: "\n    <div class=\"datatable-header-cell-template-wrap\">\n      <ng-template\n        *ngIf=\"isTarget\"\n        [ngTemplateOutlet]=\"targetMarkerTemplate\"\n        [ngTemplateOutletContext]=\"targetMarkerContext\"\n      >\n      </ng-template>\n      <label *ngIf=\"isCheckboxable\" class=\"datatable-checkbox\">\n        <input type=\"checkbox\" [checked]=\"allRowsSelected\" (change)=\"select.emit(!allRowsSelected)\" />\n      </label>\n      <span *ngIf=\"!column.headerTemplate\" class=\"datatable-header-cell-wrapper\">\n        <span class=\"datatable-header-cell-label draggable\" (click)=\"onSort()\" [innerHTML]=\"name\"> </span>\n      </span>\n      <ng-template\n        *ngIf=\"column.headerTemplate\"\n        [ngTemplateOutlet]=\"column.headerTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n      <span (click)=\"onSort()\" [class]=\"sortClass\"> </span>\n    </div>\n  ",
          host: {
            "class": 'datatable-header-cell'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        columnContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        allRowsSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sorts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        columnCssClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.title']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.minWidth.px']
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.maxWidth.px']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.width.px']
        }],
        onContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['contextmenu', ['$event']]
        }],
        sortType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sortAscendingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sortDescendingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        targetMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        targetMarkerContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectionType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        headerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.height.px']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-footer',
          template: "\n    <div\n      class=\"datatable-footer-inner\"\n      [ngClass]=\"{ 'selected-count': selectedMessage }\"\n      [style.height.px]=\"footerHeight\"\n    >\n      <ng-template\n        *ngIf=\"footerTemplate\"\n        [ngTemplateOutlet]=\"footerTemplate.template\"\n        [ngTemplateOutletContext]=\"{\n          rowCount: rowCount,\n          pageSize: pageSize,\n          selectedCount: selectedCount,\n          curPage: curPage,\n          offset: offset\n        }\"\n      >\n      </ng-template>\n      <div class=\"page-count\" *ngIf=\"!footerTemplate\">\n        <span *ngIf=\"selectedMessage\"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>\n        {{ rowCount?.toLocaleString() }} {{ totalMessage }}\n      </div>\n      <datatable-pager\n        *ngIf=\"!footerTemplate\"\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\"\n      >\n      </datatable-pager>\n    </div>\n  ",
          host: {
            "class": 'datatable-footer'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        selectedCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        footerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerLeftArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerRightArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerPreviousIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        totalMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectedMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTablePagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-pager',
          template: "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to first page\" href=\"javascript:void(0)\" (click)=\"selectPage(1)\">\n          <i class=\"{{ pagerPreviousIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to previous page\" href=\"javascript:void(0)\" (click)=\"prevPage()\">\n          <i class=\"{{ pagerLeftArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li\n        role=\"button\"\n        [attr.aria-label]=\"'page ' + pg.number\"\n        class=\"pages\"\n        *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.number === page\"\n      >\n        <a href=\"javascript:void(0)\" (click)=\"selectPage(pg.number)\">\n          {{ pg.text }}\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to next page\" href=\"javascript:void(0)\" (click)=\"nextPage()\">\n          <i class=\"{{ pagerRightArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to last page\" href=\"javascript:void(0)\" (click)=\"selectPage(totalPages)\">\n          <i class=\"{{ pagerNextIcon }}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
          host: {
            "class": 'datatable-pager'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerLeftArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerRightArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerPreviousIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pagerNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-progress',
          template: "\n    <div class=\"progress-linear\" role=\"progressbar\">\n      <div class=\"container\">\n        <div class=\"bar\"></div>\n      </div>\n    </div>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableBodyRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-body-row',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <div\n      *ngFor=\"let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups\"\n      class=\"datatable-row-{{ colGroup.type }} datatable-row-group\"\n      [ngStyle]=\"_groupStyles[colGroup.type]\"\n    >\n      <datatable-body-cell\n        *ngFor=\"let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn\"\n        tabindex=\"-1\"\n        [row]=\"row\"\n        [group]=\"group\"\n        [expanded]=\"expanded\"\n        [isSelected]=\"isSelected\"\n        [rowIndex]=\"rowIndex\"\n        [column]=\"column\"\n        [rowHeight]=\"rowHeight\"\n        [displayCheck]=\"displayCheck\"\n        [treeStatus]=\"treeStatus\"\n        (activate)=\"onActivate($event, ii)\"\n        (treeAction)=\"onTreeAction()\"\n      >\n      </datatable-body-cell>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
        }, {
          type: ScrollbarHelper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        treeStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        treeAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        innerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class']
        }],
        columnsTotalWidths: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.width.px']
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['keydown', ['$event']]
        }],
        onMouseenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseenter', ['$event']]
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        group: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.height.px']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableRowWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-row-wrapper',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <div *ngIf=\"groupHeader && groupHeader.template\" class=\"datatable-group-header\" [ngStyle]=\"getGroupHeaderStyle()\">\n      <ng-template\n        *ngIf=\"groupHeader && groupHeader.template\"\n        [ngTemplateOutlet]=\"groupHeader.template\"\n        [ngTemplateOutletContext]=\"groupContext\"\n      >\n      </ng-template>\n    </div>\n    <ng-content *ngIf=\"(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template\">\n    </ng-content>\n    <div\n      *ngIf=\"rowDetail && rowDetail.template && expanded\"\n      [style.height.px]=\"detailRowHeight\"\n      class=\"datatable-row-detail\"\n    >\n      <ng-template\n        *ngIf=\"rowDetail && rowDetail.template\"\n        [ngTemplateOutlet]=\"rowDetail.template\"\n        [ngTemplateOutletContext]=\"rowContext\"\n      >\n      </ng-template>\n    </div>\n  ",
          host: {
            "class": 'datatable-row-wrapper'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
        }];
      }, {
        rowContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rowIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['contextmenu', ['$event']]
        }],
        innerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        groupHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        detailRowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        groupedRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableBodyCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-body-cell',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <div class=\"datatable-body-cell-label\" [style.margin-left.px]=\"calcLeftMargin(column, row)\">\n      <label\n        *ngIf=\"column.checkboxable && (!displayCheck || displayCheck(row, column, value))\"\n        class=\"datatable-checkbox\"\n      >\n        <input type=\"checkbox\" [checked]=\"isSelected\" (click)=\"onCheckboxChange($event)\" />\n      </label>\n      <ng-container *ngIf=\"column.isTreeColumn\">\n        <button\n          *ngIf=\"!column.treeToggleTemplate\"\n          class=\"datatable-tree-button\"\n          [disabled]=\"treeStatus === 'disabled'\"\n          (click)=\"onTreeAction()\"\n        >\n          <span>\n            <i *ngIf=\"treeStatus === 'loading'\" class=\"icon datatable-icon-collapse\"></i>\n            <i *ngIf=\"treeStatus === 'collapsed'\" class=\"icon datatable-icon-up\"></i>\n            <i *ngIf=\"treeStatus === 'expanded' || treeStatus === 'disabled'\" class=\"icon datatable-icon-down\"></i>\n          </span>\n        </button>\n        <ng-template\n          *ngIf=\"column.treeToggleTemplate\"\n          [ngTemplateOutlet]=\"column.treeToggleTemplate\"\n          [ngTemplateOutletContext]=\"{ cellContext: cellContext }\"\n        >\n        </ng-template>\n      </ng-container>\n\n      <span *ngIf=\"!column.cellTemplate\" [title]=\"sanitizedValue\" [innerHTML]=\"value\"> </span>\n      <ng-template\n        #cellTemplate\n        *ngIf=\"column.cellTemplate\"\n        [ngTemplateOutlet]=\"column.cellTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, {
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        treeAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        group: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sorts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        treeStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        columnCssClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.width.px']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.minWidth.px']
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.maxWidth.px']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['style.height']
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['focus']
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['blur']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click', ['$event']]
        }],
        onDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['dblclick', ['$event']]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['keydown', ['$event']]
        }],
        displayCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cellTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['cellTemplate', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-selection',
          template: " <ng-content></ng-content> ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectionType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowIdentity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableSummaryRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'datatable-summary-row',
          template: "\n    <datatable-body-row\n      *ngIf=\"summaryRow && _internalColumns\"\n      tabindex=\"-1\"\n      [innerWidth]=\"innerWidth\"\n      [offsetX]=\"offsetX\"\n      [columns]=\"_internalColumns\"\n      [rowHeight]=\"rowHeight\"\n      [row]=\"summaryRow\"\n      [rowIndex]=\"-1\"\n    >\n    </datatable-body-row>\n  ",
          host: {
            "class": 'datatable-summary-row'
          }
        }]
      }], function () {
        return [];
      }, {
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        innerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxDatatableModule, {
        declarations: function declarations() {
          return [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDatatableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
          declarations: [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent],
          exports: [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective]
        }]
      }], null, null);
    })();

    var ClickType;

    (function (ClickType) {
      ClickType["single"] = "single";
      ClickType["double"] = "double";
    })(ClickType || (ClickType = {}));

    if (typeof document !== 'undefined' && !document.elementsFromPoint) {
      document.elementsFromPoint = elementsFromPoint;
    }
    /*tslint:disable*/

    /**
     * Polyfill for `elementsFromPoint`
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
     * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
     * https://gist.github.com/oslego/7265412
     */


    function elementsFromPoint(x, y) {
      var elements = [];
      var previousPointerEvents = [];
      var current; // TODO: window.getComputedStyle should be used with inferred type (Element)

      var i;
      var d; //if (document === undefined) return elements;
      // get all elements via elementFromPoint, and remove them from hit-testing in order

      while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
          value: current.style.getPropertyValue('pointer-events'),
          priority: current.style.getPropertyPriority('pointer-events')
        }); // add "pointer-events: none", to get to the underlying element

        current.style.setProperty('pointer-events', 'none', 'important');
      } // restore the previous pointer-events values


      for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
      } // return our results


      return elements;
    }
    /*tslint:enable*/

    /*
     * Public API Surface of ngx-datatable
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=swimlane-ngx-datatable.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~branchs-components-branches-module~business-components-business-module~dashboard-components-~2c2af7d1-es5.js.map