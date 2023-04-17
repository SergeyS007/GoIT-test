export const getUsers = (state) => state.users.items;

export const getIsLoading = (state) => state.users.isLoading;

export const getError = (state) => state.users.error;

export const getQuantityToLoad = (state) => state.users.quantityToLoad;

export const getStatusFilter = (state) => state.filters.status;
