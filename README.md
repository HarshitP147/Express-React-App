# React Express App


### This simple full stack application starter template consisting of React JS as frontend and Express JS in Backend without any Database.

It simply demonstrates on how you can send data from frontend to backend using APIs generated from both the end points.

In this example I am simply sending a form data and checks the validity whether the first name that we want is verified or not.
The form simply inputs your first name and your last name as the example and it sends the response data as per the specified name in the backend.

You are supposed to recieve three different responses depending upon whether you enter right name, wrong name or no name at all.
The first name and the last name is transferred from frontend to backend in simple JavaScript Object.

```javascript
let name = {
    'fName':'Your first from the form',
    'lName':'Your last name from the form'
};
```

This is the object that the backend recieves from the frontend.
The names in the client side is set as React JS states.

```jsx
this.state = {
    fName:'',
    lName:'',
    isPerson:'',
}
```

The variable `isPerson` is the status sent by the server to verify whether the name is matching with the backend variable ```firstName``` or not.


In package.json of the client side, the proxy is set up to ```http://localhost:5000``` which is the URL for the server side.

From this, we can directly access the backend endpoints without always specifying the entire URL.


This was an extremely simple Web-App to demonstrate on how we can send data from the client to the server and vice versa.


In case you want to use this template, simply clone this repository into your computer and change the end points as per your choice.

#### This is simply a starter template that you can refer for connectivity.

