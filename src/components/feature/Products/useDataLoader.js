import { dataLoaderFactory } from '../../../hooks/dataLoaderFactory';
import { loadProducts } from "../../../store/products/actions";

export const useDataLoader = dataLoaderFactory(loadProducts, state => state.products.list)
