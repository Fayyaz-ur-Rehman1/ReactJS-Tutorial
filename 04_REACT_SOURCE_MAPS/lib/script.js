// const h2 = <h1>Hello React</h1>;
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(h2);

// const container = (
//     <div className="container" id="container">
//         <section>
//             <p style={{ backgroundColor: "yellow", padding: "17px", fontSize: "20px" }}>
//                 The library for web and native user interface
//             </p>
//             <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPLQGezkpT1ntM2T0k3TR0yY75wevMpjLKA&s"
//                 style={{ width: 200 }} />
//         </section>

//         <section>
//             <form>
//                 <div className="input-group"><label htmlFor="username">Username</label><input id="username" /></div>
//                 <div className="input-group"><label htmlFor="password">Password</label><input type="password" id="password" />
//                 </div>
//             </form>
//         </section>
//     </div >)

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(container);

let user = "fayyazurrehman";
let h1 = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Hello ", user), /*#__PURE__*/React.createElement("h2", null, "add the value 5 + 8 = ", 5 + 8));
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h1);
//# sourceMappingURL=script.js.map