import { dataLoaderFactory } from '../../../hooks/data-loader-factory';
import { loadProducts } from "../../../store/products/actions";

export const useDataLoader = dataLoaderFactory(loadProducts, state => state.products.list)
