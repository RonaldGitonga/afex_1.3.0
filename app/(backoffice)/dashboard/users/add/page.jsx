'use client'
import { addUser } from "@/app/../lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import { useState } from "react";
const AddUserPage = () => {
  const [role,setRole]=useState('Student')
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="First Name" name="firstName" required />
        <input type="text" placeholder="Last Name" name="lastName" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="Phone Number" name="phoneNumber" />

        <select name="role" id="role" onChange={event=>setRole(event.target.value)} defaultValue={'Student'}>
         
          <option value={'Admin'}>Admin</option>
          <option value={'Finance'}>Finance</option>
          <option value={'Marketing'}>Marketing</option>
          <option value={'Tutor'}>Tutor</option>
          <option value={'Student'}>Student</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="2"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
