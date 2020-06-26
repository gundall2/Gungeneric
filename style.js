/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gungeneric/blink-src/js/cke_styles.js":
/*!********************************************!*\
  !*** ./gungeneric/blink-src/js/cke_styles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
*   Array con la definición de los estilos para el editor de CKEditor
*/
const ckeStyles = [
  {name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: {'class': 'box-1'}},
  {name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: {'class': 'box-2'}},
  {name: 'Énfasis', element: 'span', attributes: {'class': 'bck-enfasis'}}
  // Añadir elementos CKEditor aquí.
];
/* harmony default export */ __webpack_exports__["default"] = (ckeStyles);

/***/ }),

/***/ "./gungeneric/blink-src/js/layout/main.js":
/*!*********************************************!*\
  !*** ./gungeneric/blink-src/js/layout/main.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Layout {
  constructor(parent) {
    // Ids
    this.parent = parent ? parent : document.body;
    this.courseWrapperId = 'layout-container';
    this.mainScreenId = 'main-screen';
    this.sectionScreenPrefix = 'section-screen';
    this.courseHeaderId = 'course-header';
    this.courseContentId = 'course-content'; // Data

    this.courseId = window.idcurso;
    this.courseData = blink.getCourse(this.courseId, true, true).responseJSON;
    this.auxTag = 'tab';
    this.touchEnabled = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    this.isApp = blink.isApp;
    this.eventsMap = {
      end: this.touchEnabled ? 'touchend' : 'dragend',
      move: this.touchEnabled ? 'touchmove' : 'drag',
      start: this.touchEnabled ? 'touchstart' : 'dragstart'
    };

    if (textweb) {
      this.texts = {
        goBack: textweb('libroDigital_volver'),
        studentArea: textweb('abpStudentArea'),
        teacherArea: textweb('abpTeacherArea'),
        noResources: textweb('abpNoResources'),
        unitContent: textweb('course_unit_activities'),
        resources: textweb('course_supplement_content'),
        pags: textweb('course_abrev_pag')
      };
    } // Breadcumbs


    if (!this.isApp) {
      this.breadcumbsContainer;
      this.breadcumbs = [this.courseData.title];
    } // Storage


    this.sectionData = {
      sections: [],
      navigators: {
        left: null,
        right: null
      }
    };
    this.slider = {};
    this.slider.currentElement = 0; // Bindings

    this._resizeContainer = this.resizeContainer.bind(this); // Elements

    let layoutContainer = this.createElement('DIV');
    layoutContainer.id = this.courseWrapperId; // Workaround for github

    if (this.courseData && !this.courseData.portada) {
      this.courseData.portada = blink.activity.currentStyle.layout.courseData.url.match(/(c\d+_?){2,2}__Portada\.php/g) != null ? this.courseData.url.match(/c\d+/g)[1].replace('c', '') : new URLSearchParams(this.courseData.url).get('idclase');
    }

    this.layoutContainer = layoutContainer;
    this.prepareLayoutData();
  }

  init() {
    let content = document.querySelector('.content-wrapper'),
        slider = document.getElementById('slider'),
        sliderControl = document.querySelectorAll('.slider-control'),
        navbarBottom = document.querySelector('.navbar-bottom');
    this.layoutContainer.setAttribute('style', 'background-image: url("' + this.courseData.image + '"); background-size: cover;');
    this.parent.insertBefore(this.layoutContainer, this.parent.firstElementChild);
    blink.events.once('indexLoaded', () => {
      this.removeAuxUnit();
    }); // 1. Choose layout option.

    if (window.idclase && window.idclase != this.courseData.portada) {
      // 1.1. Blink Way. For activities.
      // 1.1.1. Goback
      let goBackWrapper = this.createElement('DIV', 'go-back'),
          goBackButton = this.createElement('BUTTON', ['btn', 'btn-go-back']);
      goBackButton.addEventListener('click', () => redireccionar(this.courseData.url));
      goBackButton.appendChild(this.createElement('SPAN', '', this.texts.goBack));
      goBackWrapper.append(goBackButton);
      sliderControl.forEach(el => {
        el.addEventListener('click', e => {
          this.changeStyle(slider.querySelector('[id*=swipeview-masterpage-] .js-slider-item'), 'overflow', 'hidden');
        });
        slider.addEventListener('swipeview-flip', e => {
          this.changeStyle(slider.querySelector('[id*=swipeview-masterpage-].swipeview-active .js-slider-item'), 'overflow', 'auto');
        });
      });
      this.changeStyle(content, 'background-image', 'url("' + this.courseData.image + '")');
      this.changeStyle(content, 'background-size', 'cover');
      content.insertBefore(goBackWrapper, content.firstElementChild);
      return false;
    } else {
      // 1.2. Style Way.
      let hash = window.location.hash.substring(1); // 1.2.1 Manage old DOM elements.

      this.hideElem(content);
      this.hideElem(navbarBottom);
      sliderControl.forEach(el => this.hideElem(el));

      if (!this.isApp) {
        this.breadcumbsContainer = document.querySelector('.navbar.libro .libro-left span.title');
        this.hideElem(this.breadcumbsContainer);
      } // 1.2.2 Create section arrows.


      this.sectionData.navigators = this.generateNavigators();
      this.layoutContainer.append(this.sectionData.navigators['left'], this.sectionData.navigators['right']);
      this.hideNavigators(); // 1.2.3. Print target screen.

      if (hash.match(/unit_\d{1,2}_/g) != null) {
        let index = parseInt(hash.match(/\d{1,2}/g)[0]),
            tab = hash.substring(hash.lastIndexOf('_') + 1);
        this.initSection(index, tab);
      } else if (hash.match(/home/g) != null) {
        this.initHome();
      } else {
        this.initHome();
      }

      this.resizeContainer();
    }

    window.addEventListener('resize', this._resizeContainer);
  }

  initHome() {
    this.hideNavigators();
    this.resetBreadcumbs(); // 1. Main screen creation.

    this.mainScreen = this.createElement('DIV', 'main-screen');
    this.mainScreen.id = this.mainScreenId;
    this.layoutContainer.appendChild(this.mainScreen); // 2. Create Header.

    let courseHeader = this.generateHeader(); // 3. Create Course content.

    let courseContent = this.generateContent();
    this.mainScreen.append(courseHeader, courseContent);
  }

  initSection(index, tab) {
    if (!index && typeof index === 'undefined') {
      alert('No index provided');
      return false;
    } // 0. Hide main screen (if exists).


    this.mainScreen && typeof this.mainScreen !== "undefined" && this.hideMainScreen(); // 0.1. Navigation arrows.

    this.toggleNavigators(index); // If there's already a section screen for this index, we just show it.

    if (this.sectionData.sections[index] && this.sectionData.sections[index] !== "undefined") {
      this.showSection(index);
      return;
    }

    const tabClickHandler = e => {
      let currentSection = this.sectionData.sections[this.currentSection],
          target = e.currentTarget,
          targetTab = target.getAttribute('data-target');
      this.removeClasses(currentSection.querySelector('.tab.active'), 'active');
      this.removeClasses(currentSection.querySelector('.content.active'), 'active');
      this.addClasses(target, 'active');
      this.addClasses(currentSection.querySelector('.' + targetTab + '-content'), 'active');
    };

    const goBackClickHandler = e => {
      if (!this.mainScreen || typeof this.mainScreen === 'undefined') {
        this.initHome();
      } else {
        this.showMainScreen();
      }

      this.hideSection(index);
    };

    const separator = text => {
      let wrapper = this.createElement('DIV', ['separator']);
      wrapper.appendChild(document.createTextNode(text));
      return wrapper;
    };

    let data = this.courseData.units[index],
        sectionScreen = this.createElement('DIV', 'section-screen');
    sectionScreen.id = this.sectionScreenPrefix + '-' + index; // 0.2. Change breadcumbs.

    this.addBreadcumb(data.title, 1); // 1. Goback

    let goBackWrapper = this.createElement('DIV', 'go-back'),
        goBackButton = this.createElement('BUTTON', ['btn', 'btn-go-back']);
    goBackButton.onclick = goBackClickHandler;
    goBackButton.appendChild(this.createElement('SPAN', '', this.texts.goBack));
    goBackWrapper.append(goBackButton); // 2. Section.

    let sectionWrapper = this.createElement('DIV', 'section'); // 2.1. Section Data

    let sectionData = this.createElement('DIV', 'section-data'); // 2.1.1. Section title

    let sectionTitle = this.createElement('DIV', 'section-title');
    sectionTitle.appendChild(this.createHeader(1, '', data.title)); // 2.1.2. Section desc

    let descWrapper = this.createElement('DIV', 'desc-wrapper'),
        sectionDesc = this.createElement('DIV', 'section-desc'),
        sectionNumber = this.createElement('DIV', 'section-number');
    descWrapper.setAttribute('style', 'background-image: url("' + data.image + '"); background-size: cover;');
    sectionNumber.appendChild(this.createElement('SPAN', '', index.toString().length == 1 ? '0' + index : index));
    sectionDesc.append(this.createHeader(2, '', data.description), sectionNumber);
    descWrapper.append(sectionDesc);
    sectionData.append(sectionTitle, descWrapper); // 2.2. Section Content.

    let sectionContent = this.createElement('DIV', 'section-content'); // 2.2.1 Tabs wrapepr.

    let tabsWrapper = this.createElement('DIV', 'tabs'),
        studentTab = this.createElement('DIV', 'tab'),
        teacherTab = this.createElement('DIV', 'tab');
    studentTab.appendChild(this.createHeader(2, '', this.texts.studentArea));
    teacherTab.appendChild(this.createHeader(2, '', this.texts.teacherArea));
    studentTab.setAttribute('data-target', 'student');
    teacherTab.setAttribute('data-target', 'teacher');
    studentTab.addEventListener('click', tabClickHandler);
    teacherTab.addEventListener('click', tabClickHandler);
    tabsWrapper.append(studentTab, teacherTab); // 2.2.2 Tabs content.

    let tabsContent = this.createElement('DIV', 'tabs-content'),
        studentContent = this.createElement('DIV', ['content', 'student-content']),
        teacherContent = this.createElement('DIV', ['content', 'teacher-content']),
        studentWrapper = this.createElement('DIV', 'unit-wrapper'),
        teacherWrapper = this.createElement('DIV', 'unit-wrapper'),
        studentUnitContainer = this.createElement('DIV', ['unit-content']),
        studentResourceContainer = this.createElement('DIV', ['resources-content']),
        teacherUnitContainer = this.createElement('DIV', ['unit-content']),
        teacherResourceContainer = this.createElement('DIV', ['resources-content']),
        noResourcesWrapper = this.createElement('H2', 'no-resources', this.texts.noResources),
        combined = data.subunits.concat(data.resources);
    this.hideElem(studentUnitContainer).appendChild(separator(this.texts.unitContent));
    this.hideElem(studentResourceContainer).appendChild(separator(this.texts.resources));
    this.hideElem(teacherUnitContainer).appendChild(separator(this.texts.unitContent));
    this.hideElem(teacherResourceContainer).appendChild(separator(this.texts.resources));

    switch (tab) {
      case 'teacherarea':
        this.addClasses(teacherTab, 'active');
        this.addClasses(teacherContent, 'active');
        break;

      default:
        this.addClasses(studentTab, 'active');
        this.addClasses(studentContent, 'active');
    }

    combined.forEach(el => {
      let isResource = data.resources.contains(el),
          elWrapper = this.createElement('DIV', 'content-item'),
          elImg = this.createElement('DIV', ['content-img', 'type-' + el.typeInt, el.type]),
          elTitleWrapper = this.createElement('DIV', 'content-title'),
          elTitle = this.createElement('SPAN', null, el.title),
          targetWrapper; // 2.2.2.1. Title creation.

      elTitleWrapper.appendChild(elTitle);
      elWrapper.append(elImg, elTitleWrapper); // 2.2.2.2. Button creation

      if (!isResource) {
        let elButtons = this.createElement('DIV', 'content-buttons'),
            elLock = this.createElement('SPAN', 'content-lock'),
            elPageCount = this.createElement('SPAN', 'content-page-count'),
            pageCountTxt = el.pags ? el.pags + ' ' + this.texts.pags.replace('.', el.pags > 1 ? 's.' : '.') : '';
        elLock.addEventListener('click', e => {
          e.stopPropagation();
          let target = e.currentTarget,
              lockClass = 'locked';
          target.classList.contains(lockClass) ? this.removeClasses(target, lockClass) : this.addClasses(target, lockClass);
        });
        elPageCount.appendChild(document.createTextNode(pageCountTxt));
        elButtons.append(elLock, elPageCount);
        elWrapper.appendChild(elButtons);
      }

      el.onclickTitle ? elWrapper.setAttribute('onclick', el.onclickTitle) : elWrapper.addEventListener('click', () => this.openActivity(el.url, data.id, el.type));

      if (el.onlyVisibleTeachers) {
        let elCircleOuter = this.createElement('DIV', 'circle-outer'),
            elCircleInner = this.createElement('DIV', 'circle-inner');
        elWrapper.insertBefore(elCircleOuter, elImg);
        elWrapper.insertBefore(elCircleInner, elImg);
        targetWrapper = isResource ? teacherResourceContainer : teacherUnitContainer;
      } else {
        // 2.2.2.1. Image creation.
        this.changeStyle(elImg, 'background-image', 'url(' + el.image + ')');
        targetWrapper = isResource ? studentResourceContainer : studentUnitContainer;
      }

      targetWrapper.appendChild(elWrapper);
      this.isHidden(targetWrapper, true) && this.showElem(targetWrapper);
    });

    if (teacherResourceContainer.childElementCount == 1 && teacherUnitContainer.childElementCount == 1) {
      teacherWrapper.append(noResourcesWrapper.cloneNode(true));
    } else {
      teacherWrapper.append(teacherUnitContainer, teacherResourceContainer);
    }

    if (studentResourceContainer.childElementCount == 1 && studentUnitContainer.childElementCount == 1) {
      studentWrapper.append(noResourcesWrapper.cloneNode(true));
    } else {
      studentWrapper.append(studentUnitContainer, studentResourceContainer);
    }

    studentContent.append(studentWrapper);
    teacherContent.append(teacherWrapper);
    tabsContent.append(studentContent, teacherContent);
    sectionContent.append(tabsWrapper, tabsContent);
    sectionWrapper.append(sectionData, sectionContent); // 3. Fake padding.

    let fakePadding = this.createElement('DIV');
    sectionScreen.append(goBackWrapper, sectionWrapper, fakePadding);
    this.currentSection = index;
    this.sectionData.sections[index] = sectionScreen;
    this.layoutContainer.appendChild(sectionScreen);
  }

  prepareLayoutData() {
    let layoutData = {
      auxActivities: [],
      auxUnit: {},
      unitsData: []
    };
    let auxTag = this.auxTag;
    this.courseData.units.forEach((unit, iUnit) => {
      if (unit.tags && unit.tags.indexOf(auxTag) != -1) {
        layoutData.auxUnit = unit;
      }

      unit.subunits.forEach(activity => {
        let tagOrigin = activity.tags ? activity.tags : activity.tag;

        if (tagOrigin && tagOrigin.indexOf(auxTag) != -1) {
          layoutData['auxActivities'].push(activity);
        } else if (iUnit == 0 && activity.id != this.courseData.portada) {
          layoutData['auxActivities'].push(activity);
        }
      });
    }); // If there's no auxUnit, we take the first one as aux.

    Object.keys(layoutData.auxUnit).length === 0 && layoutData.auxUnit.constructor === Object && (layoutData.auxUnit = this.courseData.units[0]);
    this.layoutData = layoutData;
  }

  generateHeader() {
    let courseHeader = this.createElement('DIV');
    courseHeader.id = this.courseHeaderId; // 1.1. Create title

    let titleWrapper = this.createElement('DIV', 'course-title');
    let title = this.createHeader(1, '', this.courseData.title);
    let subtitle = this.createElement('SPAN', '', this.courseData.description);
    titleWrapper.append(title, subtitle); // 1.2. Create extra wrapper.

    let extraWrapper = this.createElement('DIV', 'course-extra');
    let extraList = this.createElement('UL');
    this.layoutData.auxActivities.forEach(function (a, i) {
      let wrapper = this.createElement('LI');
      let anchor = this.createElement('A');
      let title = this.createElement('SPAN', '', a.title);
      anchor.href = 'javascript:void(0)';
      anchor.setAttribute('onclick', a.onclickTitle);
      anchor.appendChild(title);
      wrapper.id = 'tabs-item' + i;
      extraList.appendChild(wrapper).appendChild(anchor);
    }, this);
    extraWrapper.appendChild(extraList); // 1.3 Append both elements.

    courseHeader.append(titleWrapper, extraWrapper);
    return courseHeader;
  }

  generateContent() {
    let courseContent = this.createElement('DIV', 'course-content');
    courseContent.id = this.courseContentId;
    let auxTag = this.auxTag; // 2.1. Wrapper

    let sliderWrapper = this.createElement('DIV', 'slider-wrapper'); // 2.2. Controls

    let sliderControlLeft = this.createElement('DIV', ['slider-navcontrol', 'slider-navcontrol-left']);
    let sliderControlRight = this.createElement('DIV', ['slider-navcontrol', 'slider-navcontrol-right']);
    let sliderControlLeftArrow = this.createElement('SPAN');
    let sliderControlRightArrow = this.createElement('SPAN');
    let arrowLeft = this.createElement('I', ['fa', 'fa-angle-left']);
    let arrowRight = this.createElement('I', ['fa', 'fa-angle-right']);
    arrowLeft.addEventListener('click', () => this.slideLeft());
    arrowRight.addEventListener('click', () => this.slideRight()); // We hide the left control arrow at startup.

    this.hideElem(sliderControlLeft, true).appendChild(sliderControlLeftArrow).appendChild(arrowLeft);
    sliderControlRight.appendChild(sliderControlRightArrow).appendChild(arrowRight); // 2.3. Track

    let sliderTrack = this.createElement('DIV', 'slider-itemtrack');
    let sliderCarousel = this.createElement('DIV', 'slider-carousel'); // 2.4. Slider Items.

    this.courseData.units.forEach(function (unit, i) {
      if (this.layoutData.auxUnit.id == unit.id) return;
      let sliderItem = this.createElement('DIV', 'slider-item');
      sliderItem.id = 'slider-item-' + (i - 1); // 2.4.0 Anchor wrapper

      let anchorWrapper = this.createElement('A', '');
      this.setAttributes(anchorWrapper, {
        href: 'javascript:void(0)'
      });
      anchorWrapper.addEventListener('click', () => {
        this.initSection(i);
      }); // 2.4.1. Item title

      let itemTitle = this.createElement('DIV', 'section-title');
      itemTitle.appendChild(this.createHeader(3, '', unit.title)); //2.4.2. Item img

      let itemImg = this.createElement('DIV', 'section-img');
      itemImg.setAttribute('style', 'background-image: url("' + unit.image + '"); background-size: cover;'); // 2.4.3. Item Desc

      let itemDesc = this.createElement('DIV', 'section-desc');
      itemDesc.appendChild(this.createHeader(4, '', unit.description)); // 2.4.4. Item Number

      let itemNumber = this.createElement('DIV', 'section-number');
      itemNumber.appendChild(this.createElement('SPAN', '', i.toString().length == 1 ? '0' + i : i));
      sliderCarousel.appendChild(sliderItem).appendChild(anchorWrapper).append(itemTitle, itemImg, itemDesc, itemNumber);
    }, this);
    sliderTrack.appendChild(sliderCarousel);
    sliderWrapper.append(sliderControlLeft, sliderTrack, sliderControlRight);
    courseContent.appendChild(sliderWrapper); // 2.5. Drag slide handling.

    let dragStartHandler = e => {
      let tgt = e.currentTarget;
      let wrapper = document.querySelector('#' + this.courseContentId);
      let items = tgt.querySelectorAll('[id*=slider-item]');
      let offsetMap = [];
      items.forEach(e => offsetMap.push(e.offsetLeft));
      e.stopPropagation();
      var startX = this.touchEnabled ? e.targetTouches[0].screenX : e.screenX;

      let dragHandler = e => {
        let screenX = this.touchEnabled ? e.targetTouches[0].screenX : e.screenX;
        e.stopPropagation();
        if (startX == screenX || screenX == 0) return;
        let transformVal = e.currentTarget.style.getPropertyValue('transform'),
            currentX = transformVal == '' ? 0 : parseInt(transformVal.match(/\d+/g)[0]),
            calcX = screenX - startX - currentX;
        this.changeStyle(e.currentTarget, 'transform', 'translateX(' + (calcX > 0 ? 0 : calcX) + 'px)');
        startX = screenX;
      };

      let dragEndHandler = e => {
        let calcX = null,
            transformVal = e.currentTarget.style.getPropertyValue('transform'),
            currentX = transformVal == '' ? 0 : parseInt(transformVal.match(/\d+/g)[0]);
        offsetMap.forEach((e, i) => {
          if (Math.abs(currentX - e) < Math.abs(currentX - offsetMap[i - 1]) || i - 1 < 0) {
            this.slider.currentElement = i;
            calcX = -e;
          }
        }, this);
        this.changeStyle(e.currentTarget, 'transform', 'translateX(' + (calcX > 0 ? 0 : calcX) + 'px)');
        e.currentTarget.removeEventListener(this.eventsMap['move'], dragHandler);
        e.currentTarget.removeEventListener(this.eventsMap['end'], dragEndHandler); // Arrow management

        wrapper.querySelectorAll('.slider-navcontrol').forEach(arrow => {
          if (arrow.className.indexOf('left') != -1 && this.slider.currentElement == 0 || arrow.className.indexOf('right') != -1 && this.slider.currentElement == items.length - 1) {
            this.hideElem(arrow, true);
          } else {
            this.showElem(arrow);
          }
        });
      };

      tgt.addEventListener(this.eventsMap['move'], dragHandler);
      tgt.addEventListener(this.eventsMap['end'], dragEndHandler);
    };

    sliderCarousel.addEventListener(this.eventsMap['start'], dragStartHandler);
    return courseContent;
  }

  removeAuxUnit() {
    let id = this.layoutData.auxUnit.id,
        bookIndex = document.querySelector('#book-index'),
        titlesList = bookIndex.querySelector('#list-units'),
        contentList = bookIndex.querySelector('.col-main > div:first-child'),
        auxLi = bookIndex.querySelector('li[data-id="' + id + '"]'),
        auxIndex = bookIndex.querySelector('.unit-content[data-id="' + id + '"]');
    auxLi != null && auxLi.remove();
    auxIndex != null && auxIndex.remove();
    titlesList.firstElementChild.classList.add('active');
    contentList.firstElementChild.classList.remove('hidden'); // //$('#book-index').find('.col-main').css({'left' : 0});
  } // User navigation


  generateNavigators() {
    let leftClasses = ['section-navigation', 'left'];
    let rightClasses = ['section-navigation', 'right'];
    let arrowLeft = this.createElement('BUTTON', leftClasses);
    let arrowRight = this.createElement('BUTTON', rightClasses);
    arrowLeft.appendChild(this.createElement('I', ['fa', 'fa-angle-left']));
    arrowRight.appendChild(this.createElement('I', ['fa', 'fa-angle-right']));
    arrowLeft.addEventListener('click', () => this.slidePrevSection());
    arrowRight.addEventListener('click', () => this.slideNextSection());
    return {
      left: arrowLeft,
      right: arrowRight
    };
  }

  slide(direction) {
    let wrapper = document.querySelector('div#course-content');
    let track = wrapper.querySelector('.slider-itemtrack');
    let carousel = wrapper.querySelector('.slider-carousel');
    let items = wrapper.querySelectorAll('[id*=slider-item]');
    let currentElement = items[this.slider.currentElement];
    let targetElement;
    let offset; // Add transform to reset elements offset;

    carousel.style.transform == '' && (carousel.style.transform = 'translateX(0px)');

    if (direction == 'ltr') {
      if (this.slider.currentElement == items.length - 1) return;
      items.forEach(function (e, i) {
        if (i < this.slider.currentElement) return;
        let curOffset = e.offsetLeft - currentElement.offsetLeft;
        if (targetElement && typeof targetElement !== 'undefined') return;

        if (Math.abs(curOffset) > track.offsetWidth) {
          targetElement = e.previousElementSibling;
          this.slider.currentElement = i - 1;
        } else if (i == items.length - 1) {
          targetElement = e;
          this.slider.currentElement = i;
        }
      }, this);
      offset = -targetElement.offsetLeft;
    } else {
      if (this.slider.currentElement == 0) return;
      items.forEach(function (e, i) {
        let rIndex = items.length - 1 - i;
        if (rIndex > this.slider.currentElement) return;
        let rEl = items[rIndex],
            curOffset = rEl.offsetLeft - currentElement.offsetLeft;
        if (targetElement && typeof targetElement !== 'undefined') return;

        if (Math.abs(curOffset) > track.offsetWidth) {
          targetElement = rEl.nextSibling;
          this.slider.currentElement = rIndex + 1;
        } else if (rIndex == 0) {
          targetElement = rEl;
          this.slider.currentElement = rIndex;
        }
      }, this);
      offset = -targetElement.offsetLeft;
    }

    if (typeof offset !== 'undefined') carousel.style.transform = 'translateX(' + offset + 'px)'; // Arrow management

    wrapper.querySelectorAll('.slider-navcontrol').forEach(arrow => {
      if (arrow.className.indexOf('left') != -1 && this.slider.currentElement == 0 || arrow.className.indexOf('right') != -1 && this.slider.currentElement == items.length - 1) {
        this.hideElem(arrow, true);
      } else {
        this.showElem(arrow);
      }
    });
  }

  slideLeft() {
    this.slide();
  }

  slideRight() {
    this.slide('ltr');
  }

  slideNextSection() {
    if (this.courseData.units.length - 1 == this.currentSection) {
      this.hideElem(this.sectionData.navigators['right']);
      return false;
    }

    this.slideSection(this.currentSection + 1);
  }

  slidePrevSection() {
    if (this.currentSection == 1) {
      this.hideElem(this.sectionData.navigators['left']);
      return false;
    }

    this.slideSection(this.currentSection - 1);
  }

  slideSection(index) {
    this.hideSection(this.currentSection);
    this.toggleNavigators(index);

    if (this.sectionData.sections[index] && typeof this.sectionData.sections[index] !== "undefined") {
      this.showSection(index);
      return;
    }

    this.initSection(index);
  } // SHOW/HIDE


  showMainScreen() {
    this.hideNavigators();
    this.resetBreadcumbs();
    this.mainScreen && this.showElem(this.mainScreen);
  }

  hideMainScreen() {
    this.mainScreen && this.hideElem(this.mainScreen);
  }

  showSection(index) {
    let data = this.courseData.units[index];
    this.addBreadcumb(data.title, 1);
    this.sectionData.sections[index] && this.showElem(this.sectionData.sections[index]);
    this.currentSection = index;
  }

  hideSection(index) {
    this.sectionData.sections[index] && this.hideElem(this.sectionData.sections[index]);
  }

  toggleNavigators(index) {
    if (!index || typeof index === 'undefined') return false;
    let navs = this.sectionData.navigators;
    index == 1 ? this.hideElem(navs.left, true) : this.showElem(navs.left);
    this.courseData.units.length - 1 == index ? this.hideElem(navs.right, true) : this.showElem(navs.right);
  }

  showNavigators() {
    if (!this.sectionData.navigators || typeof this.sectionData.navigators === 'undefined') return false;

    for (let nav in this.sectionData.navigators) {
      this.showElem(this.sectionData.navigators[nav]);
    }
  }

  hideNavigators() {
    if (!this.sectionData.navigators || typeof this.sectionData.navigators === 'undefined') return false;

    for (let nav in this.sectionData.navigators) {
      this.hideElem(this.sectionData.navigators[nav]);
    }
  }

  showElem(el) {
    if (!el || typeof el === 'undefined') return false;
    this.changeStyle(el, 'visibility', '');
    el.style.display == 'none' && this.changeStyle(el, 'display', '');
    return el;
  }

  hideElem(el, display) {
    if (!el || typeof el === 'undefined') return false;
    this.changeStyle(el, 'visibility', 'hidden');
    (!display || typeof display === 'undefined') && this.changeStyle(el, 'display', 'none');
    return el;
  }

  isHidden(el, checkDisplay) {
    let visible = el.style.visibility === 'hidden',
        displayed = el.style.display === 'none';
    return visible && (!checkDisplay || typeof checkDisplay === 'undefined' || displayed);
  } // BREADCUMBS


  updateBreadcumbs() {
    if (this.isApp) return;
    this.breadcumbsContainer.innerText = '';
    this.breadcumbs.forEach((text, level) => {
      let formattedText = document.createTextNode(text + (level == this.breadcumbs.length - 1 ? '' : ' > '));
      text && typeof text !== 'undefined' && this.breadcumbsContainer.appendChild(formattedText);
    });
    this.isHidden(this.breadcumbsContainer) && this.showElem(this.breadcumbsContainer);
  }

  addBreadcumb(text, level) {
    if (this.isApp) return;
    level && typeof level !== 'undefined' ? this.breadcumbs[level] = text : this.breadcumbs.push(text);
    this.updateBreadcumbs();
  }

  removeBreadcumb(level) {
    if (this.isApp) return;
    level && typeof level !== 'undefined' ? this.breadcumbs[level] = undefined : this.breadcumbs.pop();
    this.updateBreadcumbs();
  }

  resetBreadcumbs() {
    if (this.isApp) return;
    this.breadcumbs = [this.breadcumbs[0]];
    this.updateBreadcumbs();
  } // URL & REDIRECTING


  openActivity(url, sectionId, type) {
    if (!url || typeof url !== 'string') return;

    if (blink.isApp) {
      blink.rest.openUrl('fullscreen', url);
    } else {
      var openBlank = type === 'url' || type === 'archivo';

      if (openBlank) {
        blink.rest.openUrl('fullscreen', url);
      } else {
        blink.goToActivity(idcurso, sectionId);
      }
    }
  } // DIMENSIONS


  resizeContainer() {
    let navbar = document.querySelector('.navbar.libro');
    if (!navbar) return;
    let el = this.layoutContainer,
        top = navbar.offsetHeight,
        height = window.innerHeight - top;
    this.setElementHeight(el, height);
    this.setElementOffsetX(el, top);
  } // AUX FUNCTIONS


  setElementHeight(el, height) {
    let strHeight = typeof height !== 'string' || height.indexOf('px') == -1 ? height + 'px' : height;
    el.style.height = strHeight;
  }

  setElementOffsetX(el, top) {
    let strTop = typeof top !== 'string' || top.indexOf('px') == -1 ? top + 'px' : top;
    el.style.top = strTop;
  }

  setAttributes(el, attrs) {
    if (!attrs || !(attrs instanceof Object)) return;

    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }

    ;
  }

  createHeader(level, classList, text) {
    let tag = level && typeof level === 'number' ? 'H' + level : 'H2',
        header = this.createElement(tag, classList == '' ? 'section-title-' + level : classList, text);
    return header;
  }

  createElement(tag, classList, text) {
    let el = document.createElement(tag);
    el = this.addClasses(el, classList);
    text && (typeof text === 'string' || typeof text === 'number') && el.appendChild(document.createTextNode(text));
    return el;
  }

  addClasses(el, classList) {
    if (classList instanceof Array) {
      classList.forEach(function (cls) {
        el.classList.add(cls);
      });
    } else if (typeof classList === 'string' && classList != '') {
      el.classList.add(classList);
    }

    return el;
  }

  removeClasses(el, classList) {
    if (classList instanceof Array) {
      classList.forEach(function (cls) {
        el.classList.remove(cls);
      });
    } else if (typeof classList === 'string' && classList != '') {
      el.classList.remove(classList);
    }

    return el;
  }

  changeStyle(elem, prop, val) {
    elem.style[prop] = val;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./gungeneric/blink-src/js/main.js":
/*!**************************************!*\
  !*** ./gungeneric/blink-src/js/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cke_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cke_styles */ "./gungeneric/blink-src/js/cke_styles.js");
/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overrides */ "./gungeneric/blink-src/js/overrides.js");
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/main */ "./gungeneric/blink-src/js/layout/main.js");
/*
*   Javascript principal con la estructura básica del estilo
*/




(function (blink) {
  'use strict';

  var GungenericStyle = function () {
    blink.theme.styles.basic.apply(this, arguments);
  };

  GungenericStyle.prototype = {
    parent: blink.theme.styles.basic.prototype,
    bodyClassName: 'content_type_clase_gungeneric',
    extraPlugins: ['image2'],
    ckEditorStyles: {
      name: 'gungeneric',
      styles: _cke_styles__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    init: function () {
      this.layout = new _layout_main__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this.parent.init.call(this);
      this.removeFinalSlide();
      this.layout.init();
    },
    ..._overrides__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  GungenericStyle.prototype = _.extend({}, new blink.theme.styles.basic(), GungenericStyle.prototype);
  blink.theme.styles['gungeneric'] = GungenericStyle;
})(blink);

/***/ }),

/***/ "./gungeneric/blink-src/js/overrides.js":
/*!*******************************************!*\
  !*** ./gungeneric/blink-src/js/overrides.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
*   Javascript donde están las funciones que sobreescriben a funciones de Basic
*/
const overrides = {
  isAdaptative: () => true,
  showBookIndexInClass: () => {
    return true;
  },
  removeFinalSlide: t => {
    let thisStyle = blink.activity.currentStyle;
    thisStyle.parent.removeFinalSlide.call(thisStyle, true);
  },
  processHash: () => {
    var hash = '',
        curso = blink.getCourse(idcurso, true, true),
        tema = '',
        actividad = '';

    if (!curso.responseJSON || !curso.responseJSON.units || curso.responseJSON.units.length <= 0) {
      return '';
    }

    _.find(curso.responseJSON.units, function (unit) {
      _.find(unit.subunits, function (subunit) {
        if (subunit.id == window.idclase) {
          actividad = subunit;
          tema = unit;
          return;
        }
      });

      if (actividad === '') {
        _.find(unit.resources, function (resource) {
          if (resource.id == window.idclase) {
            actividad = resource;
            tema = unit;
            return;
          }
        });
      }

      if (typeof window.idtema !== 'undefined' && window.idtema !== '' && unit.id == window.idtema) {
        tema = unit;
        return;
      }
    });

    if (typeof tema === 'undefined' || typeof tema.number === 'undefined' || tema.number - 1 <= 0) {
      return '#home';
    }

    if (typeof actividad.onlyVisibleTeachers !== 'undefined' && actividad.onlyVisibleTeachers) {
      hash = '#unit_' + parseInt(tema.number - 1) + '_teacherarea';
    } else {
      hash = '#unit_' + parseInt(tema.number - 1) + '_studentarea';
    }

    return hash;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (overrides);

/***/ }),

/***/ "./gungeneric/blink-src/styles/main.scss":
/*!********************************************!*\
  !*** ./gungeneric/blink-src/styles/main.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!*********************************************************************************!*\
  !*** multi ./gungeneric/blink-src/js/main.js ./gungeneric/blink-src/styles/main.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\workspaces\web\blinkweb\blink\www\themes\responsive\assets\styles\gungeneric\blink-src\js\main.js */"./gungeneric/blink-src/js/main.js");
module.exports = __webpack_require__(/*! D:\workspaces\web\blinkweb\blink\www\themes\responsive\assets\styles\gungeneric\blink-src\styles\main.scss */"./gungeneric/blink-src/styles/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2VuZXJpYy9ibGluay1zcmMvanMvY2tlX3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9qcy9sYXlvdXQvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2dlbmVyaWMvYmxpbmstc3JjL2pzL292ZXJyaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9zdHlsZXMvbWFpbi5zY3NzP2Y5NTQiXSwibmFtZXMiOlsiY2tlU3R5bGVzIiwibmFtZSIsInR5cGUiLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwiZWxlbWVudCIsIkxheW91dCIsImNvbnN0cnVjdG9yIiwicGFyZW50IiwiZG9jdW1lbnQiLCJib2R5IiwiY291cnNlV3JhcHBlcklkIiwibWFpblNjcmVlbklkIiwic2VjdGlvblNjcmVlblByZWZpeCIsImNvdXJzZUhlYWRlcklkIiwiY291cnNlQ29udGVudElkIiwiY291cnNlSWQiLCJ3aW5kb3ciLCJpZGN1cnNvIiwiY291cnNlRGF0YSIsImJsaW5rIiwiZ2V0Q291cnNlIiwicmVzcG9uc2VKU09OIiwiYXV4VGFnIiwidG91Y2hFbmFibGVkIiwibmF2aWdhdG9yIiwiTWF4VG91Y2hQb2ludHMiLCJtc01heFRvdWNoUG9pbnRzIiwiaXNBcHAiLCJldmVudHNNYXAiLCJlbmQiLCJtb3ZlIiwic3RhcnQiLCJ0ZXh0d2ViIiwidGV4dHMiLCJnb0JhY2siLCJzdHVkZW50QXJlYSIsInRlYWNoZXJBcmVhIiwibm9SZXNvdXJjZXMiLCJ1bml0Q29udGVudCIsInJlc291cmNlcyIsInBhZ3MiLCJicmVhZGN1bWJzQ29udGFpbmVyIiwiYnJlYWRjdW1icyIsInRpdGxlIiwic2VjdGlvbkRhdGEiLCJzZWN0aW9ucyIsIm5hdmlnYXRvcnMiLCJsZWZ0IiwicmlnaHQiLCJzbGlkZXIiLCJjdXJyZW50RWxlbWVudCIsIl9yZXNpemVDb250YWluZXIiLCJyZXNpemVDb250YWluZXIiLCJiaW5kIiwibGF5b3V0Q29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImlkIiwicG9ydGFkYSIsImFjdGl2aXR5IiwiY3VycmVudFN0eWxlIiwibGF5b3V0IiwidXJsIiwibWF0Y2giLCJyZXBsYWNlIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwicHJlcGFyZUxheW91dERhdGEiLCJpbml0IiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlckNvbnRyb2wiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2YmFyQm90dG9tIiwic2V0QXR0cmlidXRlIiwiaW1hZ2UiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImV2ZW50cyIsIm9uY2UiLCJyZW1vdmVBdXhVbml0IiwiaWRjbGFzZSIsImdvQmFja1dyYXBwZXIiLCJnb0JhY2tCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicmVkaXJlY2Npb25hciIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwiZm9yRWFjaCIsImVsIiwiZSIsImNoYW5nZVN0eWxlIiwiaGFzaCIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwiaGlkZUVsZW0iLCJnZW5lcmF0ZU5hdmlnYXRvcnMiLCJoaWRlTmF2aWdhdG9ycyIsImluZGV4IiwicGFyc2VJbnQiLCJ0YWIiLCJsYXN0SW5kZXhPZiIsImluaXRTZWN0aW9uIiwiaW5pdEhvbWUiLCJyZXNldEJyZWFkY3VtYnMiLCJtYWluU2NyZWVuIiwiY291cnNlSGVhZGVyIiwiZ2VuZXJhdGVIZWFkZXIiLCJjb3Vyc2VDb250ZW50IiwiZ2VuZXJhdGVDb250ZW50IiwiYWxlcnQiLCJoaWRlTWFpblNjcmVlbiIsInRvZ2dsZU5hdmlnYXRvcnMiLCJzaG93U2VjdGlvbiIsInRhYkNsaWNrSGFuZGxlciIsImN1cnJlbnRTZWN0aW9uIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInRhcmdldFRhYiIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwiZ29CYWNrQ2xpY2tIYW5kbGVyIiwic2hvd01haW5TY3JlZW4iLCJoaWRlU2VjdGlvbiIsInNlcGFyYXRvciIsInRleHQiLCJ3cmFwcGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJkYXRhIiwidW5pdHMiLCJzZWN0aW9uU2NyZWVuIiwiYWRkQnJlYWRjdW1iIiwib25jbGljayIsInNlY3Rpb25XcmFwcGVyIiwic2VjdGlvblRpdGxlIiwiY3JlYXRlSGVhZGVyIiwiZGVzY1dyYXBwZXIiLCJzZWN0aW9uRGVzYyIsInNlY3Rpb25OdW1iZXIiLCJ0b1N0cmluZyIsImxlbmd0aCIsImRlc2NyaXB0aW9uIiwic2VjdGlvbkNvbnRlbnQiLCJ0YWJzV3JhcHBlciIsInN0dWRlbnRUYWIiLCJ0ZWFjaGVyVGFiIiwidGFic0NvbnRlbnQiLCJzdHVkZW50Q29udGVudCIsInRlYWNoZXJDb250ZW50Iiwic3R1ZGVudFdyYXBwZXIiLCJ0ZWFjaGVyV3JhcHBlciIsInN0dWRlbnRVbml0Q29udGFpbmVyIiwic3R1ZGVudFJlc291cmNlQ29udGFpbmVyIiwidGVhY2hlclVuaXRDb250YWluZXIiLCJ0ZWFjaGVyUmVzb3VyY2VDb250YWluZXIiLCJub1Jlc291cmNlc1dyYXBwZXIiLCJjb21iaW5lZCIsInN1YnVuaXRzIiwiY29uY2F0IiwiaXNSZXNvdXJjZSIsImNvbnRhaW5zIiwiZWxXcmFwcGVyIiwiZWxJbWciLCJ0eXBlSW50IiwiZWxUaXRsZVdyYXBwZXIiLCJlbFRpdGxlIiwidGFyZ2V0V3JhcHBlciIsImVsQnV0dG9ucyIsImVsTG9jayIsImVsUGFnZUNvdW50IiwicGFnZUNvdW50VHh0Iiwic3RvcFByb3BhZ2F0aW9uIiwibG9ja0NsYXNzIiwiY2xhc3NMaXN0Iiwib25jbGlja1RpdGxlIiwib3BlbkFjdGl2aXR5Iiwib25seVZpc2libGVUZWFjaGVycyIsImVsQ2lyY2xlT3V0ZXIiLCJlbENpcmNsZUlubmVyIiwiaXNIaWRkZW4iLCJzaG93RWxlbSIsImNoaWxkRWxlbWVudENvdW50IiwiY2xvbmVOb2RlIiwiZmFrZVBhZGRpbmciLCJsYXlvdXREYXRhIiwiYXV4QWN0aXZpdGllcyIsImF1eFVuaXQiLCJ1bml0c0RhdGEiLCJ1bml0IiwiaVVuaXQiLCJ0YWdzIiwiaW5kZXhPZiIsInRhZ09yaWdpbiIsInRhZyIsInB1c2giLCJPYmplY3QiLCJrZXlzIiwidGl0bGVXcmFwcGVyIiwic3VidGl0bGUiLCJleHRyYVdyYXBwZXIiLCJleHRyYUxpc3QiLCJhIiwiaSIsImFuY2hvciIsImhyZWYiLCJzbGlkZXJXcmFwcGVyIiwic2xpZGVyQ29udHJvbExlZnQiLCJzbGlkZXJDb250cm9sUmlnaHQiLCJzbGlkZXJDb250cm9sTGVmdEFycm93Iiwic2xpZGVyQ29udHJvbFJpZ2h0QXJyb3ciLCJhcnJvd0xlZnQiLCJhcnJvd1JpZ2h0Iiwic2xpZGVMZWZ0Iiwic2xpZGVSaWdodCIsInNsaWRlclRyYWNrIiwic2xpZGVyQ2Fyb3VzZWwiLCJzbGlkZXJJdGVtIiwiYW5jaG9yV3JhcHBlciIsInNldEF0dHJpYnV0ZXMiLCJpdGVtVGl0bGUiLCJpdGVtSW1nIiwiaXRlbURlc2MiLCJpdGVtTnVtYmVyIiwiZHJhZ1N0YXJ0SGFuZGxlciIsInRndCIsIml0ZW1zIiwib2Zmc2V0TWFwIiwib2Zmc2V0TGVmdCIsInN0YXJ0WCIsInRhcmdldFRvdWNoZXMiLCJzY3JlZW5YIiwiZHJhZ0hhbmRsZXIiLCJ0cmFuc2Zvcm1WYWwiLCJzdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjdXJyZW50WCIsImNhbGNYIiwiZHJhZ0VuZEhhbmRsZXIiLCJNYXRoIiwiYWJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFycm93IiwiY2xhc3NOYW1lIiwiYm9va0luZGV4IiwidGl0bGVzTGlzdCIsImNvbnRlbnRMaXN0IiwiYXV4TGkiLCJhdXhJbmRleCIsInJlbW92ZSIsImFkZCIsImxlZnRDbGFzc2VzIiwicmlnaHRDbGFzc2VzIiwic2xpZGVQcmV2U2VjdGlvbiIsInNsaWRlTmV4dFNlY3Rpb24iLCJzbGlkZSIsImRpcmVjdGlvbiIsInRyYWNrIiwiY2Fyb3VzZWwiLCJ0YXJnZXRFbGVtZW50Iiwib2Zmc2V0IiwidHJhbnNmb3JtIiwiY3VyT2Zmc2V0Iiwib2Zmc2V0V2lkdGgiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwickluZGV4IiwickVsIiwibmV4dFNpYmxpbmciLCJzbGlkZVNlY3Rpb24iLCJuYXZzIiwic2hvd05hdmlnYXRvcnMiLCJuYXYiLCJkaXNwbGF5IiwiY2hlY2tEaXNwbGF5IiwidmlzaWJsZSIsInZpc2liaWxpdHkiLCJkaXNwbGF5ZWQiLCJ1cGRhdGVCcmVhZGN1bWJzIiwiaW5uZXJUZXh0IiwibGV2ZWwiLCJmb3JtYXR0ZWRUZXh0IiwicmVtb3ZlQnJlYWRjdW1iIiwidW5kZWZpbmVkIiwicG9wIiwic2VjdGlvbklkIiwicmVzdCIsIm9wZW5VcmwiLCJvcGVuQmxhbmsiLCJnb1RvQWN0aXZpdHkiLCJuYXZiYXIiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNldEVsZW1lbnRIZWlnaHQiLCJzZXRFbGVtZW50T2Zmc2V0WCIsInN0ckhlaWdodCIsInN0clRvcCIsImF0dHJzIiwia2V5IiwiaGVhZGVyIiwiQXJyYXkiLCJjbHMiLCJlbGVtIiwicHJvcCIsInZhbCIsIkdlbmVyaWNTdHlsZSIsInRoZW1lIiwic3R5bGVzIiwiYmFzaWMiLCJhcHBseSIsImFyZ3VtZW50cyIsInByb3RvdHlwZSIsImJvZHlDbGFzc05hbWUiLCJleHRyYVBsdWdpbnMiLCJja0VkaXRvclN0eWxlcyIsImNhbGwiLCJyZW1vdmVGaW5hbFNsaWRlIiwib3ZlcnJpZGVzIiwiXyIsImV4dGVuZCIsImlzQWRhcHRhdGl2ZSIsInNob3dCb29rSW5kZXhJbkNsYXNzIiwidCIsInRoaXNTdHlsZSIsInByb2Nlc3NIYXNoIiwiY3Vyc28iLCJ0ZW1hIiwiYWN0aXZpZGFkIiwiZmluZCIsInN1YnVuaXQiLCJyZXNvdXJj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QUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLypcbiogICBBcnJheSBjb24gbGEgZGVmaW5pY2nDs24gZGUgbG9zIGVzdGlsb3MgcGFyYSBlbCBlZGl0b3IgZGUgQ0tFZGl0b3JcbiovXG5cbmNvbnN0IGNrZVN0eWxlcyA9IFtcblx0eyBuYW1lOiAnQ2FqYSAxJywgdHlwZTogJ3dpZGdldCcsIHdpZGdldDogJ2JsaW5rX2JveCcsIGF0dHJpYnV0ZXM6IHsgJ2NsYXNzJzogJ2JveC0xJyB9IH0sXG5cdHsgbmFtZTogJ0NhamEgMicsIHR5cGU6ICd3aWRnZXQnLCB3aWRnZXQ6ICdibGlua19ib3gnLCBhdHRyaWJ1dGVzOiB7ICdjbGFzcyc6ICdib3gtMicgfSB9LFxuXHR7IG5hbWU6ICfDiW5mYXNpcycsIGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyAnY2xhc3MnOiAnYmNrLWVuZmFzaXMnIH19XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBja2VTdHlsZXM7XG4iLCJjbGFzcyBMYXlvdXQge1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQpIHtcblx0XHQvLyBJZHNcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudCA/IHBhcmVudCA6IGRvY3VtZW50LmJvZHk7XG5cdFx0dGhpcy5jb3Vyc2VXcmFwcGVySWQgPSAnbGF5b3V0LWNvbnRhaW5lcic7XG5cdFx0dGhpcy5tYWluU2NyZWVuSWQgPSAnbWFpbi1zY3JlZW4nO1xuXHRcdHRoaXMuc2VjdGlvblNjcmVlblByZWZpeCA9ICdzZWN0aW9uLXNjcmVlbic7XG5cblx0XHR0aGlzLmNvdXJzZUhlYWRlcklkID0gJ2NvdXJzZS1oZWFkZXInO1xuXHRcdHRoaXMuY291cnNlQ29udGVudElkID0gJ2NvdXJzZS1jb250ZW50JztcblxuXHRcdC8vIERhdGFcblx0XHR0aGlzLmNvdXJzZUlkID0gd2luZG93LmlkY3Vyc287XG5cdFx0dGhpcy5jb3Vyc2VEYXRhID0gYmxpbmsuZ2V0Q291cnNlKHRoaXMuY291cnNlSWQsIHRydWUsIHRydWUpLnJlc3BvbnNlSlNPTjtcblx0XHR0aGlzLmF1eFRhZyA9ICd0YWInO1xuXHRcdHRoaXMudG91Y2hFbmFibGVkID0gKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IChuYXZpZ2F0b3IuTWF4VG91Y2hQb2ludHMgPiAwKSB8fCAobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAwKSk7XG5cdFx0dGhpcy5pc0FwcCA9IGJsaW5rLmlzQXBwO1xuXHRcdHRoaXMuZXZlbnRzTWFwID0ge1xuXHRcdFx0ZW5kOiB0aGlzLnRvdWNoRW5hYmxlZCA/ICd0b3VjaGVuZCcgOiAnZHJhZ2VuZCcsXG5cdFx0XHRtb3ZlOiB0aGlzLnRvdWNoRW5hYmxlZCA/ICd0b3VjaG1vdmUnIDogJ2RyYWcnLFxuXHRcdFx0c3RhcnQ6IHRoaXMudG91Y2hFbmFibGVkID8gJ3RvdWNoc3RhcnQnIDogJ2RyYWdzdGFydCdcblx0XHR9XG5cdFx0aWYgKHRleHR3ZWIpIHtcblx0XHRcdHRoaXMudGV4dHMgPSB7XG5cdFx0XHRcdGdvQmFjazogdGV4dHdlYignbGlicm9EaWdpdGFsX3ZvbHZlcicpLFxuXHRcdFx0XHRzdHVkZW50QXJlYTogdGV4dHdlYignYWJwU3R1ZGVudEFyZWEnKSxcblx0XHRcdFx0dGVhY2hlckFyZWE6IHRleHR3ZWIoJ2FicFRlYWNoZXJBcmVhJyksXG5cdFx0XHRcdG5vUmVzb3VyY2VzOiB0ZXh0d2ViKCdhYnBOb1Jlc291cmNlcycpLFxuXHRcdFx0XHR1bml0Q29udGVudDogdGV4dHdlYignY291cnNlX3VuaXRfYWN0aXZpdGllcycpLFxuXHRcdFx0XHRyZXNvdXJjZXM6IHRleHR3ZWIoJ2NvdXJzZV9zdXBwbGVtZW50X2NvbnRlbnQnKSxcblx0XHRcdFx0cGFnczogdGV4dHdlYignY291cnNlX2FicmV2X3BhZycpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEJyZWFkY3VtYnNcblx0XHRpZiAoIXRoaXMuaXNBcHApIHtcblx0XHRcdHRoaXMuYnJlYWRjdW1ic0NvbnRhaW5lcjtcblx0XHRcdHRoaXMuYnJlYWRjdW1icyA9IFt0aGlzLmNvdXJzZURhdGEudGl0bGVdO1xuXHRcdH1cblxuXHRcdC8vIFN0b3JhZ2Vcblx0XHR0aGlzLnNlY3Rpb25EYXRhID0ge1xuXHRcdFx0c2VjdGlvbnM6IFtdLFxuXHRcdFx0bmF2aWdhdG9yczoge1xuXHRcdFx0XHRsZWZ0OiBudWxsLFxuXHRcdFx0XHRyaWdodDogbnVsbFxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNsaWRlciA9IHt9O1xuXHRcdHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID0gMDtcblxuXHRcdC8vIEJpbmRpbmdzXG5cdFx0dGhpcy5fcmVzaXplQ29udGFpbmVyID0gdGhpcy5yZXNpemVDb250YWluZXIuYmluZCh0aGlzKTtcblxuXHRcdC8vIEVsZW1lbnRzXG5cdFx0bGV0IGxheW91dENvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0bGF5b3V0Q29udGFpbmVyLmlkID0gdGhpcy5jb3Vyc2VXcmFwcGVySWQ7XG5cblx0XHQvLyBXb3JrYXJvdW5kIGZvciBnaXRodWJcblx0XHRpZiAodGhpcy5jb3Vyc2VEYXRhICYmICF0aGlzLmNvdXJzZURhdGEucG9ydGFkYSkge1xuXHRcdFx0dGhpcy5jb3Vyc2VEYXRhLnBvcnRhZGEgPSBibGluay5hY3Rpdml0eS5jdXJyZW50U3R5bGUubGF5b3V0LmNvdXJzZURhdGEudXJsLm1hdGNoKC8oY1xcZCtfPyl7MiwyfV9fUG9ydGFkYVxcLnBocC9nKSAhPSBudWxsXG5cdFx0XHRcdD8gdGhpcy5jb3Vyc2VEYXRhLnVybC5tYXRjaCgvY1xcZCsvZylbMV0ucmVwbGFjZSgnYycsICcnKVxuXHRcdFx0XHQ6IG5ldyBVUkxTZWFyY2hQYXJhbXModGhpcy5jb3Vyc2VEYXRhLnVybCkuZ2V0KCdpZGNsYXNlJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sYXlvdXRDb250YWluZXIgPSBsYXlvdXRDb250YWluZXI7XG5cdFx0dGhpcy5wcmVwYXJlTGF5b3V0RGF0YSgpO1xuXHR9XG5cdGluaXQoKSB7XG5cdFx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC13cmFwcGVyJyksXG5cdFx0XHRzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJyksXG5cdFx0XHRzbGlkZXJDb250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1jb250cm9sJyksXG5cdFx0XHRuYXZiYXJCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWJvdHRvbScpO1xuXG5cdFx0dGhpcy5sYXlvdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCInICsgdGhpcy5jb3Vyc2VEYXRhLmltYWdlICsgJ1wiKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsnKTtcblx0XHR0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5sYXlvdXRDb250YWluZXIsIHRoaXMucGFyZW50LmZpcnN0RWxlbWVudENoaWxkKTtcblxuXHRcdGJsaW5rLmV2ZW50cy5vbmNlKCdpbmRleExvYWRlZCcsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQXV4VW5pdCgpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gMS4gQ2hvb3NlIGxheW91dCBvcHRpb24uXG5cdFx0aWYgKHdpbmRvdy5pZGNsYXNlICYmIHdpbmRvdy5pZGNsYXNlICE9IHRoaXMuY291cnNlRGF0YS5wb3J0YWRhKSB7XG5cblx0XHRcdC8vIDEuMS4gQmxpbmsgV2F5LiBGb3IgYWN0aXZpdGllcy5cblxuXHRcdFx0Ly8gMS4xLjEuIEdvYmFja1xuXHRcdFx0bGV0IGdvQmFja1dyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdnby1iYWNrJyksXG5cdFx0XHRcdGdvQmFja0J1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnQlVUVE9OJywgWydidG4nLCAnYnRuLWdvLWJhY2snXSlcblxuXHRcdFx0Z29CYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVkaXJlY2Npb25hcih0aGlzLmNvdXJzZURhdGEudXJsKSk7XG5cdFx0XHRnb0JhY2tCdXR0b24uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJywgJycsIHRoaXMudGV4dHMuZ29CYWNrKSk7XG5cdFx0XHRnb0JhY2tXcmFwcGVyLmFwcGVuZChnb0JhY2tCdXR0b24pO1xuXG5cdFx0XHRzbGlkZXJDb250cm9sLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVN0eWxlKHNsaWRlci5xdWVyeVNlbGVjdG9yKCdbaWQqPXN3aXBldmlldy1tYXN0ZXJwYWdlLV0gLmpzLXNsaWRlci1pdGVtJyksICdvdmVyZmxvdycsICdoaWRkZW4nKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0c2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBldmlldy1mbGlwJywgKGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVN0eWxlKHNsaWRlci5xdWVyeVNlbGVjdG9yKCdbaWQqPXN3aXBldmlldy1tYXN0ZXJwYWdlLV0uc3dpcGV2aWV3LWFjdGl2ZSAuanMtc2xpZGVyLWl0ZW0nKSwgJ292ZXJmbG93JywgJ2F1dG8nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuY2hhbmdlU3R5bGUoY29udGVudCwgJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKFwiJyArIHRoaXMuY291cnNlRGF0YS5pbWFnZSArICdcIiknKTtcblx0XHRcdHRoaXMuY2hhbmdlU3R5bGUoY29udGVudCwgJ2JhY2tncm91bmQtc2l6ZScsICdjb3ZlcicpO1xuXHRcdFx0Y29udGVudC5pbnNlcnRCZWZvcmUoZ29CYWNrV3JhcHBlciwgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gMS4yLiBTdHlsZSBXYXkuXG5cdFx0XHRsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcblxuXHRcdFx0Ly8gMS4yLjEgTWFuYWdlIG9sZCBET00gZWxlbWVudHMuXG5cdFx0XHR0aGlzLmhpZGVFbGVtKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5oaWRlRWxlbShuYXZiYXJCb3R0b20pO1xuXHRcdFx0c2xpZGVyQ29udHJvbC5mb3JFYWNoKChlbCkgPT4gdGhpcy5oaWRlRWxlbShlbCkpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaXNBcHApIHtcblx0XHRcdFx0dGhpcy5icmVhZGN1bWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci5saWJybyAubGlicm8tbGVmdCBzcGFuLnRpdGxlJyk7XG5cdFx0XHRcdHRoaXMuaGlkZUVsZW0odGhpcy5icmVhZGN1bWJzQ29udGFpbmVyKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gMS4yLjIgQ3JlYXRlIHNlY3Rpb24gYXJyb3dzLlxuXHRcdFx0dGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzID0gdGhpcy5nZW5lcmF0ZU5hdmlnYXRvcnMoKTtcblx0XHRcdHRoaXMubGF5b3V0Q29udGFpbmVyLmFwcGVuZCh0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnNbJ2xlZnQnXSwgdGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzWydyaWdodCddKTtcblx0XHRcdHRoaXMuaGlkZU5hdmlnYXRvcnMoKTtcblxuXHRcdFx0Ly8gMS4yLjMuIFByaW50IHRhcmdldCBzY3JlZW4uXG5cdFx0XHRpZiAoaGFzaC5tYXRjaCgvdW5pdF9cXGR7MSwyfV8vZykgIT0gbnVsbCkge1xuXHRcdFx0XHRsZXQgaW5kZXggPSBwYXJzZUludChoYXNoLm1hdGNoKC9cXGR7MSwyfS9nKVswXSksXG5cdFx0XHRcdFx0dGFiID0gaGFzaC5zdWJzdHJpbmcoaGFzaC5sYXN0SW5kZXhPZignXycpKzEpO1xuXG5cdFx0XHRcdHRoaXMuaW5pdFNlY3Rpb24oaW5kZXgsIHRhYik7XG5cdFx0XHR9IGVsc2UgaWYgKGhhc2gubWF0Y2goL2hvbWUvZykgIT0gbnVsbCl7XG5cdFx0XHRcdHRoaXMuaW5pdEhvbWUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaW5pdEhvbWUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5yZXNpemVDb250YWluZXIoKTtcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplQ29udGFpbmVyKTtcblx0fVxuXHRpbml0SG9tZSgpIHtcblx0XHR0aGlzLmhpZGVOYXZpZ2F0b3JzKCk7XG5cdFx0dGhpcy5yZXNldEJyZWFkY3VtYnMoKTtcblxuXHRcdC8vIDEuIE1haW4gc2NyZWVuIGNyZWF0aW9uLlxuXHRcdHRoaXMubWFpblNjcmVlbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ21haW4tc2NyZWVuJyk7XG5cdFx0dGhpcy5tYWluU2NyZWVuLmlkID0gdGhpcy5tYWluU2NyZWVuSWQ7XG5cblx0XHR0aGlzLmxheW91dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1haW5TY3JlZW4pO1xuXG5cdFx0Ly8gMi4gQ3JlYXRlIEhlYWRlci5cblx0XHRsZXQgY291cnNlSGVhZGVyID0gdGhpcy5nZW5lcmF0ZUhlYWRlcigpO1xuXG5cdFx0Ly8gMy4gQ3JlYXRlIENvdXJzZSBjb250ZW50LlxuXHRcdGxldCBjb3Vyc2VDb250ZW50ID0gdGhpcy5nZW5lcmF0ZUNvbnRlbnQoKTtcblxuXHRcdHRoaXMubWFpblNjcmVlbi5hcHBlbmQoY291cnNlSGVhZGVyLCBjb3Vyc2VDb250ZW50KTtcblx0fVxuXHRpbml0U2VjdGlvbihpbmRleCwgdGFiKSB7XG5cdFx0aWYgKCFpbmRleCAmJiB0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRhbGVydCgnTm8gaW5kZXggcHJvdmlkZWQnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gMC4gSGlkZSBtYWluIHNjcmVlbiAoaWYgZXhpc3RzKS5cblx0XHR0aGlzLm1haW5TY3JlZW4gJiYgdHlwZW9mIHRoaXMubWFpblNjcmVlbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmhpZGVNYWluU2NyZWVuKCk7XG5cblx0XHQvLyAwLjEuIE5hdmlnYXRpb24gYXJyb3dzLlxuXHRcdHRoaXMudG9nZ2xlTmF2aWdhdG9ycyhpbmRleCk7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFscmVhZHkgYSBzZWN0aW9uIHNjcmVlbiBmb3IgdGhpcyBpbmRleCwgd2UganVzdCBzaG93IGl0LlxuXHRcdGlmICh0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSAmJiB0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dGhpcy5zaG93U2VjdGlvbihpbmRleCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRhYkNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG5cdFx0XHRsZXQgY3VycmVudFNlY3Rpb24gPSB0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW3RoaXMuY3VycmVudFNlY3Rpb25dLFxuXHRcdFx0XHR0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQsXG5cdFx0XHRcdHRhcmdldFRhYiA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG5cblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3NlcyhjdXJyZW50U2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcudGFiLmFjdGl2ZScpLCAnYWN0aXZlJyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzZXMoY3VycmVudFNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmNvbnRlbnQuYWN0aXZlJyksICdhY3RpdmUnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3Nlcyh0YXJnZXQsICdhY3RpdmUnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3NlcyhjdXJyZW50U2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuJyArIHRhcmdldFRhYiArICctY29udGVudCcpLCAnYWN0aXZlJyk7XG5cdFx0fVxuXHRcdGNvbnN0IGdvQmFja0NsaWNrSGFuZGxlciA9IChlKSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMubWFpblNjcmVlbiB8fCB0eXBlb2YgdGhpcy5tYWluU2NyZWVuID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLmluaXRIb21lKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNob3dNYWluU2NyZWVuKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhpZGVTZWN0aW9uKGluZGV4KTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VwYXJhdG9yID0gKHRleHQpID0+IHtcblx0XHRcdGxldCB3cmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCBbJ3NlcGFyYXRvciddKTtcblx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuXG5cdFx0XHRyZXR1cm4gd3JhcHBlcjtcblx0XHR9XG5cblx0XHRsZXQgZGF0YSA9IHRoaXMuY291cnNlRGF0YS51bml0c1tpbmRleF0sXG5cdFx0XHRzZWN0aW9uU2NyZWVuID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2VjdGlvbi1zY3JlZW4nKTtcblx0XHRzZWN0aW9uU2NyZWVuLmlkID0gdGhpcy5zZWN0aW9uU2NyZWVuUHJlZml4ICsgJy0nICsgaW5kZXg7XG5cblx0XHQvLyAwLjIuIENoYW5nZSBicmVhZGN1bWJzLlxuXHRcdHRoaXMuYWRkQnJlYWRjdW1iKGRhdGEudGl0bGUsIDEpO1xuXG5cdFx0Ly8gMS4gR29iYWNrXG5cdFx0bGV0IGdvQmFja1dyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdnby1iYWNrJyksXG5cdFx0XHRnb0JhY2tCdXR0b24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicsIFsnYnRuJywgJ2J0bi1nby1iYWNrJ10pO1xuXG5cdFx0Z29CYWNrQnV0dG9uLm9uY2xpY2sgPSBnb0JhY2tDbGlja0hhbmRsZXI7XG5cdFx0Z29CYWNrQnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsICcnLCB0aGlzLnRleHRzLmdvQmFjaykpO1xuXHRcdGdvQmFja1dyYXBwZXIuYXBwZW5kKGdvQmFja0J1dHRvbik7XG5cblx0XHQvLyAyLiBTZWN0aW9uLlxuXHRcdGxldCBzZWN0aW9uV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24nKTtcblxuXHRcdC8vIDIuMS4gU2VjdGlvbiBEYXRhXG5cdFx0bGV0IHNlY3Rpb25EYXRhID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2VjdGlvbi1kYXRhJyk7XG5cblx0XHQvLyAyLjEuMS4gU2VjdGlvbiB0aXRsZVxuXHRcdGxldCBzZWN0aW9uVGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzZWN0aW9uLXRpdGxlJyk7XG5cdFx0c2VjdGlvblRpdGxlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSGVhZGVyKDEsICcnLCBkYXRhLnRpdGxlKSk7XG5cblx0XHQvLyAyLjEuMi4gU2VjdGlvbiBkZXNjXG5cdFx0bGV0IGRlc2NXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnZGVzYy13cmFwcGVyJyksXG5cdFx0XHRzZWN0aW9uRGVzYyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tZGVzYycpLFxuXHRcdFx0c2VjdGlvbk51bWJlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tbnVtYmVyJyk7XG5cblx0XHRkZXNjV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicgKyBkYXRhLmltYWdlICsgJ1wiKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsnKTtcblx0XHRzZWN0aW9uTnVtYmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsICcnLCBpbmRleC50b1N0cmluZygpLmxlbmd0aCA9PSAxID8gJzAnICsgaW5kZXggOiBpbmRleCkpO1xuXG5cdFx0c2VjdGlvbkRlc2MuYXBwZW5kKHRoaXMuY3JlYXRlSGVhZGVyKDIsICcnLCBkYXRhLmRlc2NyaXB0aW9uKSwgc2VjdGlvbk51bWJlcik7XG5cblx0XHRkZXNjV3JhcHBlci5hcHBlbmQoc2VjdGlvbkRlc2MpO1xuXG5cdFx0c2VjdGlvbkRhdGEuYXBwZW5kKHNlY3Rpb25UaXRsZSwgZGVzY1dyYXBwZXIpO1xuXG5cdFx0Ly8gMi4yLiBTZWN0aW9uIENvbnRlbnQuXG5cdFx0bGV0IHNlY3Rpb25Db250ZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2VjdGlvbi1jb250ZW50Jyk7XG5cblx0XHQvLyAyLjIuMSBUYWJzIHdyYXBlcHIuXG5cdFx0bGV0IHRhYnNXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAndGFicycpLFxuXHRcdFx0c3R1ZGVudFRhYiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3RhYicpLFxuXHRcdFx0dGVhY2hlclRhYiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3RhYicpO1xuXG5cdFx0c3R1ZGVudFRhYi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUhlYWRlcigyLCAnJywgdGhpcy50ZXh0cy5zdHVkZW50QXJlYSkpO1xuXHRcdHRlYWNoZXJUYWIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVIZWFkZXIoMiwgJycsIHRoaXMudGV4dHMudGVhY2hlckFyZWEpKTtcblxuXHRcdHN0dWRlbnRUYWIuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICdzdHVkZW50Jyk7XG5cdFx0dGVhY2hlclRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJ3RlYWNoZXInKTtcblxuXHRcdHN0dWRlbnRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJDbGlja0hhbmRsZXIpO1xuXHRcdHRlYWNoZXJUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJDbGlja0hhbmRsZXIpO1xuXG5cdFx0dGFic1dyYXBwZXIuYXBwZW5kKHN0dWRlbnRUYWIsIHRlYWNoZXJUYWIpO1xuXG5cdFx0Ly8gMi4yLjIgVGFicyBjb250ZW50LlxuXHRcdGxldCB0YWJzQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3RhYnMtY29udGVudCcpLFxuXHRcdFx0c3R1ZGVudENvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsnY29udGVudCcsICdzdHVkZW50LWNvbnRlbnQnXSksXG5cdFx0XHR0ZWFjaGVyQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgWydjb250ZW50JywgJ3RlYWNoZXItY29udGVudCddKSxcblx0XHRcdHN0dWRlbnRXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAndW5pdC13cmFwcGVyJyksXG5cdFx0XHR0ZWFjaGVyV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3VuaXQtd3JhcHBlcicpLFxuXHRcdFx0c3R1ZGVudFVuaXRDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsndW5pdC1jb250ZW50J10pLFxuXHRcdFx0c3R1ZGVudFJlc291cmNlQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCBbJ3Jlc291cmNlcy1jb250ZW50J10pLFxuXHRcdFx0dGVhY2hlclVuaXRDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsndW5pdC1jb250ZW50J10pLFxuXHRcdFx0dGVhY2hlclJlc291cmNlQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCBbJ3Jlc291cmNlcy1jb250ZW50J10pLFxuXHRcdFx0bm9SZXNvdXJjZXNXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdIMicsICduby1yZXNvdXJjZXMnLCB0aGlzLnRleHRzLm5vUmVzb3VyY2VzKSxcblx0XHRcdGNvbWJpbmVkID0gZGF0YS5zdWJ1bml0cy5jb25jYXQoZGF0YS5yZXNvdXJjZXMpO1xuXG5cdFx0dGhpcy5oaWRlRWxlbShzdHVkZW50VW5pdENvbnRhaW5lcikuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKHRoaXMudGV4dHMudW5pdENvbnRlbnQpKTtcblx0XHR0aGlzLmhpZGVFbGVtKHN0dWRlbnRSZXNvdXJjZUNvbnRhaW5lcikuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKHRoaXMudGV4dHMucmVzb3VyY2VzKSk7XG5cdFx0dGhpcy5oaWRlRWxlbSh0ZWFjaGVyVW5pdENvbnRhaW5lcikuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKHRoaXMudGV4dHMudW5pdENvbnRlbnQpKTtcblx0XHR0aGlzLmhpZGVFbGVtKHRlYWNoZXJSZXNvdXJjZUNvbnRhaW5lcikuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKHRoaXMudGV4dHMucmVzb3VyY2VzKSk7XG5cblx0XHRzd2l0Y2ggKHRhYikge1xuXHRcdFx0Y2FzZSAndGVhY2hlcmFyZWEnOlxuXHRcdFx0XHR0aGlzLmFkZENsYXNzZXModGVhY2hlclRhYiwgJ2FjdGl2ZScpO1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzZXModGVhY2hlckNvbnRlbnQsICdhY3RpdmUnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aGlzLmFkZENsYXNzZXMoc3R1ZGVudFRhYiwgJ2FjdGl2ZScpO1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzZXMoc3R1ZGVudENvbnRlbnQsICdhY3RpdmUnKTtcblx0XHR9XG5cblx0XHRjb21iaW5lZC5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0bGV0IGlzUmVzb3VyY2UgPSBkYXRhLnJlc291cmNlcy5jb250YWlucyhlbCksXG5cdFx0XHRcdGVsV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2NvbnRlbnQtaXRlbScpLFxuXHRcdFx0XHRlbEltZyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgWydjb250ZW50LWltZycsICd0eXBlLScgKyBlbC50eXBlSW50LCBlbC50eXBlXSksXG5cdFx0XHRcdGVsVGl0bGVXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnY29udGVudC10aXRsZScpLFxuXHRcdFx0XHRlbFRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJywgbnVsbCwgZWwudGl0bGUpLFxuXHRcdFx0XHR0YXJnZXRXcmFwcGVyO1xuXG5cdFx0XHQvLyAyLjIuMi4xLiBUaXRsZSBjcmVhdGlvbi5cblx0XHRcdGVsVGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKGVsVGl0bGUpO1xuXG5cdFx0XHRlbFdyYXBwZXIuYXBwZW5kKGVsSW1nLCBlbFRpdGxlV3JhcHBlcik7XG5cblx0XHRcdC8vIDIuMi4yLjIuIEJ1dHRvbiBjcmVhdGlvblxuXHRcdFx0aWYgKCFpc1Jlc291cmNlKSB7XG5cdFx0XHRcdGxldCBlbEJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdjb250ZW50LWJ1dHRvbnMnKSxcblx0XHRcdFx0XHRlbExvY2sgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCAnY29udGVudC1sb2NrJyksXG5cdFx0XHRcdFx0ZWxQYWdlQ291bnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCAnY29udGVudC1wYWdlLWNvdW50JyksXG5cdFx0XHRcdFx0cGFnZUNvdW50VHh0ID0gZWwucGFncyA/IGVsLnBhZ3MgKyAnICcgKyB0aGlzLnRleHRzLnBhZ3MucmVwbGFjZSgnLicsIGVsLnBhZ3MgPiAxID8gJ3MuJyA6ICcuJykgOiAnJztcblxuXHRcdFx0XHRlbExvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0bGV0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldCxcblx0XHRcdFx0XHRcdGxvY2tDbGFzcyA9ICdsb2NrZWQnO1xuXHRcdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMobG9ja0NsYXNzKSA/IHRoaXMucmVtb3ZlQ2xhc3Nlcyh0YXJnZXQsIGxvY2tDbGFzcykgOiB0aGlzLmFkZENsYXNzZXModGFyZ2V0LCBsb2NrQ2xhc3MpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRlbFBhZ2VDb3VudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYWdlQ291bnRUeHQpKTtcblxuXHRcdFx0XHRlbEJ1dHRvbnMuYXBwZW5kKGVsTG9jaywgZWxQYWdlQ291bnQpO1xuXG5cdFx0XHRcdGVsV3JhcHBlci5hcHBlbmRDaGlsZChlbEJ1dHRvbnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbC5vbmNsaWNrVGl0bGUgP1xuXHRcdFx0XHRlbFdyYXBwZXIuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgZWwub25jbGlja1RpdGxlKSA6XG5cdFx0XHRcdGVsV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub3BlbkFjdGl2aXR5KGVsLnVybCwgZGF0YS5pZCwgZWwudHlwZSkpO1xuXG5cdFx0XHRpZiAoZWwub25seVZpc2libGVUZWFjaGVycykge1xuXHRcdFx0XHRsZXQgZWxDaXJjbGVPdXRlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2NpcmNsZS1vdXRlcicpLFxuXHRcdFx0XHRcdGVsQ2lyY2xlSW5uZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdjaXJjbGUtaW5uZXInKTtcblxuXHRcdFx0XHRlbFdyYXBwZXIuaW5zZXJ0QmVmb3JlKGVsQ2lyY2xlT3V0ZXIsIGVsSW1nKTtcblx0XHRcdFx0ZWxXcmFwcGVyLmluc2VydEJlZm9yZShlbENpcmNsZUlubmVyLCBlbEltZyk7XG5cblx0XHRcdFx0dGFyZ2V0V3JhcHBlciA9IGlzUmVzb3VyY2UgPyB0ZWFjaGVyUmVzb3VyY2VDb250YWluZXIgOiB0ZWFjaGVyVW5pdENvbnRhaW5lcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIDIuMi4yLjEuIEltYWdlIGNyZWF0aW9uLlxuXHRcdFx0XHR0aGlzLmNoYW5nZVN0eWxlKGVsSW1nLCAnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArIGVsLmltYWdlICsgJyknKTtcblxuXHRcdFx0XHR0YXJnZXRXcmFwcGVyID0gaXNSZXNvdXJjZSA/IHN0dWRlbnRSZXNvdXJjZUNvbnRhaW5lciA6IHN0dWRlbnRVbml0Q29udGFpbmVyO1xuXHRcdFx0fVxuXG5cdFx0XHR0YXJnZXRXcmFwcGVyLmFwcGVuZENoaWxkKGVsV3JhcHBlcik7XG5cdFx0XHR0aGlzLmlzSGlkZGVuKHRhcmdldFdyYXBwZXIsIHRydWUpICYmIHRoaXMuc2hvd0VsZW0odGFyZ2V0V3JhcHBlcik7XG5cdFx0fSk7XG5cblx0XHRpZiAodGVhY2hlclJlc291cmNlQ29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID09IDEgJiYgdGVhY2hlclVuaXRDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPT0gMSkge1xuXHRcdFx0dGVhY2hlcldyYXBwZXIuYXBwZW5kKG5vUmVzb3VyY2VzV3JhcHBlci5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZWFjaGVyV3JhcHBlci5hcHBlbmQodGVhY2hlclVuaXRDb250YWluZXIsIHRlYWNoZXJSZXNvdXJjZUNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0aWYgKHN0dWRlbnRSZXNvdXJjZUNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA9PSAxICYmIHN0dWRlbnRVbml0Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID09IDEpIHtcblx0XHRcdHN0dWRlbnRXcmFwcGVyLmFwcGVuZChub1Jlc291cmNlc1dyYXBwZXIuY2xvbmVOb2RlKHRydWUpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R1ZGVudFdyYXBwZXIuYXBwZW5kKHN0dWRlbnRVbml0Q29udGFpbmVyLCBzdHVkZW50UmVzb3VyY2VDb250YWluZXIpO1xuXHRcdH1cblxuXHRcdHN0dWRlbnRDb250ZW50LmFwcGVuZChzdHVkZW50V3JhcHBlcik7XG5cdFx0dGVhY2hlckNvbnRlbnQuYXBwZW5kKHRlYWNoZXJXcmFwcGVyKTtcblxuXHRcdHRhYnNDb250ZW50LmFwcGVuZChzdHVkZW50Q29udGVudCwgdGVhY2hlckNvbnRlbnQpO1xuXG5cdFx0c2VjdGlvbkNvbnRlbnQuYXBwZW5kKHRhYnNXcmFwcGVyLCB0YWJzQ29udGVudCk7XG5cblx0XHRzZWN0aW9uV3JhcHBlci5hcHBlbmQoc2VjdGlvbkRhdGEsIHNlY3Rpb25Db250ZW50KTtcblxuXHRcdC8vIDMuIEZha2UgcGFkZGluZy5cblx0XHRsZXQgZmFrZVBhZGRpbmcgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXG5cdFx0c2VjdGlvblNjcmVlbi5hcHBlbmQoZ29CYWNrV3JhcHBlciwgc2VjdGlvbldyYXBwZXIsIGZha2VQYWRkaW5nKTtcblxuXHRcdHRoaXMuY3VycmVudFNlY3Rpb24gPSBpbmRleDtcblx0XHR0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSA9IHNlY3Rpb25TY3JlZW47XG5cdFx0dGhpcy5sYXlvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblNjcmVlbik7XG5cdH1cblx0cHJlcGFyZUxheW91dERhdGEoKSB7XG5cdFx0bGV0IGxheW91dERhdGEgPSB7XG5cdFx0XHRhdXhBY3Rpdml0aWVzOiBbXSxcblx0XHRcdGF1eFVuaXQ6IHt9LFxuXHRcdFx0dW5pdHNEYXRhOiBbXVxuXHRcdH07XG5cdFx0bGV0IGF1eFRhZyA9IHRoaXMuYXV4VGFnO1xuXG5cdFx0dGhpcy5jb3Vyc2VEYXRhLnVuaXRzLmZvckVhY2goKHVuaXQsIGlVbml0KSA9PiB7XG5cdFx0XHRpZiAodW5pdC50YWdzICYmIHVuaXQudGFncy5pbmRleE9mKGF1eFRhZykgIT0gLTEpIHtcblx0XHRcdFx0bGF5b3V0RGF0YS5hdXhVbml0ID0gdW5pdDtcblx0XHRcdH1cblx0XHRcdHVuaXQuc3VidW5pdHMuZm9yRWFjaCgoYWN0aXZpdHkpID0+IHtcblx0XHRcdFx0bGV0IHRhZ09yaWdpbiA9IGFjdGl2aXR5LnRhZ3MgPyBhY3Rpdml0eS50YWdzIDogYWN0aXZpdHkudGFnO1xuXG5cdFx0XHRcdGlmICh0YWdPcmlnaW4gJiYgdGFnT3JpZ2luLmluZGV4T2YoYXV4VGFnKSAhPSAtMSkge1xuXHRcdFx0XHRcdGxheW91dERhdGFbJ2F1eEFjdGl2aXRpZXMnXS5wdXNoKGFjdGl2aXR5KTtcblx0XHRcdFx0fSBlbHNlIGlmIChpVW5pdCA9PSAwICYmIGFjdGl2aXR5LmlkICE9IHRoaXMuY291cnNlRGF0YS5wb3J0YWRhKSB7XG5cdFx0XHRcdFx0bGF5b3V0RGF0YVsnYXV4QWN0aXZpdGllcyddLnB1c2goYWN0aXZpdHkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gYXV4VW5pdCwgd2UgdGFrZSB0aGUgZmlyc3Qgb25lIGFzIGF1eC5cblx0XHQoT2JqZWN0LmtleXMobGF5b3V0RGF0YS5hdXhVbml0KS5sZW5ndGggPT09IDAgJiYgbGF5b3V0RGF0YS5hdXhVbml0LmNvbnN0cnVjdG9yID09PSBPYmplY3QpICYmIChsYXlvdXREYXRhLmF1eFVuaXQgPSB0aGlzLmNvdXJzZURhdGEudW5pdHNbMF0pXG5cblx0XHR0aGlzLmxheW91dERhdGEgPSBsYXlvdXREYXRhO1xuXHR9XG5cdGdlbmVyYXRlSGVhZGVyKCkge1xuXHRcdGxldCBjb3Vyc2VIZWFkZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdGNvdXJzZUhlYWRlci5pZCA9IHRoaXMuY291cnNlSGVhZGVySWQ7XG5cblx0XHQvLyAxLjEuIENyZWF0ZSB0aXRsZVxuXHRcdGxldCB0aXRsZVdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdjb3Vyc2UtdGl0bGUnKTtcblx0XHRsZXQgdGl0bGUgPSB0aGlzLmNyZWF0ZUhlYWRlcigxLCAnJywgdGhpcy5jb3Vyc2VEYXRhLnRpdGxlKTtcblx0XHRsZXQgc3VidGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCAnJywgdGhpcy5jb3Vyc2VEYXRhLmRlc2NyaXB0aW9uKTtcblxuXHRcdHRpdGxlV3JhcHBlci5hcHBlbmQodGl0bGUsIHN1YnRpdGxlKTtcblxuXHRcdC8vIDEuMi4gQ3JlYXRlIGV4dHJhIHdyYXBwZXIuXG5cblx0XHRsZXQgZXh0cmFXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnY291cnNlLWV4dHJhJyk7XG5cdFx0bGV0IGV4dHJhTGlzdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnVUwnKTtcblxuXHRcdHRoaXMubGF5b3V0RGF0YS5hdXhBY3Rpdml0aWVzLmZvckVhY2goZnVuY3Rpb24oYSwgaSkge1xuXHRcdFx0bGV0IHdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0xJJyk7XG5cdFx0XHRsZXQgYW5jaG9yID0gdGhpcy5jcmVhdGVFbGVtZW50KCdBJyk7XG5cdFx0XHRsZXQgdGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCAnJywgYS50aXRsZSk7XG5cblx0XHRcdGFuY2hvci5ocmVmID0gJ2phdmFzY3JpcHQ6dm9pZCgwKSc7XG5cdFx0XHRhbmNob3Iuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgYS5vbmNsaWNrVGl0bGUpO1xuXHRcdFx0YW5jaG9yLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHRcdFx0d3JhcHBlci5pZCA9ICd0YWJzLWl0ZW0nICsgaTtcblxuXHRcdFx0ZXh0cmFMaXN0LmFwcGVuZENoaWxkKHdyYXBwZXIpLmFwcGVuZENoaWxkKGFuY2hvcik7XG5cdFx0fSwgdGhpcyk7XG5cdFx0ZXh0cmFXcmFwcGVyLmFwcGVuZENoaWxkKGV4dHJhTGlzdCk7XG5cblx0XHQvLyAxLjMgQXBwZW5kIGJvdGggZWxlbWVudHMuXG5cdFx0Y291cnNlSGVhZGVyLmFwcGVuZCh0aXRsZVdyYXBwZXIsIGV4dHJhV3JhcHBlcik7XG5cblx0XHRyZXR1cm4gY291cnNlSGVhZGVyO1xuXHR9XG5cdGdlbmVyYXRlQ29udGVudCgpIHtcblx0XHRsZXQgY291cnNlQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2NvdXJzZS1jb250ZW50Jyk7XG5cdFx0Y291cnNlQ29udGVudC5pZCA9IHRoaXMuY291cnNlQ29udGVudElkO1xuXG5cdFx0bGV0IGF1eFRhZyA9IHRoaXMuYXV4VGFnO1xuXG5cdFx0Ly8gMi4xLiBXcmFwcGVyXG5cdFx0bGV0IHNsaWRlcldyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzbGlkZXItd3JhcHBlcicpO1xuXG5cdFx0Ly8gMi4yLiBDb250cm9sc1xuXHRcdGxldCBzbGlkZXJDb250cm9sTGVmdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgWydzbGlkZXItbmF2Y29udHJvbCcsICdzbGlkZXItbmF2Y29udHJvbC1sZWZ0J10pO1xuXHRcdGxldCBzbGlkZXJDb250cm9sUmlnaHQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsnc2xpZGVyLW5hdmNvbnRyb2wnLCAnc2xpZGVyLW5hdmNvbnRyb2wtcmlnaHQnXSk7XG5cdFx0bGV0IHNsaWRlckNvbnRyb2xMZWZ0QXJyb3cgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nKTtcblx0XHRsZXQgc2xpZGVyQ29udHJvbFJpZ2h0QXJyb3cgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nKTtcblx0XHRsZXQgYXJyb3dMZWZ0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdJJywgWydmYScsICdmYS1hbmdsZS1sZWZ0J10pO1xuXHRcdGxldCBhcnJvd1JpZ2h0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdJJywgWydmYScsICdmYS1hbmdsZS1yaWdodCddKTtcblxuXHRcdGFycm93TGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2xpZGVMZWZ0KCkpO1xuXHRcdGFycm93UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNsaWRlUmlnaHQoKSk7XG5cblx0XHQvLyBXZSBoaWRlIHRoZSBsZWZ0IGNvbnRyb2wgYXJyb3cgYXQgc3RhcnR1cC5cblx0XHR0aGlzLmhpZGVFbGVtKHNsaWRlckNvbnRyb2xMZWZ0LCB0cnVlKS5hcHBlbmRDaGlsZChzbGlkZXJDb250cm9sTGVmdEFycm93KS5hcHBlbmRDaGlsZChhcnJvd0xlZnQpO1xuXHRcdHNsaWRlckNvbnRyb2xSaWdodC5hcHBlbmRDaGlsZChzbGlkZXJDb250cm9sUmlnaHRBcnJvdykuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodCk7XG5cblx0XHQvLyAyLjMuIFRyYWNrXG5cdFx0bGV0IHNsaWRlclRyYWNrID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2xpZGVyLWl0ZW10cmFjaycpO1xuXHRcdGxldCBzbGlkZXJDYXJvdXNlbCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NsaWRlci1jYXJvdXNlbCcpO1xuXG5cdFx0Ly8gMi40LiBTbGlkZXIgSXRlbXMuXG5cdFx0dGhpcy5jb3Vyc2VEYXRhLnVuaXRzLmZvckVhY2goZnVuY3Rpb24odW5pdCwgaSkge1xuXHRcdFx0aWYgKHRoaXMubGF5b3V0RGF0YS5hdXhVbml0LmlkID09IHVuaXQuaWQpIHJldHVybjtcblxuXHRcdFx0bGV0IHNsaWRlckl0ZW0gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzbGlkZXItaXRlbScpO1xuXHRcdFx0c2xpZGVySXRlbS5pZCA9ICdzbGlkZXItaXRlbS0nICsgKGktMSk7XG5cblx0XHRcdC8vIDIuNC4wIEFuY2hvciB3cmFwcGVyXG5cdFx0XHRsZXQgYW5jaG9yV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnQScsICcnKTtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlcyhhbmNob3JXcmFwcGVyLCB7XG5cdFx0XHRcdGhyZWY6ICdqYXZhc2NyaXB0OnZvaWQoMCknLFxuXHRcdFx0fSk7XG5cdFx0XHRhbmNob3JXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmluaXRTZWN0aW9uKGkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIDIuNC4xLiBJdGVtIHRpdGxlXG5cdFx0XHRsZXQgaXRlbVRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2VjdGlvbi10aXRsZScpO1xuXHRcdFx0aXRlbVRpdGxlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSGVhZGVyKDMsICcnLCB1bml0LnRpdGxlKSk7XG5cblx0XHRcdC8vMi40LjIuIEl0ZW0gaW1nXG5cdFx0XHRsZXQgaXRlbUltZyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24taW1nJyk7XG5cdFx0XHRpdGVtSW1nLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJyArIHVuaXQuaW1hZ2UgKyAnXCIpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOycpO1xuXG5cdFx0XHQvLyAyLjQuMy4gSXRlbSBEZXNjXG5cdFx0XHRsZXQgaXRlbURlc2MgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzZWN0aW9uLWRlc2MnKTtcblx0XHRcdGl0ZW1EZXNjLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSGVhZGVyKDQsICcnLCB1bml0LmRlc2NyaXB0aW9uKSk7XG5cblxuXHRcdFx0Ly8gMi40LjQuIEl0ZW0gTnVtYmVyXG5cdFx0XHRsZXQgaXRlbU51bWJlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tbnVtYmVyJyk7XG5cdFx0XHRpdGVtTnVtYmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsICcnLCBpLnRvU3RyaW5nKCkubGVuZ3RoID09IDEgPyAnMCcgKyBpIDogaSkpO1xuXG5cdFx0XHRzbGlkZXJDYXJvdXNlbC5hcHBlbmRDaGlsZChzbGlkZXJJdGVtKS5hcHBlbmRDaGlsZChhbmNob3JXcmFwcGVyKS5hcHBlbmQoaXRlbVRpdGxlLCBpdGVtSW1nLCBpdGVtRGVzYywgaXRlbU51bWJlcik7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHRzbGlkZXJUcmFjay5hcHBlbmRDaGlsZChzbGlkZXJDYXJvdXNlbCk7XG5cblx0XHRzbGlkZXJXcmFwcGVyLmFwcGVuZChzbGlkZXJDb250cm9sTGVmdCwgc2xpZGVyVHJhY2ssIHNsaWRlckNvbnRyb2xSaWdodCk7XG5cblx0XHRjb3Vyc2VDb250ZW50LmFwcGVuZENoaWxkKHNsaWRlcldyYXBwZXIpO1xuXG5cdFx0Ly8gMi41LiBEcmFnIHNsaWRlIGhhbmRsaW5nLlxuXHRcdGxldCBkcmFnU3RhcnRIYW5kbGVyID0gKGUpID0+IHtcblx0XHRcdGxldCB0Z3QgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cdFx0XHRsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5jb3Vyc2VDb250ZW50SWQpO1xuXHRcdFx0bGV0IGl0ZW1zID0gdGd0LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZCo9c2xpZGVyLWl0ZW1dJyk7XG5cdFx0XHRsZXQgb2Zmc2V0TWFwID0gW107XG5cblx0XHRcdGl0ZW1zLmZvckVhY2goKGUpID0+IG9mZnNldE1hcC5wdXNoKGUub2Zmc2V0TGVmdCkpO1xuXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dmFyIHN0YXJ0WCA9IHRoaXMudG91Y2hFbmFibGVkID8gZS50YXJnZXRUb3VjaGVzWzBdLnNjcmVlblggOiBlLnNjcmVlblg7XG5cblx0XHRcdGxldCBkcmFnSGFuZGxlciA9IChlKSA9PiB7XG5cdFx0XHRcdGxldCBzY3JlZW5YID0gdGhpcy50b3VjaEVuYWJsZWQgPyBlLnRhcmdldFRvdWNoZXNbMF0uc2NyZWVuWCA6IGUuc2NyZWVuWDtcblxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRcdGlmIChzdGFydFggPT0gc2NyZWVuWCB8fCBzY3JlZW5YID09IDApIHJldHVybjtcblxuXHRcdFx0XHRsZXQgdHJhbnNmb3JtVmFsID0gZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpLFxuXHRcdFx0XHRcdGN1cnJlbnRYID0gdHJhbnNmb3JtVmFsID09ICcnID8gMCA6IHBhcnNlSW50KHRyYW5zZm9ybVZhbC5tYXRjaCgvXFxkKy9nKVswXSksXG5cdFx0XHRcdFx0Y2FsY1ggPSAoc2NyZWVuWCAtIHN0YXJ0WCkgLSBjdXJyZW50WDtcblxuXHRcdFx0XHR0aGlzLmNoYW5nZVN0eWxlKGUuY3VycmVudFRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyAoY2FsY1ggPiAwID8gMCA6IGNhbGNYKSArICdweCknKTtcblx0XHRcdFx0c3RhcnRYID0gc2NyZWVuWDtcblx0XHRcdH1cblx0XHRcdGxldCBkcmFnRW5kSGFuZGxlciA9IChlKSA9PiB7XG5cdFx0XHRcdGxldCBjYWxjWCA9IG51bGwsXG5cdFx0XHRcdFx0dHJhbnNmb3JtVmFsID0gZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpLFxuXHRcdFx0XHRcdGN1cnJlbnRYID0gdHJhbnNmb3JtVmFsID09ICcnID8gMCA6IHBhcnNlSW50KHRyYW5zZm9ybVZhbC5tYXRjaCgvXFxkKy9nKVswXSk7XG5cblx0XHRcdFx0b2Zmc2V0TWFwLmZvckVhY2goKGUsaSkgPT4ge1xuXHRcdFx0XHRcdGlmIChNYXRoLmFicyhjdXJyZW50WCAtIGUpIDwgTWF0aC5hYnMoY3VycmVudFggLSBvZmZzZXRNYXBbaS0xXSkgfHwgKGkgLSAxKSA8IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID0gaTtcblx0XHRcdFx0XHRcdGNhbGNYID0gLWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB0aGlzKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VTdHlsZShlLmN1cnJlbnRUYXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKGNhbGNYID4gMCA/IDAgOiBjYWxjWCkgKyAncHgpJyk7XG5cdFx0XHRcdGUuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRzTWFwWydtb3ZlJ10sIGRyYWdIYW5kbGVyKTtcblx0XHRcdFx0ZS5jdXJyZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudHNNYXBbJ2VuZCddLCBkcmFnRW5kSGFuZGxlcik7XG5cblx0XHRcdFx0Ly8gQXJyb3cgbWFuYWdlbWVudFxuXHRcdFx0XHR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXItbmF2Y29udHJvbCcpLmZvckVhY2goKGFycm93KSA9PiB7XG5cdFx0XHRcdFx0aWYgKChhcnJvdy5jbGFzc05hbWUuaW5kZXhPZignbGVmdCcpICE9IC0xICYmIHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID09IDApIHx8IChhcnJvdy5jbGFzc05hbWUuaW5kZXhPZigncmlnaHQnKSAhPSAtMSAmJiB0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9PSBpdGVtcy5sZW5ndGgtMSkpIHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZUVsZW0oYXJyb3csIHRydWUpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dFbGVtKGFycm93KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHR0Z3QuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50c01hcFsnbW92ZSddLCBkcmFnSGFuZGxlcik7XG5cdFx0XHR0Z3QuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50c01hcFsnZW5kJ10sIGRyYWdFbmRIYW5kbGVyKTtcblx0XHR9XG5cblx0XHRzbGlkZXJDYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRzTWFwWydzdGFydCddLCBkcmFnU3RhcnRIYW5kbGVyKTtcblxuXHRcdHJldHVybiBjb3Vyc2VDb250ZW50O1xuXHR9XG5cdHJlbW92ZUF1eFVuaXQoKSB7XG5cdFx0bGV0IGlkID0gdGhpcy5sYXlvdXREYXRhLmF1eFVuaXQuaWQsXG5cdFx0XHRib29rSW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay1pbmRleCcpLFxuXHRcdFx0dGl0bGVzTGlzdCA9IGJvb2tJbmRleC5xdWVyeVNlbGVjdG9yKCcjbGlzdC11bml0cycpLFxuXHRcdFx0Y29udGVudExpc3QgPSBib29rSW5kZXgucXVlcnlTZWxlY3RvcignLmNvbC1tYWluID4gZGl2OmZpcnN0LWNoaWxkJyksXG5cdFx0XHRhdXhMaSA9IGJvb2tJbmRleC5xdWVyeVNlbGVjdG9yKCdsaVtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpLFxuXHRcdFx0YXV4SW5kZXggPSBib29rSW5kZXgucXVlcnlTZWxlY3RvcignLnVuaXQtY29udGVudFtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpO1xuXG5cdFx0YXV4TGkgIT0gbnVsbCAmJiBhdXhMaS5yZW1vdmUoKTtcblx0XHRhdXhJbmRleCAhPSBudWxsICYmIGF1eEluZGV4LnJlbW92ZSgpO1xuXG5cdFx0dGl0bGVzTGlzdC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRjb250ZW50TGlzdC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuXHRcdC8vIC8vJCgnI2Jvb2staW5kZXgnKS5maW5kKCcuY29sLW1haW4nKS5jc3MoeydsZWZ0JyA6IDB9KTtcblx0fVxuXHQvLyBVc2VyIG5hdmlnYXRpb25cblx0Z2VuZXJhdGVOYXZpZ2F0b3JzKCkge1xuXHRcdGxldCBsZWZ0Q2xhc3NlcyA9IFsnc2VjdGlvbi1uYXZpZ2F0aW9uJywgJ2xlZnQnXTtcblx0XHRsZXQgcmlnaHRDbGFzc2VzID0gWydzZWN0aW9uLW5hdmlnYXRpb24nLCAncmlnaHQnXTtcblx0XHRsZXQgYXJyb3dMZWZ0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdCVVRUT04nLCBsZWZ0Q2xhc3Nlcyk7XG5cdFx0bGV0IGFycm93UmlnaHQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicsIHJpZ2h0Q2xhc3Nlcyk7XG5cblx0XHRhcnJvd0xlZnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KCdJJywgWydmYScsICdmYS1hbmdsZS1sZWZ0J10pKTtcblx0XHRhcnJvd1JpZ2h0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCgnSScsIFsnZmEnLCAnZmEtYW5nbGUtcmlnaHQnXSkpO1xuXG5cdFx0YXJyb3dMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zbGlkZVByZXZTZWN0aW9uKCkpO1xuXHRcdGFycm93UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNsaWRlTmV4dFNlY3Rpb24oKSk7XG5cblx0XHRyZXR1cm4ge2xlZnQ6IGFycm93TGVmdCwgcmlnaHQ6IGFycm93UmlnaHR9O1xuXHR9XG5cdHNsaWRlKGRpcmVjdGlvbikge1xuXHRcdGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvdXJzZS1jb250ZW50Jyk7XG5cdFx0bGV0IHRyYWNrID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWl0ZW10cmFjaycpO1xuXHRcdGxldCBjYXJvdXNlbCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNsaWRlci1jYXJvdXNlbCcpO1xuXHRcdGxldCBpdGVtcyA9IHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnW2lkKj1zbGlkZXItaXRlbV0nKTtcblx0XHRsZXQgY3VycmVudEVsZW1lbnQgPSBpdGVtc1t0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudF07XG5cdFx0bGV0IHRhcmdldEVsZW1lbnQ7XG5cdFx0bGV0IG9mZnNldDtcblxuXHRcdC8vIEFkZCB0cmFuc2Zvcm0gdG8gcmVzZXQgZWxlbWVudHMgb2Zmc2V0O1xuXHRcdGNhcm91c2VsLnN0eWxlLnRyYW5zZm9ybSA9PSAnJyAmJiAoY2Fyb3VzZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KScpO1xuXG5cdFx0aWYgKGRpcmVjdGlvbiA9PSAnbHRyJykge1xuXHRcdFx0aWYgKHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID09IGl0ZW1zLmxlbmd0aC0xKSByZXR1cm47XG5cdFx0XHRpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGUsaSkge1xuXHRcdFx0XHRpZiAoaSA8IHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50KSByZXR1cm47XG5cdFx0XHRcdFx0bGV0IGN1ck9mZnNldCA9IGUub2Zmc2V0TGVmdCAtIGN1cnJlbnRFbGVtZW50Lm9mZnNldExlZnQ7XG5cblx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnQgJiYgdHlwZW9mIHRhcmdldEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cblx0XHRcdFx0aWYgKE1hdGguYWJzKGN1ck9mZnNldCkgPiB0cmFjay5vZmZzZXRXaWR0aCkge1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQgPSBlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQgPSBpLTE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaSA9PSBpdGVtcy5sZW5ndGgtMSkge1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQgPSBlO1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID0gaTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRvZmZzZXQgPSAtdGFyZ2V0RWxlbWVudC5vZmZzZXRMZWZ0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQgPT0gMCkgcmV0dXJuO1xuXHRcdFx0aXRlbXMuZm9yRWFjaChmdW5jdGlvbihlLGkpIHtcblx0XHRcdFx0bGV0IHJJbmRleCA9IGl0ZW1zLmxlbmd0aC0xIC0gaTtcblx0XHRcdFx0aWYgKHJJbmRleCA+IHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50KSByZXR1cm47XG5cblx0XHRcdFx0bGV0IHJFbCA9IGl0ZW1zW3JJbmRleF0sXG5cdFx0XHRcdFx0Y3VyT2Zmc2V0ID0gckVsLm9mZnNldExlZnQgLSBjdXJyZW50RWxlbWVudC5vZmZzZXRMZWZ0O1xuXG5cdFx0XHRcdGlmICh0YXJnZXRFbGVtZW50ICYmIHR5cGVvZiB0YXJnZXRFbGVtZW50ICE9PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXHRcdFx0XHRpZiAoTWF0aC5hYnMoY3VyT2Zmc2V0KSA+IHRyYWNrLm9mZnNldFdpZHRoKSB7XG5cdFx0XHRcdFx0dGFyZ2V0RWxlbWVudCA9IHJFbC5uZXh0U2libGluZztcblx0XHRcdFx0XHR0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9IHJJbmRleCArIDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAockluZGV4ID09IDApIHtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gckVsO1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID0gckluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKTtcblx0XHRcdG9mZnNldCA9IC10YXJnZXRFbGVtZW50Lm9mZnNldExlZnQ7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAndW5kZWZpbmVkJykgY2Fyb3VzZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIG9mZnNldCArICdweCknO1xuXG5cdFx0Ly8gQXJyb3cgbWFuYWdlbWVudFxuXHRcdHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1uYXZjb250cm9sJykuZm9yRWFjaCgoYXJyb3cpID0+IHtcblx0XHRcdGlmICgoYXJyb3cuY2xhc3NOYW1lLmluZGV4T2YoJ2xlZnQnKSAhPSAtMSAmJiB0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9PSAwKSB8fCAoYXJyb3cuY2xhc3NOYW1lLmluZGV4T2YoJ3JpZ2h0JykgIT0gLTEgJiYgdGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQgPT0gaXRlbXMubGVuZ3RoLTEpKSB7XG5cdFx0XHRcdHRoaXMuaGlkZUVsZW0oYXJyb3csIHRydWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zaG93RWxlbShhcnJvdyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxuXHRzbGlkZUxlZnQoKSB7XG5cdFx0dGhpcy5zbGlkZSgpO1xuXHR9XG5cdHNsaWRlUmlnaHQoKSB7XG5cdFx0dGhpcy5zbGlkZSgnbHRyJyk7XG5cdH1cblx0c2xpZGVOZXh0U2VjdGlvbigpIHtcblx0XHRpZiAodGhpcy5jb3Vyc2VEYXRhLnVuaXRzLmxlbmd0aC0xID09IHRoaXMuY3VycmVudFNlY3Rpb24pe1xuXHRcdFx0dGhpcy5oaWRlRWxlbSh0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnNbJ3JpZ2h0J10pO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNsaWRlU2VjdGlvbih0aGlzLmN1cnJlbnRTZWN0aW9uICsgMSk7XG5cdH1cblx0c2xpZGVQcmV2U2VjdGlvbigpIHtcblx0XHRpZiAodGhpcy5jdXJyZW50U2VjdGlvbiA9PSAxKSB7XG5cdFx0XHR0aGlzLmhpZGVFbGVtKHRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9yc1snbGVmdCddKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zbGlkZVNlY3Rpb24odGhpcy5jdXJyZW50U2VjdGlvbiAtIDEpO1xuXHR9XG5cdHNsaWRlU2VjdGlvbihpbmRleCkge1xuXHRcdHRoaXMuaGlkZVNlY3Rpb24odGhpcy5jdXJyZW50U2VjdGlvbik7XG5cdFx0dGhpcy50b2dnbGVOYXZpZ2F0b3JzKGluZGV4KTtcblx0XHRpZiAodGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uc1tpbmRleF0gJiYgdHlwZW9mIHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbnNbaW5kZXhdICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR0aGlzLnNob3dTZWN0aW9uKGluZGV4KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5pbml0U2VjdGlvbihpbmRleCk7XG5cdH1cblx0Ly8gU0hPVy9ISURFXG5cdHNob3dNYWluU2NyZWVuKCkge1xuXHRcdHRoaXMuaGlkZU5hdmlnYXRvcnMoKTtcblx0XHR0aGlzLnJlc2V0QnJlYWRjdW1icygpO1xuXHRcdHRoaXMubWFpblNjcmVlbiAmJiB0aGlzLnNob3dFbGVtKHRoaXMubWFpblNjcmVlbik7XG5cdH1cblx0aGlkZU1haW5TY3JlZW4oKSB7XG5cdFx0dGhpcy5tYWluU2NyZWVuICYmIHRoaXMuaGlkZUVsZW0odGhpcy5tYWluU2NyZWVuKTtcblx0fVxuXHRzaG93U2VjdGlvbihpbmRleCkge1xuXHRcdGxldCBkYXRhID0gdGhpcy5jb3Vyc2VEYXRhLnVuaXRzW2luZGV4XTtcblx0XHR0aGlzLmFkZEJyZWFkY3VtYihkYXRhLnRpdGxlLCAxKTtcblx0XHR0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSAmJiB0aGlzLnNob3dFbGVtKHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbnNbaW5kZXhdKTtcblx0XHR0aGlzLmN1cnJlbnRTZWN0aW9uID0gaW5kZXg7XG5cdH1cblx0aGlkZVNlY3Rpb24oaW5kZXgpIHtcblx0XHR0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSAmJiB0aGlzLmhpZGVFbGVtKHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbnNbaW5kZXhdKTtcblx0fVxuXHR0b2dnbGVOYXZpZ2F0b3JzKGluZGV4KSB7XG5cdFx0aWYgKCFpbmRleCB8fCB0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cdFx0bGV0IG5hdnMgPSB0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnM7XG5cblx0XHRpbmRleCA9PSAxID8gdGhpcy5oaWRlRWxlbShuYXZzLmxlZnQsIHRydWUpIDogdGhpcy5zaG93RWxlbShuYXZzLmxlZnQpO1xuXHRcdHRoaXMuY291cnNlRGF0YS51bml0cy5sZW5ndGgtMSA9PSBpbmRleCA/IHRoaXMuaGlkZUVsZW0obmF2cy5yaWdodCwgdHJ1ZSkgOiB0aGlzLnNob3dFbGVtKG5hdnMucmlnaHQpO1xuXHR9XG5cdHNob3dOYXZpZ2F0b3JzKCkge1xuXHRcdGlmICghdGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzIHx8IHR5cGVvZiB0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cdFx0Zm9yIChsZXQgbmF2IGluIHRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9ycykge1xuXHRcdFx0dGhpcy5zaG93RWxlbSh0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnNbbmF2XSk7XG5cdFx0fVxuXHR9XG5cdGhpZGVOYXZpZ2F0b3JzKCkge1xuXHRcdGlmICghdGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzIHx8IHR5cGVvZiB0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cdFx0Zm9yIChsZXQgbmF2IGluIHRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9ycykge1xuXHRcdFx0dGhpcy5oaWRlRWxlbSh0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnNbbmF2XSk7XG5cdFx0fVxuXHR9XG5cdHNob3dFbGVtKGVsKSB7XG5cdFx0aWYgKCFlbCB8fCB0eXBlb2YgZWwgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLmNoYW5nZVN0eWxlKGVsLCAndmlzaWJpbGl0eScsICcnKTtcblx0XHRlbC5zdHlsZS5kaXNwbGF5ID09ICdub25lJyAmJiB0aGlzLmNoYW5nZVN0eWxlKGVsLCAnZGlzcGxheScsICcnKTtcblx0XHRyZXR1cm4gZWw7XG5cdH1cblx0aGlkZUVsZW0oZWwsIGRpc3BsYXkpIHtcblx0XHRpZiAoIWVsIHx8IHR5cGVvZiBlbCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMuY2hhbmdlU3R5bGUoZWwsICd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdCghZGlzcGxheSB8fCB0eXBlb2YgZGlzcGxheSA9PT0gJ3VuZGVmaW5lZCcpICYmIHRoaXMuY2hhbmdlU3R5bGUoZWwsICdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRyZXR1cm4gZWw7XG5cdH1cblx0aXNIaWRkZW4oZWwsIGNoZWNrRGlzcGxheSkge1xuXHRcdGxldCB2aXNpYmxlID0gZWwuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicsXG5cdFx0XHRkaXNwbGF5ZWQgPSBlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZSc7XG5cdFx0cmV0dXJuIHZpc2libGUgJiYgKCghY2hlY2tEaXNwbGF5IHx8IHR5cGVvZiBjaGVja0Rpc3BsYXkgPT09ICd1bmRlZmluZWQnKSB8fCBkaXNwbGF5ZWQpO1xuXHR9XG5cblx0Ly8gQlJFQURDVU1CU1xuXHR1cGRhdGVCcmVhZGN1bWJzKCkge1xuXHRcdGlmICh0aGlzLmlzQXBwKSByZXR1cm47XG5cblx0XHR0aGlzLmJyZWFkY3VtYnNDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XG5cdFx0dGhpcy5icmVhZGN1bWJzLmZvckVhY2goKHRleHQsIGxldmVsKSA9PiB7XG5cdFx0XHRsZXQgZm9ybWF0dGVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQgKyAobGV2ZWwgPT0gdGhpcy5icmVhZGN1bWJzLmxlbmd0aC0xID8gJycgOiAnID4gJykpO1xuXHRcdFx0KHRleHQgJiYgdHlwZW9mIHRleHQgIT09ICd1bmRlZmluZWQnKSAmJiAodGhpcy5icmVhZGN1bWJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1hdHRlZFRleHQpKTtcblx0XHR9KTtcblx0XHR0aGlzLmlzSGlkZGVuKHRoaXMuYnJlYWRjdW1ic0NvbnRhaW5lcikgJiYgdGhpcy5zaG93RWxlbSh0aGlzLmJyZWFkY3VtYnNDb250YWluZXIpO1xuXHR9XG5cdGFkZEJyZWFkY3VtYih0ZXh0LCBsZXZlbCkge1xuXHRcdGlmICh0aGlzLmlzQXBwKSByZXR1cm47XG5cblx0XHQobGV2ZWwgJiYgdHlwZW9mIGxldmVsICE9PSAndW5kZWZpbmVkJykgPyAodGhpcy5icmVhZGN1bWJzW2xldmVsXSA9IHRleHQpIDogdGhpcy5icmVhZGN1bWJzLnB1c2godGV4dCk7XG5cdFx0dGhpcy51cGRhdGVCcmVhZGN1bWJzKCk7XG5cdH1cblx0cmVtb3ZlQnJlYWRjdW1iKGxldmVsKSB7XG5cdFx0aWYgKHRoaXMuaXNBcHApIHJldHVybjtcblxuXHRcdChsZXZlbCAmJiB0eXBlb2YgbGV2ZWwgIT09ICd1bmRlZmluZWQnKSA/ICh0aGlzLmJyZWFkY3VtYnNbbGV2ZWxdID0gdW5kZWZpbmVkKSA6IHRoaXMuYnJlYWRjdW1icy5wb3AoKTtcblx0XHR0aGlzLnVwZGF0ZUJyZWFkY3VtYnMoKTtcblx0fVxuXHRyZXNldEJyZWFkY3VtYnMoKSB7XG5cdFx0aWYgKHRoaXMuaXNBcHApIHJldHVybjtcblxuXHRcdHRoaXMuYnJlYWRjdW1icyA9IFt0aGlzLmJyZWFkY3VtYnNbMF1dO1xuXHRcdHRoaXMudXBkYXRlQnJlYWRjdW1icygpO1xuXHR9XG5cblx0Ly8gVVJMICYgUkVESVJFQ1RJTkdcblx0b3BlbkFjdGl2aXR5KHVybCwgc2VjdGlvbklkLCB0eXBlKSB7XG5cdFx0aWYgKCF1cmwgfHwgdHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHJldHVybjtcblxuXHRcdGlmIChibGluay5pc0FwcCkge1xuXHRcdFx0YmxpbmsucmVzdC5vcGVuVXJsKCdmdWxsc2NyZWVuJywgdXJsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIG9wZW5CbGFuayA9ICh0eXBlID09PSAndXJsJyB8fCB0eXBlID09PSAnYXJjaGl2bycpO1xuXHRcdFx0aWYgKG9wZW5CbGFuaykge1xuXHRcdFx0XHRibGluay5yZXN0Lm9wZW5VcmwoJ2Z1bGxzY3JlZW4nLCB1cmwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YmxpbmsuZ29Ub0FjdGl2aXR5KGlkY3Vyc28sIHNlY3Rpb25JZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gRElNRU5TSU9OU1xuXHRyZXNpemVDb250YWluZXIoKSB7XG5cdFx0bGV0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXIubGlicm8nKTtcblx0XHRpZiAoIW5hdmJhcikgcmV0dXJuO1xuXG5cdFx0bGV0IGVsID0gdGhpcy5sYXlvdXRDb250YWluZXIsXG5cdFx0XHR0b3AgPSBuYXZiYXIub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0aGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdG9wO1xuXG5cdFx0dGhpcy5zZXRFbGVtZW50SGVpZ2h0KGVsLCBoZWlnaHQpO1xuXHRcdHRoaXMuc2V0RWxlbWVudE9mZnNldFgoZWwsIHRvcCk7XG5cdH1cblx0Ly8gQVVYIEZVTkNUSU9OU1xuXHRzZXRFbGVtZW50SGVpZ2h0KGVsLCBoZWlnaHQpIHtcblx0XHRsZXQgc3RySGVpZ2h0ID0gKHR5cGVvZiBoZWlnaHQgIT09ICdzdHJpbmcnIHx8IGhlaWdodC5pbmRleE9mKCdweCcpID09IC0xKSA/IGhlaWdodCArICdweCcgOiBoZWlnaHQ7XG5cdFx0ZWwuc3R5bGUuaGVpZ2h0ID0gc3RySGVpZ2h0O1xuXHR9XG5cdHNldEVsZW1lbnRPZmZzZXRYKGVsLCB0b3ApIHtcblx0XHRsZXQgc3RyVG9wID0gKHR5cGVvZiB0b3AgIT09ICdzdHJpbmcnIHx8IHRvcC5pbmRleE9mKCdweCcpID09IC0xKSA/IHRvcCArICdweCcgOiB0b3A7XG5cdFx0ZWwuc3R5bGUudG9wID0gc3RyVG9wO1xuXHR9XG5cdHNldEF0dHJpYnV0ZXMoZWwsIGF0dHJzKSB7XG5cdFx0aWYgKCFhdHRycyB8fCAhKGF0dHJzIGluc3RhbmNlb2YgT2JqZWN0KSkgcmV0dXJuO1xuXHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdFx0fTtcblx0fVxuXHRjcmVhdGVIZWFkZXIobGV2ZWwsIGNsYXNzTGlzdCwgdGV4dCkge1xuXHRcdGxldCB0YWcgPSAobGV2ZWwgJiYgdHlwZW9mIGxldmVsID09PSAnbnVtYmVyJykgPyAnSCcgKyBsZXZlbCA6ICdIMicsXG5cdFx0XHRoZWFkZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc0xpc3QgPT0gJycgPyAnc2VjdGlvbi10aXRsZS0nICsgbGV2ZWwgOiBjbGFzc0xpc3QsIHRleHQpO1xuXG5cdFx0cmV0dXJuIGhlYWRlcjtcblx0fVxuXHRjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NMaXN0LCB0ZXh0KSB7XG5cdFx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXHRcdGVsID0gdGhpcy5hZGRDbGFzc2VzKGVsLCBjbGFzc0xpc3QpO1xuXHRcdCh0ZXh0ICYmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRleHQgPT09ICdudW1iZXInKSkgJiYgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuXG5cdFx0cmV0dXJuIGVsXG5cdH1cblx0YWRkQ2xhc3NlcyhlbCwgY2xhc3NMaXN0KSB7XG5cdFx0aWYgKGNsYXNzTGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRjbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbihjbHMpIHtcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJyAmJiBjbGFzc0xpc3QgIT0gJycpIHtcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cdHJlbW92ZUNsYXNzZXMoZWwsIGNsYXNzTGlzdCkge1xuXHRcdGlmIChjbGFzc0xpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0Y2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24oY2xzKSB7XG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycgJiYgY2xhc3NMaXN0ICE9ICcnKSB7XG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTGlzdCk7XG5cdFx0fVxuXHRcdHJldHVybiBlbDtcblx0fVxuXHRjaGFuZ2VTdHlsZShlbGVtLCBwcm9wLCB2YWwpIHtcblx0XHRlbGVtLnN0eWxlW3Byb3BdID0gdmFsO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsIi8qXG4qICAgSmF2YXNjcmlwdCBwcmluY2lwYWwgY29uIGxhIGVzdHJ1Y3R1cmEgYsOhc2ljYSBkZWwgZXN0aWxvXG4qL1xuXG5pbXBvcnQgY2tlU3R5bGVzIGZyb20gJy4vY2tlX3N0eWxlcyc7XG5pbXBvcnQgb3ZlcnJpZGVzIGZyb20gJy4vb3ZlcnJpZGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQvbWFpbic7XG5cbihmdW5jdGlvbiAoYmxpbmspIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBHZW5lcmljU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YmxpbmsudGhlbWUuc3R5bGVzLmJhc2ljLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdH1cblxuXHRHZW5lcmljU3R5bGUucHJvdG90eXBlID0ge1xuXHRcdHBhcmVudDogYmxpbmsudGhlbWUuc3R5bGVzLmJhc2ljLnByb3RvdHlwZSxcblx0XHRib2R5Q2xhc3NOYW1lOiAnY29udGVudF90eXBlX2NsYXNlX2dlbmVyaWMnLFxuXHRcdGV4dHJhUGx1Z2luczogWydpbWFnZTInXSxcblx0XHRja0VkaXRvclN0eWxlczoge1xuXHRcdFx0bmFtZTogJ2dlbmVyaWMnLFxuXHRcdFx0c3R5bGVzOiBja2VTdHlsZXNcblx0XHR9LFxuXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmxheW91dCA9IG5ldyBMYXlvdXQoKTtcblx0XHRcdHRoaXMucGFyZW50LmluaXQuY2FsbCh0aGlzKTtcblx0XHRcdHRoaXMucmVtb3ZlRmluYWxTbGlkZSgpO1xuXG5cdFx0XHR0aGlzLmxheW91dC5pbml0KCk7XG5cdFx0fSxcblx0XHQuLi5vdmVycmlkZXNcblx0fTtcblxuXHRHZW5lcmljU3R5bGUucHJvdG90eXBlID0gXy5leHRlbmQoe30sIG5ldyBibGluay50aGVtZS5zdHlsZXMuYmFzaWMoKSwgR2VuZXJpY1N0eWxlLnByb3RvdHlwZSk7XG5cblx0YmxpbmsudGhlbWUuc3R5bGVzWydnZW5lcmljJ10gPSBHZW5lcmljU3R5bGU7XG59KSggYmxpbmsgKTtcbiIsIi8qXG4qICAgSmF2YXNjcmlwdCBkb25kZSBlc3TDoW4gbGFzIGZ1bmNpb25lcyBxdWUgc29icmVlc2NyaWJlbiBhIGZ1bmNpb25lcyBkZSBCYXNpY1xuKi9cblxuY29uc3Qgb3ZlcnJpZGVzID0gIHtcblx0aXNBZGFwdGF0aXZlOiAoKSA9PiB0cnVlLFxuXHRzaG93Qm9va0luZGV4SW5DbGFzczooKSA9PiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdHJlbW92ZUZpbmFsU2xpZGU6ICh0KSA9PiB7XG5cdFx0bGV0IHRoaXNTdHlsZSA9IGJsaW5rLmFjdGl2aXR5LmN1cnJlbnRTdHlsZTtcblx0XHR0aGlzU3R5bGUucGFyZW50LnJlbW92ZUZpbmFsU2xpZGUuY2FsbCh0aGlzU3R5bGUsIHRydWUpO1xuXHR9LFxuXHRwcm9jZXNzSGFzaDogKCkgPT4ge1xuXHRcdHZhciBoYXNoID0gJycsXG5cdFx0XHRjdXJzbyA9IGJsaW5rLmdldENvdXJzZShpZGN1cnNvLCB0cnVlLCB0cnVlKSxcblx0XHRcdHRlbWEgPSAnJyxcblx0XHRcdGFjdGl2aWRhZCA9ICcnO1xuXG5cdFx0aWYgKCFjdXJzby5yZXNwb25zZUpTT04gfHwgIWN1cnNvLnJlc3BvbnNlSlNPTi51bml0cyB8fCBjdXJzby5yZXNwb25zZUpTT04udW5pdHMubGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRfLmZpbmQoY3Vyc28ucmVzcG9uc2VKU09OLnVuaXRzLCBmdW5jdGlvbiAodW5pdCkge1xuXHRcdFx0Xy5maW5kKHVuaXQuc3VidW5pdHMsIGZ1bmN0aW9uIChzdWJ1bml0KSB7XG5cdFx0XHRcdGlmIChzdWJ1bml0LmlkID09IHdpbmRvdy5pZGNsYXNlKSB7XG5cdFx0XHRcdFx0YWN0aXZpZGFkID0gc3VidW5pdDtcblx0XHRcdFx0XHR0ZW1hID0gdW5pdDtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdGlmIChhY3RpdmlkYWQgPT09ICcnKSB7XG5cdFx0XHRcdF8uZmluZCh1bml0LnJlc291cmNlcywgZnVuY3Rpb24gKHJlc291cmNlKSB7XG5cdFx0XHRcdFx0aWYgKHJlc291cmNlLmlkID09IHdpbmRvdy5pZGNsYXNlKSB7XG5cdFx0XHRcdFx0XHRhY3RpdmlkYWQgPSByZXNvdXJjZTtcblx0XHRcdFx0XHRcdHRlbWEgPSB1bml0O1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB3aW5kb3cuaWR0ZW1hICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaWR0ZW1hICE9PSAnJyAmJiB1bml0LmlkID09IHdpbmRvdy5pZHRlbWEpIHtcblx0XHRcdFx0dGVtYSA9IHVuaXQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICh0eXBlb2YgdGVtYSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRlbWEubnVtYmVyID09PSAndW5kZWZpbmVkJyB8fCB0ZW1hLm51bWJlciAtIDEgPD0gMCkge1xuXHRcdFx0cmV0dXJuICcjaG9tZSc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBhY3RpdmlkYWQub25seVZpc2libGVUZWFjaGVycyAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aXZpZGFkLm9ubHlWaXNpYmxlVGVhY2hlcnMpIHtcblx0XHRcdGhhc2ggPSAnI3VuaXRfJyArIHBhcnNlSW50KHRlbWEubnVtYmVyIC0gMSkgKyAnX3RlYWNoZXJhcmVhJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGFzaCA9ICcjdW5pdF8nICsgcGFyc2VJbnQodGVtYS5udW1iZXIgLSAxKSArICdfc3R1ZGVudGFyZWEnO1xuXHRcdH1cblxuXHRcdHJldHVybiBoYXNoO1xuXHR9XG59O1xuZXhwb3J0IGRlZmF1bHQgb3ZlcnJpZGVzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU5MzE2ODU5OTU0OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi93b3Jrc3BhY2VzL3dlYi9jb21tb24tdXRpbHMvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
