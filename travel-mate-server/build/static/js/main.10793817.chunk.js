(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){},43:function(e,t,a){e.exports=a(86)},53:function(e,t,a){},8:function(e){e.exports={environment:"development",baseUrl:"http://localhost:5000"}},86:function(e,t,a){"use strict";a.r(t);a(44),a(46);var n=a(0),l=a.n(n),r=a(21),s=a.n(r),c=(a(26),a(3)),i=a(4),o=a(6),m=a(5),u=a(7),d=a(13),p=(a(53),a(90)),h=a(91),g=a(9),b=a.n(g),E=a(87),f=a(8),v=a(16),N=a(23),y=(a(38),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.destination,n=a.state.startDate,l=a.state.endDate,r=a.state.pointsOfInterest,s=a.state.owner;b.a.post("".concat(f.baseUrl,"/api/trips"),{destination:t,startDate:n,endDate:l,pointsOfInterest:r,owner:s},{withCredentials:!0}).then(function(){a.props.getData(),a.setState({destination:"",startDate:"",endDate:"",pointsOfInterest:"",owner:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(v.a)({},n,l))},a.handleStartDateChange=function(e){a.setState({startDate:e})},a.handleEndDateChange=function(e){a.setState({endDate:e})},a.state={destination:"",startDate:"",endDate:"",pointsOfInterest:[],owner:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"main-w3layouts wrapper"},l.a.createElement("div",{className:"extra-agileinfo"},l.a.createElement("div",{className:"agileits-extra"},l.a.createElement("h2",null,"Add a Trip:"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",{className:"white-text"},"Destination:"),l.a.createElement("br",null),l.a.createElement("input",{className:"btn-block",type:"text",name:"destination",value:this.state.destination,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"white-text"},"Start Date:"),l.a.createElement("br",null),l.a.createElement(N.a,{dateFormat:"dd/MM/yyyy",minDate:new Date,className:"btn-block",selected:this.state.startDate,onChange:this.handleStartDateChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"white-text"},"End Date:"),l.a.createElement("br",null),l.a.createElement(N.a,{dateFormat:"dd/MM/yyyy",minDate:new Date(this.state.startDate),className:"btn-block",selected:this.state.endDate,onChange:this.handleEndDateChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"white-text"},"Points of Interest:"),l.a.createElement("br",null),l.a.createElement("textarea",{className:"btn-block",type:"text",name:"pointsOfInterest",value:this.state.pointsOfInterest,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Submit"})))))}}]),t}(n.Component)),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getAllTrips=function(){b.a.get("".concat(f.baseUrl,"/api/trips"),{withCredentials:!0}).then(function(e){0!==e.data.length&&void 0!==e.data&&null!==e.data&&e.data&&""!==e.data?a.setState({listOfTrips:e.data}):a.setState({listOfTrips:[]})})},a.state={listOfTrips:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAllTrips()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{class:"page-wrapper bg-blue p-t-50 p-b-100 font-robo"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},this.state.listOfTrips.map(function(e,t){return l.a.createElement("div",{className:"border-bottom",key:e._id},l.a.createElement("h3",null,e.destination),l.a.createElement(E.a,{to:"/trips/".concat(e._id)},l.a.createElement("button",{className:"btn btn-sm btn-primary"},"Details")))})),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(y,{getData:function(){return e.getAllTrips()}})))))}}]),t}(n.Component),x=a(27),C=a(88),O=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a,n,l,r){return t.service.post("/signup",{firstName:e,lastName:a,email:n,about:l,password:r}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{email:e,password:a}).then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var a=b.a.create({baseURL:"".concat(f.baseUrl,"/api"),withCredentials:!0});this.service=a},U=a(24),j=a.n(U),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).logoutUser=function(){a.service.logout().then(function(){a.setState({loggedInUser:null}),a.props.getUser(null)})},a.state={loggedInUser:null},a.service=new O,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(x.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-light bg-light static-top"},l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(E.a,{className:"navbar-brand",to:"/profile",style:{textDecoration:"none"}},"Home")),l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(E.a,{className:"navbar-brand",to:"/profile/:id",style:{textDecoration:"none"}},"Profile")),l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(E.a,{className:"navbar-brand",to:"/trips",style:{textDecoration:"none"}},"Trips")),l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(E.a,{className:"navbar-brand",to:"/search",style:{textDecoration:"none"}},"Search")),l.a.createElement("li",{className:"list-style"},l.a.createElement(E.a,{to:"/"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.logoutUser()}},"Logout")))),l.a.createElement(C.a,{to:"/profile"})):l.a.createElement(j.a,{id:"home"},l.a.createElement("nav",{className:"navbar navbar-light bg-light static-top"},l.a.createElement("div",{className:"container"},l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(E.a,{className:"navbar-brand",to:"/"},"Travel Mate")),l.a.createElement("a",{className:"navbar-brand",href:"/#section1"},"Benefits"),l.a.createElement("a",{className:"navbar-brand",href:"/#section2"},"Testimonials"),l.a.createElement("li",{className:"list-style"},l.a.createElement(E.a,{className:"navbar-brand",to:"/contact"},"Contact")),l.a.createElement("li",{className:"list-style"},l.a.createElement(E.a,{className:"btn btn-primary",to:"/login"},"Sign In")))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){var t=a.state.destination,n=a.state.startDate,l=a.state.endDate,r=a.state.pointsOfInterest;e.preventDefault(),b.a.put("".concat(f.baseUrl,"/api/trips/").concat(a.props.theTrip._id),{destination:t,startDate:n,endDate:l,pointsOfInterest:r},{withCredentials:!0}).then(function(){a.props.getTheTrip()}).catch(function(e){return console.log(e)})},a.handleChangeDestination=function(e){a.setState({destination:e.target.value})},a.handleStartDateChange=function(e){a.setState({startDate:e})},a.handleEndDateChange=function(e){a.setState({endDate:e})},a.handleChangePoints=function(e){a.setState({pointsOfInterest:e.target.value})},a.state={destination:a.props.theTrip.destination,startDate:a.props.theTrip.startDate,endDate:a.props.theTrip.endDate,pointsOfInterest:a.props.theTrip.pointsOfInterest},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"main-w3layouts wrapper"},l.a.createElement("div",{class:"small-agileinfo"},l.a.createElement("div",{class:"agileits-extra"},l.a.createElement("h3",null,"Edit Trip"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Destination:"),l.a.createElement("input",{type:"text",name:"destination",value:this.state.destination,onChange:function(t){return e.handleChangeDestination(t)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Start Date:"),l.a.createElement("br",null),l.a.createElement(N.a,{dateFormat:"dd/MM/yyyy",minDate:new Date,className:"btn-block",selected:this.state.startDate,onChange:this.handleStartDateChange}),l.a.createElement("br",null),l.a.createElement("label",null,"End Date:"),l.a.createElement("br",null),l.a.createElement(N.a,{dateFormat:"dd/MM/yyyy",minDate:new Date(this.state.startDate),className:"btn-block",selected:this.state.endDate,onChange:this.handleEndDateChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Points of Interest:"),l.a.createElement("br",null),l.a.createElement("textarea",{type:"text",className:"strong-text",name:"pointsOfInterest",value:this.state.pointsOfInterest,onChange:function(t){return e.handleChangePoints(t)}}),l.a.createElement("input",{type:"submit",value:"Submit"}),l.a.createElement(E.a,{to:"/trips"},"Back to trips")))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.getSingleTrip()},a.getSingleTrip=function(){var e=a.props.match.params;b.a.get("".concat(f.baseUrl,"/api/trips/").concat(e.id),{withCredentials:!0}).then(function(e){var t=e.data;a.setState({trip:t})}).catch(function(e){console.log(e)})},a.renderEditForm=function(){if(a.state.trip.destination)return l.a.createElement(D,{theTrip:a.state.trip,getTheTrip:a.getSingleTrip});a.getSingleTrip()},a.deleteTrip=function(e){var t=a.props.match.params;b.a.delete("".concat(f.baseUrl,"/api/trips/").concat(t.id),{withCredentials:!0}).then(function(e){a.props.history.push("/trips")}).catch(function(e){console.log(e)})},a.removeTrip=function(e){b.a.put("".concat(f.baseUrl,"/api/profile/").concat(a.props.loggedInUser._id),{withCredentials:!0,trip:a.state.trip}).then(function(e){a.props.history.push("/trips")}).catch(function(e){console.log(e),a.props.history.push("/trips")})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(v.a)({},n,l))},a.sendmessage=function(){b.a.post("".concat(f.baseUrl,"/api/send-email"),{email:a.state.trip.owner.email,subject:a.state.subject,message:a.state.message,replyto:a.props.loggedInUser.email})},a.ownershipCheck=function(e){return a.props.loggedInUser&&e.owner&&e.owner._id===a.props.loggedInUser._id?l.a.createElement("div",null,l.a.createElement("div",null,a.renderEditForm()," "),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return a.deleteTrip(a.state.trip._id)}},"Delete this trip")):l.a.createElement("div",null,l.a.createElement("h4",null,"Contact your travel buddy:"),a.state.trip.owner?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-w3layouts wrapper"},l.a.createElement("div",{class:"small-agileinfo"},l.a.createElement("div",{class:"agileits-extra"},l.a.createElement("form",{onSubmit:a.sendmessage},l.a.createElement("br",null),l.a.createElement("label",null,"Subject"),l.a.createElement("input",{type:"text",name:"subject",value:a.state.subject,onChange:function(e){return a.handleChange(e)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Message"),l.a.createElement("textarea",{type:"text",name:"message",value:a.state.message,onChange:function(e){return a.handleChange(e)}}),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement(E.a,{to:"/trips"},"Back to trips")))),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return a.removeTrip(a.state.trip._id)}},"Remove this trip"),l.a.createElement("br",null)):l.a.createElement("p",null,"Loading"))},a.state={trip:{},subject:"",message:"",replyto:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=new Date(this.state.trip.startDate),t=e.getDate(),a=e.getMonth(),n=e.getFullYear(),r="".concat(t,"/").concat(a+1,"/").concat(n),s=new Date(this.state.trip.endDate),c=s.getDate(),i=s.getMonth(),o=s.getFullYear(),m="".concat(c,"/").concat(i+1,"/").concat(o);return l.a.createElement("div",null,l.a.createElement("h1",{className:"black"},this.state.trip.destination),l.a.createElement("p",null,"From: ",r),l.a.createElement("p",null,"To: ",m),l.a.createElement("p",null,"Attractions: ",this.state.trip.pointsOfInterest),l.a.createElement("div",null,this.ownershipCheck(this.state.trip)))}}]),t}(n.Component),I=b.a.create({baseURL:"production"===f.environment?"/api":"http://localhost:5000/api",withCredentials:!0}),T=function(e){if(e.response&&e.response.data)throw e.response.data.message;throw e},F={signup:function(e){var t=new FormData;return t.append("firstName",e.firstName),t.append("lastName",e.lastName),t.append("email",e.email),t.append("about",e.about),t.append("password",e.password),t.append("avatarUrl",e.avatarUrl),I.post("".concat(f.baseUrl,"/api/signup"),t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data}).catch(T)}},A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){var t=Object(d.a)(Object(d.a)(a));e.preventDefault(),F.signup({firstName:a.state.firstName,lastName:a.state.lastName,email:a.state.email,about:a.state.about,password:a.state.password,avatarUrl:a.state.avatarUrl}).then(function(){t.props.loginUser()})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(v.a)({},n,l))},a.state={firstName:"",lastName:"",email:"",about:"",password:"",avatarUrl:null},a.service=new O,a.handleFormSubmit=a.handleFormSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleAvatarChange",value:function(e){this.setState({avatarUrl:e.target.files[0]})}},{key:"render",value:function(){var e=this;return l.a.createElement("header",{className:"masthead text-white text-center reduce-padding"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"main-w3layouts wrapper"},l.a.createElement("h2",null,"SingUp and start exploring!"),l.a.createElement("div",{class:"main-agileinfo"},l.a.createElement("div",{class:"agileits-top"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null),l.a.createElement("input",{className:"text",type:"text",name:"firstName",value:this.state.firstName,placeholder:"Name",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null),l.a.createElement("input",{className:"text",type:"text",name:"lastName",value:this.state.lastName,placeholder:"Surname",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null),l.a.createElement("input",{className:"text email",type:"text",name:"email",value:this.state.email,placeholder:"Email",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null),l.a.createElement("textarea",{className:"text",type:"text",name:"about",value:this.state.about,placeholder:"Tell us more about you",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null),l.a.createElement("input",{className:"text",name:"password",type:"password",value:this.state.password,placeholder:"Password",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Upload picture:"),l.a.createElement("input",{name:"avatarUrl",type:"file",onChange:function(t){return e.handleAvatarChange(t)}}),l.a.createElement("input",{type:"submit",value:"Sign Up"})),l.a.createElement("p",{className:"link-style"},"Already have account?",l.a.createElement(E.a,{className:"link-style",to:"/login"},"Login"))))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({email:"",password:""},function(){}),a.props.getUser(e)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(v.a)({},n,l))},a.state={email:"",password:""},a.service=new O,a.handleFormSubmit=a.handleFormSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("header",{className:"masthead text-white text-center"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"main-w3layouts wrapper"},l.a.createElement("div",{className:"main-agileinfo"},l.a.createElement("div",{className:"agileits-top"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null),l.a.createElement("input",{className:"text email",type:"text",name:"email",value:this.state.email,placeholder:"Email",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null),l.a.createElement("input",{className:"text",type:"password",name:"password",value:this.state.password,placeholder:"Password",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Login"})),l.a.createElement("p",null,"Don't have account?",l.a.createElement(E.a,{to:"/signup"}," Signup"))))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(v.a)({},n,l))},a.sendmessage=function(){b.a.post("".concat(f.baseUrl,"/api/send-email"),{email:"yournewtravelmates@gmail.com",subject:a.state.subject,message:a.state.message,replyto:a.state.replyto})},a.state={subject:"",message:"",replyto:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("header",{className:"masthead text-white text-center reduce-padding"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"main-w3layouts wrapper"},l.a.createElement("h2",null,"Send your message and we'll be in touch soon"),l.a.createElement("div",{class:"main-agileinfo"},l.a.createElement("div",{class:"agileits-top"},l.a.createElement("form",{onSubmit:this.sendmessage},l.a.createElement("label",null),l.a.createElement("input",{className:"text",type:"text",name:"replyto",value:this.state.replyto,placeholder:"Your Email",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",null),l.a.createElement("input",{className:"text",type:"text",name:"subject",value:this.state.subject,placeholder:"Subject",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",null),l.a.createElement("textarea",{className:"text",type:"text",name:"message",value:this.state.message,placeholder:"Message",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Submit"}))))))}}]),t}(n.Component),_=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"masthead text-white text-center"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-9 mx-auto"},l.a.createElement("h1",{className:"heading heading-correct-pronounciation"},"Find your",l.a.createElement("em",null,"Travel Mate"),"Happiness is better when shared")),l.a.createElement("div",{className:"col-md-10 col-lg-8 col-xl-7 mx-auto"},l.a.createElement("p",{className:"list-style"},l.a.createElement(E.a,{className:"btn btn-primary",to:"/signup"},"Sign Up")))))),l.a.createElement(j.a,{id:"section1"},l.a.createElement("section",{className:"features-icons bg-light text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3"},l.a.createElement("div",{className:"features-icons-icon d-flex"},l.a.createElement("i",{className:"icon-globe-alt m-auto text-primary"})),l.a.createElement("h3",null,"Add Your Trips"),l.a.createElement("p",{className:"lead mb-0"},"Create your trips and keep track of them!"))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3"},l.a.createElement("div",{className:"features-icons-icon d-flex"},l.a.createElement("i",{className:"icon-magnifier m-auto text-primary"})),l.a.createElement("h3",null,"Search Trips"),l.a.createElement("p",{className:"lead mb-0"},"Find trips from other users and add to your list!"))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"features-icons-item mx-auto mb-0 mb-lg-3"},l.a.createElement("div",{className:"features-icons-icon d-flex"},l.a.createElement("i",{className:"icon-people m-auto text-primary"})),l.a.createElement("h3",null,"Connect"),l.a.createElement("p",{className:"lead mb-0"},"Connect to your travel buddies and define details of your trip together!")))),l.a.createElement("br",null),l.a.createElement("a",{href:"#home"},"Back to Top")))),l.a.createElement(j.a,{id:"section2"},l.a.createElement("section",{className:"testimonials text-center bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"mb-5 darker-font"},"What people are saying..."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-lg-0"},l.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/user1.jpg",alt:""}),l.a.createElement("h5",null,"Skra D."),l.a.createElement("p",{className:"font-weight-light mb-0"},'"Wow! This is amazing! Thanks so much!"'))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-lg-0"},l.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/user2.jpg",alt:""}),l.a.createElement("h5",null,"Dea K."),l.a.createElement("p",{className:"font-weight-light mb-0"},'"Travel Mate is amazing. I\'ve met the best travel buddies who are now my good friends."'))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-lg-0"},l.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/users.jpg",alt:""}),l.a.createElement("h5",null,"Amel & Lyuda"),l.a.createElement("p",{className:"font-weight-light mb-0"},'"We found more than a travel mate, we found love!"')))),l.a.createElement("br",null),l.a.createElement("a",{href:"#home"},"Back to Top")))),l.a.createElement("section",{className:"call-to-action text-white text-center"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-9 mx-auto"},l.a.createElement("h2",{className:"mb-4"},"Ready to get started? Sign up now!")),l.a.createElement("div",{className:"col-md-10 col-lg-8 col-xl-7 mx-auto"},l.a.createElement("p",{className:"list-style"},l.a.createElement(E.a,{className:"btn btn-primary",to:"/signup"},"Sign Up")))))),l.a.createElement("footer",{className:"footer bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 h-100 text-center text-lg-left my-auto"},l.a.createElement("ul",{className:"list-inline mb-2"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"/"},"About")),l.a.createElement("li",{className:"list-inline-item"},"\u22c5"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("p",{className:"list-style"},l.a.createElement(E.a,{to:"/contact"},"Contact"))),l.a.createElement("li",{className:"list-inline-item"},"\u22c5"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"/"},"Terms of Use")),l.a.createElement("li",{className:"list-inline-item"},"\u22c5"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"/"},"Privacy Policy"))),l.a.createElement("p",{className:"text-muted small mb-4 mb-lg-0"},"\xa9 Ana Kelly 2018. All Rights Reserved.")),l.a.createElement("div",{className:"col-lg-6 h-100 text-center text-lg-right my-auto"},l.a.createElement("ul",{className:"list-inline mb-0"},l.a.createElement("li",{className:"list-inline-item mr-3"},l.a.createElement("a",{href:"/"}," ",l.a.createElement("i",{className:"fab fa-facebook fa-2x fa-fw"})," ")),l.a.createElement("li",{className:"list-inline-item mr-3"},l.a.createElement("a",{href:"/"}," ",l.a.createElement("i",{className:"fab fa-instagram fa-2x fa-fw"})," ")),l.a.createElement("li",{className:"list-inline-item mr-3"},l.a.createElement("a",{href:"https://github.com/anakellyc",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github fa-2x fa-fw"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://www.linkedin.com/in/ana-kelly-campos-9a469429/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin fa-2x fa-fw"})))))))))},B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({search:e.target.value})},a.add=function(e){console.log("user",a.props);var t=e.target.attributes[1].nodeValue,n=a.props.user;b.a.post("".concat(f.baseUrl,"/api/profile/").concat(n._id),{withCredentials:!0,thisTrip:t}).then(function(e){return a.props.history.push("/trips"),e.data}).catch(function(e){a.props.history.push("/trips")})},a.componentDidMount=function(){b.a.get("".concat(f.baseUrl,"/api/search"),{withCredentials:!0}).then(function(e){a.setState({trips:e.data})})},a.state={search:"search",trips:[],tripsAdded:[]},a.add=a.add.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.trips.filter(function(t){return t.destination.toLowerCase().includes(e.state.search.toLowerCase())}),a=function(e){var t=new Date(e),a=t.getDate(),n=t.getMonth(),l=t.getFullYear();return"".concat(a,"/").concat(n+1,"/").concat(l)},n=t.map(function(t,n){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{class:"black"},t.destination),l.a.createElement("p",null,"From: ",a(t.startDate)),l.a.createElement("p",null,"To: ",a(t.endDate)),l.a.createElement("button",{className:"btn btn-sm btn-primary",thisTrip:t._id,onClick:e.add,key:n},"Add Trip"),l.a.createElement("br",null),l.a.createElement("br",null))});return l.a.createElement("div",{class:"page-wrapper bg-blue p-t-100 p-b-100 font-robo"},l.a.createElement("div",{className:"main-w3layouts wrapper"},l.a.createElement("div",{class:"extra-agileinfo"},l.a.createElement("div",{class:"agileits-extra"},l.a.createElement("h3",{className:"white-text"},"Search your next destination:"),l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"search",placeholder:this.state.search}),l.a.createElement("br",null),n))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={loggedInUser:null},a.service=new O,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(x.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"masthead2 text-white text-center"},l.a.createElement("div",null,l.a.createElement("h1",{className:"black"},"Welcome ",this.props.loggedInUser.firstName)),l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-9 mx-auto"},l.a.createElement("h1",{className:"heading heading-correct-pronounciation"},"What's your next destination?")),l.a.createElement("div",{className:"col-md-10 col-lg-8 col-xl-7 mx-auto"},l.a.createElement("p",{className:"list-style"},l.a.createElement(E.a,{className:"btn btn-primary",to:"/trips",component:w,user:this.props.loggedInUser},"Trips")),l.a.createElement("p",{className:"list-style"},l.a.createElement(E.a,{className:"btn btn-primary",to:{pathname:"/search",state:{user:this.props.loggedInUser}},render:function(t){return l.a.createElement(B,Object.assign({},t,{state:e.props.loggedInUser}))}},"Search")))))))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){var t=a.state.firstName,n=a.state.lastName,l=a.state.email,r=a.state.about,s=a.state.password;e.preventDefault(),b.a.put("".concat(f.baseUrl,"/api/profile/").concat(a.props.theUser._id),{firstName:t,lastName:n,email:l,about:r,password:s},{withCredentials:!0}).then(function(){a.props.getTheUser()}).catch(function(e){return console.log(e)})},a.handleChangefirstName=function(e){a.setState({firstName:e.target.value})},a.handleChangelastName=function(e){a.setState({lastName:e.target.value})},a.handleChangeEmail=function(e){a.setState({email:e.target.value})},a.handleChangeAbout=function(e){a.setState({about:e.target.value})},a.handleChangePass=function(e){a.setState({password:e.target.value})},a.state={firstName:a.props.theUser.firstName,lastName:a.props.theUser.lastName,email:a.props.theUser.email,about:a.props.theUser.about,password:a.props.theUser.password},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h3",null,"Edit Profile"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"firstName",value:this.state.firstName,onChange:function(t){return e.handleChangefirstName(t)}}),l.a.createElement("label",null,"Surname:"),l.a.createElement("input",{type:"text",name:"lastName",value:this.state.lastName,onChange:function(t){return e.handleChangelastName(t)}}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChangeEmail(t)}}),l.a.createElement("label",null,"About:"),l.a.createElement("input",{type:"text",name:"about",value:this.state.about,onChange:function(t){return e.handleChangeAbout(t)}}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChangePass(t)}}),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.getSingleUser()},a.getSingleUser=function(){var e=a.props.match.params;b.a.get("".concat(f.baseUrl,"/api/profile/").concat(e.id),{withCredentials:!0}).then(function(e){var t=e.data;a.setState(t)}).catch(function(e){console.log(e)})},a.renderEditForm=function(){return l.a.createElement(W,{theUser:a.props.loggedInUser,getTheUser:a.getSingleUser})},a.state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"page-wrapper bg-blue p-t-100 p-b-100 font-robo"},l.a.createElement("div",{class:"wrapper wrapper--w960"},l.a.createElement("div",{class:"card card-2"},l.a.createElement("div",{class:"card-heading"},l.a.createElement("img",{className:"img-resize img-fluid rounded-circle mb-3",src:this.props.loggedInUser.avatarUrl,alt:"avatar"}),l.a.createElement("h2",{class:"title darker-font"},this.props.loggedInUser.firstName," "),l.a.createElement("h3",{class:"title darker-font"},this.props.loggedInUser.lastName)),l.a.createElement("div",{class:"card-body"},l.a.createElement("form",{method:"POST"},l.a.createElement("div",null,l.a.createElement("p",{class:"input--style-2 input--style-3"},"Email:")),l.a.createElement("div",{class:"input-group"},l.a.createElement("p",{class:"input--style-2"},this.props.loggedInUser.email)),l.a.createElement("div",null,l.a.createElement("p",{class:"input--style-2 input--style-3"},"About me:")),l.a.createElement("div",{class:"input-group"},l.a.createElement("p",{class:"input--style-2"},this.props.loggedInUser.about)),l.a.createElement("div",{class:"p-t-30"},l.a.createElement("button",{class:"btn btn--radius btn--green",type:"submit"},l.a.createElement(E.a,{style:{textDecoration:"none"},to:"/profile"},"Back to Home"))))))))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).loginUser=function(){a.service.loggedin().then(function(e){a.setState({loggedInUser:e})}).catch(function(e){a.setState({loggedInUser:!1})})},a.getTheUser=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null},a.service=new O,a.fetchUser=a.fetchUser.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;if(this.fetchUser(),this.state.loggedInUser){var t=this.state.loggedInUser;return l.a.createElement("div",{className:"App"},l.a.createElement(S,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),l.a.createElement(p.a,null,l.a.createElement(h.a,{exact:!0,path:"/trips",component:w}),l.a.createElement(h.a,{exact:!0,path:"/search",render:function(e){return l.a.createElement(B,Object.assign({},e,{user:t}))},loggedInUser:t}),l.a.createElement(h.a,{exact:!0,path:"/trips/:id",render:function(a){return l.a.createElement(k,Object.assign({},a,{loggedInUser:t,getUser:e.getTheUser}))}})),l.a.createElement(h.a,{exact:!0,path:"/profile/:id",render:function(a){return l.a.createElement(R,Object.assign({},a,{loggedInUser:t,getUser:e.getTheUser}))}}),l.a.createElement(h.a,{exact:!0,path:"/profile",render:function(e){return l.a.createElement(L,Object.assign({},e,{loggedInUser:t}))}}))}return l.a.createElement("div",{className:"App"},l.a.createElement(S,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),l.a.createElement(p.a,null,l.a.createElement(h.a,{exact:!0,path:"/signup",render:function(){return l.a.createElement(A,{loginUser:e.loginUser,getUser:e.getTheUser})}}),l.a.createElement(h.a,{exact:!0,path:"/login",render:function(){return l.a.createElement(M,{getUser:e.getTheUser})}}),l.a.createElement(h.a,{exact:!0,path:"/contact",render:function(){return l.a.createElement(P,{getUser:e.getTheUser})}}),l.a.createElement(h.a,{exact:!0,path:"/",component:_}),l.a.createElement(_,{title:"Benefits",id:"section1"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(89);s.a.render(l.a.createElement(z.a,null,l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.10793817.chunk.js.map