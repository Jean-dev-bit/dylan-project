import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        René
      </div>
    <div className={styles.formContainer}>
      <form action="" className={styles.form}>
        <label>Username</label>
        <input type="text" name="username" placeholder="René" />
        <label>Email</label>
        <input type="email" name="username" placeholder="rene@gmail.com" />
        <label>Password</label>
        <input type="password" name="username"/>
        <label>Phone</label>
        <input type="phone" name="username" placeholder="(+229) 53 56 44 97" />
        <label>Address</label>
        <textarea name="address" id="address" rows="16" placeholder="Cotonou"></textarea>
        <label>Is Admin?</label>
        <select name="isAdmin" id="isAdmin">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button type="submit">Update</button>
        </form>
      </div>

    </div>
  );
};

export default SingleUserPage;
