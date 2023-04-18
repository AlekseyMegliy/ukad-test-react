"use strict";(self.webpackChunktest_react=self.webpackChunktest_react||[]).push([[202],{"./src/stories/SingleBreed.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:function(){return Base},Square:function(){return Square},ThreeFour:function(){return ThreeFour},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return SingleBreed_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),loading_namespaceObject=__webpack_require__.p+"1a32f552ee5280e2aef9.gif",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SpecsItem(_ref){var value=_ref.value,name=_ref.name;return"string"==typeof value&&value?(0,jsx_runtime.jsxs)("p",{className:"breed-data__details__characteristic",children:[(0,jsx_runtime.jsxs)("strong",{children:[name.split("_").join(" "),":"]})," ",value]}):function isLength(value){return void 0!==value.metric||void 0!==value.imperial}(value)?(0,jsx_runtime.jsxs)("p",{className:"breed-data__details__characteristic",children:[(0,jsx_runtime.jsxs)("strong",{children:[name.split("_").join(" "),":"]})," ",value.metric?value.metric+" Cm":null," ",value.metric&&value.imperial?" / ":null,value.imperial?value.imperial+" in":null," "]}):null}function BreedData(_ref2){var fontSize=_ref2.fontSize,imgStyle=_ref2.imgStyle,breed=_ref2.breed,breedsSpecs=_ref2.breedsSpecs,image=_ref2.image;return(0,jsx_runtime.jsx)("div",{className:"container-fluid",children:(0,jsx_runtime.jsxs)("div",{className:"breed-data row",children:[(0,jsx_runtime.jsx)("h1",{className:"breed-data__title offset-md-1 ",children:breed.name}),(0,jsx_runtime.jsx)("div",{className:"offset-md-1 col-md-5 col-lg-4 ",children:(0,jsx_runtime.jsx)("img",{className:classnames_default()("col-5",{default:"default"===imgStyle},{square:"square"===imgStyle},{threefour:"3/4"===imgStyle}),src:image?image.url:loading_namespaceObject,alt:breed.name})}),(0,jsx_runtime.jsxs)("div",{className:"breed-data__details offset-md-1 col-md-5",children:[breedsSpecs.map((function(_ref3){var _ref4=(0,slicedToArray.Z)(_ref3,2),key=_ref4[0],value=_ref4[1];return(0,jsx_runtime.jsx)(SpecsItem,{name:key,value:value},key)})),(null==breed?void 0:breed.description)&&(0,jsx_runtime.jsxs)("p",{className:classnames_default()("breed-data__details__characteristic".concat("_"+fontSize," breed-data__details__description_lg")),children:[(0,jsx_runtime.jsx)("strong",{className:"breed-data__details__description_strong",children:"Description:"})," ",breed.description]})]})]})})}try{BreedData.displayName="BreedData",BreedData.__docgenInfo={description:"",displayName:"BreedData",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},imgStyle:{defaultValue:null,description:"",name:"imgStyle",required:!1,type:{name:"string"}},breed:{defaultValue:null,description:"",name:"breed",required:!0,type:{name:"BreedType"}},breedsSpecs:{defaultValue:null,description:"",name:"breedsSpecs",required:!0,type:{name:"BreedsSpecs"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ImageType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/singleBreed/BreedData.tsx#BreedData"]={docgenInfo:BreedData.__docgenInfo,name:"BreedData",path:"src/components/ui/singleBreed/BreedData.tsx#BreedData"})}catch(__react_docgen_typescript_loader_error){}var Loader=__webpack_require__("./src/components/ui/loader/Loader.tsx"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),useAppSelector=es.v9;function SingleBreed(_ref){var _ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"md":_ref$fontSize,_ref$imgStyle=_ref.imgStyle,imgStyle=void 0===_ref$imgStyle?"default":_ref$imgStyle,_ref$item=_ref.item,item=void 0===_ref$item?{weight:{imperial:"6 - 13",metric:"3 - 6"},height:{imperial:"9 - 11.5",metric:"23 - 29"},id:1,name:"Affenpinscher",bred_for:"Small rodent hunting, lapdog",breed_group:"Toy",life_span:"10 - 12 years",temperament:"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",origin:"Germany, France",reference_image_id:"BJa4kxc4X"}:_ref$item,_ref$breedSpecs=_ref.breedSpecs,breedSpecs=void 0===_ref$breedSpecs?[["weight",{imperial:"6 - 13",metric:"3 - 6"}],["height",{imperial:"9 - 11.5",metric:"23 - 29"}],["bred_for","Small rodent hunting, lapdog"],["breed_group","Toy"],["life_span","10 - 12 years"],["temperament","Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"],["origin","Germany, France"]]:_ref$breedSpecs,id=(0,dist.TH)().pathname.split("/")[2],_useState=(0,react.useState)(item),_useState2=(0,slicedToArray.Z)(_useState,2),breed=_useState2[0],setBreed=_useState2[1],_useState3=(0,react.useState)(),_useState4=(0,slicedToArray.Z)(_useState3,2),image=_useState4[0],setImage=_useState4[1];(0,react.useEffect)((function(){window.scrollTo(0,0),fetch("https://api.thedogapi.com/v1/breeds/".concat(id)).then((function(res){return res.json()})).then((function(data){return setBreed(data)})).catch((function(error){console.error("Error fetching breed information:",error)}))}),[id]),(0,react.useEffect)((function(){breed&&fetch("https://api.thedogapi.com/v1/images/".concat(breed.reference_image_id)).then((function(res){return res.json()})).then((function(data){return setImage(data)})).catch((function(error){console.error("Error fetching breed information:",error)}))}),[breed]);var breedsSpecs=(0,react.useMemo)((function(){return breed&&Object.entries(breed).filter((function(_ref2){var name=(0,slicedToArray.Z)(_ref2,1)[0];return!["reference_image_id","description","id","name"].includes(name)}))}),[breed]);return console.log(breedsSpecs),(0,jsx_runtime.jsxs)("div",{className:"single-breed container-fluid ",children:[(0,jsx_runtime.jsx)(react_router_dom_dist.rU,{to:{pathname:"/products",search:"?page=".concat(useAppSelector((function(state){return state.page.page})))},className:"single-breed__link offset-md-1 col-md-7 col-lg-4",children:"<-Go to product list"}),breed&&breedsSpecs?(0,jsx_runtime.jsx)(BreedData,{breed:breed,breedsSpecs:breedsSpecs&&breedSpecs,image:image,imgStyle:imgStyle,fontSize:fontSize}):(0,jsx_runtime.jsx)(Loader.Z,{})]})}try{SingleBreed.displayName="SingleBreed",SingleBreed.__docgenInfo={description:"",displayName:"SingleBreed",props:{fontSize:{defaultValue:{value:"md"},description:"",name:"fontSize",required:!1,type:{name:"string"}},imgStyle:{defaultValue:{value:"default"},description:"",name:"imgStyle",required:!1,type:{name:"string"}},item:{defaultValue:{value:'{\r\n    weight: { imperial: "6 - 13", metric: "3 - 6" },\r\n    height: { imperial: "9 - 11.5", metric: "23 - 29" },\r\n    id: 1,\r\n    name: "Affenpinscher",\r\n    bred_for: "Small rodent hunting, lapdog",\r\n    breed_group: "Toy",\r\n    life_span: "10 - 12 years",\r\n    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",\r\n    origin: "Germany, France",\r\n    reference_image_id: "BJa4kxc4X",\r\n  }'},description:"",name:"item",required:!1,type:{name:"any"}},breedSpecs:{defaultValue:{value:'[\r\n    ["weight", { imperial: "6 - 13", metric: "3 - 6" }],\r\n    ["height", { imperial: "9 - 11.5", metric: "23 - 29" }],\r\n    ["bred_for", "Small rodent hunting, lapdog"],\r\n    ["breed_group", "Toy"],\r\n    ["life_span", "10 - 12 years"],\r\n    [\r\n      "temperament",\r\n      "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",\r\n    ],\r\n    ["origin", "Germany, France"],\r\n  ]'},description:"",name:"breedSpecs",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/SingleBreedPage/SingleBreed.tsx#SingleBreed"]={docgenInfo:SingleBreed.__docgenInfo,name:"SingleBreed",path:"src/pages/SingleBreedPage/SingleBreed.tsx#SingleBreed"})}catch(__react_docgen_typescript_loader_error){}var _Base$parameters,_Base$parameters2,_Base$parameters2$doc,_Square$parameters,_Square$parameters2,_Square$parameters2$d,_ThreeFour$parameters,_ThreeFour$parameters2,_ThreeFour$parameters3,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),rtk_query_react_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js"),rtk_query_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js"),apiSlice=(0,rtk_query_react_esm.LC)({reducerPath:"api",baseQuery:(0,rtk_query_esm.ni)({baseUrl:"https://api.thedogapi.com/v1"}),endpoints:function endpoints(builder){return{fetchBreeds:builder.query({query:function query(){return"/breeds?limit=10&page=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)}})}}}),pageSlice=(0,redux_toolkit_esm.oM)({name:"pageChanger",initialState:{page:1},reducers:{changePage:function changePage(state,action){state.page=action.payload}}}),fetch_slice=(apiSlice.useFetchBreedsQuery,pageSlice.actions.changePage,pageSlice.reducer),store=(0,redux_toolkit_esm.xC)({reducer:(0,defineProperty.Z)({page:fetch_slice},apiSlice.reducerPath,apiSlice.reducer),middleware:function middleware(getDefaultMiddleware){return getDefaultMiddleware().concat(apiSlice.middleware)}}),SingleBreed_stories={title:"SingleBreeds",component:SingleBreed,decorators:[function(Story){return(0,jsx_runtime.jsx)(dist.VA,{children:(0,jsx_runtime.jsx)(es.zt,{store:store,children:(0,jsx_runtime.jsx)(Story,{})})})}],tags:["autodocs"],argTypes:{imgStyle:{control:{type:"radio"},options:["default","square","3/4"],description:"Select direction"},fontSize:{control:{type:"radio"},options:["sm","md","lg"],description:"Select direction"}}},Base={args:{imgStyle:"default",fontSize:"md"}},Square={args:{imgStyle:"square",fontSize:"md"}},ThreeFour={args:{imgStyle:"3/4",fontSize:"lg"}};Base.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Base.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Base$parameters=Base.parameters)||void 0===_Base$parameters?void 0:_Base$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    imgStyle: "default",\n    fontSize: "md"\n  }\n}'},null===(_Base$parameters2=Base.parameters)||void 0===_Base$parameters2||null===(_Base$parameters2$doc=_Base$parameters2.docs)||void 0===_Base$parameters2$doc?void 0:_Base$parameters2$doc.source)})}),Square.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Square.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Square$parameters=Square.parameters)||void 0===_Square$parameters?void 0:_Square$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    imgStyle: "square",\n    fontSize: "md"\n  }\n}'},null===(_Square$parameters2=Square.parameters)||void 0===_Square$parameters2||null===(_Square$parameters2$d=_Square$parameters2.docs)||void 0===_Square$parameters2$d?void 0:_Square$parameters2$d.source)})}),ThreeFour.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ThreeFour.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ThreeFour$parameters=ThreeFour.parameters)||void 0===_ThreeFour$parameters?void 0:_ThreeFour$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    imgStyle: "3/4",\n    fontSize: "lg"\n  }\n}'},null===(_ThreeFour$parameters2=ThreeFour.parameters)||void 0===_ThreeFour$parameters2||null===(_ThreeFour$parameters3=_ThreeFour$parameters2.docs)||void 0===_ThreeFour$parameters3?void 0:_ThreeFour$parameters3.source)})});var __namedExportsOrder=["Base","Square","ThreeFour"]},"./src/components/ui/loader/Loader.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Loader}});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/react-loader-spinner/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Loader(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?100:_ref$size,_ref$radius=_ref.radius,radius=void 0===_ref$radius?5:_ref$radius,_ref$color=_ref.color,color=void 0===_ref$color?"#022b32":_ref$color;return(0,jsx_runtime.jsx)("div",{className:"loader",children:(0,jsx_runtime.jsx)(esm.W0,{height:size,width:size,radius:radius,color:color,ariaLabel:"ball-triangle-loading",visible:!0})})}try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{size:{defaultValue:{value:"100"},description:"",name:"size",required:!1,type:{name:"number"}},radius:{defaultValue:{value:"5"},description:"",name:"radius",required:!1,type:{name:"number"}},color:{defaultValue:{value:"#022b32"},description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/loader/Loader.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/components/ui/loader/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}}}]);