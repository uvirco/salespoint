import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // make sure the path is correct
import ProductsPage from "./pages/reports/products"
import "./App.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";
import MainHeader from './components/MainHeader'; // make sure the path is correct

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Router>
      <MainHeader />
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={!session ? <Auth /> : <Account key={session.user.id} session={session} />} />
          <Route path="/account" element={<Account key={session?.user?.id} session={session} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;