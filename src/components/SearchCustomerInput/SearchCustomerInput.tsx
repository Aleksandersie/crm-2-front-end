import React, { useState } from "react";
import styles from "../MainWindow/mainWindowStyles.module.scss";
import localStyle from "./styles.module.scss";
import { useSearchCustomerQuery } from "../../RTK/userApi";
import { useAppDispatch } from "../../store/reduxHooks/reduxHooks";
import { selectedUserSlice } from "../../store/slice/selectedUserSlice";

const SearchCustomerInput = () => {
    const [searchString, setSearchString] = useState("");
    const searchData = useSearchCustomerQuery({ userName: searchString });
    const dispatch = useAppDispatch();

    async function search() {
        console.log(searchData);
        //dispatch(selectedUserSlice.actions.setSelectedUser(data));
        dispatch(
            selectedUserSlice.actions.setSelectedUser({ userName: "Test", priceCategory: "qwe" })
        );
    }

    return (
        <>
            <div className={localStyle.inputArea}>
                <input
                    type="text"
                    className={styles.searchInput}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSearchString(e.currentTarget.value)
                    }
                />
                <button onClick={() => search()}>Search</button>
            </div>
        </>
    );
};

export default SearchCustomerInput;
