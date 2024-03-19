const useAddToBasket = (params) => {
    const [error, isPending, productAdded] = useUnit([
        model.$error,
        model.$isPending,
        model.productAdded,
    ]);

    const addProductToBasket = useCallback(
        () => productAdded(params),
        [params],
    );

    return [
        addProductToBasket,
        isPending,
        error,
    ];
};

export default useAddToBasket;
