"use client";

import ProductsPartnersSection from "@/components/ProductsPartnersSection/ProductsPartnersSection";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import styles from "./products.module.css";

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <ProductsPartnersSection />
      <FinalCTA />
    </div>
  );
}
