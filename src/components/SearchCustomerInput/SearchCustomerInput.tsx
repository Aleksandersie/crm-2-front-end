import React, { useState } from "react";
import styles from "../MainWindow/mainWindowStyles.module.scss";
import localStyle from "./styles.module.scss";
import { ICustomerResponse, useSearchCustomerQuery } from "../../RTK/userApi";
import { useAppDispatch } from "../../store/reduxHooks/reduxHooks";
import { selectedUserSlice } from "../../store/slice/selectedUserSlice";

interface ISearchCustomerInput {
    setActive: any;
}

const SearchCustomerInput: React.FC<ISearchCustomerInput> = ({ setActive }) => {
    const [searchString, setSearchString] = useState("");
    const searchData = useSearchCustomerQuery({ userName: searchString });
    const dispatch = useAppDispatch();
    console.log("active", setActive);

    async function search() {
        console.log(searchData.data);

        //dispatch(selectedUserSlice.actions.setSelectedUser(data));
        // dispatch(
        //     selectedUserSlice.actions.setSelectedUser({ userName: "Test", priceCategory: "qwe" })
        // );
    }
    function setCurrentCustomer(user: ICustomerResponse) {
        dispatch(selectedUserSlice.actions.setSelectedUser(user));
        setActive(false);
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
                <div className={localStyle.searchResult}>
                    {searchData.data?.map((user: ICustomerResponse) => (
                        <p
                            className={localStyle.searchElement}
                            onClick={() => setCurrentCustomer(user)}
                        >
                            {user.userName}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchCustomerInput;
