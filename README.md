# App folder 
```jsx
  // /app 
  //      /folder => route
  // /app/layout.tsx  => layout of our project homepage - component 
  // /app/page.tsx    => routing file that get loadedon layout
```

# Web Hook
  - Special functions that provides some features(state, effect, ref, context, optimization, ...)
  - function starts with `use` keyword is a hook
  - Hook can only be used in `client side component`
    - Any file that has `use client` directive at the top is a client component
  
## State Hook
  - Any data stored or created within component is a state
  ```jsx
    'use client';
    import {useState} from "react";

    //....
    const [stateName, setStateName] = useState<DataType>(defaultValue)
    
  ```

  A <------> B

  A <-------> B (2 immediate Response, hook(queue))


## Frontend Integration(API integration)
- API provide -> Application Programming Interface that connects the Frontend/ mobile application/Desktop application with the Backend(API) where data are manipulated and maintained in a relational or non-relational structure(DB).
- Packages to connect the API(BE) by the FE - `XMLHTTPRequest (XHR)` or `Axios` or `fetch`
- Frontend api connection requires Backend endpoint(urls) -> on whatever method is used to develop API 
  - API types `REST`, `SOAP`, `gRPC`, `WebSocket`, `WebHook`, `GraphQL`, `MCP` (Protocol and architecutre)
  - Traget Audience and Scope `Private Api`, `Public Api`
- Website/Web Application usages most of the time `REST`, `GraphQL`, `gRPC`, `WebSocket`, `WebHook`




# IT Company 
```txt

                      Board 
            CEO       MD        CTO
                            Departments (IT)      Product Owner/Product Manager
      Sub-Dept(FullStack) Sub-Dept(FE) Sub-Dept(BE) Sub-Dept(UI/UX) Sub-Dept(QA) Sub-Dept(Mobile App(hybrid))
        Dept Head           Dept Head     Dept Head     Dept Head           
        Team Lead 
        Senior Developers(High investment)
          S1, S2, S3
        Mid-level Developers
          M1, M2, M3
        Junior Developers (Risk) - Vibe coder With Code ()
          J1, J2, J3
        Associates Developers
        Interns Developers

```



### Axios methods 
```tsx

  axios.get('/url', options);
  axios.post('/url', data, options);
  axios.put('/url', data, options);
  axios.patch('/url', data, options);
  axios.delete('/url', options);

  // options => headers, params, cookies, config, settings, auth, abortController, ....
```