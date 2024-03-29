import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" required />
        <select name="cat" id="cat">
          <option value="category">Parent Category</option>
          <option value="cosmetics">Cosmetics</option>
          <option value="computer">Computer</option>
          <option value="fruits">Fruits</option>
          <option value="mobiles">Mobiles</option>
          <option value="paint">Painting</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" required />
        <input type="text" placeholder="size" name="size" required />
        <textarea name="desc" id="desc" rows="16" placeholder="desc"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
