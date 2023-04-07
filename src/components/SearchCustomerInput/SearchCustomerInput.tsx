import React, { useState } from "react";
import styles from "../MainWindow/mainWindowStyles.module.scss";
import localStyle from "./styles.module.scss";

const SearchCustomerInput = () => {
    const [searchString, setSearchString] = useState("");

    function search() {
        console.log(searchString);
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
