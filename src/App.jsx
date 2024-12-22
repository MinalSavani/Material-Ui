import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageA from "./pages/PageA"
import './App.css';
import PageK from "./pages/PageK";
import PageJ from "./pages/PageJ";
import PageI from "./pages/PageI";
import PageL from "./pages/PageL"
import PageH from "./pages/PageH";
import PageF from './pages/PageF';
 import PageD from './pages/PageD'
 import PageE from "./pages/PageE"
import PageB from "./pages/PageB"
import PageC from "./pages/PageC"
import PageG from "./pages/PageG";
import PageM from "./pages/PageM";

export default function App() {
  return (
    <div className="app_container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageA />} />

          <Route path="/pagea" element={<PageA />} />
          <Route path="/Button" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} />
          <Route path="/paged" element={<PageD />} />      
          <Route path="/checkbox" element={<PageE />} /> 
          <Route path="floatbtn" element={<PageF/>}/> 
          <Route path="/radiogrp" element={<PageG/>}  />
          <Route path="/rating"   element={<PageH/>}/>      
          <Route path="/select"   element={<PageI/>}/>
          <Route path="/slider" element={<PageJ/>}    />  
          <Route path="/txtfield" element={<PageK/>}    />
          <Route path="/translist"  element={<PageL/>}/>  
          <Route path="/togbtn" element={<PageM/>}/>                   
        </  Routes>
      </BrowserRouter>
    </div>
  )
}
