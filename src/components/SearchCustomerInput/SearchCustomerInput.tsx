import React, { useState } from "react";
import styles from "../MainWindow/mainWindowStyles.module.scss";
import localStyle from "./styles.module.scss";
import { ICustomerResponse, useSearchCustomerQuery } from "../../RTK/userApi";
import { useAppDispatch } from "../../store/reduxHooks/reduxHooks";
import { selectedCustomerSlice } from "../../store/slice/selectedCustomerSlice";

interface ISearchCustomerInput {
    setActive: any;
}

const SearchCustomerInput: React.FC<ISearchCustomerInput> = ({ setActive }) => {
    const [searchString, setSearchString] = useState("");
    const searchData = useSearchCustomerQuery({ customerName: searchString });
    const dispatch = useAppDispatch();
    console.log("active", setActive);

    async function search() {
        console.log(searchData.data);

        //dispatch(selectedUserSlice.actions.setSelectedUser(data));
        // dispatch(
        //     selectedUserSlice.actions.setSelectedUser({ userName: "Test", priceCategory: "qwe" })
        // );
    }
    function setCurrentCustomer(customer: ICustomerResponse) {
        dispatch(selectedCustomerSlice.actions.setSelectedCustomer(customer));
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
                    {searchData.data?.map((customer: ICustomerResponse) => (
                        <p
                            className={localStyle.searchElement}
                            onClick={() => setCurrentCustomer(customer)}
                        >
                            {customer.userName}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchCustomerInput;
