"use client";
import Link from "next/link";
import styles from "@/app/ui/dashboard/categories/categories.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import { useEffect, useState } from "react";
const CategoriesPage = () => {
  const [nomProduit, setNomProduit] = useState("");
  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");
  const [categorie, setCategorie] = useState("");
  const [lienRedirection, setLienRedirection] = useState("");

  const [informationsStockees, setInformationsStockees] = useState(() => {
    const savedInformations = localStorage.getItem("informations");
    return savedInformations ? JSON.parse(savedInformations) : [];
  });

  useEffect(() => {
    localStorage.setItem("informations", JSON.stringify(informationsStockees));
  }, [informationsStockees]);

  // Save
  const handleSave = () => {
    event.preventDefault();
    const nouvelleInformation = {
      nomProduit,
      color,
      storage,
      categorie,
      lienRedirection,
    };
    setInformationsStockees([...informationsStockees, nouvelleInformation]);

    setNomProduit("");
    setColor("");
    setStorage("");
    setCategorie("");
    setLienRedirection("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
      </div>
      <div>
        <h1 className={styles.title}>Categories</h1>
        <form action="" className={styles.form} onSubmit={handleSave}>
          <input
            type="text"
            placeholder="product name"
            value={nomProduit}
            onChange={(e) => setNomProduit(e.target.value)}
            required
          />
          <select
            name="categories"
            id="categories"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          >
            <option value="category">Parent Category</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="computer">Computer</option>
            <option value="fruits">Fruits</option>
            <option value="mobiles">Mobiles</option>
            <option value="paint">Painting</option>
          </select>
          <input
            type="text"
            placeholder="Storage (GB)"
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Color, eg: red, blue"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="links"
            placeholder="redirecting links"
            value={lienRedirection}
            onChange={(e) => setLienRedirection(e.target.value)}
          />
          <button type="reset" className={styles.btn1}>
            Cancel
          </button>
          <button type="submit" className={styles.btn2}>
            Save
          </button>
        </form>
      </div>
      {informationsStockees.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Categories name</td>
              <td>Parent Category</td>
              <td>Links</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {informationsStockees.map((info, index) => (
              <tr key={index}>
                <td>{info.nomProduit}</td>
                <td>{info.categorie}</td>
                <td>{info.lienRedirection}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="/">
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Aucune information n&apos;a été sauvegardée.</p>
      )}
      <Pagination />
    </div>
  );
};

export default CategoriesPage;
