import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Fonctionnement", hash: "#fonctionnement" },
  { label: "Avis", hash: "#avis" },
  { label: "Notre équipe", hash: "#equipe" },
];

function scrollToSection(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", hash);
  }
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    } else {
      navigate("/");
    }
  };

  const handleNavClick = (hash: string) => {
    if (location.pathname === "/") {
      scrollToSection(hash);
    } else {
      navigate("/", { state: { scrollTo: hash } });
    }
  };

  const handleContactClick = () => {
    if (location.pathname !== "/contact") {
      navigate("/contact");
    }
  };

  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>
      <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={onLogoClick}>
        Nora
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {NAV_ITEMS.map((item) => (
          <button key={item.hash} onClick={() => handleNavClick(item.hash)}>
            {item.label}
          </button>
        ))}
        <button onClick={handleContactClick}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;