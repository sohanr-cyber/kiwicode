import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../../styles/Admin/UserTable.module.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import PendingIcon from "@mui/icons-material/Pending";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const UserTable = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {" "}
        <div className={styles.header}>
          <div className={styles.left}>Users Information</div>
          <div className={styles.right}>
            <div className={styles.input__field}>
              <input type="text" />
              <div className={styles.icon}>
                <SearchIcon />
              </div>
            </div>
            <div className={styles.action__icon}>
              <PendingIcon />
            </div>
          </div>
        </div>
        <div className={styles.table__container}>
          <table className={styles.table}>
            <tr>
              <th style={{ minWidth: "160px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <CheckBoxOutlineBlankIcon />
                  <span>User ID</span>
                </div>
              </th>
              <th>Full Name</th>
              <th>First Name</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Joined</th>
              <th>Profession</th>
              <th>Age</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

            {[1, 2, 2, 2, 2, 4, 3, 3, 3, 3, 3, 3, 3, 33].map((item, index) => (
              <tr
                style={
                  selected.includes(index)
                    ? { background: "black", color: "white" }
                    : {}
                }
              >
                <td style={{ display: "flex", gap: "10px" }}>
                  <div
                    onClick={() =>
                      !selected.includes(index)
                        ? setSelected((prev) => [...prev, index])
                        : setSelected(selected.filter((item) => item != index))
                    }
                  >
                    {selected.includes(index) ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </div>

                  <span>u32532805328050</span>
                </td>
                <td>test user</td>
                <td>test</td>
                <td>user</td>

                <td>test@mail.com</td>

                <td>45/34532/33</td>

                <td>Developer</td>

                <td>23</td>

                <td>San Fransisco</td>
                <td>Approved</td>
                <td>
                  <div className={styles.flex}>
                    {" "}
                    <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
                    <EditIcon style={{ color: "green", cursor: "pointer" }} />
                  </div>
                </td>
              </tr>
            ))}

            
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
