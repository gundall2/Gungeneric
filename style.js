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
const ckeStyles = [{
  name: 'Caja 1',
  type: 'widget',
  widget: 'blink_box',
  attributes: {
    'class': 'box-1'
  }
}, {
  name: 'Caja 2',
  type: 'widget',
  widget: 'blink_box',
  attributes: {
    'class': 'box-2'
  }
}, {
  name: 'Énfasis',
  element: 'span',
  attributes: {
    'class': 'bck-enfasis'
  }
}];
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
    layoutContainer.id = this.courseWrapperId; // Añadido para funcionar desde Github.

    if (!this.courseData.portada) {
      this.courseData.portada = new URL(this.courseData.url).searchParams.get('idclase');
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
    this.parent.insertBefore(this.layoutContainer, this.parent.firstElementChild); // 1. Choose layout option.

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

    this.addBreadcumb(data.title); // 1. Goback

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
      unitsData: []
    };
    let auxTag = this.auxTag;
    this.courseData.units.forEach(function (unit, iUnit) {
      unit.subunits.forEach(function (activity) {
        let tagOrigin = activity.tags ? activity.tags : activity.tag; // if (tagOrigin && tagOrigin.indexOf(auxTag) != -1) { // Código original; no funciona desde Github

        if (iUnit == 0 && activity.id != this.courseData.portada) {
          layoutData['auxActivities'].push(activity);
        }
      }, this);
    }, this);
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
      if (unit.tags && unit.tags.indexOf(auxTag) != -1) {
        return;
      }

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
    this.addBreadcumb(data.title);
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
  }

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
      this.parent.init.call(this);
      this.layout = new _layout_main__WEBPACK_IMPORTED_MODULE_2__["default"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2VuZXJpYy9ibGluay1zcmMvanMvY2tlX3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9qcy9sYXlvdXQvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2dlbmVyaWMvYmxpbmstc3JjL2pzL292ZXJyaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbImNrZVN0eWxlcyIsIm5hbWUiLCJ0eXBlIiwid2lkZ2V0IiwiYXR0cmlidXRlcyIsImVsZW1lbnQiLCJMYXlvdXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImRvY3VtZW50IiwiYm9keSIsImNvdXJzZVdyYXBwZXJJZCIsIm1haW5TY3JlZW5JZCIsInNlY3Rpb25TY3JlZW5QcmVmaXgiLCJjb3Vyc2VIZWFkZXJJZCIsImNvdXJzZUNvbnRlbnRJZCIsImNvdXJzZUlkIiwid2luZG93IiwiaWRjdXJzbyIsImNvdXJzZURhdGEiLCJibGluayIsImdldENvdXJzZSIsInJlc3BvbnNlSlNPTiIsImF1eFRhZyIsInRvdWNoRW5hYmxlZCIsIm5hdmlnYXRvciIsIk1heFRvdWNoUG9pbnRzIiwibXNNYXhUb3VjaFBvaW50cyIsImlzQXBwIiwiZXZlbnRzTWFwIiwiZW5kIiwibW92ZSIsInN0YXJ0IiwidGV4dHdlYiIsInRleHRzIiwiZ29CYWNrIiwic3R1ZGVudEFyZWEiLCJ0ZWFjaGVyQXJlYSIsIm5vUmVzb3VyY2VzIiwidW5pdENvbnRlbnQiLCJyZXNvdXJjZXMiLCJwYWdzIiwiYnJlYWRjdW1ic0NvbnRhaW5lciIsImJyZWFkY3VtYnMiLCJ0aXRsZSIsInNlY3Rpb25EYXRhIiwic2VjdGlvbnMiLCJuYXZpZ2F0b3JzIiwibGVmdCIsInJpZ2h0Iiwic2xpZGVyIiwiY3VycmVudEVsZW1lbnQiLCJfcmVzaXplQ29udGFpbmVyIiwicmVzaXplQ29udGFpbmVyIiwiYmluZCIsImxheW91dENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInBvcnRhZGEiLCJVUkwiLCJ1cmwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJwcmVwYXJlTGF5b3V0RGF0YSIsImluaXQiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRCeUlkIiwic2xpZGVyQ29udHJvbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZiYXJCb3R0b20iLCJzZXRBdHRyaWJ1dGUiLCJpbWFnZSIsImluc2VydEJlZm9yZSIsImZpcnN0RWxlbWVudENoaWxkIiwiaWRjbGFzZSIsImdvQmFja1dyYXBwZXIiLCJnb0JhY2tCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicmVkaXJlY2Npb25hciIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwiZm9yRWFjaCIsImVsIiwiZSIsImNoYW5nZVN0eWxlIiwiaGFzaCIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwiaGlkZUVsZW0iLCJnZW5lcmF0ZU5hdmlnYXRvcnMiLCJoaWRlTmF2aWdhdG9ycyIsIm1hdGNoIiwiaW5kZXgiLCJwYXJzZUludCIsInRhYiIsImxhc3RJbmRleE9mIiwiaW5pdFNlY3Rpb24iLCJpbml0SG9tZSIsInJlc2V0QnJlYWRjdW1icyIsIm1haW5TY3JlZW4iLCJjb3Vyc2VIZWFkZXIiLCJnZW5lcmF0ZUhlYWRlciIsImNvdXJzZUNvbnRlbnQiLCJnZW5lcmF0ZUNvbnRlbnQiLCJhbGVydCIsImhpZGVNYWluU2NyZWVuIiwidG9nZ2xlTmF2aWdhdG9ycyIsInNob3dTZWN0aW9uIiwidGFiQ2xpY2tIYW5kbGVyIiwiY3VycmVudFNlY3Rpb24iLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0VGFiIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3NlcyIsImFkZENsYXNzZXMiLCJnb0JhY2tDbGlja0hhbmRsZXIiLCJzaG93TWFpblNjcmVlbiIsImhpZGVTZWN0aW9uIiwic2VwYXJhdG9yIiwidGV4dCIsIndyYXBwZXIiLCJjcmVhdGVUZXh0Tm9kZSIsImRhdGEiLCJ1bml0cyIsInNlY3Rpb25TY3JlZW4iLCJhZGRCcmVhZGN1bWIiLCJvbmNsaWNrIiwic2VjdGlvbldyYXBwZXIiLCJzZWN0aW9uVGl0bGUiLCJjcmVhdGVIZWFkZXIiLCJkZXNjV3JhcHBlciIsInNlY3Rpb25EZXNjIiwic2VjdGlvbk51bWJlciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJzZWN0aW9uQ29udGVudCIsInRhYnNXcmFwcGVyIiwic3R1ZGVudFRhYiIsInRlYWNoZXJUYWIiLCJ0YWJzQ29udGVudCIsInN0dWRlbnRDb250ZW50IiwidGVhY2hlckNvbnRlbnQiLCJzdHVkZW50V3JhcHBlciIsInRlYWNoZXJXcmFwcGVyIiwic3R1ZGVudFVuaXRDb250YWluZXIiLCJzdHVkZW50UmVzb3VyY2VDb250YWluZXIiLCJ0ZWFjaGVyVW5pdENvbnRhaW5lciIsInRlYWNoZXJSZXNvdXJjZUNvbnRhaW5lciIsIm5vUmVzb3VyY2VzV3JhcHBlciIsImNvbWJpbmVkIiwic3VidW5pdHMiLCJjb25jYXQiLCJpc1Jlc291cmNlIiwiY29udGFpbnMiLCJlbFdyYXBwZXIiLCJlbEltZyIsInR5cGVJbnQiLCJlbFRpdGxlV3JhcHBlciIsImVsVGl0bGUiLCJ0YXJnZXRXcmFwcGVyIiwiZWxCdXR0b25zIiwiZWxMb2NrIiwiZWxQYWdlQ291bnQiLCJwYWdlQ291bnRUeHQiLCJyZXBsYWNlIiwic3RvcFByb3BhZ2F0aW9uIiwibG9ja0NsYXNzIiwiY2xhc3NMaXN0Iiwib25jbGlja1RpdGxlIiwib3BlbkFjdGl2aXR5Iiwib25seVZpc2libGVUZWFjaGVycyIsImVsQ2lyY2xlT3V0ZXIiLCJlbENpcmNsZUlubmVyIiwiaXNIaWRkZW4iLCJzaG93RWxlbSIsImNoaWxkRWxlbWVudENvdW50IiwiY2xvbmVOb2RlIiwiZmFrZVBhZGRpbmciLCJsYXlvdXREYXRhIiwiYXV4QWN0aXZpdGllcyIsInVuaXRzRGF0YSIsInVuaXQiLCJpVW5pdCIsImFjdGl2aXR5IiwidGFnT3JpZ2luIiwidGFncyIsInRhZyIsInB1c2giLCJ0aXRsZVdyYXBwZXIiLCJzdWJ0aXRsZSIsImV4dHJhV3JhcHBlciIsImV4dHJhTGlzdCIsImEiLCJpIiwiYW5jaG9yIiwiaHJlZiIsInNsaWRlcldyYXBwZXIiLCJzbGlkZXJDb250cm9sTGVmdCIsInNsaWRlckNvbnRyb2xSaWdodCIsInNsaWRlckNvbnRyb2xMZWZ0QXJyb3ciLCJzbGlkZXJDb250cm9sUmlnaHRBcnJvdyIsImFycm93TGVmdCIsImFycm93UmlnaHQiLCJzbGlkZUxlZnQiLCJzbGlkZVJpZ2h0Iiwic2xpZGVyVHJhY2siLCJzbGlkZXJDYXJvdXNlbCIsImluZGV4T2YiLCJzbGlkZXJJdGVtIiwiYW5jaG9yV3JhcHBlciIsInNldEF0dHJpYnV0ZXMiLCJpdGVtVGl0bGUiLCJpdGVtSW1nIiwiaXRlbURlc2MiLCJpdGVtTnVtYmVyIiwiZHJhZ1N0YXJ0SGFuZGxlciIsInRndCIsIml0ZW1zIiwib2Zmc2V0TWFwIiwib2Zmc2V0TGVmdCIsInN0YXJ0WCIsInRhcmdldFRvdWNoZXMiLCJzY3JlZW5YIiwiZHJhZ0hhbmRsZXIiLCJ0cmFuc2Zvcm1WYWwiLCJzdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjdXJyZW50WCIsImNhbGNYIiwiZHJhZ0VuZEhhbmRsZXIiLCJNYXRoIiwiYWJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFycm93IiwiY2xhc3NOYW1lIiwibGVmdENsYXNzZXMiLCJyaWdodENsYXNzZXMiLCJzbGlkZVByZXZTZWN0aW9uIiwic2xpZGVOZXh0U2VjdGlvbiIsInNsaWRlIiwiZGlyZWN0aW9uIiwidHJhY2siLCJjYXJvdXNlbCIsInRhcmdldEVsZW1lbnQiLCJvZmZzZXQiLCJ0cmFuc2Zvcm0iLCJjdXJPZmZzZXQiLCJvZmZzZXRXaWR0aCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJySW5kZXgiLCJyRWwiLCJuZXh0U2libGluZyIsInNsaWRlU2VjdGlvbiIsIm5hdnMiLCJzaG93TmF2aWdhdG9ycyIsIm5hdiIsImRpc3BsYXkiLCJjaGVja0Rpc3BsYXkiLCJ2aXNpYmxlIiwidmlzaWJpbGl0eSIsImRpc3BsYXllZCIsInVwZGF0ZUJyZWFkY3VtYnMiLCJpbm5lclRleHQiLCJsZXZlbCIsImZvcm1hdHRlZFRleHQiLCJyZW1vdmVCcmVhZGN1bWIiLCJ1bmRlZmluZWQiLCJwb3AiLCJzZWN0aW9uSWQiLCJyZXN0Iiwib3BlblVybCIsIm9wZW5CbGFuayIsImdvVG9BY3Rpdml0eSIsIm5hdmJhciIsInRvcCIsIm9mZnNldEhlaWdodCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0RWxlbWVudEhlaWdodCIsInNldEVsZW1lbnRPZmZzZXRYIiwic3RySGVpZ2h0Iiwic3RyVG9wIiwiYXR0cnMiLCJPYmplY3QiLCJrZXkiLCJoZWFkZXIiLCJBcnJheSIsImNscyIsImFkZCIsInJlbW92ZSIsImVsZW0iLCJwcm9wIiwidmFsIiwiR2VuZXJpY1N0eWxlIiwidGhlbWUiLCJzdHlsZXMiLCJiYXNpYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicHJvdG90eXBlIiwiYm9keUNsYXNzTmFtZSIsImV4dHJhUGx1Z2lucyIsImNrRWRpdG9yU3R5bGVzIiwiY2FsbCIsImxheW91dCIsInJlbW92ZUZpbmFsU2xpZGUiLCJvdmVycmlkZXMiLCJfIiwiZXh0ZW5kIiwiaXNBZGFwdGF0aXZlIiwic2hvd0Jvb2tJbmRleEluQ2xhc3MiLCJ0IiwidGhpc1N0eWxlIiwiY3VycmVudFN0eWxlIiwicHJvY2Vzc0hhc2giLCJjdXJzbyIsInRlbWEiLCJhY3RpdmlkYWQiLCJmaW5kIiwic3VidW5pdCIsInJlc291cmNlIiwiaWR0ZW1hIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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TCxHQUFjLENBQWYsQ0FBbkIsR0FBdUMsY0FBOUM7QUFDQSxLQUZELE1BRU87QUFDTi9PLFVBQUksR0FBRyxXQUFXUSxRQUFRLENBQUNpTyxJQUFJLENBQUNNLE1BQUwsR0FBYyxDQUFmLENBQW5CLEdBQXVDLGNBQTlDO0FBQ0E7O0FBRUQsV0FBTy9PLElBQVA7QUFDQTtBQXJEaUIsQ0FBbkI7QUF1RGUrTix3RUFBZixFOzs7Ozs7Ozs7OztBQzNEQTtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLypcbiogICBBcnJheSBjb24gbGEgZGVmaW5pY2nDs24gZGUgbG9zIGVzdGlsb3MgcGFyYSBlbCBlZGl0b3IgZGUgQ0tFZGl0b3JcbiovXG5cbmNvbnN0IGNrZVN0eWxlcyA9IFtcblx0eyBuYW1lOiAnQ2FqYSAxJywgdHlwZTogJ3dpZGdldCcsIHdpZGdldDogJ2JsaW5rX2JveCcsIGF0dHJpYnV0ZXM6IHsgJ2NsYXNzJzogJ2JveC0xJyB9IH0sXG5cdHsgbmFtZTogJ0NhamEgMicsIHR5cGU6ICd3aWRnZXQnLCB3aWRnZXQ6ICdibGlua19ib3gnLCBhdHRyaWJ1dGVzOiB7ICdjbGFzcyc6ICdib3gtMicgfSB9LFxuXHR7IG5hbWU6ICfDiW5mYXNpcycsIGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyAnY2xhc3MnOiAnYmNrLWVuZmFzaXMnIH19XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBja2VTdHlsZXM7XG4iLCJjbGFzcyBMYXlvdXQge1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQpIHtcblx0XHQvLyBJZHNcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudCA/IHBhcmVudCA6IGRvY3VtZW50LmJvZHk7XG5cdFx0dGhpcy5jb3Vyc2VXcmFwcGVySWQgPSAnbGF5b3V0LWNvbnRhaW5lcic7XG5cdFx0dGhpcy5tYWluU2NyZWVuSWQgPSAnbWFpbi1zY3JlZW4nO1xuXHRcdHRoaXMuc2VjdGlvblNjcmVlblByZWZpeCA9ICdzZWN0aW9uLXNjcmVlbic7XG5cblx0XHR0aGlzLmNvdXJzZUhlYWRlcklkID0gJ2NvdXJzZS1oZWFkZXInO1xuXHRcdHRoaXMuY291cnNlQ29udGVudElkID0gJ2NvdXJzZS1jb250ZW50JztcblxuXHRcdC8vIERhdGFcblx0XHR0aGlzLmNvdXJzZUlkID0gd2luZG93LmlkY3Vyc287XG5cdFx0dGhpcy5jb3Vyc2VEYXRhID0gYmxpbmsuZ2V0Q291cnNlKHRoaXMuY291cnNlSWQsIHRydWUsIHRydWUpLnJlc3BvbnNlSlNPTjtcblx0XHR0aGlzLmF1eFRhZyA9ICd0YWInO1xuXHRcdHRoaXMudG91Y2hFbmFibGVkID0gKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IChuYXZpZ2F0b3IuTWF4VG91Y2hQb2ludHMgPiAwKSB8fCAobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAwKSk7XG5cdFx0dGhpcy5pc0FwcCA9IGJsaW5rLmlzQXBwO1xuXHRcdHRoaXMuZXZlbnRzTWFwID0ge1xuXHRcdFx0ZW5kOiB0aGlzLnRvdWNoRW5hYmxlZCA/ICd0b3VjaGVuZCcgOiAnZHJhZ2VuZCcsXG5cdFx0XHRtb3ZlOiB0aGlzLnRvdWNoRW5hYmxlZCA/ICd0b3VjaG1vdmUnIDogJ2RyYWcnLFxuXHRcdFx0c3RhcnQ6IHRoaXMudG91Y2hFbmFibGVkID8gJ3RvdWNoc3RhcnQnIDogJ2RyYWdzdGFydCdcblx0XHR9XG5cdFx0aWYgKHRleHR3ZWIpIHtcblx0XHRcdHRoaXMudGV4dHMgPSB7XG5cdFx0XHRcdGdvQmFjazogdGV4dHdlYignbGlicm9EaWdpdGFsX3ZvbHZlcicpLFxuXHRcdFx0XHRzdHVkZW50QXJlYTogdGV4dHdlYignYWJwU3R1ZGVudEFyZWEnKSxcblx0XHRcdFx0dGVhY2hlckFyZWE6IHRleHR3ZWIoJ2FicFRlYWNoZXJBcmVhJyksXG5cdFx0XHRcdG5vUmVzb3VyY2VzOiB0ZXh0d2ViKCdhYnBOb1Jlc291cmNlcycpLFxuXHRcdFx0XHR1bml0Q29udGVudDogdGV4dHdlYignY291cnNlX3VuaXRfYWN0aXZpdGllcycpLFxuXHRcdFx0XHRyZXNvdXJjZXM6IHRleHR3ZWIoJ2NvdXJzZV9zdXBwbGVtZW50X2NvbnRlbnQnKSxcblx0XHRcdFx0cGFnczogdGV4dHdlYignY291cnNlX2FicmV2X3BhZycpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEJyZWFkY3VtYnNcblx0XHRpZiAoIXRoaXMuaXNBcHApIHtcblx0XHRcdHRoaXMuYnJlYWRjdW1ic0NvbnRhaW5lcjtcblx0XHRcdHRoaXMuYnJlYWRjdW1icyA9IFt0aGlzLmNvdXJzZURhdGEudGl0bGVdO1xuXHRcdH1cblxuXHRcdC8vIFN0b3JhZ2Vcblx0XHR0aGlzLnNlY3Rpb25EYXRhID0ge1xuXHRcdFx0c2VjdGlvbnM6IFtdLFxuXHRcdFx0bmF2aWdhdG9yczoge1xuXHRcdFx0XHRsZWZ0OiBudWxsLFxuXHRcdFx0XHRyaWdodDogbnVsbFxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNsaWRlciA9IHt9O1xuXHRcdHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID0gMDtcblxuXHRcdC8vIEJpbmRpbmdzXG5cdFx0dGhpcy5fcmVzaXplQ29udGFpbmVyID0gdGhpcy5yZXNpemVDb250YWluZXIuYmluZCh0aGlzKTtcblxuXHRcdC8vIEVsZW1lbnRzXG5cdFx0bGV0IGxheW91dENvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0bGF5b3V0Q29udGFpbmVyLmlkID0gdGhpcy5jb3Vyc2VXcmFwcGVySWQ7XG5cblx0XHQvLyBBw7FhZGlkbyBwYXJhIGZ1bmNpb25hciBkZXNkZSBHaXRodWIuXG5cdFx0aWYgKCF0aGlzLmNvdXJzZURhdGEucG9ydGFkYSkge1xuXHRcdFx0dGhpcy5jb3Vyc2VEYXRhLnBvcnRhZGEgPSBuZXcgVVJMKHRoaXMuY291cnNlRGF0YS51cmwpLnNlYXJjaFBhcmFtcy5nZXQoJ2lkY2xhc2UnKTtcblx0XHR9XG5cblx0XHR0aGlzLmxheW91dENvbnRhaW5lciA9IGxheW91dENvbnRhaW5lcjtcblx0XHR0aGlzLnByZXBhcmVMYXlvdXREYXRhKCk7XG5cdH1cblx0aW5pdCgpIHtcblx0XHRsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXdyYXBwZXInKSxcblx0XHRcdHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKSxcblx0XHRcdHNsaWRlckNvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLWNvbnRyb2wnKSxcblx0XHRcdG5hdmJhckJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItYm90dG9tJyk7XG5cblx0XHR0aGlzLmxheW91dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicgKyB0aGlzLmNvdXJzZURhdGEuaW1hZ2UgKyAnXCIpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOycpO1xuXHRcdHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLmxheW91dENvbnRhaW5lciwgdGhpcy5wYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXG5cdFx0Ly8gMS4gQ2hvb3NlIGxheW91dCBvcHRpb24uXG5cdFx0aWYgKHdpbmRvdy5pZGNsYXNlICYmIHdpbmRvdy5pZGNsYXNlICE9IHRoaXMuY291cnNlRGF0YS5wb3J0YWRhKSB7XG5cblx0XHRcdC8vIDEuMS4gQmxpbmsgV2F5LiBGb3IgYWN0aXZpdGllcy5cblxuXHRcdFx0Ly8gMS4xLjEuIEdvYmFja1xuXHRcdFx0bGV0IGdvQmFja1dyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdnby1iYWNrJyksXG5cdFx0XHRcdGdvQmFja0J1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnQlVUVE9OJywgWydidG4nLCAnYnRuLWdvLWJhY2snXSlcblxuXHRcdFx0Z29CYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVkaXJlY2Npb25hcih0aGlzLmNvdXJzZURhdGEudXJsKSk7XG5cdFx0XHRnb0JhY2tCdXR0b24uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJywgJycsIHRoaXMudGV4dHMuZ29CYWNrKSk7XG5cdFx0XHRnb0JhY2tXcmFwcGVyLmFwcGVuZChnb0JhY2tCdXR0b24pO1xuXG5cdFx0XHRzbGlkZXJDb250cm9sLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVN0eWxlKHNsaWRlci5xdWVyeVNlbGVjdG9yKCdbaWQqPXN3aXBldmlldy1tYXN0ZXJwYWdlLV0gLmpzLXNsaWRlci1pdGVtJyksICdvdmVyZmxvdycsICdoaWRkZW4nKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0c2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBldmlldy1mbGlwJywgKGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVN0eWxlKHNsaWRlci5xdWVyeVNlbGVjdG9yKCdbaWQqPXN3aXBldmlldy1tYXN0ZXJwYWdlLV0uc3dpcGV2aWV3LWFjdGl2ZSAuanMtc2xpZGVyLWl0ZW0nKSwgJ292ZXJmbG93JywgJ2F1dG8nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuY2hhbmdlU3R5bGUoY29udGVudCwgJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKFwiJyArIHRoaXMuY291cnNlRGF0YS5pbWFnZSArICdcIiknKTtcblx0XHRcdHRoaXMuY2hhbmdlU3R5bGUoY29udGVudCwgJ2JhY2tncm91bmQtc2l6ZScsICdjb3ZlcicpO1xuXHRcdFx0Y29udGVudC5pbnNlcnRCZWZvcmUoZ29CYWNrV3JhcHBlciwgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gMS4yLiBTdHlsZSBXYXkuXG5cdFx0XHRsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcblxuXHRcdFx0Ly8gMS4yLjEgTWFuYWdlIG9sZCBET00gZWxlbWVudHMuXG5cdFx0XHR0aGlzLmhpZGVFbGVtKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5oaWRlRWxlbShuYXZiYXJCb3R0b20pO1xuXHRcdFx0c2xpZGVyQ29udHJvbC5mb3JFYWNoKChlbCkgPT4gdGhpcy5oaWRlRWxlbShlbCkpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaXNBcHApIHtcblx0XHRcdFx0dGhpcy5icmVhZGN1bWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci5saWJybyAubGlicm8tbGVmdCBzcGFuLnRpdGxlJyk7XG5cdFx0XHRcdHRoaXMuaGlkZUVsZW0odGhpcy5icmVhZGN1bWJzQ29udGFpbmVyKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gMS4yLjIgQ3JlYXRlIHNlY3Rpb24gYXJyb3dzLlxuXHRcdFx0dGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzID0gdGhpcy5nZW5lcmF0ZU5hdmlnYXRvcnMoKTtcblx0XHRcdHRoaXMubGF5b3V0Q29udGFpbmVyLmFwcGVuZCh0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnNbJ2xlZnQnXSwgdGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzWydyaWdodCddKTtcblx0XHRcdHRoaXMuaGlkZU5hdmlnYXRvcnMoKTtcblxuXHRcdFx0Ly8gMS4yLjMuIFByaW50IHRhcmdldCBzY3JlZW4uXG5cdFx0XHRpZiAoaGFzaC5tYXRjaCgvdW5pdF9cXGR7MSwyfV8vZykgIT0gbnVsbCkge1xuXHRcdFx0XHRsZXQgaW5kZXggPSBwYXJzZUludChoYXNoLm1hdGNoKC9cXGR7MSwyfS9nKVswXSksXG5cdFx0XHRcdFx0dGFiID0gaGFzaC5zdWJzdHJpbmcoaGFzaC5sYXN0SW5kZXhPZignXycpKzEpO1xuXG5cdFx0XHRcdHRoaXMuaW5pdFNlY3Rpb24oaW5kZXgsIHRhYik7XG5cdFx0XHR9IGVsc2UgaWYgKGhhc2gubWF0Y2goL2hvbWUvZykgIT0gbnVsbCl7XG5cdFx0XHRcdHRoaXMuaW5pdEhvbWUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaW5pdEhvbWUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5yZXNpemVDb250YWluZXIoKTtcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplQ29udGFpbmVyKTtcblx0fVxuXHRpbml0SG9tZSgpIHtcblx0XHR0aGlzLmhpZGVOYXZpZ2F0b3JzKCk7XG5cdFx0dGhpcy5yZXNldEJyZWFkY3VtYnMoKTtcblxuXHRcdC8vIDEuIE1haW4gc2NyZWVuIGNyZWF0aW9uLlxuXHRcdHRoaXMubWFpblNjcmVlbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ21haW4tc2NyZWVuJyk7XG5cdFx0dGhpcy5tYWluU2NyZWVuLmlkID0gdGhpcy5tYWluU2NyZWVuSWQ7XG5cblx0XHR0aGlzLmxheW91dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1haW5TY3JlZW4pO1xuXG5cdFx0Ly8gMi4gQ3JlYXRlIEhlYWRlci5cblx0XHRsZXQgY291cnNlSGVhZGVyID0gdGhpcy5nZW5lcmF0ZUhlYWRlcigpO1xuXG5cdFx0Ly8gMy4gQ3JlYXRlIENvdXJzZSBjb250ZW50LlxuXHRcdGxldCBjb3Vyc2VDb250ZW50ID0gdGhpcy5nZW5lcmF0ZUNvbnRlbnQoKTtcblxuXHRcdHRoaXMubWFpblNjcmVlbi5hcHBlbmQoY291cnNlSGVhZGVyLCBjb3Vyc2VDb250ZW50KTtcblx0fVxuXHRpbml0U2VjdGlvbihpbmRleCwgdGFiKSB7XG5cdFx0aWYgKCFpbmRleCAmJiB0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRhbGVydCgnTm8gaW5kZXggcHJvdmlkZWQnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gMC4gSGlkZSBtYWluIHNjcmVlbiAoaWYgZXhpc3RzKS5cblx0XHR0aGlzLm1haW5TY3JlZW4gJiYgdHlwZW9mIHRoaXMubWFpblNjcmVlbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmhpZGVNYWluU2NyZWVuKCk7XG5cblx0XHQvLyAwLjEuIE5hdmlnYXRpb24gYXJyb3dzLlxuXHRcdHRoaXMudG9nZ2xlTmF2aWdhdG9ycyhpbmRleCk7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFscmVhZHkgYSBzZWN0aW9uIHNjcmVlbiBmb3IgdGhpcyBpbmRleCwgd2UganVzdCBzaG93IGl0LlxuXHRcdGlmICh0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSAmJiB0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dGhpcy5zaG93U2VjdGlvbihpbmRleCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRhYkNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG5cdFx0XHRsZXQgY3VycmVudFNlY3Rpb24gPSB0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW3RoaXMuY3VycmVudFNlY3Rpb25dLFxuXHRcdFx0XHR0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQsXG5cdFx0XHRcdHRhcmdldFRhYiA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG5cblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3NlcyhjdXJyZW50U2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcudGFiLmFjdGl2ZScpLCAnYWN0aXZlJyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzZXMoY3VycmVudFNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmNvbnRlbnQuYWN0aXZlJyksICdhY3RpdmUnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3Nlcyh0YXJnZXQsICdhY3RpdmUnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3NlcyhjdXJyZW50U2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuJyArIHRhcmdldFRhYiArICctY29udGVudCcpLCAnYWN0aXZlJyk7XG5cdFx0fVxuXHRcdGNvbnN0IGdvQmFja0NsaWNrSGFuZGxlciA9IChlKSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMubWFpblNjcmVlbiB8fCB0eXBlb2YgdGhpcy5tYWluU2NyZWVuID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLmluaXRIb21lKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNob3dNYWluU2NyZWVuKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhpZGVTZWN0aW9uKGluZGV4KTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VwYXJhdG9yID0gKHRleHQpID0+IHtcblx0XHRcdGxldCB3cmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCBbJ3NlcGFyYXRvciddKTtcblx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuXG5cdFx0XHRyZXR1cm4gd3JhcHBlcjtcblx0XHR9XG5cblx0XHRsZXQgZGF0YSA9IHRoaXMuY291cnNlRGF0YS51bml0c1tpbmRleF0sXG5cdFx0XHRzZWN0aW9uU2NyZWVuID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2VjdGlvbi1zY3JlZW4nKTtcblx0XHRzZWN0aW9uU2NyZWVuLmlkID0gdGhpcy5zZWN0aW9uU2NyZWVuUHJlZml4ICsgJy0nICsgaW5kZXg7XG5cblx0XHQvLyAwLjIuIENoYW5nZSBicmVhZGN1bWJzLlxuXHRcdHRoaXMuYWRkQnJlYWRjdW1iKGRhdGEudGl0bGUpO1xuXG5cdFx0Ly8gMS4gR29iYWNrXG5cdFx0bGV0IGdvQmFja1dyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdnby1iYWNrJyksXG5cdFx0XHRnb0JhY2tCdXR0b24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicsIFsnYnRuJywgJ2J0bi1nby1iYWNrJ10pO1xuXG5cdFx0Z29CYWNrQnV0dG9uLm9uY2xpY2sgPSBnb0JhY2tDbGlja0hhbmRsZXI7XG5cdFx0Z29CYWNrQnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsICcnLCB0aGlzLnRleHRzLmdvQmFjaykpO1xuXHRcdGdvQmFja1dyYXBwZXIuYXBwZW5kKGdvQmFja0J1dHRvbik7XG5cblx0XHQvLyAyLiBTZWN0aW9uLlxuXHRcdGxldCBzZWN0aW9uV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24nKTtcblxuXHRcdC8vIDIuMS4gU2VjdGlvbiBEYXRhXG5cdFx0bGV0IHNlY3Rpb25EYXRhID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2VjdGlvbi1kYXRhJyk7XG5cblx0XHQvLyAyLjEuMS4gU2VjdGlvbiB0aXRsZVxuXHRcdGxldCBzZWN0aW9uVGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzZWN0aW9uLXRpdGxlJyk7XG5cdFx0c2VjdGlvblRpdGxlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSGVhZGVyKDEsICcnLCBkYXRhLnRpdGxlKSk7XG5cblx0XHQvLyAyLjEuMi4gU2VjdGlvbiBkZXNjXG5cdFx0bGV0IGRlc2NXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnZGVzYy13cmFwcGVyJyksXG5cdFx0XHRzZWN0aW9uRGVzYyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tZGVzYycpLFxuXHRcdFx0c2VjdGlvbk51bWJlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tbnVtYmVyJyk7XG5cblx0XHRkZXNjV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicgKyBkYXRhLmltYWdlICsgJ1wiKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsnKTtcblx0XHRzZWN0aW9uTnVtYmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsICcnLCBpbmRleC50b1N0cmluZygpLmxlbmd0aCA9PSAxID8gJzAnICsgaW5kZXggOiBpbmRleCkpO1xuXG5cdFx0c2VjdGlvbkRlc2MuYXBwZW5kKHRoaXMuY3JlYXRlSGVhZGVyKDIsICcnLCBkYXRhLmRlc2NyaXB0aW9uKSwgc2VjdGlvbk51bWJlcik7XG5cblx0XHRkZXNjV3JhcHBlci5hcHBlbmQoc2VjdGlvbkRlc2MpO1xuXG5cdFx0c2VjdGlvbkRhdGEuYXBwZW5kKHNlY3Rpb25UaXRsZSwgZGVzY1dyYXBwZXIpO1xuXG5cdFx0Ly8gMi4yLiBTZWN0aW9uIENvbnRlbnQuXG5cdFx0bGV0IHNlY3Rpb25Db250ZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2VjdGlvbi1jb250ZW50Jyk7XG5cblx0XHQvLyAyLjIuMSBUYWJzIHdyYXBlcHIuXG5cdFx0bGV0IHRhYnNXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAndGFicycpLFxuXHRcdFx0c3R1ZGVudFRhYiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3RhYicpLFxuXHRcdFx0dGVhY2hlclRhYiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3RhYicpO1xuXG5cdFx0c3R1ZGVudFRhYi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUhlYWRlcigyLCAnJywgdGhpcy50ZXh0cy5zdHVkZW50QXJlYSkpO1xuXHRcdHRlYWNoZXJUYWIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVIZWFkZXIoMiwgJycsIHRoaXMudGV4dHMudGVhY2hlckFyZWEpKTtcblxuXHRcdHN0dWRlbnRUYWIuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICdzdHVkZW50Jyk7XG5cdFx0dGVhY2hlclRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJ3RlYWNoZXInKTtcblxuXHRcdHN0dWRlbnRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJDbGlja0hhbmRsZXIpO1xuXHRcdHRlYWNoZXJUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJDbGlja0hhbmRsZXIpO1xuXG5cdFx0dGFic1dyYXBwZXIuYXBwZW5kKHN0dWRlbnRUYWIsIHRlYWNoZXJUYWIpO1xuXG5cdFx0Ly8gMi4yLjIgVGFicyBjb250ZW50LlxuXHRcdGxldCB0YWJzQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3RhYnMtY29udGVudCcpLFxuXHRcdFx0c3R1ZGVudENvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsnY29udGVudCcsICdzdHVkZW50LWNvbnRlbnQnXSksXG5cdFx0XHR0ZWFjaGVyQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgWydjb250ZW50JywgJ3RlYWNoZXItY29udGVudCddKSxcblx0XHRcdHN0dWRlbnRXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAndW5pdC13cmFwcGVyJyksXG5cdFx0XHR0ZWFjaGVyV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3VuaXQtd3JhcHBlcicpLFxuXHRcdFx0c3R1ZGVudFVuaXRDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsndW5pdC1jb250ZW50J10pLFxuXHRcdFx0c3R1ZGVudFJlc291cmNlQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCBbJ3Jlc291cmNlcy1jb250ZW50J10pLFxuXHRcdFx0dGVhY2hlclVuaXRDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsndW5pdC1jb250ZW50J10pLFxuXHRcdFx0dGVhY2hlclJlc291cmNlQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCBbJ3Jlc291cmNlcy1jb250ZW50J10pLFxuXHRcdFx0bm9SZXNvdXJjZXNXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdIMicsICduby1yZXNvdXJjZXMnLCB0aGlzLnRleHRzLm5vUmVzb3VyY2VzKSxcblx0XHRcdGNvbWJpbmVkID0gZGF0YS5zdWJ1bml0cy5jb25jYXQoZGF0YS5yZXNvdXJjZXMpO1xuXG5cdFx0dGhpcy5oaWRlRWxlbShzdHVkZW50VW5pdENvbnRhaW5lcikuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKHRoaXMudGV4dHMudW5pdENvbnRlbnQpKTtcblx0XHR0aGlzLmhpZGVFbGVtKHN0dWRlbnRSZXNvdXJjZUNvbnRhaW5lcikuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKHRoaXMudGV4dHMucmVzb3VyY2VzKSk7XG5cdFx0dGhpcy5oaWRlRWxlbSh0ZWFjaGVyVW5pdENvbnRhaW5lcikuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKHRoaXMudGV4dHMudW5pdENvbnRlbnQpKTtcblx0XHR0aGlzLmhpZGVFbGVtKHRlYWNoZXJSZXNvdXJjZUNvbnRhaW5lcikuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKHRoaXMudGV4dHMucmVzb3VyY2VzKSk7XG5cblx0XHRzd2l0Y2ggKHRhYikge1xuXHRcdFx0Y2FzZSAndGVhY2hlcmFyZWEnOlxuXHRcdFx0XHR0aGlzLmFkZENsYXNzZXModGVhY2hlclRhYiwgJ2FjdGl2ZScpO1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzZXModGVhY2hlckNvbnRlbnQsICdhY3RpdmUnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aGlzLmFkZENsYXNzZXMoc3R1ZGVudFRhYiwgJ2FjdGl2ZScpO1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzZXMoc3R1ZGVudENvbnRlbnQsICdhY3RpdmUnKTtcblx0XHR9XG5cblx0XHRjb21iaW5lZC5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0bGV0IGlzUmVzb3VyY2UgPSBkYXRhLnJlc291cmNlcy5jb250YWlucyhlbCksXG5cdFx0XHRcdGVsV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2NvbnRlbnQtaXRlbScpLFxuXHRcdFx0XHRlbEltZyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgWydjb250ZW50LWltZycsICd0eXBlLScgKyBlbC50eXBlSW50LCBlbC50eXBlXSksXG5cdFx0XHRcdGVsVGl0bGVXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnY29udGVudC10aXRsZScpLFxuXHRcdFx0XHRlbFRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJywgbnVsbCwgZWwudGl0bGUpLFxuXHRcdFx0XHR0YXJnZXRXcmFwcGVyO1xuXG5cdFx0XHQvLyAyLjIuMi4xLiBUaXRsZSBjcmVhdGlvbi5cblx0XHRcdGVsVGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKGVsVGl0bGUpO1xuXG5cdFx0XHRlbFdyYXBwZXIuYXBwZW5kKGVsSW1nLCBlbFRpdGxlV3JhcHBlcik7XG5cblx0XHRcdC8vIDIuMi4yLjIuIEJ1dHRvbiBjcmVhdGlvblxuXHRcdFx0aWYgKCFpc1Jlc291cmNlKSB7XG5cdFx0XHRcdGxldCBlbEJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdjb250ZW50LWJ1dHRvbnMnKSxcblx0XHRcdFx0XHRlbExvY2sgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCAnY29udGVudC1sb2NrJyksXG5cdFx0XHRcdFx0ZWxQYWdlQ291bnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCAnY29udGVudC1wYWdlLWNvdW50JyksXG5cdFx0XHRcdFx0cGFnZUNvdW50VHh0ID0gZWwucGFncyA/IGVsLnBhZ3MgKyAnICcgKyB0aGlzLnRleHRzLnBhZ3MucmVwbGFjZSgnLicsIGVsLnBhZ3MgPiAxID8gJ3MuJyA6ICcuJykgOiAnJztcblxuXHRcdFx0XHRlbExvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0bGV0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldCxcblx0XHRcdFx0XHRcdGxvY2tDbGFzcyA9ICdsb2NrZWQnO1xuXHRcdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMobG9ja0NsYXNzKSA/IHRoaXMucmVtb3ZlQ2xhc3Nlcyh0YXJnZXQsIGxvY2tDbGFzcykgOiB0aGlzLmFkZENsYXNzZXModGFyZ2V0LCBsb2NrQ2xhc3MpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRlbFBhZ2VDb3VudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYWdlQ291bnRUeHQpKTtcblxuXHRcdFx0XHRlbEJ1dHRvbnMuYXBwZW5kKGVsTG9jaywgZWxQYWdlQ291bnQpO1xuXG5cdFx0XHRcdGVsV3JhcHBlci5hcHBlbmRDaGlsZChlbEJ1dHRvbnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbC5vbmNsaWNrVGl0bGUgP1xuXHRcdFx0XHRlbFdyYXBwZXIuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgZWwub25jbGlja1RpdGxlKSA6XG5cdFx0XHRcdGVsV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub3BlbkFjdGl2aXR5KGVsLnVybCwgZGF0YS5pZCwgZWwudHlwZSkpO1xuXG5cdFx0XHRpZiAoZWwub25seVZpc2libGVUZWFjaGVycykge1xuXHRcdFx0XHRsZXQgZWxDaXJjbGVPdXRlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2NpcmNsZS1vdXRlcicpLFxuXHRcdFx0XHRcdGVsQ2lyY2xlSW5uZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdjaXJjbGUtaW5uZXInKTtcblxuXHRcdFx0XHRlbFdyYXBwZXIuaW5zZXJ0QmVmb3JlKGVsQ2lyY2xlT3V0ZXIsIGVsSW1nKTtcblx0XHRcdFx0ZWxXcmFwcGVyLmluc2VydEJlZm9yZShlbENpcmNsZUlubmVyLCBlbEltZyk7XG5cblx0XHRcdFx0dGFyZ2V0V3JhcHBlciA9IGlzUmVzb3VyY2UgPyB0ZWFjaGVyUmVzb3VyY2VDb250YWluZXIgOiB0ZWFjaGVyVW5pdENvbnRhaW5lcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIDIuMi4yLjEuIEltYWdlIGNyZWF0aW9uLlxuXHRcdFx0XHR0aGlzLmNoYW5nZVN0eWxlKGVsSW1nLCAnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArIGVsLmltYWdlICsgJyknKTtcblxuXHRcdFx0XHR0YXJnZXRXcmFwcGVyID0gaXNSZXNvdXJjZSA/IHN0dWRlbnRSZXNvdXJjZUNvbnRhaW5lciA6IHN0dWRlbnRVbml0Q29udGFpbmVyO1xuXHRcdFx0fVxuXG5cdFx0XHR0YXJnZXRXcmFwcGVyLmFwcGVuZENoaWxkKGVsV3JhcHBlcik7XG5cdFx0XHR0aGlzLmlzSGlkZGVuKHRhcmdldFdyYXBwZXIsIHRydWUpICYmIHRoaXMuc2hvd0VsZW0odGFyZ2V0V3JhcHBlcik7XG5cdFx0fSk7XG5cblx0XHRpZiAodGVhY2hlclJlc291cmNlQ29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID09IDEgJiYgdGVhY2hlclVuaXRDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPT0gMSkge1xuXHRcdFx0dGVhY2hlcldyYXBwZXIuYXBwZW5kKG5vUmVzb3VyY2VzV3JhcHBlci5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZWFjaGVyV3JhcHBlci5hcHBlbmQodGVhY2hlclVuaXRDb250YWluZXIsIHRlYWNoZXJSZXNvdXJjZUNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0aWYgKHN0dWRlbnRSZXNvdXJjZUNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA9PSAxICYmIHN0dWRlbnRVbml0Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID09IDEpIHtcblx0XHRcdHN0dWRlbnRXcmFwcGVyLmFwcGVuZChub1Jlc291cmNlc1dyYXBwZXIuY2xvbmVOb2RlKHRydWUpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R1ZGVudFdyYXBwZXIuYXBwZW5kKHN0dWRlbnRVbml0Q29udGFpbmVyLCBzdHVkZW50UmVzb3VyY2VDb250YWluZXIpO1xuXHRcdH1cblxuXHRcdHN0dWRlbnRDb250ZW50LmFwcGVuZChzdHVkZW50V3JhcHBlcik7XG5cdFx0dGVhY2hlckNvbnRlbnQuYXBwZW5kKHRlYWNoZXJXcmFwcGVyKTtcblxuXHRcdHRhYnNDb250ZW50LmFwcGVuZChzdHVkZW50Q29udGVudCwgdGVhY2hlckNvbnRlbnQpO1xuXG5cdFx0c2VjdGlvbkNvbnRlbnQuYXBwZW5kKHRhYnNXcmFwcGVyLCB0YWJzQ29udGVudCk7XG5cblx0XHRzZWN0aW9uV3JhcHBlci5hcHBlbmQoc2VjdGlvbkRhdGEsIHNlY3Rpb25Db250ZW50KTtcblxuXHRcdC8vIDMuIEZha2UgcGFkZGluZy5cblx0XHRsZXQgZmFrZVBhZGRpbmcgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXG5cdFx0c2VjdGlvblNjcmVlbi5hcHBlbmQoZ29CYWNrV3JhcHBlciwgc2VjdGlvbldyYXBwZXIsIGZha2VQYWRkaW5nKTtcblxuXHRcdHRoaXMuY3VycmVudFNlY3Rpb24gPSBpbmRleDtcblx0XHR0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSA9IHNlY3Rpb25TY3JlZW47XG5cdFx0dGhpcy5sYXlvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblNjcmVlbik7XG5cdH1cblx0cHJlcGFyZUxheW91dERhdGEoKSB7XG5cdFx0bGV0IGxheW91dERhdGEgPSB7XG5cdFx0XHRhdXhBY3Rpdml0aWVzOiBbXSxcblx0XHRcdHVuaXRzRGF0YTogW11cblx0XHR9O1xuXHRcdGxldCBhdXhUYWcgPSB0aGlzLmF1eFRhZztcblxuXHRcdHRoaXMuY291cnNlRGF0YS51bml0cy5mb3JFYWNoKGZ1bmN0aW9uKHVuaXQsIGlVbml0KSB7XG5cdFx0XHR1bml0LnN1YnVuaXRzLmZvckVhY2goZnVuY3Rpb24oYWN0aXZpdHkpIHtcblx0XHRcdFx0bGV0IHRhZ09yaWdpbiA9IGFjdGl2aXR5LnRhZ3MgPyBhY3Rpdml0eS50YWdzIDogYWN0aXZpdHkudGFnO1xuXG5cdFx0XHRcdC8vIGlmICh0YWdPcmlnaW4gJiYgdGFnT3JpZ2luLmluZGV4T2YoYXV4VGFnKSAhPSAtMSkgeyAvLyBDw7NkaWdvIG9yaWdpbmFsOyBubyBmdW5jaW9uYSBkZXNkZSBHaXRodWJcblx0XHRcdFx0aWYgKGlVbml0ID09IDAgJiYgYWN0aXZpdHkuaWQgIT0gdGhpcy5jb3Vyc2VEYXRhLnBvcnRhZGEpIHtcblx0XHRcdFx0XHRsYXlvdXREYXRhWydhdXhBY3Rpdml0aWVzJ10ucHVzaChhY3Rpdml0eSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0dGhpcy5sYXlvdXREYXRhID0gbGF5b3V0RGF0YTtcblx0fVxuXHRnZW5lcmF0ZUhlYWRlcigpIHtcblx0XHRsZXQgY291cnNlSGVhZGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnKTtcblx0XHRjb3Vyc2VIZWFkZXIuaWQgPSB0aGlzLmNvdXJzZUhlYWRlcklkO1xuXG5cdFx0Ly8gMS4xLiBDcmVhdGUgdGl0bGVcblx0XHRsZXQgdGl0bGVXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnY291cnNlLXRpdGxlJyk7XG5cdFx0bGV0IHRpdGxlID0gdGhpcy5jcmVhdGVIZWFkZXIoMSwgJycsIHRoaXMuY291cnNlRGF0YS50aXRsZSk7XG5cdFx0bGV0IHN1YnRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJywgJycsIHRoaXMuY291cnNlRGF0YS5kZXNjcmlwdGlvbik7XG5cblx0XHR0aXRsZVdyYXBwZXIuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSk7XG5cblx0XHQvLyAxLjIuIENyZWF0ZSBleHRyYSB3cmFwcGVyLlxuXG5cdFx0bGV0IGV4dHJhV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2NvdXJzZS1leHRyYScpO1xuXHRcdGxldCBleHRyYUxpc3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1VMJyk7XG5cblx0XHR0aGlzLmxheW91dERhdGEuYXV4QWN0aXZpdGllcy5mb3JFYWNoKGZ1bmN0aW9uKGEsIGkpIHtcblx0XHRcdGxldCB3cmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdMSScpO1xuXHRcdFx0bGV0IGFuY2hvciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnQScpO1xuXHRcdFx0bGV0IHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJywgJycsIGEudGl0bGUpO1xuXG5cdFx0XHRhbmNob3IuaHJlZiA9ICdqYXZhc2NyaXB0OnZvaWQoMCknO1xuXHRcdFx0YW5jaG9yLnNldEF0dHJpYnV0ZSgnb25jbGljaycsIGEub25jbGlja1RpdGxlKTtcblx0XHRcdGFuY2hvci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblx0XHRcdHdyYXBwZXIuaWQgPSAndGFicy1pdGVtJyArIGk7XG5cblx0XHRcdGV4dHJhTGlzdC5hcHBlbmRDaGlsZCh3cmFwcGVyKS5hcHBlbmRDaGlsZChhbmNob3IpO1xuXHRcdH0sIHRoaXMpO1xuXHRcdGV4dHJhV3JhcHBlci5hcHBlbmRDaGlsZChleHRyYUxpc3QpO1xuXG5cdFx0Ly8gMS4zIEFwcGVuZCBib3RoIGVsZW1lbnRzLlxuXHRcdGNvdXJzZUhlYWRlci5hcHBlbmQodGl0bGVXcmFwcGVyLCBleHRyYVdyYXBwZXIpO1xuXG5cdFx0cmV0dXJuIGNvdXJzZUhlYWRlcjtcblx0fVxuXHRnZW5lcmF0ZUNvbnRlbnQoKSB7XG5cdFx0bGV0IGNvdXJzZUNvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdjb3Vyc2UtY29udGVudCcpO1xuXHRcdGNvdXJzZUNvbnRlbnQuaWQgPSB0aGlzLmNvdXJzZUNvbnRlbnRJZDtcblxuXHRcdGxldCBhdXhUYWcgPSB0aGlzLmF1eFRhZztcblxuXHRcdC8vIDIuMS4gV3JhcHBlclxuXHRcdGxldCBzbGlkZXJXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2xpZGVyLXdyYXBwZXInKTtcblxuXHRcdC8vIDIuMi4gQ29udHJvbHNcblx0XHRsZXQgc2xpZGVyQ29udHJvbExlZnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsnc2xpZGVyLW5hdmNvbnRyb2wnLCAnc2xpZGVyLW5hdmNvbnRyb2wtbGVmdCddKTtcblx0XHRsZXQgc2xpZGVyQ29udHJvbFJpZ2h0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCBbJ3NsaWRlci1uYXZjb250cm9sJywgJ3NsaWRlci1uYXZjb250cm9sLXJpZ2h0J10pO1xuXHRcdGxldCBzbGlkZXJDb250cm9sTGVmdEFycm93ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJyk7XG5cdFx0bGV0IHNsaWRlckNvbnRyb2xSaWdodEFycm93ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJyk7XG5cdFx0bGV0IGFycm93TGVmdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnSScsIFsnZmEnLCAnZmEtYW5nbGUtbGVmdCddKTtcblx0XHRsZXQgYXJyb3dSaWdodCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnSScsIFsnZmEnLCAnZmEtYW5nbGUtcmlnaHQnXSk7XG5cblx0XHRhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNsaWRlTGVmdCgpKTtcblx0XHRhcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zbGlkZVJpZ2h0KCkpO1xuXG5cdFx0Ly8gV2UgaGlkZSB0aGUgbGVmdCBjb250cm9sIGFycm93IGF0IHN0YXJ0dXAuXG5cdFx0dGhpcy5oaWRlRWxlbShzbGlkZXJDb250cm9sTGVmdCwgdHJ1ZSkuYXBwZW5kQ2hpbGQoc2xpZGVyQ29udHJvbExlZnRBcnJvdykuYXBwZW5kQ2hpbGQoYXJyb3dMZWZ0KTtcblx0XHRzbGlkZXJDb250cm9sUmlnaHQuYXBwZW5kQ2hpbGQoc2xpZGVyQ29udHJvbFJpZ2h0QXJyb3cpLmFwcGVuZENoaWxkKGFycm93UmlnaHQpO1xuXG5cdFx0Ly8gMi4zLiBUcmFja1xuXHRcdGxldCBzbGlkZXJUcmFjayA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NsaWRlci1pdGVtdHJhY2snKTtcblx0XHRsZXQgc2xpZGVyQ2Fyb3VzZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzbGlkZXItY2Fyb3VzZWwnKTtcblxuXHRcdC8vIDIuNC4gU2xpZGVyIEl0ZW1zLlxuXHRcdHRoaXMuY291cnNlRGF0YS51bml0cy5mb3JFYWNoKGZ1bmN0aW9uKHVuaXQsIGkpIHtcblx0XHRcdGlmICh1bml0LnRhZ3MgJiYgdW5pdC50YWdzLmluZGV4T2YoYXV4VGFnKSAhPSAtMSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzbGlkZXJJdGVtID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2xpZGVyLWl0ZW0nKTtcblx0XHRcdHNsaWRlckl0ZW0uaWQgPSAnc2xpZGVyLWl0ZW0tJyArIChpLTEpO1xuXG5cdFx0XHQvLyAyLjQuMCBBbmNob3Igd3JhcHBlclxuXHRcdFx0bGV0IGFuY2hvcldyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0EnLCAnJyk7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoYW5jaG9yV3JhcHBlciwge1xuXHRcdFx0XHRocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJyxcblx0XHRcdH0pO1xuXHRcdFx0YW5jaG9yV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy5pbml0U2VjdGlvbihpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyAyLjQuMS4gSXRlbSB0aXRsZVxuXHRcdFx0bGV0IGl0ZW1UaXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tdGl0bGUnKTtcblx0XHRcdGl0ZW1UaXRsZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUhlYWRlcigzLCAnJywgdW5pdC50aXRsZSkpO1xuXG5cdFx0XHQvLzIuNC4yLiBJdGVtIGltZ1xuXHRcdFx0bGV0IGl0ZW1JbWcgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzZWN0aW9uLWltZycpO1xuXHRcdFx0aXRlbUltZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicgKyB1bml0LmltYWdlICsgJ1wiKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsnKTtcblxuXHRcdFx0Ly8gMi40LjMuIEl0ZW0gRGVzY1xuXHRcdFx0bGV0IGl0ZW1EZXNjID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2VjdGlvbi1kZXNjJyk7XG5cdFx0XHRpdGVtRGVzYy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUhlYWRlcig0LCAnJywgdW5pdC5kZXNjcmlwdGlvbikpO1xuXG5cblx0XHRcdC8vIDIuNC40LiBJdGVtIE51bWJlclxuXHRcdFx0bGV0IGl0ZW1OdW1iZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzZWN0aW9uLW51bWJlcicpO1xuXHRcdFx0aXRlbU51bWJlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCAnJywgaS50b1N0cmluZygpLmxlbmd0aCA9PSAxID8gJzAnICsgaSA6IGkpKTtcblxuXHRcdFx0c2xpZGVyQ2Fyb3VzZWwuYXBwZW5kQ2hpbGQoc2xpZGVySXRlbSkuYXBwZW5kQ2hpbGQoYW5jaG9yV3JhcHBlcikuYXBwZW5kKGl0ZW1UaXRsZSwgaXRlbUltZywgaXRlbURlc2MsIGl0ZW1OdW1iZXIpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0c2xpZGVyVHJhY2suYXBwZW5kQ2hpbGQoc2xpZGVyQ2Fyb3VzZWwpO1xuXG5cdFx0c2xpZGVyV3JhcHBlci5hcHBlbmQoc2xpZGVyQ29udHJvbExlZnQsIHNsaWRlclRyYWNrLCBzbGlkZXJDb250cm9sUmlnaHQpO1xuXG5cdFx0Y291cnNlQ29udGVudC5hcHBlbmRDaGlsZChzbGlkZXJXcmFwcGVyKTtcblxuXHRcdC8vIDIuNS4gRHJhZyBzbGlkZSBoYW5kbGluZy5cblx0XHRsZXQgZHJhZ1N0YXJ0SGFuZGxlciA9IChlKSA9PiB7XG5cdFx0XHRsZXQgdGd0ID0gZS5jdXJyZW50VGFyZ2V0O1xuXHRcdFx0bGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuY291cnNlQ29udGVudElkKTtcblx0XHRcdGxldCBpdGVtcyA9IHRndC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPXNsaWRlci1pdGVtXScpO1xuXHRcdFx0bGV0IG9mZnNldE1hcCA9IFtdO1xuXG5cdFx0XHRpdGVtcy5mb3JFYWNoKChlKSA9PiBvZmZzZXRNYXAucHVzaChlLm9mZnNldExlZnQpKTtcblxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHZhciBzdGFydFggPSB0aGlzLnRvdWNoRW5hYmxlZCA/IGUudGFyZ2V0VG91Y2hlc1swXS5zY3JlZW5YIDogZS5zY3JlZW5YO1xuXG5cdFx0XHRsZXQgZHJhZ0hhbmRsZXIgPSAoZSkgPT4ge1xuXHRcdFx0XHRsZXQgc2NyZWVuWCA9IHRoaXMudG91Y2hFbmFibGVkID8gZS50YXJnZXRUb3VjaGVzWzBdLnNjcmVlblggOiBlLnNjcmVlblg7XG5cblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0XHRpZiAoc3RhcnRYID09IHNjcmVlblggfHwgc2NyZWVuWCA9PSAwKSByZXR1cm47XG5cblx0XHRcdFx0bGV0IHRyYW5zZm9ybVZhbCA9IGUuY3VycmVudFRhcmdldC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSxcblx0XHRcdFx0XHRjdXJyZW50WCA9IHRyYW5zZm9ybVZhbCA9PSAnJyA/IDAgOiBwYXJzZUludCh0cmFuc2Zvcm1WYWwubWF0Y2goL1xcZCsvZylbMF0pLFxuXHRcdFx0XHRcdGNhbGNYID0gKHNjcmVlblggLSBzdGFydFgpIC0gY3VycmVudFg7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VTdHlsZShlLmN1cnJlbnRUYXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKGNhbGNYID4gMCA/IDAgOiBjYWxjWCkgKyAncHgpJyk7XG5cdFx0XHRcdHN0YXJ0WCA9IHNjcmVlblg7XG5cdFx0XHR9XG5cdFx0XHRsZXQgZHJhZ0VuZEhhbmRsZXIgPSAoZSkgPT4ge1xuXHRcdFx0XHRsZXQgY2FsY1ggPSBudWxsLFxuXHRcdFx0XHRcdHRyYW5zZm9ybVZhbCA9IGUuY3VycmVudFRhcmdldC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSxcblx0XHRcdFx0XHRjdXJyZW50WCA9IHRyYW5zZm9ybVZhbCA9PSAnJyA/IDAgOiBwYXJzZUludCh0cmFuc2Zvcm1WYWwubWF0Y2goL1xcZCsvZylbMF0pO1xuXG5cdFx0XHRcdG9mZnNldE1hcC5mb3JFYWNoKChlLGkpID0+IHtcblx0XHRcdFx0XHRpZiAoTWF0aC5hYnMoY3VycmVudFggLSBlKSA8IE1hdGguYWJzKGN1cnJlbnRYIC0gb2Zmc2V0TWFwW2ktMV0pIHx8IChpIC0gMSkgPCAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9IGk7XG5cdFx0XHRcdFx0XHRjYWxjWCA9IC1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlU3R5bGUoZS5jdXJyZW50VGFyZ2V0LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoJyArIChjYWxjWCA+IDAgPyAwIDogY2FsY1gpICsgJ3B4KScpO1xuXHRcdFx0XHRlLmN1cnJlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50c01hcFsnbW92ZSddLCBkcmFnSGFuZGxlcik7XG5cdFx0XHRcdGUuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRzTWFwWydlbmQnXSwgZHJhZ0VuZEhhbmRsZXIpO1xuXG5cdFx0XHRcdC8vIEFycm93IG1hbmFnZW1lbnRcblx0XHRcdFx0d3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLW5hdmNvbnRyb2wnKS5mb3JFYWNoKChhcnJvdykgPT4ge1xuXHRcdFx0XHRcdGlmICgoYXJyb3cuY2xhc3NOYW1lLmluZGV4T2YoJ2xlZnQnKSAhPSAtMSAmJiB0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9PSAwKSB8fCAoYXJyb3cuY2xhc3NOYW1lLmluZGV4T2YoJ3JpZ2h0JykgIT0gLTEgJiYgdGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQgPT0gaXRlbXMubGVuZ3RoLTEpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVFbGVtKGFycm93LCB0cnVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93RWxlbShhcnJvdyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0dGd0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudHNNYXBbJ21vdmUnXSwgZHJhZ0hhbmRsZXIpO1xuXHRcdFx0dGd0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudHNNYXBbJ2VuZCddLCBkcmFnRW5kSGFuZGxlcik7XG5cdFx0fVxuXG5cdFx0c2xpZGVyQ2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50c01hcFsnc3RhcnQnXSwgZHJhZ1N0YXJ0SGFuZGxlcik7XG5cblx0XHRyZXR1cm4gY291cnNlQ29udGVudDtcblx0fVxuXHRnZW5lcmF0ZU5hdmlnYXRvcnMoKSB7XG5cdFx0bGV0IGxlZnRDbGFzc2VzID0gWydzZWN0aW9uLW5hdmlnYXRpb24nLCAnbGVmdCddO1xuXHRcdGxldCByaWdodENsYXNzZXMgPSBbJ3NlY3Rpb24tbmF2aWdhdGlvbicsICdyaWdodCddO1xuXHRcdGxldCBhcnJvd0xlZnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicsIGxlZnRDbGFzc2VzKTtcblx0XHRsZXQgYXJyb3dSaWdodCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnQlVUVE9OJywgcmlnaHRDbGFzc2VzKTtcblxuXHRcdGFycm93TGVmdC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoJ0knLCBbJ2ZhJywgJ2ZhLWFuZ2xlLWxlZnQnXSkpO1xuXHRcdGFycm93UmlnaHQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KCdJJywgWydmYScsICdmYS1hbmdsZS1yaWdodCddKSk7XG5cblx0XHRhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNsaWRlUHJldlNlY3Rpb24oKSk7XG5cdFx0YXJyb3dSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2xpZGVOZXh0U2VjdGlvbigpKTtcblxuXHRcdHJldHVybiB7bGVmdDogYXJyb3dMZWZ0LCByaWdodDogYXJyb3dSaWdodH07XG5cdH1cblx0c2xpZGUoZGlyZWN0aW9uKSB7XG5cdFx0bGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY291cnNlLWNvbnRlbnQnKTtcblx0XHRsZXQgdHJhY2sgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItaXRlbXRyYWNrJyk7XG5cdFx0bGV0IGNhcm91c2VsID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWNhcm91c2VsJyk7XG5cdFx0bGV0IGl0ZW1zID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPXNsaWRlci1pdGVtXScpO1xuXHRcdGxldCBjdXJyZW50RWxlbWVudCA9IGl0ZW1zW3RoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50XTtcblx0XHRsZXQgdGFyZ2V0RWxlbWVudDtcblx0XHRsZXQgb2Zmc2V0O1xuXG5cdFx0Ly8gQWRkIHRyYW5zZm9ybSB0byByZXNldCBlbGVtZW50cyBvZmZzZXQ7XG5cdFx0Y2Fyb3VzZWwuc3R5bGUudHJhbnNmb3JtID09ICcnICYmIChjYXJvdXNlbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwcHgpJyk7XG5cblx0XHRpZiAoZGlyZWN0aW9uID09ICdsdHInKSB7XG5cdFx0XHRpZiAodGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQgPT0gaXRlbXMubGVuZ3RoLTEpIHJldHVybjtcblx0XHRcdGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oZSxpKSB7XG5cdFx0XHRcdGlmIChpIDwgdGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQpIHJldHVybjtcblx0XHRcdFx0XHRsZXQgY3VyT2Zmc2V0ID0gZS5vZmZzZXRMZWZ0IC0gY3VycmVudEVsZW1lbnQub2Zmc2V0TGVmdDtcblxuXHRcdFx0XHRpZiAodGFyZ2V0RWxlbWVudCAmJiB0eXBlb2YgdGFyZ2V0RWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuXHRcdFx0XHRpZiAoTWF0aC5hYnMoY3VyT2Zmc2V0KSA+IHRyYWNrLm9mZnNldFdpZHRoKSB7XG5cdFx0XHRcdFx0dGFyZ2V0RWxlbWVudCA9IGUucHJldmlvdXNFbGVtZW50U2libGluZztcblx0XHRcdFx0XHR0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9IGktMTtcblx0XHRcdFx0fSBlbHNlIGlmIChpID09IGl0ZW1zLmxlbmd0aC0xKSB7XG5cdFx0XHRcdFx0dGFyZ2V0RWxlbWVudCA9IGU7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQgPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKTtcblx0XHRcdG9mZnNldCA9IC10YXJnZXRFbGVtZW50Lm9mZnNldExlZnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9PSAwKSByZXR1cm47XG5cdFx0XHRpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGUsaSkge1xuXHRcdFx0XHRsZXQgckluZGV4ID0gaXRlbXMubGVuZ3RoLTEgLSBpO1xuXHRcdFx0XHRpZiAockluZGV4ID4gdGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQpIHJldHVybjtcblxuXHRcdFx0XHRsZXQgckVsID0gaXRlbXNbckluZGV4XSxcblx0XHRcdFx0XHRjdXJPZmZzZXQgPSByRWwub2Zmc2V0TGVmdCAtIGN1cnJlbnRFbGVtZW50Lm9mZnNldExlZnQ7XG5cblx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnQgJiYgdHlwZW9mIHRhcmdldEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cdFx0XHRcdGlmIChNYXRoLmFicyhjdXJPZmZzZXQpID4gdHJhY2sub2Zmc2V0V2lkdGgpIHtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gckVsLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID0gckluZGV4ICsgMTtcblx0XHRcdFx0fSBlbHNlIGlmIChySW5kZXggPT0gMCkge1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQgPSByRWw7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQgPSBySW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0b2Zmc2V0ID0gLXRhcmdldEVsZW1lbnQub2Zmc2V0TGVmdDtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvZmZzZXQgIT09ICd1bmRlZmluZWQnKSBjYXJvdXNlbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgb2Zmc2V0ICsgJ3B4KSc7XG5cblx0XHQvLyBBcnJvdyBtYW5hZ2VtZW50XG5cdFx0d3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLW5hdmNvbnRyb2wnKS5mb3JFYWNoKChhcnJvdykgPT4ge1xuXHRcdFx0aWYgKChhcnJvdy5jbGFzc05hbWUuaW5kZXhPZignbGVmdCcpICE9IC0xICYmIHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID09IDApIHx8IChhcnJvdy5jbGFzc05hbWUuaW5kZXhPZigncmlnaHQnKSAhPSAtMSAmJiB0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9PSBpdGVtcy5sZW5ndGgtMSkpIHtcblx0XHRcdFx0dGhpcy5oaWRlRWxlbShhcnJvdywgdHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNob3dFbGVtKGFycm93KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9XG5cdHNsaWRlTGVmdCgpIHtcblx0XHR0aGlzLnNsaWRlKCk7XG5cdH1cblx0c2xpZGVSaWdodCgpIHtcblx0XHR0aGlzLnNsaWRlKCdsdHInKTtcblx0fVxuXHRzbGlkZU5leHRTZWN0aW9uKCkge1xuXHRcdGlmICh0aGlzLmNvdXJzZURhdGEudW5pdHMubGVuZ3RoLTEgPT0gdGhpcy5jdXJyZW50U2VjdGlvbil7XG5cdFx0XHR0aGlzLmhpZGVFbGVtKHRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9yc1sncmlnaHQnXSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc2xpZGVTZWN0aW9uKHRoaXMuY3VycmVudFNlY3Rpb24gKyAxKTtcblx0fVxuXHRzbGlkZVByZXZTZWN0aW9uKCkge1xuXHRcdGlmICh0aGlzLmN1cnJlbnRTZWN0aW9uID09IDEpIHtcblx0XHRcdHRoaXMuaGlkZUVsZW0odGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzWydsZWZ0J10pO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNsaWRlU2VjdGlvbih0aGlzLmN1cnJlbnRTZWN0aW9uIC0gMSk7XG5cdH1cblx0c2xpZGVTZWN0aW9uKGluZGV4KSB7XG5cdFx0dGhpcy5oaWRlU2VjdGlvbih0aGlzLmN1cnJlbnRTZWN0aW9uKTtcblx0XHR0aGlzLnRvZ2dsZU5hdmlnYXRvcnMoaW5kZXgpO1xuXHRcdGlmICh0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSAmJiB0eXBlb2YgdGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uc1tpbmRleF0gIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHRoaXMuc2hvd1NlY3Rpb24oaW5kZXgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmluaXRTZWN0aW9uKGluZGV4KTtcblx0fVxuXHQvLyBTSE9XL0hJREVcblx0c2hvd01haW5TY3JlZW4oKSB7XG5cdFx0dGhpcy5oaWRlTmF2aWdhdG9ycygpO1xuXHRcdHRoaXMucmVzZXRCcmVhZGN1bWJzKCk7XG5cdFx0dGhpcy5tYWluU2NyZWVuICYmIHRoaXMuc2hvd0VsZW0odGhpcy5tYWluU2NyZWVuKTtcblx0fVxuXHRoaWRlTWFpblNjcmVlbigpIHtcblx0XHR0aGlzLm1haW5TY3JlZW4gJiYgdGhpcy5oaWRlRWxlbSh0aGlzLm1haW5TY3JlZW4pO1xuXHR9XG5cdHNob3dTZWN0aW9uKGluZGV4KSB7XG5cdFx0bGV0IGRhdGEgPSB0aGlzLmNvdXJzZURhdGEudW5pdHNbaW5kZXhdO1xuXHRcdHRoaXMuYWRkQnJlYWRjdW1iKGRhdGEudGl0bGUpO1xuXHRcdHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbnNbaW5kZXhdICYmIHRoaXMuc2hvd0VsZW0odGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uc1tpbmRleF0pO1xuXHRcdHRoaXMuY3VycmVudFNlY3Rpb24gPSBpbmRleDtcblx0fVxuXHRoaWRlU2VjdGlvbihpbmRleCkge1xuXHRcdHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbnNbaW5kZXhdICYmIHRoaXMuaGlkZUVsZW0odGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uc1tpbmRleF0pO1xuXHR9XG5cdHRvZ2dsZU5hdmlnYXRvcnMoaW5kZXgpIHtcblx0XHRpZiAoIWluZGV4IHx8IHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblx0XHRsZXQgbmF2cyA9IHRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9ycztcblxuXHRcdGluZGV4ID09IDEgPyB0aGlzLmhpZGVFbGVtKG5hdnMubGVmdCwgdHJ1ZSkgOiB0aGlzLnNob3dFbGVtKG5hdnMubGVmdCk7XG5cdFx0dGhpcy5jb3Vyc2VEYXRhLnVuaXRzLmxlbmd0aC0xID09IGluZGV4ID8gdGhpcy5oaWRlRWxlbShuYXZzLnJpZ2h0LCB0cnVlKSA6IHRoaXMuc2hvd0VsZW0obmF2cy5yaWdodCk7XG5cdH1cblx0c2hvd05hdmlnYXRvcnMoKSB7XG5cdFx0aWYgKCF0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnMgfHwgdHlwZW9mIHRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9ycyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblx0XHRmb3IgKGxldCBuYXYgaW4gdGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzKSB7XG5cdFx0XHR0aGlzLnNob3dFbGVtKHRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9yc1tuYXZdKTtcblx0XHR9XG5cdH1cblx0aGlkZU5hdmlnYXRvcnMoKSB7XG5cdFx0aWYgKCF0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnMgfHwgdHlwZW9mIHRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9ycyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblx0XHRmb3IgKGxldCBuYXYgaW4gdGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzKSB7XG5cdFx0XHR0aGlzLmhpZGVFbGVtKHRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9yc1tuYXZdKTtcblx0XHR9XG5cdH1cblx0c2hvd0VsZW0oZWwpIHtcblx0XHRpZiAoIWVsIHx8IHR5cGVvZiBlbCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMuY2hhbmdlU3R5bGUoZWwsICd2aXNpYmlsaXR5JywgJycpO1xuXHRcdGVsLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnICYmIHRoaXMuY2hhbmdlU3R5bGUoZWwsICdkaXNwbGF5JywgJycpO1xuXHRcdHJldHVybiBlbDtcblx0fVxuXHRoaWRlRWxlbShlbCwgZGlzcGxheSkge1xuXHRcdGlmICghZWwgfHwgdHlwZW9mIGVsID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy5jaGFuZ2VTdHlsZShlbCwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0KCFkaXNwbGF5IHx8IHR5cGVvZiBkaXNwbGF5ID09PSAndW5kZWZpbmVkJykgJiYgdGhpcy5jaGFuZ2VTdHlsZShlbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdHJldHVybiBlbDtcblx0fVxuXHRpc0hpZGRlbihlbCwgY2hlY2tEaXNwbGF5KSB7XG5cdFx0bGV0IHZpc2libGUgPSBlbC5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJyxcblx0XHRcdGRpc3BsYXllZCA9IGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJztcblx0XHRyZXR1cm4gdmlzaWJsZSAmJiAoKCFjaGVja0Rpc3BsYXkgfHwgdHlwZW9mIGNoZWNrRGlzcGxheSA9PT0gJ3VuZGVmaW5lZCcpIHx8IGRpc3BsYXllZCk7XG5cdH1cblxuXHQvLyBCUkVBRENVTUJTXG5cdHVwZGF0ZUJyZWFkY3VtYnMoKSB7XG5cdFx0aWYgKHRoaXMuaXNBcHApIHJldHVybjtcblxuXHRcdHRoaXMuYnJlYWRjdW1ic0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcblx0XHR0aGlzLmJyZWFkY3VtYnMuZm9yRWFjaCgodGV4dCwgbGV2ZWwpID0+IHtcblx0XHRcdGxldCBmb3JtYXR0ZWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCArIChsZXZlbCA9PSB0aGlzLmJyZWFkY3VtYnMubGVuZ3RoLTEgPyAnJyA6ICcgPiAnKSk7XG5cdFx0XHQodGV4dCAmJiB0eXBlb2YgdGV4dCAhPT0gJ3VuZGVmaW5lZCcpICYmICh0aGlzLmJyZWFkY3VtYnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybWF0dGVkVGV4dCkpO1xuXHRcdH0pO1xuXHRcdHRoaXMuaXNIaWRkZW4odGhpcy5icmVhZGN1bWJzQ29udGFpbmVyKSAmJiB0aGlzLnNob3dFbGVtKHRoaXMuYnJlYWRjdW1ic0NvbnRhaW5lcik7XG5cdH1cblx0YWRkQnJlYWRjdW1iKHRleHQsIGxldmVsKSB7XG5cdFx0aWYgKHRoaXMuaXNBcHApIHJldHVybjtcblxuXHRcdChsZXZlbCAmJiB0eXBlb2YgbGV2ZWwgIT09ICd1bmRlZmluZWQnKSA/ICh0aGlzLmJyZWFkY3VtYnNbbGV2ZWxdID0gdGV4dCkgOiB0aGlzLmJyZWFkY3VtYnMucHVzaCh0ZXh0KTtcblx0XHR0aGlzLnVwZGF0ZUJyZWFkY3VtYnMoKTtcblx0fVxuXHRyZW1vdmVCcmVhZGN1bWIobGV2ZWwpIHtcblx0XHRpZiAodGhpcy5pc0FwcCkgcmV0dXJuO1xuXG5cdFx0KGxldmVsICYmIHR5cGVvZiBsZXZlbCAhPT0gJ3VuZGVmaW5lZCcpID8gKHRoaXMuYnJlYWRjdW1ic1tsZXZlbF0gPSB1bmRlZmluZWQpIDogdGhpcy5icmVhZGN1bWJzLnBvcCgpO1xuXHRcdHRoaXMudXBkYXRlQnJlYWRjdW1icygpO1xuXHR9XG5cdHJlc2V0QnJlYWRjdW1icygpIHtcblx0XHRpZiAodGhpcy5pc0FwcCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5icmVhZGN1bWJzID0gW3RoaXMuYnJlYWRjdW1ic1swXV07XG5cdFx0dGhpcy51cGRhdGVCcmVhZGN1bWJzKCk7XG5cdH1cblxuXHQvLyBVUkwgJiBSRURJUkVDVElOR1xuXHRvcGVuQWN0aXZpdHkodXJsLCBzZWN0aW9uSWQsIHR5cGUpIHtcblx0XHRpZiAoIXVybCB8fCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykgcmV0dXJuO1xuXG5cdFx0aWYgKGJsaW5rLmlzQXBwKSB7XG5cdFx0XHRibGluay5yZXN0Lm9wZW5VcmwoJ2Z1bGxzY3JlZW4nLCB1cmwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgb3BlbkJsYW5rID0gKHR5cGUgPT09ICd1cmwnIHx8IHR5cGUgPT09ICdhcmNoaXZvJyk7XG5cdFx0XHRpZiAob3BlbkJsYW5rKSB7XG5cdFx0XHRcdGJsaW5rLnJlc3Qub3BlblVybCgnZnVsbHNjcmVlbicsIHVybCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRibGluay5nb1RvQWN0aXZpdHkoaWRjdXJzbywgc2VjdGlvbklkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBESU1FTlNJT05TXG5cdHJlc2l6ZUNvbnRhaW5lcigpIHtcblx0XHRsZXQgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci5saWJybycpO1xuXHRcdGlmICghbmF2YmFyKSByZXR1cm47XG5cblx0XHRsZXQgZWwgPSB0aGlzLmxheW91dENvbnRhaW5lcixcblx0XHRcdHRvcCA9IG5hdmJhci5vZmZzZXRIZWlnaHQsXG5cdFx0XHRoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0b3A7XG5cblx0XHR0aGlzLnNldEVsZW1lbnRIZWlnaHQoZWwsIGhlaWdodCk7XG5cdFx0dGhpcy5zZXRFbGVtZW50T2Zmc2V0WChlbCwgdG9wKTtcblx0fVxuXHRzZXRFbGVtZW50SGVpZ2h0KGVsLCBoZWlnaHQpIHtcblx0XHRsZXQgc3RySGVpZ2h0ID0gKHR5cGVvZiBoZWlnaHQgIT09ICdzdHJpbmcnIHx8IGhlaWdodC5pbmRleE9mKCdweCcpID09IC0xKSA/IGhlaWdodCArICdweCcgOiBoZWlnaHQ7XG5cdFx0ZWwuc3R5bGUuaGVpZ2h0ID0gc3RySGVpZ2h0O1xuXHR9XG5cdHNldEVsZW1lbnRPZmZzZXRYKGVsLCB0b3ApIHtcblx0XHRsZXQgc3RyVG9wID0gKHR5cGVvZiB0b3AgIT09ICdzdHJpbmcnIHx8IHRvcC5pbmRleE9mKCdweCcpID09IC0xKSA/IHRvcCArICdweCcgOiB0b3A7XG5cdFx0ZWwuc3R5bGUudG9wID0gc3RyVG9wO1xuXHR9XG5cdHNldEF0dHJpYnV0ZXMoZWwsIGF0dHJzKSB7XG5cdFx0aWYgKCFhdHRycyB8fCAhKGF0dHJzIGluc3RhbmNlb2YgT2JqZWN0KSkgcmV0dXJuO1xuXHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdFx0fTtcblx0fVxuXHRjcmVhdGVIZWFkZXIobGV2ZWwsIGNsYXNzTGlzdCwgdGV4dCkge1xuXHRcdGxldCB0YWcgPSAobGV2ZWwgJiYgdHlwZW9mIGxldmVsID09PSAnbnVtYmVyJykgPyAnSCcgKyBsZXZlbCA6ICdIMicsXG5cdFx0XHRoZWFkZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc0xpc3QgPT0gJycgPyAnc2VjdGlvbi10aXRsZS0nICsgbGV2ZWwgOiBjbGFzc0xpc3QsIHRleHQpO1xuXG5cdFx0cmV0dXJuIGhlYWRlcjtcblx0fVxuXHRjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NMaXN0LCB0ZXh0KSB7XG5cdFx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXHRcdGVsID0gdGhpcy5hZGRDbGFzc2VzKGVsLCBjbGFzc0xpc3QpO1xuXHRcdCh0ZXh0ICYmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRleHQgPT09ICdudW1iZXInKSkgJiYgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuXG5cdFx0cmV0dXJuIGVsXG5cdH1cblx0YWRkQ2xhc3NlcyhlbCwgY2xhc3NMaXN0KSB7XG5cdFx0aWYgKGNsYXNzTGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRjbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbihjbHMpIHtcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJyAmJiBjbGFzc0xpc3QgIT0gJycpIHtcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cdHJlbW92ZUNsYXNzZXMoZWwsIGNsYXNzTGlzdCkge1xuXHRcdGlmIChjbGFzc0xpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0Y2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24oY2xzKSB7XG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycgJiYgY2xhc3NMaXN0ICE9ICcnKSB7XG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTGlzdCk7XG5cdFx0fVxuXHRcdHJldHVybiBlbDtcblx0fVxuXHRjaGFuZ2VTdHlsZShlbGVtLCBwcm9wLCB2YWwpIHtcblx0XHRlbGVtLnN0eWxlW3Byb3BdID0gdmFsO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsIi8qXG4qICAgSmF2YXNjcmlwdCBwcmluY2lwYWwgY29uIGxhIGVzdHJ1Y3R1cmEgYsOhc2ljYSBkZWwgZXN0aWxvXG4qL1xuXG5pbXBvcnQgY2tlU3R5bGVzIGZyb20gJy4vY2tlX3N0eWxlcyc7XG5pbXBvcnQgb3ZlcnJpZGVzIGZyb20gJy4vb3ZlcnJpZGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQvbWFpbic7XG5cbihmdW5jdGlvbiAoYmxpbmspIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBHZW5lcmljU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YmxpbmsudGhlbWUuc3R5bGVzLmJhc2ljLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdH1cblxuXHRHZW5lcmljU3R5bGUucHJvdG90eXBlID0ge1xuXHRcdHBhcmVudDogYmxpbmsudGhlbWUuc3R5bGVzLmJhc2ljLnByb3RvdHlwZSxcblx0XHRib2R5Q2xhc3NOYW1lOiAnY29udGVudF90eXBlX2NsYXNlX2dlbmVyaWMnLFxuXHRcdGV4dHJhUGx1Z2luczogWydpbWFnZTInXSxcblx0XHRja0VkaXRvclN0eWxlczoge1xuXHRcdFx0bmFtZTogJ2dlbmVyaWMnLFxuXHRcdFx0c3R5bGVzOiBja2VTdHlsZXNcblx0XHR9LFxuXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnBhcmVudC5pbml0LmNhbGwodGhpcyk7XG5cdFx0XHR0aGlzLmxheW91dCA9IG5ldyBMYXlvdXQoKTtcblx0XHRcdHRoaXMucmVtb3ZlRmluYWxTbGlkZSgpO1xuXG5cdFx0XHR0aGlzLmxheW91dC5pbml0KCk7XG5cdFx0fSxcblx0XHQuLi5vdmVycmlkZXNcblx0fTtcblxuXHRHZW5lcmljU3R5bGUucHJvdG90eXBlID0gXy5leHRlbmQoe30sIG5ldyBibGluay50aGVtZS5zdHlsZXMuYmFzaWMoKSwgR2VuZXJpY1N0eWxlLnByb3RvdHlwZSk7XG5cblx0YmxpbmsudGhlbWUuc3R5bGVzWydnZW5lcmljJ10gPSBHZW5lcmljU3R5bGU7XG59KSggYmxpbmsgKTtcbiIsIi8qXG4qICAgSmF2YXNjcmlwdCBkb25kZSBlc3TDoW4gbGFzIGZ1bmNpb25lcyBxdWUgc29icmVlc2NyaWJlbiBhIGZ1bmNpb25lcyBkZSBCYXNpY1xuKi9cblxuY29uc3Qgb3ZlcnJpZGVzID0gIHtcblx0aXNBZGFwdGF0aXZlOiAoKSA9PiB0cnVlLFxuXHRzaG93Qm9va0luZGV4SW5DbGFzczooKSA9PiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdHJlbW92ZUZpbmFsU2xpZGU6ICh0KSA9PiB7XG5cdFx0bGV0IHRoaXNTdHlsZSA9IGJsaW5rLmFjdGl2aXR5LmN1cnJlbnRTdHlsZTtcblx0XHR0aGlzU3R5bGUucGFyZW50LnJlbW92ZUZpbmFsU2xpZGUuY2FsbCh0aGlzU3R5bGUsIHRydWUpO1xuXHR9LFxuXHRwcm9jZXNzSGFzaDogKCkgPT4ge1xuXHRcdHZhciBoYXNoID0gJycsXG5cdFx0XHRjdXJzbyA9IGJsaW5rLmdldENvdXJzZShpZGN1cnNvLCB0cnVlLCB0cnVlKSxcblx0XHRcdHRlbWEgPSAnJyxcblx0XHRcdGFjdGl2aWRhZCA9ICcnO1xuXG5cdFx0aWYgKCFjdXJzby5yZXNwb25zZUpTT04gfHwgIWN1cnNvLnJlc3BvbnNlSlNPTi51bml0cyB8fCBjdXJzby5yZXNwb25zZUpTT04udW5pdHMubGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRfLmZpbmQoY3Vyc28ucmVzcG9uc2VKU09OLnVuaXRzLCBmdW5jdGlvbiAodW5pdCkge1xuXHRcdFx0Xy5maW5kKHVuaXQuc3VidW5pdHMsIGZ1bmN0aW9uIChzdWJ1bml0KSB7XG5cdFx0XHRcdGlmIChzdWJ1bml0LmlkID09IHdpbmRvdy5pZGNsYXNlKSB7XG5cdFx0XHRcdFx0YWN0aXZpZGFkID0gc3VidW5pdDtcblx0XHRcdFx0XHR0ZW1hID0gdW5pdDtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdGlmIChhY3RpdmlkYWQgPT09ICcnKSB7XG5cdFx0XHRcdF8uZmluZCh1bml0LnJlc291cmNlcywgZnVuY3Rpb24gKHJlc291cmNlKSB7XG5cdFx0XHRcdFx0aWYgKHJlc291cmNlLmlkID09IHdpbmRvdy5pZGNsYXNlKSB7XG5cdFx0XHRcdFx0XHRhY3RpdmlkYWQgPSByZXNvdXJjZTtcblx0XHRcdFx0XHRcdHRlbWEgPSB1bml0O1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB3aW5kb3cuaWR0ZW1hICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaWR0ZW1hICE9PSAnJyAmJiB1bml0LmlkID09IHdpbmRvdy5pZHRlbWEpIHtcblx0XHRcdFx0dGVtYSA9IHVuaXQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICh0eXBlb2YgdGVtYSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRlbWEubnVtYmVyID09PSAndW5kZWZpbmVkJyB8fCB0ZW1hLm51bWJlciAtIDEgPD0gMCkge1xuXHRcdFx0cmV0dXJuICcjaG9tZSc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBhY3RpdmlkYWQub25seVZpc2libGVUZWFjaGVycyAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aXZpZGFkLm9ubHlWaXNpYmxlVGVhY2hlcnMpIHtcblx0XHRcdGhhc2ggPSAnI3VuaXRfJyArIHBhcnNlSW50KHRlbWEubnVtYmVyIC0gMSkgKyAnX3RlYWNoZXJhcmVhJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGFzaCA9ICcjdW5pdF8nICsgcGFyc2VJbnQodGVtYS5udW1iZXIgLSAxKSArICdfc3R1ZGVudGFyZWEnO1xuXHRcdH1cblxuXHRcdHJldHVybiBoYXNoO1xuXHR9XG59O1xuZXhwb3J0IGRlZmF1bHQgb3ZlcnJpZGVzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU5MjgyMjA0ODA5MlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi93b3Jrc3BhY2VzL3dlYi9jb21tb24tdXRpbHMvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
