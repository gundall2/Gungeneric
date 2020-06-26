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
      this.courseData.portada = new URLSearchParams(this.courseData.url).get('idclase');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2VuZXJpYy9ibGluay1zcmMvanMvY2tlX3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9qcy9sYXlvdXQvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2dlbmVyaWMvYmxpbmstc3JjL2pzL292ZXJyaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9zdHlsZXMvbWFpbi5zY3NzP2Y5NTQiXSwibmFtZXMiOlsiY2tlU3R5bGVzIiwibmFtZSIsInR5cGUiLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwiZWxlbWVudCIsIkxheW91dCIsImNvbnN0cnVjdG9yIiwicGFyZW50IiwiZG9jdW1lbnQiLCJib2R5IiwiY291cnNlV3JhcHBlcklkIiwibWFpblNjcmVlbklkIiwic2VjdGlvblNjcmVlblByZWZpeCIsImNvdXJzZUhlYWRlcklkIiwiY291cnNlQ29udGVudElkIiwiY291cnNlSWQiLCJ3aW5kb3ciLCJpZGN1cnNvIiwiY291cnNlRGF0YSIsImJsaW5rIiwiZ2V0Q291cnNlIiwicmVzcG9uc2VKU09OIiwiYXV4VGFnIiwidG91Y2hFbmFibGVkIiwibmF2aWdhdG9yIiwiTWF4VG91Y2hQb2ludHMiLCJtc01heFRvdWNoUG9pbnRzIiwiaXNBcHAiLCJldmVudHNNYXAiLCJlbmQiLCJtb3ZlIiwic3RhcnQiLCJ0ZXh0d2ViIiwidGV4dHMiLCJnb0JhY2siLCJzdHVkZW50QXJlYSIsInRlYWNoZXJBcmVhIiwibm9SZXNvdXJjZXMiLCJ1bml0Q29udGVudCIsInJlc291cmNlcyIsInBhZ3MiLCJicmVhZGN1bWJzQ29udGFpbmVyIiwiYnJlYWRjdW1icyIsInRpdGxlIiwic2VjdGlvbkRhdGEiLCJzZWN0aW9ucyIsIm5hdmlnYXRvcnMiLCJsZWZ0IiwicmlnaHQiLCJzbGlkZXIiLCJjdXJyZW50RWxlbWVudCIsIl9yZXNpemVDb250YWluZXIiLCJyZXNpemVDb250YWluZXIiLCJiaW5kIiwibGF5b3V0Q29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImlkIiwicG9ydGFkYSIsIlVSTFNlYXJjaFBhcmFtcyIsInVybCIsImdldCIsInByZXBhcmVMYXlvdXREYXRhIiwiaW5pdCIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJzbGlkZXJDb250cm9sIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdmJhckJvdHRvbSIsInNldEF0dHJpYnV0ZSIsImltYWdlIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJldmVudHMiLCJvbmNlIiwicmVtb3ZlQXV4VW5pdCIsImlkY2xhc2UiLCJnb0JhY2tXcmFwcGVyIiwiZ29CYWNrQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZGlyZWNjaW9uYXIiLCJhcHBlbmRDaGlsZCIsImFwcGVuZCIsImZvckVhY2giLCJlbCIsImUiLCJjaGFuZ2VTdHlsZSIsImhhc2giLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsImhpZGVFbGVtIiwiZ2VuZXJhdGVOYXZpZ2F0b3JzIiwiaGlkZU5hdmlnYXRvcnMiLCJtYXRjaCIsImluZGV4IiwicGFyc2VJbnQiLCJ0YWIiLCJsYXN0SW5kZXhPZiIsImluaXRTZWN0aW9uIiwiaW5pdEhvbWUiLCJyZXNldEJyZWFkY3VtYnMiLCJtYWluU2NyZWVuIiwiY291cnNlSGVhZGVyIiwiZ2VuZXJhdGVIZWFkZXIiLCJjb3Vyc2VDb250ZW50IiwiZ2VuZXJhdGVDb250ZW50IiwiYWxlcnQiLCJoaWRlTWFpblNjcmVlbiIsInRvZ2dsZU5hdmlnYXRvcnMiLCJzaG93U2VjdGlvbiIsInRhYkNsaWNrSGFuZGxlciIsImN1cnJlbnRTZWN0aW9uIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInRhcmdldFRhYiIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzZXMiLCJhZGRDbGFzc2VzIiwiZ29CYWNrQ2xpY2tIYW5kbGVyIiwic2hvd01haW5TY3JlZW4iLCJoaWRlU2VjdGlvbiIsInNlcGFyYXRvciIsInRleHQiLCJ3cmFwcGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJkYXRhIiwidW5pdHMiLCJzZWN0aW9uU2NyZWVuIiwiYWRkQnJlYWRjdW1iIiwib25jbGljayIsInNlY3Rpb25XcmFwcGVyIiwic2VjdGlvblRpdGxlIiwiY3JlYXRlSGVhZGVyIiwiZGVzY1dyYXBwZXIiLCJzZWN0aW9uRGVzYyIsInNlY3Rpb25OdW1iZXIiLCJ0b1N0cmluZyIsImxlbmd0aCIsImRlc2NyaXB0aW9uIiwic2VjdGlvbkNvbnRlbnQiLCJ0YWJzV3JhcHBlciIsInN0dWRlbnRUYWIiLCJ0ZWFjaGVyVGFiIiwidGFic0NvbnRlbnQiLCJzdHVkZW50Q29udGVudCIsInRlYWNoZXJDb250ZW50Iiwic3R1ZGVudFdyYXBwZXIiLCJ0ZWFjaGVyV3JhcHBlciIsInN0dWRlbnRVbml0Q29udGFpbmVyIiwic3R1ZGVudFJlc291cmNlQ29udGFpbmVyIiwidGVhY2hlclVuaXRDb250YWluZXIiLCJ0ZWFjaGVyUmVzb3VyY2VDb250YWluZXIiLCJub1Jlc291cmNlc1dyYXBwZXIiLCJjb21iaW5lZCIsInN1YnVuaXRzIiwiY29uY2F0IiwiaXNSZXNvdXJjZSIsImNvbnRhaW5zIiwiZWxXcmFwcGVyIiwiZWxJbWciLCJ0eXBlSW50IiwiZWxUaXRsZVdyYXBwZXIiLCJlbFRpdGxlIiwidGFyZ2V0V3JhcHBlciIsImVsQnV0dG9ucyIsImVsTG9jayIsImVsUGFnZUNvdW50IiwicGFnZUNvdW50VHh0IiwicmVwbGFjZSIsInN0b3BQcm9wYWdhdGlvbiIsImxvY2tDbGFzcyIsImNsYXNzTGlzdCIsIm9uY2xpY2tUaXRsZSIsIm9wZW5BY3Rpdml0eSIsIm9ubHlWaXNpYmxlVGVhY2hlcnMiLCJlbENpcmNsZU91dGVyIiwiZWxDaXJjbGVJbm5lciIsImlzSGlkZGVuIiwic2hvd0VsZW0iLCJjaGlsZEVsZW1lbnRDb3VudCIsImNsb25lTm9kZSIsImZha2VQYWRkaW5nIiwibGF5b3V0RGF0YSIsImF1eEFjdGl2aXRpZXMiLCJhdXhVbml0IiwidW5pdHNEYXRhIiwidW5pdCIsImlVbml0IiwidGFncyIsImluZGV4T2YiLCJhY3Rpdml0eSIsInRhZ09yaWdpbiIsInRhZyIsInB1c2giLCJPYmplY3QiLCJrZXlzIiwidGl0bGVXcmFwcGVyIiwic3VidGl0bGUiLCJleHRyYVdyYXBwZXIiLCJleHRyYUxpc3QiLCJhIiwiaSIsImFuY2hvciIsImhyZWYiLCJzbGlkZXJXcmFwcGVyIiwic2xpZGVyQ29udHJvbExlZnQiLCJzbGlkZXJDb250cm9sUmlnaHQiLCJzbGlkZXJDb250cm9sTGVmdEFycm93Iiwic2xpZGVyQ29udHJvbFJpZ2h0QXJyb3ciLCJhcnJvd0xlZnQiLCJhcnJvd1JpZ2h0Iiwic2xpZGVMZWZ0Iiwic2xpZGVSaWdodCIsInNsaWRlclRyYWNrIiwic2xpZGVyQ2Fyb3VzZWwiLCJzbGlkZXJJdGVtIiwiYW5jaG9yV3JhcHBlciIsInNldEF0dHJpYnV0ZXMiLCJpdGVtVGl0bGUiLCJpdGVtSW1nIiwiaXRlbURlc2MiLCJpdGVtTnVtYmVyIiwiZHJhZ1N0YXJ0SGFuZGxlciIsInRndCIsIml0ZW1zIiwib2Zmc2V0TWFwIiwib2Zmc2V0TGVmdCIsInN0YXJ0WCIsInRhcmdldFRvdWNoZXMiLCJzY3JlZW5YIiwiZHJhZ0hhbmRsZXIiLCJ0cmFuc2Zvcm1WYWwiLCJzdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjdXJyZW50WCIsImNhbGNYIiwiZHJhZ0VuZEhhbmRsZXIiLCJNYXRoIiwiYWJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFycm93IiwiY2xhc3NOYW1lIiwiYm9va0luZGV4IiwidGl0bGVzTGlzdCIsImNvbnRlbnRMaXN0IiwiYXV4TGkiLCJhdXhJbmRleCIsInJlbW92ZSIsImFkZCIsImxlZnRDbGFzc2VzIiwicmlnaHRDbGFzc2VzIiwic2xpZGVQcmV2U2VjdGlvbiIsInNsaWRlTmV4dFNlY3Rpb24iLCJzbGlkZSIsImRpcmVjdGlvbiIsInRyYWNrIiwiY2Fyb3VzZWwiLCJ0YXJnZXRFbGVtZW50Iiwib2Zmc2V0IiwidHJhbnNmb3JtIiwiY3VyT2Zmc2V0Iiwib2Zmc2V0V2lkdGgiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwickluZGV4IiwickVsIiwibmV4dFNpYmxpbmciLCJzbGlkZVNlY3Rpb24iLCJuYXZzIiwic2hvd05hdmlnYXRvcnMiLCJuYXYiLCJkaXNwbGF5IiwiY2hlY2tEaXNwbGF5IiwidmlzaWJsZSIsInZpc2liaWxpdHkiLCJkaXNwbGF5ZWQiLCJ1cGRhdGVCcmVhZGN1bWJzIiwiaW5uZXJUZXh0IiwibGV2ZWwiLCJmb3JtYXR0ZWRUZXh0IiwicmVtb3ZlQnJlYWRjdW1iIiwidW5kZWZpbmVkIiwicG9wIiwic2VjdGlvbklkIiwicmVzdCIsIm9wZW5VcmwiLCJvcGVuQmxhbmsiLCJnb1RvQWN0aXZpdHkiLCJuYXZiYXIiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNldEVsZW1lbnRIZWlnaHQiLCJzZXRFbGVtZW50T2Zmc2V0WCIsInN0ckhlaWdodCIsInN0clRvcCIsImF0dHJzIiwia2V5IiwiaGVhZGVyIiwiQXJyYXkiLCJjbHMiLCJlbGVtIiwicHJvcCIsInZhbCIsIkdlbmVyaWNTdHlsZSIsInRoZW1lIiwic3R5bGVzIiwiYmFzaWMiLCJhcHBseSIsImFyZ3VtZW50cyIsInByb3RvdHlwZSIsImJvZHlDbGFzc05hbWUiLCJleHRyYVBsdWdpbnMiLCJja0VkaXRvclN0eWxlcyIsImxheW91dCIsImNhbGwiLCJyZW1vdmVGaW5hbFNsaWRlIiwib3ZlcnJpZGVzIiwiXyIsImV4dGVuZCIsImlzQWRhcHRhdGl2ZSIsInNob3dCb29rSW5kZXhJbkNsYXNzIiwidCIsInRoaXNTdHlsZSIsImN1cnJlbnRTdHlsZSIsInByb2Nlc3NIYXNoIiwiY3Vyc28iLCJ0ZW1hIiwiYWN0aXZpZGFkIiwiZmluZCIsInN1YnVuaXQiLCJyZXNvdXJj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QUFJLE9BQU8xSyxNQUFNLENBQUM0VCxNQUFkLEtBQXlCLFdBQXpCLElBQXdDNVQsTUFBTSxDQUFDNFQsTUFBUCxLQUFrQixFQUExRCxJQUFnRWxKLElBQUksQ0FBQ2xJLEVBQUwsSUFBV3hDLE1BQU0sQ0FBQzRULE1BQXRGLEVBQThGO0FBQzdGTCxZQUFJLEdBQUc3SSxJQUFQO0FBQ0E7QUFDQTtBQUNELEtBckJEOztBQXVCQSxRQUFJLE9BQU82SSxJQUFQLEtBQWdCLFdBQWhCLElBQStCLE9BQU9BLElBQUksQ0FBQ00sTUFBWixLQUF1QixXQUF0RCxJQUFxRU4sSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBZCxJQUFtQixDQUE1RixFQUErRjtBQUM5RixhQUFPLE9BQVA7QUFDQTs7QUFFRCxRQUFJLE9BQU9MLFNBQVMsQ0FBQzFKLG1CQUFqQixLQUF5QyxXQUF6QyxJQUF3RDBKLFNBQVMsQ0FBQzFKLG1CQUF0RSxFQUEyRjtBQUMxRnZGLFVBQUksR0FBRyxXQUFXUSxRQUFRLENBQUN3TyxJQUFJLENBQUNNLE1BQUwsR0FBYyxDQUFmLENBQW5CLEdBQXVDLGNBQTlDO0FBQ0EsS0FGRCxNQUVPO0FBQ050UCxVQUFJLEdBQUcsV0FBV1EsUUFBUSxDQUFDd08sSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBZixDQUFuQixHQUF1QyxjQUE5QztBQUNBOztBQUVELFdBQU90UCxJQUFQO0FBQ0E7QUFyRGlCLENBQW5CO0FBdURlc08sd0VBQWYsRTs7Ozs7Ozs7Ozs7QUMzREE7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJzdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qXG4qICAgQXJyYXkgY29uIGxhIGRlZmluaWNpw7NuIGRlIGxvcyBlc3RpbG9zIHBhcmEgZWwgZWRpdG9yIGRlIENLRWRpdG9yXG4qL1xuXG5jb25zdCBja2VTdHlsZXMgPSBbXG5cdHsgbmFtZTogJ0NhamEgMScsIHR5cGU6ICd3aWRnZXQnLCB3aWRnZXQ6ICdibGlua19ib3gnLCBhdHRyaWJ1dGVzOiB7ICdjbGFzcyc6ICdib3gtMScgfSB9LFxuXHR7IG5hbWU6ICdDYWphIDInLCB0eXBlOiAnd2lkZ2V0Jywgd2lkZ2V0OiAnYmxpbmtfYm94JywgYXR0cmlidXRlczogeyAnY2xhc3MnOiAnYm94LTInIH0gfSxcblx0eyBuYW1lOiAnw4luZmFzaXMnLCBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgJ2NsYXNzJzogJ2Jjay1lbmZhc2lzJyB9fVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2tlU3R5bGVzO1xuIiwiY2xhc3MgTGF5b3V0IHtcblx0Y29uc3RydWN0b3IocGFyZW50KSB7XG5cdFx0Ly8gSWRzXG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnQgOiBkb2N1bWVudC5ib2R5O1xuXHRcdHRoaXMuY291cnNlV3JhcHBlcklkID0gJ2xheW91dC1jb250YWluZXInO1xuXHRcdHRoaXMubWFpblNjcmVlbklkID0gJ21haW4tc2NyZWVuJztcblx0XHR0aGlzLnNlY3Rpb25TY3JlZW5QcmVmaXggPSAnc2VjdGlvbi1zY3JlZW4nO1xuXG5cdFx0dGhpcy5jb3Vyc2VIZWFkZXJJZCA9ICdjb3Vyc2UtaGVhZGVyJztcblx0XHR0aGlzLmNvdXJzZUNvbnRlbnRJZCA9ICdjb3Vyc2UtY29udGVudCc7XG5cblx0XHQvLyBEYXRhXG5cdFx0dGhpcy5jb3Vyc2VJZCA9IHdpbmRvdy5pZGN1cnNvO1xuXHRcdHRoaXMuY291cnNlRGF0YSA9IGJsaW5rLmdldENvdXJzZSh0aGlzLmNvdXJzZUlkLCB0cnVlLCB0cnVlKS5yZXNwb25zZUpTT047XG5cdFx0dGhpcy5hdXhUYWcgPSAndGFiJztcblx0XHR0aGlzLnRvdWNoRW5hYmxlZCA9ICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCAobmF2aWdhdG9yLk1heFRvdWNoUG9pbnRzID4gMCkgfHwgKG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMCkpO1xuXHRcdHRoaXMuaXNBcHAgPSBibGluay5pc0FwcDtcblx0XHR0aGlzLmV2ZW50c01hcCA9IHtcblx0XHRcdGVuZDogdGhpcy50b3VjaEVuYWJsZWQgPyAndG91Y2hlbmQnIDogJ2RyYWdlbmQnLFxuXHRcdFx0bW92ZTogdGhpcy50b3VjaEVuYWJsZWQgPyAndG91Y2htb3ZlJyA6ICdkcmFnJyxcblx0XHRcdHN0YXJ0OiB0aGlzLnRvdWNoRW5hYmxlZCA/ICd0b3VjaHN0YXJ0JyA6ICdkcmFnc3RhcnQnXG5cdFx0fVxuXHRcdGlmICh0ZXh0d2ViKSB7XG5cdFx0XHR0aGlzLnRleHRzID0ge1xuXHRcdFx0XHRnb0JhY2s6IHRleHR3ZWIoJ2xpYnJvRGlnaXRhbF92b2x2ZXInKSxcblx0XHRcdFx0c3R1ZGVudEFyZWE6IHRleHR3ZWIoJ2FicFN0dWRlbnRBcmVhJyksXG5cdFx0XHRcdHRlYWNoZXJBcmVhOiB0ZXh0d2ViKCdhYnBUZWFjaGVyQXJlYScpLFxuXHRcdFx0XHRub1Jlc291cmNlczogdGV4dHdlYignYWJwTm9SZXNvdXJjZXMnKSxcblx0XHRcdFx0dW5pdENvbnRlbnQ6IHRleHR3ZWIoJ2NvdXJzZV91bml0X2FjdGl2aXRpZXMnKSxcblx0XHRcdFx0cmVzb3VyY2VzOiB0ZXh0d2ViKCdjb3Vyc2Vfc3VwcGxlbWVudF9jb250ZW50JyksXG5cdFx0XHRcdHBhZ3M6IHRleHR3ZWIoJ2NvdXJzZV9hYnJldl9wYWcnKVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBCcmVhZGN1bWJzXG5cdFx0aWYgKCF0aGlzLmlzQXBwKSB7XG5cdFx0XHR0aGlzLmJyZWFkY3VtYnNDb250YWluZXI7XG5cdFx0XHR0aGlzLmJyZWFkY3VtYnMgPSBbdGhpcy5jb3Vyc2VEYXRhLnRpdGxlXTtcblx0XHR9XG5cblx0XHQvLyBTdG9yYWdlXG5cdFx0dGhpcy5zZWN0aW9uRGF0YSA9IHtcblx0XHRcdHNlY3Rpb25zOiBbXSxcblx0XHRcdG5hdmlnYXRvcnM6IHtcblx0XHRcdFx0bGVmdDogbnVsbCxcblx0XHRcdFx0cmlnaHQ6IG51bGxcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zbGlkZXIgPSB7fTtcblx0XHR0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9IDA7XG5cblx0XHQvLyBCaW5kaW5nc1xuXHRcdHRoaXMuX3Jlc2l6ZUNvbnRhaW5lciA9IHRoaXMucmVzaXplQ29udGFpbmVyLmJpbmQodGhpcyk7XG5cblx0XHQvLyBFbGVtZW50c1xuXHRcdGxldCBsYXlvdXRDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdGxheW91dENvbnRhaW5lci5pZCA9IHRoaXMuY291cnNlV3JhcHBlcklkO1xuXG5cdFx0Ly8gV29ya2Fyb3VuZCBmb3IgZ2l0aHViXG5cdFx0aWYgKHRoaXMuY291cnNlRGF0YSAmJiAhdGhpcy5jb3Vyc2VEYXRhLnBvcnRhZGEpIHtcblx0XHRcdHRoaXMuY291cnNlRGF0YS5wb3J0YWRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh0aGlzLmNvdXJzZURhdGEudXJsKS5nZXQoJ2lkY2xhc2UnKTtcblx0XHR9XG5cblx0XHR0aGlzLmxheW91dENvbnRhaW5lciA9IGxheW91dENvbnRhaW5lcjtcblx0XHR0aGlzLnByZXBhcmVMYXlvdXREYXRhKCk7XG5cdH1cblx0aW5pdCgpIHtcblx0XHRsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXdyYXBwZXInKSxcblx0XHRcdHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKSxcblx0XHRcdHNsaWRlckNvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLWNvbnRyb2wnKSxcblx0XHRcdG5hdmJhckJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItYm90dG9tJyk7XG5cblx0XHR0aGlzLmxheW91dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicgKyB0aGlzLmNvdXJzZURhdGEuaW1hZ2UgKyAnXCIpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOycpO1xuXHRcdHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLmxheW91dENvbnRhaW5lciwgdGhpcy5wYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXG5cdFx0YmxpbmsuZXZlbnRzLm9uY2UoJ2luZGV4TG9hZGVkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVBdXhVbml0KCk7XG5cdFx0fSk7XG5cblx0XHQvLyAxLiBDaG9vc2UgbGF5b3V0IG9wdGlvbi5cblx0XHRpZiAod2luZG93LmlkY2xhc2UgJiYgd2luZG93LmlkY2xhc2UgIT0gdGhpcy5jb3Vyc2VEYXRhLnBvcnRhZGEpIHtcblxuXHRcdFx0Ly8gMS4xLiBCbGluayBXYXkuIEZvciBhY3Rpdml0aWVzLlxuXG5cdFx0XHQvLyAxLjEuMS4gR29iYWNrXG5cdFx0XHRsZXQgZ29CYWNrV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2dvLWJhY2snKSxcblx0XHRcdFx0Z29CYWNrQnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KCdCVVRUT04nLCBbJ2J0bicsICdidG4tZ28tYmFjayddKVxuXG5cdFx0XHRnb0JhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZWRpcmVjY2lvbmFyKHRoaXMuY291cnNlRGF0YS51cmwpKTtcblx0XHRcdGdvQmFja0J1dHRvbi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCAnJywgdGhpcy50ZXh0cy5nb0JhY2spKTtcblx0XHRcdGdvQmFja1dyYXBwZXIuYXBwZW5kKGdvQmFja0J1dHRvbik7XG5cblx0XHRcdHNsaWRlckNvbnRyb2wuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU3R5bGUoc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9c3dpcGV2aWV3LW1hc3RlcnBhZ2UtXSAuanMtc2xpZGVyLWl0ZW0nKSwgJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGV2aWV3LWZsaXAnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU3R5bGUoc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9c3dpcGV2aWV3LW1hc3RlcnBhZ2UtXS5zd2lwZXZpZXctYWN0aXZlIC5qcy1zbGlkZXItaXRlbScpLCAnb3ZlcmZsb3cnLCAnYXV0bycpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5jaGFuZ2VTdHlsZShjb250ZW50LCAnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoXCInICsgdGhpcy5jb3Vyc2VEYXRhLmltYWdlICsgJ1wiKScpO1xuXHRcdFx0dGhpcy5jaGFuZ2VTdHlsZShjb250ZW50LCAnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XG5cdFx0XHRjb250ZW50Lmluc2VydEJlZm9yZShnb0JhY2tXcmFwcGVyLCBjb250ZW50LmZpcnN0RWxlbWVudENoaWxkKTtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyAxLjIuIFN0eWxlIFdheS5cblx0XHRcdGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuXG5cdFx0XHQvLyAxLjIuMSBNYW5hZ2Ugb2xkIERPTSBlbGVtZW50cy5cblx0XHRcdHRoaXMuaGlkZUVsZW0oY29udGVudCk7XG5cdFx0XHR0aGlzLmhpZGVFbGVtKG5hdmJhckJvdHRvbSk7XG5cdFx0XHRzbGlkZXJDb250cm9sLmZvckVhY2goKGVsKSA9PiB0aGlzLmhpZGVFbGVtKGVsKSk7XG5cblx0XHRcdGlmICghdGhpcy5pc0FwcCkge1xuXHRcdFx0XHR0aGlzLmJyZWFkY3VtYnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLmxpYnJvIC5saWJyby1sZWZ0IHNwYW4udGl0bGUnKTtcblx0XHRcdFx0dGhpcy5oaWRlRWxlbSh0aGlzLmJyZWFkY3VtYnNDb250YWluZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAxLjIuMiBDcmVhdGUgc2VjdGlvbiBhcnJvd3MuXG5cdFx0XHR0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnMgPSB0aGlzLmdlbmVyYXRlTmF2aWdhdG9ycygpO1xuXHRcdFx0dGhpcy5sYXlvdXRDb250YWluZXIuYXBwZW5kKHRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9yc1snbGVmdCddLCB0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnNbJ3JpZ2h0J10pO1xuXHRcdFx0dGhpcy5oaWRlTmF2aWdhdG9ycygpO1xuXG5cdFx0XHQvLyAxLjIuMy4gUHJpbnQgdGFyZ2V0IHNjcmVlbi5cblx0XHRcdGlmIChoYXNoLm1hdGNoKC91bml0X1xcZHsxLDJ9Xy9nKSAhPSBudWxsKSB7XG5cdFx0XHRcdGxldCBpbmRleCA9IHBhcnNlSW50KGhhc2gubWF0Y2goL1xcZHsxLDJ9L2cpWzBdKSxcblx0XHRcdFx0XHR0YWIgPSBoYXNoLnN1YnN0cmluZyhoYXNoLmxhc3RJbmRleE9mKCdfJykrMSk7XG5cblx0XHRcdFx0dGhpcy5pbml0U2VjdGlvbihpbmRleCwgdGFiKTtcblx0XHRcdH0gZWxzZSBpZiAoaGFzaC5tYXRjaCgvaG9tZS9nKSAhPSBudWxsKXtcblx0XHRcdFx0dGhpcy5pbml0SG9tZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbml0SG9tZSgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLnJlc2l6ZUNvbnRhaW5lcigpO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemVDb250YWluZXIpO1xuXHR9XG5cdGluaXRIb21lKCkge1xuXHRcdHRoaXMuaGlkZU5hdmlnYXRvcnMoKTtcblx0XHR0aGlzLnJlc2V0QnJlYWRjdW1icygpO1xuXG5cdFx0Ly8gMS4gTWFpbiBzY3JlZW4gY3JlYXRpb24uXG5cdFx0dGhpcy5tYWluU2NyZWVuID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnbWFpbi1zY3JlZW4nKTtcblx0XHR0aGlzLm1haW5TY3JlZW4uaWQgPSB0aGlzLm1haW5TY3JlZW5JZDtcblxuXHRcdHRoaXMubGF5b3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWFpblNjcmVlbik7XG5cblx0XHQvLyAyLiBDcmVhdGUgSGVhZGVyLlxuXHRcdGxldCBjb3Vyc2VIZWFkZXIgPSB0aGlzLmdlbmVyYXRlSGVhZGVyKCk7XG5cblx0XHQvLyAzLiBDcmVhdGUgQ291cnNlIGNvbnRlbnQuXG5cdFx0bGV0IGNvdXJzZUNvbnRlbnQgPSB0aGlzLmdlbmVyYXRlQ29udGVudCgpO1xuXG5cdFx0dGhpcy5tYWluU2NyZWVuLmFwcGVuZChjb3Vyc2VIZWFkZXIsIGNvdXJzZUNvbnRlbnQpO1xuXHR9XG5cdGluaXRTZWN0aW9uKGluZGV4LCB0YWIpIHtcblx0XHRpZiAoIWluZGV4ICYmIHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGFsZXJ0KCdObyBpbmRleCBwcm92aWRlZCcpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvLyAwLiBIaWRlIG1haW4gc2NyZWVuIChpZiBleGlzdHMpLlxuXHRcdHRoaXMubWFpblNjcmVlbiAmJiB0eXBlb2YgdGhpcy5tYWluU2NyZWVuICE9PSBcInVuZGVmaW5lZFwiICYmIHRoaXMuaGlkZU1haW5TY3JlZW4oKTtcblxuXHRcdC8vIDAuMS4gTmF2aWdhdGlvbiBhcnJvd3MuXG5cdFx0dGhpcy50b2dnbGVOYXZpZ2F0b3JzKGluZGV4KTtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYWxyZWFkeSBhIHNlY3Rpb24gc2NyZWVuIGZvciB0aGlzIGluZGV4LCB3ZSBqdXN0IHNob3cgaXQuXG5cdFx0aWYgKHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbnNbaW5kZXhdICYmIHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbnNbaW5kZXhdICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR0aGlzLnNob3dTZWN0aW9uKGluZGV4KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdGFiQ2xpY2tIYW5kbGVyID0gKGUpID0+IHtcblx0XHRcdGxldCBjdXJyZW50U2VjdGlvbiA9IHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbnNbdGhpcy5jdXJyZW50U2VjdGlvbl0sXG5cdFx0XHRcdHRhcmdldCA9IGUuY3VycmVudFRhcmdldCxcblx0XHRcdFx0dGFyZ2V0VGFiID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcblxuXHRcdFx0dGhpcy5yZW1vdmVDbGFzc2VzKGN1cnJlbnRTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy50YWIuYWN0aXZlJyksICdhY3RpdmUnKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3NlcyhjdXJyZW50U2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29udGVudC5hY3RpdmUnKSwgJ2FjdGl2ZScpO1xuXHRcdFx0dGhpcy5hZGRDbGFzc2VzKHRhcmdldCwgJ2FjdGl2ZScpO1xuXHRcdFx0dGhpcy5hZGRDbGFzc2VzKGN1cnJlbnRTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGFyZ2V0VGFiICsgJy1jb250ZW50JyksICdhY3RpdmUnKTtcblx0XHR9XG5cdFx0Y29uc3QgZ29CYWNrQ2xpY2tIYW5kbGVyID0gKGUpID0+IHtcblx0XHRcdGlmICghdGhpcy5tYWluU2NyZWVuIHx8IHR5cGVvZiB0aGlzLm1haW5TY3JlZW4gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRoaXMuaW5pdEhvbWUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2hvd01haW5TY3JlZW4oKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGlkZVNlY3Rpb24oaW5kZXgpO1xuXHRcdH1cblx0XHRjb25zdCBzZXBhcmF0b3IgPSAodGV4dCkgPT4ge1xuXHRcdFx0bGV0IHdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsnc2VwYXJhdG9yJ10pO1xuXHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XG5cblx0XHRcdHJldHVybiB3cmFwcGVyO1xuXHRcdH1cblxuXHRcdGxldCBkYXRhID0gdGhpcy5jb3Vyc2VEYXRhLnVuaXRzW2luZGV4XSxcblx0XHRcdHNlY3Rpb25TY3JlZW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzZWN0aW9uLXNjcmVlbicpO1xuXHRcdHNlY3Rpb25TY3JlZW4uaWQgPSB0aGlzLnNlY3Rpb25TY3JlZW5QcmVmaXggKyAnLScgKyBpbmRleDtcblxuXHRcdC8vIDAuMi4gQ2hhbmdlIGJyZWFkY3VtYnMuXG5cdFx0dGhpcy5hZGRCcmVhZGN1bWIoZGF0YS50aXRsZSwgMSk7XG5cblx0XHQvLyAxLiBHb2JhY2tcblx0XHRsZXQgZ29CYWNrV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2dvLWJhY2snKSxcblx0XHRcdGdvQmFja0J1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnQlVUVE9OJywgWydidG4nLCAnYnRuLWdvLWJhY2snXSk7XG5cblx0XHRnb0JhY2tCdXR0b24ub25jbGljayA9IGdvQmFja0NsaWNrSGFuZGxlcjtcblx0XHRnb0JhY2tCdXR0b24uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJywgJycsIHRoaXMudGV4dHMuZ29CYWNrKSk7XG5cdFx0Z29CYWNrV3JhcHBlci5hcHBlbmQoZ29CYWNrQnV0dG9uKTtcblxuXHRcdC8vIDIuIFNlY3Rpb24uXG5cdFx0bGV0IHNlY3Rpb25XcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2VjdGlvbicpO1xuXG5cdFx0Ly8gMi4xLiBTZWN0aW9uIERhdGFcblx0XHRsZXQgc2VjdGlvbkRhdGEgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzZWN0aW9uLWRhdGEnKTtcblxuXHRcdC8vIDIuMS4xLiBTZWN0aW9uIHRpdGxlXG5cdFx0bGV0IHNlY3Rpb25UaXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tdGl0bGUnKTtcblx0XHRzZWN0aW9uVGl0bGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVIZWFkZXIoMSwgJycsIGRhdGEudGl0bGUpKTtcblx0XHRcblx0XHQvLyAyLjEuMi4gU2VjdGlvbiBkZXNjXG5cdFx0bGV0IGRlc2NXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnZGVzYy13cmFwcGVyJyksXG5cdFx0XHRzZWN0aW9uRGVzYyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tZGVzYycpLFxuXHRcdFx0c2VjdGlvbk51bWJlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tbnVtYmVyJyk7XG5cblx0XHRkZXNjV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicgKyBkYXRhLmltYWdlICsgJ1wiKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsnKTtcblx0XHRzZWN0aW9uTnVtYmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsICcnLCBpbmRleC50b1N0cmluZygpLmxlbmd0aCA9PSAxID8gJzAnICsgaW5kZXggOiBpbmRleCkpO1xuXG5cdFx0c2VjdGlvbkRlc2MuYXBwZW5kKHRoaXMuY3JlYXRlSGVhZGVyKDIsICcnLCBkYXRhLmRlc2NyaXB0aW9uKSwgc2VjdGlvbk51bWJlcik7XG5cdFx0XG5cdFx0ZGVzY1dyYXBwZXIuYXBwZW5kKHNlY3Rpb25EZXNjKTtcblxuXHRcdHNlY3Rpb25EYXRhLmFwcGVuZChzZWN0aW9uVGl0bGUsIGRlc2NXcmFwcGVyKTtcblxuXHRcdC8vIDIuMi4gU2VjdGlvbiBDb250ZW50LlxuXHRcdGxldCBzZWN0aW9uQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tY29udGVudCcpO1xuXG5cdFx0Ly8gMi4yLjEgVGFicyB3cmFwZXByLlxuXHRcdGxldCB0YWJzV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3RhYnMnKSxcblx0XHRcdHN0dWRlbnRUYWIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICd0YWInKSxcblx0XHRcdHRlYWNoZXJUYWIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICd0YWInKTtcblxuXHRcdHN0dWRlbnRUYWIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVIZWFkZXIoMiwgJycsIHRoaXMudGV4dHMuc3R1ZGVudEFyZWEpKTtcblx0XHR0ZWFjaGVyVGFiLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSGVhZGVyKDIsICcnLCB0aGlzLnRleHRzLnRlYWNoZXJBcmVhKSk7XG5cdFx0XG5cdFx0c3R1ZGVudFRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJ3N0dWRlbnQnKTtcblx0XHR0ZWFjaGVyVGFiLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAndGVhY2hlcicpO1xuXG5cdFx0c3R1ZGVudFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYkNsaWNrSGFuZGxlcik7XG5cdFx0dGVhY2hlclRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYkNsaWNrSGFuZGxlcik7XG5cblx0XHR0YWJzV3JhcHBlci5hcHBlbmQoc3R1ZGVudFRhYiwgdGVhY2hlclRhYik7XG5cblx0XHQvLyAyLjIuMiBUYWJzIGNvbnRlbnQuXG5cdFx0bGV0IHRhYnNDb250ZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAndGFicy1jb250ZW50JyksXG5cdFx0XHRzdHVkZW50Q29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgWydjb250ZW50JywgJ3N0dWRlbnQtY29udGVudCddKSxcblx0XHRcdHRlYWNoZXJDb250ZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCBbJ2NvbnRlbnQnLCAndGVhY2hlci1jb250ZW50J10pLFxuXHRcdFx0c3R1ZGVudFdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICd1bml0LXdyYXBwZXInKSxcblx0XHRcdHRlYWNoZXJXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAndW5pdC13cmFwcGVyJyksXG5cdFx0XHRzdHVkZW50VW5pdENvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgWyd1bml0LWNvbnRlbnQnXSksXG5cdFx0XHRzdHVkZW50UmVzb3VyY2VDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsncmVzb3VyY2VzLWNvbnRlbnQnXSksXG5cdFx0XHR0ZWFjaGVyVW5pdENvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgWyd1bml0LWNvbnRlbnQnXSksXG5cdFx0XHR0ZWFjaGVyUmVzb3VyY2VDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsncmVzb3VyY2VzLWNvbnRlbnQnXSksXG5cdFx0XHRub1Jlc291cmNlc1dyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0gyJywgJ25vLXJlc291cmNlcycsIHRoaXMudGV4dHMubm9SZXNvdXJjZXMpLFxuXHRcdFx0Y29tYmluZWQgPSBkYXRhLnN1YnVuaXRzLmNvbmNhdChkYXRhLnJlc291cmNlcyk7XG5cblx0XHR0aGlzLmhpZGVFbGVtKHN0dWRlbnRVbml0Q29udGFpbmVyKS5hcHBlbmRDaGlsZChzZXBhcmF0b3IodGhpcy50ZXh0cy51bml0Q29udGVudCkpO1xuXHRcdHRoaXMuaGlkZUVsZW0oc3R1ZGVudFJlc291cmNlQ29udGFpbmVyKS5hcHBlbmRDaGlsZChzZXBhcmF0b3IodGhpcy50ZXh0cy5yZXNvdXJjZXMpKTtcblx0XHR0aGlzLmhpZGVFbGVtKHRlYWNoZXJVbml0Q29udGFpbmVyKS5hcHBlbmRDaGlsZChzZXBhcmF0b3IodGhpcy50ZXh0cy51bml0Q29udGVudCkpO1xuXHRcdHRoaXMuaGlkZUVsZW0odGVhY2hlclJlc291cmNlQ29udGFpbmVyKS5hcHBlbmRDaGlsZChzZXBhcmF0b3IodGhpcy50ZXh0cy5yZXNvdXJjZXMpKTtcblxuXHRcdHN3aXRjaCAodGFiKSB7XG5cdFx0XHRjYXNlICd0ZWFjaGVyYXJlYSc6XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3Nlcyh0ZWFjaGVyVGFiLCAnYWN0aXZlJyk7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3Nlcyh0ZWFjaGVyQ29udGVudCwgJ2FjdGl2ZScpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3NlcyhzdHVkZW50VGFiLCAnYWN0aXZlJyk7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3NlcyhzdHVkZW50Q29udGVudCwgJ2FjdGl2ZScpO1xuXHRcdH1cblxuXHRcdGNvbWJpbmVkLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRsZXQgaXNSZXNvdXJjZSA9IGRhdGEucmVzb3VyY2VzLmNvbnRhaW5zKGVsKSxcblx0XHRcdFx0ZWxXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnY29udGVudC1pdGVtJyksXG5cdFx0XHRcdGVsSW1nID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCBbJ2NvbnRlbnQtaW1nJywgJ3R5cGUtJyArIGVsLnR5cGVJbnQsIGVsLnR5cGVdKSxcblx0XHRcdFx0ZWxUaXRsZVdyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdjb250ZW50LXRpdGxlJyksXG5cdFx0XHRcdGVsVGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCBudWxsLCBlbC50aXRsZSksXG5cdFx0XHRcdHRhcmdldFdyYXBwZXI7XG5cblx0XHRcdC8vIDIuMi4yLjEuIFRpdGxlIGNyZWF0aW9uLlxuXHRcdFx0ZWxUaXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxUaXRsZSk7XG5cdFx0XHRcblx0XHRcdGVsV3JhcHBlci5hcHBlbmQoZWxJbWcsIGVsVGl0bGVXcmFwcGVyKTtcblxuXHRcdFx0Ly8gMi4yLjIuMi4gQnV0dG9uIGNyZWF0aW9uXG5cdFx0XHRpZiAoIWlzUmVzb3VyY2UpIHtcblx0XHRcdFx0bGV0IGVsQnV0dG9ucyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2NvbnRlbnQtYnV0dG9ucycpLFxuXHRcdFx0XHRcdGVsTG9jayA9IHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsICdjb250ZW50LWxvY2snKSxcblx0XHRcdFx0XHRlbFBhZ2VDb3VudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsICdjb250ZW50LXBhZ2UtY291bnQnKSxcblx0XHRcdFx0XHRwYWdlQ291bnRUeHQgPSBlbC5wYWdzID8gZWwucGFncyArICcgJyArIHRoaXMudGV4dHMucGFncy5yZXBsYWNlKCcuJywgZWwucGFncyA+IDEgPyAncy4nIDogJy4nKSA6ICcnO1xuXG5cdFx0XHRcdGVsTG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRsZXQgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LFxuXHRcdFx0XHRcdFx0bG9ja0NsYXNzID0gJ2xvY2tlZCc7XG5cdFx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhsb2NrQ2xhc3MpID8gdGhpcy5yZW1vdmVDbGFzc2VzKHRhcmdldCwgbG9ja0NsYXNzKSA6IHRoaXMuYWRkQ2xhc3Nlcyh0YXJnZXQsIGxvY2tDbGFzcyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGVsUGFnZUNvdW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhZ2VDb3VudFR4dCkpO1xuXG5cdFx0XHRcdGVsQnV0dG9ucy5hcHBlbmQoZWxMb2NrLCBlbFBhZ2VDb3VudCk7XG5cblx0XHRcdFx0ZWxXcmFwcGVyLmFwcGVuZENoaWxkKGVsQnV0dG9ucyk7XG5cdFx0XHR9XG5cblx0XHRcdGVsLm9uY2xpY2tUaXRsZSA/XG5cdFx0XHRcdGVsV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ29uY2xpY2snLCBlbC5vbmNsaWNrVGl0bGUpIDpcblx0XHRcdFx0ZWxXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQWN0aXZpdHkoZWwudXJsLCBkYXRhLmlkLCBlbC50eXBlKSk7XG5cblx0XHRcdGlmIChlbC5vbmx5VmlzaWJsZVRlYWNoZXJzKSB7XG5cdFx0XHRcdGxldCBlbENpcmNsZU91dGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnY2lyY2xlLW91dGVyJyksXG5cdFx0XHRcdFx0ZWxDaXJjbGVJbm5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2NpcmNsZS1pbm5lcicpO1xuXG5cdFx0XHRcdGVsV3JhcHBlci5pbnNlcnRCZWZvcmUoZWxDaXJjbGVPdXRlciwgZWxJbWcpO1xuXHRcdFx0XHRlbFdyYXBwZXIuaW5zZXJ0QmVmb3JlKGVsQ2lyY2xlSW5uZXIsIGVsSW1nKTtcblxuXHRcdFx0XHR0YXJnZXRXcmFwcGVyID0gaXNSZXNvdXJjZSA/IHRlYWNoZXJSZXNvdXJjZUNvbnRhaW5lciA6IHRlYWNoZXJVbml0Q29udGFpbmVyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gMi4yLjIuMS4gSW1hZ2UgY3JlYXRpb24uXG5cdFx0XHRcdHRoaXMuY2hhbmdlU3R5bGUoZWxJbWcsICdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgZWwuaW1hZ2UgKyAnKScpO1xuXG5cdFx0XHRcdHRhcmdldFdyYXBwZXIgPSBpc1Jlc291cmNlID8gc3R1ZGVudFJlc291cmNlQ29udGFpbmVyIDogc3R1ZGVudFVuaXRDb250YWluZXI7XG5cdFx0XHR9XG5cblx0XHRcdHRhcmdldFdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxXcmFwcGVyKTtcblx0XHRcdHRoaXMuaXNIaWRkZW4odGFyZ2V0V3JhcHBlciwgdHJ1ZSkgJiYgdGhpcy5zaG93RWxlbSh0YXJnZXRXcmFwcGVyKTtcblx0XHR9KTtcblxuXHRcdGlmICh0ZWFjaGVyUmVzb3VyY2VDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPT0gMSAmJiB0ZWFjaGVyVW5pdENvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA9PSAxKSB7XG5cdFx0XHR0ZWFjaGVyV3JhcHBlci5hcHBlbmQobm9SZXNvdXJjZXNXcmFwcGVyLmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRlYWNoZXJXcmFwcGVyLmFwcGVuZCh0ZWFjaGVyVW5pdENvbnRhaW5lciwgdGVhY2hlclJlc291cmNlQ29udGFpbmVyKTtcblx0XHR9XG5cblx0XHRpZiAoc3R1ZGVudFJlc291cmNlQ29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID09IDEgJiYgc3R1ZGVudFVuaXRDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPT0gMSkge1xuXHRcdFx0c3R1ZGVudFdyYXBwZXIuYXBwZW5kKG5vUmVzb3VyY2VzV3JhcHBlci5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHVkZW50V3JhcHBlci5hcHBlbmQoc3R1ZGVudFVuaXRDb250YWluZXIsIHN0dWRlbnRSZXNvdXJjZUNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0c3R1ZGVudENvbnRlbnQuYXBwZW5kKHN0dWRlbnRXcmFwcGVyKTtcblx0XHR0ZWFjaGVyQ29udGVudC5hcHBlbmQodGVhY2hlcldyYXBwZXIpO1xuXG5cdFx0dGFic0NvbnRlbnQuYXBwZW5kKHN0dWRlbnRDb250ZW50LCB0ZWFjaGVyQ29udGVudCk7XG5cblx0XHRzZWN0aW9uQ29udGVudC5hcHBlbmQodGFic1dyYXBwZXIsIHRhYnNDb250ZW50KTtcblxuXHRcdHNlY3Rpb25XcmFwcGVyLmFwcGVuZChzZWN0aW9uRGF0YSwgc2VjdGlvbkNvbnRlbnQpO1xuXG5cdFx0Ly8gMy4gRmFrZSBwYWRkaW5nLlxuXHRcdGxldCBmYWtlUGFkZGluZyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XG5cdFx0c2VjdGlvblNjcmVlbi5hcHBlbmQoZ29CYWNrV3JhcHBlciwgc2VjdGlvbldyYXBwZXIsIGZha2VQYWRkaW5nKTtcblx0XHRcblx0XHR0aGlzLmN1cnJlbnRTZWN0aW9uID0gaW5kZXg7XG5cdFx0dGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uc1tpbmRleF0gPSBzZWN0aW9uU2NyZWVuO1xuXHRcdHRoaXMubGF5b3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25TY3JlZW4pO1xuXHR9XG5cdHByZXBhcmVMYXlvdXREYXRhKCkge1xuXHRcdGxldCBsYXlvdXREYXRhID0ge1xuXHRcdFx0YXV4QWN0aXZpdGllczogW10sXG5cdFx0XHRhdXhVbml0OiB7fSxcblx0XHRcdHVuaXRzRGF0YTogW11cblx0XHR9O1xuXHRcdGxldCBhdXhUYWcgPSB0aGlzLmF1eFRhZztcblxuXHRcdHRoaXMuY291cnNlRGF0YS51bml0cy5mb3JFYWNoKCh1bml0LCBpVW5pdCkgPT4ge1xuXHRcdFx0aWYgKHVuaXQudGFncyAmJiB1bml0LnRhZ3MuaW5kZXhPZihhdXhUYWcpICE9IC0xKSB7XG5cdFx0XHRcdGxheW91dERhdGEuYXV4VW5pdCA9IHVuaXQ7XG5cdFx0XHR9XG5cdFx0XHR1bml0LnN1YnVuaXRzLmZvckVhY2goKGFjdGl2aXR5KSA9PiB7XG5cdFx0XHRcdGxldCB0YWdPcmlnaW4gPSBhY3Rpdml0eS50YWdzID8gYWN0aXZpdHkudGFncyA6IGFjdGl2aXR5LnRhZztcblxuXHRcdFx0XHRpZiAodGFnT3JpZ2luICYmIHRhZ09yaWdpbi5pbmRleE9mKGF1eFRhZykgIT0gLTEpIHtcblx0XHRcdFx0XHRsYXlvdXREYXRhWydhdXhBY3Rpdml0aWVzJ10ucHVzaChhY3Rpdml0eSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaVVuaXQgPT0gMCAmJiBhY3Rpdml0eS5pZCAhPSB0aGlzLmNvdXJzZURhdGEucG9ydGFkYSkge1xuXHRcdFx0XHRcdGxheW91dERhdGFbJ2F1eEFjdGl2aXRpZXMnXS5wdXNoKGFjdGl2aXR5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIGF1eFVuaXQsIHdlIHRha2UgdGhlIGZpcnN0IG9uZSBhcyBhdXguXG5cdFx0KE9iamVjdC5rZXlzKGxheW91dERhdGEuYXV4VW5pdCkubGVuZ3RoID09PSAwICYmIGxheW91dERhdGEuYXV4VW5pdC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSAmJiAobGF5b3V0RGF0YS5hdXhVbml0ID0gdGhpcy5jb3Vyc2VEYXRhLnVuaXRzWzBdKVxuXG5cdFx0dGhpcy5sYXlvdXREYXRhID0gbGF5b3V0RGF0YTtcblx0fVxuXHRnZW5lcmF0ZUhlYWRlcigpIHtcblx0XHRsZXQgY291cnNlSGVhZGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnKTtcblx0XHRjb3Vyc2VIZWFkZXIuaWQgPSB0aGlzLmNvdXJzZUhlYWRlcklkO1xuXG5cdFx0Ly8gMS4xLiBDcmVhdGUgdGl0bGVcblx0XHRsZXQgdGl0bGVXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnY291cnNlLXRpdGxlJyk7XG5cdFx0bGV0IHRpdGxlID0gdGhpcy5jcmVhdGVIZWFkZXIoMSwgJycsIHRoaXMuY291cnNlRGF0YS50aXRsZSk7XG5cdFx0bGV0IHN1YnRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJywgJycsIHRoaXMuY291cnNlRGF0YS5kZXNjcmlwdGlvbik7XG5cblx0XHR0aXRsZVdyYXBwZXIuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSk7XG5cblx0XHQvLyAxLjIuIENyZWF0ZSBleHRyYSB3cmFwcGVyLlxuXG5cdFx0bGV0IGV4dHJhV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ2NvdXJzZS1leHRyYScpO1xuXHRcdGxldCBleHRyYUxpc3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1VMJyk7XG5cblx0XHR0aGlzLmxheW91dERhdGEuYXV4QWN0aXZpdGllcy5mb3JFYWNoKGZ1bmN0aW9uKGEsIGkpIHtcblx0XHRcdGxldCB3cmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdMSScpO1xuXHRcdFx0bGV0IGFuY2hvciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnQScpO1xuXHRcdFx0bGV0IHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJywgJycsIGEudGl0bGUpO1xuXG5cdFx0XHRhbmNob3IuaHJlZiA9ICdqYXZhc2NyaXB0OnZvaWQoMCknO1xuXHRcdFx0YW5jaG9yLnNldEF0dHJpYnV0ZSgnb25jbGljaycsIGEub25jbGlja1RpdGxlKTtcblx0XHRcdGFuY2hvci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblx0XHRcdHdyYXBwZXIuaWQgPSAndGFicy1pdGVtJyArIGk7XG5cblx0XHRcdGV4dHJhTGlzdC5hcHBlbmRDaGlsZCh3cmFwcGVyKS5hcHBlbmRDaGlsZChhbmNob3IpO1xuXHRcdH0sIHRoaXMpO1xuXHRcdGV4dHJhV3JhcHBlci5hcHBlbmRDaGlsZChleHRyYUxpc3QpO1xuXG5cdFx0Ly8gMS4zIEFwcGVuZCBib3RoIGVsZW1lbnRzLlxuXHRcdGNvdXJzZUhlYWRlci5hcHBlbmQodGl0bGVXcmFwcGVyLCBleHRyYVdyYXBwZXIpO1xuXG5cdFx0cmV0dXJuIGNvdXJzZUhlYWRlcjtcblx0fVxuXHRnZW5lcmF0ZUNvbnRlbnQoKSB7XG5cdFx0bGV0IGNvdXJzZUNvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdjb3Vyc2UtY29udGVudCcpO1xuXHRcdGNvdXJzZUNvbnRlbnQuaWQgPSB0aGlzLmNvdXJzZUNvbnRlbnRJZDtcblxuXHRcdGxldCBhdXhUYWcgPSB0aGlzLmF1eFRhZztcblxuXHRcdC8vIDIuMS4gV3JhcHBlclxuXHRcdGxldCBzbGlkZXJXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2xpZGVyLXdyYXBwZXInKTtcblxuXHRcdC8vIDIuMi4gQ29udHJvbHNcblx0XHRsZXQgc2xpZGVyQ29udHJvbExlZnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIFsnc2xpZGVyLW5hdmNvbnRyb2wnLCAnc2xpZGVyLW5hdmNvbnRyb2wtbGVmdCddKTtcblx0XHRsZXQgc2xpZGVyQ29udHJvbFJpZ2h0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCBbJ3NsaWRlci1uYXZjb250cm9sJywgJ3NsaWRlci1uYXZjb250cm9sLXJpZ2h0J10pO1xuXHRcdGxldCBzbGlkZXJDb250cm9sTGVmdEFycm93ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJyk7XG5cdFx0bGV0IHNsaWRlckNvbnRyb2xSaWdodEFycm93ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJyk7XG5cdFx0bGV0IGFycm93TGVmdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnSScsIFsnZmEnLCAnZmEtYW5nbGUtbGVmdCddKTtcblx0XHRsZXQgYXJyb3dSaWdodCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnSScsIFsnZmEnLCAnZmEtYW5nbGUtcmlnaHQnXSk7XG5cblx0XHRhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNsaWRlTGVmdCgpKTtcblx0XHRhcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zbGlkZVJpZ2h0KCkpO1xuXG5cdFx0Ly8gV2UgaGlkZSB0aGUgbGVmdCBjb250cm9sIGFycm93IGF0IHN0YXJ0dXAuXG5cdFx0dGhpcy5oaWRlRWxlbShzbGlkZXJDb250cm9sTGVmdCwgdHJ1ZSkuYXBwZW5kQ2hpbGQoc2xpZGVyQ29udHJvbExlZnRBcnJvdykuYXBwZW5kQ2hpbGQoYXJyb3dMZWZ0KTtcblx0XHRzbGlkZXJDb250cm9sUmlnaHQuYXBwZW5kQ2hpbGQoc2xpZGVyQ29udHJvbFJpZ2h0QXJyb3cpLmFwcGVuZENoaWxkKGFycm93UmlnaHQpO1xuXG5cdFx0Ly8gMi4zLiBUcmFja1xuXHRcdGxldCBzbGlkZXJUcmFjayA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NsaWRlci1pdGVtdHJhY2snKTtcblx0XHRsZXQgc2xpZGVyQ2Fyb3VzZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzbGlkZXItY2Fyb3VzZWwnKTtcblxuXHRcdC8vIDIuNC4gU2xpZGVyIEl0ZW1zLlxuXHRcdHRoaXMuY291cnNlRGF0YS51bml0cy5mb3JFYWNoKGZ1bmN0aW9uKHVuaXQsIGkpIHtcblx0XHRcdGlmICh0aGlzLmxheW91dERhdGEuYXV4VW5pdC5pZCA9PSB1bml0LmlkKSByZXR1cm47XG5cblx0XHRcdGxldCBzbGlkZXJJdGVtID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2xpZGVyLWl0ZW0nKTtcblx0XHRcdHNsaWRlckl0ZW0uaWQgPSAnc2xpZGVyLWl0ZW0tJyArIChpLTEpO1xuXG5cdFx0XHQvLyAyLjQuMCBBbmNob3Igd3JhcHBlclxuXHRcdFx0bGV0IGFuY2hvcldyYXBwZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0EnLCAnJyk7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoYW5jaG9yV3JhcHBlciwge1xuXHRcdFx0XHRocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJyxcblx0XHRcdH0pO1xuXHRcdFx0YW5jaG9yV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy5pbml0U2VjdGlvbihpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyAyLjQuMS4gSXRlbSB0aXRsZVxuXHRcdFx0bGV0IGl0ZW1UaXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgJ3NlY3Rpb24tdGl0bGUnKTtcblx0XHRcdGl0ZW1UaXRsZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUhlYWRlcigzLCAnJywgdW5pdC50aXRsZSkpO1xuXG5cdFx0XHQvLzIuNC4yLiBJdGVtIGltZ1xuXHRcdFx0bGV0IGl0ZW1JbWcgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzZWN0aW9uLWltZycpO1xuXHRcdFx0aXRlbUltZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicgKyB1bml0LmltYWdlICsgJ1wiKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsnKTtcblxuXHRcdFx0Ly8gMi40LjMuIEl0ZW0gRGVzY1xuXHRcdFx0bGV0IGl0ZW1EZXNjID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCAnc2VjdGlvbi1kZXNjJyk7XG5cdFx0XHRpdGVtRGVzYy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUhlYWRlcig0LCAnJywgdW5pdC5kZXNjcmlwdGlvbikpO1xuXG5cblx0XHRcdC8vIDIuNC40LiBJdGVtIE51bWJlclxuXHRcdFx0bGV0IGl0ZW1OdW1iZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzZWN0aW9uLW51bWJlcicpO1xuXHRcdFx0aXRlbU51bWJlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCAnJywgaS50b1N0cmluZygpLmxlbmd0aCA9PSAxID8gJzAnICsgaSA6IGkpKTtcblxuXHRcdFx0c2xpZGVyQ2Fyb3VzZWwuYXBwZW5kQ2hpbGQoc2xpZGVySXRlbSkuYXBwZW5kQ2hpbGQoYW5jaG9yV3JhcHBlcikuYXBwZW5kKGl0ZW1UaXRsZSwgaXRlbUltZywgaXRlbURlc2MsIGl0ZW1OdW1iZXIpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0c2xpZGVyVHJhY2suYXBwZW5kQ2hpbGQoc2xpZGVyQ2Fyb3VzZWwpO1xuXG5cdFx0c2xpZGVyV3JhcHBlci5hcHBlbmQoc2xpZGVyQ29udHJvbExlZnQsIHNsaWRlclRyYWNrLCBzbGlkZXJDb250cm9sUmlnaHQpO1xuXG5cdFx0Y291cnNlQ29udGVudC5hcHBlbmRDaGlsZChzbGlkZXJXcmFwcGVyKTtcblxuXHRcdC8vIDIuNS4gRHJhZyBzbGlkZSBoYW5kbGluZy5cblx0XHRsZXQgZHJhZ1N0YXJ0SGFuZGxlciA9IChlKSA9PiB7XG5cdFx0XHRsZXQgdGd0ID0gZS5jdXJyZW50VGFyZ2V0O1xuXHRcdFx0bGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuY291cnNlQ29udGVudElkKTtcblx0XHRcdGxldCBpdGVtcyA9IHRndC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPXNsaWRlci1pdGVtXScpO1xuXHRcdFx0bGV0IG9mZnNldE1hcCA9IFtdO1xuXG5cdFx0XHRpdGVtcy5mb3JFYWNoKChlKSA9PiBvZmZzZXRNYXAucHVzaChlLm9mZnNldExlZnQpKTtcblxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHZhciBzdGFydFggPSB0aGlzLnRvdWNoRW5hYmxlZCA/IGUudGFyZ2V0VG91Y2hlc1swXS5zY3JlZW5YIDogZS5zY3JlZW5YO1xuXG5cdFx0XHRsZXQgZHJhZ0hhbmRsZXIgPSAoZSkgPT4ge1xuXHRcdFx0XHRsZXQgc2NyZWVuWCA9IHRoaXMudG91Y2hFbmFibGVkID8gZS50YXJnZXRUb3VjaGVzWzBdLnNjcmVlblggOiBlLnNjcmVlblg7XG5cblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0XHRpZiAoc3RhcnRYID09IHNjcmVlblggfHwgc2NyZWVuWCA9PSAwKSByZXR1cm47XG5cblx0XHRcdFx0bGV0IHRyYW5zZm9ybVZhbCA9IGUuY3VycmVudFRhcmdldC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSxcblx0XHRcdFx0XHRjdXJyZW50WCA9IHRyYW5zZm9ybVZhbCA9PSAnJyA/IDAgOiBwYXJzZUludCh0cmFuc2Zvcm1WYWwubWF0Y2goL1xcZCsvZylbMF0pLFxuXHRcdFx0XHRcdGNhbGNYID0gKHNjcmVlblggLSBzdGFydFgpIC0gY3VycmVudFg7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VTdHlsZShlLmN1cnJlbnRUYXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKGNhbGNYID4gMCA/IDAgOiBjYWxjWCkgKyAncHgpJyk7XG5cdFx0XHRcdHN0YXJ0WCA9IHNjcmVlblg7XG5cdFx0XHR9XG5cdFx0XHRsZXQgZHJhZ0VuZEhhbmRsZXIgPSAoZSkgPT4ge1xuXHRcdFx0XHRsZXQgY2FsY1ggPSBudWxsLFxuXHRcdFx0XHRcdHRyYW5zZm9ybVZhbCA9IGUuY3VycmVudFRhcmdldC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSxcblx0XHRcdFx0XHRjdXJyZW50WCA9IHRyYW5zZm9ybVZhbCA9PSAnJyA/IDAgOiBwYXJzZUludCh0cmFuc2Zvcm1WYWwubWF0Y2goL1xcZCsvZylbMF0pO1xuXG5cdFx0XHRcdG9mZnNldE1hcC5mb3JFYWNoKChlLGkpID0+IHtcblx0XHRcdFx0XHRpZiAoTWF0aC5hYnMoY3VycmVudFggLSBlKSA8IE1hdGguYWJzKGN1cnJlbnRYIC0gb2Zmc2V0TWFwW2ktMV0pIHx8IChpIC0gMSkgPCAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9IGk7XG5cdFx0XHRcdFx0XHRjYWxjWCA9IC1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlU3R5bGUoZS5jdXJyZW50VGFyZ2V0LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoJyArIChjYWxjWCA+IDAgPyAwIDogY2FsY1gpICsgJ3B4KScpO1xuXHRcdFx0XHRlLmN1cnJlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50c01hcFsnbW92ZSddLCBkcmFnSGFuZGxlcik7XG5cdFx0XHRcdGUuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRzTWFwWydlbmQnXSwgZHJhZ0VuZEhhbmRsZXIpO1xuXG5cdFx0XHRcdC8vIEFycm93IG1hbmFnZW1lbnRcblx0XHRcdFx0d3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLW5hdmNvbnRyb2wnKS5mb3JFYWNoKChhcnJvdykgPT4ge1xuXHRcdFx0XHRcdGlmICgoYXJyb3cuY2xhc3NOYW1lLmluZGV4T2YoJ2xlZnQnKSAhPSAtMSAmJiB0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9PSAwKSB8fCAoYXJyb3cuY2xhc3NOYW1lLmluZGV4T2YoJ3JpZ2h0JykgIT0gLTEgJiYgdGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQgPT0gaXRlbXMubGVuZ3RoLTEpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVFbGVtKGFycm93LCB0cnVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93RWxlbShhcnJvdyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0dGd0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudHNNYXBbJ21vdmUnXSwgZHJhZ0hhbmRsZXIpO1xuXHRcdFx0dGd0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudHNNYXBbJ2VuZCddLCBkcmFnRW5kSGFuZGxlcik7XG5cdFx0fVxuXG5cdFx0c2xpZGVyQ2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50c01hcFsnc3RhcnQnXSwgZHJhZ1N0YXJ0SGFuZGxlcik7XG5cblx0XHRyZXR1cm4gY291cnNlQ29udGVudDtcblx0fVxuXHRyZW1vdmVBdXhVbml0KCkge1xuXHRcdGxldCBpZCA9IHRoaXMubGF5b3V0RGF0YS5hdXhVbml0LmlkLFxuXHRcdFx0Ym9va0luZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2staW5kZXgnKSxcblx0XHRcdHRpdGxlc0xpc3QgPSBib29rSW5kZXgucXVlcnlTZWxlY3RvcignI2xpc3QtdW5pdHMnKSxcblx0XHRcdGNvbnRlbnRMaXN0ID0gYm9va0luZGV4LnF1ZXJ5U2VsZWN0b3IoJy5jb2wtbWFpbiA+IGRpdjpmaXJzdC1jaGlsZCcpLFxuXHRcdFx0YXV4TGkgPSBib29rSW5kZXgucXVlcnlTZWxlY3RvcignbGlbZGF0YS1pZD1cIicgKyBpZCArICdcIl0nKSxcblx0XHRcdGF1eEluZGV4ID0gYm9va0luZGV4LnF1ZXJ5U2VsZWN0b3IoJy51bml0LWNvbnRlbnRbZGF0YS1pZD1cIicgKyBpZCArICdcIl0nKTtcblxuXHRcdGF1eExpICE9IG51bGwgJiYgYXV4TGkucmVtb3ZlKCk7XG5cdFx0YXV4SW5kZXggIT0gbnVsbCAmJiBhdXhJbmRleC5yZW1vdmUoKTtcblxuXHRcdHRpdGxlc0xpc3QuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0Y29udGVudExpc3QuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cblx0XHQvLyAvLyQoJyNib29rLWluZGV4JykuZmluZCgnLmNvbC1tYWluJykuY3NzKHsnbGVmdCcgOiAwfSk7XG5cdH1cblx0Ly8gVXNlciBuYXZpZ2F0aW9uXG5cdGdlbmVyYXRlTmF2aWdhdG9ycygpIHtcblx0XHRsZXQgbGVmdENsYXNzZXMgPSBbJ3NlY3Rpb24tbmF2aWdhdGlvbicsICdsZWZ0J107XG5cdFx0bGV0IHJpZ2h0Q2xhc3NlcyA9IFsnc2VjdGlvbi1uYXZpZ2F0aW9uJywgJ3JpZ2h0J107XG5cdFx0bGV0IGFycm93TGVmdCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnQlVUVE9OJywgbGVmdENsYXNzZXMpO1xuXHRcdGxldCBhcnJvd1JpZ2h0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdCVVRUT04nLCByaWdodENsYXNzZXMpO1xuXG5cdFx0YXJyb3dMZWZ0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCgnSScsIFsnZmEnLCAnZmEtYW5nbGUtbGVmdCddKSk7XG5cdFx0YXJyb3dSaWdodC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoJ0knLCBbJ2ZhJywgJ2ZhLWFuZ2xlLXJpZ2h0J10pKTtcblxuXHRcdGFycm93TGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2xpZGVQcmV2U2VjdGlvbigpKTtcblx0XHRhcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zbGlkZU5leHRTZWN0aW9uKCkpO1xuXG5cdFx0cmV0dXJuIHtsZWZ0OiBhcnJvd0xlZnQsIHJpZ2h0OiBhcnJvd1JpZ2h0fTtcblx0fVxuXHRzbGlkZShkaXJlY3Rpb24pIHtcblx0XHRsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb3Vyc2UtY29udGVudCcpO1xuXHRcdGxldCB0cmFjayA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNsaWRlci1pdGVtdHJhY2snKTtcblx0XHRsZXQgY2Fyb3VzZWwgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY2Fyb3VzZWwnKTtcblx0XHRsZXQgaXRlbXMgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZCo9c2xpZGVyLWl0ZW1dJyk7XG5cdFx0bGV0IGN1cnJlbnRFbGVtZW50ID0gaXRlbXNbdGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnRdO1xuXHRcdGxldCB0YXJnZXRFbGVtZW50O1xuXHRcdGxldCBvZmZzZXQ7XG5cblx0XHQvLyBBZGQgdHJhbnNmb3JtIHRvIHJlc2V0IGVsZW1lbnRzIG9mZnNldDtcblx0XHRjYXJvdXNlbC5zdHlsZS50cmFuc2Zvcm0gPT0gJycgJiYgKGNhcm91c2VsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknKTtcblxuXHRcdGlmIChkaXJlY3Rpb24gPT0gJ2x0cicpIHtcblx0XHRcdGlmICh0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9PSBpdGVtcy5sZW5ndGgtMSkgcmV0dXJuO1xuXHRcdFx0aXRlbXMuZm9yRWFjaChmdW5jdGlvbihlLGkpIHtcblx0XHRcdFx0aWYgKGkgPCB0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCkgcmV0dXJuO1xuXHRcdFx0XHRcdGxldCBjdXJPZmZzZXQgPSBlLm9mZnNldExlZnQgLSBjdXJyZW50RWxlbWVudC5vZmZzZXRMZWZ0O1xuXG5cdFx0XHRcdGlmICh0YXJnZXRFbGVtZW50ICYmIHR5cGVvZiB0YXJnZXRFbGVtZW50ICE9PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG5cdFx0XHRcdGlmIChNYXRoLmFicyhjdXJPZmZzZXQpID4gdHJhY2sub2Zmc2V0V2lkdGgpIHtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID0gaS0xO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGkgPT0gaXRlbXMubGVuZ3RoLTEpIHtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gZTtcblx0XHRcdFx0XHR0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9IGk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0b2Zmc2V0ID0gLXRhcmdldEVsZW1lbnQub2Zmc2V0TGVmdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID09IDApIHJldHVybjtcblx0XHRcdGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oZSxpKSB7XG5cdFx0XHRcdGxldCBySW5kZXggPSBpdGVtcy5sZW5ndGgtMSAtIGk7XG5cdFx0XHRcdGlmIChySW5kZXggPiB0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCkgcmV0dXJuO1xuXG5cdFx0XHRcdGxldCByRWwgPSBpdGVtc1tySW5kZXhdLFxuXHRcdFx0XHRcdGN1ck9mZnNldCA9IHJFbC5vZmZzZXRMZWZ0IC0gY3VycmVudEVsZW1lbnQub2Zmc2V0TGVmdDtcblxuXHRcdFx0XHRpZiAodGFyZ2V0RWxlbWVudCAmJiB0eXBlb2YgdGFyZ2V0RWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblx0XHRcdFx0aWYgKE1hdGguYWJzKGN1ck9mZnNldCkgPiB0cmFjay5vZmZzZXRXaWR0aCkge1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQgPSByRWwubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQgPSBySW5kZXggKyAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJJbmRleCA9PSAwKSB7XG5cdFx0XHRcdFx0dGFyZ2V0RWxlbWVudCA9IHJFbDtcblx0XHRcdFx0XHR0aGlzLnNsaWRlci5jdXJyZW50RWxlbWVudCA9IHJJbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRvZmZzZXQgPSAtdGFyZ2V0RWxlbWVudC5vZmZzZXRMZWZ0O1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIG9mZnNldCAhPT0gJ3VuZGVmaW5lZCcpIGNhcm91c2VsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyBvZmZzZXQgKyAncHgpJztcblxuXHRcdC8vIEFycm93IG1hbmFnZW1lbnRcblx0XHR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXItbmF2Y29udHJvbCcpLmZvckVhY2goKGFycm93KSA9PiB7XG5cdFx0XHRpZiAoKGFycm93LmNsYXNzTmFtZS5pbmRleE9mKCdsZWZ0JykgIT0gLTEgJiYgdGhpcy5zbGlkZXIuY3VycmVudEVsZW1lbnQgPT0gMCkgfHwgKGFycm93LmNsYXNzTmFtZS5pbmRleE9mKCdyaWdodCcpICE9IC0xICYmIHRoaXMuc2xpZGVyLmN1cnJlbnRFbGVtZW50ID09IGl0ZW1zLmxlbmd0aC0xKSkge1xuXHRcdFx0XHR0aGlzLmhpZGVFbGVtKGFycm93LCB0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2hvd0VsZW0oYXJyb3cpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cblx0c2xpZGVMZWZ0KCkge1xuXHRcdHRoaXMuc2xpZGUoKTtcblx0fVxuXHRzbGlkZVJpZ2h0KCkge1xuXHRcdHRoaXMuc2xpZGUoJ2x0cicpO1xuXHR9XG5cdHNsaWRlTmV4dFNlY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuY291cnNlRGF0YS51bml0cy5sZW5ndGgtMSA9PSB0aGlzLmN1cnJlbnRTZWN0aW9uKXtcblx0XHRcdHRoaXMuaGlkZUVsZW0odGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzWydyaWdodCddKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zbGlkZVNlY3Rpb24odGhpcy5jdXJyZW50U2VjdGlvbiArIDEpO1xuXHR9XG5cdHNsaWRlUHJldlNlY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuY3VycmVudFNlY3Rpb24gPT0gMSkge1xuXHRcdFx0dGhpcy5oaWRlRWxlbSh0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnNbJ2xlZnQnXSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc2xpZGVTZWN0aW9uKHRoaXMuY3VycmVudFNlY3Rpb24gLSAxKTtcblx0fVxuXHRzbGlkZVNlY3Rpb24oaW5kZXgpIHtcblx0XHR0aGlzLmhpZGVTZWN0aW9uKHRoaXMuY3VycmVudFNlY3Rpb24pO1xuXHRcdHRoaXMudG9nZ2xlTmF2aWdhdG9ycyhpbmRleCk7XG5cdFx0aWYgKHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbnNbaW5kZXhdICYmIHR5cGVvZiB0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dGhpcy5zaG93U2VjdGlvbihpbmRleCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuaW5pdFNlY3Rpb24oaW5kZXgpO1xuXHR9XG5cdC8vIFNIT1cvSElERVxuXHRzaG93TWFpblNjcmVlbigpIHtcblx0XHR0aGlzLmhpZGVOYXZpZ2F0b3JzKCk7XG5cdFx0dGhpcy5yZXNldEJyZWFkY3VtYnMoKTtcblx0XHR0aGlzLm1haW5TY3JlZW4gJiYgdGhpcy5zaG93RWxlbSh0aGlzLm1haW5TY3JlZW4pO1xuXHR9XG5cdGhpZGVNYWluU2NyZWVuKCkge1xuXHRcdHRoaXMubWFpblNjcmVlbiAmJiB0aGlzLmhpZGVFbGVtKHRoaXMubWFpblNjcmVlbik7XG5cdH1cblx0c2hvd1NlY3Rpb24oaW5kZXgpIHtcblx0XHRsZXQgZGF0YSA9IHRoaXMuY291cnNlRGF0YS51bml0c1tpbmRleF07XG5cdFx0dGhpcy5hZGRCcmVhZGN1bWIoZGF0YS50aXRsZSwgMSk7XG5cdFx0dGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uc1tpbmRleF0gJiYgdGhpcy5zaG93RWxlbSh0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSk7XG5cdFx0dGhpcy5jdXJyZW50U2VjdGlvbiA9IGluZGV4O1xuXHR9XG5cdGhpZGVTZWN0aW9uKGluZGV4KSB7XG5cdFx0dGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uc1tpbmRleF0gJiYgdGhpcy5oaWRlRWxlbSh0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25zW2luZGV4XSk7XG5cdH1cblx0dG9nZ2xlTmF2aWdhdG9ycyhpbmRleCkge1xuXHRcdGlmICghaW5kZXggfHwgdHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXHRcdGxldCBuYXZzID0gdGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzO1xuXG5cdFx0aW5kZXggPT0gMSA/IHRoaXMuaGlkZUVsZW0obmF2cy5sZWZ0LCB0cnVlKSA6IHRoaXMuc2hvd0VsZW0obmF2cy5sZWZ0KTtcblx0XHR0aGlzLmNvdXJzZURhdGEudW5pdHMubGVuZ3RoLTEgPT0gaW5kZXggPyB0aGlzLmhpZGVFbGVtKG5hdnMucmlnaHQsIHRydWUpIDogdGhpcy5zaG93RWxlbShuYXZzLnJpZ2h0KTtcblx0fVxuXHRzaG93TmF2aWdhdG9ycygpIHtcblx0XHRpZiAoIXRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9ycyB8fCB0eXBlb2YgdGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXHRcdGZvciAobGV0IG5hdiBpbiB0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnMpIHtcblx0XHRcdHRoaXMuc2hvd0VsZW0odGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzW25hdl0pO1xuXHRcdH1cblx0fVxuXHRoaWRlTmF2aWdhdG9ycygpIHtcblx0XHRpZiAoIXRoaXMuc2VjdGlvbkRhdGEubmF2aWdhdG9ycyB8fCB0eXBlb2YgdGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXHRcdGZvciAobGV0IG5hdiBpbiB0aGlzLnNlY3Rpb25EYXRhLm5hdmlnYXRvcnMpIHtcblx0XHRcdHRoaXMuaGlkZUVsZW0odGhpcy5zZWN0aW9uRGF0YS5uYXZpZ2F0b3JzW25hdl0pO1xuXHRcdH1cblx0fVxuXHRzaG93RWxlbShlbCkge1xuXHRcdGlmICghZWwgfHwgdHlwZW9mIGVsID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy5jaGFuZ2VTdHlsZShlbCwgJ3Zpc2liaWxpdHknLCAnJyk7XG5cdFx0ZWwuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgJiYgdGhpcy5jaGFuZ2VTdHlsZShlbCwgJ2Rpc3BsYXknLCAnJyk7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cdGhpZGVFbGVtKGVsLCBkaXNwbGF5KSB7XG5cdFx0aWYgKCFlbCB8fCB0eXBlb2YgZWwgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLmNoYW5nZVN0eWxlKGVsLCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHQoIWRpc3BsYXkgfHwgdHlwZW9mIGRpc3BsYXkgPT09ICd1bmRlZmluZWQnKSAmJiB0aGlzLmNoYW5nZVN0eWxlKGVsLCAnZGlzcGxheScsICdub25lJyk7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cdGlzSGlkZGVuKGVsLCBjaGVja0Rpc3BsYXkpIHtcblx0XHRsZXQgdmlzaWJsZSA9IGVsLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nLFxuXHRcdFx0ZGlzcGxheWVkID0gZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xuXHRcdHJldHVybiB2aXNpYmxlICYmICgoIWNoZWNrRGlzcGxheSB8fCB0eXBlb2YgY2hlY2tEaXNwbGF5ID09PSAndW5kZWZpbmVkJykgfHwgZGlzcGxheWVkKTtcblx0fVxuXG5cdC8vIEJSRUFEQ1VNQlNcblx0dXBkYXRlQnJlYWRjdW1icygpIHtcblx0XHRpZiAodGhpcy5pc0FwcCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5icmVhZGN1bWJzQ29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xuXHRcdHRoaXMuYnJlYWRjdW1icy5mb3JFYWNoKCh0ZXh0LCBsZXZlbCkgPT4ge1xuXHRcdFx0bGV0IGZvcm1hdHRlZFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0ICsgKGxldmVsID09IHRoaXMuYnJlYWRjdW1icy5sZW5ndGgtMSA/ICcnIDogJyA+ICcpKTtcblx0XHRcdCh0ZXh0ICYmIHR5cGVvZiB0ZXh0ICE9PSAndW5kZWZpbmVkJykgJiYgKHRoaXMuYnJlYWRjdW1ic0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtYXR0ZWRUZXh0KSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5pc0hpZGRlbih0aGlzLmJyZWFkY3VtYnNDb250YWluZXIpICYmIHRoaXMuc2hvd0VsZW0odGhpcy5icmVhZGN1bWJzQ29udGFpbmVyKTtcblx0fVxuXHRhZGRCcmVhZGN1bWIodGV4dCwgbGV2ZWwpIHtcblx0XHRpZiAodGhpcy5pc0FwcCkgcmV0dXJuO1xuXG5cdFx0KGxldmVsICYmIHR5cGVvZiBsZXZlbCAhPT0gJ3VuZGVmaW5lZCcpID8gKHRoaXMuYnJlYWRjdW1ic1tsZXZlbF0gPSB0ZXh0KSA6IHRoaXMuYnJlYWRjdW1icy5wdXNoKHRleHQpO1xuXHRcdHRoaXMudXBkYXRlQnJlYWRjdW1icygpO1xuXHR9XG5cdHJlbW92ZUJyZWFkY3VtYihsZXZlbCkge1xuXHRcdGlmICh0aGlzLmlzQXBwKSByZXR1cm47XG5cblx0XHQobGV2ZWwgJiYgdHlwZW9mIGxldmVsICE9PSAndW5kZWZpbmVkJykgPyAodGhpcy5icmVhZGN1bWJzW2xldmVsXSA9IHVuZGVmaW5lZCkgOiB0aGlzLmJyZWFkY3VtYnMucG9wKCk7XG5cdFx0dGhpcy51cGRhdGVCcmVhZGN1bWJzKCk7XG5cdH1cblx0cmVzZXRCcmVhZGN1bWJzKCkge1xuXHRcdGlmICh0aGlzLmlzQXBwKSByZXR1cm47XG5cblx0XHR0aGlzLmJyZWFkY3VtYnMgPSBbdGhpcy5icmVhZGN1bWJzWzBdXTtcblx0XHR0aGlzLnVwZGF0ZUJyZWFkY3VtYnMoKTtcblx0fVxuXG5cdC8vIFVSTCAmIFJFRElSRUNUSU5HXG5cdG9wZW5BY3Rpdml0eSh1cmwsIHNlY3Rpb25JZCwgdHlwZSkge1xuXHRcdGlmICghdXJsIHx8IHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSByZXR1cm47XG5cblx0XHRpZiAoYmxpbmsuaXNBcHApIHtcblx0XHRcdGJsaW5rLnJlc3Qub3BlblVybCgnZnVsbHNjcmVlbicsIHVybCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBvcGVuQmxhbmsgPSAodHlwZSA9PT0gJ3VybCcgfHwgdHlwZSA9PT0gJ2FyY2hpdm8nKTtcblx0XHRcdGlmIChvcGVuQmxhbmspIHtcblx0XHRcdFx0YmxpbmsucmVzdC5vcGVuVXJsKCdmdWxsc2NyZWVuJywgdXJsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJsaW5rLmdvVG9BY3Rpdml0eShpZGN1cnNvLCBzZWN0aW9uSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIERJTUVOU0lPTlNcblx0cmVzaXplQ29udGFpbmVyKCkge1xuXHRcdGxldCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLmxpYnJvJyk7XG5cdFx0aWYgKCFuYXZiYXIpIHJldHVybjtcblxuXHRcdGxldCBlbCA9IHRoaXMubGF5b3V0Q29udGFpbmVyLFxuXHRcdFx0dG9wID0gbmF2YmFyLm9mZnNldEhlaWdodCxcblx0XHRcdGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRvcDtcblxuXHRcdHRoaXMuc2V0RWxlbWVudEhlaWdodChlbCwgaGVpZ2h0KTtcblx0XHR0aGlzLnNldEVsZW1lbnRPZmZzZXRYKGVsLCB0b3ApO1xuXHR9XG5cdC8vIEFVWCBGVU5DVElPTlNcblx0c2V0RWxlbWVudEhlaWdodChlbCwgaGVpZ2h0KSB7XG5cdFx0bGV0IHN0ckhlaWdodCA9ICh0eXBlb2YgaGVpZ2h0ICE9PSAnc3RyaW5nJyB8fCBoZWlnaHQuaW5kZXhPZigncHgnKSA9PSAtMSkgPyBoZWlnaHQgKyAncHgnIDogaGVpZ2h0O1xuXHRcdGVsLnN0eWxlLmhlaWdodCA9IHN0ckhlaWdodDtcblx0fVxuXHRzZXRFbGVtZW50T2Zmc2V0WChlbCwgdG9wKSB7XG5cdFx0bGV0IHN0clRvcCA9ICh0eXBlb2YgdG9wICE9PSAnc3RyaW5nJyB8fCB0b3AuaW5kZXhPZigncHgnKSA9PSAtMSkgPyB0b3AgKyAncHgnIDogdG9wO1xuXHRcdGVsLnN0eWxlLnRvcCA9IHN0clRvcDtcblx0fVxuXHRzZXRBdHRyaWJ1dGVzKGVsLCBhdHRycykge1xuXHRcdGlmICghYXR0cnMgfHwgIShhdHRycyBpbnN0YW5jZW9mIE9iamVjdCkpIHJldHVybjtcblx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHRcdH07XG5cdH1cblx0Y3JlYXRlSGVhZGVyKGxldmVsLCBjbGFzc0xpc3QsIHRleHQpIHtcblx0XHRsZXQgdGFnID0gKGxldmVsICYmIHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicpID8gJ0gnICsgbGV2ZWwgOiAnSDInLFxuXHRcdFx0aGVhZGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KHRhZywgY2xhc3NMaXN0ID09ICcnID8gJ3NlY3Rpb24tdGl0bGUtJyArIGxldmVsIDogY2xhc3NMaXN0LCB0ZXh0KTtcblxuXHRcdHJldHVybiBoZWFkZXI7XG5cdH1cblx0Y3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTGlzdCwgdGV4dCkge1xuXHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0XHRlbCA9IHRoaXMuYWRkQ2xhc3NlcyhlbCwgY2xhc3NMaXN0KTtcblx0XHQodGV4dCAmJiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0ZXh0ID09PSAnbnVtYmVyJykpICYmIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcblxuXHRcdHJldHVybiBlbFxuXHR9XG5cdGFkZENsYXNzZXMoZWwsIGNsYXNzTGlzdCkge1xuXHRcdGlmIChjbGFzc0xpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0Y2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24oY2xzKSB7XG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycgJiYgY2xhc3NMaXN0ICE9ICcnKSB7XG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XG5cdFx0fVxuXHRcdHJldHVybiBlbDtcblx0fVxuXHRyZW1vdmVDbGFzc2VzKGVsLCBjbGFzc0xpc3QpIHtcblx0XHRpZiAoY2xhc3NMaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdGNsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGNscykge1xuXHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdzdHJpbmcnICYmIGNsYXNzTGlzdCAhPSAnJykge1xuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc0xpc3QpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWw7XG5cdH1cblx0Y2hhbmdlU3R5bGUoZWxlbSwgcHJvcCwgdmFsKSB7XG5cdFx0ZWxlbS5zdHlsZVtwcm9wXSA9IHZhbDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCIvKlxuKiAgIEphdmFzY3JpcHQgcHJpbmNpcGFsIGNvbiBsYSBlc3RydWN0dXJhIGLDoXNpY2EgZGVsIGVzdGlsb1xuKi9cblxuaW1wb3J0IGNrZVN0eWxlcyBmcm9tICcuL2NrZV9zdHlsZXMnO1xuaW1wb3J0IG92ZXJyaWRlcyBmcm9tICcuL292ZXJyaWRlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0L21haW4nO1xuXG4oZnVuY3Rpb24gKGJsaW5rKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgR2VuZXJpY1N0eWxlID0gZnVuY3Rpb24gKCkge1xuXHRcdGJsaW5rLnRoZW1lLnN0eWxlcy5iYXNpYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHR9XG5cblx0R2VuZXJpY1N0eWxlLnByb3RvdHlwZSA9IHtcblx0XHRwYXJlbnQ6IGJsaW5rLnRoZW1lLnN0eWxlcy5iYXNpYy5wcm90b3R5cGUsXG5cdFx0Ym9keUNsYXNzTmFtZTogJ2NvbnRlbnRfdHlwZV9jbGFzZV9nZW5lcmljJyxcblx0XHRleHRyYVBsdWdpbnM6IFsnaW1hZ2UyJ10sXG5cdFx0Y2tFZGl0b3JTdHlsZXM6IHtcblx0XHRcdG5hbWU6ICdnZW5lcmljJyxcblx0XHRcdHN0eWxlczogY2tlU3R5bGVzXG5cdFx0fSxcblxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5sYXlvdXQgPSBuZXcgTGF5b3V0KCk7XG5cdFx0XHR0aGlzLnBhcmVudC5pbml0LmNhbGwodGhpcyk7XG5cdFx0XHR0aGlzLnJlbW92ZUZpbmFsU2xpZGUoKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5sYXlvdXQuaW5pdCgpO1xuXHRcdH0sXG5cdFx0Li4ub3ZlcnJpZGVzXG5cdH07XG5cblx0R2VuZXJpY1N0eWxlLnByb3RvdHlwZSA9IF8uZXh0ZW5kKHt9LCBuZXcgYmxpbmsudGhlbWUuc3R5bGVzLmJhc2ljKCksIEdlbmVyaWNTdHlsZS5wcm90b3R5cGUpO1xuXG5cdGJsaW5rLnRoZW1lLnN0eWxlc1snZ2VuZXJpYyddID0gR2VuZXJpY1N0eWxlO1xufSkoIGJsaW5rICk7IiwiLypcbiogICBKYXZhc2NyaXB0IGRvbmRlIGVzdMOhbiBsYXMgZnVuY2lvbmVzIHF1ZSBzb2JyZWVzY3JpYmVuIGEgZnVuY2lvbmVzIGRlIEJhc2ljXG4qL1xuXG5jb25zdCBvdmVycmlkZXMgPSAge1xuXHRpc0FkYXB0YXRpdmU6ICgpID0+IHRydWUsXG5cdHNob3dCb29rSW5kZXhJbkNsYXNzOigpID0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0cmVtb3ZlRmluYWxTbGlkZTogKHQpID0+IHtcblx0XHRsZXQgdGhpc1N0eWxlID0gYmxpbmsuYWN0aXZpdHkuY3VycmVudFN0eWxlO1xuXHRcdHRoaXNTdHlsZS5wYXJlbnQucmVtb3ZlRmluYWxTbGlkZS5jYWxsKHRoaXNTdHlsZSwgdHJ1ZSk7XG5cdH0sXG5cdHByb2Nlc3NIYXNoOiAoKSA9PiB7XG5cdFx0dmFyIGhhc2ggPSAnJyxcblx0XHRcdGN1cnNvID0gYmxpbmsuZ2V0Q291cnNlKGlkY3Vyc28sIHRydWUsIHRydWUpLFxuXHRcdFx0dGVtYSA9ICcnLFxuXHRcdFx0YWN0aXZpZGFkID0gJyc7XG5cblx0XHRpZiAoIWN1cnNvLnJlc3BvbnNlSlNPTiB8fCAhY3Vyc28ucmVzcG9uc2VKU09OLnVuaXRzIHx8IGN1cnNvLnJlc3BvbnNlSlNPTi51bml0cy5sZW5ndGggPD0gMCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdF8uZmluZChjdXJzby5yZXNwb25zZUpTT04udW5pdHMsIGZ1bmN0aW9uICh1bml0KSB7XG5cdFx0XHRfLmZpbmQodW5pdC5zdWJ1bml0cywgZnVuY3Rpb24gKHN1YnVuaXQpIHtcblx0XHRcdFx0aWYgKHN1YnVuaXQuaWQgPT0gd2luZG93LmlkY2xhc2UpIHtcblx0XHRcdFx0XHRhY3RpdmlkYWQgPSBzdWJ1bml0O1xuXHRcdFx0XHRcdHRlbWEgPSB1bml0O1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0aWYgKGFjdGl2aWRhZCA9PT0gJycpIHtcblx0XHRcdFx0Xy5maW5kKHVuaXQucmVzb3VyY2VzLCBmdW5jdGlvbiAocmVzb3VyY2UpIHtcblx0XHRcdFx0XHRpZiAocmVzb3VyY2UuaWQgPT0gd2luZG93LmlkY2xhc2UpIHtcblx0XHRcdFx0XHRcdGFjdGl2aWRhZCA9IHJlc291cmNlO1xuXHRcdFx0XHRcdFx0dGVtYSA9IHVuaXQ7XG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHdpbmRvdy5pZHRlbWEgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5pZHRlbWEgIT09ICcnICYmIHVuaXQuaWQgPT0gd2luZG93LmlkdGVtYSkge1xuXHRcdFx0XHR0ZW1hID0gdW5pdDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKHR5cGVvZiB0ZW1hID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGVtYS5udW1iZXIgPT09ICd1bmRlZmluZWQnIHx8IHRlbWEubnVtYmVyIC0gMSA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gJyNob21lJztcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIGFjdGl2aWRhZC5vbmx5VmlzaWJsZVRlYWNoZXJzICE9PSAndW5kZWZpbmVkJyAmJiBhY3RpdmlkYWQub25seVZpc2libGVUZWFjaGVycykge1xuXHRcdFx0aGFzaCA9ICcjdW5pdF8nICsgcGFyc2VJbnQodGVtYS5udW1iZXIgLSAxKSArICdfdGVhY2hlcmFyZWEnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoYXNoID0gJyN1bml0XycgKyBwYXJzZUludCh0ZW1hLm51bWJlciAtIDEpICsgJ19zdHVkZW50YXJlYSc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhhc2g7XG5cdH1cbn07XG5leHBvcnQgZGVmYXVsdCBvdmVycmlkZXM7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTkzMTA0OTUyODQxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L3dvcmtzcGFjZXMvd2ViL2NvbW1vbi11dGlscy9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
