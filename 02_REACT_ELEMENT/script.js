// React.createElement => React.createElement creates an object for us, and that object is called a React element.

// const h2 = React.createElement("h2", { className: "heading" }, "Hello React");
// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(h2);


// const container = React.createElement(
//     "div",
//     { className: "container", id: "container" },
//     React.createElement("section",
//         {},
//         React.createElement(
//             "p",
//             {},
//             "The libaray for web and native user interfaces"
//         )
//     )
// )

// const root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(container)


const container = React.createElement(
    "div",
    { className: "container", id: "container" },
    [

        React.createElement(
            "section",
            { key: 1 }, [
            React.createElement(
                "p",
                { key: 1, style: { backgroundColor: "yellow", padding: "17px", fontSize: 20 } },
                "The libary for web and native user interface"
            ),
            React.createElement(
                "img",
                {
                    key: 3,
                    style: { width: 200 },
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPLQGezkpT1ntM2T0k3TR0yY75wevMpjLKA&s"
                },),
        ]),


        React.createElement(
            "section",
            { key: 2 }, [
            React.createElement(
                "form",
                { key: 1, }, [


                React.createElement("div", { key: 1, className: "input-group" }, [
                    React.createElement(
                        "label", { key: 1, htmlFor: "username" }, "Username"),
                    React.createElement("input", { key: 2, id: "username" }),
                ]),


                React.createElement("div", { key: 2, className: "input-group" }, [
                    React.createElement(
                        "label", { key: 1, htmlFor: "password" }, "Password"),
                    React.createElement("input", { key: 2, type: "password", id: "password" }),
                ]),


            ]),

        ]),

    ])

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(container)
