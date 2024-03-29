import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="Eg: $520" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Eg: blue" />
          <label>Size</label>
          <input name="size" placeholder="size" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="category">Parent Category</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="computer">Computer</option>
            <option value="fruits">Fruits</option>
            <option value="mobiles">Mobiles</option>
            <option value="paint">Painting</option>
          </select>
          <label>Description</label>
          <textarea name="desc" rows="16" placeholder="description"></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
