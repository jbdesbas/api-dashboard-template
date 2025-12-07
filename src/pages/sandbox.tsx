import { Sandpack, SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react"


export const PageSandbox:React.FC = ({}) => {
 const files = {
    "/MyPage.tsx": `
    import { Dashboard } from '@geo2france/api-dashboard/dsl'
export function MyPage() {
  return (
  <Dashboard>
    <div>hello</div>
  </Dashboard>
  );
}
`,
"/App.tsx":`
import  { DashboardApp } from "@geo2france/api-dashboard";
import { MyPage } from "./MyPage"
import { ErrorBoundary } from "react-error-boundary";

function Test() {
  return (
    <div>hello</div>
  );
}


const config =  { 
    title:"Api-dashboard",
    logo:"pouette",
   routes:[
        { 
            path:"",
            element:<MyPage />,
            hidden:true,
        },]
 };

export default function App() {
  return <ErrorBoundary fallback={<div>Something went wrong</div>}><DashboardApp {...config}/></ ErrorBoundary>
};

`
,
    "/index.tsx": `
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);


root.render( <App />);
`,

"/node_modules/react-helmet-async/index.js": `export const Helmet = ({ children }) => children || null;
export const HelmetProvider = ({ children }) => children || null;
export default Helmet;`
  };
    return (<SandpackProvider
      files={files}
      template="react-ts"
      //options={{externalResources:['https://cdnjs.cloudflare.com/ajax/libs/antd/5.27.4/antd.js']}}
  customSetup={{
    dependencies: {
      "react": "18",
      "react-dom": "18",
      "@geo2france/api-dashboard": "1.15.0",
       "antd": "^5.24.3",
      "@iconify/react": "4.1.0",
      "react-router-dom": "^6.25.1",
      "@tanstack/react-query": "^5.51.14",
    "react-map-gl": "^7.1.9",
    "maplibre-gl": "^4.7.1",
    "react-error-boundary": "^6.0.0",

    },
  }}
>
  <SandpackLayout>
    <SandpackCodeEditor/>
    <SandpackPreview />
  </SandpackLayout>
</SandpackProvider>)
}
