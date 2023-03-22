import { useGetPriceQuery } from "../../RTK/priceApi";
import { useAppSelector } from "../../store/reduxHooks/reduxHooks";
import { categoryName } from "../../store/slice/orderCategorySlice";

export const usePriceSelector = () => {
    const { data } = useGetPriceQuery("");
    const { name } = useAppSelector((state) => state.selectedOrderCategoryReducer);

    switch (name) {
        case categoryName.vinyl:
            return data?.vinyl;
        case categoryName.vinylPC:
            return data?.vinylPC;
    }
};
