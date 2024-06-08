import { stores } from "@/store/MockData/PageDataMock";

export function queryStoresByPageId(pageId: string) {
    return stores.filter(store => store.page_id === pageId);
}